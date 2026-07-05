// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createPricebookApi(client: ServiceTitanClient) {
  return {
    clientSpecificPricing: {
    async getAllRateSheets(tenant: number, query?: operations["ClientSpecificPricing_GetAllRateSheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["ClientSpecificPricing_GetAllRateSheets"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/clientspecificpricing", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateRateSheet(tenant: number, rateSheetId: number, body: NonNullable<operations["ClientSpecificPricing_UpdateRateSheet"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ClientSpecificPricing_UpdateRateSheet"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/clientspecificpricing/{rateSheetId}", { tenant, rateSheetId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    categories: {
    async getList(tenant: number, query?: operations["Categories_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Categories_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Categories_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Categories_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Categories_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Categories_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Categories_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Categories_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/categories/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    discountAndFees: {
    async getList(tenant: number, query?: operations["DiscountAndFees_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["DiscountAndFees_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["DiscountAndFees_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["DiscountAndFees_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["DiscountAndFees_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["DiscountAndFees_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["DiscountAndFees_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["DiscountAndFees_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["DiscountAndFees_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/discounts-and-fees/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    equipment: {
    async getList(tenant: number, query?: operations["Equipment_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Equipment_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Equipment_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Equipment_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["Equipment_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Equipment_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Equipment_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Equipment_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Equipment_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/equipment/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async categories(tenant: number, query?: operations["Export_Categories"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Categories"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/categories", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async equipment(tenant: number, query?: operations["Export_Equipment"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Equipment"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/equipment", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async services(tenant: number, query?: operations["Export_Services"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Services"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/services", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async materials(tenant: number, query?: operations["Export_Materials"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Materials"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/export/materials", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    images: {
    async get(tenant: number, query?: operations["Images_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Images_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/images", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async post(tenant: number, body: NonNullable<operations["Images_Post"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Images_Post"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/images", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    materials: {
    async getList(tenant: number, query?: operations["Materials_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Materials_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Materials_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Materials_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["Materials_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Materials_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Materials_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Materials_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Materials_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCostTypes(tenant: number): Promise<SuccessResponse<operations["Materials_GetCostTypes"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materials/costtypes", { tenant });
      return client.request(path);
    },
    },
    materialsMarkup: {
    async getList(tenant: number, query?: operations["MaterialsMarkup_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MaterialsMarkup_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["MaterialsMarkup_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["MaterialsMarkup_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["MaterialsMarkup_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["MaterialsMarkup_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["MaterialsMarkup_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/materialsmarkup/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    pricebookBulk: {
    async create(tenant: number, body: NonNullable<operations["PricebookBulk_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PricebookBulk_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/pricebook", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, body: NonNullable<operations["PricebookBulk_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PricebookBulk_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/pricebook", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    services: {
    async getList(tenant: number, query?: operations["Services_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Services_GetList"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Services_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Services_Create"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["Services_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Services_Get"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Services_Delete"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Services_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Services_Update"]>> {
      const path = buildPath("/pricebook/v2/tenant/{tenant}/services/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
