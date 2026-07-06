# servicetitan-node SDK — Client-Level Tenant ID design

## Context

Since sub-project 1, `tenant` has been the first argument to nearly every generated method
(e.g. `st.crm.contacts.get(tenant, id)`), because one registered app can in principle serve
multiple ServiceTitan tenants. In practice, every consumer built so far (`scripts/live-check.ts`,
all 5 examples) passes the *same* tenant to every call in a given process. This changes
`tenantId` from a per-call argument to a required field on `ServiceTitan`/`ServiceTitanClient`
construction, removing it from every generated method entirely — a single client instance now
represents one tenant.

## Background: verifying the assumption

Checked all 563 operations across all 24 specs: every single one has a `tenant` path
parameter, and it is always the first path segment (`/tenant/{tenant}/...` or, for telecom's
versioned paths, `/v{n}/tenant/{tenant}/...`). The only irregularity: marketing-reputation's
`reviews` operation spec-types `tenant` as `string` rather than `number` (a spec authoring
inconsistency, not a semantic difference — ServiceTitan tenant IDs are numeric). Since
`buildPath()` stringifies whatever it's given, a uniform `tenantId: number` on the client
works for this case too without special-casing.

## Approach

### Core client

`ServiceTitanClientOptions` (`src/client.ts`) gains a required `tenantId: number`.
`ServiceTitanClient` stores it and exposes it as a public `readonly tenantId: number` — public
because generated method bodies (in `src/generated/*/api.gen.ts`) need to read it, the same
way they already call `client.request(...)`. `request()`/`requestRaw()` themselves are
unchanged — they still just take a full path string; they never touched tenant directly.

### Generator

`scripts/generate-api.ts`: path parameters named exactly `"tenant"` are excluded from a
method's function parameters, but still appear in the `buildPath()` call — substituted as
`client.tenantId` instead of a bare identifier. E.g. today's

```ts
async get(tenant: number, id: string): Promise<SuccessResponse<operations["Contacts_Get"]>> {
  const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant, id });
  return client.request(path);
}
```

becomes

```ts
async get(id: string): Promise<SuccessResponse<operations["Contacts_Get"]>> {
  const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant: client.tenantId, id });
  return client.request(path);
}
```

Every other path param, query param, and body is unaffected. Operations whose only path
parameter is `tenant` (e.g. `Employees_GetList`) end up with `tenant` entirely absent from
both the function signature and its argument list — just `query`/`body` if present, or no
parameters at all if neither.

All 24 domains (563 operations) and the `ServiceTitan` facade get regenerated via
`npm run generate`; no changes are needed to the facade-generation logic itself; it already
forwards whatever `ServiceTitanClientOptions` requires.

### Ripple effects (mechanical, not new design)

- **Tests (33 total):** every `new ServiceTitanClient({...})` / `new ServiceTitan({...})`
  construction across `src/client.test.ts` and every `src/generated/*/api.gen.test.ts` /
  `src/generated/service-titan.gen.test.ts` gets `tenantId: 123` added; every call to a
  generated method drops its `tenant` argument. `client.test.ts`'s direct
  `client.request()`/`requestRaw()` calls (which use literal path strings, not generated
  methods) are otherwise unaffected.
- **Examples + live-check:** `examples/_shared.ts`'s `createClientFromEnv()` now reads
  `SERVICETITAN_TENANT_ID` itself and passes it into the `ServiceTitan` constructor; the
  standalone `getTenantId()` export is removed (nothing needs it separately anymore). All 5
  example files and `scripts/live-check.ts` drop their per-call tenant argument accordingly.
- **README:** Quick Start, the "Tenant ID" subsection (added last session — gets rewritten to
  explain the opposite: tenant is now a required constructor field, not a per-call argument),
  "Supported domains"' example signatures, and the "Raw responses" example all drop the
  `tenant` argument.

## Error handling

Unchanged — no new error paths. A missing/invalid `tenantId` at construction is a TypeScript
compile error (required field), not a new runtime check.

## Testing

Existing test coverage carries over unchanged in spirit — same assertions, just restructured
call sites (tenantId at construction, no tenant argument per call). No new test scenarios are
needed since this is a signature change, not new behavior; the generated URLs being correct
(e.g. still containing `/tenant/123/...`) is already what the existing tests assert, just via
`client.tenantId` instead of a passed-in argument now.
