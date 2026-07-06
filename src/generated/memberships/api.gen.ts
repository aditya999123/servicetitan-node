// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createMembershipsApi(client: ServiceTitanClient) {
  return {
    customerMemberships: {
    async getList(query?: operations["CustomerMemberships_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CustomerMemberships_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFields(query?: operations["CustomerMemberships_GetCustomFields"]["parameters"]["query"]): Promise<SuccessResponse<operations["CustomerMemberships_GetCustomFields"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["CustomerMemberships_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["CustomerMemberships_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CustomerMemberships_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getStatusChanges(id: number): Promise<SuccessResponse<operations["CustomerMemberships_GetStatusChanges"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}/status-changes", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async create(body: NonNullable<operations["CustomerMemberships_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CustomerMemberships_Create"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/sale", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async membershipTypes(query?: operations["Export_MembershipTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_MembershipTypes"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/membership-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async recurringServiceTypes(query?: operations["Export_RecurringServiceTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_RecurringServiceTypes"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-service-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async memberships(query?: operations["Export_Memberships"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Memberships"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/memberships", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async invoiceTemplates(query?: operations["Export_InvoiceTemplates"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InvoiceTemplates"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/invoice-templates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async locationRecurringServices(query?: operations["Export_LocationRecurringServices"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_LocationRecurringServices"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-services", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async locationRecurringServiceEvents(query?: operations["Export_LocationRecurringServiceEvents"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_LocationRecurringServiceEvents"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-service-events", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async membershipStatusChanges(query?: operations["Export_MembershipStatusChanges"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_MembershipStatusChanges"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/membership-status-changes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    invoiceTemplates: {
    async getList(query: operations["InvoiceTemplates_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InvoiceTemplates_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["InvoiceTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InvoiceTemplates_Create"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["InvoiceTemplates_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["InvoiceTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InvoiceTemplates_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    locationRecurringServiceEvents: {
    async getList(query?: operations["LocationRecurringServiceEvents_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async markComplete(id: number, body: NonNullable<operations["LocationRecurringServiceEvents_MarkComplete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_MarkComplete"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events/{id}/mark-complete", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markIncomplete(id: number, body: NonNullable<operations["LocationRecurringServiceEvents_MarkIncomplete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_MarkIncomplete"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events/{id}/mark-incomplete", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    locationRecurringServices: {
    async getList(query?: operations["LocationRecurringServices_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationRecurringServices_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["LocationRecurringServices_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["LocationRecurringServices_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServices_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    membershipTypes: {
    async getList(query?: operations["MembershipTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MembershipTypes_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["MembershipTypes_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getRecurringServiceItems(id: number): Promise<SuccessResponse<operations["MembershipTypes_GetRecurringServiceItems"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/recurring-service-items", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getDiscountsList(id: number): Promise<SuccessResponse<operations["MembershipTypes_GetDiscountsList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/discounts", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getDurationBillingList(id: number, query?: operations["MembershipTypes_GetDurationBillingList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MembershipTypes_GetDurationBillingList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/duration-billing-items", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    },
    recurringServiceTypes: {
    async getList(query?: operations["RecurringServiceTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["RecurringServiceTypes_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["RecurringServiceTypes_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-types/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
  };
}
