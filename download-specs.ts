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
