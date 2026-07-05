# servicetitan-node SDK — Resource Codegen Rollout (all 24 domains) design

## Context

Sub-project 2b of the `servicetitan-node` SDK. Sub-project 2a
(`docs/superpowers/specs/2026-07-05-sdk-resource-codegen-pilot-design.md`) built and proved
the generator against one domain (Settings, 22 operations). This sub-project generalizes that
generator to all 24 domains (563 operations total) and fixes real gaps the pilot never
exercised, since Settings happened not to hit them.

## Background: what scanning all 24 specs found

Settings (the pilot domain) has only numeric path params, no query+body operations, and no
non-JSON responses — so the pilot generator was never tested against any of these, even
though they occur elsewhere:

- **Path parameters aren't all numeric.** 15+ params across 7 domains (Accounting, CRM,
  Dispatch, Marketing Reputation, Reporting, Scheduling Pro) are strings — e.g. CRM's
  `contactId`, Accounting's `id` (for tasks), Reporting's `report_category`. Every path
  parameter has an explicit `schema.type` (`"integer"` or `"string"`, no `$ref` indirection),
  so this is fixable by reading the real type instead of assuming `number`.
- **4 operations combine query parameters and a request body**: CRM's
  `Leads_SubmitLeadForm`, Inventory's `Receipts_CancelReceipts`, and Reporting's
  `ReportCategoryReports_GetData` / `ReportCategoryReports_StartGetData`. The pilot generator
  throws on these; this rollout adds real support instead.
- **3 operations return non-JSON bodies**: marketing-reputation's `reviews` (200, multiple
  content types including `text/plain`), and telecom's `Calls_GetRecording` /
  `Calls_GetVoiceMail` (200, `application/octet-stream` — binary audio). `client.request()`
  always calls `response.json()`, so generating these would produce methods that throw at
  runtime on every call. Downloading binary content needs a different client contract than
  `request()`'s "always JSON" assumption — out of scope here.
- Confirmed generalizable as-is: no missing/multiple tags (every operation has exactly one),
  no tag+method-name collisions within any domain, no non-JSON *request* bodies, and every
  domain's path prefix is cleanly derivable from its own `servers[0].url` (already how the
  pilot's `extractPathPrefix` works — no change needed there).
- Success status codes used across all specs: 200, 201, 202, 204. Wherever 202 appears, 200
  is also present on the same operation, so the pilot's `SuccessResponse<Op>` (200 → 201 →
  204 → `never`) doesn't need to change — the 202 "still processing" variant just isn't
  separately represented in the return type, an acceptable simplification.

## Approach

### Generalize the generator

Replace the pilot's Settings-only `scripts/generate-api.ts` with one script that loops over
every file in `specs/*.json`. For each spec:

- Derive a domain slug from the filename: strip the `tenant-` prefix and an optional
  `-v\d+` suffix (e.g. `tenant-customer-interactions-v2.json` → `customer-interactions`,
  `tenant-telecom.json` → `telecom`). This gives 24 consistent kebab-case slugs, independent
  of each spec's (inconsistently-squashed) URL path segment.
- Output to `src/generated/{slug}/types.gen.ts` and `src/generated/{slug}/api.gen.ts`,
  exporting `create{PascalSlug}Api(client: ServiceTitanClient)` (e.g. `createCrmApi`,
  `createCustomerInteractionsApi`).
- This regenerates Settings too (via the same generic code path, replacing the pilot's
  special-cased run) — its existing tests must still pass unchanged, confirming no
  regression.

### Fix: path parameter types

`collectOperations` currently hardcodes every path parameter as `number` in the generated
signature. It must instead read each path parameter's `schema.type` from the raw spec
(`"integer"` → `number`, `"string"` → `string`, anything else → `string` as a safe default)
and use the real type per parameter.

### Extend: query+body support

`renderMethod` currently treats "has query" and "has body" as mutually exclusive (throwing if
both are present). Extend it to support both together: signature becomes
`(pathParams..., body: BodyType, query?: QueryType)`, calling
`client.request(path + buildQueryString(query), { method, headers, body: JSON.stringify(body) })`.
The "both present" branch is added; nothing about the existing query-only or body-only
branches changes.

### Add: skip-with-warning for unsupported operations

Instead of throwing and aborting the whole domain, `collectOperations` skips an operation and
records `{ domain, operationId, reason }` when:

- its success response's content is anything other than exactly `{"application/json": ...}`
  (catches the 3 binary/multi-content-type operations).

The main script collects skipped entries across all 24 domains and prints them in a summary
at the end, so gaps are visible and auditable rather than silent, without blocking generation
of the other 560 operations.

## Error handling

Unchanged from the pilot for supported operations. For unsupported ones (non-JSON response),
the generator skips and reports rather than emitting code that would fail at runtime — this
is a build-time decision, not a new runtime error path.

## Known limitations (carried over / updated from the pilot)

- The 3 non-JSON-response operations are not generated at all. Adding them would need a
  `request()` variant that returns the raw `Response` (or a `Blob`/`ArrayBuffer`) instead of
  always parsing JSON — a future enhancement if binary/mixed-content endpoints are needed.
- Array query-param serialization (repeated keys) remains unverified against a live account
  (same caveat as the pilot).
- The 202 "still processing" response shape isn't separately represented in generated return
  types (see Background) — a future refinement, not a blocker.

## Testing

- `npm run typecheck` across all 24 domains' generated code is the primary correctness gate —
  it will catch systematic generator bugs (wrong types, malformed syntax) across all ~560
  generated operations in one pass.
- Existing `src/generated/settings/api.gen.test.ts` must still pass unchanged after Settings
  is regenerated through the generalized script (regression check).
- New targeted hand-written tests, each covering a behavior the pilot didn't exercise:
  - A string path param (e.g. CRM's `contacts.get(tenant, contactId)` where `contactId` is
    typed `string`, not `number`).
  - The query+body combination (e.g. Inventory's `Receipts_CancelReceipts`, verifying both
    the JSON body and the query string are sent).
  - Confirming a skipped operation is genuinely absent from its domain's generated
    `api.gen.ts` (e.g. asserting telecom's generated file has no `getRecording` method) and
    appears in the generator's printed skip summary.
- No full per-domain hand-written test suite (~4 tests × 24 domains) — typecheck plus these
  targeted tests is the agreed verification level for this rollout.
