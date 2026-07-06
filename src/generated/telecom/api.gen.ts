// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createTelecomApi(client: ServiceTitanClient) {
  return {
    calls: {
    async calls(query?: operations["Calls_Calls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Calls_Calls"]>> {
      const path = buildPath("/telecom/v3/tenant/{tenant}/calls", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getDetails(id: number): Promise<SuccessResponse<operations["Calls_GetDetails"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["Calls_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Calls_Update"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getRecording(id: number): Promise<Response> {
      return client.requestRaw(buildPath("/telecom/v2/tenant/{tenant}/calls/{id}/recording", { tenant: client.tenantId, id }));
    },
    async getVoiceMail(id: number): Promise<Response> {
      return client.requestRaw(buildPath("/telecom/v2/tenant/{tenant}/calls/{id}/voicemail", { tenant: client.tenantId, id }));
    },
    },
    callsDeprecated: {
    async getCalls(query?: operations["Calls_GetCalls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Calls_GetCalls"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/calls", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    export: {
    async calls(query?: operations["Export_Calls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Calls"]>> {
      const path = buildPath("/telecom/v2/tenant/{tenant}/export/calls", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
