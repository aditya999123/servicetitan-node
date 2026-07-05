import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createSettingsApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

function stubAuthAnd(t: import("node:test").TestContext, handler: (url: string) => Response) {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return handler(url);
  });
}

function newSettingsApi() {
  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });
  return createSettingsApi(client);
}

test("employees.getList builds the correct URL with query params", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.getList(123, { page: 1, pageSize: 50 });

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees?page=1&pageSize=50",
  );
  assert.deepEqual(result, { page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
});

test("employees.get builds the correct URL with only path params", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ id: 456, name: "Jane" });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.get(123, 456);

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees/456",
  );
  assert.deepEqual(result, { id: 456, name: "Jane" });
});

test("employees.create sends a POST with a JSON body", async (t) => {
  const calls: { url: string; method: string | undefined; body: string | undefined }[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });
    return jsonResponse({ id: 789 });
  });

  const settings = newSettingsApi();
  const result = await settings.employees.create(123, { name: "New Employee" } as never);

  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, "POST");
  assert.equal(calls[0].body, JSON.stringify({ name: "New Employee" }));
  assert.deepEqual(result, { id: 789 });
});

test("intacctBusinessUnitMappings.get serializes array query params as repeated keys", async (t) => {
  const calls: string[] = [];
  stubAuthAnd(t, (url) => {
    calls.push(url);
    return jsonResponse({ page: 1, pageSize: 50, hasMore: false, totalCount: 0, data: [] });
  });

  const settings = newSettingsApi();
  await settings.intacctBusinessUnitMappings.get(123, {
    page: 1,
    pageSize: 50,
    includeTotal: true,
    ids: [1, 2, 3],
  });

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/business-units/intacct?page=1&pageSize=50&includeTotal=true&ids=1&ids=2&ids=3",
  );
});
