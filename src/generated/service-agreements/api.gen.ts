// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createServiceAgreementsApi(client: ServiceTitanClient) {
  return {
    export: {
    async serviceAgreements(tenant: number, query?: operations["Export_ServiceAgreements"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ServiceAgreements"]>> {
      const path = buildPath("/service-agreements/v2/tenant/{tenant}/export/service-agreements", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    serviceAgreements: {
    async getList(tenant: number, query?: operations["ServiceAgreements_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ServiceAgreements_GetList"]>> {
      const path = buildPath("/service-agreements/v2/tenant/{tenant}/service-agreements", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ServiceAgreements_Get"]>> {
      const path = buildPath("/service-agreements/v2/tenant/{tenant}/service-agreements/{id}", { tenant, id });
      return client.request(path);
    },
    async getCustomFields(tenant: number, query?: operations["ServiceAgreements_GetCustomFields"]["parameters"]["query"]): Promise<SuccessResponse<operations["ServiceAgreements_GetCustomFields"]>> {
      const path = buildPath("/service-agreements/v2/tenant/{tenant}/service-agreements/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
