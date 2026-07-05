// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createMarketingReputationApi(client: ServiceTitanClient) {
  return {
    reviews: {
    async reviews(tenant: string, query?: operations["reviews"]["parameters"]["query"]): Promise<Response> {
      return client.requestRaw(buildPath("/marketingreputation/v2/tenant/{tenant}/reviews", { tenant }) + buildQueryString(query));
    },
    },
  };
}
