// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createJpmApi(client: ServiceTitanClient) {
  return {
    appointments: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Appointments_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Appointments_Delete"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async getList(tenant: number, query?: operations["Appointments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Appointments_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async add(tenant: number, body: NonNullable<operations["Appointments_Add"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Add"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async reschedule(tenant: number, id: number, body: NonNullable<operations["Appointments_Reschedule"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Reschedule"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/reschedule", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async hold(tenant: number, id: number, body: NonNullable<operations["Appointments_Hold"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Hold"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/hold", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async removeHold(tenant: number, id: number): Promise<SuccessResponse<operations["Appointments_RemoveHold"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/hold", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async updateSpecialInstructions(tenant: number, id: number, body: NonNullable<operations["Appointments_UpdateSpecialInstructions"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_UpdateSpecialInstructions"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/special-instructions", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async confirm(tenant: number, id: number): Promise<SuccessResponse<operations["Appointments_Confirm"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/confirmation", { tenant, id });
      return client.request(path, { method: "PUT" });
    },
    async removeConfirmation(tenant: number, id: number): Promise<SuccessResponse<operations["Appointments_RemoveConfirmation"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/confirmation", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async setSummary(tenant: number, id: number, body: NonNullable<operations["Appointments_SetSummary"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_SetSummary"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/summaries", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    budgetCodes: {
    async listCompanySegments(tenant: number, query?: operations["BudgetCodes_ListCompanySegments"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegments(tenant: number, projectId: number, query?: operations["BudgetCodes_ListProjectSegments"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments", { tenant, projectId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanySegmentItems(tenant: number, segmentId: number, query?: operations["BudgetCodes_ListCompanySegmentItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegmentItems"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items", { tenant, segmentId });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegmentItems(tenant: number, projectId: number, segmentId: number, query?: operations["BudgetCodes_ListProjectSegmentItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegmentItems"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items", { tenant, projectId, segmentId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanySegmentItemChildren(tenant: number, segmentId: number, segmentItemId: number, query?: operations["BudgetCodes_ListCompanySegmentItemChildren"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegmentItemChildren"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items/{segmentItemId}/children", { tenant, segmentId, segmentItemId });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegmentItemChildren(tenant: number, projectId: number, segmentId: number, segmentItemId: number, query?: operations["BudgetCodes_ListProjectSegmentItemChildren"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegmentItemChildren"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items/{segmentItemId}/children", { tenant, projectId, segmentId, segmentItemId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanyBudgetCodes(tenant: number, query?: operations["BudgetCodes_ListCompanyBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanyBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createBudgetCode(tenant: number, body: NonNullable<operations["BudgetCodes_CreateBudgetCode"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCode"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async listProjectBudgetCodes(tenant: number, projectId: number, query?: operations["BudgetCodes_ListProjectBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes", { tenant, projectId });
      return client.request(path + buildQueryString(query));
    },
    async matchCompanyBudgetCodes(tenant: number, query: operations["BudgetCodes_MatchCompanyBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_MatchCompanyBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/match", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async matchProjectBudgetCodes(tenant: number, projectId: number, query: operations["BudgetCodes_MatchProjectBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_MatchProjectBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes/match", { tenant, projectId });
      return client.request(path + buildQueryString(query));
    },
    async createBudgetCodePartial(tenant: number, body: NonNullable<operations["BudgetCodes_CreateBudgetCodePartial"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodePartial"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/partial", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async createBudgetCodesBatch(tenant: number): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodesBatch"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/batch", { tenant });
      return client.request(path, { method: "POST" });
    },
    async createBudgetCodesPartialBatch(tenant: number): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodesPartialBatch"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/partial/batch", { tenant });
      return client.request(path, { method: "POST" });
    },
    },
    export: {
    async jobs(tenant: number, query?: operations["Export_Jobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Jobs"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/jobs", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async projects(tenant: number, query?: operations["Export_Projects"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Projects"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/projects", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async appointments(tenant: number, query?: operations["Export_Appointments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Appointments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/appointments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async jobCancelReasons(tenant: number, query?: operations["Export_JobCancelReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobCancelReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-canceled-logs", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async jobNotes(tenant: number, query?: operations["Export_JobNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-notes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async projectNotes(tenant: number, query?: operations["Export_ProjectNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ProjectNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/project-notes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async jobHistory(tenant: number, query?: operations["Export_JobHistory"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobHistory"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-history", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    jobCancelReasons: {
    async getList(tenant: number, query?: operations["JobCancelReasons_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobCancelReasons_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-cancel-reasons", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    jobEquipment: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["JobEquipment_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant, id });
      return client.request(path);
    },
    async attach(tenant: number, id: number, body: NonNullable<operations["JobEquipment_Attach"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobEquipment_Attach"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async detachBulk(tenant: number, id: number, body: NonNullable<operations["JobEquipment_DetachBulk"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobEquipment_DetachBulk"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant, id });
      return client.request(path, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async detach(tenant: number, id: number, equipmentId: number): Promise<SuccessResponse<operations["JobEquipment_Detach"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment/{equipmentId}", { tenant, id, equipmentId });
      return client.request(path, { method: "DELETE" });
    },
    },
    jobHoldReasons: {
    async get(tenant: number, query?: operations["JobHoldReasons_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobHoldReasons_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-hold-reasons", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    jobs: {
    async get(tenant: number, id: number, query?: operations["Jobs_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Jobs_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Jobs_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Jobs_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async cancel(tenant: number, id: number, body: NonNullable<operations["Jobs_Cancel"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Cancel"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/cancel", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async removeCancellation(tenant: number, id: number): Promise<SuccessResponse<operations["Jobs_RemoveCancellation"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/remove-cancellation", { tenant, id });
      return client.request(path, { method: "PUT" });
    },
    async getNotes(tenant: number, id: number, query?: operations["Jobs_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/notes", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(tenant: number, id: number, body: NonNullable<operations["Jobs_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_CreateNote"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/notes", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getHoldReasons(tenant: number, query: operations["Jobs_GetHoldReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetHoldReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/hold-reasons", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCancelReasons(tenant: number, query: operations["Jobs_GetCancelReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetCancelReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/cancel-reasons", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getHistory(tenant: number, id: number): Promise<SuccessResponse<operations["Jobs_GetHistory"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/history", { tenant, id });
      return client.request(path);
    },
    async getJobCanceledLogs(tenant: number, id: number, query?: operations["Jobs_GetJobCanceledLogs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetJobCanceledLogs"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/canceled-log", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async getBookedLog(tenant: number, id: number): Promise<SuccessResponse<operations["Jobs_GetBookedLog"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/booked-log", { tenant, id });
      return client.request(path);
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Jobs_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetCustomFieldTypes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    jobTypes: {
    async getList(tenant: number, query?: operations["JobTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobTypes_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["JobTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobTypes_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["JobTypes_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobTypes_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["JobTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobTypes_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    projects: {
    async get(tenant: number, id: number, query?: operations["Projects_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Projects_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Projects_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Projects_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getNotes(tenant: number, id: number, query?: operations["Projects_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/notes", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(tenant: number, id: number, body: NonNullable<operations["Projects_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_CreateNote"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/notes", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async attachJob(tenant: number, id: number, jobId: number): Promise<SuccessResponse<operations["Projects_AttachJob"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/attach-job/{jobId}", { tenant, id, jobId });
      return client.request(path, { method: "POST" });
    },
    async detachJob(tenant: number, jobId: number): Promise<SuccessResponse<operations["Projects_DetachJob"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/detach-job/{jobId}", { tenant, jobId });
      return client.request(path, { method: "POST" });
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Projects_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetCustomFieldTypes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    projectStatuses: {
    async getList(tenant: number, query?: operations["ProjectStatuses_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectStatuses_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-statuses", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ProjectStatuses_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-statuses/{id}", { tenant, id });
      return client.request(path);
    },
    },
    projectSubStatuses: {
    async getList(tenant: number, query?: operations["ProjectSubStatuses_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectSubStatuses_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-substatuses", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ProjectSubStatuses_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-substatuses/{id}", { tenant, id });
      return client.request(path);
    },
    },
    projectTypes: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ProjectTypes_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-types/{id}", { tenant, id });
      return client.request(path);
    },
    async getList(tenant: number, query?: operations["ProjectTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectTypes_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
