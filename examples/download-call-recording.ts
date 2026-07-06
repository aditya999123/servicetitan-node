// Demonstrates consuming a raw-response method (a non-JSON body).
// Requires SERVICETITAN_EXAMPLE_CALL_ID: a real call ID in your account with a recording
// attached. Without one, this will fail with a clean error rather than a crash.
import { writeFile } from "node:fs/promises";
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const callId = process.env.SERVICETITAN_EXAMPLE_CALL_ID;
  if (!callId) {
    console.error("Set SERVICETITAN_EXAMPLE_CALL_ID in .env to a real call ID with a recording.");
    process.exit(1);
  }

  const st = createClientFromEnv();
  const tenantId = getTenantId();

  const response = await st.telecom.calls.getRecording(tenantId, Number(callId));
  const audio = Buffer.from(await response.arrayBuffer());

  await writeFile("call-recording.mp3", audio);
  console.log(`Saved ${audio.length} bytes to call-recording.mp3`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
