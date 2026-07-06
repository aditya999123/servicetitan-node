// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSalestechApi(client: ServiceTitanClient) {
  return {
    estimates: {
    async get(id: number): Promise<SuccessResponse<operations["Estimates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["Estimates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(query?: operations["Estimates_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Estimates_GetList"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Estimates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getItems(query?: operations["Estimates_GetItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Estimates_GetItems"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/items", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async sell(id: number, body: NonNullable<operations["Estimates_Sell"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_Sell"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/sell", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async unsell(id: number): Promise<SuccessResponse<operations["Estimates_Unsell"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/unsell", { tenant: client.tenantId, id });
      return client.request(path, { method: "PUT" });
    },
    async dismiss(id: number): Promise<SuccessResponse<operations["Estimates_Dismiss"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/dismiss", { tenant: client.tenantId, id });
      return client.request(path, { method: "PUT" });
    },
    async putItem(id: number, body: NonNullable<operations["Estimates_PutItem"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Estimates_PutItem"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/items", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteItem(id: number, itemId: number): Promise<SuccessResponse<operations["Estimates_DeleteItem"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/{id}/items/{itemId}", { tenant: client.tenantId, id, itemId });
      return client.request(path, { method: "DELETE" });
    },
    },
    estimatesExport: {
    async estimates(query?: operations["EstimatesExport_Estimates"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimatesExport_Estimates"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/export/estimates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async estimatesAsyncLegacy(query?: operations["EstimatesExport_EstimatesAsyncLegacy"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimatesExport_EstimatesAsyncLegacy"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimates/export", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    estimatesStatus: {
    async getEstimateStatusChanges(id: number): Promise<SuccessResponse<operations["EstimatesStatus_GetEstimateStatusChanges"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/status/estimates/{id}/changes", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    estimateTemplates: {
    async get(query?: operations["EstimateTemplates_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["EstimateTemplates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["EstimateTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EstimateTemplates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(id: number): Promise<SuccessResponse<operations["EstimateTemplates_GetById"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["EstimateTemplates_Delete"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["EstimateTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EstimateTemplates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/estimate-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    proposalTemplates: {
    async get(query?: operations["ProposalTemplates_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProposalTemplates_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["ProposalTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ProposalTemplates_Create"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(id: number): Promise<SuccessResponse<operations["ProposalTemplates_GetById"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["ProposalTemplates_Delete"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["ProposalTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ProposalTemplates_Update"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    proposalTypes: {
    async get(query?: operations["ProposalTypes_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProposalTypes_Get"]>> {
      const path = buildPath("/sales/v2/tenant/{tenant}/proposal-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
