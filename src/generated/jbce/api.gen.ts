// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createJbceApi(client: ServiceTitanClient) {
  return {
    callReasons: {
    async get(tenant: number, query?: operations["CallReasons_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["CallReasons_Get"]>> {
      const path = buildPath("/jbce/v2/tenant/{tenant}/call-reasons", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
