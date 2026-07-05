// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createMembershipsApi(client: ServiceTitanClient) {
  return {
    customerMemberships: {
    async getList(tenant: number, query?: operations["CustomerMemberships_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CustomerMemberships_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFields(tenant: number, query?: operations["CustomerMemberships_GetCustomFields"]["parameters"]["query"]): Promise<SuccessResponse<operations["CustomerMemberships_GetCustomFields"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["CustomerMemberships_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["CustomerMemberships_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CustomerMemberships_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getStatusChanges(tenant: number, id: number): Promise<SuccessResponse<operations["CustomerMemberships_GetStatusChanges"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/{id}/status-changes", { tenant, id });
      return client.request(path);
    },
    async create(tenant: number, body: NonNullable<operations["CustomerMemberships_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CustomerMemberships_Create"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/memberships/sale", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async membershipTypes(tenant: number, query?: operations["Export_MembershipTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_MembershipTypes"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/membership-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async recurringServiceTypes(tenant: number, query?: operations["Export_RecurringServiceTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_RecurringServiceTypes"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-service-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async memberships(tenant: number, query?: operations["Export_Memberships"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Memberships"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/memberships", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async invoiceTemplates(tenant: number, query?: operations["Export_InvoiceTemplates"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InvoiceTemplates"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/invoice-templates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async locationRecurringServices(tenant: number, query?: operations["Export_LocationRecurringServices"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_LocationRecurringServices"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-services", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async locationRecurringServiceEvents(tenant: number, query?: operations["Export_LocationRecurringServiceEvents"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_LocationRecurringServiceEvents"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/recurring-service-events", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async membershipStatusChanges(tenant: number, query?: operations["Export_MembershipStatusChanges"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_MembershipStatusChanges"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/export/membership-status-changes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    invoiceTemplates: {
    async getList(tenant: number, query: operations["InvoiceTemplates_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InvoiceTemplates_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["InvoiceTemplates_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InvoiceTemplates_Create"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["InvoiceTemplates_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["InvoiceTemplates_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InvoiceTemplates_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/invoice-templates/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    locationRecurringServiceEvents: {
    async getList(tenant: number, query?: operations["LocationRecurringServiceEvents_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async markComplete(tenant: number, id: number, body: NonNullable<operations["LocationRecurringServiceEvents_MarkComplete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_MarkComplete"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events/{id}/mark-complete", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markIncomplete(tenant: number, id: number, body: NonNullable<operations["LocationRecurringServiceEvents_MarkIncomplete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServiceEvents_MarkIncomplete"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-events/{id}/mark-incomplete", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    locationRecurringServices: {
    async getList(tenant: number, query?: operations["LocationRecurringServices_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationRecurringServices_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["LocationRecurringServices_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["LocationRecurringServices_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["LocationRecurringServices_Update"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-services/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    membershipTypes: {
    async getList(tenant: number, query?: operations["MembershipTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MembershipTypes_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["MembershipTypes_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}", { tenant, id });
      return client.request(path);
    },
    async getRecurringServiceItems(tenant: number, id: number): Promise<SuccessResponse<operations["MembershipTypes_GetRecurringServiceItems"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/recurring-service-items", { tenant, id });
      return client.request(path);
    },
    async getDiscountsList(tenant: number, id: number): Promise<SuccessResponse<operations["MembershipTypes_GetDiscountsList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/discounts", { tenant, id });
      return client.request(path);
    },
    async getDurationBillingList(tenant: number, id: number, query?: operations["MembershipTypes_GetDurationBillingList"]["parameters"]["query"]): Promise<SuccessResponse<operations["MembershipTypes_GetDurationBillingList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/membership-types/{id}/duration-billing-items", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    },
    recurringServiceTypes: {
    async getList(tenant: number, query?: operations["RecurringServiceTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["RecurringServiceTypes_GetList"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["RecurringServiceTypes_Get"]>> {
      const path = buildPath("/memberships/v2/tenant/{tenant}/recurring-service-types/{id}", { tenant, id });
      return client.request(path);
    },
    },
  };
}
