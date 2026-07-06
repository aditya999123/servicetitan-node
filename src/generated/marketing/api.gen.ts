// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createMarketingApi(client: ServiceTitanClient) {
  return {
    campaignCategories: {
    async getList(query?: operations["CampaignCategories_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CampaignCategories_GetList"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/categories", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["CampaignCategories_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CampaignCategories_Create"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/categories", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["CampaignCategories_Get"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/categories/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["CampaignCategories_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CampaignCategories_Update"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/categories/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    campaignCosts: {
    async getList(query?: operations["CampaignCosts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CampaignCosts_GetList"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/costs", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["CampaignCosts_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CampaignCosts_Create"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/costs", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["CampaignCosts_Get"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/costs/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["CampaignCosts_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CampaignCosts_Update"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/costs/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    campaignCostSummary: {
    async get(query: operations["CampaignCostSummary_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["CampaignCostSummary_Get"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaign-cost-summary", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    campaigns: {
    async getList(query?: operations["Campaigns_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Campaigns_GetList"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaigns", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Campaigns_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Campaigns_Create"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaigns", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["Campaigns_Get"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaigns/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["Campaigns_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Campaigns_Update"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaigns/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCosts(id: number, query?: operations["Campaigns_GetCosts"]["parameters"]["query"]): Promise<SuccessResponse<operations["Campaigns_GetCosts"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/campaigns/{id}/costs", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    },
    emailChannelCost: {
    async get(query: operations["EmailChannelCost_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["EmailChannelCost_Get"]>> {
      const path = buildPath("/marketing/v2/tenant/{tenant}/email-channel-cost", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
