// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createCustomerInteractionsApi(client: ServiceTitanClient) {
  return {
    technicianRating: {
    async update(technicianId: number, jobId: number, body: NonNullable<operations["TechnicianRating_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianRating_Update"]>> {
      const path = buildPath("/customer-interactions/v2/tenant/{tenant}/technician-rating/technician/{technicianId}/job/{jobId}", { tenant: client.tenantId, technicianId, jobId });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    technicianRatings: {
    async getList(query?: operations["TechnicianRatings_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianRatings_GetList"]>> {
      const path = buildPath("/customer-interactions/v2/tenant/{tenant}/technician-ratings", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async update(body: NonNullable<operations["TechnicianRatings_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianRatings_Update"]>> {
      const path = buildPath("/customer-interactions/v2/tenant/{tenant}/technician-ratings", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async technicianRatings(query?: operations["Export_TechnicianRatings"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_TechnicianRatings"]>> {
      const path = buildPath("/customer-interactions/v2/tenant/{tenant}/export/technician-ratings", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
