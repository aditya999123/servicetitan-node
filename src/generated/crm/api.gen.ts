// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createCrmApi(client: ServiceTitanClient) {
  return {
    bookingProviderTags: {
    async getList(tenant: number, query?: operations["BookingProviderTags_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["BookingProviderTags_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider-tags", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["BookingProviderTags_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BookingProviderTags_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider-tags", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["BookingProviderTags_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider-tags/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["BookingProviderTags_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BookingProviderTags_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider-tags/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    bookings: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Bookings_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/bookings/{id}", { tenant, id });
      return client.request(path);
    },
    async getList(tenant: number, query?: operations["Bookings_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Bookings_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/bookings", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getContactList(tenant: number, id: number, query?: operations["Bookings_GetContactList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Bookings_GetContactList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/bookings/{id}/contacts", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async getForProvider(tenant: number, booking_provider: number, id: number): Promise<SuccessResponse<operations["Bookings_GetForProvider"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}", { tenant, booking_provider, id });
      return client.request(path);
    },
    async update(tenant: number, booking_provider: number, id: number, body: NonNullable<operations["Bookings_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Bookings_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}", { tenant, booking_provider, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList2(tenant: number, booking_provider: number, query?: operations["Bookings_GetList2"]["parameters"]["query"]): Promise<SuccessResponse<operations["Bookings_GetList2"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings", { tenant, booking_provider });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, booking_provider: number, body: NonNullable<operations["Bookings_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Bookings_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings", { tenant, booking_provider });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getContactList2(tenant: number, booking_provider: number, id: number, query?: operations["Bookings_GetContactList2"]["parameters"]["query"]): Promise<SuccessResponse<operations["Bookings_GetContactList2"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts", { tenant, booking_provider, id });
      return client.request(path + buildQueryString(query));
    },
    async createContact(tenant: number, booking_provider: number, id: number, body: NonNullable<operations["Bookings_CreateContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Bookings_CreateContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts", { tenant, booking_provider, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteContact(tenant: number, booking_provider: number, id: number, contactId: number): Promise<SuccessResponse<operations["Bookings_DeleteContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts/{contactId}", { tenant, booking_provider, id, contactId });
      return client.request(path, { method: "DELETE" });
    },
    async updateBookingContact(tenant: number, booking_provider: number, id: number, contactId: number, body: NonNullable<operations["Bookings_UpdateBookingContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Bookings_UpdateBookingContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts/{contactId}", { tenant, booking_provider, id, contactId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async dismissBooking(tenant: number, booking_provider: string, id: number, body: NonNullable<operations["Bookings_DismissBooking"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Bookings_DismissBooking"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/dismiss", { tenant, booking_provider, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    bulkTags: {
    async addTags(tenant: number, body: NonNullable<operations["BulkTags_AddTags"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BulkTags_AddTags"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/tags", { tenant });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async removeTags(tenant: number, body: NonNullable<operations["BulkTags_RemoveTags"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["BulkTags_RemoveTags"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/tags", { tenant });
      return client.request(path, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    contactMethods: {
    async getContactMethods(tenant: number, contactId: string, query?: operations["ContactMethods_GetContactMethods"]["parameters"]["query"]): Promise<SuccessResponse<operations["ContactMethods_GetContactMethods"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods", { tenant, contactId });
      return client.request(path + buildQueryString(query));
    },
    async createContactMethod(tenant: number, contactId: string, body: NonNullable<operations["ContactMethods_CreateContactMethod"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ContactMethods_CreateContactMethod"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods", { tenant, contactId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getContactMethod(tenant: number, contactId: string, contactMethodId: string): Promise<SuccessResponse<operations["ContactMethods_GetContactMethod"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}", { tenant, contactId, contactMethodId });
      return client.request(path);
    },
    async upsertContactMethod(tenant: number, contactId: string, contactMethodId: string, body: NonNullable<operations["ContactMethods_UpsertContactMethod"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ContactMethods_UpsertContactMethod"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}", { tenant, contactId, contactMethodId });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteContactMethod(tenant: number, contactId: string, contactMethodId: string): Promise<SuccessResponse<operations["ContactMethods_DeleteContactMethod"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}", { tenant, contactId, contactMethodId });
      return client.request(path, { method: "DELETE" });
    },
    async updateContactMethod(tenant: number, contactId: string, contactMethodId: string, body: NonNullable<operations["ContactMethods_UpdateContactMethod"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ContactMethods_UpdateContactMethod"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}", { tenant, contactId, contactMethodId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    contactPreferences: {
    async getContactMethodPreferences(tenant: number, contactId: string, contactMethodId: string): Promise<SuccessResponse<operations["ContactPreferences_GetContactMethodPreferences"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}/preferences", { tenant, contactId, contactMethodId });
      return client.request(path);
    },
    async getContactMethodPreference(tenant: number, contactId: string, contactMethodId: string, preferenceName: string): Promise<SuccessResponse<operations["ContactPreferences_GetContactMethodPreference"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}/preferences/{preferenceName}", { tenant, contactId, contactMethodId, preferenceName });
      return client.request(path);
    },
    async updateContactMethodPreference(tenant: number, contactId: string, contactMethodId: string, preferenceName: string, body: NonNullable<operations["ContactPreferences_UpdateContactMethodPreference"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ContactPreferences_UpdateContactMethodPreference"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}/preferences/{preferenceName}", { tenant, contactId, contactMethodId, preferenceName });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    contacts: {
    async get(tenant: number, id: string): Promise<SuccessResponse<operations["Contacts_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant, id });
      return client.request(path);
    },
    async replace(tenant: number, id: string, body: NonNullable<operations["Contacts_Replace"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Contacts_Replace"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteContact(tenant: number, id: string): Promise<SuccessResponse<operations["Contacts_DeleteContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: string, body: NonNullable<operations["Contacts_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Contacts_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getByRelationshipId(tenant: number, relationshipId: number, query?: operations["Contacts_GetByRelationshipId"]["parameters"]["query"]): Promise<SuccessResponse<operations["Contacts_GetByRelationshipId"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/relationships/{relationshipId}", { tenant, relationshipId });
      return client.request(path + buildQueryString(query));
    },
    async getList(tenant: number, query?: operations["Contacts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Contacts_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Contacts_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Contacts_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async createContactRelationship(tenant: number, contactId: string, relatedEntityId: number, typeSlug: string): Promise<SuccessResponse<operations["Contacts_CreateContactRelationship"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/relationships/{relatedEntityId}/{typeSlug}", { tenant, contactId, relatedEntityId, typeSlug });
      return client.request(path, { method: "POST" });
    },
    async deleteContactRelationship(tenant: number, contactId: string, relatedEntityId: number, typeSlug: string): Promise<SuccessResponse<operations["Contacts_DeleteContactRelationship"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/relationships/{relatedEntityId}/{typeSlug}", { tenant, contactId, relatedEntityId, typeSlug });
      return client.request(path, { method: "DELETE" });
    },
    async getContactRelationshipList(tenant: number, contactId: string, query?: operations["Contacts_GetContactRelationshipList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Contacts_GetContactRelationshipList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/{contactId}/relationships", { tenant, contactId });
      return client.request(path + buildQueryString(query));
    },
    async getPreferenceMetadataList(tenant: number): Promise<SuccessResponse<operations["Contacts_GetPreferenceMetadataList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/preferences", { tenant });
      return client.request(path);
    },
    async searchContactMethods(tenant: number, query?: operations["Contacts_SearchContactMethods"]["parameters"]["query"]): Promise<SuccessResponse<operations["Contacts_SearchContactMethods"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/contacts/contact-methods", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    customers: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Customers_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Customers_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Customers_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Customers_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Customers_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Customers_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Customers_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getNotes(tenant: number, id: number, query?: operations["Customers_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Customers_GetNotes"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/notes", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(tenant: number, id: number, body: NonNullable<operations["Customers_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Customers_CreateNote"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/notes", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteNote(tenant: number, id: number, noteId: number): Promise<SuccessResponse<operations["Customers_DeleteNote"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/notes/{noteId}", { tenant, id, noteId });
      return client.request(path, { method: "DELETE" });
    },
    async getContactList(tenant: number, id: number, query?: operations["Customers_GetContactList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Customers_GetContactList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/contacts", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createContact(tenant: number, id: number, body: NonNullable<operations["Customers_CreateContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Customers_CreateContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/contacts", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteContact(tenant: number, id: number, contactId: number): Promise<SuccessResponse<operations["Customers_DeleteContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/contacts/{contactId}", { tenant, id, contactId });
      return client.request(path, { method: "DELETE" });
    },
    async updateContact(tenant: number, id: number, contactId: number, body: NonNullable<operations["Customers_UpdateContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Customers_UpdateContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/contacts/{contactId}", { tenant, id, contactId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getModifiedContactsList(tenant: number, query?: operations["Customers_GetModifiedContactsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Customers_GetModifiedContactsList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/contacts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createTag(tenant: number, id: number, tagTypeId: number): Promise<SuccessResponse<operations["Customers_CreateTag"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/tags/{tagTypeId}", { tenant, id, tagTypeId });
      return client.request(path, { method: "POST" });
    },
    async deleteTag(tenant: number, id: number, tagTypeId: number): Promise<SuccessResponse<operations["Customers_DeleteTag"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/{id}/tags/{tagTypeId}", { tenant, id, tagTypeId });
      return client.request(path, { method: "DELETE" });
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Customers_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Customers_GetCustomFieldTypes"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/customers/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    export: {
    async get(tenant: number, query?: operations["ExportBookings_Get"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportBookings_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/bookings", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async customersContacts(tenant: number, query?: operations["ExportContacts_CustomersContacts"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportContacts_CustomersContacts"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/customers/contacts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async locationsContacts(tenant: number, query?: operations["ExportContacts_LocationsContacts"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportContacts_LocationsContacts"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/locations/contacts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomers(tenant: number, query?: operations["ExportCustomers_GetCustomers"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportCustomers_GetCustomers"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/customers", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async leads(tenant: number, query?: operations["ExportLeads_Leads"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportLeads_Leads"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/leads", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async locations(tenant: number, query?: operations["ExportLocations_Locations"]["parameters"]["query"]): Promise<SuccessResponse<operations["ExportLocations_Locations"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/export/locations", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    leads: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Leads_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Leads_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Leads_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Leads_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Leads_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Leads_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Leads_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async createFollowUp(tenant: number, id: number, body: NonNullable<operations["Leads_CreateFollowUp"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Leads_CreateFollowUp"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}/follow-up", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getNotes(tenant: number, id: number, query?: operations["Leads_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Leads_GetNotes"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}/notes", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(tenant: number, id: number, body: NonNullable<operations["Leads_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Leads_CreateNote"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}/notes", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async dismiss(tenant: number, id: number, body: NonNullable<operations["Leads_Dismiss"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Leads_Dismiss"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/{id}/dismiss", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async submitLeadForm(tenant: number, body: NonNullable<operations["Leads_SubmitLeadForm"]["requestBody"]>["content"]["application/json"], query?: operations["Leads_SubmitLeadForm"]["parameters"]["query"]): Promise<SuccessResponse<operations["Leads_SubmitLeadForm"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/leads/form", { tenant });
      return client.request(path + buildQueryString(query), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    locations: {
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["Locations_Get"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}", { tenant, id });
      return client.request(path);
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Locations_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Locations_Update"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["Locations_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Locations_GetList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async create(tenant: number, body: NonNullable<operations["Locations_Create"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Locations_Create"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getNotes(tenant: number, id: number, query?: operations["Locations_GetNotes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Locations_GetNotes"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/notes", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createNote(tenant: number, id: number, body: NonNullable<operations["Locations_CreateNote"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Locations_CreateNote"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/notes", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteNote(tenant: number, id: number, noteId: number): Promise<SuccessResponse<operations["Locations_DeleteNote"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/notes/{noteId}", { tenant, id, noteId });
      return client.request(path, { method: "DELETE" });
    },
    async getContactList(tenant: number, id: number, query?: operations["Locations_GetContactList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Locations_GetContactList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/contacts", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async createContact(tenant: number, id: number, body: NonNullable<operations["Locations_CreateContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Locations_CreateContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/contacts", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getLocationsContactsList(tenant: number, query?: operations["Locations_GetLocationsContactsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Locations_GetLocationsContactsList"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/contacts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async deleteContact(tenant: number, id: number, contactId: number): Promise<SuccessResponse<operations["Locations_DeleteContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/contacts/{contactId}", { tenant, id, contactId });
      return client.request(path, { method: "DELETE" });
    },
    async updateContact(tenant: number, id: number, contactId: number, body: NonNullable<operations["Locations_UpdateContact"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Locations_UpdateContact"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/contacts/{contactId}", { tenant, id, contactId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async createTag(tenant: number, id: number, tagTypeId: number): Promise<SuccessResponse<operations["Locations_CreateTag"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/tags/{tagTypeId}", { tenant, id, tagTypeId });
      return client.request(path, { method: "POST" });
    },
    async deleteTag(tenant: number, id: number, tagTypeId: number): Promise<SuccessResponse<operations["Locations_DeleteTag"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/tags/{tagTypeId}", { tenant, id, tagTypeId });
      return client.request(path, { method: "DELETE" });
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Locations_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Locations_GetCustomFieldTypes"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updatePreferredTechnician(tenant: number, id: number, preferredTechnicianId: number): Promise<SuccessResponse<operations["Locations_UpdatePreferredTechnician"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/preferredtechnician/{preferredTechnicianId}", { tenant, id, preferredTechnicianId });
      return client.request(path, { method: "POST" });
    },
    async getPreferredTechnician(tenant: number, id: number): Promise<SuccessResponse<operations["Locations_GetPreferredTechnician"]>> {
      const path = buildPath("/crm/v2/tenant/{tenant}/locations/{id}/preferredtechnician", { tenant, id });
      return client.request(path);
    },
    },
  };
}
