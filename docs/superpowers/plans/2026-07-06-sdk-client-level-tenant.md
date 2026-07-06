# SDK Client-Level Tenant ID Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move `tenantId` from a per-call method argument to a required field on
`ServiceTitanClient`/`ServiceTitan` construction, removing it from every generated method
(see `docs/superpowers/specs/2026-07-06-sdk-client-level-tenant-design.md`).

**Architecture:** `ServiceTitanClientOptions` gains a required `tenantId: number`, stored and
exposed as a public `readonly tenantId` on `ServiceTitanClient`. The generator excludes any
path parameter named `"tenant"` from a method's function parameters, substituting
`client.tenantId` in its place when building the path. Everything downstream (tests,
examples, `scripts/live-check.ts`, README) gets updated to match.

**Tech Stack:** No new dependencies.

## Global Constraints

- This is one required-field type change with project-wide ripple — adding `tenantId` to
  `ServiceTitanClientOptions` alone breaks every existing client construction site
  immediately (compile error: missing property). There is no way to get a fully green
  `npm run typecheck` until client.ts, the generator + regenerated output, all existing
  tests, all examples, and `scripts/live-check.ts` are updated together. `npm test` (Node's
  native TS execution, which never type-checks) is unaffected by files it doesn't import —
  it's used as the interim gate in Task 1; the full `npm run typecheck` gate is deferred to
  Task 3 once every file is updated.
- Every path parameter named exactly `"tenant"` across all 563 operations in all 24 specs is
  the first path segment (verified in the design doc) — the generator can safely special-case
  it by name alone, no per-operation exceptions needed.
- `tenantId` is always `number` on the client, regardless of the one spec inconsistency
  (marketing-reputation's `reviews` operation spec-types its `tenant` param as `string`) —
  `buildPath()` already stringifies whatever it's given, so this needs no special handling.

---

### Task 1: Core client, generator, regenerate, and existing tests

**Files:**
- Modify: `src/client.ts`
- Modify: `src/client.test.ts`
- Modify: `scripts/generate-api.ts`
- Regenerate (via `npm run generate`): all `src/generated/*/api.gen.ts`,
  `src/generated/service-titan.gen.ts` (types.gen.ts files are unaffected — they come from
  `openapi-typescript`, not our custom logic)
- Modify: `src/generated/settings/api.gen.test.ts`
- Modify: `src/generated/crm/api.gen.test.ts`
- Modify: `src/generated/inventory/api.gen.test.ts`
- Modify: `src/generated/telecom/api.gen.test.ts`
- Modify: `src/generated/marketing-reputation/api.gen.test.ts`
- Modify: `src/generated/service-titan.gen.test.ts`

**Interfaces:**
- Produces: `ServiceTitanClientOptions.tenantId: number` (required);
  `ServiceTitanClient.tenantId: number` (public readonly field).

- [ ] **Step 1: Update `src/client.ts`**

Replace the full contents with:

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
  tenantId: number;
  environment?: Environment;
}

export class ServiceTitanClient {
  readonly tenantId: number;
  private readonly appKey: string;
  private readonly environment: Environment;
  private readonly tokenManager: TokenManager;

  constructor(options: ServiceTitanClientOptions) {
    this.tenantId = options.tenantId;
    this.appKey = options.appKey;
    this.environment = options.environment ?? "production";
    this.tokenManager = createTokenManager({
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      environment: this.environment,
    });
  }

  async requestRaw(path: string, init: RequestInit = {}): Promise<Response> {
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

    return response;
  }

  async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await this.requestRaw(path, init);

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

- [ ] **Step 2: Update `src/client.test.ts`**

Add `tenantId: 123,` to every one of the 5 `new ServiceTitanClient({...})` constructions in
this file (after `clientSecret: "secret",` and before `appKey: "app-key",`, matching the
existing field order isn't required — just add the field). None of these tests call
generated methods or reference `tenant` in a way that needs further changes — they call
`client.request()`/`client.requestRaw()` directly with literal path strings.

- [ ] **Step 3: Update `renderMethod` in `scripts/generate-api.ts`**

In the existing `renderMethod` function, replace these two lines:

```ts
  const pathArgs = op.pathParams.map((param) => `${param.name}: ${param.type}`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams.map((param) => param.name).join(", ")} }`;
```

with these three:

```ts
  const nonTenantPathParams = op.pathParams.filter((param) => param.name !== "tenant");
  const pathArgs = nonTenantPathParams.map((param) => `${param.name}: ${param.type}`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams
    .map((param) => (param.name === "tenant" ? "tenant: client.tenantId" : param.name))
    .join(", ")} }`;
```

Everything else in the function — `fullPathTemplate`, `queryType`, `queryArg`, and all the
`if (op.isRawResponse)` / `if (op.hasBody && op.hasQuery)` / etc. branches below — is
unchanged; they already only reference `pathArgs`, `pathObjectLiteral`, and `queryArg` by
name, so they work correctly with the new derivation automatically.

- [ ] **Step 4: Regenerate**

Run: `npm run generate`
Expected: `Total: 563 operations across 24 domains.`, same per-domain counts as before (this
change doesn't add/remove/skip any operation, it only changes each method's signature and
path-building).

- [ ] **Step 5: Spot-check the generated output**

Run: `grep -A2 "async getList" src/generated/settings/api.gen.ts | head -4`
Expected:
```
    async getList(query?: operations["Employees_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Employees_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
```

Run: `grep -A2 "async get(id: string)" src/generated/crm/api.gen.ts`
Expected:
```
    async get(id: string): Promise<SuccessResponse<operations["Contacts_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
```

- [ ] **Step 6: Update `src/generated/settings/api.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createSettingsApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

function stubAuthAnd(t: import("node:test").TestContext, handler: (url: string) => Response) {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return handler(url);
  });
}

function newSettingsApi() {
  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  return createSettingsApi(client);
}

test("employees.getList builds the correct URL with query params", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.getList({ page: 1, pageSize: 50 });

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees?page=1&pageSize=50",
  );
  assert.deepEqual(result, { page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
});

test("employees.get builds the correct URL with only path params", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ id: 456, name: "Jane" });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.get(456);

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees/456",
  );
  assert.deepEqual(result, { id: 456, name: "Jane" });
});

test("employees.create sends a POST with a JSON body", async (t) => {
  const calls: { url: string; method: string | undefined; body: string | undefined }[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });
    return jsonResponse({ id: 789 });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.create({ name: "New Employee" } as never);

  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, "POST");
  assert.equal(calls[0].body, JSON.stringify({ name: "New Employee" }));
  assert.deepEqual(result, { id: 789 });
});

test("intacctBusinessUnitMappings.get serializes array query params as repeated keys", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
  });

  const settings = newSettingsApi();
  await settings.intacctBusinessUnitMappings.get({
    page: 1,
    pageSize: 50,
    includeTotal: true,
    ids: [1, 2, 3],
  });

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/business-units/intacct?page=1&pageSize=50&includeTotal=true&ids=1&ids=2&ids=3",
  );
});
```

- [ ] **Step 7: Update `src/generated/crm/api.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createCrmApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("contacts.get accepts a string id and builds the correct URL", async (t) => {
  const calls: string[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return jsonResponse({ id: "abc-123", name: "Jane" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const crm = createCrmApi(client);

  const result = await crm.contacts.get("abc-123");

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/crm/v2/tenant/123/contacts/abc-123",
  );
  assert.deepEqual(result, { id: "abc-123", name: "Jane" });
});
```

- [ ] **Step 8: Update `src/generated/inventory/api.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createInventoryApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("receipts.cancelReceipts sends both a query string and a JSON body", async (t) => {
  const calls: { url: string; method: string | undefined; body: string | undefined }[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });
    return jsonResponse({ success: true });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const inventory = createInventoryApi(client);

  const result = await inventory.receipts.cancelReceipts(
    456,
    { canceledReason: { id: 1 } } as never,
    { id: 456 },
  );

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0].url,
    "https://api-integration.servicetitan.io/inventory/v2/tenant/123/receipts/456/cancellation?id=456",
  );
  assert.equal(calls[0].method, "PATCH");
  assert.equal(calls[0].body, JSON.stringify({ canceledReason: { id: 1 } }));
  assert.deepEqual(result, { success: true });
});
```

- [ ] **Step 9: Update `src/generated/telecom/api.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createTelecomApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("calls.getRecording returns the raw Response for binary audio", async (t) => {
  const audioBytes = new Uint8Array([1, 2, 3, 4]);
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(audioBytes, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/octet-stream" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getRecording(456);
  const buffer = new Uint8Array(await response.arrayBuffer());

  assert.deepEqual(buffer, audioBytes);
});

test("calls.getVoiceMail returns the raw Response for binary audio", async (t) => {
  const audioBytes = new Uint8Array([5, 6, 7, 8]);
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(audioBytes, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/octet-stream" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getVoiceMail(456);
  const buffer = new Uint8Array(await response.arrayBuffer());

  assert.deepEqual(buffer, audioBytes);
});
```

- [ ] **Step 10: Update `src/generated/marketing-reputation/api.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createMarketingReputationApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("reviews.reviews returns the raw Response and forwards query params", async (t) => {
  const calls: string[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return new Response("plain text review data", {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "text/plain" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const marketingReputation = createMarketingReputationApi(client);

  const response = await marketingReputation.reviews.reviews({ page: 1 });
  const text = await response.text();

  assert.equal(text, "plain text review data");
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/marketingreputation/v2/tenant/123/reviews?page=1",
  );
});
```

- [ ] **Step 11: Update `src/generated/service-titan.gen.test.ts`**

Replace the full contents with:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitan } from "./service-titan.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("ServiceTitan composes domains onto the shared client", async (t) => {
  const calls: string[] = [];
  let tokenFetchCount = 0;
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      tokenFetchCount += 1;
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return jsonResponse({ id: "abc-123", name: "Jane" });
  });

  const st = new ServiceTitan({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });

  const result = await st.crm.contacts.get("abc-123");

  assert.deepEqual(result, { id: "abc-123", name: "Jane" });
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/crm/v2/tenant/123/contacts/abc-123",
  );
  assert.equal(tokenFetchCount, 1);
});

test("st.client shares the same token cache as domain methods", async (t) => {
  let tokenFetchCount = 0;
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      tokenFetchCount += 1;
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return jsonResponse({ ok: true });
  });

  const st = new ServiceTitan({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });

  await st.settings.employees.getList();
  await st.client.request("/settings/v2/tenant/123/some-other-endpoint");

  assert.equal(tokenFetchCount, 1);
});
```

- [ ] **Step 12: Run the full test suite**

Run: `npm test`
Expected: `pass 33`, `fail 0` — same count as before, since this task doesn't add or remove
any test, just updates call sites. (`npm run typecheck` will still report errors in
`examples/*.ts` and `scripts/live-check.ts` at this point — expected, fixed in Task 2. Don't
run it yet as a gate for this task.)

- [ ] **Step 13: Commit**

```bash
git add src/client.ts src/client.test.ts scripts/generate-api.ts src/generated
git commit -m "feat: make tenantId a required client-level field instead of a per-call argument"
```

---

### Task 2: Examples and live-check

**Files:**
- Modify: `examples/_shared.ts`
- Modify: `examples/list-and-get-employees.ts`
- Modify: `examples/paginate-all-employees.ts`
- Modify: `examples/create-and-update-tag-type.ts`
- Modify: `examples/download-call-recording.ts`
- Modify: `examples/handle-not-found-error.ts`
- Modify: `scripts/live-check.ts`

**Interfaces:**
- Consumes: `ServiceTitanClientOptions.tenantId` (Task 1).
- Produces: `createClientFromEnv(): ServiceTitan` (from `examples/_shared.ts`) now
  internally supplies `tenantId`; the standalone `getTenantId()` export is removed.

- [ ] **Step 1: Update `examples/_shared.ts`**

Replace the full contents with:

```ts
import { ServiceTitan } from "../src/index.ts";

const REQUIRED_VARS = [
  "SERVICETITAN_CLIENT_ID",
  "SERVICETITAN_CLIENT_SECRET",
  "SERVICETITAN_APP_KEY",
  "SERVICETITAN_TENANT_ID",
] as const;

function requireEnv(name: (typeof REQUIRED_VARS)[number]): string {
  const value = process.env[name];
  if (!value) {
    console.error(
      `Missing ${name}. Copy .env.example to .env and fill in your credentials, then run ` +
        "this example with:\n  node --env-file-if-exists=.env examples/<name>.ts",
    );
    process.exit(1);
  }
  return value;
}

export function getEnvironment(): "integration" | "production" {
  return process.env.SERVICETITAN_ENVIRONMENT === "production" ? "production" : "integration";
}

export function createClientFromEnv(): ServiceTitan {
  const clientId = requireEnv("SERVICETITAN_CLIENT_ID");
  const clientSecret = requireEnv("SERVICETITAN_CLIENT_SECRET");
  const appKey = requireEnv("SERVICETITAN_APP_KEY");
  const tenantId = Number(requireEnv("SERVICETITAN_TENANT_ID"));

  return new ServiceTitan({
    clientId,
    clientSecret,
    appKey,
    tenantId,
    environment: getEnvironment(),
  });
}
```

- [ ] **Step 2: Update `examples/list-and-get-employees.ts`**

Replace the full contents with:

```ts
// Demonstrates the basic read pattern: list employees, then get one individually by id.
import { createClientFromEnv } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();

  const list = await st.settings.employees.getList({ page: 1, pageSize: 5 });
  console.log(`Found ${list.data.length} employee(s) (showing up to 5):`);
  for (const employee of list.data) {
    console.log(`  ${employee.id}: ${employee.name}`);
  }

  const first = list.data[0];
  if (!first) {
    console.log("\nNo employees to fetch individually.");
    return;
  }

  const employee = await st.settings.employees.get(first.id);
  console.log(`\nFetched employee ${employee.id} individually: ${employee.name} <${employee.email || "no email on file"}>`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 3: Update `examples/paginate-all-employees.ts`**

Replace the full contents with:

```ts
// Demonstrates looping through every page of a list endpoint until hasMore is false.
import { createClientFromEnv } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();

  let page = 1;
  let total = 0;
  let hasMore = true;

  while (hasMore) {
    const result = await st.settings.employees.getList({ page, pageSize: 50 });
    total += result.data.length;
    console.log(`Page ${page}: ${result.data.length} employee(s) (running total: ${total})`);
    hasMore = result.hasMore;
    page += 1;
  }

  console.log(`\nDone — ${total} employee(s) across ${page - 1} page(s).`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 4: Update `examples/create-and-update-tag-type.ts`**

Replace the full contents with:

```ts
// Demonstrates a write pattern: create a resource, then update it.
// Mutates real data — refuses to run against production unless explicitly allowed.
import { createClientFromEnv, getEnvironment } from "./_shared.ts";

async function main(): Promise<void> {
  const environment = getEnvironment();
  if (environment === "production" && process.env.SERVICETITAN_ALLOW_PRODUCTION_WRITES !== "true") {
    console.error(
      "Refusing to run: this example creates and updates real data. Set " +
        "SERVICETITAN_ALLOW_PRODUCTION_WRITES=true in .env if you really mean to run it " +
        "against production.",
    );
    process.exit(1);
  }

  const st = createClientFromEnv();

  const created = await st.settings.tagTypes.create({
    name: "SDK Example Tag",
    color: "#4287f5",
  });
  console.log(`Created tag type ${created.id}`);

  await st.settings.tagTypes.update(created.id, {
    name: "SDK Example Tag (updated)",
  });
  console.log(`Updated tag type ${created.id}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 5: Update `examples/download-call-recording.ts`**

Replace the full contents with:

```ts
// Demonstrates consuming a raw-response method (a non-JSON body).
// Requires SERVICETITAN_EXAMPLE_CALL_ID: a real call ID in your account with a recording
// attached. Without one, this will fail with a clean error rather than a crash.
import { writeFile } from "node:fs/promises";
import { createClientFromEnv } from "./_shared.ts";

async function main(): Promise<void> {
  const callId = process.env.SERVICETITAN_EXAMPLE_CALL_ID;
  if (!callId) {
    console.error("Set SERVICETITAN_EXAMPLE_CALL_ID in .env to a real call ID with a recording.");
    process.exit(1);
  }

  const st = createClientFromEnv();

  const response = await st.telecom.calls.getRecording(Number(callId));
  const audio = Buffer.from(await response.arrayBuffer());

  await writeFile("call-recording.mp3", audio);
  console.log(`Saved ${audio.length} bytes to call-recording.mp3`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 6: Update `examples/handle-not-found-error.ts`**

Replace the full contents with:

```ts
// Demonstrates catching ServiceTitanApiError and branching on its status code.
import { ServiceTitanApiError } from "../src/index.ts";
import { createClientFromEnv } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();

  try {
    await st.settings.employees.get(999999999);
    console.log("Unexpectedly found an employee with id 999999999.");
  } catch (error) {
    if (error instanceof ServiceTitanApiError) {
      if (error.status === 404) {
        console.log("Got the expected 404 — no employee with id 999999999.");
      } else {
        console.log(
          `Got a ServiceTitanApiError, but not the expected 404: ${error.status} ${error.statusText}`,
        );
      }
    } else {
      throw error;
    }
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 7: Update `scripts/live-check.ts`**

Replace the full contents with:

```ts
import { ServiceTitan } from "../src/index.ts";

const REQUIRED_VARS = [
  "SERVICETITAN_CLIENT_ID",
  "SERVICETITAN_CLIENT_SECRET",
  "SERVICETITAN_APP_KEY",
  "SERVICETITAN_TENANT_ID",
] as const;

function requireEnv(name: (typeof REQUIRED_VARS)[number]): string {
  const value = process.env[name];
  if (!value) {
    console.error(
      `Missing ${name}. Copy .env.example to .env and fill in your credentials, then run:\n` +
        `  npm run test:live`,
    );
    process.exit(1);
  }
  return value;
}

async function main(): Promise<void> {
  const clientId = requireEnv("SERVICETITAN_CLIENT_ID");
  const clientSecret = requireEnv("SERVICETITAN_CLIENT_SECRET");
  const appKey = requireEnv("SERVICETITAN_APP_KEY");
  const tenantId = Number(requireEnv("SERVICETITAN_TENANT_ID"));

  const environment = process.env.SERVICETITAN_ENVIRONMENT === "production" ? "production" : "integration";

  if (environment === "production") {
    console.warn("WARNING: SERVICETITAN_ENVIRONMENT=production — this will hit real production data.\n");
  }

  console.log(`Running live test against the ${environment} environment (tenant ${tenantId})...\n`);

  const st = new ServiceTitan({ clientId, clientSecret, appKey, tenantId, environment });

  const result = await st.settings.employees.getList({
    page: 1,
    pageSize: 1,
    includeTotal: true,
  });

  console.log("Success — authenticated and reached the real ServiceTitan API.");
  console.log(`Employees endpoint reports totalCount=${result.totalCount ?? "unknown"} for this tenant.`);
}

main().catch((error: unknown) => {
  console.error("Live test failed:");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 8: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output — this is the first point in this plan where the full
project-wide typecheck is expected to pass.

- [ ] **Step 9: Run the full test suite**

Run: `npm test`
Expected: `pass 33`, `fail 0`.

- [ ] **Step 10: Run the live check for real**

Run: `npm run test:live`
Expected: `Success — authenticated and reached the real ServiceTitan API.` followed by a real
`totalCount` for the tenant already configured in `.env` — confirms the whole chain (env →
client construction with tenantId → generated method with no tenant argument → real request)
works end to end, not just in unit tests.

- [ ] **Step 11: Run the read-only examples for real**

Run: `node --env-file-if-exists=.env examples/list-and-get-employees.ts`
Expected: same shape of output as before (employee list, then one fetched individually), now
without any tenant argument in the source.

Run: `node --env-file-if-exists=.env examples/paginate-all-employees.ts`
Expected: same page-by-page output as before, same total (77, if the account hasn't changed
since the last run).

Run: `node --env-file-if-exists=.env examples/handle-not-found-error.ts`
Expected: same "Got the expected 404" output as before.

- [ ] **Step 12: Commit**

```bash
git add examples scripts/live-check.ts
git commit -m "feat: update examples and live-check for client-level tenantId"
```

---

### Task 3: README and final verification

**Files:**
- Modify: `README.md`

**Interfaces:** None.

- [ ] **Step 1: Update the Quick Start section**

Replace:

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

with:

```ts
import { ServiceTitan } from "servicetitan-node";

const st = new ServiceTitan({
  clientId: process.env.SERVICETITAN_CLIENT_ID!,
  clientSecret: process.env.SERVICETITAN_CLIENT_SECRET!,
  appKey: process.env.SERVICETITAN_APP_KEY!,
  tenantId: Number(process.env.SERVICETITAN_TENANT_ID),
  environment: "integration", // or "production"
});

const contact = await st.crm.contacts.get("abc-123");

const employees = await st.settings.employees.getList({ page: 1, pageSize: 50 });
```

- [ ] **Step 2: Rewrite the "Tenant ID" section**

Replace:

```markdown
### Tenant ID

Notably absent from the config above: **tenant ID isn't a client-level setting.** A single
registered app can serve multiple ServiceTitan tenants (customer accounts), so tenant ID is
instead the first argument to nearly every method, e.g.
`st.crm.contacts.get(tenantId, "abc-123")`. You'll find it in the ServiceTitan UI (or wherever
your integration's tenant list is managed) — it's a numeric id, not something the SDK can
infer or default.
```

with:

```markdown
### Tenant ID

`tenantId` is required when constructing `ServiceTitan` — a single instance always talks to
one tenant, and every generated method uses it automatically. You'll find your tenant ID in
the ServiceTitan UI (or wherever your integration's tenant list is managed); it's a numeric
id, not something the SDK can infer or default.
```

- [ ] **Step 3: Update the "Supported domains" section's example signatures**

Replace:

```markdown
Each domain groups its operations by resource, e.g. `st.settings.employees.getList(tenant, query?)`,
`st.settings.employees.get(tenant, id)`, `st.settings.employees.create(tenant, body)`.
```

with:

```markdown
Each domain groups its operations by resource, e.g. `st.settings.employees.getList(query?)`,
`st.settings.employees.get(id)`, `st.settings.employees.create(body)`.
```

- [ ] **Step 4: Update the "Raw responses" example**

Replace:

```ts
const response = await st.telecom.calls.getRecording(123, 456);
const audio = Buffer.from(await response.arrayBuffer());
```

with:

```ts
const response = await st.telecom.calls.getRecording(456);
const audio = Buffer.from(await response.arrayBuffer());
```

- [ ] **Step 5: Final full verification**

Run: `npm test`
Expected: `pass 33`, `fail 0`.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as previous builds.

- [ ] **Step 6: Commit**

```bash
git add README.md
git commit -m "docs: update README for client-level tenantId"
```
