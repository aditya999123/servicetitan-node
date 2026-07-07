# GitHub CI & Release Automation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A CI workflow that runs on every push/PR to `main`, and a tag-triggered release
workflow that publishes to npm and creates a GitHub Release (see
`docs/superpowers/specs/2026-07-07-github-release-automation-design.md`).

**Architecture:** Two independent workflow files under `.github/workflows/`. CI validates the
already-committed generated code (typecheck, test, build) on every push/PR. Release
(triggered by a `v*.*.*` tag) re-verifies everything, checks the tag matches
`package.json`'s version, publishes to npm using an `NPM_TOKEN` secret, then creates a GitHub
Release with auto-generated notes via the pre-installed `gh` CLI.

**Tech Stack:** GitHub Actions (`actions/checkout@v4`, `actions/setup-node@v4`), no new
project dependencies. `actionlint` (installed locally as a dev tool, not a project
dependency) validates workflow YAML before committing.

## Global Constraints

- Node 24 in both workflows (matches the README's "Requires Node 24+" — the test suite's
  native TS execution needs it).
- CI does not run `npm run download-specs` / `npm run generate` — it only validates the
  already-committed generated code.
- The release workflow re-runs typecheck/test/build itself rather than trusting a prior CI
  run — a tag could in principle be pushed without going through a PR.
- `npm publish` happens before the GitHub Release is created, so a failed publish never
  leaves behind a GitHub Release for a version that isn't actually on the registry.
- The `NPM_TOKEN` GitHub secret is a manual prerequisite only the user can set up — the
  release workflow will fail at the publish step until it exists, but the workflow file
  itself can be written and committed regardless.
- Pushing to the `main` branch on GitHub is a shared/visible action — get explicit
  confirmation before actually running `git push`, same as every other push-adjacent action
  this session.

---

### Task 1: CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`

**Interfaces:** None.

- [ ] **Step 1: Ensure `actionlint` is available for local validation**

Run: `brew list actionlint || brew install actionlint`
Expected: exits 0 either way (already installed, or freshly installed).

- [ ] **Step 2: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "24"
      - run: npm ci
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
```

- [ ] **Step 3: Validate the workflow file**

Run: `actionlint .github/workflows/ci.yml`
Expected: no output, exit code 0.

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add CI workflow for push/PR to main"
```

---

### Task 2: Release workflow

**Files:**
- Create: `.github/workflows/release.yml`

**Interfaces:** None.

- [ ] **Step 1: Create `.github/workflows/release.yml`**

```yaml
name: Release

on:
  push:
    tags:
      - "v*.*.*"

permissions:
  contents: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "24"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - name: Verify tag matches package.json version
        run: |
          PKG_VERSION="v$(node -p "require('./package.json').version")"
          TAG_NAME="${GITHUB_REF_NAME}"
          if [ "$PKG_VERSION" != "$TAG_NAME" ]; then
            echo "Tag $TAG_NAME does not match package.json version $PKG_VERSION"
            exit 1
          fi
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      - name: Create GitHub Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: gh release create "${GITHUB_REF_NAME}" --generate-notes
```

- [ ] **Step 2: Validate the workflow file**

Run: `actionlint .github/workflows/release.yml`
Expected: no output, exit code 0.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/release.yml
git commit -m "ci: add tag-triggered release workflow"
```

---

### Task 3: Push, verify CI for real, and document the release prerequisite

**Files:** None (verification + a short manual-step note back to the user, not a file
change).

**Interfaces:** None.

- [ ] **Step 1: Confirm before pushing**

Ask the user for explicit go-ahead before running `git push` — this is the first push of the
`.github/workflows/` directory, and it will immediately trigger a real CI run on GitHub.

- [ ] **Step 2: Push**

Run: `git push`
Expected: exits 0. All local commits (including both workflow files) land on `origin/main`.

- [ ] **Step 3: Verify the CI run for real**

If `gh` is installed and authenticated (check with `gh auth status`): run
`gh run watch $(gh run list --workflow=ci.yml --limit=1 --json databaseId --jq '.[0].databaseId')`
and confirm it reports success.

If `gh` isn't available/authenticated: ask the user to check the Actions tab at
`https://github.com/aditya999123/servicetitan-node/actions` and confirm the CI run for the
just-pushed commit succeeded — don't claim success without this confirmation one way or the
other.

- [ ] **Step 4: Tell the user the remaining manual step**

Report back (no action to take here, just communicate clearly): the release workflow is
committed and pushed, but publishing a real release requires the user to:
1. Create an npm **Automation** token: npmjs.com → profile → Access Tokens → Generate New
   Token → Automation.
2. Add it as a GitHub repository secret: repo Settings → Secrets and variables → Actions →
   New repository secret → name `NPM_TOKEN`, value the token.
3. Next time they want to cut a release: bump `package.json`'s version, commit, then
   `git tag vX.Y.Z && git push --tags` — that tag push triggers the release workflow.

This plan does not create a tag or exercise the release workflow live — per the design doc,
that's only meaningfully verifiable at an actual release, not as part of this
implementation.
