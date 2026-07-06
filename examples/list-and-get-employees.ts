// Demonstrates the basic read pattern: list employees, then get one individually by id.
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  const list = await st.settings.employees.getList(tenantId, { page: 1, pageSize: 5 });
  console.log(`Found ${list.data.length} employee(s) (showing up to 5):`);
  for (const employee of list.data) {
    console.log(`  ${employee.id}: ${employee.name}`);
  }

  const first = list.data[0];
  if (!first) {
    console.log("\nNo employees to fetch individually.");
    return;
  }

  const employee = await st.settings.employees.get(tenantId, first.id);
  console.log(`\nFetched employee ${employee.id} individually: ${employee.name} <${employee.email || "no email on file"}>`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
