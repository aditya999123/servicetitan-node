# Resource Codegen Rollout (all 24 domains) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generalize the Settings-only pilot generator to all 24 domains (`specs/*.json`),
fixing a path-parameter-type bug and adding query+body support the pilot never exercised (see
`docs/superpowers/specs/2026-07-05-sdk-resource-codegen-rollout-design.md`).

**Architecture:** `scripts/generate-api.ts` is rewritten to loop over every file in
`specs/`, deriving a domain slug from each filename, and for each domain emits
`src/generated/{slug}/types.gen.ts` + `src/generated/{slug}/api.gen.ts` (exporting
`create{PascalSlug}Api`). Path parameters are now typed from their real OpenAPI schema
(`string` or `number`) instead of assumed `number`. Operations with both query params and a
body are now supported (combined signature) instead of throwing. Operations whose success
response isn't pure `application/json` are skipped with a recorded reason, printed in a
summary at the end, rather than aborting the whole run.

**Tech Stack:** Same as the pilot — `openapi-typescript`, `node:test` with stubbed
`globalThis.fetch`, `tsc --noEmit` as the primary correctness gate across all generated code.

## Global Constraints

- `ServiceTitanClient` and `src/index.ts` are **not modified** — every domain's
  `create{Domain}Api` remains a standalone factory (same as the pilot).
- Domain slug = filename with `tenant-` prefix and trailing `-v\d+` stripped (e.g.
  `tenant-customer-interactions-v2.json` → `customer-interactions`, `tenant-telecom.json` →
  `telecom`).
- Path parameter types come from each parameter's `schema.type` in the raw spec:
  `"string"` → `string`, everything else (`"integer"`, `"number"`) → `number`.
- Operations with both query params and a request body get the combined signature
  `(pathParams..., body: BodyType, query?: QueryType)` — verified against the 4 real
  occurrences (CRM's `Leads_SubmitLeadForm`, Inventory's `Receipts_CancelReceipts`,
  Reporting's `ReportCategoryReports_GetData` and `ReportCategoryReports_StartGetData`), all
  of which have optional query params, so `query?:` (not required) in every case.
- An operation is skipped (not generated) when its primary success response (200, else 201,
  else 204) has `content` whose keys aren't exactly `["application/json"]`. Skipped
  operations are collected as `{ domain, operationId, reason }` and printed in a summary at
  the end of the run — the run must not throw/abort because of a skipped operation.
- `npm run typecheck` (`tsc --noEmit`) must pass with zero errors across all 24 domains'
  generated code — this is the primary correctness gate for this plan.

---

### Task 1: Rewrite the generator for all 24 domains

**Files:**
- Modify: `scripts/generate-api.ts` (full rewrite)
- Create (generated, by running the script): `src/generated/{slug}/types.gen.ts` and
  `src/generated/{slug}/api.gen.ts` for all 24 domains (including regenerating
  `src/generated/settings/`)

**Interfaces:**
- Produces: for each of the 24 domains, `create{PascalSlug}Api(client: ServiceTitanClient)`
  exported from `src/generated/{slug}/api.gen.ts`. Domain → function name (all 24, for
  reference): `accounting`→`createAccountingApi`, `crm`→`createCrmApi`,
  `customer-interactions`→`createCustomerInteractionsApi`, `dispatch`→`createDispatchApi`,
  `equipment-systems`→`createEquipmentSystemsApi`, `findings`→`createFindingsApi`,
  `forms`→`createFormsApi`, `inventory`→`createInventoryApi`, `jbce`→`createJbceApi`,
  `jpm`→`createJpmApi`, `marketing`→`createMarketingApi`,
  `marketing-ads`→`createMarketingAdsApi`,
  `marketing-reputation`→`createMarketingReputationApi`,
  `memberships`→`createMembershipsApi`, `payroll`→`createPayrollApi`,
  `pricebook`→`createPricebookApi`, `reporting`→`createReportingApi`,
  `salestech`→`createSalestechApi`, `scheduling-pro`→`createSchedulingProApi`,
  `service-agreements`→`createServiceAgreementsApi`, `settings`→`createSettingsApi`,
  `task-management`→`createTaskManagementApi`, `telecom`→`createTelecomApi`,
  `timesheets`→`createTimesheetsApi`.

- [ ] **Step 1: Replace `scripts/generate-api.ts` with the generalized version**

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

function actionName(operationId: string): string {
  const action = operationId.includes("_")
    ? operationId.slice(operationId.indexOf("_") + 1)
    : operationId;
  return lowerFirst(action);
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

function hasUnsupportedResponseContent(operation: OperationObject): boolean {
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
}

interface SkippedOperation {
  domain: string;
  operationId: string;
  reason: string;
}

function collectOperations(
  spec: RawSpec,
  domain: string,
): { operations: OperationInfo[]; skipped: SkippedOperation[] } {
  const operations: OperationInfo[] = [];
  const skipped: SkippedOperation[] = [];

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

      if (hasUnsupportedResponseContent(operation)) {
        skipped.push({
          domain,
          operationId: operation.operationId,
          reason: "success response content is not exactly application/json",
        });
        continue;
      }

      const parameters = (operation.parameters ?? []) as ParameterObject[];
      const queryParams = parameters.filter((param) => param.in === "query");

      operations.push({
        tag: lowerFirst(tag),
        methodName: actionName(operation.operationId),
        operationId: operation.operationId,
        httpMethod,
        pathTemplate,
        pathParams: collectPathParams(operation, pathTemplate),
        hasQuery: queryParams.length > 0,
        queryRequired: queryParams.some((param) => param.required === true),
        hasBody: Boolean(operation.requestBody),
      });
    }
  }

  return { operations, skipped };
}

function renderMethod(op: OperationInfo, pathPrefix: string): string {
  const fullPathTemplate = `${pathPrefix}${op.pathTemplate}`;
  const pathArgs = op.pathParams.map((param) => `${param.name}: ${param.type}`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams.map((param) => param.name).join(", ")} }`;
  const returnType = `Promise<SuccessResponse<operations["${op.operationId}"]>>`;
  const queryType = `operations["${op.operationId}"]["parameters"]["query"]`;
  const bodyType = `NonNullable<operations["${op.operationId}"]["requestBody"]>["content"]["application/json"]`;
  const queryArg = op.queryRequired ? `query: ${queryType}` : `query?: ${queryType}`;

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

async function main(): Promise<void> {
  const specsDir = new URL("../specs/", import.meta.url);
  const specFiles = (await readdir(specsDir)).filter((name) => name.endsWith(".json")).sort();

  const allSkipped: SkippedOperation[] = [];
  let totalGenerated = 0;

  for (const specFile of specFiles) {
    const slug = domainSlug(specFile);
    const functionName = `create${pascalCase(slug)}Api`;
    const specUrl = new URL(specFile, specsDir);
    const raw = JSON.parse(await readFile(specUrl, "utf8")) as RawSpec;
    const pathPrefix = extractPathPrefix(raw.servers[0].url);

    const outDir = new URL(`../src/generated/${slug}/`, import.meta.url);
    await mkdir(outDir, { recursive: true });

    const ast = await openapiTS(specUrl);
    const typesContents = GENERATED_HEADER + astToString(ast);
    await writeFile(new URL("types.gen.ts", outDir), typesContents);

    const { operations, skipped } = collectOperations(raw, slug);
    allSkipped.push(...skipped);

    const apiContents = renderApiFile(operations, pathPrefix, functionName);
    await writeFile(new URL("api.gen.ts", outDir), apiContents);

    totalGenerated += operations.length;
    console.log(`${slug}: generated ${operations.length} operations`);
  }

  console.log(`\nTotal: ${totalGenerated} operations across ${specFiles.length} domains.`);

  if (allSkipped.length > 0) {
    console.log(`\nSkipped ${allSkipped.length} operations:`);
    for (const entry of allSkipped) {
      console.log(`  ${entry.domain} ${entry.operationId}: ${entry.reason}`);
    }
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 2: Run the generator across all 24 domains**

Run: `npm run generate`
Expected: 24 `"{slug}: generated N operations"` lines, a `Total: 560 operations across 24
domains.` line, then `Skipped 3 operations:` followed by these 3 lines (in the order the
domains are processed alphabetically by spec filename):
```
  marketing-reputation reviews: success response content is not exactly application/json
  telecom Calls_GetRecording: success response content is not exactly application/json
  telecom Calls_GetVoiceMail: success response content is not exactly application/json
```

- [ ] **Step 3: Verify the file count**

Run: `find src/generated -maxdepth 1 -type d | wc -l`
Expected: `25` (24 domain directories + `src/generated` itself)

Run: `ls src/generated/telecom/`
Expected: `api.gen.ts`, `types.gen.ts`

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output. If it fails, the error will point at a specific generated file
and line — fix `scripts/generate-api.ts` (never edit a `.gen.ts` file directly, since it will
be overwritten) and re-run `npm run generate`, then retry this step.

- [ ] **Step 5: Confirm the existing Settings tests still pass (regression check)**

Run: `node --test src/generated/settings/api.gen.test.ts`
Expected: `pass 4`, `fail 0` — unchanged from the pilot, since Settings has no string path
params or query+body operations, so its regenerated output should be behaviorally identical.

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: same success pattern as previous builds (generated code still isn't imported by
`src/index.ts`, so this just confirms the public package build remains unaffected).

- [ ] **Step 7: Commit**

```bash
git add scripts/generate-api.ts src/generated/
git commit -m "feat: generalize resource generator to all 24 domains"
```

---

### Task 2: Targeted tests for the new behaviors

**Files:**
- Create: `src/generated/crm/api.gen.test.ts`
- Create: `src/generated/inventory/api.gen.test.ts`
- Create: `src/generated/telecom/api.gen.test.ts`

**Interfaces:**
- Consumes: `createCrmApi` from `./api.gen.ts` (domain `crm`), `createInventoryApi` from
  `./api.gen.ts` (domain `inventory`), `ServiceTitanClient` from `../../client.ts` — all
  produced by Task 1.

- [ ] **Step 1: Write the CRM string-path-param test**

Create `src/generated/crm/api.gen.test.ts`:

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
    environment: "integration",
  });
  const crm = createCrmApi(client);

  const result = await crm.contacts.get(123, "abc-123");

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/crm/v2/tenant/123/contacts/abc-123",
  );
  assert.deepEqual(result, { id: "abc-123", name: "Jane" });
});
```

- [ ] **Step 2: Run it**

Run: `node --test src/generated/crm/api.gen.test.ts`
Expected: `pass 1`, `fail 0`.

- [ ] **Step 3: Write the Inventory query+body test**

Create `src/generated/inventory/api.gen.test.ts`:

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
    environment: "integration",
  });
  const inventory = createInventoryApi(client);

  const result = await inventory.receipts.cancelReceipts(
    123,
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

- [ ] **Step 4: Run it**

Run: `node --test src/generated/inventory/api.gen.test.ts`
Expected: `pass 1`, `fail 0`.

- [ ] **Step 5: Write the telecom skip-verification test**

Create `src/generated/telecom/api.gen.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("skipped binary-response operations are not present in the generated telecom API", async () => {
  const source = await readFile(new URL("./api.gen.ts", import.meta.url), "utf8");

  assert.ok(!source.includes("getRecording"), "getRecording should have been skipped");
  assert.ok(!source.includes("getVoiceMail"), "getVoiceMail should have been skipped");
  assert.ok(source.includes("getDetails"), "getDetails should still be generated");
});
```

- [ ] **Step 6: Run it**

Run: `node --test src/generated/telecom/api.gen.test.ts`
Expected: `pass 1`, `fail 0`.

- [ ] **Step 7: Run the full test suite, typecheck, and build**

Run: `npm test`
Expected: all tests pass — 24 (from before this plan) + 1 (CRM) + 1 (Inventory) + 1
(telecom) = `pass 27`, `fail 0`.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as before.

- [ ] **Step 8: Commit**

```bash
git add src/generated/crm/api.gen.test.ts src/generated/inventory/api.gen.test.ts src/generated/telecom/api.gen.test.ts
git commit -m "test: add targeted tests for string path params, query+body, and skipped operations"
```
