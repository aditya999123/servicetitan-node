# Additional Test Coverage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Direct unit tests for the generator's own logic (currently zero), plus edge-case
tests for `shared.ts`'s encoding and `client.ts`'s default environment, plus a facade wiring
smoke test across all 24 domains (see
`docs/superpowers/specs/2026-07-07-additional-test-coverage-design.md`).

**Architecture:** `scripts/generate-api.ts` gets an `isMainModule` guard (matching
`download-specs.ts`'s existing pattern) so it's safely importable, plus `export` on every
function/interface the new tests need. All new generator tests use small hand-crafted
fixtures, not the real 24 specs.

**Tech Stack:** No new dependencies. Every expected string in this plan was verified by
actually running the real function against the exact fixture before being written down — not
predicted from reading the source.

## Global Constraints

- `scripts/generate-api.ts`'s behavior when run directly (`npm run generate`) must not
  change — the `isMainModule` guard and `export` additions are structural only.
- No dedicated tests for the 19 domains that currently have none — testing the generator
  directly is the chosen way to protect all 24 (per user decision in the design doc).

---

### Task 1: Make the generator importable, and test its naming/path helpers

**Files:**
- Modify: `scripts/generate-api.ts`
- Create: `scripts/generate-api.test.ts`

**Interfaces:**
- Produces (all now exported from `scripts/generate-api.ts`, no signature changes):
  `extractPathPrefix`, `sanitizeIdentifier`, `actionName`, `domainSlug`, `pascalCase`,
  `camelCase`, `pathParamNamesInOrder`.

- [ ] **Step 1: Add the `isMainModule` guard**

In `scripts/generate-api.ts`, replace the final block:

```ts
main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
```

with:

```ts
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}
```

- [ ] **Step 2: Add `export` to the naming/path helper functions**

In `scripts/generate-api.ts`, add the `export` keyword in front of each of these existing
function declarations (no other changes to their bodies):

```ts
export function extractPathPrefix(serverUrl: string): string {
export function sanitizeIdentifier(value: string): string {
export function actionName(operationId: string): string {
export function domainSlug(specFileName: string): string {
export function pascalCase(slug: string): string {
export function camelCase(slug: string): string {
export function pathParamNamesInOrder(path: string): string[] {
```

- [ ] **Step 3: Run the generator to confirm the guard doesn't break normal usage**

Run: `npm run generate`
Expected: same `Total: 563 operations across 24 domains.` output as always.

Run: `git status --short src/generated`
Expected: no output — regenerating produces byte-identical files (this task doesn't change
any generation logic, only adds `export` keywords and the run-guard).

- [ ] **Step 4: Create `scripts/generate-api.test.ts`**

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  actionName,
  camelCase,
  domainSlug,
  extractPathPrefix,
  pascalCase,
  pathParamNamesInOrder,
  sanitizeIdentifier,
} from "./generate-api.ts";

test("sanitizeIdentifier strips non-alphanumeric characters", () => {
  assert.equal(sanitizeIdentifier("Calls (Deprecated)"), "CallsDeprecated");
  assert.equal(sanitizeIdentifier("Employees"), "Employees");
});

test("actionName extracts the part after the first underscore", () => {
  assert.equal(actionName("Employees_GetList"), "getList");
});

test("actionName uses the whole operationId when there's no underscore", () => {
  assert.equal(actionName("reviews"), "reviews");
});

test("domainSlug strips the tenant- prefix and a -v{n} suffix", () => {
  assert.equal(domainSlug("tenant-customer-interactions-v2.json"), "customer-interactions");
});

test("domainSlug handles a spec file with no version suffix", () => {
  assert.equal(domainSlug("tenant-telecom.json"), "telecom");
});

test("pascalCase joins kebab-case segments with each capitalized", () => {
  assert.equal(pascalCase("customer-interactions"), "CustomerInteractions");
});

test("camelCase lower-cases only the first letter of pascalCase", () => {
  assert.equal(camelCase("customer-interactions"), "customerInteractions");
  assert.equal(camelCase("crm"), "crm");
});

test("extractPathPrefix strips the host and a trailing slash", () => {
  assert.equal(extractPathPrefix("https://api.servicetitan.io/settings/v2"), "/settings/v2");
  assert.equal(extractPathPrefix("https://api.servicetitan.io/telecom/"), "/telecom");
});

test("pathParamNamesInOrder extracts path params in template order", () => {
  assert.deepEqual(
    pathParamNamesInOrder("/tenant/{tenant}/employees/{id}"),
    ["tenant", "id"],
  );
  assert.deepEqual(pathParamNamesInOrder("/tenant/{tenant}/reviews"), ["tenant"]);
});
```

- [ ] **Step 5: Run the tests**

Run: `node --test scripts/generate-api.test.ts`
Expected: `pass 10`, `fail 0`.

- [ ] **Step 6: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 7: Commit**

```bash
git add scripts/generate-api.ts scripts/generate-api.test.ts
git commit -m "test: make generator importable and test its naming/path helpers"
```

---

### Task 2: Test `collectPathParams`, `needsRawResponse`, and `collectOperations`

**Files:**
- Modify: `scripts/generate-api.ts`
- Modify: `scripts/generate-api.test.ts`

**Interfaces:**
- Consumes: naming helpers from Task 1 (used internally by `collectOperations`, not directly
  by these tests).
- Produces (newly exported, no signature changes): `PathParam` (interface), `collectPathParams`,
  `needsRawResponse`, `RawSpec` (interface), `OperationInfo` (interface), `collectOperations`.

- [ ] **Step 1: Add `export` to the remaining collection functions/interfaces**

In `scripts/generate-api.ts`, add `export` to:

```ts
export interface RawSpec {
export interface PathParam {
export function collectPathParams(operation: OperationObject, pathTemplate: string): PathParam[] {
export function needsRawResponse(operation: OperationObject): boolean {
export interface OperationInfo {
export function collectOperations(spec: RawSpec): OperationInfo[] {
```

- [ ] **Step 2: Add the new tests to `scripts/generate-api.test.ts`**

Add this import line alongside the existing one at the top of the file:

```ts
import {
  collectOperations,
  collectPathParams,
  needsRawResponse,
  type OperationInfo,
  type RawSpec,
} from "./generate-api.ts";
```

Then add these tests to the end of the file:

```ts
test("collectPathParams extracts the type from each param's schema", () => {
  const operation = {
    parameters: [
      { name: "tenant", in: "path", schema: { type: "integer" } },
      { name: "id", in: "path", schema: { type: "string" } },
    ],
  };

  const result = collectPathParams(operation, "/tenant/{tenant}/contacts/{id}");

  assert.deepEqual(result, [
    { name: "tenant", type: "number" },
    { name: "id", type: "string" },
  ]);
});

test("collectPathParams defaults to number when a path param has no matching parameter entry", () => {
  const operation = { parameters: [] };

  const result = collectPathParams(operation, "/tenant/{tenant}/widgets/{id}");

  assert.deepEqual(result, [
    { name: "tenant", type: "number" },
    { name: "id", type: "number" },
  ]);
});

test("needsRawResponse is false for a pure application/json response", () => {
  const operation = { responses: { "200": { content: { "application/json": {} } } } };
  assert.equal(needsRawResponse(operation), false);
});

test("needsRawResponse is true for a multi-content-type response", () => {
  const operation = {
    responses: {
      "200": { content: { "text/plain": {}, "application/json": {} } },
    },
  };
  assert.equal(needsRawResponse(operation), true);
});

test("needsRawResponse is true for a binary response", () => {
  const operation = { responses: { "200": { content: { "application/octet-stream": {} } } } };
  assert.equal(needsRawResponse(operation), true);
});

test("needsRawResponse is false for a 204 with no content", () => {
  const operation = { responses: { "204": {} } };
  assert.equal(needsRawResponse(operation), false);
});

test("needsRawResponse checks 201 when there's no 200", () => {
  const operation = { responses: { "201": { content: { "application/json": {} } } } };
  assert.equal(needsRawResponse(operation), false);
});

const fixtureSpec: RawSpec = {
  servers: [{ url: "https://api.servicetitan.io/widgets/v2" }],
  paths: {
    "/tenant/{tenant}/widgets": {
      get: {
        tags: ["Widgets"],
        operationId: "Widgets_GetList",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "page", in: "query", schema: { type: "integer" } },
        ],
        responses: { "200": { content: { "application/json": {} } } },
      },
      post: {
        tags: ["Widgets"],
        operationId: "Widgets_Create",
        parameters: [{ name: "tenant", in: "path", schema: { type: "integer" } }],
        requestBody: { content: { "application/json": {} } },
        responses: { "200": { content: { "application/json": {} } } },
      },
    },
    "/tenant/{tenant}/widgets/{id}/cancellation": {
      patch: {
        tags: ["Widgets"],
        operationId: "Widgets_Cancel",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "id", in: "path", schema: { type: "integer" } },
          { name: "reason", in: "query", schema: { type: "string" } },
        ],
        requestBody: { content: { "application/json": {} } },
        responses: { "200": { content: { "application/json": {} } } },
      },
    },
    "/tenant/{tenant}/widgets/{id}/photo": {
      get: {
        tags: ["Widgets"],
        operationId: "Widgets_GetPhoto",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "id", in: "path", schema: { type: "integer" } },
        ],
        responses: { "200": { content: { "application/octet-stream": {} } } },
      },
    },
  },
} as unknown as RawSpec;

test("collectOperations extracts query-only, body-only, query+body, and raw-response operations", () => {
  const operations = collectOperations(fixtureSpec);

  assert.equal(operations.length, 4);

  const getList = operations.find((op) => op.operationId === "Widgets_GetList")!;
  assert.equal(getList.tag, "widgets");
  assert.equal(getList.methodName, "getList");
  assert.deepEqual(getList.pathParams, [{ name: "tenant", type: "number" }]);
  assert.equal(getList.hasQuery, true);
  assert.equal(getList.hasBody, false);
  assert.equal(getList.isRawResponse, false);

  const create = operations.find((op) => op.operationId === "Widgets_Create")!;
  assert.equal(create.hasQuery, false);
  assert.equal(create.hasBody, true);

  const cancel = operations.find((op) => op.operationId === "Widgets_Cancel")!;
  assert.equal(cancel.hasQuery, true);
  assert.equal(cancel.hasBody, true);
  assert.deepEqual(cancel.pathParams, [
    { name: "tenant", type: "number" },
    { name: "id", type: "number" },
  ]);

  const getPhoto = operations.find((op) => op.operationId === "Widgets_GetPhoto")!;
  assert.equal(getPhoto.isRawResponse, true);
});

test("collectOperations throws when an operation has no tag", () => {
  const badSpec = {
    servers: [{ url: "https://api.servicetitan.io/widgets/v2" }],
    paths: {
      "/tenant/{tenant}/widgets": {
        get: { operationId: "Widgets_GetList" },
      },
    },
  } as unknown as RawSpec;

  assert.throws(() => collectOperations(badSpec), /Operation Widgets_GetList has no tag/);
});
```

- [ ] **Step 3: Run the tests**

Run: `node --test scripts/generate-api.test.ts`
Expected: `pass 18`, `fail 0` (10 from Task 1 + 8 new).

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-api.ts scripts/generate-api.test.ts
git commit -m "test: add generator tests for path param collection and operation extraction"
```

---

### Task 3: Test `renderMethod`, `renderApiFile`, and `renderServiceTitanFacade`

**Files:**
- Modify: `scripts/generate-api.ts`
- Modify: `scripts/generate-api.test.ts`

**Interfaces:**
- Consumes: `OperationInfo` (Task 2).
- Produces (newly exported, no signature changes): `renderMethod`, `renderApiFile`,
  `DomainInfo` (interface), `renderServiceTitanFacade`.

- [ ] **Step 1: Add `export` to the render functions**

In `scripts/generate-api.ts`, add `export` to:

```ts
export function renderMethod(op: OperationInfo, pathPrefix: string): string {
export function renderApiFile(operations: OperationInfo[], pathPrefix: string, functionName: string): string {
export interface DomainInfo {
export function renderServiceTitanFacade(domains: DomainInfo[]): string {
```

- [ ] **Step 2: Add the render tests**

Add this import alongside the existing ones at the top of `scripts/generate-api.test.ts`:

```ts
import { renderApiFile, renderMethod, renderServiceTitanFacade } from "./generate-api.ts";
```

Then add these tests to the end of the file:

```ts
function baseOp(overrides: Partial<OperationInfo> = {}): OperationInfo {
  return {
    tag: "widgets",
    methodName: "get",
    operationId: "Widgets_Get",
    httpMethod: "get",
    pathTemplate: "/tenant/{tenant}/widgets/{id}",
    pathParams: [
      { name: "tenant", type: "number" },
      { name: "id", type: "number" },
    ],
    hasQuery: false,
    queryRequired: false,
    hasBody: false,
    isRawResponse: false,
    ...overrides,
  };
}

test("renderMethod emits a plain GET with path params only", () => {
  const result = renderMethod(baseOp(), "/widgets/v2");

  assert.equal(
    result,
    `    async get(id: number): Promise<SuccessResponse<operations["Widgets_Get"]>> {
      const path = buildPath("/widgets/v2/tenant/{tenant}/widgets/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },`,
  );
});

test("renderMethod emits a query-only GET", () => {
  const op = baseOp({
    methodName: "getList",
    operationId: "Widgets_GetList",
    pathTemplate: "/tenant/{tenant}/widgets",
    pathParams: [{ name: "tenant", type: "number" }],
    hasQuery: true,
  });

  const result = renderMethod(op, "/widgets/v2");

  assert.equal(
    result,
    `    async getList(query?: operations["Widgets_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Widgets_GetList"]>> {
      const path = buildPath("/widgets/v2/tenant/{tenant}/widgets", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },`,
  );
});

test("renderMethod makes query required when queryRequired is true", () => {
  const op = baseOp({
    methodName: "getList",
    operationId: "Widgets_GetList",
    pathTemplate: "/tenant/{tenant}/widgets",
    pathParams: [{ name: "tenant", type: "number" }],
    hasQuery: true,
    queryRequired: true,
  });

  const result = renderMethod(op, "/widgets/v2");

  assert.match(
    result,
    /^ {4}async getList\(query: operations\["Widgets_GetList"\]\["parameters"\]\["query"\]\)/,
  );
});

test("renderMethod emits a POST with a JSON body", () => {
  const op = baseOp({
    methodName: "create",
    operationId: "Widgets_Create",
    httpMethod: "post",
    pathTemplate: "/tenant/{tenant}/widgets",
    pathParams: [{ name: "tenant", type: "number" }],
    hasBody: true,
  });

  const result = renderMethod(op, "/widgets/v2");

  assert.equal(
    result,
    `    async create(body: NonNullable<operations["Widgets_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Widgets_Create"]>> {
      const path = buildPath("/widgets/v2/tenant/{tenant}/widgets", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`,
  );
});

test("renderMethod combines query and body when both are present", () => {
  const op = baseOp({
    methodName: "cancel",
    operationId: "Widgets_Cancel",
    httpMethod: "patch",
    pathTemplate: "/tenant/{tenant}/widgets/{id}/cancellation",
    pathParams: [
      { name: "tenant", type: "number" },
      { name: "id", type: "number" },
    ],
    hasBody: true,
    hasQuery: true,
  });

  const result = renderMethod(op, "/widgets/v2");

  assert.equal(
    result,
    `    async cancel(id: number, body: NonNullable<operations["Widgets_Cancel"]["requestBody"]>["content"]["application/json"], query?: operations["Widgets_Cancel"]["parameters"]["query"]): Promise<SuccessResponse<operations["Widgets_Cancel"]>> {
      const path = buildPath("/widgets/v2/tenant/{tenant}/widgets/{id}/cancellation", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`,
  );
});

test("renderMethod emits a raw-response method with query params", () => {
  const op = baseOp({
    methodName: "reviews",
    operationId: "reviews",
    pathTemplate: "/tenant/{tenant}/reviews",
    pathParams: [{ name: "tenant", type: "number" }],
    hasQuery: true,
    isRawResponse: true,
  });

  const result = renderMethod(op, "/marketingreputation/v2");

  assert.equal(
    result,
    `    async reviews(query?: operations["reviews"]["parameters"]["query"]): Promise<Response> {
      return client.requestRaw(buildPath("/marketingreputation/v2/tenant/{tenant}/reviews", { tenant: client.tenantId }) + buildQueryString(query));
    },`,
  );
});

test("renderMethod emits a raw-response method with only path params", () => {
  const op = baseOp({
    methodName: "getRecording",
    operationId: "Calls_GetRecording",
    pathTemplate: "/tenant/{tenant}/calls/{id}/recording",
    pathParams: [
      { name: "tenant", type: "number" },
      { name: "id", type: "number" },
    ],
    isRawResponse: true,
  });

  const result = renderMethod(op, "/telecom/v2");

  assert.equal(
    result,
    `    async getRecording(id: number): Promise<Response> {
      return client.requestRaw(buildPath("/telecom/v2/tenant/{tenant}/calls/{id}/recording", { tenant: client.tenantId, id }));
    },`,
  );
});

test("renderMethod adds an explicit method option for non-GET requests with no body", () => {
  const op = baseOp({
    methodName: "delete",
    operationId: "Widgets_Delete",
    httpMethod: "delete",
  });

  const result = renderMethod(op, "/widgets/v2");

  assert.equal(
    result,
    `    async delete(id: number): Promise<SuccessResponse<operations["Widgets_Delete"]>> {
      const path = buildPath("/widgets/v2/tenant/{tenant}/widgets/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },`,
  );
});

test("renderApiFile groups methods by tag and includes the standard imports", () => {
  const ops = [
    baseOp(),
    baseOp({ tag: "orders", methodName: "getList", operationId: "Orders_GetList", pathTemplate: "/tenant/{tenant}/orders", pathParams: [{ name: "tenant", type: "number" }] }),
  ];

  const result = renderApiFile(ops, "/widgets/v2", "createWidgetsApi");

  assert.match(result, /^\/\/ AUTO-GENERATED/);
  assert.match(result, /import type \{ ServiceTitanClient \} from "\.\.\/\.\.\/client\.ts";/);
  assert.match(result, /export function createWidgetsApi\(client: ServiceTitanClient\) \{/);
  assert.match(result, /{2}widgets: \{/);
  assert.match(result, /{2}orders: \{/);
});

test("renderServiceTitanFacade wires imports, properties, and constructor assignments", () => {
  const domains = [
    { slug: "crm", functionName: "createCrmApi" },
    { slug: "customer-interactions", functionName: "createCustomerInteractionsApi" },
  ];

  const result = renderServiceTitanFacade(domains);

  assert.match(result, /import \{ createCrmApi \} from "\.\/crm\/api\.gen\.ts";/);
  assert.match(
    result,
    /import \{ createCustomerInteractionsApi \} from "\.\/customer-interactions\/api\.gen\.ts";/,
  );
  assert.match(result, /readonly crm: ReturnType<typeof createCrmApi>;/);
  assert.match(
    result,
    /readonly customerInteractions: ReturnType<typeof createCustomerInteractionsApi>;/,
  );
  assert.match(result, /this\.crm = createCrmApi\(this\.client\);/);
  assert.match(
    result,
    /this\.customerInteractions = createCustomerInteractionsApi\(this\.client\);/,
  );
});
```

- [ ] **Step 3: Run the tests**

Run: `node --test scripts/generate-api.test.ts`
Expected: `pass 28`, `fail 0` (18 from Task 2 + 10 new).

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-api.ts scripts/generate-api.test.ts
git commit -m "test: add generator tests for method/file/facade rendering"
```

---

### Task 4: Edge cases in `shared.ts` and `client.ts`, and the facade smoke test

**Files:**
- Modify: `src/generated/shared.test.ts`
- Modify: `src/client.test.ts`
- Modify: `src/generated/service-titan.gen.test.ts`

**Interfaces:** None new — uses existing exports from `src/generated/shared.ts`,
`src/client.ts`, and `src/generated/service-titan.gen.ts`.

- [ ] **Step 1: Add encoding tests to `src/generated/shared.test.ts`**

Add to the end of the file:

```ts
test("buildPath percent-encodes special characters in path values", () => {
  const result = buildPath("/tenant/{tenant}/contacts/{id}", {
    tenant: 123,
    id: "abc def/ghi",
  });

  assert.equal(result, "/tenant/123/contacts/abc%20def%2Fghi");
});

test("buildQueryString encodes special characters in query values", () => {
  const result = buildQueryString({ search: "hello world & more" });

  assert.equal(result, "?search=hello+world+%26+more");
});
```

- [ ] **Step 2: Add the default-environment test to `src/client.test.ts`**

Add to the end of the file:

```ts
test("defaults to the production environment when none is specified", async (t) => {
  const calls: string[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return jsonResponse({ id: 1 });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
  });

  await client.request("/settings/v2/tenant/123/employees");

  assert.equal(calls[0], "https://api.servicetitan.io/settings/v2/tenant/123/employees");
});
```

- [ ] **Step 3: Add the facade smoke test to `src/generated/service-titan.gen.test.ts`**

Add to the end of the file:

```ts
test("all 24 domains are wired onto the ServiceTitan instance", () => {
  const st = new ServiceTitan({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });

  const domainNames = [
    "accounting",
    "crm",
    "customerInteractions",
    "dispatch",
    "equipmentSystems",
    "findings",
    "forms",
    "inventory",
    "jbce",
    "jpm",
    "marketing",
    "marketingAds",
    "marketingReputation",
    "memberships",
    "payroll",
    "pricebook",
    "reporting",
    "salestech",
    "schedulingPro",
    "serviceAgreements",
    "settings",
    "taskManagement",
    "telecom",
    "timesheets",
  ] as const;

  assert.equal(domainNames.length, 24);

  for (const name of domainNames) {
    const domain = (st as unknown as Record<string, unknown>)[name];
    assert.equal(typeof domain, "object", `${name} should be an object`);
    assert.notEqual(domain, null, `${name} should not be null`);
  }
});
```

Note: this test constructs `ServiceTitan` but never calls a method on it, so it needs no
stubbed `fetch` at all — construction alone doesn't make a network call.

- [ ] **Step 4: Run the full test suite**

Run: `npm test`
Expected: `pass 65`, `fail 0` — 33 before this plan + 28 generator tests (Tasks 1–3: 10 + 8 + 10)
+ 2 `shared.ts` edge cases + 1 `client.ts` default-environment test + 1 facade smoke test.

- [ ] **Step 5: Typecheck and build**

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as previous builds.

- [ ] **Step 6: Commit**

```bash
git add src/generated/shared.test.ts src/client.test.ts src/generated/service-titan.gen.test.ts
git commit -m "test: add encoding edge cases, default-environment test, and facade smoke test"
```
