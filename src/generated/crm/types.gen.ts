// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/booking-provider-tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of booking provider tags */
        get: operations["BookingProviderTags_GetList"];
        put?: never;
        /** Create a booking provider tag */
        post: operations["BookingProviderTags_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider-tags/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a single booking provider tag by ID */
        get: operations["BookingProviderTags_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a booking provider tag */
        patch: operations["BookingProviderTags_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/bookings/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a booking by ID */
        get: operations["Bookings_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of bookings */
        get: operations["Bookings_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/bookings/{id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of contacts for a booking */
        get: operations["Bookings_GetContactList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a booking by ID for a booking provider */
        get: operations["Bookings_GetForProvider"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates a booking for a booking provider */
        patch: operations["Bookings_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider/{booking_provider}/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of bookings for a booking provider */
        get: operations["Bookings_GetList2"];
        put?: never;
        /** Creates a booking for a booking provider */
        post: operations["Bookings_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of contacts for a booking for a booking provider */
        get: operations["Bookings_GetContactList2"];
        put?: never;
        /** Creates a contact on the specified booking for a booking provider */
        post: operations["Bookings_CreateContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Removes a contact from a booking for a booking provider */
        delete: operations["Bookings_DeleteContact"];
        options?: never;
        head?: never;
        /** Updates a single booking contact for a booking provider */
        patch: operations["Bookings_UpdateBookingContact"];
        trace?: never;
    };
    "/tenant/{tenant}/booking-provider/{booking_provider}/bookings/{id}/dismiss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Bookings_DismissBooking"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Add multiple tags to more than 1 customer */
        put: operations["BulkTags_AddTags"];
        post?: never;
        /** Remove multiple tags to more than 1 customer */
        delete: operations["BulkTags_RemoveTags"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/contact-methods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contact methods for a specified contact ID */
        get: operations["ContactMethods_GetContactMethods"];
        put?: never;
        /** Creates a new contact method */
        post: operations["ContactMethods_CreateContactMethod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a contact method specified by ID */
        get: operations["ContactMethods_GetContactMethod"];
        /** Replaces a contact method */
        put: operations["ContactMethods_UpsertContactMethod"];
        post?: never;
        /** Deletes a contact method */
        delete: operations["ContactMethods_DeleteContactMethod"];
        options?: never;
        head?: never;
        /** Updates a contact method */
        patch: operations["ContactMethods_UpdateContactMethod"];
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contact preferences for a specified contact method ID */
        get: operations["ContactPreferences_GetContactMethodPreferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/contact-methods/{contactMethodId}/preferences/{preferenceName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a contact preference specified by preference name */
        get: operations["ContactPreferences_GetContactMethodPreference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates a contact preference */
        patch: operations["ContactPreferences_UpdateContactMethodPreference"];
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a contact specified by ID */
        get: operations["Contacts_Get"];
        /** Replaces a contact */
        put: operations["Contacts_Replace"];
        post?: never;
        /** Deletes a contact */
        delete: operations["Contacts_DeleteContact"];
        options?: never;
        head?: never;
        /** Updates a contact */
        patch: operations["Contacts_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/contacts/relationships/{relationshipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts for a specified relationship ID */
        get: operations["Contacts_GetByRelationshipId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts */
        get: operations["Contacts_GetList"];
        put?: never;
        /** Creates a new contact */
        post: operations["Contacts_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/relationships/{relatedEntityId}/{typeSlug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a contact relationship */
        post: operations["Contacts_CreateContactRelationship"];
        /** Removes a relationship from a contact */
        delete: operations["Contacts_DeleteContactRelationship"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/{contactId}/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contact relationships */
        get: operations["Contacts_GetContactRelationshipList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of preferences metadata */
        get: operations["Contacts_GetPreferenceMetadataList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/contacts/contact-methods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search for contact methods */
        get: operations["Contacts_SearchContactMethods"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a Customer specified by ID */
        get: operations["Customers_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a customer */
        patch: operations["Customers_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/customers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of Customers */
        get: operations["Customers_GetList"];
        put?: never;
        /** Creates a New Customer */
        post: operations["Customers_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of notes for a customer */
        get: operations["Customers_GetNotes"];
        put?: never;
        /** Creates a New Note */
        post: operations["Customers_CreateNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}/notes/{noteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Deletes a note on the specified customer */
        delete: operations["Customers_DeleteNote"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts for the specified customer */
        get: operations["Customers_GetContactList"];
        put?: never;
        /** Creates a contact on the customer */
        post: operations["Customers_CreateContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Removes a contact from a customer */
        delete: operations["Customers_DeleteContact"];
        options?: never;
        head?: never;
        /** Updates a contact on the customer */
        patch: operations["Customers_UpdateContact"];
        trace?: never;
    };
    "/tenant/{tenant}/customers/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts for a specific modified-on date range or by their Customer IDs. Either CustomerIds, modifiedOn or modifiedOnOrAfter parameter must be specified */
        get: operations["Customers_GetModifiedContactsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/{id}/tags/{tagTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Adds a Tag to a Customer */
        post: operations["Customers_CreateTag"];
        /** Removes a Tag from a Customer */
        delete: operations["Customers_DeleteTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/customers/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of custom field types available for customers */
        get: operations["Customers_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for bookings */
        get: operations["ExportBookings_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/customers/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for customer contacts */
        get: operations["ExportContacts_CustomersContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/locations/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for locations contacts */
        get: operations["ExportContacts_LocationsContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/customers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for customers */
        get: operations["ExportCustomers_GetCustomers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for leads */
        get: operations["ExportLeads_Leads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for appointments */
        get: operations["ExportLocations_Locations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/leads/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a lead specified by ID */
        get: operations["Leads_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates a lead */
        patch: operations["Leads_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of leads */
        get: operations["Leads_GetList"];
        put?: never;
        /** Creates a lead */
        post: operations["Leads_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/leads/{id}/follow-up": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates a follow-up */
        post: operations["Leads_CreateFollowUp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/leads/{id}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets notes for a lead */
        get: operations["Leads_GetNotes"];
        put?: never;
        /** Creates a note on the specified lead */
        post: operations["Leads_CreateNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/leads/{id}/dismiss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Dismisses a lead specified by ID */
        post: operations["Leads_Dismiss"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/leads/form": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submits a lead form */
        post: operations["Leads_SubmitLeadForm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a location specified by ID */
        get: operations["Locations_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates a location */
        patch: operations["Locations_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of locations */
        get: operations["Locations_GetList"];
        put?: never;
        /** Creates a new location */
        post: operations["Locations_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of notes on the specified location */
        get: operations["Locations_GetNotes"];
        put?: never;
        /** Creates a note on the specified location */
        post: operations["Locations_CreateNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/notes/{noteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Deletes a note on the specified location */
        delete: operations["Locations_DeleteNote"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts for the specified location */
        get: operations["Locations_GetContactList"];
        put?: never;
        /** Creates a contact on the location */
        post: operations["Locations_CreateContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of contacts for a specific ModifiedOn date range, CreatedOn date range or by their Location IDs. Either LocationIds, modifiedOn, modifiedOnOrAfter, createdBefore or createdOnOrAfter parameter must be specified. */
        get: operations["Locations_GetLocationsContactsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Removes a contact from a location */
        delete: operations["Locations_DeleteContact"];
        options?: never;
        head?: never;
        /** Updates a contact on the location */
        patch: operations["Locations_UpdateContact"];
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/tags/{tagTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Adds a Tag to a Location */
        post: operations["Locations_CreateTag"];
        /** Removes a Tag from a Location */
        delete: operations["Locations_DeleteTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of custom field types available for locations */
        get: operations["Locations_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/preferredtechnician/{preferredTechnicianId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Locations_UpdatePreferredTechnician"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/{id}/preferredtechnician": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Locations_GetPreferredTechnician"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Crm.V2.CreateBookingProviderTagResponse": {
            /**
             * Format: int64
             * @description id of booking provider tag
             */
            id: number;
            /** @description Name of tag */
            tagName: string;
            /** @description Description of tag */
            description: string;
            /** @description Type of tag */
            type: components["schemas"]["Crm.V2.BookingAgentTagType"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was modified
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Crm.V2.BookingAgentTagType": "V1Api" | "V2Api";
        /** @description Detailed error response, following RFC 7807 recommendations (https://tools.ietf.org/html/rfc7807). */
        ApiErrorResponse: {
            /** @description A URI reference that identifies the problem type */
            type: string;
            /** @description A short, human-readable summary of the problem type */
            title: string;
            /**
             * Format: int32
             * @description The HTTP status code generated by server
             */
            status: number;
            /** @description Internal trace ID for advanced diagnostics */
            traceId: string;
            /** @description Provides more details about errors occurred, which can potentially be used for visual display */
            errors: {
                [key: string]: string[];
            };
            /** @description Provides additional data, intended for programmatical usage */
            data: {
                [key: string]: unknown;
            };
        };
        "Crm.V2.CreateBookingProviderTagRequest": {
            /** @description Name of tag */
            tagName: string;
            /** @description Description of tag */
            description: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.GetBookingProviderTagResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.GetBookingProviderTagResponse"][];
        };
        "Crm.V2.GetBookingProviderTagResponse": {
            /**
             * Format: int64
             * @description id of booking provider tag
             */
            id: number;
            /** @description Name of tag */
            tagName: string;
            /** @description Description of tag */
            description: string;
            /** @description Type of tag */
            type: components["schemas"]["Crm.V2.BookingAgentTagType"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was modified
             */
            modifiedOn: string;
            active: boolean;
        };
        "Crm.V2.BookingProviderTagResponse": {
            /**
             * Format: int64
             * @description id of booking provider tag
             */
            id: number;
            /** @description Name of tag */
            tagName: string;
            /** @description Description of tag */
            description: string;
            /** @description Type of tag */
            type: components["schemas"]["Crm.V2.BookingAgentTagType"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the booking provider tag was modified
             */
            modifiedOn: string;
        };
        "Crm.V2.UpdateBookingProviderTagRequest": {
            /** @description Name of tag */
            tagName?: string;
            /** @description Description of tag */
            description?: string;
        };
        "Crm.V2.BookingResponse": {
            /**
             * Format: int64
             * @description ID of the booking
             */
            id: number;
            /** @description Source of the booking */
            source: string;
            /**
             * Format: date-time
             * @description when the booking was created
             */
            createdOn: string;
            /** @description Name of the booking's customer */
            name: string;
            /** @description Address of the booking */
            address?: components["schemas"]["Crm.V2.AddressModel"] | null;
            /** @description Type of customer (Residential/Commercial) */
            customerType?: components["schemas"]["Crm.V2.CustomerType"] | null;
            /**
             * Format: date-time
             * @description Booking's start date time, in UTC
             */
            start: string;
            /**
             * Format: int64
             * @description ID of the booking's campaign
             */
            campaignId?: number | null;
            /**
             * Format: int64
             * @description ID of the booking's business unit
             */
            businessUnitId?: number | null;
            /** @description Returns true if first time client */
            isFirstTimeClient?: boolean | null;
            /** @description Uploaded images */
            uploadedImages?: string[] | null;
            /** @description Returns true if customer should receive email when booking is created */
            isSendConfirmationEmail?: boolean | null;
            /** @description Booking status */
            status: components["schemas"]["Crm.V2.BookingStatus"];
            /**
             * Format: int64
             * @description ID of the reason booking was dismissed
             */
            dismissingReasonId?: number | null;
            /**
             * Format: int64
             * @description ID of the job booked from the booking
             */
            jobId?: number | null;
            /** @description External ID of booking */
            externalId: string;
            /** @description Booking priority */
            priority?: components["schemas"]["Crm.V2.Priority"] | null;
            /**
             * Format: int64
             * @description ID of the booking's job type
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Booking provider id
             */
            bookingProviderId: number;
            /**
             * Format: date-time
             * @description When the booking was modified
             */
            modifiedOn: string;
            /** @description Booking summary */
            summary?: string | null;
        };
        "Crm.V2.AddressModel": {
            /** @description Booking address street */
            street: string;
            /** @description Booking address unit */
            unit?: string | null;
            /** @description Booking address city */
            city: string;
            /** @description Booking address state */
            state: string;
            /** @description Booking address zip code */
            zip: string;
            /** @description Booking address country */
            country: string;
        };
        /**
         * @description Indicates a customer's type.
         * @enum {string}
         */
        "Crm.V2.CustomerType": "Residential" | "Commercial";
        /** @enum {string} */
        "Crm.V2.BookingStatus": "New" | "Converted" | "Dismissed" | "Accepted";
        /** @enum {string} */
        "Crm.V2.Priority": "Low" | "Normal" | "High" | "Urgent";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.BookingResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.BookingResponse"][];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.BookingContactResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.BookingContactResponse"][];
        };
        "Crm.V2.BookingContactResponse": {
            /**
             * Format: int64
             * @description Id of contact
             */
            id: number;
            /** @description Type of contact */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was last modified
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Crm.V2.ContactType": "Phone" | "Email" | "Fax" | "MobilePhone";
        "Crm.V2.CreateBookingRequest": {
            /** @description Source of the booking */
            source: string;
            /** @description Name of the customer */
            name: string;
            /** @description Address of the booking */
            address?: components["schemas"]["Crm.V2.AddressModel"] | null;
            /** @description Contacts for the booking */
            contacts?: components["schemas"]["Crm.V2.BookingContactModel"][] | null;
            /** @description Type of the customer (Residential/Commercial) */
            customerType?: string | null;
            /**
             * Format: date-time
             * @description Booking's start Date(time) in UTC
             */
            start?: string | null;
            /** @description Summary of the booking */
            summary: string;
            /**
             * Format: int64
             * @description ID of the booking's campaign
             */
            campaignId?: number | null;
            /**
             * Format: int64
             * @description ID of the booking's business unit
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description ID of the booking's job type
             */
            jobTypeId?: number | null;
            /** @description Booking priority */
            priority?: components["schemas"]["Crm.V2.Priority"] | null;
            /** @description True if first time client */
            isFirstTimeClient: boolean;
            /** @description Uploaded images */
            uploadedImages?: string[] | null;
            /** @description Returns true if customer should receive email when booking is created */
            isSendConfirmationEmail?: boolean | null;
            /** @description External ID of booking */
            externalId: string;
        };
        "Crm.V2.BookingContactModel": {
            type: components["schemas"]["Crm.V2.ContactType"];
            value: string;
            memo?: string | null;
        };
        "Crm.V2.UpdateBookingRequest": {
            /** @description Source of the booking */
            source?: string;
            /** @description Name of the booking's customer */
            name?: string;
            address?: components["schemas"]["Crm.V2.AddressPatchModel"];
            /** @description Type of customer (Residential/Commercial) */
            customerType?: components["schemas"]["Crm.V2.CustomerType"];
            /**
             * Format: date-time
             * @description Booking's start date time, in UTC
             */
            start?: string;
            /** @description Booking summary */
            summary?: string;
            /**
             * Format: int64
             * @description ID of the booking's campaign
             */
            campaignId?: number;
            /**
             * Format: int64
             * @description ID of the booking's business unit
             */
            businessUnitId?: number;
            /**
             * Format: int64
             * @description ID of the booking's job type
             */
            jobTypeId?: number;
            /** @description Booking priority */
            priority?: components["schemas"]["Crm.V2.Priority"];
            /** @description True if first time client */
            isFirstTimeClient?: boolean;
            /** @description Uploaded images */
            uploadedImages?: string[];
            /** @description External ID of booking */
            externalId?: string;
        };
        "Crm.V2.AddressPatchModel": {
            /** @description Booking address street */
            street: string;
            /** @description Booking address unit */
            unit: string;
            /** @description Booking address city */
            city: string;
            /** @description Booking address state */
            state: string;
            /** @description Booking address zip code */
            zip: string;
            /** @description Booking address country */
            country: string;
        };
        "Crm.V2.ContactCreateRequest": {
            /** @description Type of contact */
            type: string;
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo?: string | null;
        };
        "Crm.V2.UpdateBookingContactRequest": {
            type?: components["schemas"]["Crm.V2.ContactType"];
            value?: string;
            memo?: string;
        };
        "Crm.V2.DismissBookingModel": {
            /**
             * Format: int64
             * @description Call reason ID for dismissing the booking
             */
            callReasonId?: number | null;
            /** @description Memo for dismissing the booking */
            dismissingMemo?: string | null;
        };
        /** @description Add bulk tags request. */
        "Crm.V2.AddBulkTagsRequest": {
            /** @description List of Customer ID(s) */
            customerIds: number[];
            /** @description List of TagType ID(s) to add to the customers */
            tagTypeIds: number[];
        };
        /** @description Remove bulk tags request. */
        "Crm.V2.RemoveBulkTagsRequest": {
            /** @description List of Customer ID(s) */
            customerIds: number[];
            /** @description List of TagType ID(s) to add to the customers */
            tagTypeIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.ContactMethodResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.ContactMethodResponse"][];
        };
        "Crm.V2.ContactMethodResponse": {
            /**
             * Format: guid
             * @description ID of the contact method
             */
            id: string;
            /**
             * Format: guid
             * @description ID of the contact
             */
            contactId: string;
            /** @description Reference ID of the contact method */
            referenceId?: string | null;
            /** @description Contact method type */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of the contact method */
            value: string;
            /** @description Memo for the contact method */
            memo?: string | null;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdBy: number;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description User ID who modified the record.
             */
            modifiedBy: number;
        };
        "Crm.V2.CreateContactMethodRequest": {
            /** @description Reference ID of the contact method */
            referenceId?: string | null;
            /** @description Type of the contact method */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of the contact method */
            value: string;
            /** @description Memo for the contact method */
            memo?: string | null;
        };
        "Crm.V2.UpsertContactMethodRequest": {
            /** @description Reference ID of the contact method */
            referenceId?: string | null;
            /** @description Type of the contact method */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of the contact method */
            value: string;
            /** @description Memo for the contact method */
            memo?: string | null;
        };
        "Crm.V2.UpdateContactMethodRequest": {
            /** @description Value of the contact method */
            value?: string;
            /** @description Memo for the contact method */
            memo?: string;
        };
        "Crm.V2.ContactPreferenceResponse": {
            /** @description Contact preference name */
            name: string;
            /** @description Contact preference data type */
            dataType: string;
            /** @description Value of the contact preference */
            value?: string | null;
        };
        "Crm.V2.UpdateContactMethodPreferenceRequest": {
            /** @description Value of the contact method */
            value?: string;
        };
        "Crm.V2.ContactResponse": {
            /**
             * Format: guid
             * @description ID of the contact
             */
            id: string;
            /** @description External reference ID of the contact */
            referenceId?: string | null;
            /** @description Name of the contact */
            name?: string | null;
            /** @description Title of the contact */
            title?: string | null;
            /** @description Whether the contact has been archived. */
            isArchived: boolean;
            /**
             * Format: date-time
             * @description When the contact was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created this contact
             */
            createdBy: number;
            /**
             * Format: date-time
             * @description When the contact was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description User ID who modified this contact
             */
            modifiedBy: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.ContactResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.ContactResponse"][];
        };
        "Crm.V2.ReplaceContactRequest": {
            /** @description Name of the contact */
            name?: string | null;
            /** @description Title of the contact */
            title?: string | null;
            /** @description External reference ID of the contact */
            referenceId?: string | null;
            /** @description Sets whether the contact has been archived. */
            isArchived: boolean;
        };
        "Crm.V2.CreateContactRequest": {
            /** @description Name of the contact */
            name?: string | null;
            /** @description Title of the contact */
            title?: string | null;
            /** @description External reference ID of the contact */
            referenceId?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.ContactRelationshipResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.ContactRelationshipResponse"][];
        };
        "Crm.V2.ContactRelationshipResponse": {
            /**
             * Format: guid
             * @description ID of the contact relationship
             */
            id: string;
            /**
             * Format: int64
             * @description ID of the related entity
             */
            relatedEntityId: number;
            /** @description Relationship type name: Customer, Location, Booking */
            typeName: string;
            /** @description Relationship type slug: customer, location, booking */
            typeSlug: string;
            /**
             * Format: date-time
             * @description When the contact relationship was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created this contact relationship
             */
            createdBy: number;
        };
        "Crm.V2.UpdateContactRequest": {
            /** @description Name of the contact */
            name?: string | null;
            /** @description Title of the contact */
            title?: string | null;
            /** @description External reference ID of the contact */
            referenceId?: string | null;
            /** @description Sets whether the contact has been archived. */
            isArchived: boolean;
        };
        "Crm.V2.ContactPreferenceTypeResponse": {
            /**
             * Format: guid
             * @description ID of the Preference Type
             */
            id: string;
            /** @description Preference Name */
            name: string;
            /** @description Preference Description */
            description?: string | null;
            /** @description Preference Data Type: Bool, only Bool supported for now */
            dataType: string;
        };
        "Crm.V2.Customers.CustomerResponse": {
            /**
             * Format: int64
             * @description ID of the customer
             */
            id: number;
            /** @description False indicates that someone has deactivated the customer record, typically upon merging with another record. */
            active: boolean;
            /** @description Name of the customer */
            name: string;
            /** @description Residential or commercial */
            type: components["schemas"]["Crm.V2.CustomerType"];
            /** @description Bill-To address of the customer record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Customer record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: decimal
             * @description Customer’s account balance
             */
            balance: number;
            /** @description Tax Exempt status of the customer. */
            taxExempt: boolean;
            /** @description Tag Type IDs associated with the Customer */
            tagTypeIds: number[];
            /** @description Customer has been flagged as “do not mail” */
            doNotMail: boolean;
            /** @description Customer has been flagged as “do not service” */
            doNotService: boolean;
            /** @description Customer has been flagged as National Account */
            nationalAccount: boolean;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description The customer ID of the record that this record was previously merged to.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description The Payment Term ID.
             */
            paymentTermId?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimit?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit Balance for the customer.
             */
            creditLimitBalance?: number | null;
            /**
             * @description List of external data attached to this Customer,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
        };
        "Crm.V2.Customers.CustomerAddress": {
            /** @description Street */
            street: string;
            /** @description Unit */
            unit?: string | null;
            /** @description City */
            city: string;
            /** @description State */
            state: string;
            /** @description Zip */
            zip: string;
            /** @description Country */
            country: string;
            /**
             * Format: double
             * @description Latitude
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Longitude
             */
            longitude?: number | null;
        };
        "Crm.V2.Customers.CustomFieldModel": {
            /**
             * Format: int64
             * @description ID of the custom field
             */
            typeId: number;
            /** @description Name/label of the custom field */
            name?: string | null;
            /** @description Value of the custom field */
            value?: string | null;
        };
        "Crm.V2.ExternalDataModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Customers.CustomerResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Customers.CustomerResponse"][];
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        "Crm.V2.Customers.CreatedCustomerResponse": {
            /**
             * Format: int64
             * @description ID of the customer
             */
            id: number;
            /** @description False indicates that someone has deactivated the customer record, typically upon merging with another record. */
            active: boolean;
            /** @description Name of the customer */
            name: string;
            /** @description Residential or commercial */
            type: components["schemas"]["Crm.V2.CustomerType"];
            /** @description Bill-To address of the customer record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Customer record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: decimal
             * @description Customer’s account balance
             */
            balance: number;
            /** @description Tax Exempt status of the customer. */
            taxExempt: boolean;
            /** @description Tag Type IDs associated with the Customer */
            tagTypeIds: number[];
            /** @description Customer has been flagged as “do not mail” */
            doNotMail: boolean;
            /** @description Customer has been flagged as “do not service” */
            doNotService: boolean;
            /** @description Customer has been flagged as National Account */
            nationalAccount: boolean;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description The customer ID of the record that this record was previously merged to.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description The Payment Term ID.
             */
            paymentTermId?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimit?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit Balance for the customer.
             */
            creditLimitBalance?: number | null;
            /**
             * @description List of external data attached to this Customer,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
            /** @description Locations for the customer */
            locations: components["schemas"]["Crm.V2.Locations.CreateLocationResponse"][];
            /** @description Contacts for the customer */
            contacts: components["schemas"]["Crm.V2.Customers.CustomerContact"][];
        };
        "Crm.V2.Locations.CreateLocationResponse": {
            /**
             * Format: int64
             * @description ID of the location tax zone
             */
            taxZoneId?: number | null;
            /**
             * Format: int64
             * @description ID of the location
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the location’s customer.
             */
            customerId: number;
            /** @description If false, the record has been deactivated. */
            active: boolean;
            /** @description Name of the location */
            name: string;
            /** @description Location’s address */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Location record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: date-time
             * @description DateTime (UTC) that location record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Tells you which location record this record was merged into.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description ID of the location's Zone
             */
            zoneId?: number | null;
            /** @description Tax Exempt status of the location. */
            taxExempt: boolean;
            /** @description Tag Type IDs of the location */
            tagTypeIds: number[];
            /**
             * @description List of external data attached to this Location,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
            contacts: components["schemas"]["Crm.V2.Locations.LocationContact"][];
        };
        "Crm.V2.Locations.LocationContact": {
            /**
             * Format: int64
             * @description ID of the contact
             */
            id: number;
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
        };
        "Crm.V2.Customers.CustomerContact": {
            /**
             * Format: int64
             * @description ID of the contact
             */
            id: number;
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
        };
        "Crm.V2.Customers.CreateCustomerRequest": {
            /** @description Name of the customer */
            name: string;
            /** @description Residential or commercial */
            type?: components["schemas"]["Crm.V2.CustomerType"] | null;
            /** @description Customer has been flagged as “do not mail” */
            doNotMail?: boolean | null;
            /** @description Customer has been flagged as “do not service” */
            doNotService?: boolean | null;
            /** @description Customer has been flagged as National Account */
            nationalAccount?: boolean | null;
            /** @description Locations for the customer */
            locations: components["schemas"]["Crm.V2.Customers.NewLocation"][];
            /** @description Bill-To address of the customer record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Contacts for the customer */
            contacts?: components["schemas"]["Crm.V2.Customers.NewCustomerContact"][] | null;
            /** @description Customer record’s custom fields */
            customFields?: components["schemas"]["Crm.V2.Customers.CustomFieldUpdateModel"][] | null;
            /** @description Tag Type IDs to be associated with the customer */
            tagTypeIds?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this Customer.
             */
            externalData?: components["schemas"]["Crm.V2.ExternalDataCreateRequest"] | null;
            /** @description Optional Tax Exempt. */
            taxExempt?: boolean | null;
            /**
             * Format: int64
             * @description Optional Payment Term ID.
             */
            paymentTermId?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimit?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimitBalance?: number | null;
        };
        "Crm.V2.Customers.NewLocation": {
            /** @description Name of the location */
            name: string;
            /** @description Address of the location record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Contacts for the location */
            contacts?: components["schemas"]["Crm.V2.Customers.NewCustomerContact"][] | null;
            /** @description Location record’s custom fields */
            customFields?: components["schemas"]["Crm.V2.Customers.CustomFieldUpdateModel"][] | null;
            /** @description Tag type ids for the location */
            tagTypeIds?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this Location.
             */
            externalData?: components["schemas"]["Crm.V2.ExternalDataCreateRequest"] | null;
            /** @description Gets or sets the source of the coordinates. */
            coordinatesSource?: components["schemas"]["GeolocationCoordinatesSource"] | null;
            /** @description Gets or sets the verification status of the coordinates. */
            coordinatesVerificationStatus?: components["schemas"]["GeolocationVerificationStatus"] | null;
        };
        "Crm.V2.Customers.NewCustomerContact": {
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
        };
        "Crm.V2.Customers.CustomFieldUpdateModel": {
            /**
             * Format: int64
             * @description ID of the custom field
             */
            typeId: number;
            /** @description Value of the custom field */
            value: string;
        };
        "Crm.V2.ExternalDataCreateRequest": {
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
        };
        /**
         * @description Specifies the source of geolocation coordinates.
         * @enum {string}
         */
        GeolocationCoordinatesSource: "None" | "System" | "User" | "Imported";
        /**
         * @description Represents the status of geolocation verification for a set of coordinates.
         * @enum {string}
         */
        GeolocationVerificationStatus: "Unverified" | "InProgress" | "Failed" | "Verified";
        "Crm.V2.Customers.UpdateCustomerRequest": {
            /** @description Name of the customer */
            name?: string;
            /** @description Residential or commercial */
            type?: components["schemas"]["Crm.V2.CustomerType"];
            /** @description Bill-To address of the customer record */
            address?: components["schemas"]["Crm.V2.Customers.UpdateCustomerAddress"];
            /** @description Customer record’s custom fields */
            customFields?: components["schemas"]["Crm.V2.Customers.CustomFieldUpdateModel"][];
            /** @description External data update model. */
            externalData?: components["schemas"]["Crm.V2.ExternalDataUpdateRequest"];
            /** @description Customer has been flagged as “do not mail” */
            doNotMail?: boolean;
            /** @description Customer has been flagged as “do not service” */
            doNotService?: boolean;
            /** @description Customer has been flagged as National Account */
            nationalAccount?: boolean;
            /** @description Customer has been flagged as “active” ar "innactive" */
            active?: boolean;
            /** @description IDs of the Tag Types */
            tagTypeIds?: number[];
            /** @description Customer has been flagged as Tax Exempt */
            taxExempt?: boolean;
            /**
             * Format: int64
             * @description Payment Term ID
             */
            paymentTermId?: number;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimit?: number;
            /**
             * Format: decimal
             * @description Credit Limit Balance for the customer.
             */
            creditLimitBalance?: number;
        };
        "Crm.V2.Customers.UpdateCustomerAddress": {
            /** @description Street */
            street: string;
            /** @description Unit */
            unit: string;
            /** @description City */
            city: string;
            /** @description State */
            state: string;
            /** @description Zip */
            zip: string;
            /** @description Country */
            country: string;
            /**
             * Format: double
             * @description Latitude
             */
            latitude: number;
            /**
             * Format: double
             * @description Longitude
             */
            longitude: number;
        };
        "Crm.V2.ExternalDataUpdateRequest": {
            /**
             * @description External data patch mode.\
             *     "Replace" (default) replaces all existing keys with new values. If job A has custom data with keys X and Y and this field only contains an item
             *     with a key X, then custom data with a key Y on job A will be removed.\
             *     "Merge" will only replace key X in the example above. Keys with null value will be deleted.
             */
            patchMode?: components["schemas"]["Crm.V2.ExternalDataPatchMode"] | null;
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Crm.V2.ExternalDataUpdateModel"][];
        };
        /** @enum {string} */
        "Crm.V2.ExternalDataPatchMode": "Replace" | "Merge";
        "Crm.V2.ExternalDataUpdateModel": {
            /** @description External data key. */
            key: string;
            /**
             * Format: multiline
             * @description External data value.
             */
            value?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.NoteResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.NoteResponse"][];
        };
        "Crm.V2.NoteResponse": {
            /**
             * Format: int64
             * @description Id of the note
             */
            id: number;
            /** @description Text content of a note */
            text: string;
            /** @description Whether the note is pinned to the top */
            isPinned: boolean;
            /**
             * Format: int64
             * @description ID of user who created this note
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was modified
             */
            modifiedOn: string;
        };
        "Crm.V2.CustomerNoteCreateRequest": {
            /** @description Text content of customer note */
            text: string;
            /** @description Whether to pin customer note to the top */
            pinToTop?: boolean | null;
            /** @description Whether to add the same note to the customer's active locations */
            addToLocations?: boolean | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Customers.CustomerContactWithModifiedOnResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Customers.CustomerContactWithModifiedOnResponse"][];
        };
        "Crm.V2.Customers.CustomerContactWithModifiedOnResponse": {
            /**
             * Format: int64
             * @description ID of the contact
             */
            id: number;
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record
             */
            modifiedOn: string;
            /** @description Phone settings of the customer contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Created On (UTC) for the record
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
        };
        "Crm.V2.Customers.PhoneSettings": {
            /** @description Phone Number */
            phoneNumber: string;
            /** @description If the phone number has opted-out from notifications. */
            doNotText: boolean;
        };
        "Crm.V2.Customers.ContactPreferencesResponse": {
            /** @description Job Reminders Enabled */
            jobRemindersEnabled: boolean;
            /** @description Marketing Updates Enabled */
            marketingUpdatesEnabled: boolean;
            /** @description Invoice Statement Notification (legacy combined field, true only if both InvoiceNotification AND StatementNotification are true) */
            invoiceStatementNotification: boolean;
            /** @description Invoice Notification - whether this contact receives invoice notifications */
            invoiceNotification: boolean;
            /** @description Statement Notification - whether this contact receives statement notifications */
            statementNotification: boolean;
        };
        "Crm.V2.Customers.CreateCustomerContactRequest": {
            /** @description Landline, mobile, e-mail, or fax */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” */
            memo?: string | null;
        };
        "Crm.V2.Customers.UpdateCustomerContactRequest": {
            /** @description Landline, mobile, e-mail, or fax */
            type?: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact */
            value?: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” */
            memo?: string;
            /** @description Contact preference setting for Job Reminders and Marketing Updates */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesRequest"];
        };
        "Crm.V2.Customers.ContactPreferencesRequest": {
            /** @description Job Reminders Enabled */
            jobRemindersEnabled: boolean;
            /** @description Marketing Updates Enabled */
            marketingUpdatesEnabled: boolean;
            /** @description Invoice Statement Notification (legacy combined field - setting this will update both InvoiceNotification and StatementNotification) */
            invoiceStatementNotification: boolean;
            /** @description Invoice Notification - whether this contact receives invoice notifications */
            invoiceNotification: boolean;
            /** @description Statement Notification - whether this contact receives statement notifications */
            statementNotification: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Customers.CustomerContactWithModifiedOnAndCustomerIdResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Customers.CustomerContactWithModifiedOnAndCustomerIdResponse"][];
        };
        "Crm.V2.Customers.CustomerContactWithModifiedOnAndCustomerIdResponse": {
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record
             */
            modifiedOn: string;
            /** @description Phone settings of the customer contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Created On (UTC) for the record
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
            /**
             * Format: int64
             * @description ID of the contact
             */
            id: number;
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
            /** Format: int64 */
            customerId: number;
        };
        "Crm.V2.Customers.CreateCustomerTagResponse": {
            /** Format: int64 */
            customerId: number;
            tagTypeIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Customers.CustomFieldTypeResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Customers.CustomFieldTypeResponse"][];
        };
        "Crm.V2.Customers.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description ID of the custom field type
             */
            id: number;
            /** @description Name of the custom field type */
            name?: string | null;
            /** @description The type custom field type (e.g. Text, Dropdown, or Numeric) */
            dataType?: string | null;
            /** @description The type custom field type (e.g. Text, Dropdown, or Numeric) */
            dataTypeOptions?: string[] | null;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportBookingResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportBookingResponse"][];
        };
        "Crm.V2.ExportBookingResponse": {
            /** @description Booking summary */
            summary?: string | null;
            /**
             * Format: int64
             * @description ID of the booking
             */
            id: number;
            /** @description Source of the booking */
            source: string;
            /**
             * Format: date-time
             * @description when the booking was created
             */
            createdOn: string;
            /** @description Name of the booking's customer */
            name: string;
            /** @description Address of the booking */
            address?: components["schemas"]["Crm.V2.AddressModel"] | null;
            /** @description Type of customer (Residential/Commercial) */
            customerType?: components["schemas"]["Crm.V2.CustomerType"] | null;
            /**
             * Format: date-time
             * @description Booking's start date time, in UTC
             */
            start: string;
            /**
             * Format: int64
             * @description ID of the booking's campaign
             */
            campaignId?: number | null;
            /**
             * Format: int64
             * @description ID of the booking's business unit
             */
            businessUnitId?: number | null;
            /** @description Returns true if first time client */
            isFirstTimeClient?: boolean | null;
            /** @description Uploaded images */
            uploadedImages?: string[] | null;
            /** @description Returns true if customer should receive email when booking is created */
            isSendConfirmationEmail?: boolean | null;
            /** @description Booking status */
            status: components["schemas"]["Crm.V2.BookingStatus"];
            /**
             * Format: int64
             * @description ID of the reason booking was dismissed
             */
            dismissingReasonId?: number | null;
            /**
             * Format: int64
             * @description ID of the job booked from the booking
             */
            jobId?: number | null;
            /** @description External ID of booking */
            externalId: string;
            /** @description Booking priority */
            priority?: components["schemas"]["Crm.V2.Priority"] | null;
            /**
             * Format: int64
             * @description ID of the booking's job type
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Booking provider id
             */
            bookingProviderId: number;
            /**
             * Format: date-time
             * @description When the booking was modified
             */
            modifiedOn: string;
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportCustomerContactResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportCustomerContactResponse"][];
        };
        "Crm.V2.ExportCustomerContactResponse": {
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record
             */
            modifiedOn: string;
            /** @description Phone settings of the customer contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Created On (UTC) for the record
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
            /**
             * Format: int64
             * @description ID of the contact
             */
            id: number;
            /** @description Landline, mobile, e-mail, or fax. */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description The email, phone number, or fax number for the contact. */
            value: string;
            /** @description Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly.” */
            memo?: string | null;
            /** Format: int64 */
            customerId: number;
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportLocationContactResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportLocationContactResponse"][];
        };
        "Crm.V2.ExportLocationContactResponse": {
            /**
             * Format: int64
             * @description Id of contact
             */
            id: number;
            /** @description Type of contact */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo?: string | null;
            /** @description Phone settings of the location contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was created
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
            /** Format: int64 */
            locationId: number;
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportCustomerResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportCustomerResponse"][];
        };
        "Crm.V2.ExportCustomerResponse": {
            /**
             * Format: int64
             * @description ID of the customer
             */
            id: number;
            /** @description False indicates that someone has deactivated the customer record, typically upon merging with another record. */
            active: boolean;
            /** @description Name of the customer */
            name: string;
            /** @description Residential or commercial */
            type: components["schemas"]["Crm.V2.CustomerType"];
            /** @description Bill-To address of the customer record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Customer record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: decimal
             * @description Customer’s account balance
             */
            balance: number;
            /** @description Tax Exempt status of the customer. */
            taxExempt: boolean;
            /** @description Tag Type IDs associated with the Customer */
            tagTypeIds: number[];
            /** @description Customer has been flagged as “do not mail” */
            doNotMail: boolean;
            /** @description Customer has been flagged as “do not service” */
            doNotService: boolean;
            /** @description Customer has been flagged as National Account */
            nationalAccount: boolean;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description The customer ID of the record that this record was previously merged to.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description The Payment Term ID.
             */
            paymentTermId?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit for the customer.
             */
            creditLimit?: number | null;
            /**
             * Format: decimal
             * @description Credit Limit Balance for the customer.
             */
            creditLimitBalance?: number | null;
            /**
             * @description List of external data attached to this Customer,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportLeadsResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportLeadsResponse"][];
        };
        "Crm.V2.ExportLeadsResponse": {
            /** @description Summary of the lead */
            summary?: string | null;
            /**
             * Format: int64
             * @description Call reason ID used to classify the lead by the user
             */
            callReasonId?: number | null;
            /**
             * Format: int64
             * @description Call ID used to classify the lead
             */
            callId?: number | null;
            /**
             * Format: int64
             * @description Booking ID used to classify the lead
             */
            bookingId?: number | null;
            /**
             * Format: int64
             * @description Manual Call ID used to classify the lead
             */
            manualCallId?: number | null;
            /** @description Permanent URL for the lead */
            leadUrl?: string | null;
            /** @description Customer name provided for the lead */
            leadCustomerName?: string | null;
            /** @description Phone number provided for the lead */
            leadPhone?: string | null;
            /** @description Email provided for the lead */
            leadEmail?: string | null;
            /** @description Street provided for the lead */
            leadStreet?: string | null;
            /** @description Unit provided for the lead */
            leadUnit?: string | null;
            /** @description City provided for the lead */
            leadCity?: string | null;
            /** @description State provided for the lead */
            leadState?: string | null;
            /** @description Zip provided for the lead */
            leadZip?: string | null;
            /** @description Country provided for the lead */
            leadCountry?: string | null;
            /** @description Capture source of the lead */
            captureSource?: string | null;
            /**
             * Format: int64
             * @description ID of the lead
             */
            id: number;
            /** @description Status of the lead */
            status: components["schemas"]["Crm.V2.LeadStatus"];
            /** @description Priority of the lead */
            priority: components["schemas"]["Crm.V2.Priority"];
            /**
             * Format: int64
             * @description Customer associated to the lead
             */
            customerId?: number | null;
            /**
             * Format: int64
             * @description Location associated to the lead
             */
            locationId?: number | null;
            /**
             * Format: int64
             * @description Business unit associated to the lead
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type associated to the lead
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Campaign associated to the lead
             */
            campaignId: number;
            /**
             * Format: date-time
             * @description The next time someone is supposed to follow up on this lead
             */
            followUpDate?: string | null;
            /**
             * Format: int64
             * @description User ID who created this lead
             */
            createdById: number;
            /**
             * Format: date-time
             * @description When the lead was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the lead was modified
             */
            modifiedOn: string;
            /** @description List of IDs of tags on the lead */
            tagTypeIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of the reason booking was dismissed
             */
            dismissingReasonId?: number | null;
            active: boolean;
        };
        /** @enum {string} */
        "Crm.V2.LeadStatus": "Open" | "Dismissed" | "Converted";
        /** @description Represents export API response. */
        "ExportResponse_Of_Crm.V2.ExportLocationsResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Crm.V2.ExportLocationsResponse"][];
        };
        "Crm.V2.ExportLocationsResponse": {
            /**
             * Format: int64
             * @description ID of the location tax zone
             */
            taxZoneId?: number | null;
            /**
             * Format: int64
             * @description ID of the location
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the location’s customer.
             */
            customerId: number;
            /** @description If false, the record has been deactivated. */
            active: boolean;
            /** @description Name of the location */
            name: string;
            /** @description Location’s address */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Location record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: date-time
             * @description DateTime (UTC) that location record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Tells you which location record this record was merged into.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description ID of the location's Zone
             */
            zoneId?: number | null;
            /** @description Tax Exempt status of the location. */
            taxExempt: boolean;
            /** @description Tag Type IDs of the location */
            tagTypeIds: number[];
            /**
             * @description List of external data attached to this Location,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
        };
        "Crm.V2.LeadResponse": {
            /**
             * Format: int64
             * @description ID of the lead
             */
            id: number;
            /** @description Status of the lead */
            status: components["schemas"]["Crm.V2.LeadStatus"];
            /** @description Priority of the lead */
            priority: components["schemas"]["Crm.V2.Priority"];
            /**
             * Format: int64
             * @description Customer associated to the lead
             */
            customerId?: number | null;
            /**
             * Format: int64
             * @description Location associated to the lead
             */
            locationId?: number | null;
            /**
             * Format: int64
             * @description Business unit associated to the lead
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type associated to the lead
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Campaign associated to the lead
             */
            campaignId: number;
            /**
             * Format: date-time
             * @description The next time someone is supposed to follow up on this lead
             */
            followUpDate?: string | null;
            /**
             * Format: int64
             * @description User ID who created this lead
             */
            createdById: number;
            /**
             * Format: date-time
             * @description When the lead was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the lead was modified
             */
            modifiedOn: string;
            /** @description List of IDs of tags on the lead */
            tagTypeIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of the reason booking was dismissed
             */
            dismissingReasonId?: number | null;
            /** @description Summary of the lead */
            summary?: string | null;
            /**
             * Format: int64
             * @description Call reason ID used to classify the lead by the user
             */
            callReasonId?: number | null;
            /**
             * Format: int64
             * @description Call ID used to classify the lead
             */
            callId?: number | null;
            /**
             * Format: int64
             * @description Booking ID used to classify the lead
             */
            bookingId?: number | null;
            /**
             * Format: int64
             * @description Manual Call ID used to classify the lead
             */
            manualCallId?: number | null;
            /** @description Permanent URL for the lead */
            leadUrl?: string | null;
            /** @description Customer name provided for the lead */
            leadCustomerName?: string | null;
            /** @description Phone number provided for the lead */
            leadPhone?: string | null;
            /** @description Email provided for the lead */
            leadEmail?: string | null;
            /** @description Street provided for the lead */
            leadStreet?: string | null;
            /** @description Unit provided for the lead */
            leadUnit?: string | null;
            /** @description City provided for the lead */
            leadCity?: string | null;
            /** @description State provided for the lead */
            leadState?: string | null;
            /** @description Zip provided for the lead */
            leadZip?: string | null;
            /** @description Country provided for the lead */
            leadCountry?: string | null;
            /** @description Capture source of the lead */
            captureSource?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.LeadResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.LeadResponse"][];
        };
        "Crm.V2.FollowUpResponse": {
            /**
             * Format: int64
             * @description ID of the lead the follow-up is for
             */
            leadId: number;
            /**
             * Format: date-time
             * @description Follow-up date
             */
            followUpDate: string;
            /** @description Text of follow-up note */
            text?: string | null;
            /** @description Whether to pin follow-up note to the top */
            pinToTop: boolean;
        };
        "Crm.V2.CreateFollowUpRequest": {
            /**
             * Format: date-time
             * @description Follow-up date
             */
            followUpDate: string;
            /** @description Text of follow-up note */
            text?: string | null;
            /** @description Whether to pin follow-up note to the top */
            pinToTop?: boolean | null;
        };
        "Crm.V2.LeadCreateRequest": {
            /**
             * Format: int64
             * @description ID of the customer
             */
            customerId?: number | null;
            /**
             * Format: int64
             * @description ID of the location
             */
            locationId?: number | null;
            /**
             * Format: int64
             * @description ID of the campaign
             */
            campaignId: number;
            /**
             * Format: int64
             * @description ID of the business unit
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId?: number | null;
            /** @description Lead summary */
            summary: string;
            /** @description List of IDs of tags on the lead */
            tagTypeIds?: number[] | null;
            /** @description Priority of the lead */
            priority?: components["schemas"]["Crm.V2.Priority"] | null;
            /**
             * Format: int64
             * @description ID of the call reason. Required if follow up date is not provided.
             */
            callReasonId?: number | null;
            /**
             * Format: date-time
             * @description Date of when to follow up. Required if call reason ID is not provided.
             */
            followUpDate?: string | null;
            /**
             * Format: int64
             * @description The associated Booking Id to use for creating the Lead.
             *     This Booking will be dismissed and a Lead will get created associated to this Booking.
             */
            bookingId?: number | null;
            /** @description Customer name provided for the lead */
            leadCustomerName?: string | null;
            /** @description Phone number provided for the lead */
            leadPhone?: string | null;
            /** @description Email provided for the lead */
            leadEmail?: string | null;
            /** @description Street provided for the lead */
            leadStreet?: string | null;
            /** @description Unit provided for the lead */
            leadUnit?: string | null;
            /** @description City provided for the lead */
            leadCity?: string | null;
            /** @description State provided for the lead */
            leadState?: string | null;
            /** @description Zip provided for the lead */
            leadZip?: string | null;
            /** @description Country provided for the lead */
            leadCountry?: string | null;
        };
        "Crm.V2.LeadUpdateRequest": {
            /**
             * Format: int64
             * @description ID of the campaign
             */
            campaignId?: number;
            /** @description Priority of the lead */
            priority?: components["schemas"]["Crm.V2.Priority"];
            /**
             * Format: int64
             * @description ID of the business unit
             */
            businessUnitId?: number;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId?: number;
            /** @description Lead summary */
            summary?: string;
            /** @description Customer name provided for the lead */
            leadCustomerName?: string;
            /** @description Phone number provided for the lead */
            leadPhone?: string;
            /** @description Email provided for the lead */
            leadEmail?: string;
            /** @description Street provided for the lead */
            leadStreet?: string;
            /** @description Unit provided for the lead */
            leadUnit?: string;
            /** @description City provided for the lead */
            leadCity?: string;
            /** @description State provided for the lead */
            leadState?: string;
            /** @description Zip provided for the lead */
            leadZip?: string;
            /** @description Country provided for the lead */
            leadCountry?: string;
        };
        "Crm.V2.LeadNoteCreateRequest": {
            /** @description Text content of lead note */
            text: string;
            /** @description Whether to pin lead note to the top */
            pinToTop?: boolean | null;
        };
        "Crm.V2.DismissLeadRequest": {
            /**
             * Format: int64
             * @description Select a Call Reason to associate to a Booking that’s being dismissed for reporting purposes.
             */
            dismissingReasonId: number;
        };
        "Crm.V2.SubmitLeadFormResponse": {
            /**
             * Format: int64
             * @description The id of the lead entity that represents the lead form
             */
            leadId: number;
        };
        "Crm.V2.SubmitLeadFormRequest": {
            /** @description The name of the customer */
            name: string;
            /** @description The email of the customer */
            email?: string | null;
            /** @description The phone number of the customer */
            phoneNumber?: string | null;
            /** @description The address of the customer */
            address?: components["schemas"]["Crm.V2.Customers.CustomerAddress"] | null;
            /** @description Summary submitted in the form */
            summary?: string | null;
        };
        "Crm.V2.Locations.LocationResponse": {
            /**
             * Format: int64
             * @description ID of the location
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the location’s customer.
             */
            customerId: number;
            /** @description If false, the record has been deactivated. */
            active: boolean;
            /** @description Name of the location */
            name: string;
            /** @description Location’s address */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Location record’s custom fields */
            customFields: components["schemas"]["Crm.V2.Customers.CustomFieldModel"][];
            /**
             * Format: date-time
             * @description DateTime (UTC) that location record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description User ID who created the record.
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Modified On (UTC) for the record.
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Tells you which location record this record was merged into.
             */
            mergedToId?: number | null;
            /**
             * Format: int64
             * @description ID of the location's Zone
             */
            zoneId?: number | null;
            /** @description Tax Exempt status of the location. */
            taxExempt: boolean;
            /** @description Tag Type IDs of the location */
            tagTypeIds: number[];
            /**
             * @description List of external data attached to this Location,
             *     which corresponds to the application GUID provided in the request.
             */
            externalData: components["schemas"]["Crm.V2.ExternalDataModel"][];
            /**
             * Format: int64
             * @description ID of the location tax zone
             */
            taxZoneId?: number | null;
        };
        "Crm.V2.Locations.CreateLocationRequest": {
            /** @description Name of the location */
            name: string;
            /** @description Address of the location record */
            address: components["schemas"]["Crm.V2.Customers.CustomerAddress"];
            /** @description Contacts for the location */
            contacts?: components["schemas"]["Crm.V2.Customers.NewCustomerContact"][] | null;
            /** @description Location record’s custom fields */
            customFields?: components["schemas"]["Crm.V2.Customers.CustomFieldUpdateModel"][] | null;
            /** @description Tag type ids for the location */
            tagTypeIds?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this Location.
             */
            externalData?: components["schemas"]["Crm.V2.ExternalDataCreateRequest"] | null;
            /** @description Gets or sets the source of the coordinates. */
            coordinatesSource?: components["schemas"]["GeolocationCoordinatesSource"] | null;
            /** @description Gets or sets the verification status of the coordinates. */
            coordinatesVerificationStatus?: components["schemas"]["GeolocationVerificationStatus"] | null;
            /**
             * Format: int64
             * @description ID of the location’s customer.
             */
            customerId: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Locations.LocationResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Locations.LocationResponse"][];
        };
        "Crm.V2.Locations.UpdateLocationRequest": {
            /**
             * Format: int64
             * @description ID of the location’s customer.
             */
            customerId?: number;
            /** @description Name of the location */
            name?: string;
            /** @description Address of the location record */
            address?: components["schemas"]["Crm.V2.Locations.AddressPatchModel"];
            /** @description If false, the record has been deactivated. */
            active?: boolean;
            /**
             * Format: int64
             * @description ID of the location tax zone
             */
            taxZoneId?: number;
            /**
             * @description List of custom fields and their values. This list must describe the full list of custom fields on the location.
             *     If location A has values for custom fields X and Y and this field only contains a model for custom field X, then
             *     the value for custom field Y on location A will be removed.
             */
            customFields?: components["schemas"]["Crm.V2.Customers.CustomFieldUpdateModel"][];
            /**
             * @description List of tag type IDs. If location has tag types X and Y and this field only contains tag type X, then Y will removed from the location.
             *     If it is an empty list, all tags on the location will be removed.
             */
            tagTypeIds?: number[];
            /**
             * @description Optional model that contains a list of external data items
             *     that should be updated to this Location.
             */
            externalData?: components["schemas"]["Crm.V2.ExternalDataUpdateRequest"];
        };
        "Crm.V2.Locations.AddressPatchModel": {
            /** @description Street */
            street: string;
            /** @description Unit */
            unit: string;
            /** @description City */
            city: string;
            /** @description State */
            state: string;
            /** @description Zip */
            zip: string;
            /** @description Country */
            country: string;
            /**
             * Format: double
             * @description Latitude
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Longitude
             */
            longitude?: number | null;
        };
        "Crm.V2.LocationNoteCreateRequest": {
            /** @description Text content of location note */
            text: string;
            /** @description Whether to pin location note to the top */
            pinToTop?: boolean | null;
            /** @description Whether to add the same note to the location's customer */
            addToCustomer?: boolean | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.LocationContactResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.LocationContactResponse"][];
        };
        "Crm.V2.LocationContactResponse": {
            /**
             * Format: int64
             * @description Id of contact
             */
            id: number;
            /** @description Type of contact */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo?: string | null;
            /** @description Phone settings of the location contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was created
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.LocationsContactResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.LocationsContactResponse"][];
        };
        "Crm.V2.LocationsContactResponse": {
            /**
             * Format: int64
             * @description Id of contact
             */
            id: number;
            /** @description Type of contact */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo?: string | null;
            /** @description Phone settings of the location contact */
            phoneSettings: components["schemas"]["Crm.V2.Customers.PhoneSettings"];
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the contact was created
             */
            createdOn: string;
            /** @description Contact Preferences */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesResponse"] | null;
            /**
             * Format: int64
             * @description Id of location
             */
            locationId: number;
        };
        "Crm.V2.LocationContactCreateRequest": {
            /** @description Type of contact */
            type: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value: string;
            /** @description Memo of contact */
            memo?: string | null;
        };
        "Crm.V2.LocationContactUpdateRequest": {
            /** @description Type of contact */
            type?: components["schemas"]["Crm.V2.ContactType"];
            /** @description Value of contact */
            value?: string;
            /** @description Memo of contact */
            memo?: string;
            /** @description Contact preference setting for Job Reminders and Marketing Updates */
            preferences?: components["schemas"]["Crm.V2.Customers.ContactPreferencesRequest"];
        };
        "Crm.V2.Locations.CreateLocationTagResponse": {
            /** Format: int64 */
            locationId: number;
            tagTypeIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Crm.V2.Locations.CustomFieldTypeResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Crm.V2.Locations.CustomFieldTypeResponse"][];
        };
        "Crm.V2.Locations.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description ID of the custom field type
             */
            id: number;
            /** @description Name of the custom field type */
            name?: string | null;
            /** @description The type custom field type (e.g. Text, Dropdown, or Numeric) */
            dataType?: string | null;
            /** @description The type custom field type (e.g. Text, Dropdown, or Numeric) */
            dataTypeOptions?: string[] | null;
            /**
             * Format: date-time
             * @description DateTime (UTC) that customer record was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Modified on (UTC) for the record.
             */
            modifiedOn: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    BookingProviderTags_GetList: {
        parameters: {
            query?: {
                /** @description Name of the booking provider tag */
                name?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "tagName": "string",
                     *           "description": "string",
                     *           "type": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.GetBookingProviderTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BookingProviderTags_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "tagName": "string",
                 *       "description": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CreateBookingProviderTagRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "tagName": "string",
                     *       "description": "string",
                     *       "type": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.CreateBookingProviderTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BookingProviderTags_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "tagName": "string",
                     *       "description": "string",
                     *       "type": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.GetBookingProviderTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BookingProviderTags_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "tagName": "string",
                 *       "description": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateBookingProviderTagRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "tagName": "string",
                     *       "description": "string",
                     *       "type": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingProviderTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "source": "string",
                     *       "createdOn": "string",
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "customerType": {},
                     *       "start": "string",
                     *       "campaignId": 0,
                     *       "businessUnitId": 0,
                     *       "isFirstTimeClient": true,
                     *       "uploadedImages": [
                     *         "string"
                     *       ],
                     *       "isSendConfirmationEmail": true,
                     *       "status": {},
                     *       "dismissingReasonId": 0,
                     *       "jobId": 0,
                     *       "externalId": "string",
                     *       "priority": {},
                     *       "jobTypeId": 0,
                     *       "bookingProviderId": 0,
                     *       "modifiedOn": "string",
                     *       "summary": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Filters by booking's external ID */
                externalId?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "source": "string",
                     *           "createdOn": "string",
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "customerType": {},
                     *           "start": "string",
                     *           "campaignId": 0,
                     *           "businessUnitId": 0,
                     *           "isFirstTimeClient": true,
                     *           "uploadedImages": [
                     *             "string"
                     *           ],
                     *           "isSendConfirmationEmail": true,
                     *           "status": {},
                     *           "dismissingReasonId": 0,
                     *           "jobId": 0,
                     *           "externalId": "string",
                     *           "priority": {},
                     *           "jobTypeId": 0,
                     *           "bookingProviderId": 0,
                     *           "modifiedOn": "string",
                     *           "summary": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_GetContactList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.BookingContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_GetForProvider: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "source": "string",
                     *       "createdOn": "string",
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "customerType": {},
                     *       "start": "string",
                     *       "campaignId": 0,
                     *       "businessUnitId": 0,
                     *       "isFirstTimeClient": true,
                     *       "uploadedImages": [
                     *         "string"
                     *       ],
                     *       "isSendConfirmationEmail": true,
                     *       "status": {},
                     *       "dismissingReasonId": 0,
                     *       "jobId": 0,
                     *       "externalId": "string",
                     *       "priority": {},
                     *       "jobTypeId": 0,
                     *       "bookingProviderId": 0,
                     *       "modifiedOn": "string",
                     *       "summary": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "source": "string",
                 *       "name": "string",
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string"
                 *       },
                 *       "customerType": {},
                 *       "start": "string",
                 *       "summary": "string",
                 *       "campaignId": 0,
                 *       "businessUnitId": 0,
                 *       "jobTypeId": 0,
                 *       "priority": {},
                 *       "isFirstTimeClient": true,
                 *       "uploadedImages": [
                 *         "string"
                 *       ],
                 *       "externalId": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateBookingRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "source": "string",
                     *       "createdOn": "string",
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "customerType": {},
                     *       "start": "string",
                     *       "campaignId": 0,
                     *       "businessUnitId": 0,
                     *       "isFirstTimeClient": true,
                     *       "uploadedImages": [
                     *         "string"
                     *       ],
                     *       "isSendConfirmationEmail": true,
                     *       "status": {},
                     *       "dismissingReasonId": 0,
                     *       "jobId": 0,
                     *       "externalId": "string",
                     *       "priority": {},
                     *       "jobTypeId": 0,
                     *       "bookingProviderId": 0,
                     *       "modifiedOn": "string",
                     *       "summary": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_GetList2: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Filters by booking's external ID */
                externalId?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                booking_provider: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "source": "string",
                     *           "createdOn": "string",
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "customerType": {},
                     *           "start": "string",
                     *           "campaignId": 0,
                     *           "businessUnitId": 0,
                     *           "isFirstTimeClient": true,
                     *           "uploadedImages": [
                     *             "string"
                     *           ],
                     *           "isSendConfirmationEmail": true,
                     *           "status": {},
                     *           "dismissingReasonId": 0,
                     *           "jobId": 0,
                     *           "externalId": "string",
                     *           "priority": {},
                     *           "jobTypeId": 0,
                     *           "bookingProviderId": 0,
                     *           "modifiedOn": "string",
                     *           "summary": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "source": "string",
                 *       "name": "string",
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string"
                 *       },
                 *       "contacts": [
                 *         {
                 *           "type": "Phone",
                 *           "value": "string",
                 *           "memo": "string"
                 *         }
                 *       ],
                 *       "customerType": "string",
                 *       "start": "string",
                 *       "summary": "string",
                 *       "campaignId": 0,
                 *       "businessUnitId": 0,
                 *       "jobTypeId": 0,
                 *       "priority": {},
                 *       "isFirstTimeClient": true,
                 *       "uploadedImages": [
                 *         "string"
                 *       ],
                 *       "isSendConfirmationEmail": true,
                 *       "externalId": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CreateBookingRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "source": "string",
                     *       "createdOn": "string",
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "customerType": {},
                     *       "start": "string",
                     *       "campaignId": 0,
                     *       "businessUnitId": 0,
                     *       "isFirstTimeClient": true,
                     *       "uploadedImages": [
                     *         "string"
                     *       ],
                     *       "isSendConfirmationEmail": true,
                     *       "status": {},
                     *       "dismissingReasonId": 0,
                     *       "jobId": 0,
                     *       "externalId": "string",
                     *       "priority": {},
                     *       "jobTypeId": 0,
                     *       "bookingProviderId": 0,
                     *       "modifiedOn": "string",
                     *       "summary": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_GetContactList2: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.BookingContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_CreateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": "string",
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.ContactCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.BookingContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_DeleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_UpdateBookingContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                booking_provider: number;
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": "Phone",
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateBookingContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "Phone",
                     *       "value": "string",
                     *       "memo": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.UpdateBookingContactRequest"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Booking or Contact was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Bookings_DismissBooking: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
                booking_provider: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "callReasonId": 0,
                 *       "dismissingMemo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.DismissBookingModel"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BulkTags_AddTags: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerIds": [
                 *         0
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.AddBulkTagsRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BulkTags_RemoveTags: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerIds": [
                 *         0
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.RemoveBulkTagsRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_GetContactMethods: {
        parameters: {
            query?: {
                /** @description Filters by reference ID */
                referenceId?: string;
                /** @description Filters by contact method type */
                type?: string;
                /** @description Filters by contact method value */
                value?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                contactId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "contactId": "string",
                     *           "referenceId": "string",
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "createdBy": 0,
                     *           "modifiedOn": "string",
                     *           "modifiedBy": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_CreateContactMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "referenceId": "string",
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CreateContactMethodRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "contactId": "string",
                     *       "referenceId": "string",
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_GetContactMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "contactId": "string",
                     *       "referenceId": "string",
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact/Contact Method not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_UpsertContactMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "referenceId": "string",
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpsertContactMethodRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "contactId": "string",
                     *       "referenceId": "string",
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_DeleteContactMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact/Contact Method not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactMethods_UpdateContactMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateContactMethodRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "contactId": "string",
                     *       "referenceId": "string",
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact/Contact Method not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactPreferences_GetContactMethodPreferences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example [
                     *       {
                     *         "name": "string",
                     *         "dataType": "string",
                     *         "value": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactPreferenceResponse"][];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact / Contact Method not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactPreferences_GetContactMethodPreference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                preferenceName: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "name": "string",
                     *       "dataType": "string",
                     *       "value": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactPreferenceResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact / Contact Method / Preference not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ContactPreferences_UpdateContactMethodPreference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
                contactMethodId: string;
                preferenceName: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "value": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateContactMethodPreferenceRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "name": "string",
                     *       "dataType": "string",
                     *       "value": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactPreferenceResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact / Contact Method not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "referenceId": "string",
                     *       "name": "string",
                     *       "title": "string",
                     *       "isArchived": true,
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_Replace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "title": "string",
                 *       "referenceId": "string",
                 *       "isArchived": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.ReplaceContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "referenceId": "string",
                     *       "name": "string",
                     *       "title": "string",
                     *       "isArchived": true,
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_DeleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "title": "string",
                 *       "referenceId": "string",
                 *       "isArchived": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.UpdateContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "referenceId": "string",
                     *       "name": "string",
                     *       "title": "string",
                     *       "isArchived": true,
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_GetByRelationshipId: {
        parameters: {
            query?: {
                /** @description Filters by contact name */
                name?: string;
                /** @description Filters by contact title */
                title?: string;
                /** @description Filters by external reference ID */
                referenceId?: string;
                /** @description Filters by contact archive status */
                isArchived?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                relationshipId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "referenceId": "string",
                     *           "name": "string",
                     *           "title": "string",
                     *           "isArchived": true,
                     *           "createdOn": "string",
                     *           "createdBy": 0,
                     *           "modifiedOn": "string",
                     *           "modifiedBy": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_GetList: {
        parameters: {
            query?: {
                /** @description Filters by contact name */
                name?: string;
                /** @description Filters by contact title */
                title?: string;
                /** @description Filters by external reference ID */
                referenceId?: string;
                /** @description Filters by contact archive status */
                isArchived?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "referenceId": "string",
                     *           "name": "string",
                     *           "title": "string",
                     *           "isArchived": true,
                     *           "createdOn": "string",
                     *           "createdBy": 0,
                     *           "modifiedOn": "string",
                     *           "modifiedBy": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "title": "string",
                 *       "referenceId": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CreateContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "referenceId": "string",
                     *       "name": "string",
                     *       "title": "string",
                     *       "isArchived": true,
                     *       "createdOn": "string",
                     *       "createdBy": 0,
                     *       "modifiedOn": "string",
                     *       "modifiedBy": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Unknown customer */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_CreateContactRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Contact Id */
                contactId: string;
                /** @description Related Entity ID */
                relatedEntityId: number;
                /** @description Relationship type slug: customer, location, booking */
                typeSlug: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid args */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Invalid url parameter, External entity not found, Contact Relationship Type not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found, Unknown Contact Relationship Type */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_DeleteContactRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Contact Id */
                contactId: string;
                /** @description Related Entity ID */
                relatedEntityId: number;
                /** @description Relationship type: customer, location, booking */
                typeSlug: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid args */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Invalid url parameter */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found, Contact Relationship not found */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_GetContactRelationshipList: {
        parameters: {
            query?: {
                /** @description Filters by related entity id */
                relatedEntityId?: number;
                /** @description Relationship type slug: customer, location, booking */
                typeSlug?: string;
                /** @description Relationship type name: Customer, Location, Booking */
                typeName?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: ID, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                contactId: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "relatedEntityId": 0,
                     *           "typeName": "string",
                     *           "typeSlug": "string",
                     *           "createdOn": "string",
                     *           "createdBy": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.ContactRelationshipResponse"];
                };
            };
            /** @description Invalid filter args */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Invalid url parameter */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Contact not found */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_GetPreferenceMetadataList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example [
                     *       {
                     *         "id": "string",
                     *         "name": "string",
                     *         "description": "string",
                     *         "dataType": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Crm.V2.ContactPreferenceTypeResponse"][];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Contacts_SearchContactMethods: {
        parameters: {
            query?: {
                contactId?: string;
                /** @description Filters by reference ID */
                referenceId?: string;
                /** @description Filters by contact method type */
                type?: string;
                /** @description Filters by contact method value */
                value?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "contactId": "string",
                     *           "referenceId": "string",
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "createdBy": 0,
                     *           "modifiedOn": "string",
                     *           "modifiedBy": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.ContactMethodResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Provided authentication is insufficient to grant access */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "type": {},
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "balance": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "doNotMail": true,
                     *       "doNotService": true,
                     *       "nationalAccount": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "paymentTermId": 0,
                     *       "creditLimit": 0,
                     *       "creditLimitBalance": 0,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CustomerResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "type": {},
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "externalData": {
                 *         "patchMode": {},
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "doNotMail": true,
                 *       "doNotService": true,
                 *       "nationalAccount": true,
                 *       "active": true,
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "taxExempt": true,
                 *       "paymentTermId": 0,
                 *       "creditLimit": 0,
                 *       "creditLimitBalance": 0
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Customers.UpdateCustomerRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "type": {},
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "balance": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "doNotMail": true,
                     *       "doNotService": true,
                     *       "nationalAccount": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "paymentTermId": 0,
                     *       "creditLimit": 0,
                     *       "creditLimitBalance": 0,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CustomerResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
                /** @description Returns specific customer records by customer ID. */
                ids?: string;
                /** @description Returns customer records created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns customer records created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
                /** @description Returns customer records modified before the requested date (in UTC) */
                modifiedBefore?: string;
                /** @description Returns customer records modified after the requested date (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Excludes accounting changes such as balance adjustments from the modified date range. */
                excludeAccountingChangesFromModifiedDateRange?: boolean;
                /** @description Returns customer records by name. */
                name?: string;
                /** @description Returns customer records by street. */
                street?: string;
                /** @description Returns customer records by unit. */
                unit?: string;
                /** @description Returns customer records by city. */
                city?: string;
                /** @description Returns customer records by state. */
                state?: string;
                /** @description Returns customer records by zip. */
                zip?: string;
                /** @description Returns customer records by country. */
                country?: string;
                /** @description Returns customer records by latitude. */
                latitude?: number;
                /** @description Returns customer records by longitude. */
                longitude?: number;
                /** @description Returns customer records by phone number of contacts. */
                phone?: string;
                /**
                 * @description Returns customer records by active status (only active items will be returned by default).\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Returns customer records with external data for a particular GUID */
                externalDataApplicationGuid?: string;
                externalDataKey?: string;
                externalDataValues?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "type": {},
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "balance": 0,
                     *           "taxExempt": true,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "doNotMail": true,
                     *           "doNotService": true,
                     *           "nationalAccount": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "mergedToId": 0,
                     *           "paymentTermId": 0,
                     *           "creditLimit": 0,
                     *           "creditLimitBalance": 0,
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Customers.CustomerResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "type": {},
                 *       "doNotMail": true,
                 *       "doNotService": true,
                 *       "nationalAccount": true,
                 *       "locations": [
                 *         {
                 *           "name": "string",
                 *           "address": {
                 *             "street": "string",
                 *             "unit": "string",
                 *             "city": "string",
                 *             "state": "string",
                 *             "zip": "string",
                 *             "country": "string",
                 *             "latitude": 0,
                 *             "longitude": 0
                 *           },
                 *           "contacts": [
                 *             {
                 *               "type": {},
                 *               "value": "string",
                 *               "memo": "string"
                 *             }
                 *           ],
                 *           "customFields": [
                 *             {
                 *               "typeId": 0,
                 *               "value": "string"
                 *             }
                 *           ],
                 *           "tagTypeIds": [
                 *             0
                 *           ],
                 *           "externalData": {
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "coordinatesSource": {},
                 *           "coordinatesVerificationStatus": {}
                 *         }
                 *       ],
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "contacts": [
                 *         {
                 *           "type": {},
                 *           "value": "string",
                 *           "memo": "string"
                 *         }
                 *       ],
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "taxExempt": true,
                 *       "paymentTermId": 0,
                 *       "creditLimit": 0,
                 *       "creditLimitBalance": 0
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Customers.CreateCustomerRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "type": {},
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "balance": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "doNotMail": true,
                     *       "doNotService": true,
                     *       "nationalAccount": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "paymentTermId": 0,
                     *       "creditLimit": 0,
                     *       "creditLimitBalance": 0,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "locations": [
                     *         {
                     *           "taxZoneId": 0,
                     *           "id": 0,
                     *           "customerId": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "mergedToId": 0,
                     *           "zoneId": 0,
                     *           "taxExempt": true,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "contacts": [
                     *             {
                     *               "id": 0,
                     *               "type": {},
                     *               "value": "string",
                     *               "memo": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "contacts": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CreatedCustomerResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_GetNotes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Returns notes created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns notes created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
                /** @description Returns notes modified before the requested date (in UTC) */
                modifiedBefore?: string;
                /** @description Returns notes modified after the requested date (in UTC) */
                modifiedOnOrAfter?: string;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_CreateNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "text": "string",
                 *       "pinToTop": true,
                 *       "addToLocations": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CustomerNoteCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "text": "string",
                     *       "isPinned": true,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_DeleteNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                noteId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_GetContactList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "modifiedOn": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Customers.CustomerContactWithModifiedOnResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_CreateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Customers.CreateCustomerContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "modifiedOn": "string",
                     *       "phoneSettings": {
                     *         "phoneNumber": "string",
                     *         "doNotText": true
                     *       },
                     *       "createdOn": "string",
                     *       "preferences": {
                     *         "jobRemindersEnabled": true,
                     *         "marketingUpdatesEnabled": true,
                     *         "invoiceStatementNotification": true,
                     *         "invoiceNotification": true,
                     *         "statementNotification": true
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CustomerContactWithModifiedOnResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_DeleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_UpdateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string",
                 *       "preferences": {
                 *         "jobRemindersEnabled": true,
                 *         "marketingUpdatesEnabled": true,
                 *         "invoiceStatementNotification": true,
                 *         "invoiceNotification": true,
                 *         "statementNotification": true
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Customers.UpdateCustomerContactRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "modifiedOn": "string",
                     *       "phoneSettings": {
                     *         "phoneNumber": "string",
                     *         "doNotText": true
                     *       },
                     *       "createdOn": "string",
                     *       "preferences": {
                     *         "jobRemindersEnabled": true,
                     *         "marketingUpdatesEnabled": true,
                     *         "invoiceStatementNotification": true,
                     *         "invoiceNotification": true,
                     *         "statementNotification": true
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CustomerContactWithModifiedOnResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_GetModifiedContactsList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items modified before certain date/time (in UTC). Either modifiedBefore or modifiedOnOrAfter parameter must be specified */
                modifiedBefore?: string;
                /** @description Return items modified on/after certain date/time (in UTC). Either modifiedBefore or modifiedOnOrAfter parameter must be specified */
                modifiedOnOrAfter?: string;
                /** @description Returns specific contact records by customer IDs. */
                customerIds?: string;
                /** @description Returns items created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns items created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "modifiedOn": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           },
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "customerId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Customers.CustomerContactWithModifiedOnAndCustomerIdResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_CreateTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                tagTypeId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "customerId": 0,
                     *       "tagTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Customers.CreateCustomerTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_DeleteTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                tagTypeId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Customers_GetCustomFieldTypes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "dataType": "string",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Customers.CustomFieldTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportBookings_Get: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "summary": "string",
                     *           "id": 0,
                     *           "source": "string",
                     *           "createdOn": "string",
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "customerType": {},
                     *           "start": "string",
                     *           "campaignId": 0,
                     *           "businessUnitId": 0,
                     *           "isFirstTimeClient": true,
                     *           "uploadedImages": [
                     *             "string"
                     *           ],
                     *           "isSendConfirmationEmail": true,
                     *           "status": {},
                     *           "dismissingReasonId": 0,
                     *           "jobId": 0,
                     *           "externalId": "string",
                     *           "priority": {},
                     *           "jobTypeId": 0,
                     *           "bookingProviderId": 0,
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportBookingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportContacts_CustomersContacts: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "modifiedOn": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           },
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "customerId": 0,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportCustomerContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportContacts_LocationsContacts: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           },
                     *           "locationId": 0,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportLocationContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportCustomers_GetCustomers: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "type": {},
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "balance": 0,
                     *           "taxExempt": true,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "doNotMail": true,
                     *           "doNotService": true,
                     *           "nationalAccount": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "mergedToId": 0,
                     *           "paymentTermId": 0,
                     *           "creditLimit": 0,
                     *           "creditLimitBalance": 0,
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportCustomerResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportLeads_Leads: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "summary": "string",
                     *           "callReasonId": 0,
                     *           "callId": 0,
                     *           "bookingId": 0,
                     *           "manualCallId": 0,
                     *           "leadUrl": "string",
                     *           "leadCustomerName": "string",
                     *           "leadPhone": "string",
                     *           "leadEmail": "string",
                     *           "leadStreet": "string",
                     *           "leadUnit": "string",
                     *           "leadCity": "string",
                     *           "leadState": "string",
                     *           "leadZip": "string",
                     *           "leadCountry": "string",
                     *           "captureSource": "string",
                     *           "id": 0,
                     *           "status": {},
                     *           "priority": {},
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "campaignId": 0,
                     *           "followUpDate": "string",
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "dismissingReasonId": 0,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportLeadsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ExportLocations_Locations: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "taxZoneId": 0,
                     *           "id": 0,
                     *           "customerId": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "mergedToId": 0,
                     *           "zoneId": 0,
                     *           "taxExempt": true,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Crm.V2.ExportLocationsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "status": {},
                     *       "priority": {},
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "campaignId": 0,
                     *       "followUpDate": "string",
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "dismissingReasonId": 0,
                     *       "summary": "string",
                     *       "callReasonId": 0,
                     *       "callId": 0,
                     *       "bookingId": 0,
                     *       "manualCallId": 0,
                     *       "leadUrl": "string",
                     *       "leadCustomerName": "string",
                     *       "leadPhone": "string",
                     *       "leadEmail": "string",
                     *       "leadStreet": "string",
                     *       "leadUnit": "string",
                     *       "leadCity": "string",
                     *       "leadState": "string",
                     *       "leadZip": "string",
                     *       "leadCountry": "string",
                     *       "captureSource": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.LeadResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Lead not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "campaignId": 0,
                 *       "priority": {},
                 *       "businessUnitId": 0,
                 *       "jobTypeId": 0,
                 *       "summary": "string",
                 *       "leadCustomerName": "string",
                 *       "leadPhone": "string",
                 *       "leadEmail": "string",
                 *       "leadStreet": "string",
                 *       "leadUnit": "string",
                 *       "leadCity": "string",
                 *       "leadState": "string",
                 *       "leadZip": "string",
                 *       "leadCountry": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LeadUpdateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "status": {},
                     *       "priority": {},
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "campaignId": 0,
                     *       "followUpDate": "string",
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "dismissingReasonId": 0,
                     *       "summary": "string",
                     *       "callReasonId": 0,
                     *       "callId": 0,
                     *       "bookingId": 0,
                     *       "manualCallId": 0,
                     *       "leadUrl": "string",
                     *       "leadCustomerName": "string",
                     *       "leadPhone": "string",
                     *       "leadEmail": "string",
                     *       "leadStreet": "string",
                     *       "leadUnit": "string",
                     *       "leadCity": "string",
                     *       "leadState": "string",
                     *       "leadZip": "string",
                     *       "leadCountry": "string",
                     *       "captureSource": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.LeadResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Filters by associated customer */
                customerId?: number;
                /**
                 * @description Allows to filter leads where the customer doesn't have a job, or there is no customer.
                 *     Possible values are:
                 *     null (return all leads);
                 *     true (return leads without customer/jobs);
                 *     false (return leads with customer and job)
                 */
                isProspect?: boolean;
                /**
                 * @description Allows to filter leads that don't have a customer or location record associated to it.
                 *     Possible values are:
                 *     null (return all leads);
                 *     true (return leads without customers or locations only);
                 *     false (return leads with customers and locations only)
                 */
                withoutCustomer?: boolean;
                /**
                 * @description Filters by status\
                 *     Values: [Open, Dismissed, Converted]
                 */
                status?: string & components["schemas"]["Crm.V2.LeadStatus"];
                /** @description Filters by customer city */
                customerCity?: string;
                /** @description Filters by customer state */
                customerState?: string;
                /** @description Filters by customer zip */
                customerZip?: string;
                /** @description Returns customers who were created on or before a certain date/time (in UTC) */
                customerCreatedOnOrAfter?: string;
                /** @description Returns customers who were created after a certain date/time (in UTC) */
                customerCreatedBefore?: string;
                /** @description Returns customers who were modified on or before a certain date/time (in UTC) */
                customerModifiedOnOrAfter?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
                /** @description If true, generates a permanent URL for the lead */
                genPermUrl?: boolean;
                /** @description Filters by customer name */
                leadCustomerName?: string;
                /** @description Filters by phone */
                leadPhone?: string;
                /** @description Filters by capture source */
                isCaptureSourceForm?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "status": {},
                     *           "priority": {},
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "campaignId": 0,
                     *           "followUpDate": "string",
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "dismissingReasonId": 0,
                     *           "summary": "string",
                     *           "callReasonId": 0,
                     *           "callId": 0,
                     *           "bookingId": 0,
                     *           "manualCallId": 0,
                     *           "leadUrl": "string",
                     *           "leadCustomerName": "string",
                     *           "leadPhone": "string",
                     *           "leadEmail": "string",
                     *           "leadStreet": "string",
                     *           "leadUnit": "string",
                     *           "leadCity": "string",
                     *           "leadState": "string",
                     *           "leadZip": "string",
                     *           "leadCountry": "string",
                     *           "captureSource": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.LeadResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerId": 0,
                 *       "locationId": 0,
                 *       "campaignId": 0,
                 *       "businessUnitId": 0,
                 *       "jobTypeId": 0,
                 *       "summary": "string",
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "priority": {},
                 *       "callReasonId": 0,
                 *       "followUpDate": "string",
                 *       "bookingId": 0,
                 *       "leadCustomerName": "string",
                 *       "leadPhone": "string",
                 *       "leadEmail": "string",
                 *       "leadStreet": "string",
                 *       "leadUnit": "string",
                 *       "leadCity": "string",
                 *       "leadState": "string",
                 *       "leadZip": "string",
                 *       "leadCountry": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LeadCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "status": {},
                     *       "priority": {},
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "campaignId": 0,
                     *       "followUpDate": "string",
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "dismissingReasonId": 0,
                     *       "summary": "string",
                     *       "callReasonId": 0,
                     *       "callId": 0,
                     *       "bookingId": 0,
                     *       "manualCallId": 0,
                     *       "leadUrl": "string",
                     *       "leadCustomerName": "string",
                     *       "leadPhone": "string",
                     *       "leadEmail": "string",
                     *       "leadStreet": "string",
                     *       "leadUnit": "string",
                     *       "leadCity": "string",
                     *       "leadState": "string",
                     *       "leadZip": "string",
                     *       "leadCountry": "string",
                     *       "captureSource": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.LeadResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_CreateFollowUp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "followUpDate": "string",
                 *       "text": "string",
                 *       "pinToTop": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.CreateFollowUpRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "leadId": 0,
                     *       "followUpDate": "string",
                     *       "text": "string",
                     *       "pinToTop": true
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.FollowUpResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_GetNotes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Returns notes created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns notes created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
                /** @description Returns notes modified before the requested date (in UTC) */
                modifiedBefore?: string;
                /** @description Returns notes modified after the requested date (in UTC) */
                modifiedOnOrAfter?: string;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_CreateNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "text": "string",
                 *       "pinToTop": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LeadNoteCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "text": "string",
                     *       "isPinned": true,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Lead not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_Dismiss: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "dismissingReasonId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.DismissLeadRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Lead not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Leads_SubmitLeadForm: {
        parameters: {
            query?: {
                id?: number;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "email": "string",
                 *       "phoneNumber": "string",
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "summary": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.SubmitLeadFormRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "leadId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.SubmitLeadFormResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "customerId": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "zoneId": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "taxZoneId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Locations.LocationResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerId": 0,
                 *       "name": "string",
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "active": true,
                 *       "taxZoneId": 0,
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "externalData": {
                 *         "patchMode": {},
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Locations.UpdateLocationRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "customerId": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "zoneId": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "taxZoneId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Locations.LocationResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer/Tax Zone not found */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by customer's name */
                name?: string;
                /** @description Filters by customer ID */
                customerId?: number;
                /** @description Filters by customer's street */
                street?: string;
                /** @description Filters by customer's unit */
                unit?: string;
                /** @description Filters by customer's city */
                city?: string;
                /** @description Filters by customer's state */
                state?: string;
                /** @description Filters by customer's zip */
                zip?: string;
                /** @description Filters by customer's country */
                country?: string;
                /** @description Filters by customer's latitude */
                latitude?: number;
                /** @description Filters by customer's longitude */
                longitude?: number;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Returns location records with external data for a particular GUID */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "customerId": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "mergedToId": 0,
                     *           "zoneId": 0,
                     *           "taxExempt": true,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "taxZoneId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Locations.LocationResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "contacts": [
                 *         {
                 *           "type": {},
                 *           "value": "string",
                 *           "memo": "string"
                 *         }
                 *       ],
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "coordinatesSource": {},
                 *       "coordinatesVerificationStatus": {},
                 *       "customerId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.Locations.CreateLocationRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "taxZoneId": 0,
                     *       "id": 0,
                     *       "customerId": 0,
                     *       "active": true,
                     *       "name": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "mergedToId": 0,
                     *       "zoneId": 0,
                     *       "taxExempt": true,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "contacts": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Locations.CreateLocationResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Unknown customer */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetNotes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Returns notes created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns notes created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
                /** @description Returns notes modified before the requested date (in UTC) */
                modifiedBefore?: string;
                /** @description Returns notes modified after the requested date (in UTC) */
                modifiedOnOrAfter?: string;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_CreateNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "text": "string",
                 *       "pinToTop": true,
                 *       "addToCustomer": true
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LocationNoteCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "text": "string",
                     *       "isPinned": true,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_DeleteNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                noteId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetContactList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.LocationContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_CreateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LocationContactCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "phoneSettings": {
                     *         "phoneNumber": "string",
                     *         "doNotText": true
                     *       },
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "preferences": {
                     *         "jobRemindersEnabled": true,
                     *         "marketingUpdatesEnabled": true,
                     *         "invoiceStatementNotification": true,
                     *         "invoiceNotification": true,
                     *         "statementNotification": true
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.LocationContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetLocationsContactsList: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                /** @description Return items modified before certain date/time (in UTC). Either modifiedBefore or modifiedOnOrAfter parameter must be specified */
                modifiedBefore?: string;
                /** @description Return items modified on/after certain date/time (in UTC). Either modifiedBefore or modifiedOnOrAfter parameter must be specified */
                modifiedOnOrAfter?: string;
                /** @description Returns specific contact records by location IDs. */
                locationIds?: string;
                /** @description Returns items created before the requested date (in UTC) */
                createdBefore?: string;
                /** @description Returns items created on or after the requested date (in UTC) */
                createdOnOrAfter?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "type": {},
                     *           "value": "string",
                     *           "memo": "string",
                     *           "phoneSettings": {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           },
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "preferences": {
                     *             "jobRemindersEnabled": true,
                     *             "marketingUpdatesEnabled": true,
                     *             "invoiceStatementNotification": true,
                     *             "invoiceNotification": true,
                     *             "statementNotification": true
                     *           },
                     *           "locationId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.LocationsContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_DeleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_UpdateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                contactId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "type": {},
                 *       "value": "string",
                 *       "memo": "string",
                 *       "preferences": {
                 *         "jobRemindersEnabled": true,
                 *         "marketingUpdatesEnabled": true,
                 *         "invoiceStatementNotification": true,
                 *         "invoiceNotification": true,
                 *         "statementNotification": true
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Crm.V2.LocationContactUpdateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "value": "string",
                     *       "memo": "string",
                     *       "phoneSettings": {
                     *         "phoneNumber": "string",
                     *         "doNotText": true
                     *       },
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "preferences": {
                     *         "jobRemindersEnabled": true,
                     *         "marketingUpdatesEnabled": true,
                     *         "invoiceStatementNotification": true,
                     *         "invoiceNotification": true,
                     *         "statementNotification": true
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.LocationContactResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_CreateTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                tagTypeId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "locationId": 0,
                     *       "tagTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Crm.V2.Locations.CreateLocationTagResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_DeleteTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                tagTypeId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetCustomFieldTypes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "dataType": "string",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Crm.V2.Locations.CustomFieldTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Location not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_UpdatePreferredTechnician: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                preferredTechnicianId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Locations_GetPreferredTechnician: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example 0 */
                    "application/json": number | null;
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
}
