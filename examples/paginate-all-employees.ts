// Demonstrates looping through every page of a list endpoint until hasMore is false.
import { createClientFromEnv, getTenantId } from "./_shared.ts";

async function main(): Promise<void> {
  const st = createClientFromEnv();
  const tenantId = getTenantId();

  let page = 1;
  let total = 0;
  let hasMore = true;

  while (hasMore) {
    const result = await st.settings.employees.getList(tenantId, { page, pageSize: 50 });
    total += result.data.length;
    console.log(`Page ${page}: ${result.data.length} employee(s) (running total: ${total})`);
    hasMore = result.hasMore;
    page += 1;
  }

  console.log(`\nDone — ${total} employee(s) across ${page - 1} page(s).`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
