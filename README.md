# servicetitan-node

> **Unofficial.** This is a community-maintained Node.js/TypeScript client for the
> ServiceTitan API. It is not built, endorsed, or supported by ServiceTitan, Inc.

## Install

```
npm install servicetitan-node
```

## Quick start

```ts
import { ServiceTitan } from "servicetitan-node";

const st = new ServiceTitan({
  clientId: process.env.SERVICETITAN_CLIENT_ID!,
  clientSecret: process.env.SERVICETITAN_CLIENT_SECRET!,
  appKey: process.env.SERVICETITAN_APP_KEY!,
  environment: "integration", // or "production"
});

// Tenant ID isn't part of the client config above — it's passed as the first argument to
// every call instead, since one app can serve multiple ServiceTitan tenants. See
// "Tenant ID" under Authentication below.
const tenantId = Number(process.env.SERVICETITAN_TENANT_ID);

const contact = await st.crm.contacts.get(tenantId, "abc-123");

const employees = await st.settings.employees.getList(tenantId, { page: 1, pageSize: 50 });
```

## Examples

Runnable examples live under `examples/`, using the same `.env` credentials as
`npm run test:live`:

```
node --env-file-if-exists=.env examples/<name>.ts
```

- `list-and-get-employees.ts` — list employees, then fetch one individually by id.
- `paginate-all-employees.ts` — loop through every page of a list endpoint.
- `create-and-update-tag-type.ts` — create then update a resource. Mutates real data —
  refuses to run against production unless `SERVICETITAN_ALLOW_PRODUCTION_WRITES=true` is
  also set.
- `download-call-recording.ts` — consume a raw-response method, saving binary audio to a
  file. Requires `SERVICETITAN_EXAMPLE_CALL_ID` (a real call id with a recording).
- `handle-not-found-error.ts` — catch `ServiceTitanApiError` and branch on `.status`.

## Authentication

ServiceTitan's API uses OAuth 2.0 **client credentials** grant only (no per-user login).
`ServiceTitan` handles fetching and caching access tokens for you — tokens are cached and
automatically refreshed a safety margin before their 15-minute expiry, and concurrent calls
during a refresh share a single token request instead of firing duplicates. You provide:

- `clientId` / `clientSecret` — your registered application's credentials.
- `appKey` — sent as the `ST-App-Key` header on every request.
- `environment` — `"integration"` or `"production"` (defaults to `"production"`), each with
  its own auth and API endpoints.

See ServiceTitan's own [Getting Started docs](https://developer.servicetitan.io/docs/getting-started/oauth20)
for how to register an app and obtain these values.

### Tenant ID

Notably absent from the config above: **tenant ID isn't a client-level setting.** A single
registered app can serve multiple ServiceTitan tenants (customer accounts), so tenant ID is
instead the first argument to nearly every method, e.g.
`st.crm.contacts.get(tenantId, "abc-123")`. You'll find it in the ServiceTitan UI (or wherever
your integration's tenant list is managed) — it's a numeric id, not something the SDK can
infer or default.

## Supported domains

`ServiceTitan` exposes all 24 ServiceTitan API domains as properties:

`accounting`, `crm`, `customerInteractions`, `dispatch`, `equipmentSystems`, `findings`,
`forms`, `inventory`, `jbce`, `jpm`, `marketing`, `marketingAds`, `marketingReputation`,
`memberships`, `payroll`, `pricebook`, `reporting`, `salestech`, `schedulingPro`,
`serviceAgreements`, `settings`, `taskManagement`, `telecom`, `timesheets`.

Each domain groups its operations by resource, e.g. `st.settings.employees.getList(tenant, query?)`,
`st.settings.employees.get(tenant, id)`, `st.settings.employees.create(tenant, body)`.

### Raw responses

A few operations return non-JSON bodies (binary audio downloads, or a variable content type
depending on the request) — these are still generated as real methods, but return the raw
`Response` object instead of a parsed body, since parsing assumes JSON. Consume the body
however fits:

```ts
const response = await st.telecom.calls.getRecording(123, 456);
const audio = Buffer.from(await response.arrayBuffer());
```

### Escape hatch

For any endpoint not yet covered by generated code at all (e.g. a brand-new API before the
next `npm run generate`), use the underlying client directly — `st.client.request()` for a
JSON body, or `st.client.requestRaw()` for the raw `Response`. `st.client` is the same
`ServiceTitanClient` instance backing every domain property, so it shares the same cached
token.

## Development

Requires Node 24+ (the codebase runs TypeScript natively — no build step for tests).

```
npm test          # run all tests
npm run typecheck # tsc --noEmit across the whole project
npm run build     # bundle src/index.ts to dist/ (tsup, ESM + CJS + .d.ts)
npm run generate  # regenerate src/generated/ from specs/*.json
```

The OpenAPI specs under `specs/` are fetched from ServiceTitan's developer portal via
`npm run download-specs`; `npm run generate` turns them into the typed methods under
`src/generated/`. Generated files are committed to the repo and should never be edited by
hand — re-run the generator instead.

## License

MIT
