import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createCrmApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("contacts.get accepts a string id and builds the correct URL", async (t) => {
  const calls: string[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return jsonResponse({ id: "abc-123", name: "Jane" });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const crm = createCrmApi(client);

  const result = await crm.contacts.get("abc-123");

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/crm/v2/tenant/123/contacts/abc-123",
  );
  assert.deepEqual(result, { id: "abc-123", name: "Jane" });
});
