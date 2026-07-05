// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createFormsApi(client: ServiceTitanClient) {
  return {
    form: {
    async getForms(tenant: number, query?: operations["Form_GetForms"]["parameters"]["query"]): Promise<SuccessResponse<operations["Form_GetForms"]>> {
      const path = buildPath("/forms/v2/tenant/{tenant}/forms", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    formSubmission: {
    async getFormSubmissions(tenant: number, query?: operations["FormSubmission_GetFormSubmissions"]["parameters"]["query"]): Promise<SuccessResponse<operations["FormSubmission_GetFormSubmissions"]>> {
      const path = buildPath("/forms/v2/tenant/{tenant}/submissions", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    jobs: {
    async createAttachment(tenant: number, id: number, body: NonNullable<operations["Jobs_CreateAttachment"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Jobs_CreateAttachment"]>> {
      const path = buildPath("/forms/v2/tenant/{tenant}/jobs/{id}/attachments", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getJobAttachments(tenant: number, jobId: number, query?: operations["Jobs_GetJobAttachments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Jobs_GetJobAttachments"]>> {
      const path = buildPath("/forms/v2/tenant/{tenant}/jobs/{jobId}/attachments", { tenant, jobId });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Jobs_Get"]>> {
      const path = buildPath("/forms/v2/tenant/{tenant}/jobs/attachment/{id}", { tenant, id });
      return client.request(path);
    },
    },
  };
}
