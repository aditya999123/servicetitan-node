# SDK Core Client & Auth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A `ServiceTitanClient` class that authenticates via OAuth 2.0 client credentials and
exposes a low-level `request<T>()` method, packaged as a buildable `servicetitan-node` library
(sub-project 1 of the full SDK — see
`docs/superpowers/specs/2026-07-05-sdk-core-client-design.md`).

**Architecture:** `src/token-manager.ts` fetches and caches OAuth access tokens (client
credentials grant, 15-min expiry, 30s refresh buffer, dedup'd concurrent fetches).
`src/client.ts`'s `ServiceTitanClient` wraps it: `request()` attaches auth headers, calls
`fetch`, and throws `src/errors.ts`'s `ServiceTitanApiError` on non-2xx responses.
`src/index.ts` is the public entry point, built with `tsup` into dual ESM/CJS + `.d.ts`
output.

**Tech Stack:** Node 24 native TypeScript execution for tests (`node:test`,
`node:assert/strict`, stubbing `globalThis.fetch` — no mocking library). `tsup` for the
publish build, `typescript` as its peer dependency for `.d.ts` generation.

## Global Constraints

- Auth: OAuth 2.0 **client credentials grant only**. Token endpoints:
  `https://auth-integration.servicetitan.io/connect/token` (integration) /
  `https://auth.servicetitan.io/connect/token` (production). Request body
  `application/x-www-form-urlencoded`: `grant_type=client_credentials`, `client_id`,
  `client_secret`. Response: `{ access_token, expires_in, token_type, scope }`.
- Token caching: reuse the cached token while `Date.now() < expiresAt - 30_000` (30s safety
  buffer before real expiry); concurrent `getAccessToken()` calls during a pending fetch must
  share one in-flight request, not fire duplicates.
- Every resource request needs headers `Authorization: <access_token>` (raw token value, no
  "Bearer " prefix) and `ST-App-Key: <app_key>` — these two must always override any
  same-named headers passed by the caller.
- Resource API base URLs: `https://api-integration.servicetitan.io` (integration) /
  `https://api.servicetitan.io` (production). `environment` defaults to `"production"`.
- No retries anywhere in this sub-project (matches `download-specs.ts` precedent).
- `typescript` devDependency must be pinned to `^5.7.0` (i.e. below 6.0.0) — TypeScript 6.0.3
  changed `baseUrl` from a deprecation warning to a hard error, which breaks `tsup`'s current
  `.d.ts` bundler (verified by spiking the build; TypeScript 5.7.3 works, 6.0.3 does not).
- `package.json` stays `"private": true` — this plan does not publish to npm. That is a
  separate, explicit action for later.
- Root-level `download-specs.ts`, `download-specs.test.ts`, and `specs/` are untouched by
  this plan.

---

### Task 1: Package build scaffolding + `ServiceTitanApiError`

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`
- Create: `src/errors.ts`
- Create: `src/errors.test.ts`
- Create: `src/index.ts`

**Interfaces:**
- Produces: `export class ServiceTitanApiError extends Error` with fields `status: number`,
  `statusText: string`, `body: unknown`, constructed as
  `new ServiceTitanApiError(status, statusText, body)`.
- Produces: a working `npm run build` that emits `dist/index.js`, `dist/index.cjs`,
  `dist/index.d.ts`, `dist/index.d.cts` from `src/index.ts`.

- [ ] **Step 1: Write the failing test**

Create `src/errors.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanApiError } from "./errors.ts";

test("ServiceTitanApiError carries status, statusText, and body", () => {
  const error = new ServiceTitanApiError(404, "Not Found", { message: "missing" });

  assert.equal(error.status, 404);
  assert.equal(error.statusText, "Not Found");
  assert.deepEqual(error.body, { message: "missing" });
  assert.equal(error.message, "ServiceTitan API request failed: 404 Not Found");
  assert.ok(error instanceof Error);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test src/errors.test.ts`
Expected: FAIL — cannot find module `./errors.ts`.

- [ ] **Step 3: Implement `src/errors.ts`**

```ts
export class ServiceTitanApiError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly body: unknown;

  constructor(status: number, statusText: string, body: unknown) {
    super(`ServiceTitan API request failed: ${status} ${statusText}`);
    this.name = "ServiceTitanApiError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test src/errors.test.ts`
Expected: `pass 1`, `fail 0`.

- [ ] **Step 5: Create the public entry point**

Create `src/index.ts`:

```ts
export { ServiceTitanApiError } from "./errors.ts";
```

- [ ] **Step 6: Add build tooling to `package.json`**

Replace the full contents of `package.json` with:

```json
{
  "name": "servicetitan-node",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "download-specs": "node download-specs.ts",
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "test": "node --test"
  },
  "dependencies": {
    "yaml": "^2.5.0"
  },
  "devDependencies": {
    "@types/node": "^26.1.0",
    "tsup": "^8.5.0",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 7: Install dependencies**

Run: `npm install`
Expected: exits 0, `tsup` and `typescript` appear under `node_modules/.bin` and in
`package-lock.json`.

- [ ] **Step 8: Add `dist/` to `.gitignore`**

Append `dist/` as a new line to `.gitignore` (alongside `node_modules/` and `/specs/`).

- [ ] **Step 9: Run the build and verify output**

Run: `npm run build`
Expected: `CLI Building entry: src/index.ts`, `ESM dist/index.js`, `CJS dist/index.cjs`,
`DTS dist/index.d.ts`, `DTS dist/index.d.cts`, all reporting success, exit code 0.

Run: `ls dist`
Expected: `index.cjs`, `index.d.cts`, `index.d.ts`, `index.js`.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json .gitignore src/errors.ts src/errors.test.ts src/index.ts
git commit -m "feat: add SDK build scaffolding and ServiceTitanApiError"
```

---

### Task 2: Token manager

**Files:**
- Create: `src/token-manager.ts`
- Create: `src/token-manager.test.ts`

**Interfaces:**
- Consumes: nothing from Task 1 (independent of `errors.ts`).
- Produces:
  - `export type Environment = "integration" | "production"`
  - `export interface TokenManagerOptions { clientId: string; clientSecret: string; environment: Environment }`
  - `export interface TokenManager { getAccessToken(): Promise<string> }`
  - `export function createTokenManager(options: TokenManagerOptions): TokenManager`

- [ ] **Step 1: Write the failing tests**

Create `src/token-manager.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { createTokenManager } from "./token-manager.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("fetches once and caches the token for reuse", async (t) => {
  let callCount = 0;
  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return jsonResponse({ access_token: "token-1", expires_in: 900 });
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = await manager.getAccessToken();
  const second = await manager.getAccessToken();

  assert.equal(first, "token-1");
  assert.equal(second, "token-1");
  assert.equal(callCount, 1);
});

test("refetches once the cached token is within the expiry buffer", async (t) => {
  let callCount = 0;
  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return jsonResponse({ access_token: `token-${callCount}`, expires_in: 20 });
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = await manager.getAccessToken();
  const second = await manager.getAccessToken();

  assert.equal(first, "token-1");
  assert.equal(second, "token-2");
  assert.equal(callCount, 2);
});

test("concurrent calls during a pending fetch share the same request", async (t) => {
  let callCount = 0;
  let resolveFetch: (value: Response) => void;
  const fetchPromise = new Promise<Response>((resolve) => {
    resolveFetch = resolve;
  });

  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return fetchPromise;
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = manager.getAccessToken();
  const second = manager.getAccessToken();

  resolveFetch!(jsonResponse({ access_token: "token-1", expires_in: 900 }));

  const [firstToken, secondToken] = await Promise.all([first, second]);

  assert.equal(firstToken, "token-1");
  assert.equal(secondToken, "token-1");
  assert.equal(callCount, 1);
});

test("throws when the token endpoint responds with a non-2xx status", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    return jsonResponse(
      { error: "invalid_client" },
      { status: 401, statusText: "Unauthorized" },
    );
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  await assert.rejects(
    () => manager.getAccessToken(),
    /Failed to obtain access token: 401 Unauthorized/,
  );
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test src/token-manager.test.ts`
Expected: FAIL — cannot find module `./token-manager.ts`.

- [ ] **Step 3: Implement `src/token-manager.ts`**

```ts
export type Environment = "integration" | "production";

const AUTH_BASE_URLS: Record<Environment, string> = {
  integration: "https://auth-integration.servicetitan.io",
  production: "https://auth.servicetitan.io",
};

const TOKEN_EXPIRY_BUFFER_MS = 30_000;

export interface TokenManagerOptions {
  clientId: string;
  clientSecret: string;
  environment: Environment;
}

export interface TokenManager {
  getAccessToken(): Promise<string>;
}

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

export function createTokenManager(options: TokenManagerOptions): TokenManager {
  let cached: CachedToken | undefined;
  let pending: Promise<string> | undefined;

  async function fetchAccessToken(): Promise<string> {
    const url = `${AUTH_BASE_URLS[options.environment]}/connect/token`;
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: options.clientId,
      client_secret: options.clientSecret,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to obtain access token: ${response.status} ${response.statusText}`,
      );
    }

    const payload = (await response.json()) as { access_token: string; expires_in: number };
    cached = {
      accessToken: payload.access_token,
      expiresAt: Date.now() + payload.expires_in * 1000,
    };
    return cached.accessToken;
  }

  return {
    async getAccessToken(): Promise<string> {
      if (cached && Date.now() < cached.expiresAt - TOKEN_EXPIRY_BUFFER_MS) {
        return cached.accessToken;
      }

      if (!pending) {
        pending = fetchAccessToken().finally(() => {
          pending = undefined;
        });
      }

      return pending;
    },
  };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test src/token-manager.test.ts`
Expected: `pass 4`, `fail 0`.

- [ ] **Step 5: Commit**

```bash
git add src/token-manager.ts src/token-manager.test.ts
git commit -m "feat: add OAuth client-credentials token manager"
```

---

### Task 3: `ServiceTitanClient`, public exports, and build verification

**Files:**
- Create: `src/client.ts`
- Create: `src/client.test.ts`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `ServiceTitanApiError` (Task 1, `./errors.ts`); `createTokenManager`,
  `Environment`, `TokenManager` (Task 2, `./token-manager.ts`).
- Produces:
  - `export interface ServiceTitanClientOptions { clientId: string; clientSecret: string; appKey: string; environment?: Environment }`
  - `export class ServiceTitanClient { constructor(options: ServiceTitanClientOptions); request<T>(path: string, init?: RequestInit): Promise<T> }`

- [ ] **Step 1: Write the failing tests**

Create `src/client.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "./client.ts";
import { ServiceTitanApiError } from "./errors.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("attaches Authorization and ST-App-Key headers and resolves parsed JSON on success", async (t) => {
  const calls: { url: string; headers: Headers }[] = [];

  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, headers: new Headers(init?.headers) });
    return jsonResponse({ id: 1 });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  const result = await client.request<{ id: number }>("/settings/v2/tenant/123/employees");

  assert.deepEqual(result, { id: 1 });
  assert.equal(calls.length, 1);
  assert.equal(
    calls[0].url,
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees",
  );
  assert.equal(calls[0].headers.get("Authorization"), "test-token");
  assert.equal(calls[0].headers.get("ST-App-Key"), "app-key");
});

test("throws ServiceTitanApiError with status and parsed body on a non-2xx response", async (t) => {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return jsonResponse({ message: "not found" }, { status: 404, statusText: "Not Found" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  await assert.rejects(
    () => client.request("/settings/v2/tenant/123/employees"),
    (error: unknown) => {
      assert.ok(error instanceof ServiceTitanApiError);
      assert.equal((error as ServiceTitanApiError).status, 404);
      assert.equal((error as ServiceTitanApiError).statusText, "Not Found");
      assert.deepEqual((error as ServiceTitanApiError).body, { message: "not found" });
      return true;
    },
  );
});

test("returns undefined for a 204 No Content response", async (t) => {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(null, { status: 204, statusText: "No Content" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  const result = await client.request("/settings/v2/tenant/123/employees");

  assert.equal(result, undefined);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test src/client.test.ts`
Expected: FAIL — cannot find module `./client.ts`.

- [ ] **Step 3: Implement `src/client.ts`**

```ts
import { createTokenManager, type Environment, type TokenManager } from "./token-manager.ts";
import { ServiceTitanApiError } from "./errors.ts";

const API_BASE_URLS: Record<Environment, string> = {
  integration: "https://api-integration.servicetitan.io",
  production: "https://api.servicetitan.io",
};

export interface ServiceTitanClientOptions {
  clientId: string;
  clientSecret: string;
  appKey: string;
  environment?: Environment;
}

export class ServiceTitanClient {
  private readonly appKey: string;
  private readonly environment: Environment;
  private readonly tokenManager: TokenManager;

  constructor(options: ServiceTitanClientOptions) {
    this.appKey = options.appKey;
    this.environment = options.environment ?? "production";
    this.tokenManager = createTokenManager({
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      environment: this.environment,
    });
  }

  async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const accessToken = await this.tokenManager.getAccessToken();
    const url = `${API_BASE_URLS[this.environment]}${path}`;

    const headers = new Headers(init.headers);
    headers.set("Authorization", accessToken);
    headers.set("ST-App-Key", this.appKey);

    const response = await fetch(url, { ...init, headers });

    if (!response.ok) {
      const body = await parseBody(response);
      throw new ServiceTitanApiError(response.status, response.statusText, body);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  }
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test src/client.test.ts`
Expected: `pass 3`, `fail 0`.

- [ ] **Step 5: Update the public entry point**

Replace the contents of `src/index.ts` with:

```ts
export { ServiceTitanApiError } from "./errors.ts";
export { ServiceTitanClient } from "./client.ts";
export type { ServiceTitanClientOptions } from "./client.ts";
export type { Environment } from "./token-manager.ts";
```

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: all tests across `download-specs.test.ts`, `src/errors.test.ts`,
`src/token-manager.test.ts`, and `src/client.test.ts` pass — `pass 15`, `fail 0` (7 existing +
1 + 4 + 3 new).

- [ ] **Step 7: Rebuild and smoke-test the package output**

Run: `npm run build`
Expected: same success output as Task 1 Step 9, now bundling `client.ts` and
`token-manager.ts` too.

Run: `node -e "const m = require('./dist/index.cjs'); console.log(typeof m.ServiceTitanClient, typeof m.ServiceTitanApiError)"`
Expected: `function function`

Run: `node -e "import('./dist/index.js').then(m => console.log(typeof m.ServiceTitanClient, typeof m.ServiceTitanApiError))"`
Expected: `function function`

- [ ] **Step 8: Commit**

```bash
git add src/client.ts src/client.test.ts src/index.ts
git commit -m "feat: add ServiceTitanClient with authenticated request()"
```
