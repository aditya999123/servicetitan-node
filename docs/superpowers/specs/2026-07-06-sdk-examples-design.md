# servicetitan-node SDK — Runnable Examples design

## Context

The SDK (core client, all 24 domains/563 operations, `ServiceTitan` facade, raw-response
support) is built and unit-tested (33 tests), with a verified live-account check
(`scripts/live-check.ts` / `npm run test:live`). The README has one quick-start snippet, but
no broader collection of usage examples. This adds runnable examples covering the SDK's main
usage patterns.

## Goal

An `examples/` directory of runnable TypeScript scripts, each demonstrating one usage
pattern, executable against real `.env` credentials the same way `scripts/live-check.ts`
already is.

## Approach

### Shared helper

`examples/_shared.ts` exports:

- `createClientFromEnv(): ServiceTitan` — reads `SERVICETITAN_CLIENT_ID`,
  `SERVICETITAN_CLIENT_SECRET`, `SERVICETITAN_APP_KEY`, `SERVICETITAN_ENVIRONMENT` (defaults
  to `"integration"`) from `process.env`, exits with a clear message (pointing at
  `.env.example`) if a required one is missing — same validation `scripts/live-check.ts`
  already has, factored out so every example doesn't repeat it.
- `getTenantId(): number` — reads and validates `SERVICETITAN_TENANT_ID`.

Each example imports these instead of duplicating env-reading logic.

### The five examples

1. **`examples/list-and-get-employees.ts`** — `settings.employees.getList(tenant, { page: 1, pageSize: 5 })`, then `settings.employees.get(tenant, id)` on the first result. Demonstrates the basic list → get read pattern.

2. **`examples/create-and-update-tag-type.ts`** — `settings.tagTypes.create(tenant, {...})` then `settings.tagTypes.update(tenant, id, {...})`. This one **mutates real data**, so it refuses to run when `environment === "production"` unless `SERVICETITAN_ALLOW_PRODUCTION_WRITES=true` is also set — a hard exit, not just a warning (unlike `live-check.ts`, which is read-only and only warns).

3. **`examples/paginate-all-employees.ts`** — loops `page = 1, 2, 3, ...` calling `settings.employees.getList(tenant, { page, pageSize: 50 })` until `hasMore` is falsy, accumulating and printing a total count. Demonstrates the pagination pattern every list endpoint shares.

4. **`examples/download-call-recording.ts`** — reads `SERVICETITAN_EXAMPLE_CALL_ID` from env (documented as "a call ID in your account that has a recording attached"), calls `telecom.calls.getRecording(tenant, callId)`, writes `Buffer.from(await response.arrayBuffer())` to `call-recording.mp3` in the current directory. Demonstrates consuming a raw-response method.

5. **`examples/handle-not-found-error.ts`** — calls `settings.employees.get(tenant, 999999999)` (an id extremely unlikely to exist), catches `ServiceTitanApiError`, and shows branching on `error.status` (404 vs. other statuses). Demonstrates the SDK's error type.

Each file is self-contained, has a one-line comment at the top stating what it demonstrates,
and is run via:

```
node --env-file-if-exists=.env examples/<name>.ts
```

### README update

Add an "Examples" section linking to the `examples/` directory with a one-line description
of each file, right after the existing Quick Start section.

## Error handling

Examples 1, 3, 5 are read-only and safe to run repeatedly. Example 2 (write) has the
production hard-guard described above. Example 4 depends on account-specific data
(a real call ID with a recording) that I don't have — its error-handling path (invalid ID →
clean `ServiceTitanApiError`) will be verified for real; the happy path (successful download)
can't be verified without a real recording ID, and the example's own comments will say so.

## Testing / verification

No mocked-fetch unit tests for the examples themselves — they're runnable documentation, not
product code, and the underlying methods they call are already unit-tested. Instead:
`npm run typecheck` covers all example files (already project-wide, no config change needed),
and every example that can run against the real integration account without side effects
outside its own stated purpose (1, 3, 5, and the failure path of 2 and 4) will actually be
run for real during implementation, not just read.
