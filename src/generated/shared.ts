export function buildPath(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => {
    const value = params[key];
    if (value === undefined) {
      throw new Error(`Missing path parameter "${key}" for template "${template}"`);
    }
    return encodeURIComponent(String(value));
  });
}

export function buildQueryString(query: Record<string, unknown> | undefined): string {
  if (!query) {
    return "";
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        params.append(key, String(item));
      }
    } else {
      params.append(key, String(value));
    }
  }

  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
}

export type SuccessResponse<Op> = Op extends { responses: infer R }
  ? R extends { 200: { content: { "application/json": infer T } } }
    ? T
    : R extends { 201: { content: { "application/json": infer T } } }
      ? T
      : R extends { 204: unknown }
        ? void
        : never
  : never;
