// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/dynamic-value-sets/{dynamicSetId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List values of given dynamic set including key and display name */
        get: operations["DynamicValueSets_GetDynamicSet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/report-categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List categories for existing  reports */
        get: operations["ReportCategories_GetCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/report-category/{report_category}/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List reports within given category */
        get: operations["ReportCategoryReports_GetReports"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/report-category/{report_category}/reports/{reportId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get report description including input parameters and output fields etc.
         *     Take a note that the report description isn't fixed and may be changed by the report owner.
         */
        get: operations["ReportCategoryReports_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/report-category/{report_category}/reports/{reportId}/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get report data. The result is based on current report description which isn't constant in general.
         *     Beware that report columns may be changed. Result field names are listed alongside the data in the response
         *     to validate that all the requested columns are there.
         */
        post: operations["ReportCategoryReports_GetData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/report-category/{report_category}/reports/{reportId}/data/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start a long-running report data query. Returns 200 with the report payload streamed straight from
         *     the result blob if the query completes within the inline timeout (~10s); otherwise returns 202 with
         *     a token to poll the result endpoint.
         */
        post: operations["ReportCategoryReports_StartGetData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/data-queries/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Poll the result of a long-running report data query. On Success, the gzipped JSON blob is streamed
         *     directly to the client (gzip pass-through when the client accepts gzip, decompress otherwise).
         */
        get: operations["ReportDataQueries_Get"];
        put?: never;
        post?: never;
        /**
         * Cancel a long-running report data query. The associated background task (if any) is signalled to
         *     stop and the token is released, freeing the per-tenant slot. Always returns 204 on success even if
         *     the task has already finished — the binding is removed in either case.
         */
        delete: operations["ReportDataQueries_Cancel"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * @description Rows of corresponding standard dynamic set. Types of columns are generally arbitrary
         *     and defined by the dynamic set (may be number or string etc)
         */
        "Reporting.V2.DynamicSetResponse": {
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
            data: unknown[][];
            /** @description Describes header row of data */
            fields: components["schemas"]["Reporting.V2.HeaderField"][];
        };
        "Reporting.V2.HeaderField": {
            /** @description Unique name of the field */
            name: string;
            /** @description Display name of the field */
            label: string;
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
        "PaginatedResponse_Of_Reporting.V2.ReportCategoryListItem": {
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
            data: components["schemas"]["Reporting.V2.ReportCategoryListItem"][];
        };
        "Reporting.V2.ReportCategoryListItem": {
            /** @description ID of report catogory for safe use in report endpoints */
            id: string;
            /** @description Display name of the report category */
            name: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Reporting.V2.ReportListItem": {
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
            data: components["schemas"]["Reporting.V2.ReportListItem"][];
        };
        "Reporting.V2.ReportListItem": {
            /**
             * Format: int64
             * @description Report unique identifier.
             *     Use this value to request detailed report information, the actual data, etc.
             *     Once the report is created the ID cannot be changed
             */
            id: number;
            /**
             * @description Display name of the report.
             *     Do not use the name as the report identifier because it can be modified
             *     and any references based on the old value would stop working
             */
            name: string;
            /** @description Description about the report */
            description?: string | null;
        };
        "Reporting.V2.ReportResponse": {
            /**
             * Format: int64
             * @description Report unique identifier
             */
            id: number;
            /** @description Display name of the report */
            name: string;
            /** @description Description about the report */
            description?: string | null;
            /**
             * Format: date-time
             * @description Time when the report structure was changed
             */
            modifiedOn: string;
            /** @description Defines the parameters that the report expects when requesting data */
            parameters: components["schemas"]["Reporting.V2.ReportParameter"][];
            /** @description Describes fields/columns returned by the report when requesting data */
            fields: components["schemas"]["Reporting.V2.ReportField"][];
        };
        "Reporting.V2.ReportParameter": {
            /** @description Unique name */
            name: string;
            /** @description Display name */
            label: string;
            /** @description Data type of element for the parameter */
            dataType: components["schemas"]["Reporting.V2.DataType"];
            /** @description Determines whether the filter expects array of elements */
            isArray: boolean;
            /** @description Indicater if the parameter has to be specified of not */
            isRequired: boolean;
            /** @description If the filter accepts only certain values as the input this object defines what those values should be */
            acceptValues?: components["schemas"]["Reporting.V2.ParameterPossibleValues"] | null;
        };
        /** @enum {string} */
        "Reporting.V2.DataType": "String" | "Number" | "Boolean" | "Date" | "Time";
        "Reporting.V2.ParameterPossibleValues": {
            /** @description Describes key column and then value column of possible value rows */
            fields: components["schemas"]["Reporting.V2.HeaderField"][];
            /**
             * @description If values are based on a dynamic list (e.g. a list of the existing Business Units or Technicians)
             *     then this object defines identifier of the value set to get from the corresponding endpoint
             */
            dynamicSetId?: string | null;
            /** @description A predefined list of the values accepted */
            values?: unknown[][] | null;
        };
        "Reporting.V2.ReportField": {
            /** @description Field unique identifier */
            name: string;
            /** @description Display name of the field. This is the same label that is displayed in the reporting UI */
            label: string;
            /** @description Value data type for the field/column */
            dataType: components["schemas"]["Reporting.V2.DataType"];
        };
        /** @description Rows of the requested report. Types of columns are defined by the report fields' definition. */
        "Reporting.V2.ReportDataResponse": {
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
            data: unknown[][];
            /** @description Describes row headers/columns of returned rows */
            fields: components["schemas"]["Reporting.V2.HeaderField"][];
        };
        "Reporting.V2.ReportDataRequest": {
            /** @description List of name/value for input parameters of the report */
            parameters: components["schemas"]["Reporting.V2.ReportDataParameter"][];
        };
        "Reporting.V2.ReportDataParameter": {
            /** @description Parameter name */
            name: string;
            /** @description Value of the parameter based of its descrition (data type etc.) */
            value?: null;
        };
        /**
         * @description Returned with HTTP 202 when an asynchronous report data request is still running.
         *     Poll the result endpoint with the supplied token to retrieve the report payload.
         */
        "Reporting.V2.ReportDataPendingResponse": {
            /** @description Current status of the long-running query */
            status: components["schemas"]["Reporting.V2.ReportDataAsyncStatus"];
            /** @description Token used to poll the result endpoint */
            token: string;
        };
        /**
         * @description Status of an asynchronous report data request returned alongside HTTP 202.
         *     `Success` is never returned with 202 — it is delivered with HTTP 200 and the report payload.
         * @enum {string}
         */
        "Reporting.V2.ReportDataAsyncStatus": "NotStarted" | "InProgress";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    DynamicValueSets_GetDynamicSet: {
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
                /** @description ID of dynamic set taken from a report description */
                dynamicSetId: string;
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
                     *         [
                     *           {}
                     *         ]
                     *       ],
                     *       "fields": [
                     *         {
                     *           "name": "string",
                     *           "label": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.DynamicSetResponse"];
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
            /** @description There is no such dynamic value set */
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
    ReportCategories_GetCategories: {
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
                     *           "name": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Reporting.V2.ReportCategoryListItem"];
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
    ReportCategoryReports_GetReports: {
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
                /** @description ID of category taken from the category list endpoint */
                report_category: string;
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
                     *           "description": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Reporting.V2.ReportListItem"];
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
            /** @description There is no such category */
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
    ReportCategoryReports_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of category taken from the category list endpoint */
                report_category: string;
                /** @description ID of report within the category */
                reportId: number;
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
                     *       "description": "string",
                     *       "modifiedOn": "string",
                     *       "parameters": [
                     *         {
                     *           "name": "string",
                     *           "label": "string",
                     *           "dataType": {},
                     *           "isArray": true,
                     *           "isRequired": true,
                     *           "acceptValues": {
                     *             "fields": [
                     *               {
                     *                 "name": "string",
                     *                 "label": "string"
                     *               }
                     *             ],
                     *             "dynamicSetId": "string",
                     *             "values": [
                     *               [
                     *                 {}
                     *               ]
                     *             ]
                     *           }
                     *         }
                     *       ],
                     *       "fields": [
                     *         {
                     *           "name": "string",
                     *           "label": "string",
                     *           "dataType": {}
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportResponse"];
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
            /** @description There is no such category / There is no such report with the category */
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
    ReportCategoryReports_GetData: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (1000 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description ID of category taken from the category list endpoint */
                report_category: string;
                /** @description ID of report within the category */
                reportId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Report input parameter values */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "parameters": [
                 *         {
                 *           "name": "string",
                 *           "value": {}
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Reporting.V2.ReportDataRequest"];
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
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         [
                     *           {}
                     *         ]
                     *       ],
                     *       "fields": [
                     *         {
                     *           "name": "string",
                     *           "label": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportDataResponse"];
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
            /** @description There is no such category / There is no such report with the category */
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
    ReportCategoryReports_StartGetData: {
        parameters: {
            query?: {
                /** @description Page number (1-based, 1 by default) */
                page?: number;
                /** @description How many records to return (1000 by default) */
                pageSize?: number;
                /**
                 * @description When true and the report does not complete inline within the start handler's window, fires a
                 *     tn.rpr.report-data-ready webhook to tenant subscribers when the long-running task finishes
                 *     (Success or Error). Default false.
                 */
                notifyWhenReady?: boolean;
            };
            header?: never;
            path: {
                report_category: string;
                reportId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "parameters": [
                 *         {
                 *           "name": "string",
                 *           "value": {}
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Reporting.V2.ReportDataRequest"];
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
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         [
                     *           {}
                     *         ]
                     *       ],
                     *       "fields": [
                     *         {
                     *           "name": "string",
                     *           "label": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportDataResponse"];
                };
            };
            /** @description The request has been accepted for processing */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "status": {},
                     *       "token": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportDataPendingResponse"];
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
    ReportDataQueries_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
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
                     *         [
                     *           {}
                     *         ]
                     *       ],
                     *       "fields": [
                     *         {
                     *           "name": "string",
                     *           "label": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportDataResponse"];
                };
            };
            /** @description The request has been accepted for processing */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "status": {},
                     *       "token": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Reporting.V2.ReportDataPendingResponse"];
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
    ReportDataQueries_Cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
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
            /** @description The request has succeeded, no content to return */
            204: {
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
}
