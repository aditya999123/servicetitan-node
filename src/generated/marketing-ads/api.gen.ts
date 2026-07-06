// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createMarketingAdsApi(client: ServiceTitanClient) {
  return {
    attributedLeads: {
    async get(query: operations["AttributedLeads_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["AttributedLeads_Get"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/attributed-leads", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    capacityAwarenessWarning: {
    async get(): Promise<SuccessResponse<operations["CapacityAwarenessWarning_Get"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/capacity-warnings", { tenant: client.tenantId });
      return client.request(path);
    },
    },
    externalCallAttributions: {
    async create(body: NonNullable<operations["ExternalCallAttributions_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ExternalCallAttributions_Create"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/external-call-attributions", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    performance: {
    async get(query: operations["Performance_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Performance_Get"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/performance", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    scheduledJobAttributions: {
    async create(body: NonNullable<operations["ScheduledJobAttributions_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ScheduledJobAttributions_Create"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/job-attributions", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    webBookingAttributions: {
    async create(body: NonNullable<operations["WebBookingAttributions_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["WebBookingAttributions_Create"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/web-booking-attributions", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    webLeadFormAttributions: {
    async create(body: NonNullable<operations["WebLeadFormAttributions_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["WebLeadFormAttributions_Create"]>> {
      const path = buildPath("/marketingads/v2/tenant/{tenant}/web-lead-form-attributions", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
