import { ServiceTitan } from "../src/index.ts";

const REQUIRED_VARS = [
  "SERVICETITAN_CLIENT_ID",
  "SERVICETITAN_CLIENT_SECRET",
  "SERVICETITAN_APP_KEY",
  "SERVICETITAN_TENANT_ID",
] as const;

function requireEnv(name: (typeof REQUIRED_VARS)[number]): string {
  const value = process.env[name];
  if (!value) {
    console.error(
      `Missing ${name}. Copy .env.example to .env and fill in your credentials, then run:\n` +
        `  npm run test:live`,
    );
    process.exit(1);
  }
  return value;
}

async function main(): Promise<void> {
  const clientId = requireEnv("SERVICETITAN_CLIENT_ID");
  const clientSecret = requireEnv("SERVICETITAN_CLIENT_SECRET");
  const appKey = requireEnv("SERVICETITAN_APP_KEY");
  const tenantId = Number(requireEnv("SERVICETITAN_TENANT_ID"));

  const environment = process.env.SERVICETITAN_ENVIRONMENT === "production" ? "production" : "integration";

  if (environment === "production") {
    console.warn("WARNING: SERVICETITAN_ENVIRONMENT=production — this will hit real production data.\n");
  }

  console.log(`Running live test against the ${environment} environment (tenant ${tenantId})...\n`);

  const st = new ServiceTitan({ clientId, clientSecret, appKey, environment });

  const result = await st.settings.employees.getList(tenantId, {
    page: 1,
    pageSize: 1,
    includeTotal: true,
  });

  console.log("Success — authenticated and reached the real ServiceTitan API.");
  console.log(`Employees endpoint reports totalCount=${result.totalCount ?? "unknown"} for this tenant.`);
}

main().catch((error: unknown) => {
  console.error("Live test failed:");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
