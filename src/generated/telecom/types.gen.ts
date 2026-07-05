// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/v3/tenant/{tenant}/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides a feed for telecom calls */
        get: operations["Calls_Calls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tenant/{tenant}/calls/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get call's details. */
        get: operations["Calls_GetDetails"];
        /** Update existing call. */
        put: operations["Calls_Update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tenant/{tenant}/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get filtered calls. */
        get: operations["Calls_GetCalls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tenant/{tenant}/calls/{id}/recording": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get recording of the call. */
        get: operations["Calls_GetRecording"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tenant/{tenant}/calls/{id}/voicemail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get voicemail of the call. */
        get: operations["Calls_GetVoiceMail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tenant/{tenant}/export/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for telecom calls */
        get: operations["Export_Calls"];
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
        "PaginatedResponse_Of_Telecom.V3.CallResponse": {
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
            data: components["schemas"]["Telecom.V3.CallResponse"][];
        };
        "Telecom.V3.CallResponse": {
            /** Format: int64 */
            id: number;
            jobNumber?: string | null;
            /** Format: int64 */
            projectId: number;
            businessUnit?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            type?: components["schemas"]["Telecom.V3.JobTypeModel"] | null;
            leadCall: components["schemas"]["Telecom.V3.CallModelResponse"];
        };
        "Telecom.V2.NamedModel": {
            /**
             * Format: int64
             * @description The ID of the entity
             */
            id: number;
            /** @description The name of the entity */
            name: string;
        };
        "Telecom.V3.JobTypeModel": {
            /**
             * Format: int64
             * @description The ID of the entity
             */
            id: number;
            /** @description The name of the entity */
            name: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        "Telecom.V3.CallModelResponse": {
            /** Format: date-time */
            createdOn: string;
            active: boolean;
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            receivedOn: string;
            /** Format: duration */
            duration: string;
            from: string;
            to: string;
            direction: components["schemas"]["Telecom.V3.CallDirection"];
            callType?: components["schemas"]["Telecom.V3.CallType"] | null;
            reason?: components["schemas"]["Telecom.V3.CallReasonModel"] | null;
            recordingUrl?: string | null;
            voiceMailUrl?: string | null;
            createdBy?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            customer?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            campaign?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** Format: date-time */
            modifiedOn: string;
            agent?: components["schemas"]["Telecom.V3.CallAgentModel"] | null;
            sid?: string | null;
            tags?: components["schemas"]["Module.Telecom.Shared.TagResponseModel"][] | null;
        };
        /**
         * @description Indicates the direction of a call
         * @enum {string}
         */
        "Telecom.V3.CallDirection": "Inbound" | "Outbound";
        /**
         * @description Specifies the type (classification) of the call. If null, the call was not classified yet. Also,
         *                 outbound calls don't have classification and CallType is always null for outbound calls
         * @enum {string}
         */
        "Telecom.V3.CallType": "Abandoned" | "Unbooked" | "Excused" | "Booked" | "NotLead";
        "Telecom.V3.CallReasonModel": {
            /**
             * Format: int64
             * @description The ID of the entity
             */
            id: number;
            /** @description The name of the entity */
            name: string;
            lead: boolean;
            active: boolean;
        };
        "Telecom.V3.CallAgentModel": {
            /**
             * Format: int64
             * @description The ID of the entity
             */
            id: number;
            /** @description The name of the entity */
            name: string;
            /** Format: int64 */
            externalId?: number | null;
        };
        "Module.Telecom.Shared.TagResponseModel": {
            /** Format: int64 */
            id: number;
            typeName: string;
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
        "Module.Telecom.Shared.DetailedBundleCallModel": {
            /** Format: int64 */
            id: number;
            jobNumber: string;
            /** Format: int64 */
            projectId: number;
            businessUnit: components["schemas"]["Module.Admin.Shared.BusinessUnitModel"];
            type: components["schemas"]["JobTypeModel"];
            leadCall: components["schemas"]["Module.Telecom.Shared.DetailedCallModel"];
        };
        "Module.Admin.Shared.BusinessUnitModel": {
            /** Format: int64 */
            id: number;
            active: boolean;
            name: string;
            officialName: string;
            email: string;
            currency: string;
            phoneNumber: string;
            invoiceHeader: string;
            invoiceMessage: string;
            /** Format: decimal */
            defaultTaxRate: number;
            authorizationParagraph: string;
            acknowledgementParagraph: string;
            address: components["schemas"]["Module.Admin.Shared.BusinessUnitAddressModel"];
            materialSku: string;
            quickbooksClass: string;
            accountCode: string;
            franchiseId: string;
            conceptCode: string;
            corporateContractNumber: string;
            tenant: components["schemas"]["Module.Admin.Shared.BusinessUnitTenantModel"];
            /** Format: date-time */
            modifiedOn: string;
        };
        "Module.Admin.Shared.BusinessUnitAddressModel": {
            street: string;
            unit: string;
            city: string;
            state: string;
            zip: string;
            country: string;
        };
        "Module.Admin.Shared.BusinessUnitTenantModel": {
            /** Format: int64 */
            id: number;
            name: string;
            quickbooksClass: string;
            accountCode: string;
            franchiseId: string;
            conceptCode: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        JobTypeModel: {
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        "Module.Telecom.Shared.DetailedCallModel": {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            receivedOn: string;
            /** Format: duration */
            duration: string;
            from: string;
            to: string;
            direction: components["schemas"]["Telecom.CallDirection"];
            callType?: components["schemas"]["Telecom.CallType"] | null;
            reason: components["schemas"]["Module.Telecom.Shared.CallReasonModel"];
            recordingUrl: string;
            voiceMailUrl: string;
            createdBy: components["schemas"]["Services.NamedModel"];
            customer: components["schemas"]["Crm.Contracts.Customers.CustomerModel"];
            campaign: components["schemas"]["Marketing.Core.CampaignModel"];
            /** Format: date-time */
            modifiedOn: string;
            agent: components["schemas"]["Module.Telecom.Shared.CallAgentModel"];
            sid: string;
            tags: components["schemas"]["Module.Telecom.Shared.TagResponseModel"][];
        };
        /**
         * @description Indicates the direction of a call.
         * @enum {string}
         */
        "Telecom.CallDirection": "Inbound" | "Outbound";
        /**
         * @description See MasterModel.CallType. It should have the same values
         * @enum {string}
         */
        "Telecom.CallType": "Abandoned" | "Unbooked" | "Excused" | "Booked" | "NotLead";
        "Module.Telecom.Shared.CallReasonModel": {
            /** Format: int64 */
            id: number;
            name: string;
            lead: boolean;
            active: boolean;
        };
        "Services.NamedModel": {
            /** Format: int64 */
            id: number;
            name: string;
        };
        "Crm.Contracts.Customers.CustomerModel": {
            /** Format: int64 */
            id: number;
            active: boolean;
            name: string;
            email: string;
            /** Format: decimal */
            balance?: number | null;
            doNotMail: boolean;
            address: components["schemas"]["AddressOutput"];
            importId: string;
            doNotService: boolean;
            type: components["schemas"]["Crm.Customers.CustomerType"];
            contacts: components["schemas"]["Contacts.Contracts.ContactOutputModel"][];
            /** Format: int64 */
            mergedToId?: number | null;
            /** Format: date-time */
            modifiedOn: string;
            memberships: components["schemas"]["Memberships.MembershipModel"][];
            hasActiveMembership?: boolean | null;
            customFields: components["schemas"]["CustomFieldApiModel"][];
            /** Format: date-time */
            createdOn: string;
            /** Format: int64 */
            createdBy?: number | null;
            phoneSettings: components["schemas"]["Crm.Contracts.Customers.CustomerPhoneModel"][];
        };
        AddressOutput: {
            street: string;
            unit: string;
            country: string;
            city: string;
            state: string;
            zip: string;
            streetAddress: string;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
        };
        /** @enum {string} */
        "Crm.Customers.CustomerType": "Residential" | "Commercial";
        "Contacts.Contracts.ContactOutputModel": {
            /** Format: int64 */
            id?: number | null;
            type: string;
            value: string;
            memo: string;
            active: boolean;
            /** Format: date-time */
            modifiedOn: string;
        };
        "Memberships.MembershipModel": {
            /** Format: int64 */
            id: number;
            active: boolean;
            type: components["schemas"]["Memberships.MembershipTypeModel"];
            status: string;
            /** Format: date-time */
            from?: string | null;
            /** Format: date-time */
            to?: string | null;
            /** Format: int64 */
            locationId: number;
        };
        "Memberships.MembershipTypeModel": {
            /** Format: int64 */
            id: number;
            active: boolean;
            name: string;
        };
        CustomFieldApiModel: {
            /**
             * Format: int64
             * @description Custom Field Type Id
             */
            typeId: number;
            /** @description Custom Field Name */
            name: string;
            /** @description Custom Field Value */
            value: string;
        };
        "Crm.Contracts.Customers.CustomerPhoneModel": {
            phoneNumber: string;
            doNotText: boolean;
        };
        "Marketing.Core.CampaignModel": {
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            createdOn: string;
            active: boolean;
            isDefaultCampaign?: boolean | null;
            category?: components["schemas"]["Marketing.Core.CampaignCategoryModel"] | null;
            source?: string | null;
            otherSource?: string | null;
            businessUnit?: string | null;
            medium?: string | null;
            otherMedium?: string | null;
            dnis?: string | null;
        };
        "Marketing.Core.CampaignCategoryModel": {
            /** Format: int64 */
            id: number;
            name: string;
            active: boolean;
        };
        "Module.Telecom.Shared.CallAgentModel": {
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: int64 */
            externalId?: number | null;
        };
        "CollectionResult_Of_Module.Telecom.Shared.V2.BundleCallModel": {
            data: components["schemas"]["Module.Telecom.Shared.V2.BundleCallModel"][];
            /** Format: int32 */
            page: number;
            /** Format: int32 */
            pageSize: number;
            /** Format: int32 */
            totalCount: number;
            hasMore: boolean;
        };
        "Module.Telecom.Shared.V2.BundleCallModel": {
            /** Format: int64 */
            id: number;
            jobNumber: string;
            /** Format: int64 */
            projectId: number;
            businessUnit: components["schemas"]["Module.Admin.Shared.BusinessUnitModel"];
            type: components["schemas"]["JobTypeModel"];
            leadCall: components["schemas"]["Module.Telecom.Shared.V2.CallModel"];
        };
        "Module.Telecom.Shared.V2.CallModel": {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            receivedOn: string;
            /** Format: duration */
            duration: string;
            from: string;
            to: string;
            direction: components["schemas"]["Telecom.CallDirection"];
            callType?: components["schemas"]["Telecom.CallType"] | null;
            reason: components["schemas"]["Module.Telecom.Shared.CallReasonModel"];
            recordingUrl: string;
            voiceMailUrl: string;
            createdBy: components["schemas"]["Services.NamedModel"];
            customer: components["schemas"]["Crm.Contracts.Customers.CustomerModel"];
            campaign: components["schemas"]["Marketing.Core.CampaignModel"];
            /** Format: date-time */
            modifiedOn: string;
            agent: components["schemas"]["Module.Telecom.Shared.CallAgentModel"];
            sid: string;
            tags: components["schemas"]["Module.Telecom.Shared.TagResponseModel"][];
            /** Format: date-time */
            createdOn: string;
            active: boolean;
        };
        "Module.Telecom.Shared.CallInUpdateModelV2": {
            /** Format: int64 */
            callId?: number | null;
            callType?: components["schemas"]["Telecom.CallType"] | null;
            excuseMemo: string;
            /** Format: int64 */
            campaignId?: number | null;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            agentId?: number | null;
            reason: components["schemas"]["Module.Telecom.Shared.ReasonInModel"];
            customer: components["schemas"]["CustomerInModel"];
            location: components["schemas"]["LocationInModel"];
            tag: string;
        };
        "Module.Telecom.Shared.ReasonInModel": {
            name: string;
            lead: boolean;
        };
        CustomerInModel: {
            /** Format: int64 */
            id: number;
            name: string;
            address: components["schemas"]["AddressInput"];
            contacts: components["schemas"]["ContactInputModel"][];
        };
        AddressInput: {
            street: string;
            unit: string;
            country: string;
            city: string;
            state: string;
            zip: string;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
        };
        ContactInputModel: {
            /** Format: int64 */
            id?: number | null;
            type: string;
            value: string;
            memo: string;
        };
        LocationInModel: {
            /** Format: int64 */
            id: number;
            name: string;
            address: components["schemas"]["AddressInput"];
            contacts: components["schemas"]["ContactInputModel"][];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Telecom.V2.ExportCallResponse": {
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
            data: components["schemas"]["Telecom.V2.ExportCallResponse"][];
        };
        "Telecom.V2.ExportCallResponse": {
            /**
             * Format: int64
             * @description The ID of the call
             */
            id: number;
            /**
             * Format: duration
             * @description The duration of the call
             */
            duration: string;
            /** @description The caller's phone */
            from: string;
            /** @description The called party's phone */
            to: string;
            /** @description The direction of the call */
            direction: components["schemas"]["Telecom.V2.CallDirection"];
            /** @description The current status of the call */
            status: components["schemas"]["Telecom.V2.CallStatus"];
            /**
             * @description The type (classification) of the call. Null if the inbound call was not classified yet or this is
             *                 an outbound call
             */
            type?: components["schemas"]["Telecom.V2.CallType"] | null;
            /** @description The URL for call recording. Can be null if the call hasn't a recording */
            recordingUrl?: string | null;
            /**
             * @description The URL for call voicemail. Can be null if the call hasn't a voicemail. This field may have value only for
             *     Phones Pro tenants
             */
            voiceMailPath?: string | null;
            /**
             * Format: date-time
             * @description The time the call was created (i.e. inbound call was received or outbound call was initiated)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last time the call properties were updated
             */
            modifiedOn: string;
            /** @description The info about the call reason linked to the call */
            reason?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description The info about the customer linked to the call */
            customer?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description The info about the location linked to the call */
            location?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description The info about the phone advertising campaign linked to the call */
            campaign?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description The info about the job linked to the call */
            job?: components["schemas"]["Telecom.V2.JobModel"] | null;
            /**
             * @description The info about the user agent who was assigned to the call. For inbound calls this is the user who
             *                 clicked the call bubble last time, or outbound calls this is a user who initiated the call. For Phones Pro,
             *                 this may differ to CreatedBy for outbound calls if the outbound call was transferred between users
             */
            agent?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description The info about the user who created the outbound call */
            createdBy?: components["schemas"]["Telecom.V2.NamedModel"] | null;
            /** @description Excuse memo of the call */
            excuseMemo: string;
            /** @description Call Tag */
            tag: string;
            /** @description Gets or sets whether the entity is active. */
            active: boolean;
            /** @description CRM Leads created from unbooked calls */
            lead?: components["schemas"]["Telecom.V2.LeadModel"] | null;
        };
        /**
         * @description Indicates the direction of a call
         * @enum {string}
         */
        "Telecom.V2.CallDirection": "Inbound" | "Outbound";
        /**
         * @description Indicates the status of a call
         * @enum {string}
         */
        "Telecom.V2.CallStatus": "Ringing" | "Answered" | "Completed" | "Initiated";
        /**
         * @description Specifies the type (classification) of the call. If null, the call was not classified yet. Also,
         *                 outbound calls don't have classification and CallType is always null for outbound calls
         * @enum {string}
         */
        "Telecom.V2.CallType": "Abandoned" | "Unbooked" | "Excused" | "Booked" | "NotLead";
        "Telecom.V2.JobModel": {
            /**
             * Format: int64
             * @description The ID of the job
             */
            id: number;
            /** @description Human readable number of the job */
            number: string;
        };
        "Telecom.V2.LeadModel": {
            /**
             * Format: int64
             * @description The ID of the entity
             */
            id: number;
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
    Calls_Calls: {
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
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created after certain date/time (in UTC) */
                createdAfter?: string;
                /** @description Return items modified after certain date/time (in UTC) */
                modifiedAfter?: string;
                /** @description Campaign ID */
                campaignId?: number;
                /** @description Agent ID (number) */
                agentId?: number;
                /** @description Minimum call duration (number of seconds) */
                minDuration?: number;
                /** @description The phone number that was called (string) */
                phoneNumberCalled?: string;
                /** @description The caller's phone number (string) */
                callerPhoneNumber?: string;
                /** @description Agent name (string) */
                agentName?: string;
                /** @description Is agent external flag (boolean) */
                agentIsExternal?: boolean;
                /** @description Agent external ID (number) */
                agentExternalId?: number;
                /**
                 * @description The Sorting field, possible values: Id, CreatedOn, ModifiedOn.
                 *     The Sorting is ascending by default, add the '-' character to use descending (for example -Id)
                 */
                sort?: string;
                /** @description Sid of the call (string) */
                sid?: string;
                /** @description Tag of the call (string) */
                tag?: string;
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
                     *           "jobNumber": "string",
                     *           "projectId": 0,
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "type": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "leadCall": {
                     *             "createdOn": "string",
                     *             "active": true,
                     *             "id": 0,
                     *             "receivedOn": "string",
                     *             "duration": "string",
                     *             "from": "string",
                     *             "to": "string",
                     *             "direction": "Inbound",
                     *             "callType": {},
                     *             "reason": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "lead": true,
                     *               "active": true
                     *             },
                     *             "recordingUrl": "string",
                     *             "voiceMailUrl": "string",
                     *             "createdBy": {
                     *               "id": 0,
                     *               "name": "string"
                     *             },
                     *             "customer": {
                     *               "id": 0,
                     *               "name": "string"
                     *             },
                     *             "campaign": {
                     *               "id": 0,
                     *               "name": "string"
                     *             },
                     *             "modifiedOn": "string",
                     *             "agent": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "externalId": 0
                     *             },
                     *             "sid": "string",
                     *             "tags": [
                     *               {
                     *                 "id": 0,
                     *                 "typeName": "string"
                     *               }
                     *             ]
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Telecom.V3.CallResponse"];
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
    Calls_GetDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the call. */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description DetailedBundleCallModel with the following fields:
             *     long Id;
             *     string JobNumber;
             *     long ProjectId;
             *     BusinessUnitModel BusinessUnit;
             *     JobTypeModel Type;
             *     DetailedCallModel LeadCall;
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobNumber": "string",
                     *       "projectId": 0,
                     *       "businessUnit": {
                     *         "id": 0,
                     *         "active": true,
                     *         "name": "string",
                     *         "officialName": "string",
                     *         "email": "string",
                     *         "currency": "string",
                     *         "phoneNumber": "string",
                     *         "invoiceHeader": "string",
                     *         "invoiceMessage": "string",
                     *         "defaultTaxRate": 0,
                     *         "authorizationParagraph": "string",
                     *         "acknowledgementParagraph": "string",
                     *         "address": {
                     *           "street": "string",
                     *           "unit": "string",
                     *           "city": "string",
                     *           "state": "string",
                     *           "zip": "string",
                     *           "country": "string"
                     *         },
                     *         "materialSku": "string",
                     *         "quickbooksClass": "string",
                     *         "accountCode": "string",
                     *         "franchiseId": "string",
                     *         "conceptCode": "string",
                     *         "corporateContractNumber": "string",
                     *         "tenant": {
                     *           "id": 0,
                     *           "name": "string",
                     *           "quickbooksClass": "string",
                     *           "accountCode": "string",
                     *           "franchiseId": "string",
                     *           "conceptCode": "string",
                     *           "modifiedOn": "string"
                     *         },
                     *         "modifiedOn": "string"
                     *       },
                     *       "type": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "modifiedOn": "string"
                     *       },
                     *       "leadCall": {
                     *         "id": 0,
                     *         "receivedOn": "string",
                     *         "duration": "string",
                     *         "from": "string",
                     *         "to": "string",
                     *         "direction": "Inbound",
                     *         "callType": {},
                     *         "reason": {
                     *           "id": 0,
                     *           "name": "string",
                     *           "lead": true,
                     *           "active": true
                     *         },
                     *         "recordingUrl": "string",
                     *         "voiceMailUrl": "string",
                     *         "createdBy": {
                     *           "id": 0,
                     *           "name": "string"
                     *         },
                     *         "customer": {
                     *           "id": 0,
                     *           "active": true,
                     *           "name": "string",
                     *           "email": "string",
                     *           "balance": 0,
                     *           "doNotMail": true,
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "country": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "streetAddress": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "importId": "string",
                     *           "doNotService": true,
                     *           "type": "Residential",
                     *           "contacts": [
                     *             {
                     *               "id": 0,
                     *               "type": "string",
                     *               "value": "string",
                     *               "memo": "string",
                     *               "active": true,
                     *               "modifiedOn": "string"
                     *             }
                     *           ],
                     *           "mergedToId": 0,
                     *           "modifiedOn": "string",
                     *           "memberships": [
                     *             {
                     *               "id": 0,
                     *               "active": true,
                     *               "type": {
                     *                 "id": 0,
                     *                 "active": true,
                     *                 "name": "string"
                     *               },
                     *               "status": "string",
                     *               "from": "string",
                     *               "to": "string",
                     *               "locationId": 0
                     *             }
                     *           ],
                     *           "hasActiveMembership": true,
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "createdBy": 0,
                     *           "phoneSettings": [
                     *             {
                     *               "phoneNumber": "string",
                     *               "doNotText": true
                     *             }
                     *           ]
                     *         },
                     *         "campaign": {
                     *           "id": 0,
                     *           "name": "string",
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "active": true,
                     *           "isDefaultCampaign": true,
                     *           "category": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "active": true
                     *           },
                     *           "source": "string",
                     *           "otherSource": "string",
                     *           "businessUnit": "string",
                     *           "medium": "string",
                     *           "otherMedium": "string",
                     *           "dnis": "string"
                     *         },
                     *         "modifiedOn": "string",
                     *         "agent": {
                     *           "id": 0,
                     *           "name": "string",
                     *           "externalId": 0
                     *         },
                     *         "sid": "string",
                     *         "tags": [
                     *           {
                     *             "id": 0,
                     *             "typeName": "string"
                     *           }
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Module.Telecom.Shared.DetailedBundleCallModel"];
                };
            };
        };
    };
    Calls_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of updating call. */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /**
         * @description DateTime? CreatedOn;
         *     TimeSpan? Duration;
         *     CallDirection? Direction;
         *     CallStatus? Status;
         *     CallType? CallType;
         *     string ExcuseMemo;
         *     long? CampaignId;
         *     long? JobId;
         *     long? AgentId;
         *     string RecordingUrl;
         *     string RecordingId;
         *     ReasonInModel Reason;
         *     CustomerInModel Customer;
         *     LocationInModel Location;
         */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "callId": 0,
                 *       "callType": {},
                 *       "excuseMemo": "string",
                 *       "campaignId": 0,
                 *       "jobId": 0,
                 *       "agentId": 0,
                 *       "reason": {
                 *         "name": "string",
                 *         "lead": true
                 *       },
                 *       "customer": {
                 *         "id": 0,
                 *         "name": "string",
                 *         "address": {
                 *           "street": "string",
                 *           "unit": "string",
                 *           "country": "string",
                 *           "city": "string",
                 *           "state": "string",
                 *           "zip": "string",
                 *           "latitude": 0,
                 *           "longitude": 0
                 *         },
                 *         "contacts": [
                 *           {
                 *             "id": 0,
                 *             "type": "string",
                 *             "value": "string",
                 *             "memo": "string"
                 *           }
                 *         ]
                 *       },
                 *       "location": {
                 *         "id": 0,
                 *         "name": "string",
                 *         "address": {
                 *           "street": "string",
                 *           "unit": "string",
                 *           "country": "string",
                 *           "city": "string",
                 *           "state": "string",
                 *           "zip": "string",
                 *           "latitude": 0,
                 *           "longitude": 0
                 *         },
                 *         "contacts": [
                 *           {
                 *             "id": 0,
                 *             "type": "string",
                 *             "value": "string",
                 *             "memo": "string"
                 *           }
                 *         ]
                 *       },
                 *       "tag": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Module.Telecom.Shared.CallInUpdateModelV2"];
            };
        };
        responses: {
            /** @description DetailedCallModel */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "receivedOn": "string",
                     *       "duration": "string",
                     *       "from": "string",
                     *       "to": "string",
                     *       "direction": "Inbound",
                     *       "callType": {},
                     *       "reason": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "lead": true,
                     *         "active": true
                     *       },
                     *       "recordingUrl": "string",
                     *       "voiceMailUrl": "string",
                     *       "createdBy": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "customer": {
                     *         "id": 0,
                     *         "active": true,
                     *         "name": "string",
                     *         "email": "string",
                     *         "balance": 0,
                     *         "doNotMail": true,
                     *         "address": {
                     *           "street": "string",
                     *           "unit": "string",
                     *           "country": "string",
                     *           "city": "string",
                     *           "state": "string",
                     *           "zip": "string",
                     *           "streetAddress": "string",
                     *           "latitude": 0,
                     *           "longitude": 0
                     *         },
                     *         "importId": "string",
                     *         "doNotService": true,
                     *         "type": "Residential",
                     *         "contacts": [
                     *           {
                     *             "id": 0,
                     *             "type": "string",
                     *             "value": "string",
                     *             "memo": "string",
                     *             "active": true,
                     *             "modifiedOn": "string"
                     *           }
                     *         ],
                     *         "mergedToId": 0,
                     *         "modifiedOn": "string",
                     *         "memberships": [
                     *           {
                     *             "id": 0,
                     *             "active": true,
                     *             "type": {
                     *               "id": 0,
                     *               "active": true,
                     *               "name": "string"
                     *             },
                     *             "status": "string",
                     *             "from": "string",
                     *             "to": "string",
                     *             "locationId": 0
                     *           }
                     *         ],
                     *         "hasActiveMembership": true,
                     *         "customFields": [
                     *           {
                     *             "typeId": 0,
                     *             "name": "string",
                     *             "value": "string"
                     *           }
                     *         ],
                     *         "createdOn": "string",
                     *         "createdBy": 0,
                     *         "phoneSettings": [
                     *           {
                     *             "phoneNumber": "string",
                     *             "doNotText": true
                     *           }
                     *         ]
                     *       },
                     *       "campaign": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "modifiedOn": "string",
                     *         "createdOn": "string",
                     *         "active": true,
                     *         "isDefaultCampaign": true,
                     *         "category": {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true
                     *         },
                     *         "source": "string",
                     *         "otherSource": "string",
                     *         "businessUnit": "string",
                     *         "medium": "string",
                     *         "otherMedium": "string",
                     *         "dnis": "string"
                     *       },
                     *       "modifiedOn": "string",
                     *       "agent": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "externalId": 0
                     *       },
                     *       "sid": "string",
                     *       "tags": [
                     *         {
                     *           "id": 0,
                     *           "typeName": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Module.Telecom.Shared.DetailedCallModel"];
                };
            };
        };
    };
    Calls_GetCalls: {
        parameters: {
            query?: {
                /** @description Modified before a certain date/time (as date-time in RFC3339), not inclusive */
                modifiedBefore?: string;
                /** @description Modified on or after a certain date/time (as date-time in RFC3339), inclusive */
                modifiedOnOrAfter?: string;
                /** @description Created on or after a certain date/time (as date-time in RFC3339), inclusive */
                createdOnOrAfter?: string;
                /** @description Modified after a certain date/time (as date-time in RFC3339), not inclusive */
                modifiedAfter?: string;
                /** @description Minimum call duration (number) */
                minDuration?: number;
                /** @description The phone number that was called (string) */
                phoneNumberCalled?: string;
                /** @description Campaign ID */
                campaignId?: number;
                /** @description Agent ID (number) */
                agentId?: number;
                /** @description Agent name (string) */
                agentName?: string;
                /** @description Is agent external flag (boolean) */
                agentIsExternal?: boolean;
                /** @description Agent external ID (number) */
                agentExternalId?: number;
                /** @description Sorting (string with possible values "Id" (default), "createdOn", or "modifiedOn") */
                orderBy?: string;
                /** @description Sorting direction (string with possible values "asc" (default) or "desc") */
                orderByDirection?: string;
                activeOnly?: boolean;
                createdAfter?: string;
                createdBefore?: string;
                ids?: number[];
                page?: number;
                pageSize?: number;
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
            /**
             * @description Array of BundleCallModels with the following fields:
             *     long Id;
             *     string JobNumber;
             *     long ProjectId;
             *     BusinessUnitModel BusinessUnit;
             *     JobTypeModel Type;
             *     CallModel LeadCall;
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "jobNumber": "string",
                     *           "projectId": 0,
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "active": true,
                     *             "name": "string",
                     *             "officialName": "string",
                     *             "email": "string",
                     *             "currency": "string",
                     *             "phoneNumber": "string",
                     *             "invoiceHeader": "string",
                     *             "invoiceMessage": "string",
                     *             "defaultTaxRate": 0,
                     *             "authorizationParagraph": "string",
                     *             "acknowledgementParagraph": "string",
                     *             "address": {
                     *               "street": "string",
                     *               "unit": "string",
                     *               "city": "string",
                     *               "state": "string",
                     *               "zip": "string",
                     *               "country": "string"
                     *             },
                     *             "materialSku": "string",
                     *             "quickbooksClass": "string",
                     *             "accountCode": "string",
                     *             "franchiseId": "string",
                     *             "conceptCode": "string",
                     *             "corporateContractNumber": "string",
                     *             "tenant": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "quickbooksClass": "string",
                     *               "accountCode": "string",
                     *               "franchiseId": "string",
                     *               "conceptCode": "string",
                     *               "modifiedOn": "string"
                     *             },
                     *             "modifiedOn": "string"
                     *           },
                     *           "type": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "leadCall": {
                     *             "id": 0,
                     *             "receivedOn": "string",
                     *             "duration": "string",
                     *             "from": "string",
                     *             "to": "string",
                     *             "direction": "Inbound",
                     *             "callType": {},
                     *             "reason": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "lead": true,
                     *               "active": true
                     *             },
                     *             "recordingUrl": "string",
                     *             "voiceMailUrl": "string",
                     *             "createdBy": {
                     *               "id": 0,
                     *               "name": "string"
                     *             },
                     *             "customer": {
                     *               "id": 0,
                     *               "active": true,
                     *               "name": "string",
                     *               "email": "string",
                     *               "balance": 0,
                     *               "doNotMail": true,
                     *               "address": {
                     *                 "street": "string",
                     *                 "unit": "string",
                     *                 "country": "string",
                     *                 "city": "string",
                     *                 "state": "string",
                     *                 "zip": "string",
                     *                 "streetAddress": "string",
                     *                 "latitude": 0,
                     *                 "longitude": 0
                     *               },
                     *               "importId": "string",
                     *               "doNotService": true,
                     *               "type": "Residential",
                     *               "contacts": [
                     *                 {
                     *                   "id": 0,
                     *                   "type": "string",
                     *                   "value": "string",
                     *                   "memo": "string",
                     *                   "active": true,
                     *                   "modifiedOn": "string"
                     *                 }
                     *               ],
                     *               "mergedToId": 0,
                     *               "modifiedOn": "string",
                     *               "memberships": [
                     *                 {
                     *                   "id": 0,
                     *                   "active": true,
                     *                   "type": {
                     *                     "id": 0,
                     *                     "active": true,
                     *                     "name": "string"
                     *                   },
                     *                   "status": "string",
                     *                   "from": "string",
                     *                   "to": "string",
                     *                   "locationId": 0
                     *                 }
                     *               ],
                     *               "hasActiveMembership": true,
                     *               "customFields": [
                     *                 {
                     *                   "typeId": 0,
                     *                   "name": "string",
                     *                   "value": "string"
                     *                 }
                     *               ],
                     *               "createdOn": "string",
                     *               "createdBy": 0,
                     *               "phoneSettings": [
                     *                 {
                     *                   "phoneNumber": "string",
                     *                   "doNotText": true
                     *                 }
                     *               ]
                     *             },
                     *             "campaign": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "modifiedOn": "string",
                     *               "createdOn": "string",
                     *               "active": true,
                     *               "isDefaultCampaign": true,
                     *               "category": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "active": true
                     *               },
                     *               "source": "string",
                     *               "otherSource": "string",
                     *               "businessUnit": "string",
                     *               "medium": "string",
                     *               "otherMedium": "string",
                     *               "dnis": "string"
                     *             },
                     *             "modifiedOn": "string",
                     *             "agent": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "externalId": 0
                     *             },
                     *             "sid": "string",
                     *             "tags": [
                     *               {
                     *                 "id": 0,
                     *                 "typeName": "string"
                     *               }
                     *             ],
                     *             "createdOn": "string",
                     *             "active": true
                     *           }
                     *         }
                     *       ],
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "totalCount": 0,
                     *       "hasMore": true
                     *     }
                     */
                    "application/json": components["schemas"]["CollectionResult_Of_Module.Telecom.Shared.V2.BundleCallModel"];
                };
            };
        };
    };
    Calls_GetRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the call. */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description "audio/mpeg" stream with call recording. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
        };
    };
    Calls_GetVoiceMail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the call. */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description "audio/mpeg" stream with call voicemail. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
        };
    };
    Export_Calls: {
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
                     *           "duration": "string",
                     *           "from": "string",
                     *           "to": "string",
                     *           "direction": {},
                     *           "status": {},
                     *           "type": {},
                     *           "recordingUrl": "string",
                     *           "voiceMailPath": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "reason": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "location": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "campaign": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "job": {
                     *             "id": 0,
                     *             "number": "string"
                     *           },
                     *           "agent": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "createdBy": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "excuseMemo": "string",
                     *           "tag": "string",
                     *           "active": true,
                     *           "lead": {
                     *             "id": 0
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Telecom.V2.ExportCallResponse"];
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
