# servicetitan-node SDK — Resource Codegen Pilot (Settings domain) design

## Context

Sub-project 2a of the `servicetitan-node` SDK (see the original breakdown in
`docs/superpowers/specs/2026-07-05-sdk-core-client-design.md`). The full "resource API
surface" sub-project covers 563 operations across 24 domains — too large to design and build
in one pass, and a codegen approach needs to be proven correct before running it blind across
all 24 specs (each with different quirks). This spec covers only:

1. Building a generator that turns one OpenAPI spec into typed, callable methods.
2. Running it against one real domain (`tenant-settings-v2.json`, 22 operations) to validate
   the approach end-to-end.

Applying the validated generator to the remaining 23 domains is sub-project 2b — out of scope
here.

## Background: research on the spec shape

- Each domain's spec has its own `servers[].url`, e.g.
  `https://api.servicetitan.io/settings/v2` — the `/settings/v2` path segment is
  domain-specific and must be prepended to every operation's path when building requests.
  `ServiceTitanClient.request(path)` (from sub-project 1) already accepts a full path string,
  so no change to the core client is needed.
- `operationId` values follow a consistent `{Tag}_{Action}` convention (e.g.
  `Employees_GetList`, `Employees_Get`, `Employees_Create`), matching `tags[0]`. This is
  reliable enough to drive method grouping/naming.
- Across the Settings domain's 22 operations: every operation has either query params (GET)
  or a request body (POST/PATCH), never both. (Across all 24 specs, 4 of 563 operations do
  have both — none in Settings. Handling that combination is deferred to sub-project 2b, when
  the generator reaches those domains.)
- One Settings operation (`IntacctBusinessUnitMappings_Get`) has an array-typed query param
  (`ids: integer[]`). OpenAPI's default query serialization (`style: form, explode: true`) is
  repeated keys — `?ids=1&ids=2`. This is an **assumption we can't verify** without a live
  ServiceTitan account/credentials; flagging it explicitly rather than silently guessing.
- `openapi-typescript` (a well-established, actively maintained package) generates an
  `operations["OperationId"]` TS type per endpoint with clean `parameters.path`,
  `parameters.query`, `requestBody`, and `responses` shapes — verified by running it against
  `tenant-settings-v2.json` directly.

## Approach

### Shared runtime helpers — `src/generated/shared.ts`

- `type SuccessResponse<Op>` — a generic type that extracts the 2xx JSON body type from an
  `operations[...]` entry, checking `200`, then `201`, then treating `204` as `void`. This
  means the generator itself never has to reason about which status code is "the success
  one" per operation — one generic type handles all of them.
- `function buildPath(template: string, params: Record<string, string | number>): string` —
  replaces `{param}` tokens in a path template.
- `function buildQueryString(query: Record<string, unknown> | undefined): string` — builds a
  `?a=1&b=2` string, skipping `undefined` values, repeating keys for array values.

### Generator script — `scripts/generate-api.ts`

Run manually via `npm run generate` (not part of the build or test pipeline — generated
output is committed to git like any other source). For the pilot, it's hardcoded to process
the Settings domain only; sub-project 2b will generalize it to loop over all 24 specs.

For `specs/tenant-settings-v2.json`, it:

1. Calls `openapi-typescript`'s programmatic API to emit `src/generated/settings/types.gen.ts`.
2. Reads the raw spec JSON, extracts the path prefix from `servers[0].url` (the part after
   the host), and for each operation extracts: `operationId`, tag (→ namespace), action (→
   method name, e.g. `GetList` → `getList`), path parameter names in order, whether query
   params exist, whether a request body exists.
3. Emits `src/generated/settings/api.gen.ts`: a `createSettingsApi(client: ServiceTitanClient)`
   factory function returning an object grouped by tag, each method calling
   `client.request<SuccessResponse<operations["Op"]>>(...)` with the path/query/body built
   from its arguments.

Both generated files carry a `// AUTO-GENERATED — do not edit by hand. Run \`npm run
generate\` to regenerate.` header comment.

### Example generated output shape

```ts
export function createSettingsApi(client: ServiceTitanClient) {
  return {
    employees: {
      async getList(
        tenant: number,
        query?: operations["Employees_GetList"]["parameters"]["query"],
      ): Promise<SuccessResponse<operations["Employees_GetList"]>> {
        const path = buildPath("/settings/v2/tenant/{tenant}/employees", { tenant });
        return client.request(path + buildQueryString(query));
      },
      async get(tenant: number, id: number): Promise<SuccessResponse<operations["Employees_Get"]>> {
        const path = buildPath("/settings/v2/tenant/{tenant}/employees/{id}", { tenant, id });
        return client.request(path);
      },
      async create(
        tenant: number,
        body: NonNullable<operations["Employees_Create"]["requestBody"]>["content"]["application/json"],
      ): Promise<SuccessResponse<operations["Employees_Create"]>> {
        const path = buildPath("/settings/v2/tenant/{tenant}/employees", { tenant });
        return client.request(path, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      },
    },
    technicians: { /* same pattern */ },
    userRoles: { /* getList only, no mutations */ },
    businessUnits: { /* getList, get, update */ },
    tagTypes: { /* getList, create, update */ },
  };
}
```

### Composition (explicit, not auto-attached)

`createSettingsApi` is a **standalone factory** — `ServiceTitanClient` from sub-project 1
stays exactly as built, untouched:

```ts
const client = new ServiceTitanClient({ clientId, clientSecret, appKey, environment: "integration" });
const settings = createSettingsApi(client);
const employees = await settings.employees.getList(123, { page: 1, pageSize: 50 });
```

Whether/how `ServiceTitanClient` should auto-expose all 24 domains once they exist is
sub-project 3's ("package structure & public exports") decision, not this pilot's.

## Error handling

Unchanged from sub-project 1 — `client.request()` already throws `ServiceTitanApiError` on
non-2xx responses; generated methods don't add their own error handling.

## Known limitations (explicitly deferred, not silently dropped)

- Operations with both query params and a request body aren't supported by this generator
  (0 occurrences in Settings; 4 across all other 23 domains — to be handled in sub-project
  2b).
- Array query-param serialization (repeated keys) is untested against the real API — no
  credentials available to verify. Flagged for confirmation whenever real API access exists.
- Only 200/201/204 are treated as "success" by `SuccessResponse<Op>`; a 202 (if any domain
  uses it) would resolve to `never` — none of Settings' 22 operations use 202, so this
  doesn't block the pilot, but sub-project 2b should check for it across the other domains.

## Testing

- `src/generated/shared.test.ts` — unit tests for `buildPath` and `buildQueryString`
  (`node:test`, no fetch involved): path substitution, missing-param error, query string
  building including `undefined`-skipping and array repeated-key serialization.
- `src/generated/settings/api.gen.test.ts` — hand-written tests against the real generated
  output (not regenerated per test run), stubbing `globalThis.fetch` the same way
  `client.test.ts` does. Covers: a paginated GET with query params (`employees.getList`), a
  GET with only a path param (`employees.get`), a POST with a body
  (`employees.create`), and the array-query-param case (`IntacctBusinessUnitMappings.get`,
  verifying the repeated-key serialization).
- The generator script itself is exercised by actually running it against the real
  `specs/tenant-settings-v2.json` and checking the committed output builds and type-checks
  (via the existing `npm run build` / `tsup` pipeline) — no separate golden-file test for the
  generator's string-templating in this pilot; sub-project 2b will revisit whether a golden-file
  test is worth adding once the generator handles more than one domain's edge cases.
