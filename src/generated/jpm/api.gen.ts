// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createJpmApi(client: ServiceTitanClient) {
  return {
    appointments: {
    async get(id: number): Promise<SuccessResponse<operations["Appointments_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["Appointments_Delete"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async getList(query?: operations["Appointments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Appointments_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async add(body: NonNullable<operations["Appointments_Add"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Add"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async reschedule(id: number, body: NonNullable<operations["Appointments_Reschedule"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Reschedule"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/reschedule", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async hold(id: number, body: NonNullable<operations["Appointments_Hold"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_Hold"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/hold", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async removeHold(id: number): Promise<SuccessResponse<operations["Appointments_RemoveHold"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/hold", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async updateSpecialInstructions(id: number, body: NonNullable<operations["Appointments_UpdateSpecialInstructions"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_UpdateSpecialInstructions"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/special-instructions", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async confirm(id: number): Promise<SuccessResponse<operations["Appointments_Confirm"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/confirmation", { tenant: client.tenantId, id });
      return client.request(path, { method: "PUT" });
    },
    async removeConfirmation(id: number): Promise<SuccessResponse<operations["Appointments_RemoveConfirmation"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/confirmation", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async setSummary(id: number, body: NonNullable<operations["Appointments_SetSummary"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Appointments_SetSummary"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/appointments/{id}/summaries", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    budgetCodes: {
    async listCompanySegments(query?: operations["BudgetCodes_ListCompanySegments"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegments(projectId: number, query?: operations["BudgetCodes_ListProjectSegments"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments", { tenant: client.tenantId, projectId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanySegmentItems(segmentId: number, query?: operations["BudgetCodes_ListCompanySegmentItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegmentItems"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items", { tenant: client.tenantId, segmentId });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegmentItems(projectId: number, segmentId: number, query?: operations["BudgetCodes_ListProjectSegmentItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegmentItems"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items", { tenant: client.tenantId, projectId, segmentId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanySegmentItemChildren(segmentId: number, segmentItemId: number, query?: operations["BudgetCodes_ListCompanySegmentItemChildren"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanySegmentItemChildren"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items/{segmentItemId}/children", { tenant: client.tenantId, segmentId, segmentItemId });
      return client.request(path + buildQueryString(query));
    },
    async listProjectSegmentItemChildren(projectId: number, segmentId: number, segmentItemId: number, query?: operations["BudgetCodes_ListProjectSegmentItemChildren"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectSegmentItemChildren"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items/{segmentItemId}/children", { tenant: client.tenantId, projectId, segmentId, segmentItemId });
      return client.request(path + buildQueryString(query));
    },
    async listCompanyBudgetCodes(query?: operations["BudgetCodes_ListCompanyBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListCompanyBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createBudgetCode(body: NonNullable<operations["BudgetCodes_CreateBudgetCode"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCode"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async listProjectBudgetCodes(projectId: number, query?: operations["BudgetCodes_ListProjectBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_ListProjectBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes", { tenant: client.tenantId, projectId });
      return client.request(path + buildQueryString(query));
    },
    async matchCompanyBudgetCodes(query: operations["BudgetCodes_MatchCompanyBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_MatchCompanyBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/match", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async matchProjectBudgetCodes(projectId: number, query: operations["BudgetCodes_MatchProjectBudgetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["BudgetCodes_MatchProjectBudgetCodes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes/match", { tenant: client.tenantId, projectId });
      return client.request(path + buildQueryString(query));
    },
    async createBudgetCodePartial(body: NonNullable<operations["BudgetCodes_CreateBudgetCodePartial"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodePartial"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/partial", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async createBudgetCodesBatch(): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodesBatch"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/batch", { tenant: client.tenantId });
      return client.request(path, { method: "POST" });
    },
    async createBudgetCodesPartialBatch(): Promise<SuccessResponse<operations["BudgetCodes_CreateBudgetCodesPartialBatch"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/work-breakdown-structure/budget-codes/partial/batch", { tenant: client.tenantId });
      return client.request(path, { method: "POST" });
    },
    },
    export: {
    async jobs(query?: operations["Export_Jobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Jobs"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/jobs", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async projects(query?: operations["Export_Projects"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Projects"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/projects", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async appointments(query?: operations["Export_Appointments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Appointments"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/appointments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async jobCancelReasons(query?: operations["Export_JobCancelReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobCancelReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-canceled-logs", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async jobNotes(query?: operations["Export_JobNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-notes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async projectNotes(query?: operations["Export_ProjectNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ProjectNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/project-notes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async jobHistory(query?: operations["Export_JobHistory"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobHistory"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/export/job-history", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    jobCancelReasons: {
    async getList(query?: operations["JobCancelReasons_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobCancelReasons_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-cancel-reasons", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    jobEquipment: {
    async get(id: number): Promise<SuccessResponse<operations["JobEquipment_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async attach(id: number, body: NonNullable<operations["JobEquipment_Attach"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobEquipment_Attach"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async detachBulk(id: number, body: NonNullable<operations["JobEquipment_DetachBulk"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobEquipment_DetachBulk"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async detach(id: number, equipmentId: number): Promise<SuccessResponse<operations["JobEquipment_Detach"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/equipment/{equipmentId}", { tenant: client.tenantId, id, equipmentId });
      return client.request(path, { method: "DELETE" });
    },
    },
    jobHoldReasons: {
    async get(query?: operations["JobHoldReasons_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobHoldReasons_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-hold-reasons", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    jobs: {
    async get(id: number, query?: operations["Jobs_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async update(id: number, body: NonNullable<operations["Jobs_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(query?: operations["Jobs_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Jobs_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async cancel(id: number, body: NonNullable<operations["Jobs_Cancel"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_Cancel"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/cancel", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async removeCancellation(id: number): Promise<SuccessResponse<operations["Jobs_RemoveCancellation"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/remove-cancellation", { tenant: client.tenantId, id });
      return client.request(path, { method: "PUT" });
    },
    async getNotes(id: number, query?: operations["Jobs_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/notes", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(id: number, body: NonNullable<operations["Jobs_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_CreateNote"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/notes", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getHoldReasons(query: operations["Jobs_GetHoldReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetHoldReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/hold-reasons", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCancelReasons(query: operations["Jobs_GetCancelReasons"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetCancelReasons"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/cancel-reasons", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getHistory(id: number): Promise<SuccessResponse<operations["Jobs_GetHistory"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/history", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getJobCanceledLogs(id: number, query?: operations["Jobs_GetJobCanceledLogs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetJobCanceledLogs"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/canceled-log", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async getBookedLog(id: number): Promise<SuccessResponse<operations["Jobs_GetBookedLog"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/{id}/booked-log", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getCustomFieldTypes(query?: operations["Jobs_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetCustomFieldTypes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/jobs/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    jobTypes: {
    async getList(query?: operations["JobTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobTypes_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["JobTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobTypes_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["JobTypes_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobTypes_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async update(id: number, body: NonNullable<operations["JobTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JobTypes_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/job-types/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    projects: {
    async get(id: number, query?: operations["Projects_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async update(id: number, body: NonNullable<operations["Projects_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_Update"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(query?: operations["Projects_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Projects_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_Create"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getNotes(id: number, query?: operations["Projects_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetNotes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/notes", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(id: number, body: NonNullable<operations["Projects_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Projects_CreateNote"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/notes", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async attachJob(id: number, jobId: number): Promise<SuccessResponse<operations["Projects_AttachJob"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/{id}/attach-job/{jobId}", { tenant: client.tenantId, id, jobId });
      return client.request(path, { method: "POST" });
    },
    async detachJob(jobId: number): Promise<SuccessResponse<operations["Projects_DetachJob"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/detach-job/{jobId}", { tenant: client.tenantId, jobId });
      return client.request(path, { method: "POST" });
    },
    async getCustomFieldTypes(query?: operations["Projects_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Projects_GetCustomFieldTypes"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/projects/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    projectStatuses: {
    async getList(query?: operations["ProjectStatuses_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectStatuses_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-statuses", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["ProjectStatuses_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-statuses/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    projectSubStatuses: {
    async getList(query?: operations["ProjectSubStatuses_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectSubStatuses_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-substatuses", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["ProjectSubStatuses_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-substatuses/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    projectTypes: {
    async get(id: number): Promise<SuccessResponse<operations["ProjectTypes_Get"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-types/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async getList(query?: operations["ProjectTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ProjectTypes_GetList"]>> {
      const path = buildPath("/jpm/v2/tenant/{tenant}/project-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
