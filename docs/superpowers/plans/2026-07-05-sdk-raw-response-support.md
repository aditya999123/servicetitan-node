# Raw Response Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix a real gap where 3 operations (binary audio downloads, one variable-content-type
endpoint) were unreachable through the SDK — add `ServiceTitanClient.requestRaw()` and
regenerate so these operations become real, callable methods returning `Promise<Response>`
(see `docs/superpowers/specs/2026-07-05-sdk-raw-response-support-design.md`).

**Architecture:** `requestRaw()` shares all of `request()`'s auth/error-handling logic but
returns the unparsed `Response`; `request<T>()` becomes a thin wrapper calling `requestRaw()`
then applying its existing 204/JSON logic. The generator's "skip" path is replaced with a
"raw response" path that emits a method calling `requestRaw()` instead of excluding the
operation.

**Tech Stack:** No new dependencies.

## Global Constraints

- `request<T>()`'s existing external behavior, signature, and tests must not change — this is
  a pure refactor for that method.
- The generator must never skip an operation for content-type reasons anymore — every
  operation produces a callable method.
- None of the 3 affected operations (`Calls_GetRecording`, `Calls_GetVoiceMail`, `reviews`)
  have a request body, so the raw-response branch doesn't need to interact with the
  query+body-combo logic — if a future domain has a raw-response operation with a body, that
  is a new gap to solve then, not now.
- README's "Escape hatch" section must be corrected — it currently claims these 3 operations
  require `st.client.request()`, which doesn't actually work for the binary ones.

---

### Task 1: `ServiceTitanClient.requestRaw()`

**Files:**
- Modify: `src/client.ts`
- Modify: `src/client.test.ts`

**Interfaces:**
- Produces: `requestRaw(path: string, init?: RequestInit): Promise<Response>` on
  `ServiceTitanClient` — same auth headers and `ServiceTitanApiError` throwing as `request()`,
  returns the unparsed `Response` on success.

- [ ] **Step 1: Write the failing tests**

Add to the end of `src/client.test.ts`:

```ts
test("requestRaw resolves the raw Response without parsing the body", async (t) => {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response("not json at all", {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "text/plain" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  const response = await client.requestRaw("/telecom/v2/tenant/123/calls/456/recording");
  const text = await response.text();

  assert.equal(text, "not json at all");
});

test("requestRaw throws ServiceTitanApiError on a non-2xx response", async (t) => {
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
    () => client.requestRaw("/telecom/v2/tenant/123/calls/456/recording"),
    (error: unknown) => {
      assert.ok(error instanceof ServiceTitanApiError);
      assert.equal((error as ServiceTitanApiError).status, 404);
      return true;
    },
  );
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test src/client.test.ts`
Expected: FAIL — `client.requestRaw is not a function`.

- [ ] **Step 3: Implement `requestRaw()` and refactor `request()`**

In `src/client.ts`, replace the existing `request<T>` method with:

```ts
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test src/client.test.ts`
Expected: `pass 5`, `fail 0` (3 existing `request()` tests unchanged + 2 new `requestRaw()`
tests).

- [ ] **Step 5: Commit**

```bash
git add src/client.ts src/client.test.ts
git commit -m "feat: add ServiceTitanClient.requestRaw() for non-JSON responses"
```

---

### Task 2: Generator — raw-response operations instead of skipped ones

**Files:**
- Modify: `scripts/generate-api.ts` (full rewrite)
- Create (regenerated, by running the script): all 24 domains' `api.gen.ts` files (only
  `telecom` and `marketing-reputation` will actually change content; the rest are
  byte-identical since they have no raw-response operations)

**Interfaces:**
- Produces: `OperationInfo.isRawResponse: boolean`; `collectOperations(spec: RawSpec): OperationInfo[]` (no longer takes a `domain` parameter or returns a `skipped` list — nothing is skipped anymore).

- [ ] **Step 1: Replace `scripts/generate-api.ts` with the updated version**

```ts
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
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

function sanitizeIdentifier(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, "");
}

function actionName(operationId: string): string {
  const action = operationId.includes("_")
    ? operationId.slice(operationId.indexOf("_") + 1)
    : operationId;
  return lowerFirst(sanitizeIdentifier(action));
}

function domainSlug(specFileName: string): string {
  return specFileName.replace(/^tenant-/, "").replace(/(-v\d+)?\.json$/, "");
}

function pascalCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function camelCase(slug: string): string {
  return lowerFirst(pascalCase(slug));
}

function pathParamNamesInOrder(path: string): string[] {
  return Array.from(path.matchAll(/\{(\w+)\}/g), (match) => match[1]);
}

interface PathParam {
  name: string;
  type: "number" | "string";
}

function collectPathParams(operation: OperationObject, pathTemplate: string): PathParam[] {
  const names = pathParamNamesInOrder(pathTemplate);
  const parameters = (operation.parameters ?? []) as ParameterObject[];
  return names.map((name) => {
    const param = parameters.find((p) => p.in === "path" && p.name === name);
    const type: PathParam["type"] = param?.schema?.type === "string" ? "string" : "number";
    return { name, type };
  });
}

function needsRawResponse(operation: OperationObject): boolean {
  const responses = operation.responses ?? {};
  const primary = responses["200"] ?? responses["201"] ?? responses["204"];
  if (!primary || !("content" in primary) || !primary.content) {
    return false;
  }
  const contentTypes = Object.keys(primary.content);
  return !(contentTypes.length === 1 && contentTypes[0] === "application/json");
}

interface OperationInfo {
  tag: string;
  methodName: string;
  operationId: string;
  httpMethod: (typeof HTTP_METHODS)[number];
  pathTemplate: string;
  pathParams: PathParam[];
  hasQuery: boolean;
  queryRequired: boolean;
  hasBody: boolean;
  isRawResponse: boolean;
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

      operations.push({
        tag: lowerFirst(sanitizeIdentifier(tag)),
        methodName: actionName(operation.operationId),
        operationId: operation.operationId,
        httpMethod,
        pathTemplate,
        pathParams: collectPathParams(operation, pathTemplate),
        hasQuery: queryParams.length > 0,
        queryRequired: queryParams.some((param) => param.required === true),
        hasBody: Boolean(operation.requestBody),
        isRawResponse: needsRawResponse(operation),
      });
    }
  }

  return operations;
}

function renderMethod(op: OperationInfo, pathPrefix: string): string {
  const fullPathTemplate = `${pathPrefix}${op.pathTemplate}`;
  const pathArgs = op.pathParams.map((param) => `${param.name}: ${param.type}`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams.map((param) => param.name).join(", ")} }`;
  const queryType = `operations["${op.operationId}"]["parameters"]["query"]`;
  const queryArg = op.queryRequired ? `query: ${queryType}` : `query?: ${queryType}`;

  if (op.isRawResponse) {
    const args = [pathArgs, op.hasQuery ? queryArg : ""].filter(Boolean).join(", ");
    const pathExpr = op.hasQuery
      ? `buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral}) + buildQueryString(query)`
      : `buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral})`;
    return `    async ${op.methodName}(${args}): Promise<Response> {
      return client.requestRaw(${pathExpr});
    },`;
  }

  const returnType = `Promise<SuccessResponse<operations["${op.operationId}"]>>`;
  const bodyType = `NonNullable<operations["${op.operationId}"]["requestBody"]>["content"]["application/json"]`;

  if (op.hasBody && op.hasQuery) {
    const args = [pathArgs, `body: ${bodyType}`, queryArg].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path + buildQueryString(query), {
        method: ${JSON.stringify(op.httpMethod.toUpperCase())},
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`;
  }

  if (op.hasBody) {
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

function renderApiFile(operations: OperationInfo[], pathPrefix: string, functionName: string): string {
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

export function ${functionName}(client: ServiceTitanClient) {
  return {
${tagBlocks}
  };
}
`;
}

interface DomainInfo {
  slug: string;
  functionName: string;
}

function renderServiceTitanFacade(domains: DomainInfo[]): string {
  const imports = domains
    .map((d) => `import { ${d.functionName} } from "./${d.slug}/api.gen.ts";`)
    .join("\n");

  const properties = domains
    .map((d) => `  readonly ${camelCase(d.slug)}: ReturnType<typeof ${d.functionName}>;`)
    .join("\n");

  const assignments = domains
    .map((d) => `    this.${camelCase(d.slug)} = ${d.functionName}(this.client);`)
    .join("\n");

  return `${GENERATED_HEADER}import { ServiceTitanClient, type ServiceTitanClientOptions } from "../client.ts";
${imports}

export class ServiceTitan {
  readonly client: ServiceTitanClient;
${properties}

  constructor(options: ServiceTitanClientOptions) {
    this.client = new ServiceTitanClient(options);
${assignments}
  }
}
`;
}

async function main(): Promise<void> {
  const specsDir = new URL("../specs/", import.meta.url);
  const specFiles = (await readdir(specsDir)).filter((name) => name.endsWith(".json")).sort();

  const domains: DomainInfo[] = [];
  let totalGenerated = 0;

  for (const specFile of specFiles) {
    const slug = domainSlug(specFile);
    const functionName = `create${pascalCase(slug)}Api`;
    domains.push({ slug, functionName });

    const specUrl = new URL(specFile, specsDir);
    const raw = JSON.parse(await readFile(specUrl, "utf8")) as RawSpec;
    const pathPrefix = extractPathPrefix(raw.servers[0].url);

    const outDir = new URL(`../src/generated/${slug}/`, import.meta.url);
    await mkdir(outDir, { recursive: true });

    const ast = await openapiTS(specUrl);
    const typesContents = GENERATED_HEADER + astToString(ast);
    await writeFile(new URL("types.gen.ts", outDir), typesContents);

    const operations = collectOperations(raw);

    const apiContents = renderApiFile(operations, pathPrefix, functionName);
    await writeFile(new URL("api.gen.ts", outDir), apiContents);

    totalGenerated += operations.length;
    console.log(`${slug}: generated ${operations.length} operations`);
  }

  const facadeContents = renderServiceTitanFacade(domains);
  await writeFile(new URL("../src/generated/service-titan.gen.ts", import.meta.url), facadeContents);

  console.log(`\nTotal: ${totalGenerated} operations across ${specFiles.length} domains.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 2: Run the generator**

Run: `npm run generate`
Expected: `telecom: generated 7 operations` (up from 5), `marketing-reputation: generated 1 operations` (up from 0), all other domains unchanged from before, and
`Total: 563 operations across 24 domains.` (up from 560) — no "Skipped" section printed at
all.

- [ ] **Step 3: Verify only telecom and marketing-reputation actually changed**

Run: `git status --short src/generated`
Expected: only `src/generated/telecom/api.gen.ts` and
`src/generated/marketing-reputation/api.gen.ts` show as modified — every other domain's
`api.gen.ts`/`types.gen.ts` and `service-titan.gen.ts` are byte-identical to before (the
generator's logic change doesn't affect operations that were never flagged raw or skipped).

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 5: Inspect the two changed files**

Run: `grep -A2 "async getRecording" src/generated/telecom/api.gen.ts`
Expected: `async getRecording(tenant: number, id: number): Promise<Response> {` followed by
`return client.requestRaw(...)`.

Run: `grep -A2 "async reviews" src/generated/marketing-reputation/api.gen.ts`
Expected: `async reviews(tenant: string, query?: ...): Promise<Response> {` followed by
`return client.requestRaw(...)`.

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-api.ts src/generated
git commit -m "feat: generate raw-response methods instead of skipping non-JSON operations"
```

---

### Task 3: Targeted tests and README correction

**Files:**
- Modify: `src/generated/telecom/api.gen.test.ts` (full rewrite — its old assertions that
  `getRecording`/`getVoiceMail` should be absent are now wrong, since Task 2 generates them)
- Create: `src/generated/marketing-reputation/api.gen.test.ts`
- Modify: `README.md`

**Interfaces:**
- Consumes: `createTelecomApi` (`.calls.getRecording`, `.calls.getVoiceMail`) and
  `createMarketingReputationApi` (`.reviews.reviews`) from Task 2's regenerated output.

- [ ] **Step 1: Replace `src/generated/telecom/api.gen.test.ts`**

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
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getRecording(123, 456);
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
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getVoiceMail(123, 456);
  const buffer = new Uint8Array(await response.arrayBuffer());

  assert.deepEqual(buffer, audioBytes);
});
```

- [ ] **Step 2: Run it**

Run: `node --test src/generated/telecom/api.gen.test.ts`
Expected: `pass 2`, `fail 0`.

- [ ] **Step 3: Create `src/generated/marketing-reputation/api.gen.test.ts`**

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
    environment: "integration",
  });
  const marketingReputation = createMarketingReputationApi(client);

  const response = await marketingReputation.reviews.reviews("123", { page: 1 });
  const text = await response.text();

  assert.equal(text, "plain text review data");
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/marketingreputation/v2/tenant/123/reviews?page=1",
  );
});
```

- [ ] **Step 4: Run it**

Run: `node --test src/generated/marketing-reputation/api.gen.test.ts`
Expected: `pass 1`, `fail 0`.

- [ ] **Step 5: Correct the README**

In `README.md`, replace the existing `### Escape hatch` section with:

```markdown
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
```

- [ ] **Step 6: Run the full test suite, typecheck, and build**

Run: `npm test`
Expected: `pass 33`, `fail 0` — 29 before this plan, +2 from Task 1's `requestRaw` tests, +1
net from telecom (1 old test removed, 2 new ones added), +1 from marketing-reputation's new
test file.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as previous builds.

- [ ] **Step 7: Commit**

```bash
git add src/generated/telecom/api.gen.test.ts src/generated/marketing-reputation/api.gen.test.ts README.md
git commit -m "test: add tests for raw-response operations and correct README escape hatch"
```
