export interface ApiSummary {
  id: string;
  displayName: string;
  description: string;
  isBeta: boolean;
  hasWebhooks: boolean;
}

export interface CatalogGroup {
  displayName: string;
  apis: ApiSummary[];
}

export function flattenCatalog(groups: CatalogGroup[]): ApiSummary[] {
  return groups.flatMap((group) => group.apis);
}

export function formatApiLine(api: ApiSummary): string {
  const flags = [api.isBeta ? "beta" : null, api.hasWebhooks ? "webhooks" : null].filter(
    (flag): flag is string => flag !== null,
  );
  const suffix = flags.length > 0 ? ` [${flags.join(", ")}]` : "";
  return `${api.id} — ${api.displayName}: ${api.description}${suffix}`;
}

const CATALOG_URL = "https://developer.servicetitan.io/api/docs/apis";

export function apiDocumentUrl(id: string): string {
  return `${CATALOG_URL}/${id}`;
}

export interface DownloadResult {
  id: string;
  success: boolean;
  error?: string;
}

export function summarizeDownloads(results: DownloadResult[], outputDir: string): string {
  const succeeded = results.filter((result) => result.success).length;
  const failed = results.filter((result) => !result.success);
  const base = `Downloaded ${succeeded}/${results.length} specs to ${outputDir}/.`;

  if (failed.length === 0) {
    return base;
  }

  return `${base} Failed: ${failed.map((result) => result.id).join(", ")}.`;
}

async function fetchCatalog(): Promise<CatalogGroup[]> {
  const response = await fetch(CATALOG_URL, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch catalog from ${CATALOG_URL}: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as CatalogGroup[];
}

async function main(): Promise<void> {
  const groups = await fetchCatalog();
  const apis = flattenCatalog(groups);

  for (const api of apis) {
    console.log(formatApiLine(api));
  }

  console.log(`\nFound ${apis.length} OpenAPI specs.`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
