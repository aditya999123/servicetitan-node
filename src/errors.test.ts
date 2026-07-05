import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanApiError } from "./errors.ts";

test("ServiceTitanApiError carries status, statusText, and body", () => {
  const error = new ServiceTitanApiError(404, "Not Found", { message: "missing" });

  assert.equal(error.status, 404);
  assert.equal(error.statusText, "Not Found");
  assert.deepEqual(error.body, { message: "missing" });
  assert.equal(error.message, "ServiceTitan API request failed: 404 Not Found");
  assert.ok(error instanceof Error);
});
