// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["reviews"];
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
        "PaginatedResponse_Of_ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport": {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            hasMore?: boolean;
            /** Format: int32 */
            totalCount?: number | null;
            data?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Common.Enums.PulledReviewRecommendationStatus": 0 | 1;
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.JobStatus": 0 | 2 | 3 | 4 | 5;
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ResponseType": 0 | 1 | 2;
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewMatchConfidenceLevel": 0 | 1 | 2 | 3 | 4 | 5 | 6;
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport": {
            address?: string | null;
            platform?: string | null;
            authorEmail?: string | null;
            authorName?: string | null;
            review?: string | null;
            reviewType?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewUpdatedStatus"];
            reviewResponse?: string | null;
            /** Format: date-time */
            publishDate?: string;
            /** Format: double */
            rating?: number | null;
            recommendationStatus?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Common.Enums.PulledReviewRecommendationStatus"];
            verificationStatus?: boolean;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            verifiedByUserId?: number | null;
            /** Format: date-time */
            verifiedOn?: string | null;
            isAutoVerified?: boolean | null;
            /** Format: int64 */
            businessUnitId?: number | null;
            /** Format: date-time */
            completedDate?: string | null;
            customerName?: string | null;
            /** Format: int64 */
            customerId?: number | null;
            /** Format: date-time */
            dispatchedDate?: string | null;
            jobStatus?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.JobStatus"];
            jobTypeName?: string | null;
            technicianFullName?: string | null;
            /** Format: int64 */
            technicianId?: number | null;
            externalId?: string | null;
            /** Format: int64 */
            internalId?: number | null;
            /** Format: date-time */
            createdOn?: string;
            /** Format: date-time */
            modifiedOn?: string;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewUpdatedStatus": 0 | 1 | 2;
        /**
         * Format: int32
         * @enum {integer}
         */
        "ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewsReportType": 0 | 1 | 2;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    reviews: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                search?: string;
                reportType?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewsReportType"];
                sort?: string;
                createdOnOrAfter?: string;
                createdBefore?: string;
                modifiedOnOrAfter?: string;
                modifiedBefore?: string;
                fromDate?: string;
                toDate?: string;
                responseTypes?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ResponseType"][];
                locationIds?: number[];
                sources?: string[];
                reviewStatuses?: components["schemas"]["ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewMatchConfidenceLevel"][];
                technicianIds?: number[];
                campaignIds?: number[];
                fromRating?: number;
                toRating?: number;
                includeReviewsWithoutLocation?: boolean;
                includeReviewsWithoutCampaign?: boolean;
                includeReviewsWithoutTechnician?: boolean;
                internalId?: number;
                externalId?: string;
            };
            header?: never;
            path: {
                tenant: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaginatedResponse_Of_ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport"];
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "address": "string",
                     *           "platform": "string",
                     *           "authorEmail": "string",
                     *           "authorName": "string",
                     *           "review": "string",
                     *           "reviewType": 0,
                     *           "reviewResponse": "string",
                     *           "publishDate": "string",
                     *           "rating": 0,
                     *           "recommendationStatus": 0,
                     *           "verificationStatus": true,
                     *           "jobId": 0,
                     *           "verifiedByUserId": 0,
                     *           "verifiedOn": "string",
                     *           "isAutoVerified": true,
                     *           "businessUnitId": 0,
                     *           "completedDate": "string",
                     *           "customerName": "string",
                     *           "customerId": 0,
                     *           "dispatchedDate": "string",
                     *           "jobStatus": 0,
                     *           "jobTypeName": "string",
                     *           "technicianFullName": "string",
                     *           "technicianId": 0,
                     *           "externalId": "string",
                     *           "internalId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport"];
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "address": "string",
                     *           "platform": "string",
                     *           "authorEmail": "string",
                     *           "authorName": "string",
                     *           "review": "string",
                     *           "reviewType": 0,
                     *           "reviewResponse": "string",
                     *           "publishDate": "string",
                     *           "rating": 0,
                     *           "recommendationStatus": 0,
                     *           "verificationStatus": true,
                     *           "jobId": 0,
                     *           "verifiedByUserId": 0,
                     *           "verifiedOn": "string",
                     *           "isAutoVerified": true,
                     *           "businessUnitId": 0,
                     *           "completedDate": "string",
                     *           "customerName": "string",
                     *           "customerId": 0,
                     *           "dispatchedDate": "string",
                     *           "jobStatus": 0,
                     *           "jobTypeName": "string",
                     *           "technicianFullName": "string",
                     *           "technicianId": 0,
                     *           "externalId": "string",
                     *           "internalId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "text/json": components["schemas"]["PaginatedResponse_Of_ServiceTitan.Marketing.ReviewEngine.Services.Models.Reviews.ReviewReport"];
                };
            };
        };
    };
}
