# download-specs.ts design

## Goal

Discover all OpenAPI specs listed on https://developer.servicetitan.io/docs/apis/ and print
their metadata (id, display name, description, beta/webhook flags) to the console.

## Background

`https://developer.servicetitan.io/docs/apis/` is a client-rendered SPA — the HTML response
contains no API data, only JS bundle references. Inspecting the bundle showed the page loads
its sidebar contents from a backend endpoint:

- `GET /api/docs/apis` — returns an array of groups, each with a `displayName` and a list of
  `apis: [{ id, displayName, description, isBeta, hasWebhooks }]`. Currently one group
  ("Other API") containing 24 APIs (e.g. `tenant-crm-v2`, `tenant-dispatch-v2`, ...).
- `GET /api/docs/apis/{id}` — returns the full OpenAPI document for that API as JSON (not
  YAML — the site's "Download YAML" button converts this JSON to YAML client-side).

This script only needs the first endpoint to discover/list the specs.

## Approach

1. Fetch `https://developer.servicetitan.io/api/docs/apis`.
2. Flatten all groups into a single list of API summaries.
3. Print one line per API (id — display name: description, plus beta/webhook flags) and a
   total count.

## Out of scope (for this script, for now)

- Downloading/saving each API's full OpenAPI document.
- Converting JSON → YAML.

A `yaml` npm dependency is added to `package.json` now in anticipation of a follow-up
download step, but is not imported by this script.

## Error handling

If the catalog fetch fails (network error or non-2xx), the script throws with a clear
message and exits non-zero. No retries — this is a one-shot discovery script.
