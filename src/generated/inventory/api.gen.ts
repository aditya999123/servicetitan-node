// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createInventoryApi(client: ServiceTitanClient) {
  return {
    adjustments: {
    async getList(tenant: number, query?: operations["Adjustments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Adjustments_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/adjustments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Adjustments_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Adjustments_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/adjustments/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Adjustments_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Adjustments_UpdateCustomFields"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/adjustments/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async adjustments(tenant: number, query?: operations["Export_Adjustments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Adjustments"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/export/adjustments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async purchaseOrders(tenant: number, query?: operations["Export_PurchaseOrders"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_PurchaseOrders"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/export/purchase-orders", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async returns(tenant: number, query?: operations["Export_Returns"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Returns"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/export/returns", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async transfers(tenant: number, query?: operations["Export_Transfers"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Transfers"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/export/transfers", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    inventoryTemplates: {
    async getList(tenant: number, query?: operations["InventoryTemplates_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryTemplates_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/inventory-templates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    purchaseOrders: {
    async getList(tenant: number, query?: operations["PurchaseOrders_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PurchaseOrders_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["PurchaseOrders_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrders_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getRequests(tenant: number, query?: operations["PurchaseOrders_GetRequests"]["parameters"]["query"]): Promise<SuccessResponse<operations["PurchaseOrders_GetRequests"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/requests", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getById(tenant: number, id: number): Promise<SuccessResponse<operations["PurchaseOrders_GetById"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["PurchaseOrders_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrders_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async cancel(tenant: number, id: number, body: NonNullable<operations["PurchaseOrders_Cancel"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrders_Cancel"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/{id}/cancellation", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async approveRequest(tenant: number, id: number): Promise<SuccessResponse<operations["PurchaseOrders_ApproveRequest"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/requests/{id}/approve", { tenant, id });
      return client.request(path, { method: "PATCH" });
    },
    async rejectRequest(tenant: number, id: number, body: NonNullable<operations["PurchaseOrders_RejectRequest"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrders_RejectRequest"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-orders/requests/{id}/reject", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    purchaseOrdersMarkup: {
    async get(tenant: number, query?: operations["PurchaseOrdersMarkup_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["PurchaseOrdersMarkup_Get"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-markups", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["PurchaseOrdersMarkup_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrdersMarkup_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-markups", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(tenant: number, id: number): Promise<SuccessResponse<operations["PurchaseOrdersMarkup_GetById"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-markups/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["PurchaseOrdersMarkup_Delete"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-markups/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["PurchaseOrdersMarkup_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrdersMarkup_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-markups/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    purchaseOrderTypes: {
    async getList(tenant: number, query?: operations["PurchaseOrderTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PurchaseOrderTypes_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["PurchaseOrderTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrderTypes_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-types", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["PurchaseOrderTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PurchaseOrderTypes_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/purchase-order-types/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    receipts: {
    async getList(tenant: number, query?: operations["Receipts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Receipts_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/receipts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createReceipt(tenant: number, body: NonNullable<operations["Receipts_CreateReceipt"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Receipts_CreateReceipt"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/receipts", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Receipts_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Receipts_UpdateCustomFields"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/receipts/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async cancelReceipts(tenant: number, id: number, body: NonNullable<operations["Receipts_CancelReceipts"]["requestBody"]>["content"]["application/json"], query?: operations["Receipts_CancelReceipts"]["parameters"]["query"]): Promise<SuccessResponse<operations["Receipts_CancelReceipts"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/receipts/{id}/cancellation", { tenant, id });
      return client.request(path + buildQueryString(query), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    returns: {
    async getList(tenant: number, query?: operations["Returns_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Returns_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/returns", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createReturn(tenant: number, body: NonNullable<operations["Returns_CreateReturn"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Returns_CreateReturn"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/returns", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Returns_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Returns_UpdateCustomFields"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/returns/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Returns_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Returns_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/returns/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async cancel(tenant: number, id: number, body: NonNullable<operations["Returns_Cancel"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Returns_Cancel"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/returns/{id}/cancellation", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    returnTypes: {
    async getList(tenant: number, query: operations["ReturnTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ReturnTypes_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/return-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["ReturnTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ReturnTypes_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/return-types", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["ReturnTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ReturnTypes_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/return-types/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    transfers: {
    async getList(tenant: number, query?: operations["Transfers_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Transfers_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/transfers", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Transfers_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Transfers_UpdateCustomFields"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/transfers/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Transfers_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Transfers_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/transfers/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    trucks: {
    async getList(tenant: number, query?: operations["Trucks_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Trucks_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/trucks", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Trucks_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Trucks_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/trucks", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Trucks_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Trucks_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/trucks/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    vendors: {
    async getList(tenant: number, query?: operations["Vendors_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Vendors_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Vendors_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Vendors_Create"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getById(tenant: number, id: number, query?: operations["Vendors_GetById"]["parameters"]["query"]): Promise<SuccessResponse<operations["Vendors_GetById"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Vendors_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Vendors_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Vendors_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Vendors_GetCustomFieldTypes"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Vendors_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Vendors_UpdateCustomFields"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/vendors/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    warehouses: {
    async getList(tenant: number, query?: operations["Warehouses_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Warehouses_GetList"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/warehouses", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Warehouses_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Warehouses_Update"]>> {
      const path = buildPath("/inventory/v2/tenant/{tenant}/warehouses/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
