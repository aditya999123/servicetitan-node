// Demonstrates a write pattern: create a resource, then update it.
// Mutates real data — refuses to run against production unless explicitly allowed.
import { createClientFromEnv, getEnvironment, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const environment = getEnvironment();
  if (environment === "production" && process.env.SERVICETITAN_ALLOW_PRODUCTION_WRITES !== "true") {
    console.error(
      "Refusing to run: this example creates and updates real data. Set " +
        "SERVICETITAN_ALLOW_PRODUCTION_WRITES=true in .env if you really mean to run it " +
        "against production.",
    );
    process.exit(1);
  }

  const st = createClientFromEnv();
  const tenantId = getTenantId();

  const created = await st.settings.tagTypes.create(tenantId, {
    name: "SDK Example Tag",
    color: "#4287f5",
  });
  console.log(`Created tag type ${created.id}`);

  await st.settings.tagTypes.update(tenantId, created.id, {
    name: "SDK Example Tag (updated)",
  });
  console.log(`Updated tag type ${created.id}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
