// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createFindingsApi(client: ServiceTitanClient) {
  return {
    findingAssets: {
    async get(query?: operations["FindingAssets_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["FindingAssets_Get"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/assets", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async postAttachment(body: NonNullable<operations["FindingAssets_PostAttachment"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["FindingAssets_PostAttachment"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/assets", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    findings: {
    async getList(query?: operations["Findings_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Findings_GetList"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Findings_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Findings_Create"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["Findings_Get"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["Findings_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Findings_Update"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getFindingAttachments(id: number, query?: operations["Findings_GetFindingAttachments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Findings_GetFindingAttachments"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}/attachments", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async createFindingAttachment(id: number, body: NonNullable<operations["Findings_CreateFindingAttachment"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Findings_CreateFindingAttachment"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}/attachments", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getFindingAttachment(id: number, attachmentId: number): Promise<SuccessResponse<operations["Findings_GetFindingAttachment"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}/attachments/{attachmentId}", { tenant: client.tenantId, id, attachmentId });
      return client.request(path);
    },
    async deleteFindingAttachment(id: number, attachmentId: number): Promise<SuccessResponse<operations["Findings_DeleteFindingAttachment"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}/attachments/{attachmentId}", { tenant: client.tenantId, id, attachmentId });
      return client.request(path, { method: "DELETE" });
    },
    async updateFindingAttachment(id: number, attachmentId: number, body: NonNullable<operations["Findings_UpdateFindingAttachment"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Findings_UpdateFindingAttachment"]>> {
      const path = buildPath("/findings/v2/tenant/{tenant}/location-findings/{id}/attachments/{attachmentId}", { tenant: client.tenantId, id, attachmentId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
