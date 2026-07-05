// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/export/service-agreements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for service agreements */
        get: operations["Export_ServiceAgreements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/service-agreements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of service agreements */
        get: operations["ServiceAgreements_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/service-agreements/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets service agreement specified by ID */
        get: operations["ServiceAgreements_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/service-agreements/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of custom field types for service agreements */
        get: operations["ServiceAgreements_GetCustomFields"];
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
        /** @description Represents export API response. */
        "ExportResponse_Of_ServiceAgreements.V2.ExportServiceAgreementResponse": {
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
            data: components["schemas"]["ServiceAgreements.V2.ExportServiceAgreementResponse"][];
        };
        "ServiceAgreements.V2.ExportServiceAgreementResponse": {
            /**
             * Format: int64
             * @description Service agreement ID
             */
            id: number;
            /** @description Service agreement name */
            name: string;
            /**
             * Format: date-time
             * @description When the service agreement was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this agreement
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When the service agreement was last modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description ID of the user that modified this agreement
             */
            modifiedById?: number | null;
            /** @description Data fields that were populated from the template */
            templateFields: components["schemas"]["ServiceAgreements.V2.ServiceAgreementTemplateFieldsResponse"];
            /**
             * Format: int64
             * @description Customer ID of the agreement
             */
            customerId: number;
            /**
             * Format: int64
             * @description Business unit ID to which this agreement is assigned
             */
            businessUnitId: number;
            /** @description Current status of the agreement */
            status: components["schemas"]["ServiceAgreements.V2.AgreementStatus"];
            /** @description Location IDs covered by the agreement */
            locationIds: number[];
            /** @description The method used to create the agreement */
            origin: components["schemas"]["ServiceAgreements.V2.AgreementOrigin"];
            /** @description Optional text summary of the agreement */
            summary?: string | null;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: decimal
             * @description Imported amount already billed for this agreement
             */
            importedDeferredAmount: number;
            /**
             * Format: decimal
             * @description Imported amount of recognized revenue for this agreement
             */
            importedRecognizedAmount: number;
            /**
             * Format: int32
             * @description Duration of the agreement in months (can be absent when the agreement is still being built)
             */
            durationMonths?: number | null;
            /** @description Determines if the agreement automatically renews or expires on its end date */
            autoRenew: boolean;
            /**
             * Format: int64
             * @description Indicates the next agreement ID that renews the current agreement (null means the agreement was not renewed)
             */
            renewalAgreementId?: number | null;
            /**
             * Format: date
             * @description The start date of the agreement (can be absent when the agreement is still being built)
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description The end date of the agreement (can be absent when the agreement is still being built)
             */
            endDate?: string | null;
            /** @description The billing schedule of the agreement (can be absent when the agreement is still being built) */
            billingSchedule?: components["schemas"]["ServiceAgreements.V2.BillingScheduleType"] | null;
            /**
             * Format: int64
             * @description ID of the payment terms of the agreement (can be absent when the agreement is still being built)
             */
            paymentTermId?: number | null;
            /**
             * Format: int64
             * @description ID of the payment method of the agreement (can be absent when the agreement is still being built).
             *     Note there is a special hardcoded value of -1 that means "Cash or Check".
             */
            paymentMethodId?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated travel cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedTravelCost?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated labor cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedLaborCost?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated material cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedMaterialCost?: number | null;
            /**
             * Format: decimal
             * @description The markup percentage applied to labor cost of the agreement (can be absent when the agreement is still being built)
             */
            laborMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The markup percentage applied to material cost of the agreement (can be absent when the agreement is still being built)
             */
            materialMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount added to labor cost of the agreement
             */
            laborSurcharge: number;
            /**
             * Format: decimal
             * @description The dollar amount added to material cost of the agreement
             */
            materialSurcharge: number;
            /**
             * Format: decimal
             * @description The total price of the agreement (can be absent when the agreement is still being built)
             */
            totalAgreementPrice?: number | null;
            /**
             * Format: decimal
             * @description The estimated gross margin in dollars for the agreement (can be absent when the agreement is still being built)
             */
            estimatedGrossMarginAmount?: number | null;
            /**
             * Format: decimal
             * @description The estimated gross margin as a percentage of the Total Agreement Price (can be absent when the agreement is still being built)
             */
            estimatedGrossMarginPercentage?: number | null;
            /**
             * Format: int64
             * @description ID of a rate sheet (Client-Specific Pricing Rule) assigned to the service agreement
             */
            rateSheetId?: number | null;
            /**
             * Format: int64
             * @description ID of the employee assigned to the agreement
             */
            accountManagerId?: number | null;
            /**
             * Format: int64
             * @description ID of the employee or technician that sold this agreement
             */
            soldById?: number | null;
            /**
             * @description Tag type IDs associated with this service agreement.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeTags` flag.
             */
            tagTypeIds?: number[] | null;
            /** @description Custom field values for this service agreement (typeId, name, value) */
            customFields: components["schemas"]["ServiceAgreements.V2.CustomFieldResponse"][];
            /** @description Whether this agreement still exists, or was deleted already. */
            active: boolean;
        };
        "ServiceAgreements.V2.ServiceAgreementTemplateFieldsResponse": {
            /**
             * Format: int64
             * @description ID of the template originally used to create this service agreement.
             *     Note that the content of the original template may have changed since the agreement's creation.
             *     The template fields in this object represent the current state of the service agreement, as they were captured at the time of creation.
             */
            originalTemplateId: number;
            /** @description Revenue recognition mode to be used for a new service agreement */
            revenueRecognitionMode: components["schemas"]["ServiceAgreements.V2.RevenueRecognitionMode"];
            /**
             * Format: int64
             * @description General ledger account that will hold funds until recognition
             *     (this is only used for the Deferred revenue recognition)
             */
            generalLedgerAccountId?: number | null;
            /**
             * @description How to resolve the difference with the customer when service agreement is cancelled
             *     (this is only used for the Deferred revenue recognition)
             */
            invoiceCancellationMode?: components["schemas"]["ServiceAgreements.V2.CancellationInvoiceMode"] | null;
            /**
             * Format: int64
             * @description Used for both revenue recognition modes:
             *     when Immediate, the service will be displayed in customer-facing invoices;
             *     when Deferred, the service is tied to the general ledger account chosen for this agreement.
             */
            billingServiceId: number;
            /** @description Defines when the customer is billed for the service agreement. */
            billingScheduleType?: components["schemas"]["ServiceAgreements.V2.BillingScheduleType"] | null;
            /**
             * Format: int64
             * @description Negative liability services draw money from liability account when services are delivered
             *     (this is only used for the Deferred revenue recognition)
             */
            negativeLiabilityServiceId?: number | null;
            /**
             * Format: int64
             * @description Positive income services transfer money into the income account when services are delivered
             *     (this is only used for the Deferred revenue recognition)
             */
            positiveIncomeServiceId?: number | null;
            /**
             * Format: decimal
             * @description The default labor cost / hour to be used in the UI when adding service agreement visits
             */
            defaultLaborCostPerHour?: number | null;
            /**
             * Format: decimal
             * @description The default extra travel cost / hour to be used in the UI when adding service agreement locations
             */
            defaultExtraTravelCostPerHour?: number | null;
            /** @description The default pricing strategy to be used when creating a service agreement. */
            defaultPricingStrategy?: components["schemas"]["ServiceAgreements.V2.PricingStrategyType"] | null;
            /**
             * Format: decimal
             * @description The default target margin value used in gross margin target strategies when creating a service agreement.
             */
            defaultTargetMarginValue?: number | null;
            /** @description The default target margin value type used in gross margin target strategies when creating a service agreement. */
            defaultTargetMarginValueType?: components["schemas"]["ServiceAgreements.V2.TargetMarginValueType"] | null;
            /**
             * Format: decimal
             * @description The default price used in flat pricing strategies when creating a service agreement.
             */
            defaultFlatPrice?: number | null;
            /**
             * Format: decimal
             * @description The default percentage value used in markup and surcharge strategies when creating a service agreement
             */
            defaultMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The default surcharge amount used in markup and surcharge strategies when creating a service agreement
             */
            defaultSurcharge?: number | null;
            /**
             * Format: decimal
             * @description The default percentage value of the labor markup to be used in the UI when creating a service agreement
             */
            defaultLaborMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The default percentage value of the material markup to be used in the UI when creating a service agreement
             */
            defaultMaterialMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The default labor surcharge amount to be used in the UI when creating a service agreement
             */
            defaultLaborSurcharge?: number | null;
            /**
             * Format: decimal
             * @description The default material surcharge amount to be used in the UI when creating a service agreement
             */
            defaultMaterialSurcharge?: number | null;
            /**
             * Format: int64
             * @description The default rate sheet ID (Client-Specific Pricing Rule) to be used in the UI when creating a service agreement
             */
            defaultRateSheetId?: number | null;
            /**
             * Format: int64
             * @description The ID of the marketing campaign to be used by default when booking jobs for service agreement visits
             */
            defaultCampaignId?: number | null;
            /**
             * Format: int64
             * @description The ID of the document template to be used by default when creating service agreements
             */
            defaultDocumentTemplateId?: number | null;
            /** @description The default auto-renew setting when creating a service agreement */
            defaultAutoRenew?: boolean | null;
        };
        /** @enum {string} */
        "ServiceAgreements.V2.RevenueRecognitionMode": "Immediate" | "Deferred" | "DeferredStraightLine";
        /** @enum {string} */
        "ServiceAgreements.V2.CancellationInvoiceMode": "AskToCreateInvoice" | "AlwaysCreateInvoice" | "NeverCreateInvoice";
        /** @enum {string} */
        "ServiceAgreements.V2.BillingScheduleType": "Upfront" | "Monthly" | "EveryOtherMonth" | "Quarterly" | "Biannual" | "Annual" | "TimeOfService" | "Custom";
        /** @enum {string} */
        "ServiceAgreements.V2.PricingStrategyType": "PerVisitCostBasedGrossMarginTarget" | "PerVisitCostBasedMarkupAndSurcharge" | "PerVisitFlatPrice" | "PerVisitEvenDistributionGrossMarginTarget" | "TotalAgreementGrossMarginTarget" | "TotalAgreementFlatPrice" | "TotalAgreementMarkupAndSurcharge";
        /** @enum {string} */
        "ServiceAgreements.V2.TargetMarginValueType": "PercentageMargin" | "DollarAmount";
        /** @enum {string} */
        "ServiceAgreements.V2.AgreementStatus": "Draft" | "Sent" | "Rejected" | "Accepted" | "Activated" | "Canceled" | "Expired" | "AutoRenew";
        /** @enum {string} */
        "ServiceAgreements.V2.AgreementOrigin": "Initial" | "AutoRenew" | "ManualRenew";
        "ServiceAgreements.V2.CustomFieldResponse": {
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
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_ServiceAgreements.V2.ServiceAgreementResponse": {
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
            data: components["schemas"]["ServiceAgreements.V2.ServiceAgreementResponse"][];
        };
        "ServiceAgreements.V2.ServiceAgreementResponse": {
            /**
             * Format: int64
             * @description Service agreement ID
             */
            id: number;
            /** @description Service agreement name */
            name: string;
            /**
             * Format: date-time
             * @description When the service agreement was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user that created this agreement
             */
            createdById?: number | null;
            /**
             * Format: date-time
             * @description When the service agreement was last modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description ID of the user that modified this agreement
             */
            modifiedById?: number | null;
            /** @description Data fields that were populated from the template */
            templateFields: components["schemas"]["ServiceAgreements.V2.ServiceAgreementTemplateFieldsResponse"];
            /**
             * Format: int64
             * @description Customer ID of the agreement
             */
            customerId: number;
            /**
             * Format: int64
             * @description Business unit ID to which this agreement is assigned
             */
            businessUnitId: number;
            /** @description Current status of the agreement */
            status: components["schemas"]["ServiceAgreements.V2.AgreementStatus"];
            /** @description Location IDs covered by the agreement */
            locationIds: number[];
            /** @description The method used to create the agreement */
            origin: components["schemas"]["ServiceAgreements.V2.AgreementOrigin"];
            /** @description Optional text summary of the agreement */
            summary?: string | null;
            /** @description Internal import ID label */
            importId?: string | null;
            /**
             * Format: decimal
             * @description Imported amount already billed for this agreement
             */
            importedDeferredAmount: number;
            /**
             * Format: decimal
             * @description Imported amount of recognized revenue for this agreement
             */
            importedRecognizedAmount: number;
            /**
             * Format: int32
             * @description Duration of the agreement in months (can be absent when the agreement is still being built)
             */
            durationMonths?: number | null;
            /** @description Determines if the agreement automatically renews or expires on its end date */
            autoRenew: boolean;
            /**
             * Format: int64
             * @description Indicates the next agreement ID that renews the current agreement (null means the agreement was not renewed)
             */
            renewalAgreementId?: number | null;
            /**
             * Format: date
             * @description The start date of the agreement (can be absent when the agreement is still being built)
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description The end date of the agreement (can be absent when the agreement is still being built)
             */
            endDate?: string | null;
            /** @description The billing schedule of the agreement (can be absent when the agreement is still being built) */
            billingSchedule?: components["schemas"]["ServiceAgreements.V2.BillingScheduleType"] | null;
            /**
             * Format: int64
             * @description ID of the payment terms of the agreement (can be absent when the agreement is still being built)
             */
            paymentTermId?: number | null;
            /**
             * Format: int64
             * @description ID of the payment method of the agreement (can be absent when the agreement is still being built).
             *     Note there is a special hardcoded value of -1 that means "Cash or Check".
             */
            paymentMethodId?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated travel cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedTravelCost?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated labor cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedLaborCost?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount of estimated material cost for all visits (can be absent when the agreement is still being built)
             */
            estimatedMaterialCost?: number | null;
            /**
             * Format: decimal
             * @description The markup percentage applied to labor cost of the agreement (can be absent when the agreement is still being built)
             */
            laborMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The markup percentage applied to material cost of the agreement (can be absent when the agreement is still being built)
             */
            materialMarkupPercentage?: number | null;
            /**
             * Format: decimal
             * @description The dollar amount added to labor cost of the agreement
             */
            laborSurcharge: number;
            /**
             * Format: decimal
             * @description The dollar amount added to material cost of the agreement
             */
            materialSurcharge: number;
            /**
             * Format: decimal
             * @description The total price of the agreement (can be absent when the agreement is still being built)
             */
            totalAgreementPrice?: number | null;
            /**
             * Format: decimal
             * @description The estimated gross margin in dollars for the agreement (can be absent when the agreement is still being built)
             */
            estimatedGrossMarginAmount?: number | null;
            /**
             * Format: decimal
             * @description The estimated gross margin as a percentage of the Total Agreement Price (can be absent when the agreement is still being built)
             */
            estimatedGrossMarginPercentage?: number | null;
            /**
             * Format: int64
             * @description ID of a rate sheet (Client-Specific Pricing Rule) assigned to the service agreement
             */
            rateSheetId?: number | null;
            /**
             * Format: int64
             * @description ID of the employee assigned to the agreement
             */
            accountManagerId?: number | null;
            /**
             * Format: int64
             * @description ID of the employee or technician that sold this agreement
             */
            soldById?: number | null;
            /**
             * @description Tag type IDs associated with this service agreement.
             *     If this field is null, it means it was not requested to be loaded via the `IncludeTags` flag.
             */
            tagTypeIds?: number[] | null;
            /** @description Custom field values for this service agreement (typeId, name, value) */
            customFields: components["schemas"]["ServiceAgreements.V2.CustomFieldResponse"][];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_ServiceAgreements.V2.CustomFieldTypeResponse": {
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
            data: components["schemas"]["ServiceAgreements.V2.CustomFieldTypeResponse"][];
        };
        "ServiceAgreements.V2.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description The ID of the custom field.
             */
            id: number;
            /** @description The name of the custom field. */
            name: string;
            /** @description Indicates the data type of the custom field. */
            dataType: components["schemas"]["ServiceAgreements.V2.CustomFieldDataType"];
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
        "ServiceAgreements.V2.CustomFieldDataType": "Text" | "Dropdown" | "Numeric";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Export_ServiceAgreements: {
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
                     *           "modifiedById": 0,
                     *           "templateFields": {
                     *             "originalTemplateId": 0,
                     *             "revenueRecognitionMode": {},
                     *             "generalLedgerAccountId": 0,
                     *             "invoiceCancellationMode": {},
                     *             "billingServiceId": 0,
                     *             "billingScheduleType": {},
                     *             "negativeLiabilityServiceId": 0,
                     *             "positiveIncomeServiceId": 0,
                     *             "defaultLaborCostPerHour": 0,
                     *             "defaultExtraTravelCostPerHour": 0,
                     *             "defaultPricingStrategy": {},
                     *             "defaultTargetMarginValue": 0,
                     *             "defaultTargetMarginValueType": {},
                     *             "defaultFlatPrice": 0,
                     *             "defaultMarkupPercentage": 0,
                     *             "defaultSurcharge": 0,
                     *             "defaultLaborMarkupPercentage": 0,
                     *             "defaultMaterialMarkupPercentage": 0,
                     *             "defaultLaborSurcharge": 0,
                     *             "defaultMaterialSurcharge": 0,
                     *             "defaultRateSheetId": 0,
                     *             "defaultCampaignId": 0,
                     *             "defaultDocumentTemplateId": 0,
                     *             "defaultAutoRenew": true
                     *           },
                     *           "customerId": 0,
                     *           "businessUnitId": 0,
                     *           "status": {},
                     *           "locationIds": [
                     *             0
                     *           ],
                     *           "origin": {},
                     *           "summary": "string",
                     *           "importId": "string",
                     *           "importedDeferredAmount": 0,
                     *           "importedRecognizedAmount": 0,
                     *           "durationMonths": 0,
                     *           "autoRenew": true,
                     *           "renewalAgreementId": 0,
                     *           "startDate": "string",
                     *           "endDate": "string",
                     *           "billingSchedule": {},
                     *           "paymentTermId": 0,
                     *           "paymentMethodId": 0,
                     *           "estimatedTravelCost": 0,
                     *           "estimatedLaborCost": 0,
                     *           "estimatedMaterialCost": 0,
                     *           "laborMarkupPercentage": 0,
                     *           "materialMarkupPercentage": 0,
                     *           "laborSurcharge": 0,
                     *           "materialSurcharge": 0,
                     *           "totalAgreementPrice": 0,
                     *           "estimatedGrossMarginAmount": 0,
                     *           "estimatedGrossMarginPercentage": 0,
                     *           "rateSheetId": 0,
                     *           "accountManagerId": 0,
                     *           "soldById": 0,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_ServiceAgreements.V2.ExportServiceAgreementResponse"];
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
    ServiceAgreements_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by customer IDs */
                customerIds?: string;
                /** @description Filters by business unit IDs */
                businessUnitIds?: string;
                /**
                 * @description Filters by service agreement status\
                 *     Values: [Draft, Sent, Rejected, Accepted, Activated, Canceled, Expired, AutoRenew]
                 */
                status?: string & components["schemas"]["ServiceAgreements.V2.AgreementStatus"];
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
                 *     Available fields are: Id, Name, CreatedOn, ModifiedOn, StartDate, EndDate
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
                     *           "name": "string",
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "modifiedById": 0,
                     *           "templateFields": {
                     *             "originalTemplateId": 0,
                     *             "revenueRecognitionMode": {},
                     *             "generalLedgerAccountId": 0,
                     *             "invoiceCancellationMode": {},
                     *             "billingServiceId": 0,
                     *             "billingScheduleType": {},
                     *             "negativeLiabilityServiceId": 0,
                     *             "positiveIncomeServiceId": 0,
                     *             "defaultLaborCostPerHour": 0,
                     *             "defaultExtraTravelCostPerHour": 0,
                     *             "defaultPricingStrategy": {},
                     *             "defaultTargetMarginValue": 0,
                     *             "defaultTargetMarginValueType": {},
                     *             "defaultFlatPrice": 0,
                     *             "defaultMarkupPercentage": 0,
                     *             "defaultSurcharge": 0,
                     *             "defaultLaborMarkupPercentage": 0,
                     *             "defaultMaterialMarkupPercentage": 0,
                     *             "defaultLaborSurcharge": 0,
                     *             "defaultMaterialSurcharge": 0,
                     *             "defaultRateSheetId": 0,
                     *             "defaultCampaignId": 0,
                     *             "defaultDocumentTemplateId": 0,
                     *             "defaultAutoRenew": true
                     *           },
                     *           "customerId": 0,
                     *           "businessUnitId": 0,
                     *           "status": {},
                     *           "locationIds": [
                     *             0
                     *           ],
                     *           "origin": {},
                     *           "summary": "string",
                     *           "importId": "string",
                     *           "importedDeferredAmount": 0,
                     *           "importedRecognizedAmount": 0,
                     *           "durationMonths": 0,
                     *           "autoRenew": true,
                     *           "renewalAgreementId": 0,
                     *           "startDate": "string",
                     *           "endDate": "string",
                     *           "billingSchedule": {},
                     *           "paymentTermId": 0,
                     *           "paymentMethodId": 0,
                     *           "estimatedTravelCost": 0,
                     *           "estimatedLaborCost": 0,
                     *           "estimatedMaterialCost": 0,
                     *           "laborMarkupPercentage": 0,
                     *           "materialMarkupPercentage": 0,
                     *           "laborSurcharge": 0,
                     *           "materialSurcharge": 0,
                     *           "totalAgreementPrice": 0,
                     *           "estimatedGrossMarginAmount": 0,
                     *           "estimatedGrossMarginPercentage": 0,
                     *           "rateSheetId": 0,
                     *           "accountManagerId": 0,
                     *           "soldById": 0,
                     *           "tagTypeIds": [
                     *             0
                     *           ],
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_ServiceAgreements.V2.ServiceAgreementResponse"];
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
    ServiceAgreements_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Service agreement ID */
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
                     *       "modifiedById": 0,
                     *       "templateFields": {
                     *         "originalTemplateId": 0,
                     *         "revenueRecognitionMode": {},
                     *         "generalLedgerAccountId": 0,
                     *         "invoiceCancellationMode": {},
                     *         "billingServiceId": 0,
                     *         "billingScheduleType": {},
                     *         "negativeLiabilityServiceId": 0,
                     *         "positiveIncomeServiceId": 0,
                     *         "defaultLaborCostPerHour": 0,
                     *         "defaultExtraTravelCostPerHour": 0,
                     *         "defaultPricingStrategy": {},
                     *         "defaultTargetMarginValue": 0,
                     *         "defaultTargetMarginValueType": {},
                     *         "defaultFlatPrice": 0,
                     *         "defaultMarkupPercentage": 0,
                     *         "defaultSurcharge": 0,
                     *         "defaultLaborMarkupPercentage": 0,
                     *         "defaultMaterialMarkupPercentage": 0,
                     *         "defaultLaborSurcharge": 0,
                     *         "defaultMaterialSurcharge": 0,
                     *         "defaultRateSheetId": 0,
                     *         "defaultCampaignId": 0,
                     *         "defaultDocumentTemplateId": 0,
                     *         "defaultAutoRenew": true
                     *       },
                     *       "customerId": 0,
                     *       "businessUnitId": 0,
                     *       "status": {},
                     *       "locationIds": [
                     *         0
                     *       ],
                     *       "origin": {},
                     *       "summary": "string",
                     *       "importId": "string",
                     *       "importedDeferredAmount": 0,
                     *       "importedRecognizedAmount": 0,
                     *       "durationMonths": 0,
                     *       "autoRenew": true,
                     *       "renewalAgreementId": 0,
                     *       "startDate": "string",
                     *       "endDate": "string",
                     *       "billingSchedule": {},
                     *       "paymentTermId": 0,
                     *       "paymentMethodId": 0,
                     *       "estimatedTravelCost": 0,
                     *       "estimatedLaborCost": 0,
                     *       "estimatedMaterialCost": 0,
                     *       "laborMarkupPercentage": 0,
                     *       "materialMarkupPercentage": 0,
                     *       "laborSurcharge": 0,
                     *       "materialSurcharge": 0,
                     *       "totalAgreementPrice": 0,
                     *       "estimatedGrossMarginAmount": 0,
                     *       "estimatedGrossMarginPercentage": 0,
                     *       "rateSheetId": 0,
                     *       "accountManagerId": 0,
                     *       "soldById": 0,
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ServiceAgreements.V2.ServiceAgreementResponse"];
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
            /** @description Service agreement not found */
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
    ServiceAgreements_GetCustomFields: {
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_ServiceAgreements.V2.CustomFieldTypeResponse"];
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
}
