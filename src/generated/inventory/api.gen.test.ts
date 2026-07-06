import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createInventoryApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("receipts.cancelReceipts sends both a query string and a JSON body", async (t) => {
  const calls: { url: string; method: string | undefined; body: string | undefined }[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL, init?: RequestInit) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push({ url, method: init?.method, body: init?.body as string | undefined });
    return jsonResponse({ success: true });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const inventory = createInventoryApi(client);

  const result = await inventory.receipts.cancelReceipts(
    456,
    { canceledReason: { id: 1 } } as never,
    { id: 456 },
  );

  assert.equal(calls.length, 1);
  assert.equal(
    calls[0].url,
    "https://api-integration.servicetitan.io/inventory/v2/tenant/123/receipts/456/cancellation?id=456",
  );
  assert.equal(calls[0].method, "PATCH");
  assert.equal(calls[0].body, JSON.stringify({ canceledReason: { id: 1 } }));
  assert.deepEqual(result, { success: true });
});
