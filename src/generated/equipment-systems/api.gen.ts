// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createEquipmentSystemsApi(client: ServiceTitanClient) {
  return {
    equipmentTypes: {
    async getList(tenant: number, query?: operations["EquipmentTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["EquipmentTypes_GetList"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/equipment-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["EquipmentTypes_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EquipmentTypes_Create"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/equipment-types", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["EquipmentTypes_Get"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/equipment-types/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["EquipmentTypes_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["EquipmentTypes_Update"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/equipment-types/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async exportInstalledEquipment(tenant: number, query?: operations["Export_ExportInstalledEquipment"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_ExportInstalledEquipment"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/export/installed-equipment", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    installedEquipment: {
    async getList(tenant: number, query?: operations["InstalledEquipment_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InstalledEquipment_GetList"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["InstalledEquipment_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InstalledEquipment_Create"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["InstalledEquipment_Get"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["InstalledEquipment_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InstalledEquipment_Update"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get2(tenant: number, query?: operations["InstalledEquipment_Get2"]["parameters"]["query"]): Promise<SuccessResponse<operations["InstalledEquipment_Get2"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment/attachments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async postAttachment(tenant: number, body: NonNullable<operations["InstalledEquipment_PostAttachment"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InstalledEquipment_PostAttachment"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment/attachments", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCustomFieldTypes(tenant: number, query: operations["InstalledEquipment_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["InstalledEquipment_GetCustomFieldTypes"]>> {
      const path = buildPath("/equipmentsystems/v2/tenant/{tenant}/installed-equipment/custom-field-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
