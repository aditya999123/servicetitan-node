# SDK Runnable Examples Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Five runnable examples under `examples/` covering CRUD, pagination, raw responses,
and error handling, each verified against the real integration account where safely possible
(see `docs/superpowers/specs/2026-07-06-sdk-examples-design.md`).

**Architecture:** `examples/_shared.ts` factors out env-var reading/validation (same pattern
as `scripts/live-check.ts`) so each example file only contains the logic it's actually
demonstrating. Every example is a standalone script run via
`node --env-file-if-exists=.env examples/<name>.ts`.

**Tech Stack:** No new dependencies — uses the already-built `ServiceTitan` facade and
`ServiceTitanApiError`.

## Global Constraints

- Examples are runnable documentation, not product code — no mocked-fetch unit tests for
  them. `npm run typecheck` (already project-wide) is the compile-time check; real execution
  against the integration account is the runtime check.
- `examples/create-and-update-tag-type.ts` (the only write example) must hard-exit before
  constructing any client or making any network call if `SERVICETITAN_ENVIRONMENT=production`
  and `SERVICETITAN_ALLOW_PRODUCTION_WRITES` isn't exactly `"true"`.
- None of the example filenames may match Node's test-runner auto-discovery patterns
  (`*.test.ts`, `*-test.ts`, `test-*.ts`, `test.ts`) — confirmed none of the planned filenames
  do.
- Real field names/types below (`EmployeeResponse.name: string`, `.email?: string | null`,
  `ModificationResponse.id: number`, `CreateTagTypeRequest.name`/`.color: string` required,
  `PaginatedResponse.data: T[]` / `.hasMore: boolean`) were confirmed by reading
  `src/generated/settings/types.gen.ts` directly, not assumed.

---

### Task 1: Shared helper + list-and-get-employees example

**Files:**
- Create: `examples/_shared.ts`
- Create: `examples/list-and-get-employees.ts`

**Interfaces:**
- Produces: `createClientFromEnv(): ServiceTitan`, `getEnvironment(): "integration" | "production"`, `getTenantId(): number` from `examples/_shared.ts`.

- [ ] **Step 1: Create `examples/_shared.ts`**

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

  return new ServiceTitan({ clientId, clientSecret, appKey, environment: getEnvironment() });
}

export function getTenantId(): number {
  return Number(requireEnv("SERVICETITAN_TENANT_ID"));
}
```

- [ ] **Step 2: Create `examples/list-and-get-employees.ts`**

```ts
// Demonstrates the basic read pattern: list employees, then get one individually by id.
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  const list = await st.settings.employees.getList(tenantId, { page: 1, pageSize: 5 });
  console.log(`Found ${list.data.length} employee(s) (showing up to 5):`);
  for (const employee of list.data) {
    console.log(`  ${employee.id}: ${employee.name}`);
  }

  const first = list.data[0];
  if (!first) {
    console.log("\nNo employees to fetch individually.");
    return;
  }

  const employee = await st.settings.employees.get(tenantId, first.id);
  console.log(`\nFetched employee ${employee.id} individually: ${employee.name} <${employee.email || "no email on file"}>`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 4: Run it for real**

Ensure `.env` has real integration credentials (already set up from the earlier live-check
work), then:

Run: `node --env-file-if-exists=.env examples/list-and-get-employees.ts`
Expected: prints a list of employees (or "No employees to fetch individually." if the account
truly has none) followed by the individually-fetched employee's name and email, exit code 0.
If the actual output differs from this description (e.g., a real error), fix the example to
match reality before proceeding — this step is the real verification, not the plan text.

- [ ] **Step 5: Commit**

```bash
git add examples/_shared.ts examples/list-and-get-employees.ts
git commit -m "feat: add examples/_shared helper and list-and-get-employees example"
```

---

### Task 2: Pagination and error-handling examples

**Files:**
- Create: `examples/paginate-all-employees.ts`
- Create: `examples/handle-not-found-error.ts`

**Interfaces:**
- Consumes: `createClientFromEnv`, `getTenantId` from Task 1's `examples/_shared.ts`;
  `ServiceTitanApiError` from `../src/index.ts`.

- [ ] **Step 1: Create `examples/paginate-all-employees.ts`**

```ts
// Demonstrates looping through every page of a list endpoint until hasMore is false.
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  let page = 1;
  let total = 0;
  let hasMore = true;

  while (hasMore) {
    const result = await st.settings.employees.getList(tenantId, { page, pageSize: 50 });
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

- [ ] **Step 2: Create `examples/handle-not-found-error.ts`**

```ts
// Demonstrates catching ServiceTitanApiError and branching on its status code.
import { ServiceTitanApiError } from "../src/index.ts";
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  try {
    await st.settings.employees.get(tenantId, 999999999);
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

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 4: Run both for real**

Run: `node --env-file-if-exists=.env examples/paginate-all-employees.ts`
Expected: one line per page followed by a "Done —" summary line, exit code 0.

Run: `node --env-file-if-exists=.env examples/handle-not-found-error.ts`
Expected: either "Got the expected 404 — no employee with id 999999999." (most likely) or, if
ServiceTitan actually returns a different status for a nonexistent id, the
"Got a ServiceTitanApiError, but not the expected 404" line — if it's the latter, update the
example so its primary message matches the status code ServiceTitan actually returns, since
the point of the example is to demonstrate real behavior, not a guess.

- [ ] **Step 5: Commit**

```bash
git add examples/paginate-all-employees.ts examples/handle-not-found-error.ts
git commit -m "feat: add pagination and error-handling examples"
```

---

### Task 3: Write example with production guard

**Files:**
- Create: `examples/create-and-update-tag-type.ts`

**Interfaces:**
- Consumes: `createClientFromEnv`, `getEnvironment`, `getTenantId` from
  `examples/_shared.ts`.

- [ ] **Step 1: Create `examples/create-and-update-tag-type.ts`**

```ts
// Demonstrates a write pattern: create a resource, then update it.
// Mutates real data — refuses to run against production unless explicitly allowed.
import { createClientFromEnv, getEnvironment, getTenantId } from "./_shared.ts";

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
  const tenantId = getTenantId();

  const created = await st.settings.tagTypes.create(tenantId, {
    name: "SDK Example Tag",
    color: "#4287f5",
  });
  console.log(`Created tag type ${created.id}`);

  await st.settings.tagTypes.update(tenantId, created.id, {
    name: "SDK Example Tag (updated)",
  });
  console.log(`Updated tag type ${created.id}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 3: Verify the production guard fires without making any network call**

Run: `SERVICETITAN_ENVIRONMENT=production node --env-file-if-exists=.env examples/create-and-update-tag-type.ts`
Expected: prints the "Refusing to run" message and exits 1 — this happens before
`createClientFromEnv()` is even called, so it's safe regardless of what's in `.env`.

- [ ] **Step 4: Run it for real against integration, if available**

Ensure `.env` has `SERVICETITAN_ENVIRONMENT=integration` (or unset, since that's the
default), then:

Run: `node --env-file-if-exists=.env examples/create-and-update-tag-type.ts`
Expected: "Created tag type <id>" followed by "Updated tag type <id>" with the same id, exit

Note: in practice, the available `.env` was configured for `production`, not
`integration` — bypassing the guard would have created a real, permanent (tag types have no
delete endpoint) "SDK Example Tag" in a live account. Asked the user, who chose to skip live
verification for this one example rather than write to production or request separate
integration credentials. This example is verified by typecheck and the guard check (Step 3)
only — its happy path (successful create/update) is unverified, same status as the raw-response
example's happy path in Task 4.
code 0. If the real API rejects the request body (e.g., a validation error on `color`'s
format), adjust the example's payload to match what the API actually accepts — this step is
the real verification.

- [ ] **Step 5: Commit**

```bash
git add examples/create-and-update-tag-type.ts
git commit -m "feat: add create-and-update-tag-type example with production write guard"
```

---

### Task 4: Raw-response example

**Files:**
- Create: `examples/download-call-recording.ts`

**Interfaces:**
- Consumes: `createClientFromEnv`, `getTenantId` from `examples/_shared.ts`.

- [ ] **Step 1: Create `examples/download-call-recording.ts`**

```ts
// Demonstrates consuming a raw-response method (a non-JSON body).
// Requires SERVICETITAN_EXAMPLE_CALL_ID: a real call ID in your account with a recording
// attached. Without one, this will fail with a clean error rather than a crash.
import { writeFile } from "node:fs/promises";
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const callId = process.env.SERVICETITAN_EXAMPLE_CALL_ID;
  if (!callId) {
    console.error("Set SERVICETITAN_EXAMPLE_CALL_ID in .env to a real call ID with a recording.");
    process.exit(1);
  }

  const st = createClientFromEnv();
  const tenantId = getTenantId();

  const response = await st.telecom.calls.getRecording(tenantId, Number(callId));
  const audio = Buffer.from(await response.arrayBuffer());

  await writeFile("call-recording.mp3", audio);
  console.log(`Saved ${audio.length} bytes to call-recording.mp3`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no output.

- [ ] **Step 3: Verify the missing-call-id guard**

Run: `node --env-file-if-exists=.env examples/download-call-recording.ts` (with
`SERVICETITAN_EXAMPLE_CALL_ID` unset in `.env`)
Expected: prints the "Set SERVICETITAN_EXAMPLE_CALL_ID..." message and exits 1, no network
call made.

- [ ] **Step 4: Verify the error path with an invalid call id**

Run: `SERVICETITAN_EXAMPLE_CALL_ID=1 node --env-file-if-exists=.env examples/download-call-recording.ts`
Expected: a clean failure surfaced via the `main().catch(...)` handler, not a crash or hang —
this proves the request actually reaches the real telecom recording endpoint and fails
predictably for an id that doesn't correspond to a real call in this account. Confirmed
against the real account: ServiceTitan returns `500 Internal Server Error` (not a 404) for an
invalid call id here — surfaced cleanly as `ServiceTitanApiError: ServiceTitan API request
failed: 500 Internal Server Error`, exit code 1. The example doesn't assert a specific status
(unlike `handle-not-found-error.ts`), so no code change is needed for this. Note in the
commit/PR description (not in the file itself) that the happy path — an id that really does
have a recording — hasn't been verified, since no such id is available.

- [ ] **Step 5: Commit**

```bash
git add examples/download-call-recording.ts
git commit -m "feat: add download-call-recording raw-response example"
```

---

### Task 5: README update and final verification

**Files:**
- Modify: `README.md`

**Interfaces:** None.

- [ ] **Step 1: Add an Examples section to `README.md`**

Insert this new section directly after the existing `## Quick start` section (before
`## Authentication`):

```markdown
## Examples

Runnable examples live under `examples/`, using the same `.env` credentials as
`npm run test:live`:

```
node --env-file-if-exists=.env examples/<name>.ts
```

- `list-and-get-employees.ts` — list employees, then fetch one individually by id.
- `paginate-all-employees.ts` — loop through every page of a list endpoint.
- `create-and-update-tag-type.ts` — create then update a resource. Mutates real data —
  refuses to run against production unless `SERVICETITAN_ALLOW_PRODUCTION_WRITES=true` is
  also set.
- `download-call-recording.ts` — consume a raw-response method, saving binary audio to a
  file. Requires `SERVICETITAN_EXAMPLE_CALL_ID` (a real call id with a recording).
- `handle-not-found-error.ts` — catch `ServiceTitanApiError` and branch on `.status`.
```

- [ ] **Step 2: Run the full verification suite**

Run: `npm test`
Expected: `pass 33`, `fail 0` — unchanged, since none of the new example files match Node's
test-discovery patterns.

Run: `npm run typecheck`
Expected: exits 0, no output.

Run: `npm run build`
Expected: same success pattern as previous builds.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add Examples section linking to examples/"
```
