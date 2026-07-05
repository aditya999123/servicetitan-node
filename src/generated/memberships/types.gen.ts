// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of customer memberships */
        get: operations["CustomerMemberships_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/memberships/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of custom field types that apply to customer memberships */
        get: operations["CustomerMemberships_GetCustomFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/memberships/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets customer membership specified by ID */
        get: operations["CustomerMemberships_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates specified customer membership in "patch" mode */
        patch: operations["CustomerMemberships_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/memberships/{id}/status-changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets status changes for the given customer membership */
        get: operations["CustomerMemberships_GetStatusChanges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/memberships/sale": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates membership sale invoice */
        post: operations["CustomerMemberships_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/membership-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for membership types */
        get: operations["Export_MembershipTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/recurring-service-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for recurring service types */
        get: operations["Export_RecurringServiceTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for customer memberships */
        get: operations["Export_Memberships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/invoice-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for invoice templates */
        get: operations["Export_InvoiceTemplates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/recurring-services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for recurring services */
        get: operations["Export_LocationRecurringServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/recurring-service-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for recurring service events */
        get: operations["Export_LocationRecurringServiceEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/membership-status-changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for customer membership status changes */
        get: operations["Export_MembershipStatusChanges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoice-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of invoice templates by given IDs
         * @description Please note this endpoint does not allow to enumerate all invoice templates.
         *     Use the Customer Membership endpoint (for billing template) or
         *     Recurring Service endpoint (for invoice template) to get invoice template IDs.
         */
        get: operations["InvoiceTemplates_GetList"];
        put?: never;
        /** Creates new invoice template */
        post: operations["InvoiceTemplates_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoice-templates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets invoice template specified by ID */
        get: operations["InvoiceTemplates_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates specified invoice template in "patch" mode */
        patch: operations["InvoiceTemplates_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/recurring-service-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of recurring service events */
        get: operations["LocationRecurringServiceEvents_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-service-events/{id}/mark-complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Marks the specified recurring service event as complete
         * @description Marking an event as complete links the job with provided JobID to the given Location Recurring Service Event.
         *     It will also copy over invoice items to the Job Invoice corresponding to the Invoice Template of the
         *     Location Recurring Service the Event was generated from.
         */
        post: operations["LocationRecurringServiceEvents_MarkComplete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-service-events/{id}/mark-incomplete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Marks the specified recurring service event as incomplete
         * @description Marking an event as incomplete unlinks the job with provided JobID to the given Location Recurring Service
         *     Event. It will also delete the invoice items that were copied over when the Location Recurring Service Event
         *     was marked as completed on the Job.
         */
        post: operations["LocationRecurringServiceEvents_MarkIncomplete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of recurring services */
        get: operations["LocationRecurringServices_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets recurring service specified by ID */
        get: operations["LocationRecurringServices_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates specified recurring service in "patch" mode */
        patch: operations["LocationRecurringServices_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/membership-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of membership types */
        get: operations["MembershipTypes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/membership-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets membership type specified by ID */
        get: operations["MembershipTypes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/membership-types/{id}/recurring-service-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets recurring services for the given membership type */
        get: operations["MembershipTypes_GetRecurringServiceItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/membership-types/{id}/discounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets discounts for the given membership type */
        get: operations["MembershipTypes_GetDiscountsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/membership-types/{id}/duration-billing-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets duration/billing options for the given membership type */
        get: operations["MembershipTypes_GetDurationBillingList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-service-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of recurring service types */
        get: operations["RecurringServiceTypes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/recurring-service-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets recurring service type specified by ID */
        get: operations["RecurringServiceTypes_Get"];
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
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.CustomerMembershipResponse": {
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
            data: components["schemas"]["Memberships.V2.CustomerMembershipResponse"][];
        };
        "Memberships.V2.CustomerMembershipResponse": {
            /**
             * Format: int64
             * @description Customer membership ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When customer membership was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this membership
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When customer membership was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Follow up on date
             */
            followUpOn: string;
            /**
             * Format: date-time
             * @description When customer membership was or will be cancelled
             */
            cancellationDate?: string | null;
            /**
             * Format: date-time
             * @description Beginning date of customer membership
             */
            from?: string | null;
            /**
             * Format: date-time
             * @description Next scheduled billing date
             */
            nextScheduledBillDate?: string | null;
            /**
             * Format: date-time
             * @description End date of customer membership
             */
            to?: string | null;
            /** @description How often the customer membership is billed */
            billingFrequency: components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
            /** @description Renewal billing frequency */
            renewalBillingFrequency?: components["schemas"]["Memberships.V2.MembershipRecurrenceType"] | null;
            /** @description Current status of the customer membership */
            status: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description Follow-up status of the customer membership */
            followUpStatus: components["schemas"]["Memberships.V2.OpportunityStatus"];
            /** @description Whether customer membership is active */
            active: boolean;
            /**
             * Format: decimal
             * @description Initial deferred revenue
             */
            initialDeferredRevenue: number;
            /**
             * Format: int32
             * @description Duration of customer membership in months
             */
            duration?: number | null;
            /**
             * Format: int32
             * @description Renewal duration
             */
            renewalDuration?: number | null;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Customer ID of membership
             */
            customerId: number;
            /**
             * Format: int64
             * @description The membership type ID of the customer membership
             */
            membershipTypeId: number;
            /**
             * Format: int64
             * @description ID of the user that activated this membership
             */
            activatedById?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice item that is the sale task of this membership
             */
            activatedFromId?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice template used for membership billing
             */
            billingTemplateId?: number | null;
            /**
             * Format: int64
             * @description Cancellation balance invoice ID
             */
            cancellationBalanceInvoiceId?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice that either charged or refunded the deferred revenue balance of the customer membership
             */
            cancellationInvoiceId?: number | null;
            /**
             * Format: int64
             * @description ID of custom followup status
             */
            followUpCustomStatusId?: number | null;
            /**
             * Format: int64
             * @description ID of location for this customer membership
             */
            locationId?: number | null;
            /**
             * Format: int64
             * @description Preferred payment method ID
             */
            paymentMethodId?: number | null;
            /**
             * Format: int64
             * @description ID of payment type
             */
            paymentTypeId?: number | null;
            /**
             * Format: int64
             * @description Recurring Location ID
             */
            recurringLocationId?: number | null;
            /**
             * Format: int64
             * @description Task ID that renews this membership
             */
            renewalMembershipTaskId?: number | null;
            /**
             * Format: int64
             * @description ID of the renewal membership
             */
            renewedById?: number | null;
            /**
             * Format: int64
             * @description ID of the user that was credited for the sale of this membership
             */
            soldById?: number | null;
            /** @description Customer Purchase Order */
            customerPo?: string | null;
            /** @description Internal import ID label */
            importId?: string | null;
            /** @description Memo for customer membership */
            memo?: string | null;
            /** @description List of custom fields */
            customFields: components["schemas"]["Memberships.V2.CustomFieldResponse"][];
        };
        /** @enum {string} */
        "Memberships.V2.MembershipRecurrenceType": "OneTime" | "Monthly" | "EveryOtherMonth" | "Quarterly" | "BiAnnual" | "Annual";
        /** @enum {string} */
        "Memberships.V2.MembershipStatus": "Active" | "Suspended" | "Expired" | "Canceled" | "Deleted";
        /** @enum {string} */
        "Memberships.V2.OpportunityStatus": "NotAttempted" | "Unreachable" | "Contacted" | "Won" | "Dismissed";
        "Memberships.V2.CustomFieldResponse": {
            /**
             * Format: int64
             * @description Custom field type id
             */
            typeId: number;
            /** @description Custom field name */
            name: string;
            /** @description Custom field value */
            value?: string | null;
        };
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
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.CustomFieldTypeResponse": {
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
            data: components["schemas"]["Memberships.V2.CustomFieldTypeResponse"][];
        };
        "Memberships.V2.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description The ID of the custom field.
             */
            id: number;
            /** @description The name of the custom field. */
            name: string;
            /** @description Indicates the data type of the custom field. */
            dataType: components["schemas"]["Memberships.V2.CustomFieldDataType"];
            /** @description Indicates the dropdown options if the custom field is a dropdown data type. */
            dataTypeOptions?: string[] | null;
            /**
             * Format: date-time
             * @description The date the custom field was created in UTC date / time.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date the custom field was modified in UTC date / time.
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Memberships.V2.CustomFieldDataType": "Text" | "Dropdown" | "Numeric";
        "Memberships.V2.CustomerMembershipStatusChangeItemResponse": {
            /**
             * Format: int64
             * @description ID of the status change record
             */
            id: number;
            /** @description Previous status value */
            oldStatus: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description New status value */
            newStatus: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description Optional note attached to this status change */
            note?: string | null;
            /**
             * Format: date-time
             * @description When this status change record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this status change record
             */
            createdById?: number | null;
        };
        /** @description Default response when creating object with a new ID, or updating object by specified ID. */
        ModificationResponse: {
            /**
             * Format: int64
             * @description The ID of created/updated object
             */
            id: number;
        };
        "Memberships.V2.CustomerMembershipUpdateRequest": {
            /**
             * Format: int64
             * @description ID of the Business Unit associated with this membership
             */
            businessUnitId?: number;
            /**
             * Format: date-time
             * @description Next date that this membership will be billed on
             */
            nextScheduledBillDate?: string | null;
            /** @description Status of the membership */
            status?: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description Memo text field */
            memo?: string;
            /**
             * Format: date-time
             * @description The starting date of this membership
             */
            from?: string;
            /**
             * Format: date-time
             * @description The end date of this membership (null if ongoing)
             */
            to?: string | null;
            /**
             * Format: int64
             * @description ID of the user that was credited for the sale of this membership
             */
            soldById?: number | null;
            /**
             * Format: int64
             * @description The ID of the invoice template used to bill this membership.
             *     Can either be a "settings template" (when invoice template is shared – in this case new invoice template will be created),
             *     or be a new invoice template created specifically for this customer membership.
             */
            billingTemplateId?: number | null;
            /**
             * Format: int64
             * @description Discount location ID of this membership (null if all locations)
             */
            locationId?: number | null;
            /**
             * @description Required if RecurringLocationId is set.
             *     Determines how many of the customer's locations that recurring services should be added to: all, single, or none (which deletes existing recurring services).
             */
            recurringServiceAction?: components["schemas"]["Memberships.V2.RecurringServiceAction"];
            /**
             * Format: int64
             * @description The location at which recurring services are scheduled (null if all locations)
             */
            recurringLocationId?: number | null;
            /**
             * Format: int64
             * @description The ID of the payment method (credit card or bank account) that should be used for this membership. This
             *     field is mutually exclusive with payment type. Only one or the other can be set at a time.
             */
            paymentMethodId?: number | null;
            /**
             * Format: int64
             * @description The payment type (cash, check, etc) that should be used for this membership. This field is mutually
             *     exclusive with payment type. Only one or the other can be set at a time. Setting payment type means we will
             *     not automatically use a payment method to bill the membership and payment will have to be collected manually.
             */
            paymentTypeId?: number | null;
            /**
             * Format: int64
             * @description The ID of the service that will be used as the default to renew this membership.
             */
            renewalMembershipTaskId?: number | null;
            /**
             * Format: decimal
             * @description The amount of deferred revenue that this membership should start with that is not accounted for
             *     in the sale task.
             */
            initialDeferredRevenue?: number;
            /**
             * Format: int64
             * @description The ID of the invoice created upon membership cancellation in order to zero out the deferred revenue balance.
             */
            cancellationBalanceInvoiceId?: number | null;
            /**
             * Format: int64
             * @description The ID of the invoice optionally created upon membership cancellation in order to charge (or refund) the
             *     customer if deferred revenue balance is not 0.
             */
            cancellationInvoiceId?: number | null;
        };
        /** @enum {string} */
        "Memberships.V2.RecurringServiceAction": "None" | "Single" | "All";
        "Memberships.V2.MembershipSaleInvoiceCreateResponse": {
            /**
             * Format: int64
             * @description ID of sale invoice created
             */
            invoiceId: number;
            /**
             * Format: int64
             * @description ID of customer membership that was created
             */
            customerMembershipId: number;
        };
        "Memberships.V2.MembershipSaleInvoiceCreateRequest": {
            /**
             * Format: int64
             * @description ID of the customer you are creating the Membership Sale Invoice for
             */
            customerId: number;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description ID of the sale task that is creating the membership
             */
            saleTaskId: number;
            /**
             * Format: int64
             * @description ID of the duration/billing option to be used
             */
            durationBillingId: number;
            /**
             * Format: int64
             * @description Discount location ID of this membership (null if all locations)
             */
            locationId?: number | null;
            /**
             * @description Required if RecurringLocationId is set.
             *     Determines how many of the customer's locations that recurring services should be added to: all, single, or none (which deletes existing recurring services).
             */
            recurringServiceAction: components["schemas"]["Memberships.V2.RecurringServiceAction"];
            /**
             * Format: int64
             * @description The location at which recurring services are scheduled (null if all locations)
             */
            recurringLocationId?: number | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportMembershipTypeResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportMembershipTypeResponse"][];
        };
        "Memberships.V2.ExportMembershipTypeResponse": {
            /**
             * Format: int64
             * @description Membership type ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When membership type was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this membership type
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When membership type was modified
             */
            modifiedOn: string;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: int64
             * @description Billing template ID
             */
            billingTemplateId?: number | null;
            /**
             * Format: decimal
             * @description Membership type discount percentage (0 to 100). This is relevant only when the DiscountMode is `Basic`.
             */
            discount: number;
            /**
             * @description Membership type duration billing options.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeDurationBilling` flag.
             */
            durationBilling?: components["schemas"]["Memberships.V2.MembershipTypeDurationBillingEntry"][] | null;
            /**
             * @description Membership type discounts. This includes a list containing the target of a discount (either a business unit ID or a pricebook
             *     category ID) as well as the percentage discount (0 to 100). Note that this list is relevant only when the
             *     DiscountMode is set to `Categories` or `BusinessUnits`.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeDiscounts` flag.
             */
            discounts?: components["schemas"]["Memberships.V2.MembershipTypeDiscountEntry"][] | null;
            /**
             * @description Membership type recurring service items associated with this membership type. Each item includes the recurring service type ID,
             *     offset, offset type, and allocation percentage.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeRecurringServices` flag.
             */
            recurringServices?: components["schemas"]["Memberships.V2.MembershipTypeRecurringServiceEntry"][] | null;
            /**
             * @description Tag type IDs associated with this membership type.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeTagTypeIds` flag.
             */
            tagTypeIds?: number[] | null;
            /** @description Membership type name */
            name: string;
            /** @description Membership type display name. This is used in the Customer Portal and will be null if not set through the Membership Wizard. */
            displayName?: string | null;
            /** @description Whether membership type is active */
            active: boolean;
            /** @description Membership discount mode */
            discountMode: components["schemas"]["Memberships.V2.DiscountMode"];
            /** @description Membership location target */
            locationTarget: components["schemas"]["Memberships.V2.MembershipLocationTarget"];
            /** @description Membership revenue recognition mode */
            revenueRecognitionMode: components["schemas"]["Memberships.V2.RevenueRecognitionMode"];
            /** @description Whether invoice templates should be auto-calculated */
            autoCalculateInvoiceTemplates: boolean;
            /** @description Whether membership pricing table should be used */
            useMembershipPricingTable: boolean;
            /** @description Whether membership savings should be displayed */
            showMembershipSavings: boolean;
        };
        "Memberships.V2.MembershipTypeDurationBillingEntry": {
            /**
             * Format: int32
             * @description Duration of the entry
             */
            duration?: number | null;
            /** @description Billing frequency of the entry */
            billingFrequency: components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
            /**
             * Format: decimal
             * @description Sale price of the entry
             */
            salePrice: number;
            /**
             * Format: decimal
             * @description Billing price of the entry
             */
            billingPrice: number;
            /**
             * Format: decimal
             * @description Renewal price of the entry
             */
            renewalPrice: number;
        };
        "Memberships.V2.MembershipTypeDiscountEntry": {
            /**
             * Format: int64
             * @description ID of the discount's target, which can be either a business unit or pricebook category
             */
            targetId: number;
            /**
             * Format: decimal
             * @description Percentage discount (0 to 100)
             */
            discount: number;
        };
        "Memberships.V2.MembershipTypeRecurringServiceEntry": {
            /**
             * Format: int64
             * @description Membership type ID associated with the item
             */
            membershipTypeId: number;
            /**
             * Format: int64
             * @description Recurring service type ID associated with the item
             */
            recurringServiceTypeId: number;
            /**
             * Format: int32
             * @description Number of weeks or months (depending on offset type) between membership start and recurring service start
             */
            offset: number;
            /** @description Offset type of the recurring service type associated with this item, can be weeks (0) or months (1) */
            offsetType: components["schemas"]["Memberships.V2.OffsetType"];
            /**
             * Format: decimal
             * @description The percentage of deferred revenue allocated to the recurring service item
             */
            allocation: number;
        };
        /** @enum {string} */
        "Memberships.V2.OffsetType": "Weeks" | "Months";
        /** @enum {string} */
        "Memberships.V2.DiscountMode": "Basic" | "Units" | "Categories";
        /** @enum {string} */
        "Memberships.V2.MembershipLocationTarget": "AllLocations" | "SingleLocation";
        /** @enum {string} */
        "Memberships.V2.RevenueRecognitionMode": "PointOfSale" | "Deferred";
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportRecurringServiceTypeResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportRecurringServiceTypeResponse"][];
        };
        "Memberships.V2.ExportRecurringServiceTypeResponse": {
            /**
             * Format: int64
             * @description Recurring service type ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When recurring service type was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this recurring service type
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When recurring service type was modified
             */
            modifiedOn: string;
            /** @description Whether recurring service type is active */
            active: boolean;
            /** @description The recurrence type (e.g. Daily, Weekly, Monthly) */
            recurrenceType: components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
            /**
             * Format: int32
             * @description The recurrence interval for the given recurrence type
             */
            recurrenceInterval: number;
            /** @description A list of months when the recurring service occurs, if it is a seasonal recurrence type */
            recurrenceMonths: components["schemas"]["Memberships.V2.Month"][];
            /** @description The recurrence duration type */
            durationType: components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
            /**
             * Format: int32
             * @description The recurrence duration length (number of events)
             */
            durationLength: number;
            /**
             * Format: int64
             * @description Invoice template ID
             */
            invoiceTemplateId?: number | null;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type ID
             */
            jobTypeId?: number | null;
            /** @description Priority */
            priority: components["schemas"]["Memberships.V2.Priority"];
            /**
             * Format: int64
             * @description Campaign ID
             */
            campaignId?: number | null;
            /** @description Job summary */
            jobSummary?: string | null;
            /** @description Recurring service type name */
            name?: string | null;
            /** @description Import ID */
            importId?: string | null;
        };
        /** @enum {string} */
        "Memberships.V2.ServiceRecurrenceType": "Weekly" | "Monthly" | "Seasonal" | "Daily" | "NthWeekdayOfMonth";
        /**
         * @description Month name as a string, e.g. "January" or "May"
         * @enum {string}
         */
        "Memberships.V2.Month": "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
        /** @enum {string} */
        "Memberships.V2.ServiceRecurrenceDuration": "Continuous" | "NumberOfVisits";
        /** @enum {string} */
        "Memberships.V2.Priority": "Low" | "Normal" | "High" | "Urgent";
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportCustomerMembershipResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportCustomerMembershipResponse"][];
        };
        "Memberships.V2.ExportCustomerMembershipResponse": {
            /**
             * Format: int64
             * @description Customer membership ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When customer membership was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this membership
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When customer membership was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Follow up on date
             */
            followUpOn: string;
            /**
             * Format: date-time
             * @description When customer membership was or will be cancelled
             */
            cancellationDate?: string | null;
            /**
             * Format: date-time
             * @description Beginning date of customer membership
             */
            from?: string | null;
            /**
             * Format: date-time
             * @description Next scheduled billing date
             */
            nextScheduledBillDate?: string | null;
            /**
             * Format: date-time
             * @description End date of customer membership
             */
            to?: string | null;
            /** @description How often the customer membership is billed */
            billingFrequency: components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
            /** @description Renewal billing frequency */
            renewalBillingFrequency?: components["schemas"]["Memberships.V2.MembershipRecurrenceType"] | null;
            /** @description Current status of the customer membership */
            status: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description Follow-up status of the customer membership */
            followUpStatus: components["schemas"]["Memberships.V2.OpportunityStatus"];
            /** @description Whether customer membership is active */
            active: boolean;
            /**
             * Format: decimal
             * @description Initial deferred revenue
             */
            initialDeferredRevenue: number;
            /**
             * Format: int32
             * @description Duration of customer membership in months
             */
            duration?: number | null;
            /**
             * Format: int32
             * @description Renewal duration
             */
            renewalDuration?: number | null;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Customer ID of membership
             */
            customerId: number;
            /**
             * Format: int64
             * @description The membership type ID of the customer membership
             */
            membershipTypeId: number;
            /**
             * Format: int64
             * @description ID of the user that activated this membership
             */
            activatedById?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice item that is the sale task of this membership
             */
            activatedFromId?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice template used for membership billing
             */
            billingTemplateId?: number | null;
            /**
             * Format: int64
             * @description Cancellation balance invoice ID
             */
            cancellationBalanceInvoiceId?: number | null;
            /**
             * Format: int64
             * @description ID of the invoice that either charged or refunded the deferred revenue balance of the customer membership
             */
            cancellationInvoiceId?: number | null;
            /**
             * Format: int64
             * @description ID of custom followup status
             */
            followUpCustomStatusId?: number | null;
            /**
             * Format: int64
             * @description ID of location for this customer membership
             */
            locationId?: number | null;
            /**
             * Format: int64
             * @description Preferred payment method ID
             */
            paymentMethodId?: number | null;
            /**
             * Format: int64
             * @description ID of payment type
             */
            paymentTypeId?: number | null;
            /**
             * Format: int64
             * @description Recurring Location ID
             */
            recurringLocationId?: number | null;
            /**
             * Format: int64
             * @description Task ID that renews this membership
             */
            renewalMembershipTaskId?: number | null;
            /**
             * Format: int64
             * @description ID of the renewal membership
             */
            renewedById?: number | null;
            /**
             * Format: int64
             * @description ID of the user that was credited for the sale of this membership
             */
            soldById?: number | null;
            /** @description Customer Purchase Order */
            customerPo?: string | null;
            /** @description Internal import ID label */
            importId?: string | null;
            /** @description Memo for customer membership */
            memo?: string | null;
            /** @description List of custom fields */
            customFields: components["schemas"]["Memberships.V2.CustomFieldResponse"][];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportInvoiceTemplateResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportInvoiceTemplateResponse"][];
        };
        "Memberships.V2.ExportInvoiceTemplateResponse": {
            /**
             * Format: int64
             * @description Invoice template ID
             */
            id: number;
            /** @description Invoice template name (used only for shared invoice templates) */
            name?: string | null;
            /**
             * Format: date-time
             * @description Invoice template creation date
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created invoice template
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description Invoice template modification date
             */
            modifiedOn: string;
            /** @description Whether invoice template is active */
            active: boolean;
            /**
             * Format: decimal
             * @description Invoice template total
             */
            total: number;
            /** @description Whether invoice template is shared (i.e. visible on the Settings page) */
            isSettingsTemplate: boolean;
            /** @description Import ID */
            importId?: string | null;
            /** @description A list of invoice template items */
            items: components["schemas"]["Memberships.V2.InvoiceTemplateItemResponse"][];
        };
        "Memberships.V2.InvoiceTemplateItemResponse": {
            /**
             * Format: int64
             * @description Invoice template item ID
             */
            id: number;
            /**
             * Format: int64
             * @description Linked SKU ID
             */
            skuId: number;
            /** @description The type of linked SKU */
            skuType: components["schemas"]["Memberships.V2.SkuType"];
            /**
             * Format: decimal
             * @description Quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Unit price
             */
            unitPrice: number;
            /** @description Whether invoice item is add-on */
            isAddOn: boolean;
            /** @description Import ID */
            importId?: string | null;
            /**
             * Format: int64
             * @description The invoice item ID that created this invoice template item via ModifyMembershipWorkflowAction
             */
            workflowActionItemId?: number | null;
            /**
             * Format: html
             * @description Item description
             */
            description?: string | null;
            /**
             * Format: decimal
             * @description Materials cost
             */
            cost?: number | null;
            /**
             * Format: decimal
             * @description Sold/billable hours
             */
            hours?: number | null;
        };
        /** @enum {string} */
        "Memberships.V2.SkuType": "Service" | "Material" | "Equipment" | "PriceModifier";
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportLocationRecurringServiceResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportLocationRecurringServiceResponse"][];
        };
        "Memberships.V2.ExportLocationRecurringServiceResponse": {
            /**
             * Format: int64
             * @description Recurring service ID
             */
            id: number;
            /** @description Recurring service name */
            name: string;
            /** @description Whether recurring service is active */
            active: boolean;
            /**
             * Format: date-time
             * @description When recurring service was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this recurring service
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When recurring service was modified
             */
            modifiedOn: string;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: int64
             * @description Customer membership ID
             */
            membershipId?: number | null;
            /**
             * Format: int64
             * @description Location ID
             */
            locationId: number;
            /**
             * Format: int64
             * @description Recurring Service Type ID
             */
            recurringServiceTypeId: number;
            /** @description The recurrence duration type */
            durationType: components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
            /**
             * Format: int32
             * @description The duration length for the given duration type
             */
            durationLength: number;
            /**
             * Format: date-time
             * @description Beginning date of recurring service
             */
            from?: string | null;
            /**
             * Format: date-time
             * @description End date of recurring service
             */
            to?: string | null;
            /** @description Memo */
            memo?: string | null;
            /**
             * Format: int64
             * @description Invoice template ID
             */
            invoiceTemplateId?: number | null;
            /**
             * Format: int64
             * @description Invoice template ID for the 2nd year and following (for ongoing memberships)
             */
            invoiceTemplateForFollowingYearsId?: number | null;
            /** @description Whether first visit is complete */
            firstVisitComplete: boolean;
            /**
             * Format: int64
             * @description ID of the invoice item that is the sale task of this membership
             */
            activatedFromId?: number | null;
            /**
             * Format: decimal
             * @description Recurring service allocation
             */
            allocation: number;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type ID
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Campaign ID
             */
            campaignId?: number | null;
            /** @description Recurring service priority */
            priority: components["schemas"]["Memberships.V2.Priority"];
            /** @description Job summary */
            jobSummary?: string | null;
            /** @description The recurrence type (e.g. Daily, Weekly, Monthly, etc.) */
            recurrenceType: components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
            /**
             * Format: int32
             * @description The recurrence interval for the given recurrence type.
             *     Can be 0 when RecurrenceType is Seasonal.
             */
            recurrenceInterval: number;
            /** @description A list of months when the recurring service occurs, if it is a seasonal recurrence type */
            recurrenceMonths: components["schemas"]["Memberships.V2.Month"][];
            /**
             * @description A list specifying which days of the week this recurring service recurs when
             *     RecurrenceType is Weekly
             */
            recurrenceDaysOfWeek: components["schemas"]["Memberships.V2.WeekDay"][];
            /**
             * @description Enum value corresponding to which week of the month this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceDayOfNthWeek.
             */
            recurrenceWeek: components["schemas"]["Memberships.V2.WeekOfMonth"];
            /**
             * @description Enum value corresponding to which day of the week this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceWeek.
             */
            recurrenceDayOfNthWeek?: components["schemas"]["Memberships.V2.WeekDay"] | null;
            /**
             * @description A list of days of the month on which this recurring service recurs when
             *     RecurrenceType is Monthly.
             */
            recurrenceDaysOfMonth: number[];
            /**
             * Format: duration
             * @description Job start time
             */
            jobStartTime?: string | null;
            /**
             * Format: decimal
             * @description Estimated payroll cost
             */
            estimatedPayrollCost?: number | null;
            /**
             * @description A list of technician IDs assigned to this recurring service.
             *     Will be null if was not requested via IncludeTechnicians field.
             */
            preferredTechnicianIds?: number[] | null;
            /** @description A list of tag IDs associated to this recurring service. */
            tagTypeIds: number[];
        };
        /**
         * @description Day of week as a string, e.g. "Monday" or "Thursday"
         * @enum {string}
         */
        "Memberships.V2.WeekDay": "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
        /** @enum {string} */
        "Memberships.V2.WeekOfMonth": "None" | "First" | "Second" | "Third" | "Fourth" | "Last";
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportLocationRecurringServiceEventResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportLocationRecurringServiceEventResponse"][];
        };
        "Memberships.V2.ExportLocationRecurringServiceEventResponse": {
            /**
             * Format: int64
             * @description Recurring service event ID
             */
            id: number;
            /**
             * Format: int64
             * @description Recurring service ID
             */
            locationRecurringServiceId: number;
            /** @description Recurring service name */
            locationRecurringServiceName?: string | null;
            /**
             * Format: int64
             * @description Membership ID
             */
            membershipId?: number | null;
            /** @description Membership name */
            membershipName?: string | null;
            /** @description Opportunity status */
            status: components["schemas"]["Memberships.V2.OpportunityStatus"];
            /**
             * Format: date-time
             * @description Event date
             */
            date: string;
            /**
             * Format: date-time
             * @description Event creation date
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the job associated with this event
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the user that created this event (could happen as a result of
             *     editing recurring service, selling a new membership, etc.)
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description Event modification date
             */
            modifiedOn: string;
            /** @description Whether this event still exists, or was deleted already. */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Memberships.V2.ExportCustomerMembershipStatusChangesResponse": {
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
            data: components["schemas"]["Memberships.V2.ExportCustomerMembershipStatusChangesResponse"][];
        };
        "Memberships.V2.ExportCustomerMembershipStatusChangesResponse": {
            /**
             * Format: int64
             * @description ID of the status change record
             */
            id: number;
            /** @description Previous status value */
            oldStatus: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description New status value */
            newStatus: components["schemas"]["Memberships.V2.MembershipStatus"];
            /** @description Optional note attached to this status change */
            note?: string | null;
            /**
             * Format: date-time
             * @description When this status change record was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this status change record
             */
            createdById?: number | null;
            /**
             * Format: int64
             * @description ID of the membership that this status change record is associated with
             */
            membershipId: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.InvoiceTemplateResponse": {
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
            data: components["schemas"]["Memberships.V2.InvoiceTemplateResponse"][];
        };
        "Memberships.V2.InvoiceTemplateResponse": {
            /**
             * Format: int64
             * @description Invoice template ID
             */
            id: number;
            /** @description Invoice template name (used only for shared invoice templates) */
            name?: string | null;
            /**
             * Format: date-time
             * @description Invoice template creation date
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created invoice template
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description Invoice template modification date
             */
            modifiedOn: string;
            /** @description Whether invoice template is active */
            active: boolean;
            /**
             * Format: decimal
             * @description Invoice template total
             */
            total: number;
            /** @description Whether invoice template is shared (i.e. visible on the Settings page) */
            isSettingsTemplate: boolean;
            /** @description Import ID */
            importId?: string | null;
            /** @description A list of invoice template items */
            items: components["schemas"]["Memberships.V2.InvoiceTemplateItemResponse"][];
        };
        "Memberships.V2.InvoiceTemplateCreateRequest": {
            /** @description Invoice template items */
            items?: components["schemas"]["Memberships.V2.InvoiceTemplateItemCreateRequest"][] | null;
        };
        "Memberships.V2.InvoiceTemplateItemCreateRequest": {
            /**
             * Format: int64
             * @description Linked SKU ID
             */
            skuId: number;
            /**
             * Format: decimal
             * @description Quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Unit price
             */
            unitPrice: number;
            /** @description Whether invoice item is add-on */
            isAddOn: boolean;
            /**
             * Format: int64
             * @description The invoice item ID that created this invoice template item via ModifyMembershipWorkflowAction
             */
            workflowActionItemId?: number | null;
            /**
             * Format: html
             * @description Item description
             */
            description?: string | null;
            /**
             * Format: decimal
             * @description Materials cost
             */
            cost?: number | null;
            /**
             * Format: decimal
             * @description Sold/billable hours
             */
            hours?: number | null;
        };
        "Memberships.V2.InvoiceTemplateUpdateRequest": {
            /** @description Invoice template name (used only for shared invoice templates) */
            name?: string;
            /**
             * Format: date-time
             * @description Invoice template creation date
             */
            createdOn?: string;
            /**
             * Format: int64
             * @description ID of the user that created invoice template
             */
            createdById?: number;
            /** @description Whether invoice template is active */
            active?: boolean;
            /** @description Invoice template items */
            items?: (components["schemas"]["Memberships.V2.InvoiceTemplateItemUpdateRequest"] | null)[];
        };
        "Memberships.V2.InvoiceTemplateItemUpdateRequest": {
            /**
             * Format: int64
             * @description Invoice template item ID
             */
            id?: number | null;
            /**
             * Format: int64
             * @description Linked SKU ID
             */
            skuId: number;
            /**
             * Format: decimal
             * @description Quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Unit price
             */
            unitPrice: number;
            /** @description Whether invoice item is add-on */
            isAddOn: boolean;
            /**
             * Format: html
             * @description Item description
             */
            description?: string | null;
            /**
             * Format: decimal
             * @description Materials cost
             */
            cost?: number | null;
            /**
             * Format: decimal
             * @description Sold/billable hours
             */
            hours?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.LocationRecurringServiceEventResponse": {
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
            data: components["schemas"]["Memberships.V2.LocationRecurringServiceEventResponse"][];
        };
        "Memberships.V2.LocationRecurringServiceEventResponse": {
            /**
             * Format: int64
             * @description Recurring service event ID
             */
            id: number;
            /**
             * Format: int64
             * @description Recurring service ID
             */
            locationRecurringServiceId: number;
            /** @description Recurring service name */
            locationRecurringServiceName?: string | null;
            /**
             * Format: int64
             * @description Membership ID
             */
            membershipId?: number | null;
            /** @description Membership name */
            membershipName?: string | null;
            /** @description Opportunity status */
            status: components["schemas"]["Memberships.V2.OpportunityStatus"];
            /**
             * Format: date-time
             * @description Event date
             */
            date: string;
            /**
             * Format: date-time
             * @description Event creation date
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the job associated with this event
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the user that created this event (could happen as a result of
             *     editing recurring service, selling a new membership, etc.)
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description Event modification date
             */
            modifiedOn: string;
        };
        "OrderByItem_Of_Memberships.V2.DefaultSortingFields": {
            field: components["schemas"]["Memberships.V2.DefaultSortingFields"];
            isDescending: boolean;
        };
        /**
         * @description Common sorting fields, which most of the entities would allow to use
         * @enum {string}
         */
        "Memberships.V2.DefaultSortingFields": "Id" | "CreatedOn" | "ModifiedOn";
        "Memberships.V2.MarkEventCompletedStatusUpdateRequest": {
            /**
             * Format: int64
             * @description The job ID that the event is marked as completed/incompleted on
             */
            jobId: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.LocationRecurringServiceResponse": {
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
            data: components["schemas"]["Memberships.V2.LocationRecurringServiceResponse"][];
        };
        "Memberships.V2.LocationRecurringServiceResponse": {
            /**
             * Format: int64
             * @description Recurring service ID
             */
            id: number;
            /** @description Recurring service name */
            name: string;
            /** @description Whether recurring service is active */
            active: boolean;
            /**
             * Format: date-time
             * @description When recurring service was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this recurring service
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When recurring service was modified
             */
            modifiedOn: string;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: int64
             * @description Customer membership ID
             */
            membershipId?: number | null;
            /**
             * Format: int64
             * @description Location ID
             */
            locationId: number;
            /**
             * Format: int64
             * @description Recurring Service Type ID
             */
            recurringServiceTypeId: number;
            /** @description The recurrence duration type */
            durationType: components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
            /**
             * Format: int32
             * @description The duration length for the given duration type
             */
            durationLength: number;
            /**
             * Format: date-time
             * @description Beginning date of recurring service
             */
            from?: string | null;
            /**
             * Format: date-time
             * @description End date of recurring service
             */
            to?: string | null;
            /** @description Memo */
            memo?: string | null;
            /**
             * Format: int64
             * @description Invoice template ID
             */
            invoiceTemplateId?: number | null;
            /**
             * Format: int64
             * @description Invoice template ID for the 2nd year and following (for ongoing memberships)
             */
            invoiceTemplateForFollowingYearsId?: number | null;
            /** @description Whether first visit is complete */
            firstVisitComplete: boolean;
            /**
             * Format: int64
             * @description ID of the invoice item that is the sale task of this membership
             */
            activatedFromId?: number | null;
            /**
             * Format: decimal
             * @description Recurring service allocation
             */
            allocation: number;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type ID
             */
            jobTypeId?: number | null;
            /**
             * Format: int64
             * @description Campaign ID
             */
            campaignId?: number | null;
            /** @description Recurring service priority */
            priority: components["schemas"]["Memberships.V2.Priority"];
            /** @description Job summary */
            jobSummary?: string | null;
            /** @description The recurrence type (e.g. Daily, Weekly, Monthly, etc.) */
            recurrenceType: components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
            /**
             * Format: int32
             * @description The recurrence interval for the given recurrence type.
             *     Can be 0 when RecurrenceType is Seasonal.
             */
            recurrenceInterval: number;
            /** @description A list of months when the recurring service occurs, if it is a seasonal recurrence type */
            recurrenceMonths: components["schemas"]["Memberships.V2.Month"][];
            /**
             * @description A list specifying which days of the week this recurring service recurs when
             *     RecurrenceType is Weekly
             */
            recurrenceDaysOfWeek: components["schemas"]["Memberships.V2.WeekDay"][];
            /**
             * @description Enum value corresponding to which week of the month this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceDayOfNthWeek.
             */
            recurrenceWeek: components["schemas"]["Memberships.V2.WeekOfMonth"];
            /**
             * @description Enum value corresponding to which day of the week this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceWeek.
             */
            recurrenceDayOfNthWeek?: components["schemas"]["Memberships.V2.WeekDay"] | null;
            /**
             * @description A list of days of the month on which this recurring service recurs when
             *     RecurrenceType is Monthly.
             */
            recurrenceDaysOfMonth: number[];
            /**
             * Format: duration
             * @description Job start time
             */
            jobStartTime?: string | null;
            /**
             * Format: decimal
             * @description Estimated payroll cost
             */
            estimatedPayrollCost?: number | null;
            /**
             * @description A list of technician IDs assigned to this recurring service.
             *     Will be null if was not requested via IncludeTechnicians field.
             */
            preferredTechnicianIds?: number[] | null;
            /** @description A list of tag IDs associated to this recurring service. */
            tagTypeIds: number[];
        };
        "Memberships.V2.LocationRecurringServiceUpdateRequest": {
            /** @description Recurring service name */
            name?: string;
            /** @description Whether recurring service is active */
            active?: boolean;
            /**
             * Format: int64
             * @description Recurring Service Type ID
             */
            recurringServiceTypeId?: number;
            /** @description The recurrence duration type */
            durationType?: components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
            /**
             * Format: int32
             * @description The duration length for the given duration type
             */
            durationLength?: number;
            /**
             * Format: date-time
             * @description Beginning date of recurring service
             */
            from?: string;
            /** @description Memo */
            memo?: string;
            /**
             * Format: int64
             * @description Invoice template ID
             */
            invoiceTemplateId?: number | null;
            /**
             * Format: int64
             * @description Invoice template ID for the 2nd year and following (for ongoing memberships)
             */
            invoiceTemplateForFollowingYearsId?: number | null;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId?: number;
            /**
             * Format: int64
             * @description Job type ID
             */
            jobTypeId?: number;
            /**
             * Format: int64
             * @description Campaign ID
             */
            campaignId?: number;
            /** @description Recurring service priority */
            priority?: components["schemas"]["Memberships.V2.Priority"];
            /** @description Job summary */
            jobSummary?: string;
            /** @description The recurrence type (e.g. Daily, Weekly, Monthly, etc.) */
            recurrenceType?: components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
            /**
             * Format: int32
             * @description The recurrence interval for the given recurrence type.
             *     Can be 0 when RecurrenceType is Seasonal.
             */
            recurrenceInterval?: number;
            /** @description A list of months when the recurring service occurs, if it is a seasonal recurrence type */
            recurrenceMonths?: components["schemas"]["Memberships.V2.Month"][];
            /**
             * @description A list specifying which days of the week this recurring service recurs when
             *     RecurrenceType is Weekly
             */
            recurrenceDaysOfWeek?: components["schemas"]["Memberships.V2.WeekDay"][];
            /**
             * @description Enum value corresponding to which week of the month this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceDayOfNthWeek.
             */
            recurrenceWeek?: components["schemas"]["Memberships.V2.WeekOfMonth"];
            /**
             * @description Enum value corresponding to which day of the week this recurring service recurs when
             *     RecurrenceType is NthWeekdayOfMonth. Used with RecurrenceWeek.
             */
            recurrenceDayOfNthWeek?: components["schemas"]["Memberships.V2.WeekDay"] | null;
            /**
             * Format: duration
             * @description Job start time
             */
            jobStartTime?: string | null;
            /**
             * Format: decimal
             * @description Estimated payroll cost
             */
            estimatedPayrollCost?: number | null;
            /** @description List specifying IDs of Tag Types associated with this location recurring service */
            tagTypeIds?: number[];
            /** @description List specifying IDs of preferred technicians for this location recurring service */
            preferredTechnicianIds?: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.MembershipTypeResponse": {
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
            data: components["schemas"]["Memberships.V2.MembershipTypeResponse"][];
        };
        "Memberships.V2.MembershipTypeResponse": {
            /** @description Membership type name */
            name: string;
            /** @description Membership type display name. This is used in the Customer Portal and will be null if not set through the Membership Wizard. */
            displayName?: string | null;
            /** @description Whether membership type is active */
            active: boolean;
            /** @description Membership discount mode */
            discountMode: components["schemas"]["Memberships.V2.DiscountMode"];
            /** @description Membership location target */
            locationTarget: components["schemas"]["Memberships.V2.MembershipLocationTarget"];
            /** @description Membership revenue recognition mode */
            revenueRecognitionMode: components["schemas"]["Memberships.V2.RevenueRecognitionMode"];
            /** @description Whether invoice templates should be auto-calculated */
            autoCalculateInvoiceTemplates: boolean;
            /** @description Whether membership pricing table should be used */
            useMembershipPricingTable: boolean;
            /** @description Whether membership savings should be displayed */
            showMembershipSavings: boolean;
            /**
             * Format: int64
             * @description Membership type ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When membership type was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this membership type
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When membership type was modified
             */
            modifiedOn: string;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: int64
             * @description Billing template ID
             */
            billingTemplateId?: number | null;
            /**
             * Format: decimal
             * @description Membership type discount percentage (0 to 100). This is relevant only when the DiscountMode is `Basic`.
             */
            discount: number;
            /**
             * @description Membership type duration billing options.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeDurationBilling` flag.
             */
            durationBilling?: components["schemas"]["Memberships.V2.MembershipTypeDurationBillingEntry"][] | null;
            /**
             * @description Membership type discounts. This includes a list containing the target of a discount (either a business unit ID or a pricebook
             *     category ID) as well as the percentage discount (0 to 100). Note that this list is relevant only when the
             *     DiscountMode is set to `Categories` or `BusinessUnits`.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeDiscounts` flag.
             */
            discounts?: components["schemas"]["Memberships.V2.MembershipTypeDiscountEntry"][] | null;
            /**
             * @description Membership type recurring service items associated with this membership type. Each item includes the recurring service type ID,
             *     offset, offset type, and allocation percentage.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeRecurringServices` flag.
             */
            recurringServices?: components["schemas"]["Memberships.V2.MembershipTypeRecurringServiceEntry"][] | null;
            /**
             * @description Tag type IDs associated with this membership type.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeTagTypeIds` flag.
             */
            tagTypeIds?: number[] | null;
        };
        "Memberships.V2.MembershipTypeRecurringServiceItemResponse": {
            /**
             * Format: int64
             * @description Membership type ID associated with the item
             */
            membershipTypeId: number;
            /**
             * Format: int64
             * @description Recurring service type ID associated with the item
             */
            recurringServiceTypeId: number;
            /**
             * Format: int32
             * @description Number of weeks or months (depending on offset type) between membership start and recurring service start
             */
            offset: number;
            /** @description Offset type of the recurring service type associated with this item, can be weeks (0) or months (1) */
            offsetType: components["schemas"]["Memberships.V2.OffsetType"];
            /**
             * Format: decimal
             * @description The percentage of deferred revenue allocated to the recurring service item
             */
            allocation: number;
            /**
             * Format: int64
             * @description ID of the recurring service item
             */
            id: number;
            /** @description Import ID */
            importId?: string | null;
            /**
             * Format: date-time
             * @description When recurring service item was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this recurring service item
             */
            createdById?: number | null;
        };
        "Memberships.V2.MembershipTypeDiscountItemResponse": {
            /**
             * Format: int64
             * @description ID of the discount's target, which can be either a business unit or pricebook category
             */
            targetId: number;
            /**
             * Format: decimal
             * @description Percentage discount (0 to 100)
             */
            discount: number;
            /**
             * Format: int64
             * @description ID of the discount item
             */
            id: number;
            /**
             * Format: date-time
             * @description When discount item was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this discount item
             */
            createdById?: number | null;
        };
        "Memberships.V2.MembershipTypeDurationBillingItemResponse": {
            /**
             * Format: int32
             * @description Duration of the entry
             */
            duration?: number | null;
            /** @description Billing frequency of the entry */
            billingFrequency: components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
            /**
             * Format: decimal
             * @description Sale price of the entry
             */
            salePrice: number;
            /**
             * Format: decimal
             * @description Billing price of the entry
             */
            billingPrice: number;
            /**
             * Format: decimal
             * @description Renewal price of the entry
             */
            renewalPrice: number;
            /**
             * Format: int64
             * @description ID of the duration/billing option
             */
            id: number;
            /** @description Import ID of the entry */
            importId?: string | null;
            /** @description Whether the duration/billing option is active */
            active: boolean;
            /**
             * Format: date-time
             * @description When duration/billing option was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this duration/billing option
             */
            createdById?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Memberships.V2.RecurringServiceTypeResponse": {
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
            data: components["schemas"]["Memberships.V2.RecurringServiceTypeResponse"][];
        };
        "Memberships.V2.RecurringServiceTypeResponse": {
            /**
             * Format: int64
             * @description Recurring service type ID
             */
            id: number;
            /**
             * Format: date-time
             * @description When recurring service type was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this recurring service type
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When recurring service type was modified
             */
            modifiedOn: string;
            /** @description Whether recurring service type is active */
            active: boolean;
            /** @description The recurrence type (e.g. Daily, Weekly, Monthly) */
            recurrenceType: components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
            /**
             * Format: int32
             * @description The recurrence interval for the given recurrence type
             */
            recurrenceInterval: number;
            /** @description A list of months when the recurring service occurs, if it is a seasonal recurrence type */
            recurrenceMonths: components["schemas"]["Memberships.V2.Month"][];
            /** @description The recurrence duration type */
            durationType: components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
            /**
             * Format: int32
             * @description The recurrence duration length (number of events)
             */
            durationLength: number;
            /**
             * Format: int64
             * @description Invoice template ID
             */
            invoiceTemplateId?: number | null;
            /**
             * Format: int64
             * @description Business unit ID
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Job type ID
             */
            jobTypeId?: number | null;
            /** @description Priority */
            priority: components["schemas"]["Memberships.V2.Priority"];
            /**
             * Format: int64
             * @description Campaign ID
             */
            campaignId?: number | null;
            /** @description Job summary */
            jobSummary?: string | null;
            /** @description Recurring service type name */
            name?: string | null;
            /** @description Import ID */
            importId?: string | null;
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
    CustomerMemberships_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by customer IDs */
                customerIds?: string;
                /**
                 * @description Filters by membership status\
                 *     Values: [Active, Suspended, Expired, Canceled, Deleted]
                 */
                status?: string & components["schemas"]["Memberships.V2.MembershipStatus"];
                /** @description Filters by membership duration (in months); use null for ongoing memberships */
                duration?: number;
                /**
                 * @description Filters by membership billing frequency\
                 *     Values: [OneTime, Monthly, EveryOtherMonth, Quarterly, BiAnnual, Annual]
                 */
                billingFrequency?: string & components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                /** @description Applies sorting by specified fields */
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "followUpOn": "string",
                     *           "cancellationDate": "string",
                     *           "from": "string",
                     *           "nextScheduledBillDate": "string",
                     *           "to": "string",
                     *           "billingFrequency": {},
                     *           "renewalBillingFrequency": {},
                     *           "status": {},
                     *           "followUpStatus": {},
                     *           "active": true,
                     *           "initialDeferredRevenue": 0,
                     *           "duration": 0,
                     *           "renewalDuration": 0,
                     *           "businessUnitId": 0,
                     *           "customerId": 0,
                     *           "membershipTypeId": 0,
                     *           "activatedById": 0,
                     *           "activatedFromId": 0,
                     *           "billingTemplateId": 0,
                     *           "cancellationBalanceInvoiceId": 0,
                     *           "cancellationInvoiceId": 0,
                     *           "followUpCustomStatusId": 0,
                     *           "locationId": 0,
                     *           "paymentMethodId": 0,
                     *           "paymentTypeId": 0,
                     *           "recurringLocationId": 0,
                     *           "renewalMembershipTaskId": 0,
                     *           "renewedById": 0,
                     *           "soldById": 0,
                     *           "customerPo": "string",
                     *           "importId": "string",
                     *           "memo": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.CustomerMembershipResponse"];
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
    CustomerMemberships_GetCustomFields: {
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
                /** @description Applies sorting by specified fields */
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
                     *           "dataType": {},
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.CustomFieldTypeResponse"];
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
    CustomerMemberships_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer membership ID */
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
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "followUpOn": "string",
                     *       "cancellationDate": "string",
                     *       "from": "string",
                     *       "nextScheduledBillDate": "string",
                     *       "to": "string",
                     *       "billingFrequency": {},
                     *       "renewalBillingFrequency": {},
                     *       "status": {},
                     *       "followUpStatus": {},
                     *       "active": true,
                     *       "initialDeferredRevenue": 0,
                     *       "duration": 0,
                     *       "renewalDuration": 0,
                     *       "businessUnitId": 0,
                     *       "customerId": 0,
                     *       "membershipTypeId": 0,
                     *       "activatedById": 0,
                     *       "activatedFromId": 0,
                     *       "billingTemplateId": 0,
                     *       "cancellationBalanceInvoiceId": 0,
                     *       "cancellationInvoiceId": 0,
                     *       "followUpCustomStatusId": 0,
                     *       "locationId": 0,
                     *       "paymentMethodId": 0,
                     *       "paymentTypeId": 0,
                     *       "recurringLocationId": 0,
                     *       "renewalMembershipTaskId": 0,
                     *       "renewedById": 0,
                     *       "soldById": 0,
                     *       "customerPo": "string",
                     *       "importId": "string",
                     *       "memo": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.CustomerMembershipResponse"];
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
            /** @description Customer membership not found */
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
    CustomerMemberships_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer membership ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Customer membership update request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "businessUnitId": 0,
                 *       "nextScheduledBillDate": "string",
                 *       "status": {},
                 *       "memo": "string",
                 *       "from": "string",
                 *       "to": "string",
                 *       "soldById": 0,
                 *       "billingTemplateId": 0,
                 *       "locationId": 0,
                 *       "recurringServiceAction": {},
                 *       "recurringLocationId": 0,
                 *       "paymentMethodId": 0,
                 *       "paymentTypeId": 0,
                 *       "renewalMembershipTaskId": 0,
                 *       "initialDeferredRevenue": 0,
                 *       "cancellationBalanceInvoiceId": 0,
                 *       "cancellationInvoiceId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.CustomerMembershipUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
            /** @description Customer membership not found */
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
    CustomerMemberships_GetStatusChanges: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer membership ID */
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
                     * @example [
                     *       {
                     *         "id": 0,
                     *         "oldStatus": {},
                     *         "newStatus": {},
                     *         "note": "string",
                     *         "createdOn": "string",
                     *         "createdById": 0
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Memberships.V2.CustomerMembershipStatusChangeItemResponse"][];
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
            /** @description Customer membership not found */
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
    CustomerMemberships_Create: {
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
                 *       "businessUnitId": 0,
                 *       "saleTaskId": 0,
                 *       "durationBillingId": 0,
                 *       "locationId": 0,
                 *       "recurringServiceAction": {},
                 *       "recurringLocationId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.MembershipSaleInvoiceCreateRequest"];
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
                     *       "invoiceId": 0,
                     *       "customerMembershipId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.MembershipSaleInvoiceCreateResponse"];
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
    Export_MembershipTypes: {
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "importId": "string",
                     *           "billingTemplateId": 0,
                     *           "discount": 0,
                     *           "durationBilling": [
                     *             {
                     *               "duration": 0,
                     *               "billingFrequency": {},
                     *               "salePrice": 0,
                     *               "billingPrice": 0,
                     *               "renewalPrice": 0
                     *             }
                     *           ],
                     *           "discounts": [
                     *             {
                     *               "targetId": 0,
                     *               "discount": 0
                     *             }
                     *           ],
                     *           "recurringServices": [
                     *             {
                     *               "membershipTypeId": 0,
                     *               "recurringServiceTypeId": 0,
                     *               "offset": 0,
                     *               "offsetType": {},
                     *               "allocation": 0
                     *             }
                     *           ],
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "name": "string",
                     *           "displayName": "string",
                     *           "active": true,
                     *           "discountMode": {},
                     *           "locationTarget": {},
                     *           "revenueRecognitionMode": {},
                     *           "autoCalculateInvoiceTemplates": true,
                     *           "useMembershipPricingTable": true,
                     *           "showMembershipSavings": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportMembershipTypeResponse"];
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
    Export_RecurringServiceTypes: {
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "recurrenceType": {},
                     *           "recurrenceInterval": 0,
                     *           "recurrenceMonths": [
                     *             "January"
                     *           ],
                     *           "durationType": {},
                     *           "durationLength": 0,
                     *           "invoiceTemplateId": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "priority": {},
                     *           "campaignId": 0,
                     *           "jobSummary": "string",
                     *           "name": "string",
                     *           "importId": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportRecurringServiceTypeResponse"];
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
    Export_Memberships: {
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "followUpOn": "string",
                     *           "cancellationDate": "string",
                     *           "from": "string",
                     *           "nextScheduledBillDate": "string",
                     *           "to": "string",
                     *           "billingFrequency": {},
                     *           "renewalBillingFrequency": {},
                     *           "status": {},
                     *           "followUpStatus": {},
                     *           "active": true,
                     *           "initialDeferredRevenue": 0,
                     *           "duration": 0,
                     *           "renewalDuration": 0,
                     *           "businessUnitId": 0,
                     *           "customerId": 0,
                     *           "membershipTypeId": 0,
                     *           "activatedById": 0,
                     *           "activatedFromId": 0,
                     *           "billingTemplateId": 0,
                     *           "cancellationBalanceInvoiceId": 0,
                     *           "cancellationInvoiceId": 0,
                     *           "followUpCustomStatusId": 0,
                     *           "locationId": 0,
                     *           "paymentMethodId": 0,
                     *           "paymentTypeId": 0,
                     *           "recurringLocationId": 0,
                     *           "renewalMembershipTaskId": 0,
                     *           "renewedById": 0,
                     *           "soldById": 0,
                     *           "customerPo": "string",
                     *           "importId": "string",
                     *           "memo": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportCustomerMembershipResponse"];
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
    Export_InvoiceTemplates: {
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
                     *           "name": "string",
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "total": 0,
                     *           "isSettingsTemplate": true,
                     *           "importId": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "skuType": {},
                     *               "quantity": 0,
                     *               "unitPrice": 0,
                     *               "isAddOn": true,
                     *               "importId": "string",
                     *               "workflowActionItemId": 0,
                     *               "description": "string",
                     *               "cost": 0,
                     *               "hours": 0
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportInvoiceTemplateResponse"];
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
    Export_LocationRecurringServices: {
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
                     *           "name": "string",
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "importId": "string",
                     *           "membershipId": 0,
                     *           "locationId": 0,
                     *           "recurringServiceTypeId": 0,
                     *           "durationType": {},
                     *           "durationLength": 0,
                     *           "from": "string",
                     *           "to": "string",
                     *           "memo": "string",
                     *           "invoiceTemplateId": 0,
                     *           "invoiceTemplateForFollowingYearsId": 0,
                     *           "firstVisitComplete": true,
                     *           "activatedFromId": 0,
                     *           "allocation": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "campaignId": 0,
                     *           "priority": {},
                     *           "jobSummary": "string",
                     *           "recurrenceType": {},
                     *           "recurrenceInterval": 0,
                     *           "recurrenceMonths": [
                     *             "January"
                     *           ],
                     *           "recurrenceDaysOfWeek": [
                     *             "Sunday"
                     *           ],
                     *           "recurrenceWeek": {},
                     *           "recurrenceDayOfNthWeek": {},
                     *           "recurrenceDaysOfMonth": [
                     *             0
                     *           ],
                     *           "jobStartTime": "string",
                     *           "estimatedPayrollCost": 0,
                     *           "preferredTechnicianIds": [
                     *             0
                     *           ],
                     *           "tagTypeIds": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportLocationRecurringServiceResponse"];
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
    Export_LocationRecurringServiceEvents: {
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
                     *           "locationRecurringServiceId": 0,
                     *           "locationRecurringServiceName": "string",
                     *           "membershipId": 0,
                     *           "membershipName": "string",
                     *           "status": {},
                     *           "date": "string",
                     *           "createdOn": "string",
                     *           "jobId": 0,
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportLocationRecurringServiceEventResponse"];
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
    Export_MembershipStatusChanges: {
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
                     *           "oldStatus": {},
                     *           "newStatus": {},
                     *           "note": "string",
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "membershipId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Memberships.V2.ExportCustomerMembershipStatusChangesResponse"];
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
    InvoiceTemplates_GetList: {
        parameters: {
            query: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids: string;
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "total": 0,
                     *           "isSettingsTemplate": true,
                     *           "importId": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "skuType": {},
                     *               "quantity": 0,
                     *               "unitPrice": 0,
                     *               "isAddOn": true,
                     *               "importId": "string",
                     *               "workflowActionItemId": 0,
                     *               "description": "string",
                     *               "cost": 0,
                     *               "hours": 0
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.InvoiceTemplateResponse"];
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
    InvoiceTemplates_Create: {
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
                 *       "items": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "isAddOn": true,
                 *           "workflowActionItemId": 0,
                 *           "description": "string",
                 *           "cost": 0,
                 *           "hours": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.InvoiceTemplateCreateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
    InvoiceTemplates_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Invoice template ID */
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
                     *       "name": "string",
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "active": true,
                     *       "total": 0,
                     *       "isSettingsTemplate": true,
                     *       "importId": "string",
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "skuType": {},
                     *           "quantity": 0,
                     *           "unitPrice": 0,
                     *           "isAddOn": true,
                     *           "importId": "string",
                     *           "workflowActionItemId": 0,
                     *           "description": "string",
                     *           "cost": 0,
                     *           "hours": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.InvoiceTemplateResponse"];
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
            /** @description Invoice template not found */
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
    InvoiceTemplates_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Invoice template ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Invoice template update request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "createdOn": "string",
                 *       "createdById": 0,
                 *       "active": true,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "isAddOn": true,
                 *           "description": "string",
                 *           "cost": 0,
                 *           "hours": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.InvoiceTemplateUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
            /** @description Invoice template not found */
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
    LocationRecurringServiceEvents_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Location ID */
                locationId?: number;
                /** @description Job ID */
                jobId?: number;
                /**
                 * @description Follow up status \
                 *     Values: [NotAttempted, Unreachable, Contacted, Won, Dismissed]
                 */
                status?: string & components["schemas"]["Memberships.V2.OpportunityStatus"];
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
                sort?: components["schemas"]["OrderByItem_Of_Memberships.V2.DefaultSortingFields"][];
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
                     *           "locationRecurringServiceId": 0,
                     *           "locationRecurringServiceName": "string",
                     *           "membershipId": 0,
                     *           "membershipName": "string",
                     *           "status": {},
                     *           "date": "string",
                     *           "createdOn": "string",
                     *           "jobId": 0,
                     *           "createdById": 0,
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.LocationRecurringServiceEventResponse"];
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
    LocationRecurringServiceEvents_MarkComplete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Recurring service event ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Recurring service event status update request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "jobId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.MarkEventCompletedStatusUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
            /** @description Recurring service event not found */
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
    LocationRecurringServiceEvents_MarkIncomplete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Recurring service event ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Recurring service event status update request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "jobId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.MarkEventCompletedStatusUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
            /** @description Recurring service event not found */
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
    LocationRecurringServices_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by customer membership IDs */
                membershipIds?: string;
                /** @description Filters by location IDs */
                locationIds?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Whether technician IDs should be included in the result. */
                includeTechnicians?: boolean;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Applies sorting by specified fields */
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
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "importId": "string",
                     *           "membershipId": 0,
                     *           "locationId": 0,
                     *           "recurringServiceTypeId": 0,
                     *           "durationType": {},
                     *           "durationLength": 0,
                     *           "from": "string",
                     *           "to": "string",
                     *           "memo": "string",
                     *           "invoiceTemplateId": 0,
                     *           "invoiceTemplateForFollowingYearsId": 0,
                     *           "firstVisitComplete": true,
                     *           "activatedFromId": 0,
                     *           "allocation": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "campaignId": 0,
                     *           "priority": {},
                     *           "jobSummary": "string",
                     *           "recurrenceType": {},
                     *           "recurrenceInterval": 0,
                     *           "recurrenceMonths": [
                     *             "January"
                     *           ],
                     *           "recurrenceDaysOfWeek": [
                     *             "Sunday"
                     *           ],
                     *           "recurrenceWeek": {},
                     *           "recurrenceDayOfNthWeek": {},
                     *           "recurrenceDaysOfMonth": [
                     *             0
                     *           ],
                     *           "jobStartTime": "string",
                     *           "estimatedPayrollCost": 0,
                     *           "preferredTechnicianIds": [
                     *             0
                     *           ],
                     *           "tagTypeIds": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.LocationRecurringServiceResponse"];
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
    LocationRecurringServices_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Recurring service ID */
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
                     *       "name": "string",
                     *       "active": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "importId": "string",
                     *       "membershipId": 0,
                     *       "locationId": 0,
                     *       "recurringServiceTypeId": 0,
                     *       "durationType": {},
                     *       "durationLength": 0,
                     *       "from": "string",
                     *       "to": "string",
                     *       "memo": "string",
                     *       "invoiceTemplateId": 0,
                     *       "invoiceTemplateForFollowingYearsId": 0,
                     *       "firstVisitComplete": true,
                     *       "activatedFromId": 0,
                     *       "allocation": 0,
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "campaignId": 0,
                     *       "priority": {},
                     *       "jobSummary": "string",
                     *       "recurrenceType": {},
                     *       "recurrenceInterval": 0,
                     *       "recurrenceMonths": [
                     *         "January"
                     *       ],
                     *       "recurrenceDaysOfWeek": [
                     *         "Sunday"
                     *       ],
                     *       "recurrenceWeek": {},
                     *       "recurrenceDayOfNthWeek": {},
                     *       "recurrenceDaysOfMonth": [
                     *         0
                     *       ],
                     *       "jobStartTime": "string",
                     *       "estimatedPayrollCost": 0,
                     *       "preferredTechnicianIds": [
                     *         0
                     *       ],
                     *       "tagTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.LocationRecurringServiceResponse"];
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
            /** @description Recurring service not found */
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
    LocationRecurringServices_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Recurring service ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Recurring service update request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "active": true,
                 *       "recurringServiceTypeId": 0,
                 *       "durationType": {},
                 *       "durationLength": 0,
                 *       "from": "string",
                 *       "memo": "string",
                 *       "invoiceTemplateId": 0,
                 *       "invoiceTemplateForFollowingYearsId": 0,
                 *       "businessUnitId": 0,
                 *       "jobTypeId": 0,
                 *       "campaignId": 0,
                 *       "priority": {},
                 *       "jobSummary": "string",
                 *       "recurrenceType": {},
                 *       "recurrenceInterval": 0,
                 *       "recurrenceMonths": [
                 *         "January"
                 *       ],
                 *       "recurrenceDaysOfWeek": [
                 *         "Sunday"
                 *       ],
                 *       "recurrenceWeek": {},
                 *       "recurrenceDayOfNthWeek": {},
                 *       "jobStartTime": "string",
                 *       "estimatedPayrollCost": 0,
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "preferredTechnicianIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Memberships.V2.LocationRecurringServiceUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
            /** @description Recurring service not found */
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
    MembershipTypes_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Filters by membership duration (in months); use null for ongoing memberships */
                duration?: number;
                /**
                 * @description Filters by membership billing frequency\
                 *     Values: [OneTime, Monthly, EveryOtherMonth, Quarterly, BiAnnual, Annual]
                 */
                billingFrequency?: string & components["schemas"]["Memberships.V2.MembershipRecurrenceType"];
                /** @description Whether duration/billing should be included in the result */
                includeDurationBilling?: boolean;
                /** @description Whether discounts should be included in the result */
                includeDiscounts?: boolean;
                /** @description Whether recurring service types associated with the membership type should be included in the result */
                includeRecurringServices?: boolean;
                /** @description Whether tag type IDs associated with the membership type should be included in the result */
                includeTags?: boolean;
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
                /** @description Applies sorting by specified fields */
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
                     *           "name": "string",
                     *           "displayName": "string",
                     *           "active": true,
                     *           "discountMode": {},
                     *           "locationTarget": {},
                     *           "revenueRecognitionMode": {},
                     *           "autoCalculateInvoiceTemplates": true,
                     *           "useMembershipPricingTable": true,
                     *           "showMembershipSavings": true,
                     *           "id": 0,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "importId": "string",
                     *           "billingTemplateId": 0,
                     *           "discount": 0,
                     *           "durationBilling": [
                     *             {
                     *               "duration": 0,
                     *               "billingFrequency": {},
                     *               "salePrice": 0,
                     *               "billingPrice": 0,
                     *               "renewalPrice": 0
                     *             }
                     *           ],
                     *           "discounts": [
                     *             {
                     *               "targetId": 0,
                     *               "discount": 0
                     *             }
                     *           ],
                     *           "recurringServices": [
                     *             {
                     *               "membershipTypeId": 0,
                     *               "recurringServiceTypeId": 0,
                     *               "offset": 0,
                     *               "offsetType": {},
                     *               "allocation": 0
                     *             }
                     *           ],
                     *           "tagTypeIds": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.MembershipTypeResponse"];
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
    MembershipTypes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Membership type ID */
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
                     *       "name": "string",
                     *       "displayName": "string",
                     *       "active": true,
                     *       "discountMode": {},
                     *       "locationTarget": {},
                     *       "revenueRecognitionMode": {},
                     *       "autoCalculateInvoiceTemplates": true,
                     *       "useMembershipPricingTable": true,
                     *       "showMembershipSavings": true,
                     *       "id": 0,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "importId": "string",
                     *       "billingTemplateId": 0,
                     *       "discount": 0,
                     *       "durationBilling": [
                     *         {
                     *           "duration": 0,
                     *           "billingFrequency": {},
                     *           "salePrice": 0,
                     *           "billingPrice": 0,
                     *           "renewalPrice": 0
                     *         }
                     *       ],
                     *       "discounts": [
                     *         {
                     *           "targetId": 0,
                     *           "discount": 0
                     *         }
                     *       ],
                     *       "recurringServices": [
                     *         {
                     *           "membershipTypeId": 0,
                     *           "recurringServiceTypeId": 0,
                     *           "offset": 0,
                     *           "offsetType": {},
                     *           "allocation": 0
                     *         }
                     *       ],
                     *       "tagTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.MembershipTypeResponse"];
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
            /** @description Membership type not found */
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
    MembershipTypes_GetRecurringServiceItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Membership type ID */
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
                     * @example [
                     *       {
                     *         "membershipTypeId": 0,
                     *         "recurringServiceTypeId": 0,
                     *         "offset": 0,
                     *         "offsetType": {},
                     *         "allocation": 0,
                     *         "id": 0,
                     *         "importId": "string",
                     *         "createdOn": "string",
                     *         "createdById": 0
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Memberships.V2.MembershipTypeRecurringServiceItemResponse"][];
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
            /** @description Membership type not found */
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
    MembershipTypes_GetDiscountsList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Membership type ID */
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
                     * @example [
                     *       {
                     *         "targetId": 0,
                     *         "discount": 0,
                     *         "id": 0,
                     *         "createdOn": "string",
                     *         "createdById": 0
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Memberships.V2.MembershipTypeDiscountItemResponse"][];
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
            /** @description Membership type not found */
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
    MembershipTypes_GetDurationBillingList: {
        parameters: {
            query?: {
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
            };
            header?: never;
            path: {
                /** @description Membership type ID */
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
                     * @example [
                     *       {
                     *         "duration": 0,
                     *         "billingFrequency": {},
                     *         "salePrice": 0,
                     *         "billingPrice": 0,
                     *         "renewalPrice": 0,
                     *         "id": 0,
                     *         "importId": "string",
                     *         "active": true,
                     *         "createdOn": "string",
                     *         "createdById": 0
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Memberships.V2.MembershipTypeDurationBillingItemResponse"][];
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
            /** @description Membership type not found */
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
    RecurringServiceTypes_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by membership type ID */
                membershipTypeId?: number;
                /**
                 * @description Filters by recurrence type\
                 *     Values: [Weekly, Monthly, Seasonal, Daily, NthWeekdayOfMonth]
                 */
                recurrenceType?: string & components["schemas"]["Memberships.V2.ServiceRecurrenceType"];
                /**
                 * @description Filters by duration type\
                 *     Values: [Continuous, NumberOfVisits]
                 */
                durationType?: string & components["schemas"]["Memberships.V2.ServiceRecurrenceDuration"];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                 *     Available fields are: Id, Name, CreatedOn, ModifiedOn.
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
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "recurrenceType": {},
                     *           "recurrenceInterval": 0,
                     *           "recurrenceMonths": [
                     *             "January"
                     *           ],
                     *           "durationType": {},
                     *           "durationLength": 0,
                     *           "invoiceTemplateId": 0,
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "priority": {},
                     *           "campaignId": 0,
                     *           "jobSummary": "string",
                     *           "name": "string",
                     *           "importId": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Memberships.V2.RecurringServiceTypeResponse"];
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
    RecurringServiceTypes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Recurring service type ID */
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
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "active": true,
                     *       "recurrenceType": {},
                     *       "recurrenceInterval": 0,
                     *       "recurrenceMonths": [
                     *         "January"
                     *       ],
                     *       "durationType": {},
                     *       "durationLength": 0,
                     *       "invoiceTemplateId": 0,
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "priority": {},
                     *       "campaignId": 0,
                     *       "jobSummary": "string",
                     *       "name": "string",
                     *       "importId": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Memberships.V2.RecurringServiceTypeResponse"];
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
            /** @description Recurring service type not found */
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
