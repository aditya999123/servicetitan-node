// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/attributed-leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns attributed leads data. */
        get: operations["AttributedLeads_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/capacity-warnings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns all capacity awareness warnings. */
        get: operations["CapacityAwarenessWarning_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/external-call-attributions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attributes an external call (possibly coming from Call Tracking Software) to a web session. */
        post: operations["ExternalCallAttributions_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/performance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns performance data. */
        get: operations["Performance_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/job-attributions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attributes a job to a web session. */
        post: operations["ScheduledJobAttributions_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/web-booking-attributions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attributes a web booking to a web session. */
        post: operations["WebBookingAttributions_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/web-lead-form-attributions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attributes a web lead form to a web session. */
        post: operations["WebLeadFormAttributions_Create"];
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
        "PaginatedResponse_Of_Marketing.Ads.Contracts.AttributedLeads.GetAttributedLeadsResponse": {
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
            data: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.GetAttributedLeadsResponse"][];
        };
        "Marketing.Ads.Contracts.AttributedLeads.GetAttributedLeadsResponse": {
            /** Format: date-time */
            dateTime: string;
            leadType: components["schemas"]["Marketing.Ads.Client.LeadType_Int32"];
            attribution: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.Attribution"];
            job: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.Job"];
            customer: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.Customer"];
            call: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.Call"];
            leadForm: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.LeadForm"];
            booking: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.Booking"];
        };
        /** @enum {string} */
        "Marketing.Ads.Client.LeadType": "Call" | "WebBooking" | "WebLeadForm" | "ManualJob";
        "Marketing.Ads.Contracts.AttributedLeads.Attribution": {
            utmSource: string;
            utmMedium: string;
            utmCampaign: string;
            landingPageUrl: string;
            referrerUrl: string;
            clickId: string;
            gbraid: string;
            wbraid: string;
            /** Format: int64 */
            stCampaignId?: number | null;
            originalCampaign: string;
            attributionOverwriteType?: components["schemas"]["Marketing.Ads.Contracts.AttributedLeads.EntityType"] | null;
            /** Format: int64 */
            attributionOverwriteId?: number | null;
            /** Format: int64 */
            overwrittenBookingJobId?: number | null;
            adGroupId: string;
            adGroupName: string;
            keywordId: string;
            keywordName: string;
        };
        /** @enum {string} */
        "Marketing.Ads.Contracts.AttributedLeads.EntityType": "Call" | "Booking" | "Lead";
        "Marketing.Ads.Contracts.AttributedLeads.Job": {
            /** Format: int64 */
            id?: number | null;
            name: string;
        };
        "Marketing.Ads.Contracts.AttributedLeads.Customer": {
            /** Format: int64 */
            id?: number | null;
            name: string;
        };
        "Marketing.Ads.Contracts.AttributedLeads.Call": {
            duration: string;
            /** Format: int64 */
            id?: number | null;
            type: string;
            source: string;
            callerNumber: string;
            trackingNumber: string;
            excusedReason: string;
        };
        "Marketing.Ads.Contracts.AttributedLeads.LeadForm": {
            /** Format: int64 */
            leadNumber?: number | null;
            leadStatus: string;
            notes: string;
        };
        "Marketing.Ads.Contracts.AttributedLeads.Booking": {
            /** Format: int64 */
            id?: number | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        "Marketing.Ads.Client.LeadType_Int32": 1 | 2 | 3 | 4;
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
         * @description Data from the web session used by the attribution system to determine the marketing campaign that
         *     led the user to this particular web session.
         */
        "Marketing.Ads.V2.WebSessionData": {
            /** @description The url of the web page that the user first landed on */
            landingPageUrl: string;
            /** @description The url of the web page that referred to the website */
            referrerUrl: string;
            /** @description Google Click Identifier */
            gclid?: string | null;
            /** @description Google web to app click Identifier */
            gbraid?: string | null;
            /** @description Google app to web click Identifier */
            wbraid?: string | null;
            /** @description Facebook Click Identifier */
            fbclid?: string | null;
            /** @description Microsoft Click ID */
            msclkid?: string | null;
            /** @description UTM source */
            utmSource?: string | null;
            /** @description UTM medium */
            utmMedium?: string | null;
            /** @description UTM campaign */
            utmCampaign?: string | null;
            /** @description UTM ad group */
            utmAdgroup?: string | null;
            /** @description UTM term */
            utmTerm?: string | null;
            /** @description UTM content */
            utmContent?: string | null;
            /** @description An id used by Google Analytics to track unique visitors */
            googleAnalyticsClientId?: string | null;
        };
        "Marketing.Ads.Contracts.CapacityAwarenessWarningQueryResult": {
            /** Format: int64 */
            tenantId: number;
            tenantName: string;
            /** Format: int32 */
            totalCount: number;
            data: components["schemas"]["Marketing.Ads.Client.CapacityAwarenessWarning"][];
        };
        "Marketing.Ads.Client.CapacityAwarenessWarning": {
            campaignName: string;
            warningType: string;
            businessUnits: string[];
            /** Format: int32 */
            lookaheadWindow: number;
            /** Format: int32 */
            thresholdValue: number;
        };
        "Marketing.Ads.V2.CreateExternalCallAttributionRequest": {
            /** @description The web session that the entity should be attributed to */
            webSessionData: components["schemas"]["Marketing.Ads.V2.WebSessionData"];
            /** @description The external call. */
            externalCallData: components["schemas"]["Marketing.Ads.V2.ExternalCallData"];
        };
        "Marketing.Ads.V2.ExternalCallData": {
            /** @description The phone number of the customer */
            customerPhoneNumber: string;
            /** @description The ServiceTitan phone number that the external call tracking service will forward to */
            forwardingPhoneNumber: string;
            /** @description The tracking phone number that the external call tracking service will display to the customer */
            trackingPhoneNumber: string;
            /**
             * Format: date-time
             * @description Call start time in Utc
             */
            callStartedOnUtc: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Marketing.Ads.Contracts.Performance.GetPerformanceResponse": {
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
            data: components["schemas"]["Marketing.Ads.Contracts.Performance.GetPerformanceResponse"][];
        };
        "Marketing.Ads.Contracts.Performance.GetPerformanceResponse": {
            campaign: components["schemas"]["Marketing.Ads.Contracts.Performance.Campaign"];
            adGroup: components["schemas"]["Marketing.Ads.Contracts.Performance.AdGroup"];
            keyword: components["schemas"]["Marketing.Ads.Contracts.Performance.Keyword"];
            digitalStats: components["schemas"]["Marketing.Ads.Contracts.Performance.DigitalStats"];
            leadStats: components["schemas"]["Marketing.Ads.Contracts.Performance.LeadStats"];
            /** Format: decimal */
            returnOnInvestment?: number | null;
        };
        "Marketing.Ads.Contracts.Performance.Campaign": {
            /** Format: int64 */
            id?: number | null;
            /** Format: int64 */
            externalId?: number | null;
            name: string;
            category: string;
            launchDate: string;
            status: components["schemas"]["Marketing.Ads.Contracts.Performance.Status"];
        };
        /** @enum {string} */
        "Marketing.Ads.Contracts.Performance.Status": "None" | "Live" | "Stopped";
        "Marketing.Ads.Contracts.Performance.AdGroup": {
            id: string;
            name: string;
            status?: components["schemas"]["Marketing.Ads.Contracts.Performance.Status"] | null;
        };
        "Marketing.Ads.Contracts.Performance.Keyword": {
            id: string;
            name: string;
            status?: components["schemas"]["Marketing.Ads.Contracts.Performance.Status"] | null;
        };
        "Marketing.Ads.Contracts.Performance.DigitalStats": {
            /** Format: double */
            impressionShare?: number | null;
            /** Format: int64 */
            impressions: number;
            /** Format: int64 */
            clicks: number;
            /** Format: double */
            averageCPC: number;
            /** Format: int64 */
            conversions: number;
            /** Format: double */
            allConversions?: number | null;
            /** Format: decimal */
            cost: number;
            /** Format: double */
            clickRate?: number | null;
            /** Format: double */
            costPerConversion?: number | null;
            /** Format: double */
            conversionRate?: number | null;
        };
        "Marketing.Ads.Contracts.Performance.LeadStats": {
            /** Format: int32 */
            leads: number;
            /** Format: int32 */
            leadCalls: number;
            /** Format: int32 */
            onlineBooking: number;
            /** Format: int32 */
            manualBooking: number;
            /** Format: int32 */
            bookedJobs: number;
            /** Format: int32 */
            ranJobs: number;
            /** Format: int32 */
            soldJobs: number;
            /** Format: decimal */
            revenue: number;
            /** Format: decimal */
            potentialRevenue: number;
            /** Format: double */
            bookingRate?: number | null;
            /** Format: double */
            avgTicket?: number | null;
        };
        /** @enum {string} */
        "Marketing.Ads.Contracts.Performance.PerformanceSegmentationType": "Campaign" | "AdGroup" | "Keyword";
        "Marketing.Ads.V2.CreateScheduledJobAttributionRequest": {
            /** @description The web session that the entity should be attributed to */
            webSessionData: components["schemas"]["Marketing.Ads.V2.WebSessionData"];
            /**
             * Format: int64
             * @description The id of the booking entity in ServiceTitan.
             */
            jobId: number;
        };
        "Marketing.Ads.V2.CreateWebBookingAttributionRequest": {
            /** @description The web session that the entity should be attributed to */
            webSessionData: components["schemas"]["Marketing.Ads.V2.WebSessionData"];
            /**
             * Format: int64
             * @description The id of the booking entity in ServiceTitan.
             */
            bookingId: number;
        };
        "Marketing.Ads.V2.CreateWebLeadFormAttributionRequest": {
            /** @description The web session that the entity should be attributed to */
            webSessionData: components["schemas"]["Marketing.Ads.V2.WebSessionData"];
            /**
             * Format: int64
             * @description The id of the lead entity (captured from a web form) in ServiceTitan.
             */
            leadId: number;
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
    AttributedLeads_Get: {
        parameters: {
            query: {
                /** @description Gets or sets the start date and time in UTC for the filtering period. */
                fromUtc: string;
                /** @description Gets or sets the end date and time in UTC for the filtering period. */
                toUtc: string;
                /**
                 * @description Gets or sets the type of lead for filtering purposes. Possible values are:
                 *     LeadType.Call
                 *     LeadType.WebBooking
                 *     LeadType.WebLeadForm
                 *     LeadType.ManualJob
                 *     If null, data for all lead types is returned.\
                 *     Values: [Call, WebBooking, WebLeadForm, ManualJob]
                 */
                leadType?: string & components["schemas"]["Marketing.Ads.Client.LeadType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
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
                     *           "dateTime": "string",
                     *           "leadType": 1,
                     *           "attribution": {
                     *             "utmSource": "string",
                     *             "utmMedium": "string",
                     *             "utmCampaign": "string",
                     *             "landingPageUrl": "string",
                     *             "referrerUrl": "string",
                     *             "clickId": "string",
                     *             "gbraid": "string",
                     *             "wbraid": "string",
                     *             "stCampaignId": 0,
                     *             "originalCampaign": "string",
                     *             "attributionOverwriteType": {},
                     *             "attributionOverwriteId": 0,
                     *             "overwrittenBookingJobId": 0,
                     *             "adGroupId": "string",
                     *             "adGroupName": "string",
                     *             "keywordId": "string",
                     *             "keywordName": "string"
                     *           },
                     *           "job": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "call": {
                     *             "duration": "string",
                     *             "id": 0,
                     *             "type": "string",
                     *             "source": "string",
                     *             "callerNumber": "string",
                     *             "trackingNumber": "string",
                     *             "excusedReason": "string"
                     *           },
                     *           "leadForm": {
                     *             "leadNumber": 0,
                     *             "leadStatus": "string",
                     *             "notes": "string"
                     *           },
                     *           "booking": {
                     *             "id": 0
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Marketing.Ads.Contracts.AttributedLeads.GetAttributedLeadsResponse"];
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
    CapacityAwarenessWarning_Get: {
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
                     * @example {
                     *       "tenantId": 0,
                     *       "tenantName": "string",
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "campaignName": "string",
                     *           "warningType": "string",
                     *           "businessUnits": [
                     *             "string"
                     *           ],
                     *           "lookaheadWindow": 0,
                     *           "thresholdValue": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Marketing.Ads.Contracts.CapacityAwarenessWarningQueryResult"];
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
    ExternalCallAttributions_Create: {
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
                 *       "webSessionData": {
                 *         "landingPageUrl": "string",
                 *         "referrerUrl": "string",
                 *         "gclid": "string",
                 *         "gbraid": "string",
                 *         "wbraid": "string",
                 *         "fbclid": "string",
                 *         "msclkid": "string",
                 *         "utmSource": "string",
                 *         "utmMedium": "string",
                 *         "utmCampaign": "string",
                 *         "utmAdgroup": "string",
                 *         "utmTerm": "string",
                 *         "utmContent": "string",
                 *         "googleAnalyticsClientId": "string"
                 *       },
                 *       "externalCallData": {
                 *         "customerPhoneNumber": "string",
                 *         "forwardingPhoneNumber": "string",
                 *         "trackingPhoneNumber": "string",
                 *         "callStartedOnUtc": "string"
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Marketing.Ads.V2.CreateExternalCallAttributionRequest"];
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
    Performance_Get: {
        parameters: {
            query: {
                /** @description Gets or sets the start date and time in UTC for the filtering period. */
                fromUtc: string;
                /** @description Gets or sets the end date and time in UTC for the filtering period. */
                toUtc: string;
                /**
                 * @description Gets or sets the type of performance segmentation for filtering purposes. Possible values are:
                 *     PerformanceSegmentationType.Campaign
                 *     PerformanceSegmentationType.AdGroup
                 *     PerformanceSegmentationType.Keyword\
                 *     Values: [Campaign, AdGroup, Keyword]
                 */
                performanceSegmentationType: components["schemas"]["Marketing.Ads.Contracts.Performance.PerformanceSegmentationType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
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
                     *           "campaign": {
                     *             "id": 0,
                     *             "externalId": 0,
                     *             "name": "string",
                     *             "category": "string",
                     *             "launchDate": "string",
                     *             "status": "None"
                     *           },
                     *           "adGroup": {
                     *             "id": "string",
                     *             "name": "string",
                     *             "status": {}
                     *           },
                     *           "keyword": {
                     *             "id": "string",
                     *             "name": "string",
                     *             "status": {}
                     *           },
                     *           "digitalStats": {
                     *             "impressionShare": 0,
                     *             "impressions": 0,
                     *             "clicks": 0,
                     *             "averageCPC": 0,
                     *             "conversions": 0,
                     *             "allConversions": 0,
                     *             "cost": 0,
                     *             "clickRate": 0,
                     *             "costPerConversion": 0,
                     *             "conversionRate": 0
                     *           },
                     *           "leadStats": {
                     *             "leads": 0,
                     *             "leadCalls": 0,
                     *             "onlineBooking": 0,
                     *             "manualBooking": 0,
                     *             "bookedJobs": 0,
                     *             "ranJobs": 0,
                     *             "soldJobs": 0,
                     *             "revenue": 0,
                     *             "potentialRevenue": 0,
                     *             "bookingRate": 0,
                     *             "avgTicket": 0
                     *           },
                     *           "returnOnInvestment": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Marketing.Ads.Contracts.Performance.GetPerformanceResponse"];
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
    ScheduledJobAttributions_Create: {
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
                 *       "webSessionData": {
                 *         "landingPageUrl": "string",
                 *         "referrerUrl": "string",
                 *         "gclid": "string",
                 *         "gbraid": "string",
                 *         "wbraid": "string",
                 *         "fbclid": "string",
                 *         "msclkid": "string",
                 *         "utmSource": "string",
                 *         "utmMedium": "string",
                 *         "utmCampaign": "string",
                 *         "utmAdgroup": "string",
                 *         "utmTerm": "string",
                 *         "utmContent": "string",
                 *         "googleAnalyticsClientId": "string"
                 *       },
                 *       "jobId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Marketing.Ads.V2.CreateScheduledJobAttributionRequest"];
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
    WebBookingAttributions_Create: {
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
                 *       "webSessionData": {
                 *         "landingPageUrl": "string",
                 *         "referrerUrl": "string",
                 *         "gclid": "string",
                 *         "gbraid": "string",
                 *         "wbraid": "string",
                 *         "fbclid": "string",
                 *         "msclkid": "string",
                 *         "utmSource": "string",
                 *         "utmMedium": "string",
                 *         "utmCampaign": "string",
                 *         "utmAdgroup": "string",
                 *         "utmTerm": "string",
                 *         "utmContent": "string",
                 *         "googleAnalyticsClientId": "string"
                 *       },
                 *       "bookingId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Marketing.Ads.V2.CreateWebBookingAttributionRequest"];
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
    WebLeadFormAttributions_Create: {
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
                 *       "webSessionData": {
                 *         "landingPageUrl": "string",
                 *         "referrerUrl": "string",
                 *         "gclid": "string",
                 *         "gbraid": "string",
                 *         "wbraid": "string",
                 *         "fbclid": "string",
                 *         "msclkid": "string",
                 *         "utmSource": "string",
                 *         "utmMedium": "string",
                 *         "utmCampaign": "string",
                 *         "utmAdgroup": "string",
                 *         "utmTerm": "string",
                 *         "utmContent": "string",
                 *         "googleAnalyticsClientId": "string"
                 *       },
                 *       "leadId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Marketing.Ads.V2.CreateWebLeadFormAttributionRequest"];
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
}
