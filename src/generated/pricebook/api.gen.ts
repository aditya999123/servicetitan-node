// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createPricebookApi(client: ServiceTitanClient) {
  return {
    clientSpecificPricing: {
    async getAllRateSheets(query?: operations["ClientSpecificPricing_GetAllRateSheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["ClientSpecificPricing_GetAllRateSheets"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/clientspecificpricing", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateRateSheet(rateSheetId: number, body: NonNullable<operations["ClientSpecificPricing_UpdateRateSheet"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ClientSpecificPricing_UpdateRateSheet"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/clientspecificpricing/{rateSheetId}", { tenant: client.tenantId, rateSheetId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    categories: {
    async getList(query?: operations["Categories_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Categories_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Categories_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Categories_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["Categories_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["Categories_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["Categories_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Categories_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    discountAndFees: {
    async getList(query?: operations["DiscountAndFees_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["DiscountAndFees_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["DiscountAndFees_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["DiscountAndFees_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["DiscountAndFees_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["DiscountAndFees_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(id: number): Promise<SuccessResponse<operations["DiscountAndFees_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["DiscountAndFees_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["DiscountAndFees_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    equipment: {
    async getList(query?: operations["Equipment_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Equipment_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Equipment_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Equipment_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["Equipment_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Equipment_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(id: number): Promise<SuccessResponse<operations["Equipment_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["Equipment_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Equipment_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async categories(query?: operations["Export_Categories"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Categories"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/categories", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async equipment(query?: operations["Export_Equipment"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Equipment"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/equipment", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async services(query?: operations["Export_Services"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Services"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/services", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async materials(query?: operations["Export_Materials"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Materials"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/materials", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    images: {
    async get(query?: operations["Images_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Images_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/images", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async post(body: NonNullable<operations["Images_Post"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Images_Post"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/images", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    materials: {
    async getList(query?: operations["Materials_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Materials_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Materials_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Materials_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["Materials_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Materials_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(id: number): Promise<SuccessResponse<operations["Materials_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["Materials_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Materials_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCostTypes(): Promise<SuccessResponse<operations["Materials_GetCostTypes"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/costtypes", { tenant: client.tenantId });
      return client.request(path);
    },
    },
    materialsMarkup: {
    async getList(query?: operations["MaterialsMarkup_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MaterialsMarkup_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["MaterialsMarkup_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["MaterialsMarkup_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["MaterialsMarkup_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["MaterialsMarkup_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["MaterialsMarkup_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    pricebookBulk: {
    async create(body: NonNullable<operations["PricebookBulk_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PricebookBulk_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/pricebook", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(body: NonNullable<operations["PricebookBulk_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PricebookBulk_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/pricebook", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    services: {
    async getList(query?: operations["Services_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Services_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Services_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Services_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["Services_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Services_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(id: number): Promise<SuccessResponse<operations["Services_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["Services_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Services_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
