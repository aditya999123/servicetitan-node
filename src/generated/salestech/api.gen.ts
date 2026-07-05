// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSalestechApi(client: ServiceTitanClient) {
  return {
    estimates: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Estimates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Estimates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Estimates_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Estimates_GetList"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Estimates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getItems(tenant: number, query?: operations["Estimates_GetItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Estimates_GetItems"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/items", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async sell(tenant: number, id: number, body: NonNullable<operations["Estimates_Sell"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Sell"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/sell", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async unsell(tenant: number, id: number): Promise<SuccessResponse<operations["Estimates_Unsell"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/unsell", { tenant, id });
      return client.request(path, { method: "PUT" });
    },
    async dismiss(tenant: number, id: number): Promise<SuccessResponse<operations["Estimates_Dismiss"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/dismiss", { tenant, id });
      return client.request(path, { method: "PUT" });
    },
    async putItem(tenant: number, id: number, body: NonNullable<operations["Estimates_PutItem"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_PutItem"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/items", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteItem(tenant: number, id: number, itemId: number): Promise<SuccessResponse<operations["Estimates_DeleteItem"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/items/{itemId}", { tenant, id, itemId });
      return client.request(path, { method: "DELETE" });
    },
    },
    estimatesExport: {
    async estimates(tenant: number, query?: operations["EstimatesExport_Estimates"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimatesExport_Estimates"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/export/estimates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async estimatesAsyncLegacy(tenant: number, query?: operations["EstimatesExport_EstimatesAsyncLegacy"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimatesExport_EstimatesAsyncLegacy"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/export", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    estimatesStatus: {
    async getEstimateStatusChanges(tenant: number, id: number): Promise<SuccessResponse<operations["EstimatesStatus_GetEstimateStatusChanges"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/status/estimates/{id}/changes", { tenant, id });
      return client.request(path);
    },
    },
    estimateTemplates: {
    async get(tenant: number, query?: operations["EstimateTemplates_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimateTemplates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["EstimateTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EstimateTemplates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(tenant: number, id: number): Promise<SuccessResponse<operations["EstimateTemplates_GetById"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["EstimateTemplates_Delete"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["EstimateTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EstimateTemplates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    proposalTemplates: {
    async get(tenant: number, query?: operations["ProposalTemplates_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProposalTemplates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["ProposalTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ProposalTemplates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(tenant: number, id: number): Promise<SuccessResponse<operations["ProposalTemplates_GetById"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["ProposalTemplates_Delete"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["ProposalTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ProposalTemplates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    proposalTypes: {
    async get(tenant: number, query?: operations["ProposalTypes_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProposalTypes_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
