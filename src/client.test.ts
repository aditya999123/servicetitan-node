import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "./client.ts";
import { ServiceTitanApiError } from "./errors.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("attaches Authorization and ST-App-Key headers and resolves parsed JSON on success", async (t) => {
  const calls: { url: string; headers: Headers }[] = [];

  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, headers: new Headers(init?.headers) });
    return jsonResponse({ id: 1 });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  const result = await client.request<{ id: number }>("/settings/v2/tenant/123/employees");

  assert.deepEqual(result, { id: 1 });
  assert.equal(calls.length, 1);
  assert.equal(
    calls[0].url,
    "https://api-integration.servicetitan.io/settings/v2/tenant/123/employees",
  );
  assert.equal(calls[0].headers.get("Authorization"), "test-token");
  assert.equal(calls[0].headers.get("ST-App-Key"), "app-key");
});

test("throws ServiceTitanApiError with status and parsed body on a non-2xx response", async (t) => {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return jsonResponse({ message: "not found" }, { status: 404, statusText: "Not Found" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  await assert.rejects(
    () => client.request("/settings/v2/tenant/123/employees"),
    (error: unknown) => {
      assert.ok(error instanceof ServiceTitanApiError);
      assert.equal((error as ServiceTitanApiError).status, 404);
      assert.equal((error as ServiceTitanApiError).statusText, "Not Found");
      assert.deepEqual((error as ServiceTitanApiError).body, { message: "not found" });
      return true;
    },
  );
});

test("returns undefined for a 204 No Content response", async (t) => {
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(null, { status: 204, statusText: "No Content" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });

  const result = await client.request("/settings/v2/tenant/123/employees");

  assert.equal(result, undefined);
});
