# servicetitan-node SDK — Raw Response Support design

## Context

Sub-project 2b's generator skipped 3 operations whose success response isn't
`application/json` (telecom's `Calls_GetRecording`/`Calls_GetVoiceMail` — binary
`application/octet-stream` audio — and marketing-reputation's `reviews`, which declares
`text/plain`/`application/json`/`text/json` as possible content types). The README
documented an "escape hatch" via `st.client.request()` for these — but `request()`
unconditionally calls `response.json()`, so that escape hatch would throw on the binary
operations. These 3 operations are currently unreachable through the SDK at all.

## Goal

Make all 563 operations across all 24 domains generate a real, callable method. Operations
whose response isn't pure JSON return the raw `Response` object instead of a parsed body, so
the caller decides how to consume it (`.arrayBuffer()`, `.text()`, `.blob()`, `.json()`).

## Approach

### Core client: `requestRaw()`

`src/client.ts` gains `requestRaw(path: string, init?: RequestInit): Promise<Response>`,
doing everything `request()` currently does — token fetch, `Authorization`/`ST-App-Key`
headers, `fetch()`, throwing `ServiceTitanApiError` on non-2xx — but returning the `Response`
directly on success, without touching its body. `request<T>()` is refactored to call
`requestRaw()` internally and then apply its existing 204/`.json()` logic:

```ts
async request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await this.requestRaw(path, init);
  if (response.status === 204) {
    return undefined as T;
  }
  return (await response.json()) as T;
}
```

This is a pure refactor — `request()`'s external behavior, signature, and existing tests are
unchanged.

### Generator: raw-response operations instead of skipped ones

The existing content-type check (primary success response's content isn't exactly
`{"application/json": ...}`) is kept, but instead of skipping the operation, it's marked
`isRawResponse: true`. Such operations generate:

```ts
async getRecording(tenant: number, id: number): Promise<Response> {
  return client.requestRaw(buildPath("/telecom/v2/tenant/{tenant}/calls/{id}/recording", { tenant, id }));
},
```

(with query params appended via `buildQueryString` the same way as any other query-taking
method, for `reviews`, which has many optional query params). None of the 3 affected
operations have a request body, so the query+body-combo branch doesn't interact with this —
if a future domain ever has a raw-response operation with a body, that's a real gap to solve
then, not speculatively now.

This removes the "skipped operations" concept from the generator entirely — every operation
now produces a callable method, so there's nothing left to report as skipped.

### Documentation

The README's "Escape hatch" section is corrected: it currently claims 3 operations aren't
covered and must be reached via `st.client.request()` (which wouldn't have worked for the
binary ones anyway). It's rewritten to explain raw-response methods (with an example showing
`.arrayBuffer()`), and keeps a shorter, accurate note that `st.client.request()` /
`st.client.requestRaw()` remain available for anything not yet covered by generated code at
all (e.g. a brand-new endpoint before the next `npm run generate`).

## Error handling

Unchanged — `requestRaw()` throws the same `ServiceTitanApiError` on non-2xx as `request()`
always has, since both share the same underlying logic now.

## Testing

- `src/client.test.ts`: new tests for `requestRaw()` — returns the `Response` unparsed on
  success (verified by reading a non-JSON body via `.text()` and getting the exact bytes
  back), and throws `ServiceTitanApiError` on a non-2xx response (same as `request()`).
  Existing `request()` tests are re-run unchanged to confirm the refactor didn't alter
  behavior.
- Regenerate all 24 domains; typecheck must still pass with zero errors.
- Targeted tests, using the generator's existing naming rules applied to these 3 operations:
  `st.telecom.calls.getRecording(tenant, id)`, `st.telecom.calls.getVoiceMail(tenant, id)`,
  and `st.marketingReputation.reviews.reviews(tenant, query?)` (tag and action both derive to
  `"reviews"` for that one, same pattern already seen with telecom's `calls.calls`) — each
  resolves to a `Response`, not a parsed object, when stubbed with non-JSON bodies.
