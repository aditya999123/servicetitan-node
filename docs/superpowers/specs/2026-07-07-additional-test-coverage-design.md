# servicetitan-node SDK — Additional Test Coverage design

## Context

33 tests currently pass. Gap analysis found the generator (`scripts/generate-api.ts`) — the
code that produces all 563 operations across 24 domains — has zero direct unit tests; it's
only verified indirectly by regenerating and spot-checking 5 of the 24 domains. Two smaller
gaps: no test exercises the default `environment: "production"` (every existing test
explicitly passes `"integration"`), and `buildPath`'s `encodeURIComponent` handling of special
characters is unverified.

## Goal

Direct unit tests for the generator's own logic (highest priority, since it protects all 24
domains at once), plus the smaller edge-case gaps in `shared.ts` and `client.ts`, plus a
cheap smoke test confirming all 24 `ServiceTitan` domain properties are actually wired — not
dedicated per-operation tests for the 19 domains that currently have none (per user
decision — that would redundantly re-test the same generator code paths already covered by
testing the generator directly).

## Approach

### Prerequisite fix: `scripts/generate-api.ts` isn't safely importable

`main()` currently runs unconditionally at the bottom of the file (no guard), unlike
`download-specs.ts` which uses:

```ts
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch(...);
}
```

Without this guard, importing any function from `generate-api.ts` for testing would trigger a
full regeneration as a side effect — reading all 24 specs and overwriting `src/generated/`
just from a test file's `import` statement. This must be fixed first; there's no way to unit
test the generator's functions otherwise. Applying the same guard `download-specs.ts` already
uses is a direct, minimal fix — no other behavior changes.

Each function the tests need (`sanitizeIdentifier`, `actionName`, `domainSlug`, `pascalCase`,
`camelCase`, `extractPathPrefix`, `pathParamNamesInOrder`, `collectPathParams`,
`needsRawResponse`, `collectOperations`, `renderMethod`, `renderApiFile`,
`renderServiceTitanFacade`) gets an `export` keyword added. This doesn't change `npm run
generate`'s behavior when run directly — it only makes these functions additionally
importable.

### Generator unit tests (`scripts/generate-api.test.ts`)

Using small hand-crafted fixture objects (matching the shapes `collectPathParams`,
`needsRawResponse`, and `collectOperations` expect — not the real 24 specs), covering the
branches that matter:

- `sanitizeIdentifier`: strips non-alphanumerics (the exact "Calls (Deprecated)" →
  "CallsDeprecated" case that was a real bug found in sub-project 2b).
- `actionName`: operationId with an underscore vs. without (marketing-reputation's `reviews`
  case).
- `domainSlug`: with and without a `-v{n}` version suffix.
- `pascalCase` / `camelCase`: multi-word kebab-case slugs.
- `extractPathPrefix`: with and without a trailing slash on the server URL.
- `pathParamNamesInOrder`: multiple path params, and none.
- `collectPathParams`: string vs. number path param types, and the fallback when a path
  param has no matching spec entry.
- `needsRawResponse`: pure JSON content (false), multi-content-type (true),
  `application/octet-stream` (true), 204 with no content (false), 201 as the primary code.
- `collectOperations`: a fixture spec exercising query-only, body-only, query+body-combo, and
  raw-response operations in one pass, checking the resulting `OperationInfo` fields; plus
  the "operation has no tag" error path (currently untested).
- `renderMethod`: exact generated source string for each branch — no-params, query-only,
  body-only, query+body combo, raw-response with query, raw-response without query. This
  locks in the actual template-generation logic, the most handwritten/bug-prone part of the
  generator.
- `renderApiFile` / `renderServiceTitanFacade`: correct grouping/imports/wiring for a small
  fixture set.

### `src/generated/shared.test.ts` additions

- `buildPath` with a path value containing characters that need encoding (space, `/`) —
  confirms `encodeURIComponent` is actually applied, not just present in the source.
- `buildQueryString` with a value containing characters needing encoding (space, `&`).

### `src/client.test.ts` addition

- Construct `ServiceTitanClient` **without** `environment` and confirm requests go to
  `https://api.servicetitan.io` (the production base), not integration — the only existing
  coverage of the `?? "production"` default.

### Facade smoke test

New test in `src/generated/service-titan.gen.test.ts`: construct a `ServiceTitan` instance
(no stubbed `fetch` needed — construction alone doesn't make a network call) and assert all
24 domain properties (`accounting` through `timesheets`) are defined objects. Catches a
domain silently failing to wire up without needing per-operation tests for all 24.

## Testing

This whole plan *is* testing — no separate "how do we verify the tests" layer beyond running
`npm test` and confirming the new cases pass, and `npm run typecheck` / `npm run build` /
`npm run generate` (re-run to confirm the `export` additions and `isMainModule` guard don't
change generated output) still succeed.
