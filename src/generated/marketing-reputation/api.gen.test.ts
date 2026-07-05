import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createMarketingReputationApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("reviews.reviews returns the raw Response and forwards query params", async (t) => {
  const calls: string[] = [];
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    calls.push(url);
    return new Response("plain text review data", {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "text/plain" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    environment: "integration",
  });
  const marketingReputation = createMarketingReputationApi(client);

  const response = await marketingReputation.reviews.reviews("123", { page: 1 });
  const text = await response.text();

  assert.equal(text, "plain text review data");
  assert.equal(
    calls[0],
    "https://api-integration.servicetitan.io/marketingreputation/v2/tenant/123/reviews?page=1",
  );
});
