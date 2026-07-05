# servicetitan-node SDK — Core Client & Auth design

## Context

This is sub-project 1 of building a published npm SDK (`servicetitan-node`) for the
ServiceTitan API. The full SDK breaks down into independent sub-projects:

1. **Core client + auth** (this spec) — token management, request signing, error handling.
2. Resource API surface — typed methods for the 24 domains in `specs/*.json`.
3. Package structure & public exports (full multi-domain surface).
4. Testing (integration-level, beyond this spec's unit tests).
5. Docs/publish pipeline.

Only (1) is in scope here. Later sub-projects get their own spec/plan cycle.

## Goal

A `ServiceTitanClient` that handles OAuth 2.0 client-credentials authentication and issues
authenticated HTTP requests, ready for resource-specific methods (sub-project 2) to be built
on top of its `request()` method.

## Background

From `docs/superpowers/specs/...` research on ServiceTitan's getting-started docs
(`/docs/getting-started/oauth20`, `/docs/getting-started/first-api-call`):

- Auth uses OAuth 2.0 **client credentials grant** only (no user/resource-owner involved, no
  refresh tokens).
- Token endpoint: `POST https://auth-integration.servicetitan.io/connect/token` (integration)
  or `POST https://auth.servicetitan.io/connect/token` (production), body
  `application/x-www-form-urlencoded` with `grant_type=client_credentials&client_id=...&client_secret=...`.
  Response: `{ access_token, expires_in, token_type, scope }`. `expires_in` is 15 minutes
  (900s).
- Every resource API call needs two headers: `Authorization: <access_token>` (the raw token
  value, no "Bearer " prefix per ServiceTitan's own example) and `ST-App-Key: <app_key>`.
- Resource API base URLs: `https://api-integration.servicetitan.io` (integration) /
  `https://api.servicetitan.io` (production).
- Nearly every resource endpoint path includes a tenant id segment, e.g.
  `/settings/v2/tenant/{tenant}/employees` — one app can serve multiple customer tenants, so
  tenant is not a fixed client-level setting.

## Approach

### Components

- `src/token-manager.ts`
  - `createTokenManager(options: { clientId: string; clientSecret: string; environment: Environment })`
    returns `{ getAccessToken(): Promise<string> }`.
  - Caches `{ accessToken, expiresAt }` in a closure. `getAccessToken()` returns the cached
    token if `Date.now() < expiresAt - 30_000` (30s safety buffer before real expiry).
    Otherwise it fetches a new token.
  - Concurrent calls to `getAccessToken()` while a fetch is in flight share the same promise
    (stored in the closure, cleared once it settles) rather than issuing duplicate token
    requests.
- `src/errors.ts`
  - `class ServiceTitanApiError extends Error` with `status: number`, `statusText: string`,
    `body: unknown` (parsed JSON body if the response was JSON, otherwise raw text).
- `src/client.ts`
  - `type Environment = "integration" | "production"`.
  - `interface ServiceTitanClientOptions { clientId: string; clientSecret: string; appKey: string; environment?: Environment }`
    (`environment` defaults to `"production"`).
  - `class ServiceTitanClient`:
    - Constructor stores options and creates a token manager scoped to `clientId` /
      `clientSecret` / `environment`.
    - `request<T>(path: string, init?: RequestInit): Promise<T>` — resolves the API base URL
      for the configured environment, fetches `${baseUrl}${path}`, merging `init` with
      `Authorization` and `ST-App-Key` headers (these two always win over any headers passed
      in `init`). Throws `ServiceTitanApiError` for non-2xx responses. Returns the parsed JSON
      body on success. A `204 No Content` response returns `undefined`.
- `src/index.ts` — re-exports `ServiceTitanClient`, `ServiceTitanClientOptions`, `Environment`,
  `ServiceTitanApiError`.

### Data flow

```
new ServiceTitanClient({ clientId, clientSecret, appKey, environment })
  .request("/settings/v2/tenant/123/employees")
    -> tokenManager.getAccessToken()   // cached or fresh
    -> fetch(baseUrl + path, { headers: { Authorization, ST-App-Key, ...init.headers } })
    -> non-2xx? throw ServiceTitanApiError(status, statusText, body)
    -> 2xx?     return parsed JSON (or undefined for 204)
```

### Packaging

Just enough to make this buildable and importable as a package — the full multi-domain
export surface is sub-project 3's concern.

- `package.json`: `name: "servicetitan-node"`, add `main`, `module`, `types`, `exports` fields
  pointing at `dist/`, a `build` script running `tsup`, `typescript` and `tsup` as
  devDependencies.
- `tsup.config.ts` (or CLI flags): entry `src/index.ts`, `format: ["esm", "cjs"]`, `dts: true`.
- Existing root-level `download-specs.ts` / `specs/` stay as-is (dev tooling, not part of the
  published package) — not touched by this sub-project.

## Error handling

- Token fetch failure (network error or non-2xx from the token endpoint): the token manager
  throws a plain `Error` with the status/statusText — this is a setup/credentials problem,
  not a resource-API error, so it is not wrapped in `ServiceTitanApiError`.
- Resource request failure (non-2xx from `request()`): throws `ServiceTitanApiError` with the
  response status, statusText, and parsed body so callers can branch on `error.status`.
- No retries in this sub-project (matches the precedent set in `download-specs.ts`'s design —
  one-shot, no retry logic).

## Testing

Unit tests (`src/token-manager.test.ts`, `src/client.test.ts`) using `node:test` and
`node:assert/strict`, stubbing `globalThis.fetch` — no real network calls, no mocking
library. Cases:

- Token manager fetches once, caches, and reuses the token for calls within the expiry
  window.
- Token manager refetches once the cached token is within 30s of expiry.
- Concurrent `getAccessToken()` calls during a pending fetch resolve to the same token and
  only one HTTP call is made.
- `request()` attaches `Authorization` and `ST-App-Key` headers and resolves parsed JSON on a
  2xx response.
- `request()` throws `ServiceTitanApiError` with status/body on a non-2xx JSON response.
- `request()` returns `undefined` for a 204 response.
