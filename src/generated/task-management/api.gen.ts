// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createTaskManagementApi(client: ServiceTitanClient) {
  return {
    clientSideData: {
    async get(tenant: number): Promise<SuccessResponse<operations["ClientSideData_Get"]>> {
      const path = buildPath("/taskmanagement/v2/tenant/{tenant}/data", { tenant });
      return client.request(path);
    },
    },
    tasks: {
    async getTasks(tenant: number, query?: operations["Tasks_GetTasks"]["parameters"]["query"]): Promise<SuccessResponse<operations["Tasks_GetTasks"]>> {
      const path = buildPath("/taskmanagement/v2/tenant/{tenant}/tasks", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Tasks_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Tasks_Create"]>> {
      const path = buildPath("/taskmanagement/v2/tenant/{tenant}/tasks", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getTask(tenant: number, id: number, query?: operations["Tasks_GetTask"]["parameters"]["query"]): Promise<SuccessResponse<operations["Tasks_GetTask"]>> {
      const path = buildPath("/taskmanagement/v2/tenant/{tenant}/tasks/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createSubtask(tenant: number, id: number, body: NonNullable<operations["Tasks_CreateSubtask"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Tasks_CreateSubtask"]>> {
      const path = buildPath("/taskmanagement/v2/tenant/{tenant}/tasks/{id}/subtasks", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
