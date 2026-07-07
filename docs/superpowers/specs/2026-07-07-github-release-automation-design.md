# servicetitan-node SDK — GitHub CI & Release Automation design

## Context

No `.github` directory exists yet. The SDK is currently at `0.2.0`, published to npm manually
(hitting an npm 2FA/OTP wall each time, requiring the user to run `npm publish` themselves
interactively). This adds GitHub Actions automation for two things: regular CI, and a
tag-triggered release process that publishes to npm and creates a GitHub Release.

## Goal

- Every push/PR to `main` runs typecheck, tests, and a build — catching breakage before a
  release is ever tagged.
- Pushing a version tag (e.g. `v0.2.1`) triggers a release workflow that verifies the tag
  matches `package.json`'s version, re-verifies the full test suite, publishes to npm, and
  creates a GitHub Release with auto-generated notes.

## Approach

### `.github/workflows/ci.yml`

Triggers: `push` to `main`, `pull_request` targeting `main`. Steps: checkout,
`actions/setup-node@v4` (Node 24, matches the README's "Requires Node 24+" — the native TS
execution the test suite depends on doesn't work on older Node), `npm ci` (not `npm install`
— reproducible, fails if the lockfile is out of sync), `npm run typecheck`, `npm test`,
`npm run build`.

Deliberately does **not** run `npm run download-specs` / `npm run generate` — that would make
every CI run depend on ServiceTitan's live docs site being reachable and unchanged, which is
slow and flaky for a basic push/PR gate. CI validates the generated code already committed to
the repo (what a real consumer gets), not a freshly-regenerated version. `npm run refresh`
(which does regenerate) stays a separate, manually/externally-triggered command, unchanged
from its existing design.

### `.github/workflows/release.yml`

Trigger: `push` of tags matching `v*.*.*`.

1. Checkout, Node 24, `npm ci`.
2. **Version check**: extract `package.json`'s version, compare to the pushed tag name
   (`v` + version). Fail loudly if they don't match — catches "tagged the wrong commit" or
   "forgot to bump the version" before anything is published.
3. `npm run typecheck && npm test && npm run build` — self-contained; doesn't assume the CI
   workflow already validated this exact commit (a tag could in principle be pushed without
   going through a PR).
4. `npm publish`, authenticated via `actions/setup-node@v4`'s `registry-url` option plus an
   `NPM_TOKEN` secret exposed as `NODE_AUTH_TOKEN` (the standard GitHub Actions + npm
   pattern). `prepare` (already `npm run build`) runs automatically as part of `npm publish`,
   so `dist/` is rebuilt fresh immediately before packing regardless of step 3.
5. `gh release create <tag> --generate-notes`, authenticated with the workflow's built-in
   `GITHUB_TOKEN` (requires `permissions: contents: write` in the workflow) — `gh` is
   pre-installed on GitHub-hosted runners, no extra action/dependency needed. Publish-to-npm
   happens before the GitHub Release is created, so a failed publish never leaves behind a
   GitHub Release for a version that isn't actually on the registry.

### Manual prerequisite (only the user can do this)

An npm **Automation** token (npmjs.com → Access Tokens → Generate New Token → Automation —
this type is specifically designed to bypass 2FA for CI/CD publishing) added as a GitHub
repository secret named `NPM_TOKEN` (repo Settings → Secrets and variables → Actions → New
repository secret). The release workflow will fail at the `npm publish` step until this
exists; the workflow *files* can still be written and committed regardless.

## Error handling

- Version mismatch (tag vs. `package.json`) fails the release workflow before any build/test/
  publish work happens.
- Test/typecheck/build failure in the release workflow fails before `npm publish` — nothing
  gets published on a red build.
- `npm publish` failure (e.g. missing/invalid `NPM_TOKEN`, or the version already exists on
  the registry) stops before the GitHub Release step.

## Testing

GitHub Actions workflows aren't unit-testable in the traditional sense. Verification is: push
the CI workflow and confirm it runs successfully on the next push/PR; the release workflow's
first real test is the next actual version tag pushed after `NPM_TOKEN` is configured — I
cannot dry-run a tag push without actually creating a tag, so this is verified live when the
user next wants to cut a release, not as part of this implementation.
