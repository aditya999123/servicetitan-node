# download-specs.ts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A script (`download-specs.ts`) that discovers all OpenAPI specs listed on
https://developer.servicetitan.io/docs/apis/ and prints their metadata to the console.

**Architecture:** The docs page is a client-rendered SPA with no server-side content; its
sidebar is populated from `GET https://developer.servicetitan.io/api/docs/apis`, which
returns groups of API summaries. The script fetches that endpoint, flattens the groups into
a single list, and prints one line per API plus a total count. Pure transform/format logic
is separated from the network call so it can be unit tested without hitting the network.

**Tech Stack:** Node 24 (runs `.ts` files natively, no ts-node/tsx), `node:test` +
`node:assert/strict` for tests (built in, no extra dev dependency), `yaml` npm package added
to `package.json` as a dependency for an anticipated follow-up (not imported by this script).

## Global Constraints

- Runtime: Node 24, native TypeScript execution — do not add ts-node, tsx, or a build step.
- `package.json` must set `"type": "module"`.
- Catalog endpoint: `https://developer.servicetitan.io/api/docs/apis` (GET, no auth
  required, returns JSON).
- No retries and no pagination handling — the endpoint returns the full list in one response
  (per `docs/superpowers/specs/2026-07-05-download-specs-design.md`).
- This script does not fetch individual API OpenAPI documents or convert anything to YAML —
  that is out of scope (see design doc).

---

### Task 1: Project setup (package.json + yaml dependency)

**Files:**
- Create: `package.json`

**Interfaces:**
- Produces: a Node project root with `"type": "module"` and `yaml` listed under
  `dependencies`, so Task 2/3 files can be run with `node <file>.ts` and `node --test
  <file>.ts`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "servicetitan-node",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "download-specs": "node download-specs.ts",
    "test": "node --test"
  },
  "dependencies": {
    "yaml": "^2.5.0"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: `node_modules/` created, `package-lock.json` created, exits 0.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add package.json with yaml dependency"
```

---

### Task 2: Catalog flatten/format logic (pure, unit tested)

**Files:**
- Modify: `download-specs.ts` (currently empty — add types + pure functions)
- Test: `download-specs.test.ts`

**Interfaces:**
- Produces:
  - `interface ApiSummary { id: string; displayName: string; description: string; isBeta: boolean; hasWebhooks: boolean }`
  - `interface CatalogGroup { displayName: string; apis: ApiSummary[] }`
  - `function flattenCatalog(groups: CatalogGroup[]): ApiSummary[]`
  - `function formatApiLine(api: ApiSummary): string`
- Consumes: nothing (no dependency on Task 1's `yaml` package — this task only touches
  plain TS).

- [ ] **Step 1: Write the failing tests**

Create `download-specs.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { flattenCatalog, formatApiLine } from "./download-specs.ts";

test("flattenCatalog flattens apis across groups", () => {
  const groups = [
    {
      displayName: "Group A",
      apis: [
        { id: "a-1", displayName: "A One", description: "desc a", isBeta: false, hasWebhooks: false },
      ],
    },
    {
      displayName: "Group B",
      apis: [
        { id: "b-1", displayName: "B One", description: "desc b", isBeta: true, hasWebhooks: true },
      ],
    },
  ];

  const result = flattenCatalog(groups);

  assert.equal(result.length, 2);
  assert.equal(result[0].id, "a-1");
  assert.equal(result[1].id, "b-1");
});

test("flattenCatalog returns an empty list for an empty catalog", () => {
  assert.deepEqual(flattenCatalog([]), []);
});

test("formatApiLine includes flags when isBeta and hasWebhooks are true", () => {
  const line = formatApiLine({
    id: "x-1",
    displayName: "X",
    description: "d",
    isBeta: true,
    hasWebhooks: true,
  });

  assert.equal(line, "x-1 — X: d [beta, webhooks]");
});

test("formatApiLine omits the flags block when neither flag is set", () => {
  const line = formatApiLine({
    id: "y-1",
    displayName: "Y",
    description: "d",
    isBeta: false,
    hasWebhooks: false,
  });

  assert.equal(line, "y-1 — Y: d");
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test download-specs.test.ts`
Expected: FAIL — `download-specs.ts` does not yet export `flattenCatalog`/`formatApiLine`
(module has no exports / empty file).

- [ ] **Step 3: Implement the pure functions**

Create `download-specs.ts` with this content:

```ts
export interface ApiSummary {
  id: string;
  displayName: string;
  description: string;
  isBeta: boolean;
  hasWebhooks: boolean;
}

export interface CatalogGroup {
  displayName: string;
  apis: ApiSummary[];
}

export function flattenCatalog(groups: CatalogGroup[]): ApiSummary[] {
  return groups.flatMap((group) => group.apis);
}

export function formatApiLine(api: ApiSummary): string {
  const flags = [api.isBeta ? "beta" : null, api.hasWebhooks ? "webhooks" : null].filter(
    (flag): flag is string => flag !== null,
  );
  const suffix = flags.length > 0 ? ` [${flags.join(", ")}]` : "";
  return `${api.id} — ${api.displayName}: ${api.description}${suffix}`;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test download-specs.test.ts`
Expected: `pass 4`, `fail 0`.

- [ ] **Step 5: Commit**

```bash
git add download-specs.ts download-specs.test.ts
git commit -m "feat: add catalog flatten/format logic for download-specs"
```

---

### Task 3: Fetch catalog and wire up the CLI entry point

**Files:**
- Modify: `download-specs.ts` (append fetch + main + entry point to the file from Task 2)

**Interfaces:**
- Consumes: `flattenCatalog`, `formatApiLine`, `ApiSummary`, `CatalogGroup` from Task 2 (same
  file).
- Produces: running `node download-specs.ts` prints one line per API (via `formatApiLine`)
  followed by a blank line and `Found <n> OpenAPI specs.`

- [ ] **Step 1: Append the fetch + main logic to `download-specs.ts`**

Add to the end of `download-specs.ts` (after the Task 2 functions):

```ts
const CATALOG_URL = "https://developer.servicetitan.io/api/docs/apis";

async function fetchCatalog(): Promise<CatalogGroup[]> {
  const response = await fetch(CATALOG_URL, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch catalog from ${CATALOG_URL}: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as CatalogGroup[];
}

async function main(): Promise<void> {
  const groups = await fetchCatalog();
  const apis = flattenCatalog(groups);

  for (const api of apis) {
    console.log(formatApiLine(api));
  }

  console.log(`\nFound ${apis.length} OpenAPI specs.`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
```

- [ ] **Step 2: Run the unit tests to confirm nothing broke**

Run: `node --test download-specs.test.ts`
Expected: `pass 4`, `fail 0` (the new code isn't exercised by these tests since `main`/
`fetchCatalog` aren't imported, and `main()` only runs when the file is executed directly —
guarded by `isMainModule` — not on import).

- [ ] **Step 3: Manually verify against the live endpoint**

Run: `node download-specs.ts`
Expected: 24 lines of output, one per API, in the form
`tenant-crm-v2 — CRM: Bookings, bookings provider tags, contacts, customers, leads, locations, tags`,
followed by a blank line and `Found 24 OpenAPI specs.`. Exit code 0.

- [ ] **Step 4: Commit**

```bash
git add download-specs.ts
git commit -m "feat: fetch live catalog and print discovered OpenAPI specs"
```
