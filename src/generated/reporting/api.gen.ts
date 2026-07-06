// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createReportingApi(client: ServiceTitanClient) {
  return {
    dynamicValueSets: {
    async getDynamicSet(dynamicSetId: string, query?: operations["DynamicValueSets_GetDynamicSet"]["parameters"]["query"]): Promise<SuccessResponse<operations["DynamicValueSets_GetDynamicSet"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/dynamic-value-sets/{dynamicSetId}", { tenant: client.tenantId, dynamicSetId });
      return client.request(path + buildQueryString(query));
    },
    },
    reportCategories: {
    async getCategories(query?: operations["ReportCategories_GetCategories"]["parameters"]["query"]): Promise<SuccessResponse<operations["ReportCategories_GetCategories"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/report-categories", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    reportCategoryReports: {
    async getReports(report_category: string, query?: operations["ReportCategoryReports_GetReports"]["parameters"]["query"]): Promise<SuccessResponse<operations["ReportCategoryReports_GetReports"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/report-category/{report_category}/reports", { tenant: client.tenantId, report_category });
      return client.request(path + buildQueryString(query));
    },
    async get(report_category: string, reportId: number): Promise<SuccessResponse<operations["ReportCategoryReports_Get"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/report-category/{report_category}/reports/{reportId}", { tenant: client.tenantId, report_category, reportId });
      return client.request(path);
    },
    async getData(report_category: string, reportId: number, body: NonNullable<operations["ReportCategoryReports_GetData"]["requestBody"]>["content"]["application/json"], query?: operations["ReportCategoryReports_GetData"]["parameters"]["query"]): Promise<SuccessResponse<operations["ReportCategoryReports_GetData"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/report-category/{report_category}/reports/{reportId}/data", { tenant: client.tenantId, report_category, reportId });
      return client.request(path + buildQueryString(query), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async startGetData(report_category: string, reportId: number, body: NonNullable<operations["ReportCategoryReports_StartGetData"]["requestBody"]>["content"]["application/json"], query?: operations["ReportCategoryReports_StartGetData"]["parameters"]["query"]): Promise<SuccessResponse<operations["ReportCategoryReports_StartGetData"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/report-category/{report_category}/reports/{reportId}/data/query", { tenant: client.tenantId, report_category, reportId });
      return client.request(path + buildQueryString(query), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    reportDataQueries: {
    async get(token: string): Promise<SuccessResponse<operations["ReportDataQueries_Get"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/data-queries/{token}", { tenant: client.tenantId, token });
      return client.request(path);
    },
    async cancel(token: string): Promise<SuccessResponse<operations["ReportDataQueries_Cancel"]>> {
      const path = buildPath("/reporting/v2/tenant/{tenant}/data-queries/{token}", { tenant: client.tenantId, token });
      return client.request(path, { method: "DELETE" });
    },
    },
  };
}
