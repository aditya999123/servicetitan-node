// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createTelecomApi(client: ServiceTitanClient) {
  return {
    calls: {
    async calls(tenant: number, query?: operations["Calls_Calls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Calls_Calls"]>> {
      const path = buildPath("/telecom/v3/tenant/{tenant}/calls", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getDetails(tenant: number, id: number): Promise<SuccessResponse<operations["Calls_GetDetails"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Calls_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Calls_Update"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    callsDeprecated: {
    async getCalls(tenant: number, query?: operations["Calls_GetCalls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Calls_GetCalls"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    export: {
    async calls(tenant: number, query?: operations["Export_Calls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Calls"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/export/calls", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
