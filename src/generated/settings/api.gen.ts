// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSettingsApi(client: ServiceTitanClient) {
  return {
    intacctBusinessUnitMappings: {
    async get(tenant: number, query: operations["IntacctBusinessUnitMappings_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["IntacctBusinessUnitMappings_Get"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/business-units/intacct", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    employees: {
    async getList(tenant: number, query?: operations["Employees_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Employees_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Employees_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Employees_Create"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Employees_Get"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Employees_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Employees_Update"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async accountActions(tenant: number, id: number, body: NonNullable<operations["Employees_AccountActions"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Employees_AccountActions"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/employees/{id}/account-actions", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async employees(tenant: number, query?: operations["Export_Employees"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Employees"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/export/employees", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async technicians(tenant: number, query?: operations["Export_Technicians"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Technicians"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/export/technicians", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async businessUnits(tenant: number, query?: operations["Export_BusinessUnits"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_BusinessUnits"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/export/business-units", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async tagTypes(tenant: number, query?: operations["Export_TagTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_TagTypes"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/export/tag-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    technicians: {
    async getList(tenant: number, query?: operations["Technicians_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Technicians_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/technicians", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Technicians_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Technicians_Create"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/technicians", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Technicians_Get"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/technicians/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Technicians_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Technicians_Update"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/technicians/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async accountActions(tenant: number, id: number, body: NonNullable<operations["Technicians_AccountActions"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Technicians_AccountActions"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/technicians/{id}/account-actions", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    userRoles: {
    async getList(tenant: number, query?: operations["UserRoles_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["UserRoles_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/user-roles", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    businessUnits: {
    async getList(tenant: number, query?: operations["BusinessUnits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["BusinessUnits_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/business-units", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number, query?: operations["BusinessUnits_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["BusinessUnits_Get"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/business-units/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["BusinessUnits_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BusinessUnits_Update"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/business-units/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    tagTypes: {
    async getList(tenant: number, query?: operations["TagTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TagTypes_GetList"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/tag-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["TagTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TagTypes_Create"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/tag-types", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["TagTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TagTypes_Update"]>> {
      const path = buildPath("/settings/v2/tenant/{tenant}/tag-types/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
