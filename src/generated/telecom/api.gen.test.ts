import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("skipped binary-response operations are not present in the generated telecom API", async () => {
  const source = await readFile(new URL("./api.gen.ts", import.meta.url), "utf8");

  assert.ok(!source.includes("getRecording"), "getRecording should have been skipped");
  assert.ok(!source.includes("getVoiceMail"), "getVoiceMail should have been skipped");
  assert.ok(source.includes("getDetails"), "getDetails should still be generated");
});
