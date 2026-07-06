import { test } from "node:test";
import assert from "node:assert/strict";
import { ServiceTitanClient } from "../../client.ts";
import { createTelecomApi } from "./api.gen.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("calls.getRecording returns the raw Response for binary audio", async (t) => {
  const audioBytes = new Uint8Array([1, 2, 3, 4]);
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(audioBytes, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/octet-stream" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getRecording(456);
  const buffer = new Uint8Array(await response.arrayBuffer());

  assert.deepEqual(buffer, audioBytes);
});

test("calls.getVoiceMail returns the raw Response for binary audio", async (t) => {
  const audioBytes = new Uint8Array([5, 6, 7, 8]);
  t.mock.method(globalThis, "fetch", async (input: string | URL) => {
    const url = input.toString();
    if (url.endsWith("/connect/token")) {
      return jsonResponse({ access_token: "test-token", expires_in: 900 });
    }
    return new Response(audioBytes, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/octet-stream" },
    });
  });

  const client = new ServiceTitanClient({
    clientId: "id",
    clientSecret: "secret",
    appKey: "app-key",
    tenantId: 123,
    environment: "integration",
  });
  const telecom = createTelecomApi(client);

  const response = await telecom.calls.getVoiceMail(456);
  const buffer = new Uint8Array(await response.arrayBuffer());

  assert.deepEqual(buffer, audioBytes);
});
