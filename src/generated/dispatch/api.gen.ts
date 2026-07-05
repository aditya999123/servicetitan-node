// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createDispatchApi(client: ServiceTitanClient) {
  return {
    gps: {
    async create(tenant: number, gps_provider: string, body: NonNullable<operations["Gps_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Gps_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/gps-provider/{gps_provider}/gps-pings", { tenant, gps_provider });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    appointmentAssignments: {
    async getList(tenant: number, query?: operations["AppointmentAssignments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["AppointmentAssignments_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async assignTechnicians(tenant: number, body: NonNullable<operations["AppointmentAssignments_AssignTechnicians"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["AppointmentAssignments_AssignTechnicians"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments/assign-technicians", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async unassignTechnicians(tenant: number, body: NonNullable<operations["AppointmentAssignments_UnassignTechnicians"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["AppointmentAssignments_UnassignTechnicians"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/appointment-assignments/unassign-technicians", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    arrivalWindows: {
    async getList(tenant: number, query?: operations["ArrivalWindows_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ArrivalWindows_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["ArrivalWindows_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["ArrivalWindows_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["ArrivalWindows_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async activated(tenant: number, id: number, body: NonNullable<operations["ArrivalWindows_Activated"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_Activated"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/{id}/activated", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getConfiguration(tenant: number): Promise<SuccessResponse<operations["ArrivalWindows_GetConfiguration"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/configuration", { tenant });
      return client.request(path);
    },
    async updatedConfiguration(tenant: number, body: NonNullable<operations["ArrivalWindows_UpdatedConfiguration"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ArrivalWindows_UpdatedConfiguration"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/arrival-windows/configuration", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    businessHour: {
    async getList(tenant: number): Promise<SuccessResponse<operations["BusinessHour_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/business-hours", { tenant });
      return client.request(path);
    },
    async create(tenant: number, body: NonNullable<operations["BusinessHour_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BusinessHour_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/business-hours", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    capacity: {
    async getList(tenant: number, body: NonNullable<operations["Capacity_GetList"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Capacity_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/capacity", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async appointmentAssignments(tenant: number, query?: operations["Export_AppointmentAssignments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_AppointmentAssignments"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/export/appointment-assignments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    nonJobAppointments: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["NonJobAppointments_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["NonJobAppointments_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["NonJobAppointments_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["NonJobAppointments_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async getList(tenant: number, query?: operations["NonJobAppointments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["NonJobAppointments_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["NonJobAppointments_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["NonJobAppointments_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/non-job-appointments", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    team: {
    async getList(tenant: number, query?: operations["Team_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Team_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Team_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Team_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Team_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["Team_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/teams/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    technicianShifts: {
    async getList(tenant: number, query?: operations["TechnicianShifts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianShifts_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["TechnicianShifts_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_Create"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["TechnicianShifts_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: number): Promise<SuccessResponse<operations["TechnicianShifts_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["TechnicianShifts_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_Update"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async bulkDelete(tenant: number, body: NonNullable<operations["TechnicianShifts_BulkDelete"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianShifts_BulkDelete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-shifts/bulk-delete", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    technicianSkills: {
    async getList(tenant: number, query?: operations["TechnicianSkills_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianSkills_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createTechnicianSkill(tenant: number, body: NonNullable<operations["TechnicianSkills_CreateTechnicianSkill"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianSkills_CreateTechnicianSkill"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async assignTechnicianSkills(tenant: number, body: NonNullable<operations["TechnicianSkills_AssignTechnicianSkills"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["TechnicianSkills_AssignTechnicianSkills"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: string): Promise<SuccessResponse<operations["TechnicianSkills_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills/{id}", { tenant, id });
      return client.request(path);
    },
    async delete(tenant: number, id: string): Promise<SuccessResponse<operations["TechnicianSkills_Delete"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-skills/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    },
    technicianTracking: {
    async get(tenant: number, query: operations["TechnicianTracking_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["TechnicianTracking_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/technician-tracking", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    zone: {
    async getList(tenant: number, query?: operations["Zone_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Zone_GetList"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createZone(tenant: number, body: NonNullable<operations["Zone_CreateZone"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Zone_CreateZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Zone_Get"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{id}", { tenant, id });
      return client.request(path);
    },
    async deleteZone(tenant: number, zoneId: number): Promise<SuccessResponse<operations["Zone_DeleteZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{zoneId}", { tenant, zoneId });
      return client.request(path, { method: "DELETE" });
    },
    async updateZone(tenant: number, zoneId: number, body: NonNullable<operations["Zone_UpdateZone"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Zone_UpdateZone"]>> {
      const path = buildPath("/dispatch/v2/tenant/{tenant}/zones/{zoneId}", { tenant, zoneId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
  };
}
