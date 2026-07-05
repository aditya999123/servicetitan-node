// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createTimesheetsApi(client: ServiceTitanClient) {
  return {
    activitiesControllers: {
    async getList(tenant: number, query?: operations["ActivitiesControllers_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ActivitiesControllers_GetList"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activities", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["ActivitiesControllers_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ActivitiesControllers_Create"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activities", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ActivitiesControllers_Get"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activities/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["ActivitiesControllers_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ActivitiesControllers_Update"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activities/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["ActivitiesControllers_Delete"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activities/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    activityCategories: {
    async getList(tenant: number, query?: operations["ActivityCategories_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ActivityCategories_GetList"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activity-categories", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ActivityCategories_Get"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activity-categories/{id}", { tenant, id });
      return client.request(path);
    },
    },
    activityTypes: {
    async getList(tenant: number, query?: operations["ActivityTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ActivityTypes_GetList"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activity-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ActivityTypes_Get"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/activity-types/{id}", { tenant, id });
      return client.request(path);
    },
    },
    export: {
    async activityCategories(tenant: number, query?: operations["Export_ActivityCategories"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ActivityCategories"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/export/activity-categories", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async activityTypes(tenant: number, query?: operations["Export_ActivityTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ActivityTypes"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/export/activity-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async activities(tenant: number, query?: operations["Export_Activities"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Activities"]>> {
      const path = buildPath("/timesheets/v2/tenant/{tenant}/export/activities", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
