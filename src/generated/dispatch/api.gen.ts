// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createDispatchApi(client: ServiceTitanClient) {
  return {
    gps: {
    async create(gps_provider: string, body: NonNullable<operations["Gps_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Gps_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/gps-provider/{gps_provider}/gps-pings", { tenant: client.tenantId, gps_provider });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    appointmentAssignments: {
    async getList(query?: operations["AppointmentAssignments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["AppointmentAssignments_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async assignTechnicians(body: NonNullable<operations["AppointmentAssignments_AssignTechnicians"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["AppointmentAssignments_AssignTechnicians"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments/assign-technicians", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async unassignTechnicians(body: NonNullable<operations["AppointmentAssignments_UnassignTechnicians"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["AppointmentAssignments_UnassignTechnicians"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments/unassign-technicians", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    arrivalWindows: {
    async getList(query?: operations["ArrivalWindows_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ArrivalWindows_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["ArrivalWindows_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["ArrivalWindows_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["ArrivalWindows_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async activated(id: number, body: NonNullable<operations["ArrivalWindows_Activated"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Activated"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}/activated", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getConfiguration(): Promise<SuccessResponse<operations["ArrivalWindows_GetConfiguration"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/configuration", { tenant: client.tenantId });
      return client.request(path);
    },
    async updatedConfiguration(body: NonNullable<operations["ArrivalWindows_UpdatedConfiguration"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_UpdatedConfiguration"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/configuration", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    businessHour: {
    async getList(): Promise<SuccessResponse<operations["BusinessHour_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/business-hours", { tenant: client.tenantId });
      return client.request(path);
    },
    async create(body: NonNullable<operations["BusinessHour_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BusinessHour_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/business-hours", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    capacity: {
    async getList(body: NonNullable<operations["Capacity_GetList"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Capacity_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/capacity", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async appointmentAssignments(query?: operations["Export_AppointmentAssignments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_AppointmentAssignments"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/export/appointment-assignments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    nonJobAppointments: {
    async get(id: number): Promise<SuccessResponse<operations["NonJobAppointments_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async update(id: number, body: NonNullable<operations["NonJobAppointments_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["NonJobAppointments_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async delete(id: number): Promise<SuccessResponse<operations["NonJobAppointments_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async getList(query?: operations["NonJobAppointments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["NonJobAppointments_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["NonJobAppointments_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["NonJobAppointments_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    team: {
    async getList(query?: operations["Team_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Team_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["Team_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Team_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["Team_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["Team_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    technicianShifts: {
    async getList(query?: operations["TechnicianShifts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianShifts_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async create(body: NonNullable<operations["TechnicianShifts_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["TechnicianShifts_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: number): Promise<SuccessResponse<operations["TechnicianShifts_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: number, body: NonNullable<operations["TechnicianShifts_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async bulkDelete(body: NonNullable<operations["TechnicianShifts_BulkDelete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_BulkDelete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/bulk-delete", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    technicianSkills: {
    async getList(query?: operations["TechnicianSkills_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianSkills_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createTechnicianSkill(body: NonNullable<operations["TechnicianSkills_CreateTechnicianSkill"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianSkills_CreateTechnicianSkill"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async assignTechnicianSkills(body: NonNullable<operations["TechnicianSkills_AssignTechnicianSkills"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianSkills_AssignTechnicianSkills"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: string): Promise<SuccessResponse<operations["TechnicianSkills_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async delete(id: string): Promise<SuccessResponse<operations["TechnicianSkills_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    technicianTracking: {
    async get(query: operations["TechnicianTracking_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianTracking_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-tracking", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    zone: {
    async getList(query?: operations["Zone_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Zone_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createZone(body: NonNullable<operations["Zone_CreateZone"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Zone_CreateZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(id: number): Promise<SuccessResponse<operations["Zone_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async deleteZone(zoneId: number): Promise<SuccessResponse<operations["Zone_DeleteZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{zoneId}", { tenant: client.tenantId, zoneId });
      return client.request(path, { method: "DELETE" });
    },
    async updateZone(zoneId: number, body: NonNullable<operations["Zone_UpdateZone"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Zone_UpdateZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{zoneId}", { tenant: client.tenantId, zoneId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
