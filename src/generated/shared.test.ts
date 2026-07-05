import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPath, buildQueryString } from "./shared.ts";

test("buildPath substitutes path parameters", () => {
  const result = buildPath("/settings/v2/tenant/{tenant}/employees/{id}", {
    tenant: 123,
    id: 456,
  });

  assert.equal(result, "/settings/v2/tenant/123/employees/456");
});

test("buildPath throws when a parameter is missing", () => {
  assert.throws(
    () => buildPath("/settings/v2/tenant/{tenant}/employees/{id}", { tenant: 123 }),
    /Missing path parameter "id"/,
  );
});

test("buildQueryString returns an empty string for undefined input", () => {
  assert.equal(buildQueryString(undefined), "");
});

test("buildQueryString skips undefined values and serializes primitives", () => {
  const result = buildQueryString({ page: 1, pageSize: undefined, name: "smith" });

  assert.equal(result, "?page=1&name=smith");
});

test("buildQueryString serializes array values as repeated keys", () => {
  const result = buildQueryString({ ids: [1, 2, 3] });

  assert.equal(result, "?ids=1&ids=2&ids=3");
});
