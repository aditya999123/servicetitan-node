// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createPayrollApi(client: ServiceTitanClient) {
  return {
    export: {
    async jobSplits(tenant: number, query?: operations["Export_JobSplits"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_JobSplits"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/jobs/splits", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async payrollAdjustments(tenant: number, query?: operations["Export_PayrollAdjustments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_PayrollAdjustments"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/payroll-adjustments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async timesheets(tenant: number, query?: operations["Export_Timesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Timesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/jobs/timesheets", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async activityCodes(tenant: number, query?: operations["Export_ActivityCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ActivityCodes"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/activity-codes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async timesheetCodes(tenant: number, query?: operations["Export_TimesheetCodes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_TimesheetCodes"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/timesheet-codes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async grossPayItems(tenant: number, query?: operations["Export_GrossPayItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_GrossPayItems"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/gross-pay-items", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async payrollSettings(tenant: number, query?: operations["Export_PayrollSettings"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_PayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/export/payroll-settings", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    grossPayItems: {
    async getList(tenant: number, query?: operations["GrossPayItems_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GrossPayItems_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["GrossPayItems_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GrossPayItems_Create"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["GrossPayItems_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GrossPayItems_Update"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["GrossPayItems_Delete"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/gross-pay-items/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    jobSplits: {
    async getList(tenant: number, job: number, query?: operations["JobSplits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobSplits_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/{job}/splits", { tenant, job });
      return client.request(path + buildQueryString(query));
    },
    async getListByJobs(tenant: number, query?: operations["JobSplits_GetListByJobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["JobSplits_GetListByJobs"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/splits", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    locationLaborType: {
    async getListByLocations(tenant: number, query?: operations["LocationLaborType_GetListByLocations"]["parameters"]["query"]): Promise<SuccessResponse<operations["LocationLaborType_GetListByLocations"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/locations/rates", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    activityCodes: {
    async getList(tenant: number, query?: operations["ActivityCodes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ActivityCodes_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/activity-codes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ActivityCodes_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/activity-codes/{id}", { tenant, id });
      return client.request(path);
    },
    },
    payrollAdjustments: {
    async getList(tenant: number, query?: operations["PayrollAdjustments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollAdjustments_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["PayrollAdjustments_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollAdjustments_Create"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number, query?: operations["PayrollAdjustments_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollAdjustments_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-adjustments/{id}", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    },
    payrolls: {
    async getList(tenant: number, query?: operations["Payrolls_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payrolls", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getTechnicianPayrolls(tenant: number, technician: number, query?: operations["Payrolls_GetTechnicianPayrolls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetTechnicianPayrolls"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payrolls", { tenant, technician });
      return client.request(path + buildQueryString(query));
    },
    async getEmployeePayrolls(tenant: number, employee: number, query?: operations["Payrolls_GetEmployeePayrolls"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payrolls_GetEmployeePayrolls"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payrolls", { tenant, employee });
      return client.request(path + buildQueryString(query));
    },
    },
    payrollSettings: {
    async getPayrollSettingsList(tenant: number, query?: operations["PayrollSettings_GetPayrollSettingsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PayrollSettings_GetPayrollSettingsList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/payroll-settings", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getEmployeePayrollSettings(tenant: number, employee: number): Promise<SuccessResponse<operations["PayrollSettings_GetEmployeePayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payroll-settings", { tenant, employee });
      return client.request(path);
    },
    async updateEmployeePayrollSettings(tenant: number, employee: number, body: NonNullable<operations["PayrollSettings_UpdateEmployeePayrollSettings"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollSettings_UpdateEmployeePayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/employees/{employee}/payroll-settings", { tenant, employee });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getTechnicianPayrollSettings(tenant: number, technician: number): Promise<SuccessResponse<operations["PayrollSettings_GetTechnicianPayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payroll-settings", { tenant, technician });
      return client.request(path);
    },
    async updateTechnicianPayrollSettings(tenant: number, technician: number, body: NonNullable<operations["PayrollSettings_UpdateTechnicianPayrollSettings"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["PayrollSettings_UpdateTechnicianPayrollSettings"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/technicians/{technician}/payroll-settings", { tenant, technician });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    timesheetCodes: {
    async getList(tenant: number, query?: operations["TimesheetCodes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TimesheetCodes_GetList"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/timesheet-codes", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["TimesheetCodes_Get"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/timesheet-codes/{id}", { tenant, id });
      return client.request(path);
    },
    },
    timesheets: {
    async getJobTimesheets(tenant: number, job: number, query?: operations["Timesheets_GetJobTimesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetJobTimesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/{job}/timesheets", { tenant, job });
      return client.request(path + buildQueryString(query));
    },
    async getNonJobTimesheets(tenant: number, query?: operations["Timesheets_GetNonJobTimesheets"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetNonJobTimesheets"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/non-job-timesheets", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getJobTimesheetsByJobs(tenant: number, query?: operations["Timesheets_GetJobTimesheetsByJobs"]["parameters"]["query"]): Promise<SuccessResponse<operations["Timesheets_GetJobTimesheetsByJobs"]>> {
      const path = buildPath("/payroll/v2/tenant/{tenant}/jobs/timesheets", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
