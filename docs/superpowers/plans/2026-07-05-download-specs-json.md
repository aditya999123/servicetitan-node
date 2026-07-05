# download-specs.ts JSON Download Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend `download-specs.ts` to download each discovered API's full OpenAPI document
as JSON to `specs/{id}.json`, in addition to the existing console listing.

**Architecture:** After printing the metadata list (existing behavior), the script ensures a
`specs/` output directory exists, then sequentially fetches `GET
https://developer.servicetitan.io/api/docs/apis/{id}` for each API and writes the raw JSON
response to `specs/{id}.json`. Per-API failures are caught and logged individually so one bad
API doesn't stop the rest; a pure `summarizeDownloads` function (unit tested) turns the
results into the final report line and drives the process exit code.

**Tech Stack:** Same as the existing script — Node 24 native TypeScript execution, `node:fs/promises` for file I/O, `node:test` for unit tests. No new dependencies.

## Global Constraints

- Runtime: Node 24, native TypeScript execution — no ts-node/tsx/build step (per existing plan).
- Output directory: `specs/` at the repo root, created with `{ recursive: true }` if missing.
- Filename pattern: `specs/{id}.json`, where `{id}` is the API's catalog id (e.g.
  `tenant-crm-v2.json`).
- Fetches for individual API documents run **sequentially**, not concurrently (per design doc:
  "24 requests doesn't need concurrency, and it's kinder to the server").
- A failed fetch for one API must not stop downloads for the others; the script logs the
  failure and continues (per design doc's error handling section).
- If any API failed to download, the script exits with a non-zero exit code after printing a
  summary of successes/failures.
- `specs/` is generated output, not source — add it to `.gitignore`.

---

### Task 1: Pure URL-builder and summary-formatter (unit tested)

**Files:**
- Modify: `download-specs.ts` — add `apiDocumentUrl`, `DownloadResult`, `summarizeDownloads`
  below the existing `formatApiLine` function and above the `CATALOG_URL` constant.
- Modify: `download-specs.test.ts` — add tests for the two new pure functions.

**Interfaces:**
- Consumes: nothing new from existing code.
- Produces:
  - `function apiDocumentUrl(id: string): string`
  - `interface DownloadResult { id: string; success: boolean; error?: string }`
  - `function summarizeDownloads(results: DownloadResult[], outputDir: string): string`

- [ ] **Step 1: Write the failing tests**

Add to the end of `download-specs.test.ts`:

```ts
import { apiDocumentUrl, summarizeDownloads } from "./download-specs.ts";

test("apiDocumentUrl builds the per-API document URL", () => {
  assert.equal(
    apiDocumentUrl("tenant-crm-v2"),
    "https://developer.servicetitan.io/api/docs/apis/tenant-crm-v2",
  );
});

test("summarizeDownloads reports full success", () => {
  const summary = summarizeDownloads(
    [
      { id: "a", success: true },
      { id: "b", success: true },
    ],
    "specs",
  );

  assert.equal(summary, "Downloaded 2/2 specs to specs/.");
});

test("summarizeDownloads lists failed ids", () => {
  const summary = summarizeDownloads(
    [
      { id: "a", success: true },
      { id: "b", success: false, error: "500 Internal Server Error" },
      { id: "c", success: false, error: "network error" },
    ],
    "specs",
  );

  assert.equal(summary, "Downloaded 1/3 specs to specs/. Failed: b, c.");
});
```

Note: this adds a second `import` line to the top of `download-specs.test.ts` (alongside the
existing `flattenCatalog, formatApiLine` import) — keep both import lines, don't replace one
with the other.

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test download-specs.test.ts`
Expected: FAIL — `download-specs.ts` does not yet export `apiDocumentUrl` or
`summarizeDownloads`.

- [ ] **Step 3: Implement the pure functions**

In `download-specs.ts`, insert this code directly after the existing
`const CATALOG_URL = "https://developer.servicetitan.io/api/docs/apis";` line and before the
existing `fetchCatalog` function:

```ts
export function apiDocumentUrl(id: string): string {
  return `${CATALOG_URL}/${id}`;
}

export interface DownloadResult {
  id: string;
  success: boolean;
  error?: string;
}

export function summarizeDownloads(results: DownloadResult[], outputDir: string): string {
  const succeeded = results.filter((result) => result.success).length;
  const failed = results.filter((result) => !result.success);
  const base = `Downloaded ${succeeded}/${results.length} specs to ${outputDir}/.`;

  if (failed.length === 0) {
    return base;
  }

  return `${base} Failed: ${failed.map((result) => result.id).join(", ")}.`;
}
```

The file order after this step: `ApiSummary`, `CatalogGroup`, `flattenCatalog`,
`formatApiLine`, `CATALOG_URL`, `apiDocumentUrl`, `DownloadResult`, `summarizeDownloads`,
then the existing `fetchCatalog`, `main`, entry point.

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test download-specs.test.ts`
Expected: `pass 7`, `fail 0` (4 existing + 3 new).

- [ ] **Step 5: Commit**

```bash
git add download-specs.ts download-specs.test.ts
git commit -m "feat: add pure URL-builder and summary formatter for spec downloads"
```

---

### Task 2: Download each API's OpenAPI JSON to disk

**Files:**
- Modify: `download-specs.ts` — add `downloadApiDocument` and rewrite `main` to download
  after printing the list.
- Modify: `.gitignore` — add `specs/`.

**Interfaces:**
- Consumes: `apiDocumentUrl`, `DownloadResult`, `summarizeDownloads`, `ApiSummary`,
  `flattenCatalog`, `formatApiLine`, `fetchCatalog` (all from Task 1 / existing code, same
  file).
- Produces: running `node download-specs.ts` writes one `specs/{id}.json` file per API in
  addition to the existing console output.

- [ ] **Step 1: Add the `node:fs/promises` and `node:path` imports**

At the very top of `download-specs.ts`, add:

```ts
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
```

- [ ] **Step 2: Add `downloadApiDocument`**

Insert this directly after the existing `fetchCatalog` function (before `main`):

```ts
async function downloadApiDocument(id: string, outputDir: string): Promise<void> {
  const url = apiDocumentUrl(id);
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${id}: ${response.status} ${response.statusText}`);
  }

  const document = await response.json();
  await writeFile(join(outputDir, `${id}.json`), JSON.stringify(document, null, 2));
}
```

- [ ] **Step 3: Rewrite `main` to download after listing**

Replace the existing `main` function with:

```ts
async function main(): Promise<void> {
  const groups = await fetchCatalog();
  const apis = flattenCatalog(groups);

  for (const api of apis) {
    console.log(formatApiLine(api));
  }
  console.log(`\nFound ${apis.length} OpenAPI specs.\n`);

  const outputDir = "specs";
  await mkdir(outputDir, { recursive: true });

  const results: DownloadResult[] = [];
  for (const api of apis) {
    try {
      await downloadApiDocument(api.id, outputDir);
      results.push({ id: api.id, success: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Failed to download ${api.id}: ${message}`);
      results.push({ id: api.id, success: false, error: message });
    }
  }

  console.log(summarizeDownloads(results, outputDir));

  if (results.some((result) => !result.success)) {
    process.exitCode = 1;
  }
}
```

- [ ] **Step 4: Add `specs/` to `.gitignore`**

Append `specs/` as a new line to `.gitignore` (alongside the existing `node_modules/` line).

- [ ] **Step 5: Run the unit tests to confirm nothing broke**

Run: `node --test download-specs.test.ts`
Expected: `pass 7`, `fail 0` (unchanged — `main`/`downloadApiDocument` aren't imported by the
test file and `main()` only runs when the file is executed directly).

- [ ] **Step 6: Manually verify against the live endpoint**

Run: `rm -rf specs && node download-specs.ts`
Expected: the same 24-line metadata listing as before, followed by a blank line, then
`Downloaded 24/24 specs to specs/.`, exit code 0. Then verify the files:

Run: `ls specs | wc -l`
Expected: `24`

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('specs/tenant-crm-v2.json','utf8')).info.title)"`
Expected: `CRM`

- [ ] **Step 7: Commit**

```bash
git add download-specs.ts .gitignore
git commit -m "feat: download each API's OpenAPI document as JSON"
```
