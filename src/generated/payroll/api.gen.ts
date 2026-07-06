// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createPayrollApi(client: ServiceTitanClient) {
  return {
    export: {
    async jobSplits(query?: operations["Export_JobSplits"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobSplits"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/jobs/splits", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async payrollAdjustments(query?: operations["Export_PayrollAdjustments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_PayrollAdjustments"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/payroll-adjustments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async timesheets(query?: operations["Export_Timesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Timesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/jobs/timesheets", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async activityCodes(query?: operations["Export_ActivityCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ActivityCodes"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/activity-codes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async timesheetCodes(query?: operations["Export_TimesheetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_TimesheetCodes"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/timesheet-codes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async grossPayItems(query?: operations["Export_GrossPayItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_GrossPayItems"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/gross-pay-items", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async payrollSettings(query?: operations["Export_PayrollSettings"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_PayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/payroll-settings", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    grossPayItems: {
    async getList(query?: operations["GrossPayItems_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GrossPayItems_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["GrossPayItems_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GrossPayItems_Create"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(id: number, body: NonNullable<operations["GrossPayItems_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GrossPayItems_Update"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async delete(id: number): Promise<SuccessResponse<operations["GrossPayItems_Delete"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    jobSplits: {
    async getList(job: number, query?: operations["JobSplits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobSplits_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/{job}/splits", { tenant: client.tenantId, job });
      return client.request(path + buildQueryString(query));
    },
    async getListByJobs(query?: operations["JobSplits_GetListByJobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobSplits_GetListByJobs"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/splits", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    locationLaborType: {
    async getListByLocations(query?: operations["LocationLaborType_GetListByLocations"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationLaborType_GetListByLocations"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/locations/rates", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    activityCodes: {
    async getList(query?: operations["ActivityCodes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ActivityCodes_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/activity-codes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["ActivityCodes_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/activity-codes/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    payrollAdjustments: {
    async getList(query?: operations["PayrollAdjustments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollAdjustments_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["PayrollAdjustments_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollAdjustments_Create"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number, query?: operations["PayrollAdjustments_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollAdjustments_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments/{id}", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    },
    payrolls: {
    async getList(query?: operations["Payrolls_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payrolls", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getTechnicianPayrolls(technician: number, query?: operations["Payrolls_GetTechnicianPayrolls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetTechnicianPayrolls"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payrolls", { tenant: client.tenantId, technician });
      return client.request(path + buildQueryString(query));
    },
    async getEmployeePayrolls(employee: number, query?: operations["Payrolls_GetEmployeePayrolls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetEmployeePayrolls"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payrolls", { tenant: client.tenantId, employee });
      return client.request(path + buildQueryString(query));
    },
    },
    payrollSettings: {
    async getPayrollSettingsList(query?: operations["PayrollSettings_GetPayrollSettingsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollSettings_GetPayrollSettingsList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-settings", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getEmployeePayrollSettings(employee: number): Promise<SuccessResponse<operations["PayrollSettings_GetEmployeePayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payroll-settings", { tenant: client.tenantId, employee });
      return client.request(path);
    },
    async updateEmployeePayrollSettings(employee: number, body: NonNullable<operations["PayrollSettings_UpdateEmployeePayrollSettings"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollSettings_UpdateEmployeePayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payroll-settings", { tenant: client.tenantId, employee });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getTechnicianPayrollSettings(technician: number): Promise<SuccessResponse<operations["PayrollSettings_GetTechnicianPayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payroll-settings", { tenant: client.tenantId, technician });
      return client.request(path);
    },
    async updateTechnicianPayrollSettings(technician: number, body: NonNullable<operations["PayrollSettings_UpdateTechnicianPayrollSettings"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollSettings_UpdateTechnicianPayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payroll-settings", { tenant: client.tenantId, technician });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    timesheetCodes: {
    async getList(query?: operations["TimesheetCodes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TimesheetCodes_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/timesheet-codes", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["TimesheetCodes_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/timesheet-codes/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    timesheets: {
    async getJobTimesheets(job: number, query?: operations["Timesheets_GetJobTimesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetJobTimesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/{job}/timesheets", { tenant: client.tenantId, job });
      return client.request(path + buildQueryString(query));
    },
    async getNonJobTimesheets(query?: operations["Timesheets_GetNonJobTimesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetNonJobTimesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/non-job-timesheets", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getJobTimesheetsByJobs(query?: operations["Timesheets_GetJobTimesheetsByJobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetJobTimesheetsByJobs"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/timesheets", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
