# servicetitan-node SDK — Docs & Publish Readiness design

## Context

Sub-project 5 (final planned sub-project) of the `servicetitan-node` SDK. Sub-projects 1
(core client + auth), 2a/2b (resource codegen, all 24 domains), and 3 (package exports /
`ServiceTitan` facade) are done — 29 passing tests, clean typecheck, working dual ESM/CJS
build. Sub-project 4 (testing against a live ServiceTitan account) is explicitly blocked: no
real credentials are available, so this SDK is verified against stubbed `fetch` only, not a
live API.

This sub-project makes the package genuinely publishable: README, LICENSE, and the
`package.json` metadata npm expects. It does **not** run `npm publish` — that's a separate,
explicit, irreversible action (claims the package name on the registry permanently) that
needs its own go-ahead regardless of this spec's approval.

## Background

- `servicetitan-node` is unclaimed on the npm registry (checked via `npm view
  servicetitan-node`, got a 404).
- The repo already has a GitHub remote: `git@github.com:aditya999123/servicetitan-node.git`.
- No `LICENSE` file exists yet. User chose MIT.
- `package.json` currently has no `description`, `license`, `repository`, `keywords`,
  `author`, or `engines` field.
- `"private": true` stays in `package.json` — this sub-project does not flip it.

## Approach

### `package.json` metadata

Add:
- `"description"`: a one-line summary (unofficial ServiceTitan API client for Node.js).
- `"license": "MIT"`.
- `"repository": { "type": "git", "url": "git+https://github.com/aditya999123/servicetitan-node.git" }`.
- `"homepage": "https://github.com/aditya999123/servicetitan-node#readme"`.
- `"bugs": { "url": "https://github.com/aditya999123/servicetitan-node/issues" }`.
- `"keywords": ["servicetitan", "api", "sdk", "client"]`.
- `"author": "Aditya Agrawal"`.
- `"engines": { "node": ">=18.0.0" }` — the compiled `dist/` output only needs global `fetch`
  (stable in Node since v18) and ESM/CJS conditional exports; this is a reasonable floor
  based on what the runtime code actually uses, not something verified by running on those
  versions (this SDK has only run on Node 24 in practice — flagged as an assumption, same
  as other unverified-but-reasonable choices earlier in this project).
- Bump `"version"` from `"0.0.0"` to `"0.1.0"` — `0.0.0` reads as "not yet a real release";
  `0.x` correctly signals "pre-1.0, API may still shift" for an SDK that hasn't been tested
  against a live account yet.

### `LICENSE`

Standard MIT license text, copyright holder "Aditya Agrawal", year 2026.

### `README.md`

- Title + a short unofficial/community-maintained disclaimer (not affiliated with or endorsed
  by ServiceTitan Inc.) right at the top, before anything else.
- Install: `npm install servicetitan-node`.
- Quick start: constructing `ServiceTitan`, one read call (e.g. `crm.contacts.get`) and one
  call through a paginated list method, showing the client-credentials fields required
  (`clientId`, `clientSecret`, `appKey`, `environment`).
- A short auth summary: OAuth 2.0 client credentials only, per-environment endpoints,
  15-minute tokens cached/refreshed automatically — linking back to where this was learned
  (ServiceTitan's own getting-started docs) rather than re-explaining OAuth from scratch.
- The list of all 24 supported domains (one line each, matching the `ServiceTitan` facade's
  property names).
- A note on the 3 unsupported operations (binary responses) and the `st.client.request()`
  escape hatch for reaching them or any endpoint not yet covered.
- Contributor-facing section: Node 24 required for development (native TS execution),
  `npm run generate` / `npm test` / `npm run typecheck` / `npm run build` scripts, and where
  the OpenAPI specs come from (`download-specs.ts`).

## Error handling

Not applicable — this sub-project is docs/metadata only, no runtime code changes.

## Testing / verification

- `npm pack --dry-run` — read-only, doesn't publish anything — to confirm the exact file list
  npm would include in a real publish: `dist/**`, `package.json`, `README.md`, `LICENSE`
  (npm always includes the last three regardless of the `"files"` field).
- Manual review: every code sample in the README is checked against the actual generated
  method signatures (e.g. `crm.contacts.get(tenant, id)` really takes a `string` second
  argument) rather than hand-waved.

## Explicitly out of scope here

- Running `npm publish` (or `npm publish --access public`) — a separate action requiring its
  own explicit go-ahead.
- Flipping `"private": true` to `false` — done immediately before the actual publish, not as
  part of this sub-project.
- CI/CD (GitHub Actions for automated publishing on tag/release) — not requested; can be a
  future sub-project if wanted.
