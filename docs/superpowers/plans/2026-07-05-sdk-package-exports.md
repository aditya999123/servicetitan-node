# SDK Package Exports (ServiceTitan facade) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A generated `ServiceTitan` facade class composing all 24 domains behind one
constructor call, exported as the SDK's main entry point (see
`docs/superpowers/specs/2026-07-05-sdk-package-exports-design.md`).

**Architecture:** `scripts/generate-api.ts` gains a final step that emits
`src/generated/service-titan.gen.ts`: a `ServiceTitan` class whose constructor builds one
`ServiceTitanClient` and assigns each domain's `create{Domain}Api(client)` result to a
camelCase property. `src/index.ts` re-exports `ServiceTitan` alongside the existing exports.

**Tech Stack:** Same as sub-projects 1/2a/2b — no new dependencies.

## Global Constraints

- `src/client.ts` is not modified — `ServiceTitan` composes `ServiceTitanClient`, it doesn't
  change it.
- Domain → property name: same slug used for the domain's folder/import, converted to
  camelCase via the generator's existing `pascalCase` helper with the first letter
  lower-cased (e.g. `customer-interactions` → `customerInteractions`).
- `ServiceTitan` exposes `readonly client: ServiceTitanClient` — the exact instance backing
  every domain property (same token cache).
- `src/generated/service-titan.gen.ts` carries the same
  `// AUTO-GENERATED — do not edit by hand. Run \`npm run generate\` to regenerate.` header as
  every other generated file.

---

### Task 1: Generate the `ServiceTitan` facade

**Files:**
- Modify: `scripts/generate-api.ts`
- Create (generated, by running the script): `src/generated/service-titan.gen.ts`

**Interfaces:**
- Produces: `export class ServiceTitan { readonly client: ServiceTitanClient; readonly accounting: ReturnType<typeof createAccountingApi>; /* ...22 more domain properties */; constructor(options: ServiceTitanClientOptions) }`

- [ ] **Step 1: Add a `camelCase` helper**

In `scripts/generate-api.ts`, add this directly after the existing `pascalCase` function:

```ts
function camelCase(slug: string): string {
  return lowerFirst(pascalCase(slug));
}
```

- [ ] **Step 2: Add `renderServiceTitanFacade`**

Add this directly after the existing `renderApiFile` function:

```ts
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
```

- [ ] **Step 3: Wire it into `main()`**

Replace the existing `main` function with:

```ts
async function main(): Promise<void> {
  const specsDir = new URL("../specs/", import.meta.url);
  const specFiles = (await readdir(specsDir)).filter((name) => name.endsWith(".json")).sort();

  const allSkipped: SkippedOperation[] = [];
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

    const { operations, skipped } = collectOperations(raw, slug);
    allSkipped.push(...skipped);

    const apiContents = renderApiFile(operations, pathPrefix, functionName);
    await writeFile(new URL("api.gen.ts", outDir), apiContents);

    totalGenerated += operations.length;
    console.log(`${slug}: generated ${operations.length} operations`);
  }

  const facadeContents = renderServiceTitanFacade(domains);
  await writeFile(new URL("../src/generated/service-titan.gen.ts", import.meta.url), facadeContents);

  console.log(`\nTotal: ${totalGenerated} operations across ${specFiles.length} domains.`);

  if (allSkipped.length > 0) {
    console.log(`\nSkipped ${allSkipped.length} operations:`);
    for (const entry of allSkipped) {
      console.log(`  ${entry.domain} ${entry.operationId}: ${entry.reason}`);
    }
  }
}
```

- [ ] **Step 4: Run the generator**

Run: `npm run generate`
Expected: same per-domain lines and `Total: 560 operations across 24 domains.` /
`Skipped 3 operations:` summary as before (this task doesn't change any domain's own
generation, only adds one more output file).

- [ ] **Step 5: Verify the facade file was created**

Run: `head -20 src/generated/service-titan.gen.ts`
Expected: starts with the `// AUTO-GENERATED` header, then
`import { ServiceTitanClient, type ServiceTitanClientOptions } from "../client.ts";`, then 24
`import { create*Api } from "./*/api.gen.ts";` lines, then the `export class ServiceTitan`
declaration.

- [ ] **Step 6: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 7: Commit**

```bash
git add scripts/generate-api.ts src/generated/service-titan.gen.ts
git commit -m "feat: generate ServiceTitan facade composing all 24 domains"
```

---

### Task 2: Public export and tests

**Files:**
- Modify: `src/index.ts`
- Create: `src/generated/service-titan.gen.test.ts`

**Interfaces:**
- Consumes: `ServiceTitan` from `./generated/service-titan.gen.ts` (Task 1).
- Produces: `servicetitan-node`'s public entry point exports `ServiceTitan` alongside the
  existing `ServiceTitanClient`, `ServiceTitanClientOptions`, `Environment`,
  `ServiceTitanApiError`.

- [ ] **Step 1: Write the failing tests**

Create `src/generated/service-titan.gen.test.ts`:

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
    environment: "integration",
  });

  const result = await st.crm.contacts.get(123, "abc-123");

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
    environment: "integration",
  });

  await st.settings.employees.getList(123);
  await st.client.request("/settings/v2/tenant/123/some-other-endpoint");

  assert.equal(tokenFetchCount, 1);
});
```

- [ ] **Step 2: Run tests to verify they pass**

Run: `node --test src/generated/service-titan.gen.test.ts`
Expected: `pass 2`, `fail 0`.

(No RED step here — `ServiceTitan` already exists from Task 1, so these tests exercise
already-implemented generated code rather than driving new implementation, the same pattern
used for the other `*.gen.test.ts` files in this SDK.)

- [ ] **Step 3: Update `src/index.ts`**

Replace the contents of `src/index.ts` with:

```ts
export { ServiceTitanApiError } from "./errors.ts";
export { ServiceTitanClient } from "./client.ts";
export type { ServiceTitanClientOptions } from "./client.ts";
export type { Environment } from "./token-manager.ts";
export { ServiceTitan } from "./generated/service-titan.gen.ts";
```

- [ ] **Step 4: Run the full test suite and typecheck**

Run: `npm test`
Expected: 27 (from before this plan) + 2 = `pass 29`, `fail 0`.

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 5: Build and smoke-test the new export**

Run: `npm run build`
Expected: same success pattern as previous builds.

Run: `node -e "const m = require('./dist/index.cjs'); console.log(typeof m.ServiceTitanClient, typeof m.ServiceTitanApiError, typeof m.ServiceTitan)"`
Expected: `function function function`

Run: `node -e "import('./dist/index.js').then(m => console.log(typeof m.ServiceTitanClient, typeof m.ServiceTitanApiError, typeof m.ServiceTitan))"`
Expected: `function function function`

- [ ] **Step 6: Commit**

```bash
git add src/index.ts src/generated/service-titan.gen.test.ts
git commit -m "feat: export ServiceTitan facade as the SDK's main entry point"
```
