// Demonstrates catching ServiceTitanApiError and branching on its status code.
import { ServiceTitanApiError } from "../src/index.ts";
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  try {
    await st.settings.employees.get(tenantId, 999999999);
    console.log("Unexpectedly found an employee with id 999999999.");
  } catch (error) {
    if (error instanceof ServiceTitanApiError) {
      if (error.status === 404) {
        console.log("Got the expected 404 — no employee with id 999999999.");
      } else {
        console.log(
          `Got a ServiceTitanApiError, but not the expected 404: ${error.status} ${error.statusText}`,
        );
      }
    } else {
      throw error;
    }
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
