import { test } from "node:test";
import assert from "node:assert/strict";
import { createTokenManager } from "./token-manager.ts";

function jsonResponse(body: unknown, init: { status?: number; statusText?: string } = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: { "Content-Type": "application/json" },
  });
}

test("fetches once and caches the token for reuse", async (t) => {
  let callCount = 0;
  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return jsonResponse({ access_token: "token-1", expires_in: 900 });
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = await manager.getAccessToken();
  const second = await manager.getAccessToken();

  assert.equal(first, "token-1");
  assert.equal(second, "token-1");
  assert.equal(callCount, 1);
});

test("refetches once the cached token is within the expiry buffer", async (t) => {
  let callCount = 0;
  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return jsonResponse({ access_token: `token-${callCount}`, expires_in: 20 });
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = await manager.getAccessToken();
  const second = await manager.getAccessToken();

  assert.equal(first, "token-1");
  assert.equal(second, "token-2");
  assert.equal(callCount, 2);
});

test("concurrent calls during a pending fetch share the same request", async (t) => {
  let callCount = 0;
  let resolveFetch: (value: Response) => void;
  const fetchPromise = new Promise<Response>((resolve) => {
    resolveFetch = resolve;
  });

  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return fetchPromise;
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  const first = manager.getAccessToken();
  const second = manager.getAccessToken();

  resolveFetch!(jsonResponse({ access_token: "token-1", expires_in: 900 }));

  const [firstToken, secondToken] = await Promise.all([first, second]);

  assert.equal(firstToken, "token-1");
  assert.equal(secondToken, "token-1");
  assert.equal(callCount, 1);
});

test("throws when the token endpoint responds with a non-2xx status", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    return jsonResponse(
      { error: "invalid_client" },
      { status: 401, statusText: "Unauthorized" },
    );
  });

  const manager = createTokenManager({
    clientId: "id",
    clientSecret: "secret",
    environment: "integration",
  });

  await assert.rejects(
    () => manager.getAccessToken(),
    /Failed to obtain access token: 401 Unauthorized/,
  );
});
