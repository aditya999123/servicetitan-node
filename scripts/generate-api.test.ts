import { test } from "node:test";
import assert from "node:assert/strict";
import {
  actionName,
  camelCase,
  domainSlug,
  extractPathPrefix,
  pascalCase,
  pathParamNamesInOrder,
  sanitizeIdentifier,
} from "./generate-api.ts";

test("sanitizeIdentifier strips non-alphanumeric characters", () => {
  assert.equal(sanitizeIdentifier("Calls (Deprecated)"), "CallsDeprecated");
  assert.equal(sanitizeIdentifier("Employees"), "Employees");
});

test("actionName extracts the part after the first underscore", () => {
  assert.equal(actionName("Employees_GetList"), "getList");
});

test("actionName uses the whole operationId when there's no underscore", () => {
  assert.equal(actionName("reviews"), "reviews");
});

test("domainSlug strips the tenant- prefix and a -v{n} suffix", () => {
  assert.equal(domainSlug("tenant-customer-interactions-v2.json"), "customer-interactions");
});

test("domainSlug handles a spec file with no version suffix", () => {
  assert.equal(domainSlug("tenant-telecom.json"), "telecom");
});

test("pascalCase joins kebab-case segments with each capitalized", () => {
  assert.equal(pascalCase("customer-interactions"), "CustomerInteractions");
});

test("camelCase lower-cases only the first letter of pascalCase", () => {
  assert.equal(camelCase("customer-interactions"), "customerInteractions");
  assert.equal(camelCase("crm"), "crm");
});

test("extractPathPrefix strips the host and a trailing slash", () => {
  assert.equal(extractPathPrefix("https://api.servicetitan.io/settings/v2"), "/settings/v2");
  assert.equal(extractPathPrefix("https://api.servicetitan.io/telecom/"), "/telecom");
});

test("pathParamNamesInOrder extracts path params in template order", () => {
  assert.deepEqual(
    pathParamNamesInOrder("/tenant/{tenant}/employees/{id}"),
    ["tenant", "id"],
  );
  assert.deepEqual(pathParamNamesInOrder("/tenant/{tenant}/reviews"), ["tenant"]);
});
