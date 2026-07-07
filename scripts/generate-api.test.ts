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
import {
  collectOperations,
  collectPathParams,
  needsRawResponse,
  type OperationInfo,
  type RawSpec,
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

test("collectPathParams extracts the type from each param's schema", () => {
  const operation = {
    parameters: [
      { name: "tenant", in: "path", schema: { type: "integer" } },
      { name: "id", in: "path", schema: { type: "string" } },
    ],
  };

  const result = collectPathParams(operation as never, "/tenant/{tenant}/contacts/{id}");

  assert.deepEqual(result, [
    { name: "tenant", type: "number" },
    { name: "id", type: "string" },
  ]);
});

test("collectPathParams defaults to number when a path param has no matching parameter entry", () => {
  const operation = { parameters: [] };

  const result = collectPathParams(operation as never, "/tenant/{tenant}/widgets/{id}");

  assert.deepEqual(result, [
    { name: "tenant", type: "number" },
    { name: "id", type: "number" },
  ]);
});

test("needsRawResponse is false for a pure application/json response", () => {
  const operation = { responses: { "200": { content: { "application/json": {} } } } };
  assert.equal(needsRawResponse(operation as never), false);
});

test("needsRawResponse is true for a multi-content-type response", () => {
  const operation = {
    responses: {
      "200": { content: { "text/plain": {}, "application/json": {} } },
    },
  };
  assert.equal(needsRawResponse(operation as never), true);
});

test("needsRawResponse is true for a binary response", () => {
  const operation = { responses: { "200": { content: { "application/octet-stream": {} } } } };
  assert.equal(needsRawResponse(operation as never), true);
});

test("needsRawResponse is false for a 204 with no content", () => {
  const operation = { responses: { "204": {} } };
  assert.equal(needsRawResponse(operation as never), false);
});

test("needsRawResponse checks 201 when there's no 200", () => {
  const operation = { responses: { "201": { content: { "application/json": {} } } } };
  assert.equal(needsRawResponse(operation as never), false);
});

const fixtureSpec = {
  servers: [{ url: "https://api.servicetitan.io/widgets/v2" }],
  paths: {
    "/tenant/{tenant}/widgets": {
      get: {
        tags: ["Widgets"],
        operationId: "Widgets_GetList",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "page", in: "query", schema: { type: "integer" } },
        ],
        responses: { "200": { content: { "application/json": {} } } },
      },
      post: {
        tags: ["Widgets"],
        operationId: "Widgets_Create",
        parameters: [{ name: "tenant", in: "path", schema: { type: "integer" } }],
        requestBody: { content: { "application/json": {} } },
        responses: { "200": { content: { "application/json": {} } } },
      },
    },
    "/tenant/{tenant}/widgets/{id}/cancellation": {
      patch: {
        tags: ["Widgets"],
        operationId: "Widgets_Cancel",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "id", in: "path", schema: { type: "integer" } },
          { name: "reason", in: "query", schema: { type: "string" } },
        ],
        requestBody: { content: { "application/json": {} } },
        responses: { "200": { content: { "application/json": {} } } },
      },
    },
    "/tenant/{tenant}/widgets/{id}/photo": {
      get: {
        tags: ["Widgets"],
        operationId: "Widgets_GetPhoto",
        parameters: [
          { name: "tenant", in: "path", schema: { type: "integer" } },
          { name: "id", in: "path", schema: { type: "integer" } },
        ],
        responses: { "200": { content: { "application/octet-stream": {} } } },
      },
    },
  },
} as unknown as RawSpec;

test("collectOperations extracts query-only, body-only, query+body, and raw-response operations", () => {
  const operations = collectOperations(fixtureSpec);

  assert.equal(operations.length, 4);

  const getList = operations.find((op) => op.operationId === "Widgets_GetList")!;
  assert.equal(getList.tag, "widgets");
  assert.equal(getList.methodName, "getList");
  assert.deepEqual(getList.pathParams, [{ name: "tenant", type: "number" }]);
  assert.equal(getList.hasQuery, true);
  assert.equal(getList.hasBody, false);
  assert.equal(getList.isRawResponse, false);

  const create = operations.find((op) => op.operationId === "Widgets_Create")!;
  assert.equal(create.hasQuery, false);
  assert.equal(create.hasBody, true);

  const cancel = operations.find((op) => op.operationId === "Widgets_Cancel")!;
  assert.equal(cancel.hasQuery, true);
  assert.equal(cancel.hasBody, true);
  assert.deepEqual(cancel.pathParams, [
    { name: "tenant", type: "number" },
    { name: "id", type: "number" },
  ]);

  const getPhoto = operations.find((op) => op.operationId === "Widgets_GetPhoto")!;
  assert.equal(getPhoto.isRawResponse, true);
});

test("collectOperations throws when an operation has no tag", () => {
  const badSpec = {
    servers: [{ url: "https://api.servicetitan.io/widgets/v2" }],
    paths: {
      "/tenant/{tenant}/widgets": {
        get: { operationId: "Widgets_GetList" },
      },
    },
  } as unknown as RawSpec;

  assert.throws(() => collectOperations(badSpec), /Operation Widgets_GetList has no tag/);
});
