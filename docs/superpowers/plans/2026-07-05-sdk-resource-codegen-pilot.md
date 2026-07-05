# Resource Codegen Pilot (Settings domain) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A generator that turns `specs/tenant-settings-v2.json` into typed, callable
methods (`createSettingsApi(client).employees.getList(...)`, etc.), proving the codegen
approach before applying it to the remaining 23 domains (sub-project 2b — see
`docs/superpowers/specs/2026-07-05-sdk-resource-codegen-pilot-design.md`).

**Architecture:** `src/generated/shared.ts` provides generic runtime helpers (`buildPath`,
`buildQueryString`) and a `SuccessResponse<Op>` type that extracts an operation's 2xx JSON
body generically. `scripts/generate-api.ts` reads the raw spec plus runs `openapi-typescript`
programmatically, emitting `src/generated/settings/types.gen.ts` (types) and
`src/generated/settings/api.gen.ts` (a `createSettingsApi(client)` factory, methods grouped by
OpenAPI tag). Generated files are committed to git like normal source.

**Tech Stack:** `openapi-typescript` (devDependency) for type generation. `node:test` +
stubbed `globalThis.fetch` for testing the generated output, same pattern as
`src/client.test.ts`. `tsc --noEmit` (new `typecheck` script) to actually verify the
generated types compile — Node's native TS execution never type-checks, so this is the only
way to catch type errors in this project.

## Global Constraints

- `ServiceTitanClient` (from sub-project 1) is **not modified** — `createSettingsApi` is a
  standalone factory: `createSettingsApi(client: ServiceTitanClient)`.
- Each domain's path prefix (e.g. `/settings/v2`) comes from the spec's `servers[0].url` and
  is baked into every generated path — `client.request()`'s signature is unchanged.
- Operations with both query params and a request body are unsupported by this generator —
  the generator must throw a clear error if it encounters one (none exist in
  `tenant-settings-v2.json`, so this pilot won't hit it, but the check must exist so it fails
  loudly rather than emitting wrong code, if 2b ever reuses this generator on a domain that
  has one before extending it).
- Array-valued query params serialize as repeated keys (`?ids=1&ids=2`) — OpenAPI's default,
  unverified against a live account (documented limitation, not a bug to fix in this plan).
- `SuccessResponse<Op>` resolves 200 → 201 → 204 (`void`) → `never`, in that order.
- Generated files start with the header comment
  `// AUTO-GENERATED — do not edit by hand. Run \`npm run generate\` to regenerate.`
- `openapi-typescript` is a devDependency only (dev-time codegen tool, not a runtime
  dependency of the published package).

---

### Task 1: Shared runtime helpers

**Files:**
- Modify: `package.json` (add `typecheck` script)
- Create: `src/generated/shared.ts`
- Create: `src/generated/shared.test.ts`

**Interfaces:**
- Produces:
  - `function buildPath(template: string, params: Record<string, string | number>): string`
  - `function buildQueryString(query: Record<string, unknown> | undefined): string`
  - `type SuccessResponse<Op>` (generic type, not a runtime value)

- [ ] **Step 1: Add a `typecheck` script**

In `package.json`, add `"typecheck": "tsc --noEmit"` to the `scripts` object (alongside
`download-specs`, `build`, `test`).

- [ ] **Step 2: Run it to confirm the existing codebase type-checks cleanly**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 3: Write the failing tests**

Create `src/generated/shared.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPath, buildQueryString } from "./shared.ts";

test("buildPath substitutes path parameters", () => {
  const result = buildPath("/settings/v2/tenant/{tenant}/employees/{id}", {
    tenant: 123,
    id: 456,
  });

  assert.equal(result, "/settings/v2/tenant/123/employees/456");
});

test("buildPath throws when a parameter is missing", () => {
  assert.throws(
    () => buildPath("/settings/v2/tenant/{tenant}/employees/{id}", { tenant: 123 }),
    /Missing path parameter "id"/,
  );
});

test("buildQueryString returns an empty string for undefined input", () => {
  assert.equal(buildQueryString(undefined), "");
});

test("buildQueryString skips undefined values and serializes primitives", () => {
  const result = buildQueryString({ page: 1, pageSize: undefined, name: "smith" });

  assert.equal(result, "?page=1&name=smith");
});

test("buildQueryString serializes array values as repeated keys", () => {
  const result = buildQueryString({ ids: [1, 2, 3] });

  assert.equal(result, "?ids=1&ids=2&ids=3");
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `node --test src/generated/shared.test.ts`
Expected: FAIL — cannot find module `./shared.ts`.

- [ ] **Step 5: Implement `src/generated/shared.ts`**

```ts
export function buildPath(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => {
    const value = params[key];
    if (value === undefined) {
      throw new Error(`Missing path parameter "${key}" for template "${template}"`);
    }
    return encodeURIComponent(String(value));
  });
}

export function buildQueryString(query: Record<string, unknown> | undefined): string {
  if (!query) {
    return "";
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        params.append(key, String(item));
      }
    } else {
      params.append(key, String(value));
    }
  }

  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
}

export type SuccessResponse<Op> = Op extends { responses: infer R }
  ? R extends { 200: { content: { "application/json": infer T } } }
    ? T
    : R extends { 201: { content: { "application/json": infer T } } }
      ? T
      : R extends { 204: unknown }
        ? void
        : never
  : never;
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `node --test src/generated/shared.test.ts`
Expected: `pass 5`, `fail 0`.

- [ ] **Step 7: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 8: Commit**

```bash
git add package.json src/generated/shared.ts src/generated/shared.test.ts
git commit -m "feat: add shared codegen runtime helpers (buildPath, buildQueryString, SuccessResponse)"
```

---

### Task 2: Generator script — build, run, and commit generated output

**Files:**
- Modify: `package.json` (add `openapi-typescript` devDependency, `generate` script)
- Create: `scripts/generate-api.ts`
- Create (generated, by running the script): `src/generated/settings/types.gen.ts`
- Create (generated, by running the script): `src/generated/settings/api.gen.ts`

**Interfaces:**
- Consumes: nothing from Task 1 directly (the generator emits code that *references*
  `buildPath`/`buildQueryString`/`SuccessResponse` by import path — it doesn't call them
  itself).
- Produces: `src/generated/settings/api.gen.ts` exporting
  `function createSettingsApi(client: ServiceTitanClient): { employees: {...}, technicians: {...}, userRoles: {...}, businessUnits: {...}, tagTypes: {...}, export: {...}, intacctBusinessUnitMappings: {...} }`.

- [ ] **Step 1: Add `openapi-typescript` and the `generate` script**

In `package.json`, add `"openapi-typescript": "^7.5.0"` to `devDependencies`, and
`"generate": "node scripts/generate-api.ts"` to `scripts`.

Run: `npm install`
Expected: exits 0.

- [ ] **Step 2: Write the generator script**

Create `scripts/generate-api.ts`:

```ts
import { mkdir, readFile, writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";
import type { OperationObject, ParameterObject } from "openapi-typescript";

const GENERATED_HEADER =
  "// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.\n\n";

interface RawSpec {
  servers: { url: string }[];
  paths: Record<string, Record<string, OperationObject>>;
}

const HTTP_METHODS = ["get", "put", "post", "delete", "patch"] as const;

function extractPathPrefix(serverUrl: string): string {
  return new URL(serverUrl).pathname.replace(/\/$/, "");
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function actionName(operationId: string): string {
  const action = operationId.includes("_")
    ? operationId.slice(operationId.indexOf("_") + 1)
    : operationId;
  return lowerFirst(action);
}

function pathParamsInOrder(path: string): string[] {
  return Array.from(path.matchAll(/\{(\w+)\}/g), (match) => match[1]);
}

interface OperationInfo {
  tag: string;
  methodName: string;
  operationId: string;
  httpMethod: (typeof HTTP_METHODS)[number];
  pathTemplate: string;
  pathParams: string[];
  hasQuery: boolean;
  queryRequired: boolean;
  hasBody: boolean;
}

function collectOperations(spec: RawSpec): OperationInfo[] {
  const operations: OperationInfo[] = [];

  for (const [pathTemplate, methods] of Object.entries(spec.paths)) {
    for (const httpMethod of HTTP_METHODS) {
      const operation = methods[httpMethod];
      if (!operation?.operationId) {
        continue;
      }

      const tag = operation.tags?.[0];
      if (!tag) {
        throw new Error(`Operation ${operation.operationId} has no tag`);
      }

      const parameters = (operation.parameters ?? []) as ParameterObject[];
      const queryParams = parameters.filter((param) => param.in === "query");
      const hasQuery = queryParams.length > 0;
      const hasBody = Boolean(operation.requestBody);

      if (hasQuery && hasBody) {
        throw new Error(
          `Operation ${operation.operationId} has both query parameters and a request ` +
            "body, which this generator does not support yet",
        );
      }

      operations.push({
        tag: lowerFirst(tag),
        methodName: actionName(operation.operationId),
        operationId: operation.operationId,
        httpMethod,
        pathTemplate,
        pathParams: pathParamsInOrder(pathTemplate),
        hasQuery,
        queryRequired: queryParams.some((param) => param.required === true),
        hasBody,
      });
    }
  }

  return operations;
}

function renderMethod(op: OperationInfo, pathPrefix: string): string {
  const fullPathTemplate = `${pathPrefix}${op.pathTemplate}`;
  const pathArgs = op.pathParams.map((param) => `${param}: number`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams.join(", ")} }`;
  const returnType = `Promise<SuccessResponse<operations["${op.operationId}"]>>`;

  if (op.hasBody) {
    const bodyType = `NonNullable<operations["${op.operationId}"]["requestBody"]>["content"]["application/json"]`;
    const args = [pathArgs, `body: ${bodyType}`].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path, {
        method: ${JSON.stringify(op.httpMethod.toUpperCase())},
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`;
  }

  if (op.hasQuery) {
    const queryType = `operations["${op.operationId}"]["parameters"]["query"]`;
    const queryArg = op.queryRequired ? `query: ${queryType}` : `query?: ${queryType}`;
    const args = [pathArgs, queryArg].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path + buildQueryString(query));
    },`;
  }

  const methodOption =
    op.httpMethod === "get" ? "" : `, { method: ${JSON.stringify(op.httpMethod.toUpperCase())} }`;
  return `    async ${op.methodName}(${pathArgs}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path${methodOption});
    },`;
}

function renderApiFile(operations: OperationInfo[], pathPrefix: string): string {
  const byTag = new Map<string, OperationInfo[]>();
  for (const op of operations) {
    const list = byTag.get(op.tag) ?? [];
    list.push(op);
    byTag.set(op.tag, list);
  }

  const tagBlocks = Array.from(byTag.entries())
    .map(([tag, ops]) => {
      const methods = ops.map((op) => renderMethod(op, pathPrefix)).join("\n");
      return `    ${tag}: {\n${methods}\n    },`;
    })
    .join("\n");

  return `${GENERATED_HEADER}import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSettingsApi(client: ServiceTitanClient) {
  return {
${tagBlocks}
  };
}
`;
}

async function main(): Promise<void> {
  const specUrl = new URL("../specs/tenant-settings-v2.json", import.meta.url);
  const raw = JSON.parse(await readFile(specUrl, "utf8")) as RawSpec;
  const pathPrefix = extractPathPrefix(raw.servers[0].url);

  const outDir = new URL("../src/generated/settings/", import.meta.url);
  await mkdir(outDir, { recursive: true });

  const ast = await openapiTS(specUrl);
  const typesContents = GENERATED_HEADER + astToString(ast);
  await writeFile(new URL("types.gen.ts", outDir), typesContents);

  const operations = collectOperations(raw);
  const apiContents = renderApiFile(operations, pathPrefix);
  await writeFile(new URL("api.gen.ts", outDir), apiContents);

  const tagCount = new Set(operations.map((op) => op.tag)).size;
  console.log(`Generated ${operations.length} operations across ${tagCount} tags.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 3: Run the generator**

Run: `npm run generate`
Expected: `Generated 22 operations across 7 tags.`

- [ ] **Step 4: Inspect the generated file count and header**

Run: `ls src/generated/settings/`
Expected: `api.gen.ts`, `types.gen.ts`

Run: `head -c 80 src/generated/settings/api.gen.ts`
Expected: starts with `// AUTO-GENERATED — do not edit by hand. Run \`npm run generate\` to regenerate.`

- [ ] **Step 5: Typecheck the generated output**

Run: `npm run typecheck`
Expected: exits 0, no output. If it fails, fix `scripts/generate-api.ts` (not the generated
files directly — they'll be overwritten) and re-run `npm run generate`.

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: same success output pattern as previous builds (`src/generated/**` isn't imported
by `src/index.ts` yet, so this just confirms the existing public build still works
unaffected).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json scripts/generate-api.ts src/generated/settings/types.gen.ts src/generated/settings/api.gen.ts
git commit -m "feat: add OpenAPI-to-typed-methods generator and generate Settings domain"
```

---

### Task 3: Tests against the generated Settings API

**Files:**
- Create: `src/generated/settings/api.gen.test.ts`

**Interfaces:**
- Consumes: `createSettingsApi` from `./api.gen.ts` (Task 2); `ServiceTitanClient` from
  `../../client.ts` (sub-project 1).

- [ ] **Step 1: Write the tests**

Create `src/generated/settings/api.gen.test.ts`:

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
  const result = await settings.employees.getList(123, { page: 1, pageSize: 50 });

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
  const result = await settings.employees.get(123, 456);

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees/456",
  );
  assert.deepEqual(result, { id: 456, name: "Jane" });
});

test("employees.create sends a POST with a JSON body", async (t) => {
  const calls: { url: string; method: string | undefined; body: string | undefined }[] = [];
  stubAuthAnd(t, () => jsonResponse({ id: 789 }));
  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });
    return jsonResponse({ id: 789 });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.create(123, { name: "New Employee" } as never);

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
  await settings.intacctBusinessUnitMappings.get(123, {
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

- [ ] **Step 2: Run the tests**

Run: `node --test src/generated/settings/api.gen.test.ts`
Expected: `pass 4`, `fail 0`. If the URL assertions don't match (e.g. query param order
differs), update the expected strings to match the actual output — `URLSearchParams`
preserves insertion order, which follows the order keys appear in the object literal passed
to each test.

- [ ] **Step 3: Run the full test suite and typecheck**

Run: `npm test`
Expected: all tests pass — 15 (sub-project 1) + 5 (`shared.test.ts`) + 4
(`api.gen.test.ts`) = `pass 24`, `fail 0`.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as before.

- [ ] **Step 4: Commit**

```bash
git add src/generated/settings/api.gen.test.ts
git commit -m "test: add tests for generated Settings API"
```
