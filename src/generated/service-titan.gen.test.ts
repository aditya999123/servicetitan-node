import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitan } from "./service-titan.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("ServiceTitan composes domains onto the shared client", async (t) => {
  const calls: string[] = [];
  let tokenFetchCount = 0;
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      tokenFetchCount += 1;
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return jsonResponse({ id: "abc-123", name: "Jane" });
  });

  const st = new ServiceTitan({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });

  const result = await st.crm.contacts.get("abc-123");

  assert.deepEqual(result, { id: "abc-123", name: "Jane" });
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/crm/v2/tenant/123/contacts/abc-123",
  );
  assert.equal(tokenFetchCount, 1);
});

test("st.client shares the same token cache as domain methods", async (t) => {
  let tokenFetchCount = 0;
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      tokenFetchCount += 1;
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return jsonResponse({ ok: true });
  });

  const st = new ServiceTitan({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });

  await st.settings.employees.getList();
  await st.client.request("/settings/v2/tenant/123/some-other-endpoint");

  assert.equal(tokenFetchCount, 1);
});
