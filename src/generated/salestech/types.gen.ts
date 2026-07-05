// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/estimates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Estimates_Get"];
        put: operations["Estimates_Update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Estimates_GetList"];
        put?: never;
        post: operations["Estimates_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Estimates_GetItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/{id}/sell": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["Estimates_Sell"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/{id}/unsell": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["Estimates_Unsell"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/{id}/dismiss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["Estimates_Dismiss"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/{id}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["Estimates_PutItem"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/{id}/items/{itemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["Estimates_DeleteItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/estimates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for estimates */
        get: operations["EstimatesExport_Estimates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimates/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for estimates (legacy endpoint) */
        get: operations["EstimatesExport_EstimatesAsyncLegacy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/status/estimates/{id}/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get estimate status change details along with UTC timestamp. */
        get: operations["EstimatesStatus_GetEstimateStatusChanges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimate-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a paginated list of estimate templates. */
        get: operations["EstimateTemplates_Get"];
        put?: never;
        /** Creates a new estimate template. */
        post: operations["EstimateTemplates_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/estimate-templates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a single estimate template by ID. */
        get: operations["EstimateTemplates_GetById"];
        put?: never;
        post?: never;
        /** Deactivates an estimate template. */
        delete: operations["EstimateTemplates_Delete"];
        options?: never;
        head?: never;
        /** Updates an existing estimate template. */
        patch: operations["EstimateTemplates_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/proposal-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of proposal templates. */
        get: operations["ProposalTemplates_Get"];
        put?: never;
        /** Creates a new proposal template. */
        post: operations["ProposalTemplates_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/proposal-templates/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a single proposal template by ID. */
        get: operations["ProposalTemplates_GetById"];
        put?: never;
        post?: never;
        /** Deactivates a proposal template. The template is not deleted and can be reactivated via PATCH. */
        delete: operations["ProposalTemplates_Delete"];
        options?: never;
        head?: never;
        /** Updates an existing proposal template. Only provided fields are changed; omitted fields are left unchanged. */
        patch: operations["ProposalTemplates_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/proposal-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProposalTypes_Get"];
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
        "Estimates.V2.EstimateResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            projectId?: number | null;
            /** Format: int64 */
            locationId?: number | null;
            /** Format: int64 */
            customerId?: number | null;
            name?: string | null;
            jobNumber?: string | null;
            status?: components["schemas"]["Estimates.V2.EstimateStatusModel"] | null;
            reviewStatus: components["schemas"]["Estimates.Types.EstimateReviewStatus"];
            summary?: string | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            soldOn?: string | null;
            /** Format: int64 */
            soldBy?: number | null;
            active: boolean;
            items?: components["schemas"]["Estimates.V2.EstimateItemResponse"][] | null;
            externalLinks?: components["schemas"]["Estimates.V2.ExternalLinkResponse"][] | null;
            /** Format: decimal */
            subtotal: number;
            /** Format: decimal */
            tax: number;
            /** Format: int64 */
            businessUnitId?: number | null;
            businessUnitName?: string | null;
            isRecommended: boolean;
            /** Format: int64 */
            budgetCodeId?: number | null;
            isChangeOrder: boolean;
            proposalTagName?: string | null;
            /** Format: decimal */
            depositAmount?: number | null;
            /** Format: decimal */
            depositPercent?: number | null;
            requireDepositOnSignature?: boolean | null;
        };
        "Estimates.V2.EstimateStatusModel": {
            /** Format: int32 */
            value: number;
            name: string;
        };
        /** @enum {string} */
        "Estimates.Types.EstimateReviewStatus": "None" | "NeedsApproval" | "Approved" | "NotApproved";
        "Estimates.V2.EstimateItemResponse": {
            /** Format: int64 */
            id: number;
            sku: components["schemas"]["Estimates.V2.SkuModel"];
            skuAccount: string;
            /** Format: html */
            description: string;
            /** Format: int64 */
            membershipTypeId?: number | null;
            /** Format: decimal */
            qty: number;
            /** Format: decimal */
            unitRate: number;
            /** Format: decimal */
            total: number;
            /** Format: decimal */
            unitCost: number;
            /** Format: decimal */
            totalCost: number;
            itemGroupName: string;
            /** Format: int64 */
            itemGroupRootId?: number | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            chargeable?: boolean | null;
            /**
             * Format: int64
             * @description The invoice item which was created from this estimate item.
             */
            invoiceItemId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
        };
        "Estimates.V2.SkuModel": {
            /** Format: int64 */
            id: number;
            name: string;
            displayName: string;
            type: string;
            /** Format: decimal */
            soldHours: number;
            /** Format: int64 */
            generalLedgerAccountId: number;
            generalLedgerAccountName: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        "Estimates.V2.ExternalLinkResponse": {
            name: string;
            url: string;
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
        "PaginatedResponse_Of_Estimates.V2.EstimateResponse": {
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
            data: components["schemas"]["Estimates.V2.EstimateResponse"][];
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Estimates.V2.EstimateItemResponse": {
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
            data: components["schemas"]["Estimates.V2.EstimateItemResponse"][];
        };
        "Estimates.V2.CreateEstimateRequest": {
            name?: string | null;
            summary?: string | null;
            /** Format: decimal */
            tax?: number | null;
            status?: components["schemas"]["Estimates.Types.EstimateStatus"] | null;
            reviewStatus?: components["schemas"]["Estimates.Types.EstimateReviewStatus"] | null;
            /** Format: int64 */
            soldBy?: number | null;
            isRecommended?: boolean | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Estimates.V2.EstimateItemCreateUpdateRequest"][] | null;
            externalLinks?: components["schemas"]["Estimates.V2.ExternalLinkInModel"][] | null;
            useDefaultProjectLabels?: boolean | null;
            /** Format: decimal */
            depositAmount?: number | null;
            /** Format: decimal */
            depositPercent?: number | null;
            requireDepositOnSignature?: boolean | null;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            projectId?: number | null;
            /** Format: int64 */
            locationId?: number | null;
        };
        /** @enum {string} */
        "Estimates.Types.EstimateStatus": "Open" | "Sold" | "Dismissed";
        "Estimates.V2.EstimateItemCreateUpdateRequest": {
            /** Format: int64 */
            id?: number | null;
            /** Format: int64 */
            skuId?: number | null;
            skuName?: string | null;
            /** Format: int64 */
            parentItemId?: number | null;
            /** Format: html */
            description?: string | null;
            isAddOn?: boolean | null;
            /** Format: decimal */
            quantity?: number | null;
            /** Format: decimal */
            unitPrice?: number | null;
            skipUpdatingMembershipPrices?: boolean | null;
            itemGroupName?: string | null;
            /** Format: int64 */
            itemGroupRootId?: number | null;
            chargeable?: boolean | null;
            useDefaultProjectLabels?: boolean | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: decimal */
            unitCost?: number;
        };
        "Estimates.V2.ExternalLinkInModel": {
            name?: string | null;
            url?: string | null;
        };
        "Estimates.V2.UpdateEstimateRequest": {
            name?: string | null;
            summary?: string | null;
            /** Format: decimal */
            tax?: number | null;
            status?: components["schemas"]["Estimates.Types.EstimateStatus"] | null;
            reviewStatus?: components["schemas"]["Estimates.Types.EstimateReviewStatus"] | null;
            /** Format: int64 */
            soldBy?: number | null;
            isRecommended?: boolean | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Estimates.V2.EstimateItemCreateUpdateRequest"][] | null;
            externalLinks?: components["schemas"]["Estimates.V2.ExternalLinkInModel"][] | null;
            useDefaultProjectLabels?: boolean | null;
            /** Format: decimal */
            depositAmount?: number | null;
            /** Format: decimal */
            depositPercent?: number | null;
            requireDepositOnSignature?: boolean | null;
        };
        "Estimates.V2.SellRequest": {
            /** Format: int64 */
            soldBy: number;
        };
        "Estimates.V2.EstimateItemUpdateResponse": {
            /** Format: int64 */
            id: number;
            sku: components["schemas"]["Estimates.V2.SkuModel"];
            skuAccount: string;
            /** Format: html */
            description: string;
            /** Format: int64 */
            membershipTypeId?: number | null;
            /** Format: decimal */
            qty: number;
            /** Format: decimal */
            unitRate: number;
            /** Format: decimal */
            total: number;
            /** Format: decimal */
            unitCost: number;
            /** Format: decimal */
            totalCost: number;
            itemGroupName: string;
            /** Format: int64 */
            itemGroupRootId?: number | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            chargeable?: boolean | null;
            /**
             * Format: int64
             * @description The invoice item which was created from this estimate item.
             */
            invoiceItemId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: int64 */
            estimateId: number;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Estimates.V2.ExportEstimatesResponse": {
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
            data: components["schemas"]["Estimates.V2.ExportEstimatesResponse"][];
        };
        "Estimates.V2.ExportEstimatesResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            projectId?: number | null;
            /** Format: int64 */
            locationId?: number | null;
            /** Format: int64 */
            customerId?: number | null;
            name?: string | null;
            jobNumber?: string | null;
            status?: components["schemas"]["Estimates.V2.EstimateStatusModel"] | null;
            reviewStatus: components["schemas"]["Estimates.Types.EstimateReviewStatus"];
            summary?: string | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            soldOn?: string | null;
            /** Format: int64 */
            soldBy?: number | null;
            active: boolean;
            items?: components["schemas"]["Estimates.V2.EstimateItemResponse"][] | null;
            externalLinks?: components["schemas"]["Estimates.V2.ExternalLinkResponse"][] | null;
            /** Format: decimal */
            subtotal: number;
            /** Format: decimal */
            tax: number;
            /** Format: int64 */
            businessUnitId?: number | null;
            businessUnitName?: string | null;
            isRecommended: boolean;
            /** Format: int64 */
            budgetCodeId?: number | null;
            isChangeOrder: boolean;
            proposalTagName?: string | null;
            /** Format: decimal */
            depositAmount?: number | null;
            /** Format: decimal */
            depositPercent?: number | null;
            requireDepositOnSignature?: boolean | null;
        };
        "Estimates.V2.EstimateStatusChangesResponse": {
            /**
             * Format: int64
             * @description ID of the status change record
             */
            id: number;
            /** @description Previous status value */
            oldStatus?: string | null;
            /** @description New status value */
            newStatus?: string | null;
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
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Estimates.V2.EstimateTemplateResponse": {
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
            data: components["schemas"]["Estimates.V2.EstimateTemplateResponse"][];
        };
        "Estimates.V2.EstimateTemplateResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            internalName: string;
            /** Format: html */
            summary?: string | null;
            mode: components["schemas"]["EstimateTemplates.EstimateTemplateMode"];
            active: boolean;
            /** Format: int64 */
            businessUnitId?: number | null;
            /** Format: decimal */
            totalCost: number;
            /** Format: decimal */
            totalPrice: number;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            items: components["schemas"]["Estimates.V2.EstimateTemplateItemResponse"][];
        };
        /** @enum {string} */
        "EstimateTemplates.EstimateTemplateMode": "Dynamic" | "Static";
        "Estimates.V2.EstimateTemplateItemResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            skuId: number;
            skuType: components["schemas"]["Pricebook.Types.SkuType"];
            skuName?: string | null;
            /** Format: html */
            description?: string | null;
            /** Format: decimal */
            quantity: number;
            /** Format: decimal */
            unitPrice: number;
            /** Format: decimal */
            totalPrice: number;
            isAddOn: boolean;
            chargeable?: boolean | null;
            allowDiscounts?: boolean | null;
            /** Format: decimal */
            unitCost: number;
            memo?: string | null;
            /** Format: int32 */
            order: number;
            /**
             * Format: int64
             * @description For add-on items: the ID of the item this is a direct child of.
             */
            parentItemId?: number | null;
            /**
             * Format: int64
             * @description For items that belong to an item group: the ID of the group root item.
             */
            itemGroupParentId?: number | null;
            /** @description Present only on item group root items. Non-null value indicates this item is a group root. */
            itemGroupName?: string | null;
            /** @description Comma-separated project label names associated with this item. */
            projectLabels?: string | null;
        };
        /**
         * @description The type of ISku entity
         * @enum {string}
         */
        "Pricebook.Types.SkuType": "Service" | "Material" | "Equipment" | "PriceModifier";
        "Estimates.V2.CreateEstimateTemplateRequest": {
            name: string;
            internalName: string;
            summary?: string | null;
            mode: components["schemas"]["EstimateTemplates.EstimateTemplateMode"];
            active?: boolean | null;
            /** Format: int64 */
            businessUnitId?: number | null;
            items: components["schemas"]["Estimates.V2.EstimateTemplateItemRequest"][];
        };
        "Estimates.V2.EstimateTemplateItemRequest": {
            /**
             * Format: int64
             * @description For existing items: the item ID to update. Omit or set to null for new items.
             */
            id?: number | null;
            /** Format: int64 */
            skuId: number;
            skuType: components["schemas"]["Pricebook.Types.SkuType"];
            description?: string | null;
            /** Format: decimal */
            quantity: number;
            /**
             * Format: decimal
             * @description Unit price of the item. Required for Static templates; omit for Dynamic templates where pricing is computed from the pricebook.
             */
            unitPrice?: number | null;
            isAddOn: boolean;
            chargeable?: boolean | null;
            allowDiscounts?: boolean | null;
            /** Format: decimal */
            unitCost?: number | null;
            memo?: string | null;
            /**
             * Format: int64
             * @description For add-on items: the ID of the parent item within this template.
             */
            parentItemId?: number | null;
            /**
             * Format: int64
             * @description For items belonging to an item group: the ID of the group root item within this template.
             */
            itemGroupParentId?: number | null;
            /** @description Set on the group root item to define an item group. Child items reference this item via ItemGroupParentId. */
            itemGroupName?: string | null;
            /** @description Comma-separated project label names. Pass null to leave unchanged, empty string to clear. */
            projectLabels?: string | null;
        };
        "Estimates.V2.UpdateEstimateTemplateRequest": {
            name?: string | null;
            internalName?: string | null;
            /**
             * @description Omit or pass null to leave unchanged.
             *     Note: once set, this field cannot be cleared back to null via PATCH.
             */
            summary?: string | null;
            mode?: components["schemas"]["EstimateTemplates.EstimateTemplateMode"] | null;
            active?: boolean | null;
            /**
             * Format: int64
             * @description Omit or pass null to leave unchanged.
             *     Note: once set, this field cannot be cleared back to null via PATCH.
             */
            businessUnitId?: number | null;
            /** @description When provided, replaces all items on the template. Omit to leave items unchanged. */
            items?: components["schemas"]["Estimates.V2.EstimateTemplateItemRequest"][] | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Estimates.V2.ProposalTemplateResponse": {
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
            data: components["schemas"]["Estimates.V2.ProposalTemplateResponse"][];
        };
        "Estimates.V2.ProposalTemplateResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            description?: string | null;
            active: boolean;
            status: components["schemas"]["EstimateTemplates.Types.ProposalTemplateStatus"];
            /**
             * Format: int64
             * @description ID of the proposal type this template belongs to. Use the GET /proposal-types endpoint to look up proposal types and their options.
             */
            proposalTypeId: number;
            /** @description Name of the proposal type. Denormalized for convenience. */
            proposalTypeName?: string | null;
            businessUnitIds: number[];
            /**
             * @description Maps each proposal type option to the estimate template shown for that option.
             *     Keyed by ProposalTypeOptionId. Providing this field in write requests replaces all existing assignments.
             */
            estimateAssignments: components["schemas"]["Estimates.V2.ProposalTemplateAssignmentResponse"][];
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        /** @enum {string} */
        "EstimateTemplates.Types.ProposalTemplateStatus": "Publish" | "Draft";
        /** @description Links a proposal type option to the estimate template shown when that option is selected. */
        "Estimates.V2.ProposalTemplateAssignmentResponse": {
            /**
             * Format: int64
             * @description ID of the proposal type option. Obtain from GET /proposal-types.
             */
            proposalTypeOptionId: number;
            /**
             * Format: int64
             * @description ID of the estimate template used for this option. Obtain from GET /estimate-templates.
             */
            estimateTemplateId: number;
            /** @description Name of the estimate template. Denormalized for convenience. */
            estimateTemplateName?: string | null;
            /** Format: int32 */
            order: number;
        };
        "Estimates.V2.CreateProposalTemplateRequest": {
            name: string;
            description?: string | null;
            /**
             * Format: int64
             * @description ID of the proposal type this template belongs to. Obtain from GET /proposal-types.
             */
            proposalTypeId: number;
            status?: components["schemas"]["EstimateTemplates.Types.ProposalTemplateStatus"] | null;
            active?: boolean | null;
            businessUnitIds?: number[] | null;
            /**
             * @description Maps proposal type options to estimate templates.
             *     Each ProposalTypeOptionId must be unique within the list.
             */
            estimateAssignments: components["schemas"]["Estimates.V2.ProposalTemplateAssignmentRequest"][];
        };
        "Estimates.V2.ProposalTemplateAssignmentRequest": {
            /**
             * Format: int64
             * @description ID of the proposal type option to assign. Obtain from GET /proposal-types.
             */
            proposalTypeOptionId: number;
            /**
             * Format: int64
             * @description ID of the estimate template to use for this option. Obtain from GET /estimate-templates.
             */
            estimateTemplateId: number;
            /** Format: int32 */
            order: number;
        };
        "Estimates.V2.UpdateProposalTemplateRequest": {
            name?: string | null;
            /**
             * @description Omit or pass null to leave unchanged.
             *     Note: once set, this field cannot be cleared back to null via PATCH.
             */
            description?: string | null;
            /**
             * Format: int64
             * @description ID of the proposal type. Omit to leave unchanged.
             */
            proposalTypeId?: number | null;
            status?: components["schemas"]["EstimateTemplates.Types.ProposalTemplateStatus"] | null;
            active?: boolean | null;
            /** @description When provided, replaces all existing business unit associations. Pass an empty list to remove all. */
            businessUnitIds?: number[] | null;
            /**
             * @description When provided, replaces all existing assignments (full replace, not merge).
             *     Omit to leave assignments unchanged. Pass an empty list to remove all assignments.
             */
            estimateAssignments?: components["schemas"]["Estimates.V2.ProposalTemplateAssignmentRequest"][] | null;
        };
        "Estimates.V2.ProposalTypesResponse": {
            data: components["schemas"]["Estimates.V2.ProposalTypeResponse"][];
        };
        "Estimates.V2.ProposalTypeResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            type: components["schemas"]["EstimateTemplates.Types.ProposalBehaviorType"];
            active: boolean;
            isSystemDefault: boolean;
            isDefault: boolean;
            options: components["schemas"]["Estimates.V2.ProposalTypeOptionResponse"][];
        };
        /** @enum {string} */
        "EstimateTemplates.Types.ProposalBehaviorType": "Progressive" | "Additive";
        "Estimates.V2.ProposalTypeOptionResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: int32 */
            order: number;
            color?: string | null;
            estimateType: components["schemas"]["Estimates.V2.ProposalTypeOptionEstimateType"];
        };
        /** @enum {string} */
        "Estimates.V2.ProposalTypeOptionEstimateType": "Standard" | "Insurance";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Estimates_Get: {
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
                     *       "jobId": 0,
                     *       "projectId": 0,
                     *       "locationId": 0,
                     *       "customerId": 0,
                     *       "name": "string",
                     *       "jobNumber": "string",
                     *       "status": {
                     *         "value": 0,
                     *         "name": "string"
                     *       },
                     *       "reviewStatus": "None",
                     *       "summary": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "soldOn": "string",
                     *       "soldBy": 0,
                     *       "active": true,
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "sku": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "displayName": "string",
                     *             "type": "string",
                     *             "soldHours": 0,
                     *             "generalLedgerAccountId": 0,
                     *             "generalLedgerAccountName": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "skuAccount": "string",
                     *           "description": "string",
                     *           "membershipTypeId": 0,
                     *           "qty": 0,
                     *           "unitRate": 0,
                     *           "total": 0,
                     *           "unitCost": 0,
                     *           "totalCost": 0,
                     *           "itemGroupName": "string",
                     *           "itemGroupRootId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "chargeable": true,
                     *           "invoiceItemId": 0,
                     *           "budgetCodeId": 0
                     *         }
                     *       ],
                     *       "externalLinks": [
                     *         {
                     *           "name": "string",
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "subtotal": 0,
                     *       "tax": 0,
                     *       "businessUnitId": 0,
                     *       "businessUnitName": "string",
                     *       "isRecommended": true,
                     *       "budgetCodeId": 0,
                     *       "isChangeOrder": true,
                     *       "proposalTagName": "string",
                     *       "depositAmount": 0,
                     *       "depositPercent": 0,
                     *       "requireDepositOnSignature": true
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateResponse"];
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
    Estimates_Update: {
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
                 *       "summary": "string",
                 *       "tax": 0,
                 *       "status": {},
                 *       "reviewStatus": {},
                 *       "soldBy": 0,
                 *       "isRecommended": true,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "skuName": "string",
                 *           "parentItemId": 0,
                 *           "description": "string",
                 *           "isAddOn": true,
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "skipUpdatingMembershipPrices": true,
                 *           "itemGroupName": "string",
                 *           "itemGroupRootId": 0,
                 *           "chargeable": true,
                 *           "useDefaultProjectLabels": true,
                 *           "budgetCodeId": 0,
                 *           "unitCost": 0
                 *         }
                 *       ],
                 *       "externalLinks": [
                 *         {
                 *           "name": "string",
                 *           "url": "string"
                 *         }
                 *       ],
                 *       "useDefaultProjectLabels": true,
                 *       "depositAmount": 0,
                 *       "depositPercent": 0,
                 *       "requireDepositOnSignature": true
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.UpdateEstimateRequest"];
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
                     *       "jobId": 0,
                     *       "projectId": 0,
                     *       "locationId": 0,
                     *       "customerId": 0,
                     *       "name": "string",
                     *       "jobNumber": "string",
                     *       "status": {
                     *         "value": 0,
                     *         "name": "string"
                     *       },
                     *       "reviewStatus": "None",
                     *       "summary": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "soldOn": "string",
                     *       "soldBy": 0,
                     *       "active": true,
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "sku": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "displayName": "string",
                     *             "type": "string",
                     *             "soldHours": 0,
                     *             "generalLedgerAccountId": 0,
                     *             "generalLedgerAccountName": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "skuAccount": "string",
                     *           "description": "string",
                     *           "membershipTypeId": 0,
                     *           "qty": 0,
                     *           "unitRate": 0,
                     *           "total": 0,
                     *           "unitCost": 0,
                     *           "totalCost": 0,
                     *           "itemGroupName": "string",
                     *           "itemGroupRootId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "chargeable": true,
                     *           "invoiceItemId": 0,
                     *           "budgetCodeId": 0
                     *         }
                     *       ],
                     *       "externalLinks": [
                     *         {
                     *           "name": "string",
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "subtotal": 0,
                     *       "tax": 0,
                     *       "businessUnitId": 0,
                     *       "businessUnitName": "string",
                     *       "isRecommended": true,
                     *       "budgetCodeId": 0,
                     *       "isChangeOrder": true,
                     *       "proposalTagName": "string",
                     *       "depositAmount": 0,
                     *       "depositPercent": 0,
                     *       "requireDepositOnSignature": true
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateResponse"];
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
    Estimates_GetList: {
        parameters: {
            query?: {
                jobId?: number;
                projectId?: number;
                jobNumber?: string;
                totalGreater?: number;
                totalLess?: number;
                soldById?: number;
                soldByEmployeeId?: number;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                soldAfter?: string;
                soldBefore?: string;
                status?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Applies sorting by specified fields */
                sort?: string;
                /** @description Deprecated: Use Sort parameter instead. Field to sort by (Id, CreatedOn, ModifiedOn). */
                orderBy?: string;
                /** @description Deprecated: Use Sort parameter instead. Sort direction (asc/desc). */
                orderByDirection?: string;
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                locationId?: number;
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
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "locationId": 0,
                     *           "customerId": 0,
                     *           "name": "string",
                     *           "jobNumber": "string",
                     *           "status": {
                     *             "value": 0,
                     *             "name": "string"
                     *           },
                     *           "reviewStatus": "None",
                     *           "summary": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "soldOn": "string",
                     *           "soldBy": 0,
                     *           "active": true,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "sku": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "displayName": "string",
                     *                 "type": "string",
                     *                 "soldHours": 0,
                     *                 "generalLedgerAccountId": 0,
                     *                 "generalLedgerAccountName": "string",
                     *                 "modifiedOn": "string"
                     *               },
                     *               "skuAccount": "string",
                     *               "description": "string",
                     *               "membershipTypeId": 0,
                     *               "qty": 0,
                     *               "unitRate": 0,
                     *               "total": 0,
                     *               "unitCost": 0,
                     *               "totalCost": 0,
                     *               "itemGroupName": "string",
                     *               "itemGroupRootId": 0,
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "chargeable": true,
                     *               "invoiceItemId": 0,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "externalLinks": [
                     *             {
                     *               "name": "string",
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "subtotal": 0,
                     *           "tax": 0,
                     *           "businessUnitId": 0,
                     *           "businessUnitName": "string",
                     *           "isRecommended": true,
                     *           "budgetCodeId": 0,
                     *           "isChangeOrder": true,
                     *           "proposalTagName": "string",
                     *           "depositAmount": 0,
                     *           "depositPercent": 0,
                     *           "requireDepositOnSignature": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Estimates.V2.EstimateResponse"];
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
    Estimates_Create: {
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
                 *       "summary": "string",
                 *       "tax": 0,
                 *       "status": {},
                 *       "reviewStatus": {},
                 *       "soldBy": 0,
                 *       "isRecommended": true,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "skuName": "string",
                 *           "parentItemId": 0,
                 *           "description": "string",
                 *           "isAddOn": true,
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "skipUpdatingMembershipPrices": true,
                 *           "itemGroupName": "string",
                 *           "itemGroupRootId": 0,
                 *           "chargeable": true,
                 *           "useDefaultProjectLabels": true,
                 *           "budgetCodeId": 0,
                 *           "unitCost": 0
                 *         }
                 *       ],
                 *       "externalLinks": [
                 *         {
                 *           "name": "string",
                 *           "url": "string"
                 *         }
                 *       ],
                 *       "useDefaultProjectLabels": true,
                 *       "depositAmount": 0,
                 *       "depositPercent": 0,
                 *       "requireDepositOnSignature": true,
                 *       "jobId": 0,
                 *       "projectId": 0,
                 *       "locationId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.CreateEstimateRequest"];
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
                     *       "jobId": 0,
                     *       "projectId": 0,
                     *       "locationId": 0,
                     *       "customerId": 0,
                     *       "name": "string",
                     *       "jobNumber": "string",
                     *       "status": {
                     *         "value": 0,
                     *         "name": "string"
                     *       },
                     *       "reviewStatus": "None",
                     *       "summary": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "soldOn": "string",
                     *       "soldBy": 0,
                     *       "active": true,
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "sku": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "displayName": "string",
                     *             "type": "string",
                     *             "soldHours": 0,
                     *             "generalLedgerAccountId": 0,
                     *             "generalLedgerAccountName": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "skuAccount": "string",
                     *           "description": "string",
                     *           "membershipTypeId": 0,
                     *           "qty": 0,
                     *           "unitRate": 0,
                     *           "total": 0,
                     *           "unitCost": 0,
                     *           "totalCost": 0,
                     *           "itemGroupName": "string",
                     *           "itemGroupRootId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "chargeable": true,
                     *           "invoiceItemId": 0,
                     *           "budgetCodeId": 0
                     *         }
                     *       ],
                     *       "externalLinks": [
                     *         {
                     *           "name": "string",
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "subtotal": 0,
                     *       "tax": 0,
                     *       "businessUnitId": 0,
                     *       "businessUnitName": "string",
                     *       "isRecommended": true,
                     *       "budgetCodeId": 0,
                     *       "isChangeOrder": true,
                     *       "proposalTagName": "string",
                     *       "depositAmount": 0,
                     *       "depositPercent": 0,
                     *       "requireDepositOnSignature": true
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateResponse"];
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
    Estimates_GetItems: {
        parameters: {
            query?: {
                estimateId?: number;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
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
                /** @description Applies sorting by specified fields */
                sort?: string;
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
                     *           "id": 0,
                     *           "sku": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "displayName": "string",
                     *             "type": "string",
                     *             "soldHours": 0,
                     *             "generalLedgerAccountId": 0,
                     *             "generalLedgerAccountName": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "skuAccount": "string",
                     *           "description": "string",
                     *           "membershipTypeId": 0,
                     *           "qty": 0,
                     *           "unitRate": 0,
                     *           "total": 0,
                     *           "unitCost": 0,
                     *           "totalCost": 0,
                     *           "itemGroupName": "string",
                     *           "itemGroupRootId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "chargeable": true,
                     *           "invoiceItemId": 0,
                     *           "budgetCodeId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Estimates.V2.EstimateItemResponse"];
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
    Estimates_Sell: {
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
                 *       "soldBy": 0
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.SellRequest"];
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
                     *       "jobId": 0,
                     *       "projectId": 0,
                     *       "locationId": 0,
                     *       "customerId": 0,
                     *       "name": "string",
                     *       "jobNumber": "string",
                     *       "status": {
                     *         "value": 0,
                     *         "name": "string"
                     *       },
                     *       "reviewStatus": "None",
                     *       "summary": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "soldOn": "string",
                     *       "soldBy": 0,
                     *       "active": true,
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "sku": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "displayName": "string",
                     *             "type": "string",
                     *             "soldHours": 0,
                     *             "generalLedgerAccountId": 0,
                     *             "generalLedgerAccountName": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "skuAccount": "string",
                     *           "description": "string",
                     *           "membershipTypeId": 0,
                     *           "qty": 0,
                     *           "unitRate": 0,
                     *           "total": 0,
                     *           "unitCost": 0,
                     *           "totalCost": 0,
                     *           "itemGroupName": "string",
                     *           "itemGroupRootId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "chargeable": true,
                     *           "invoiceItemId": 0,
                     *           "budgetCodeId": 0
                     *         }
                     *       ],
                     *       "externalLinks": [
                     *         {
                     *           "name": "string",
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "subtotal": 0,
                     *       "tax": 0,
                     *       "businessUnitId": 0,
                     *       "businessUnitName": "string",
                     *       "isRecommended": true,
                     *       "budgetCodeId": 0,
                     *       "isChangeOrder": true,
                     *       "proposalTagName": "string",
                     *       "depositAmount": 0,
                     *       "depositPercent": 0,
                     *       "requireDepositOnSignature": true
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateResponse"];
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
    Estimates_Unsell: {
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
    Estimates_Dismiss: {
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
    Estimates_PutItem: {
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
                 *       "id": 0,
                 *       "skuId": 0,
                 *       "skuName": "string",
                 *       "parentItemId": 0,
                 *       "description": "string",
                 *       "isAddOn": true,
                 *       "quantity": 0,
                 *       "unitPrice": 0,
                 *       "skipUpdatingMembershipPrices": true,
                 *       "itemGroupName": "string",
                 *       "itemGroupRootId": 0,
                 *       "chargeable": true,
                 *       "useDefaultProjectLabels": true,
                 *       "budgetCodeId": 0,
                 *       "unitCost": 0
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.EstimateItemCreateUpdateRequest"];
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
                     *       "sku": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "displayName": "string",
                     *         "type": "string",
                     *         "soldHours": 0,
                     *         "generalLedgerAccountId": 0,
                     *         "generalLedgerAccountName": "string",
                     *         "modifiedOn": "string"
                     *       },
                     *       "skuAccount": "string",
                     *       "description": "string",
                     *       "membershipTypeId": 0,
                     *       "qty": 0,
                     *       "unitRate": 0,
                     *       "total": 0,
                     *       "unitCost": 0,
                     *       "totalCost": 0,
                     *       "itemGroupName": "string",
                     *       "itemGroupRootId": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "chargeable": true,
                     *       "invoiceItemId": 0,
                     *       "budgetCodeId": 0,
                     *       "estimateId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateItemUpdateResponse"];
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
    Estimates_DeleteItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                itemId: number;
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
        };
    };
    EstimatesExport_Estimates: {
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
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "locationId": 0,
                     *           "customerId": 0,
                     *           "name": "string",
                     *           "jobNumber": "string",
                     *           "status": {
                     *             "value": 0,
                     *             "name": "string"
                     *           },
                     *           "reviewStatus": "None",
                     *           "summary": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "soldOn": "string",
                     *           "soldBy": 0,
                     *           "active": true,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "sku": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "displayName": "string",
                     *                 "type": "string",
                     *                 "soldHours": 0,
                     *                 "generalLedgerAccountId": 0,
                     *                 "generalLedgerAccountName": "string",
                     *                 "modifiedOn": "string"
                     *               },
                     *               "skuAccount": "string",
                     *               "description": "string",
                     *               "membershipTypeId": 0,
                     *               "qty": 0,
                     *               "unitRate": 0,
                     *               "total": 0,
                     *               "unitCost": 0,
                     *               "totalCost": 0,
                     *               "itemGroupName": "string",
                     *               "itemGroupRootId": 0,
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "chargeable": true,
                     *               "invoiceItemId": 0,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "externalLinks": [
                     *             {
                     *               "name": "string",
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "subtotal": 0,
                     *           "tax": 0,
                     *           "businessUnitId": 0,
                     *           "businessUnitName": "string",
                     *           "isRecommended": true,
                     *           "budgetCodeId": 0,
                     *           "isChangeOrder": true,
                     *           "proposalTagName": "string",
                     *           "depositAmount": 0,
                     *           "depositPercent": 0,
                     *           "requireDepositOnSignature": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Estimates.V2.ExportEstimatesResponse"];
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
    EstimatesExport_EstimatesAsyncLegacy: {
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
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "locationId": 0,
                     *           "customerId": 0,
                     *           "name": "string",
                     *           "jobNumber": "string",
                     *           "status": {
                     *             "value": 0,
                     *             "name": "string"
                     *           },
                     *           "reviewStatus": "None",
                     *           "summary": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "soldOn": "string",
                     *           "soldBy": 0,
                     *           "active": true,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "sku": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "displayName": "string",
                     *                 "type": "string",
                     *                 "soldHours": 0,
                     *                 "generalLedgerAccountId": 0,
                     *                 "generalLedgerAccountName": "string",
                     *                 "modifiedOn": "string"
                     *               },
                     *               "skuAccount": "string",
                     *               "description": "string",
                     *               "membershipTypeId": 0,
                     *               "qty": 0,
                     *               "unitRate": 0,
                     *               "total": 0,
                     *               "unitCost": 0,
                     *               "totalCost": 0,
                     *               "itemGroupName": "string",
                     *               "itemGroupRootId": 0,
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "chargeable": true,
                     *               "invoiceItemId": 0,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "externalLinks": [
                     *             {
                     *               "name": "string",
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "subtotal": 0,
                     *           "tax": 0,
                     *           "businessUnitId": 0,
                     *           "businessUnitName": "string",
                     *           "isRecommended": true,
                     *           "budgetCodeId": 0,
                     *           "isChangeOrder": true,
                     *           "proposalTagName": "string",
                     *           "depositAmount": 0,
                     *           "depositPercent": 0,
                     *           "requireDepositOnSignature": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Estimates.V2.ExportEstimatesResponse"];
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
    EstimatesStatus_GetEstimateStatusChanges: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Estimate ID */
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
                     *         "oldStatus": "string",
                     *         "newStatus": "string",
                     *         "createdOn": "string",
                     *         "createdById": 0
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateStatusChangesResponse"][];
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
            /** @description Estimate not found */
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
    EstimateTemplates_Get: {
        parameters: {
            query?: {
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
                modifiedBefore?: string;
                modifiedOnOrAfter?: string;
                page?: number;
                pageSize?: number;
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
                     *           "id": 0,
                     *           "name": "string",
                     *           "internalName": "string",
                     *           "summary": "string",
                     *           "mode": "Dynamic",
                     *           "active": true,
                     *           "businessUnitId": 0,
                     *           "totalCost": 0,
                     *           "totalPrice": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "skuType": "Service",
                     *               "skuName": "string",
                     *               "description": "string",
                     *               "quantity": 0,
                     *               "unitPrice": 0,
                     *               "totalPrice": 0,
                     *               "isAddOn": true,
                     *               "chargeable": true,
                     *               "allowDiscounts": true,
                     *               "unitCost": 0,
                     *               "memo": "string",
                     *               "order": 0,
                     *               "parentItemId": 0,
                     *               "itemGroupParentId": 0,
                     *               "itemGroupName": "string",
                     *               "projectLabels": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Estimates.V2.EstimateTemplateResponse"];
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
    EstimateTemplates_Create: {
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
                 *       "internalName": "string",
                 *       "summary": "string",
                 *       "mode": "Dynamic",
                 *       "active": true,
                 *       "businessUnitId": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "skuType": "Service",
                 *           "description": "string",
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "isAddOn": true,
                 *           "chargeable": true,
                 *           "allowDiscounts": true,
                 *           "unitCost": 0,
                 *           "memo": "string",
                 *           "parentItemId": 0,
                 *           "itemGroupParentId": 0,
                 *           "itemGroupName": "string",
                 *           "projectLabels": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.CreateEstimateTemplateRequest"];
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
                     *       "name": "string",
                     *       "internalName": "string",
                     *       "summary": "string",
                     *       "mode": "Dynamic",
                     *       "active": true,
                     *       "businessUnitId": 0,
                     *       "totalCost": 0,
                     *       "totalPrice": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "skuType": "Service",
                     *           "skuName": "string",
                     *           "description": "string",
                     *           "quantity": 0,
                     *           "unitPrice": 0,
                     *           "totalPrice": 0,
                     *           "isAddOn": true,
                     *           "chargeable": true,
                     *           "allowDiscounts": true,
                     *           "unitCost": 0,
                     *           "memo": "string",
                     *           "order": 0,
                     *           "parentItemId": 0,
                     *           "itemGroupParentId": 0,
                     *           "itemGroupName": "string",
                     *           "projectLabels": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateTemplateResponse"];
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
    EstimateTemplates_GetById: {
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
                     *       "name": "string",
                     *       "internalName": "string",
                     *       "summary": "string",
                     *       "mode": "Dynamic",
                     *       "active": true,
                     *       "businessUnitId": 0,
                     *       "totalCost": 0,
                     *       "totalPrice": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "skuType": "Service",
                     *           "skuName": "string",
                     *           "description": "string",
                     *           "quantity": 0,
                     *           "unitPrice": 0,
                     *           "totalPrice": 0,
                     *           "isAddOn": true,
                     *           "chargeable": true,
                     *           "allowDiscounts": true,
                     *           "unitCost": 0,
                     *           "memo": "string",
                     *           "order": 0,
                     *           "parentItemId": 0,
                     *           "itemGroupParentId": 0,
                     *           "itemGroupName": "string",
                     *           "projectLabels": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateTemplateResponse"];
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
    EstimateTemplates_Delete: {
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
    EstimateTemplates_Update: {
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
                 *       "internalName": "string",
                 *       "summary": "string",
                 *       "mode": {},
                 *       "active": true,
                 *       "businessUnitId": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "skuType": "Service",
                 *           "description": "string",
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "isAddOn": true,
                 *           "chargeable": true,
                 *           "allowDiscounts": true,
                 *           "unitCost": 0,
                 *           "memo": "string",
                 *           "parentItemId": 0,
                 *           "itemGroupParentId": 0,
                 *           "itemGroupName": "string",
                 *           "projectLabels": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.UpdateEstimateTemplateRequest"];
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
                     *       "name": "string",
                     *       "internalName": "string",
                     *       "summary": "string",
                     *       "mode": "Dynamic",
                     *       "active": true,
                     *       "businessUnitId": 0,
                     *       "totalCost": 0,
                     *       "totalPrice": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "skuType": "Service",
                     *           "skuName": "string",
                     *           "description": "string",
                     *           "quantity": 0,
                     *           "unitPrice": 0,
                     *           "totalPrice": 0,
                     *           "isAddOn": true,
                     *           "chargeable": true,
                     *           "allowDiscounts": true,
                     *           "unitCost": 0,
                     *           "memo": "string",
                     *           "order": 0,
                     *           "parentItemId": 0,
                     *           "itemGroupParentId": 0,
                     *           "itemGroupName": "string",
                     *           "projectLabels": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.EstimateTemplateResponse"];
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
    ProposalTemplates_Get: {
        parameters: {
            query?: {
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Filter by proposal type. Obtain proposal type IDs from GET /proposal-types. */
                proposalTypeId?: number;
                modifiedBefore?: string;
                modifiedOnOrAfter?: string;
                page?: number;
                pageSize?: number;
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
                     *           "id": 0,
                     *           "name": "string",
                     *           "description": "string",
                     *           "active": true,
                     *           "status": "Publish",
                     *           "proposalTypeId": 0,
                     *           "proposalTypeName": "string",
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "estimateAssignments": [
                     *             {
                     *               "proposalTypeOptionId": 0,
                     *               "estimateTemplateId": 0,
                     *               "estimateTemplateName": "string",
                     *               "order": 0
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Estimates.V2.ProposalTemplateResponse"];
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
    ProposalTemplates_Create: {
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
                 *       "description": "string",
                 *       "proposalTypeId": 0,
                 *       "status": {},
                 *       "active": true,
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "estimateAssignments": [
                 *         {
                 *           "proposalTypeOptionId": 0,
                 *           "estimateTemplateId": 0,
                 *           "order": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.CreateProposalTemplateRequest"];
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
                     *       "name": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "status": "Publish",
                     *       "proposalTypeId": 0,
                     *       "proposalTypeName": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "estimateAssignments": [
                     *         {
                     *           "proposalTypeOptionId": 0,
                     *           "estimateTemplateId": 0,
                     *           "estimateTemplateName": "string",
                     *           "order": 0
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.ProposalTemplateResponse"];
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
    ProposalTemplates_GetById: {
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
                     *       "name": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "status": "Publish",
                     *       "proposalTypeId": 0,
                     *       "proposalTypeName": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "estimateAssignments": [
                     *         {
                     *           "proposalTypeOptionId": 0,
                     *           "estimateTemplateId": 0,
                     *           "estimateTemplateName": "string",
                     *           "order": 0
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.ProposalTemplateResponse"];
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
    ProposalTemplates_Delete: {
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
    ProposalTemplates_Update: {
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
                 *       "description": "string",
                 *       "proposalTypeId": 0,
                 *       "status": {},
                 *       "active": true,
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "estimateAssignments": [
                 *         {
                 *           "proposalTypeOptionId": 0,
                 *           "estimateTemplateId": 0,
                 *           "order": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.UpdateProposalTemplateRequest"];
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
                     *       "name": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "status": "Publish",
                     *       "proposalTypeId": 0,
                     *       "proposalTypeName": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "estimateAssignments": [
                     *         {
                     *           "proposalTypeOptionId": 0,
                     *           "estimateTemplateId": 0,
                     *           "estimateTemplateName": "string",
                     *           "order": 0
                     *         }
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.ProposalTemplateResponse"];
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
    ProposalTypes_Get: {
        parameters: {
            query?: {
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "type": "Progressive",
                     *           "active": true,
                     *           "isSystemDefault": true,
                     *           "isDefault": true,
                     *           "options": [
                     *             {
                     *               "id": 0,
                     *               "name": "string",
                     *               "order": 0,
                     *               "color": "string",
                     *               "estimateType": "Standard"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.ProposalTypesResponse"];
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
