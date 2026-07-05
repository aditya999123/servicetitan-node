# download-specs.ts design

## Goal

Discover all OpenAPI specs listed on https://developer.servicetitan.io/docs/apis/, print
their metadata (id, display name, description, beta/webhook flags) to the console, and
download each one's full OpenAPI document as JSON.

## Background

`https://developer.servicetitan.io/docs/apis/` is a client-rendered SPA — the HTML response
contains no API data, only JS bundle references. Inspecting the bundle showed the page loads
its sidebar contents from a backend endpoint:

- `GET /api/docs/apis` — returns an array of groups, each with a `displayName` and a list of
  `apis: [{ id, displayName, description, isBeta, hasWebhooks }]`. Currently one group
  ("Other API") containing 24 APIs (e.g. `tenant-crm-v2`, `tenant-dispatch-v2`, ...).
- `GET /api/docs/apis/{id}` — returns the full OpenAPI document for that API as JSON (not
  YAML — the site's "Download YAML" button converts this JSON to YAML client-side).

## Approach

1. Fetch `https://developer.servicetitan.io/api/docs/apis`.
2. Flatten all groups into a single list of API summaries.
3. Print one line per API (id — display name: description, plus beta/webhook flags) and a
   total count.
4. For each API, fetch `https://developer.servicetitan.io/api/docs/apis/{id}` and write the
   raw JSON response to `specs/{id}.json` (creating the `specs/` directory if it doesn't
   exist). Fetches run sequentially, one API at a time — 24 requests doesn't need
   concurrency, and it's kinder to the server.

## Out of scope (for this script, for now)

- Converting the downloaded JSON → YAML.

A `yaml` npm dependency was added to `package.json` in anticipation of this conversion step,
but is not imported by this script yet.

## Error handling

- If the catalog fetch fails (network error or non-2xx), the script throws with a clear
  message and exits non-zero. No retries — this is a one-shot discovery script.
- If an individual API's document fetch fails, the script logs the error and continues
  downloading the rest rather than aborting the whole batch. If any downloads failed, the
  script exits non-zero after printing a summary of how many succeeded/failed.
