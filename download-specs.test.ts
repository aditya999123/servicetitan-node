import { test } from "node:test";
import assert from "node:assert/strict";
import { flattenCatalog, formatApiLine } from "./download-specs.ts";
import { apiDocumentUrl, summarizeDownloads } from "./download-specs.ts";

test("flattenCatalog flattens apis across groups", () => {
  const groups = [
    {
      displayName: "Group A",
      apis: [
        { id: "a-1", displayName: "A One", description: "desc a", isBeta: false, hasWebhooks: false },
      ],
    },
    {
      displayName: "Group B",
      apis: [
        { id: "b-1", displayName: "B One", description: "desc b", isBeta: true, hasWebhooks: true },
      ],
    },
  ];

  const result = flattenCatalog(groups);

  assert.equal(result.length, 2);
  assert.equal(result[0].id, "a-1");
  assert.equal(result[1].id, "b-1");
});

test("flattenCatalog returns an empty list for an empty catalog", () => {
  assert.deepEqual(flattenCatalog([]), []);
});

test("formatApiLine includes flags when isBeta and hasWebhooks are true", () => {
  const line = formatApiLine({
    id: "x-1",
    displayName: "X",
    description: "d",
    isBeta: true,
    hasWebhooks: true,
  });

  assert.equal(line, "x-1 — X: d [beta, webhooks]");
});

test("formatApiLine omits the flags block when neither flag is set", () => {
  const line = formatApiLine({
    id: "y-1",
    displayName: "Y",
    description: "d",
    isBeta: false,
    hasWebhooks: false,
  });

  assert.equal(line, "y-1 — Y: d");
});

test("apiDocumentUrl builds the per-API document URL", () => {
  assert.equal(
    apiDocumentUrl("tenant-crm-v2"),
    "https://developer.servicetitan.io/api/docs/apis/tenant-crm-v2",
  );
});

test("summarizeDownloads reports full success", () => {
  const summary = summarizeDownloads(
    [
      { id: "a", success: true },
      { id: "b", success: true },
    ],
    "specs",
  );

  assert.equal(summary, "Downloaded 2/2 specs to specs/.");
});

test("summarizeDownloads lists failed ids", () => {
  const summary = summarizeDownloads(
    [
      { id: "a", success: true },
      { id: "b", success: false, error: "500 Internal Server Error" },
      { id: "c", success: false, error: "network error" },
    ],
    "specs",
  );

  assert.equal(summary, "Downloaded 1/3 specs to specs/. Failed: b, c.");
});
