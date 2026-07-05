# servicetitan-node SDK — Package Exports (ServiceTitan facade) design

## Context

Sub-project 3 of the `servicetitan-node` SDK. Sub-projects 1 (core client + auth) and 2a/2b
(resource codegen for all 24 domains) are done. Today, consumers must compose the 24 domain
factories by hand:

```ts
const client = new ServiceTitanClient({ clientId, clientSecret, appKey });
const crm = createCrmApi(client);
const settings = createSettingsApi(client);
// ...22 more, if needed
```

This sub-project adds a single top-level facade that does this composition for the caller.

## Goal

A `ServiceTitan` class that, given the same options `ServiceTitanClient` already accepts,
constructs one client and exposes all 24 domains as properties, plus the raw client itself as
an escape hatch for anything not covered by codegen (the 3 skipped binary/multi-content-type
operations from sub-project 2b).

## Approach

### Generated facade

`scripts/generate-api.ts` gains a final step, after generating all 24 domains: emit
`src/generated/service-titan.gen.ts`, importing every domain's `create{Domain}Api` and
defining:

```ts
export class ServiceTitan {
  readonly client: ServiceTitanClient;
  readonly accounting: ReturnType<typeof createAccountingApi>;
  readonly crm: ReturnType<typeof createCrmApi>;
  // ...one readonly property per domain

  constructor(options: ServiceTitanClientOptions) {
    this.client = new ServiceTitanClient(options);
    this.accounting = createAccountingApi(this.client);
    this.crm = createCrmApi(this.client);
    // ...one assignment per domain
  }
}
```

Property names are the domain slug converted to camelCase using the generator's existing
`pascalCase` helper + lower-casing the first letter (already used elsewhere for tag/method
names) — e.g. `customer-interactions` → `customerInteractions`, `scheduling-pro` →
`schedulingPro`. Single-word slugs are unchanged (`crm`, `dispatch`, `settings`, ...).

This file is generated like everything under `src/generated/`, carries the same
`// AUTO-GENERATED` header, and is regenerated on every `npm run generate` run — it can never
drift out of sync with the actual set of domains.

### Public export

`src/index.ts` (hand-maintained, unlike everything under `src/generated/`) adds one line
re-exporting `ServiceTitan` from `./generated/service-titan.gen.ts`, alongside the existing
`ServiceTitanClient`, `ServiceTitanClientOptions`, `Environment`, and `ServiceTitanApiError`
exports.

### Escape hatch

`st.client` is the same `ServiceTitanClient` instance backing every domain property — same
token cache, same environment. Anything not covered by generated methods (the 3 skipped
operations, or a brand-new endpoint before the next `npm run generate`) stays reachable via
`st.client.request(path, init)`.

## Error handling

Unchanged — `ServiceTitan` adds no new error paths; every domain method still throws
`ServiceTitanApiError` via the shared `ServiceTitanClient.request()`.

## Testing

One new test file, `src/generated/service-titan.gen.test.ts`, stubbing `globalThis.fetch`
(same pattern as every other generated-code test):

- Constructing `new ServiceTitan(options)` and calling a method through it (e.g.
  `st.crm.contacts.get(...)`) hits the expected URL — confirms the composition actually wires
  the same client through.
- `st.client` is the exact object used internally (calling `st.client.request(...)` directly
  reuses the same cached token as a call made via `st.settings.employees.getList(...)` —
  verified by asserting only one token fetch happens across both calls).

Plus updates to the existing build smoke test: after `npm run build`, both the CJS and ESM
`dist/index.*` outputs must export a `ServiceTitan` value of type `"function"`, alongside the
existing `ServiceTitanClient`/`ServiceTitanApiError` checks.
