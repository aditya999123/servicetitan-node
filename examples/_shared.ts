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
      `Missing ${name}. Copy .env.example to .env and fill in your credentials, then run ` +
        "this example with:\n  node --env-file-if-exists=.env examples/<name>.ts",
    );
    process.exit(1);
  }
  return value;
}

export function getEnvironment(): "integration" | "production" {
  return process.env.SERVICETITAN_ENVIRONMENT === "production" ? "production" : "integration";
}

export function createClientFromEnv(): ServiceTitan {
  const clientId = requireEnv("SERVICETITAN_CLIENT_ID");
  const clientSecret = requireEnv("SERVICETITAN_CLIENT_SECRET");
  const appKey = requireEnv("SERVICETITAN_APP_KEY");

  return new ServiceTitan({ clientId, clientSecret, appKey, environment: getEnvironment() });
}

export function getTenantId(): number {
  return Number(requireEnv("SERVICETITAN_TENANT_ID"));
}
