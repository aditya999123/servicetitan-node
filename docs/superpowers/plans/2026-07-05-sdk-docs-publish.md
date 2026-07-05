# SDK Docs & Publish Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `servicetitan-node` genuinely publishable — `package.json` metadata, a
`LICENSE` file, and a `README.md` — without running `npm publish` or flipping
`"private": true` (see `docs/superpowers/specs/2026-07-05-sdk-docs-publish-design.md`).

**Architecture:** Two independent pieces: `package.json` metadata + `LICENSE` (Task 1), and
`README.md` (Task 2). Verification is `npm pack --dry-run` (read-only, confirms the exact
publish file list without publishing) plus manually checking every README code sample
against real generated method signatures.

**Tech Stack:** No new dependencies — this is metadata and documentation only.

## Global Constraints

- Do NOT run `npm publish` or `npm publish --access public` in this plan.
- Do NOT change `"private": true` in `package.json`.
- `npm view servicetitan-node` returned 404 (name unclaimed) — confirmed before this plan was
  written, not something to re-verify.
- Repository URL: `git@github.com:aditya999123/servicetitan-node.git` (existing remote).
- License: MIT, copyright holder "Aditya Agrawal", year 2026.
- Version bumps from `"0.0.0"` to `"0.1.0"`.
- `"engines": { "node": ">=18.0.0" }` is a reasonable-but-unverified floor (based on when
  global `fetch` became available in Node) — the SDK has only actually run on Node 24 in
  this project so far.

---

### Task 1: `package.json` metadata and `LICENSE`

**Files:**
- Modify: `package.json`
- Create: `LICENSE`

**Interfaces:** None — metadata only, no code exports change.

- [ ] **Step 1: Update `package.json`**

Replace the full contents of `package.json` with:

```json
{
  "name": "servicetitan-node",
  "private": true,
  "version": "0.1.0",
  "description": "Unofficial Node.js/TypeScript client for the ServiceTitan API",
  "license": "MIT",
  "author": "Aditya Agrawal",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aditya999123/servicetitan-node.git"
  },
  "homepage": "https://github.com/aditya999123/servicetitan-node#readme",
  "bugs": {
    "url": "https://github.com/aditya999123/servicetitan-node/issues"
  },
  "keywords": ["servicetitan", "api", "sdk", "client"],
  "engines": {
    "node": ">=18.0.0"
  },
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
    "generate": "node scripts/generate-api.ts",
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "typecheck": "tsc --noEmit",
    "test": "node --test"
  },
  "dependencies": {
    "yaml": "^2.5.0"
  },
  "devDependencies": {
    "@types/node": "^26.1.0",
    "openapi-typescript": "^7.5.0",
    "tsup": "^8.5.0",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 2: Create `LICENSE`**

Create `LICENSE`:

```
MIT License

Copyright (c) 2026 Aditya Agrawal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 3: Verify the project still installs, tests, typechecks, and builds cleanly**

Run: `npm install`
Expected: exits 0 (no dependency changes, just confirms `package.json` is still valid JSON
that npm can parse).

Run: `npm test`
Expected: `pass 29`, `fail 0`.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as previous builds.

- [ ] **Step 4: Commit**

```bash
git add package.json LICENSE
git commit -m "chore: add package metadata and MIT license"
```

---

### Task 2: `README.md`

**Files:**
- Create: `README.md` (currently a 1-line placeholder — full rewrite)

**Interfaces:** None.

- [ ] **Step 1: Write `README.md`**

Create `README.md`:

````markdown
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

const contact = await st.crm.contacts.get(123, "abc-123");

const employees = await st.settings.employees.getList(123, { page: 1, pageSize: 50 });
```

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

## Supported domains

`ServiceTitan` exposes all 24 ServiceTitan API domains as properties:

`accounting`, `crm`, `customerInteractions`, `dispatch`, `equipmentSystems`, `findings`,
`forms`, `inventory`, `jbce`, `jpm`, `marketing`, `marketingAds`, `marketingReputation`,
`memberships`, `payroll`, `pricebook`, `reporting`, `salestech`, `schedulingPro`,
`serviceAgreements`, `settings`, `taskManagement`, `telecom`, `timesheets`.

Each domain groups its operations by resource, e.g. `st.settings.employees.getList(tenant, query?)`,
`st.settings.employees.get(tenant, id)`, `st.settings.employees.create(tenant, body)`.

### Escape hatch

Three operations aren't covered by the typed methods above because they return non-JSON
bodies (binary audio downloads, one multi-content-type endpoint) — `request()` always parses
JSON, so generating typed wrappers for these would produce methods that fail at runtime. For
these, or any endpoint not yet covered, use the underlying client directly:

```ts
const raw = await st.client.request("/telecom/v2/tenant/123/calls/456/recording");
```

`st.client` is the same `ServiceTitanClient` instance backing every domain property, so it
shares the same cached token.

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
````

- [ ] **Step 2: Verify the README's code samples against real generated signatures**

Run: `grep -B1 -A2 'operations\["Contacts_Get"\]' src/generated/crm/api.gen.ts | head -6`
Expected: shows `async get(tenant: number, id: string)` inside the `contacts:` block —
confirms the README's `st.crm.contacts.get(123, "abc-123")` example matches the real
signature (numeric tenant, string id).

Run: `grep -B1 -A2 'operations\["Employees_GetList"\]' src/generated/settings/api.gen.ts | head -6`
Expected: shows `async getList(tenant: number, query?: operations["Employees_GetList"]...)`
inside the `employees:` block — confirms the README's
`st.settings.employees.getList(123, { page: 1, pageSize: 50 })` example matches.

- [ ] **Step 3: Verify the publish file list without publishing**

Run: `npm pack --dry-run`
Expected: file list includes `package.json`, `README.md`, `LICENSE`, and everything under
`dist/` — nothing from `src/`, `specs/`, `scripts/`, or `docs/`. Exits 0. No tarball is
actually uploaded anywhere by `--dry-run`.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add README with quick start, auth summary, and domain list"
```
