// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of inventory adjustments */
        get: operations["Adjustments_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/adjustments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing adjustment */
        patch: operations["Adjustments_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/adjustments/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields on adjustments */
        patch: operations["Adjustments_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/export/adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for adjustments */
        get: operations["Export_Adjustments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/purchase-orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for purchase orders */
        get: operations["Export_PurchaseOrders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for returns */
        get: operations["Export_Returns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/transfers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for transfers */
        get: operations["Export_Transfers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/inventory-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of inventory template details */
        get: operations["InventoryTemplates_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of purchase orders */
        get: operations["PurchaseOrders_GetList"];
        put?: never;
        /** Create a new purchase order */
        post: operations["PurchaseOrders_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders/requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of purchase order requests */
        get: operations["PurchaseOrders_GetRequests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get purchase order by Id */
        get: operations["PurchaseOrders_GetById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing purchase order */
        patch: operations["PurchaseOrders_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders/{id}/cancellation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Cancel a purchase order */
        patch: operations["PurchaseOrders_Cancel"];
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders/requests/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Approve purchase order request */
        patch: operations["PurchaseOrders_ApproveRequest"];
        trace?: never;
    };
    "/tenant/{tenant}/purchase-orders/requests/{id}/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Reject purchase order request */
        patch: operations["PurchaseOrders_RejectRequest"];
        trace?: never;
    };
    "/tenant/{tenant}/purchase-order-markups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of purchase order markups */
        get: operations["PurchaseOrdersMarkup_Get"];
        put?: never;
        /** Create a new purchase order markup */
        post: operations["PurchaseOrdersMarkup_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/purchase-order-markups/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get purchase order markup by Id */
        get: operations["PurchaseOrdersMarkup_GetById"];
        put?: never;
        post?: never;
        /** Deletes aan existing purchase order markup. */
        delete: operations["PurchaseOrdersMarkup_Delete"];
        options?: never;
        head?: never;
        /** Update an existing purchase order markup */
        patch: operations["PurchaseOrdersMarkup_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/purchase-order-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of purchase order types */
        get: operations["PurchaseOrderTypes_GetList"];
        put?: never;
        /** Create a new Purchase Order Type */
        post: operations["PurchaseOrderTypes_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/purchase-order-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing purchase order type */
        patch: operations["PurchaseOrderTypes_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/receipts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of receipts */
        get: operations["Receipts_GetList"];
        put?: never;
        /** Create a receipt for Purchase Order */
        post: operations["Receipts_CreateReceipt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/receipts/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields on receipts */
        patch: operations["Receipts_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/receipts/{id}/cancellation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Cancel the receipts */
        patch: operations["Receipts_CancelReceipts"];
        trace?: never;
    };
    "/tenant/{tenant}/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of returns */
        get: operations["Returns_GetList"];
        put?: never;
        /** Create a Return */
        post: operations["Returns_CreateReturn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/returns/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields on returns */
        patch: operations["Returns_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/returns/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing Return */
        patch: operations["Returns_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/returns/{id}/cancellation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Cancel a Return */
        patch: operations["Returns_Cancel"];
        trace?: never;
    };
    "/tenant/{tenant}/return-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the list of Return Types */
        get: operations["ReturnTypes_GetList"];
        put?: never;
        /** Create a new Return Type */
        post: operations["ReturnTypes_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/return-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing Return Type */
        patch: operations["ReturnTypes_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/transfers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of transfers */
        get: operations["Transfers_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/transfers/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields on transfers */
        patch: operations["Transfers_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/transfers/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing Transfer */
        patch: operations["Transfers_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/trucks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of trucks */
        get: operations["Trucks_GetList"];
        put?: never;
        /** Create a new truck */
        post: operations["Trucks_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/trucks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing truck */
        patch: operations["Trucks_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/vendors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of vendors */
        get: operations["Vendors_GetList"];
        put?: never;
        /** Create a new vendor */
        post: operations["Vendors_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/vendors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get vendor by Id */
        get: operations["Vendors_GetById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing vendor */
        patch: operations["Vendors_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/vendors/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for vendors */
        get: operations["Vendors_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields on vendors */
        patch: operations["Vendors_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/warehouses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of warehouses */
        get: operations["Warehouses_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/warehouses/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing warehouse */
        patch: operations["Warehouses_Update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.InventoryAdjustmentResponse": {
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
            data: components["schemas"]["Inventory.V2.InventoryAdjustmentResponse"][];
        };
        /** @description Inventory adjustment response */
        "Inventory.V2.InventoryAdjustmentResponse": {
            /**
             * Format: int64
             * @description Inventory adjustment Id
             */
            id: number;
            /** @description Is active */
            active: boolean;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /** @description Inventory Adjustment Type */
            type: string;
            /**
             * Format: int64
             * @description Id of Inventory Location for this adjustment
             */
            inventoryLocationId: number;
            /**
             * Format: int64
             * @description Business Unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Id of project associated with adjustment
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description Id of invoice associated with adjustment
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Employee who created this adjustment
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description memo/summary field
             */
            memo: string;
            /**
             * Format: date-time
             * @description Adjustment date
             */
            date: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time adjustment was modified date
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /** @description Reason the adjustment was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: int64
             * @description Employee who canceled this adjustment
             */
            canceledById?: number | null;
            /**
             * Format: date-time
             * @description time the adjustment was canceled
             */
            dateCanceled?: string | null;
            /**
             * @description List of external data attached to this warehouse,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
            /** @description Collection of adjustment items */
            items: components["schemas"]["Inventory.V2.InventoryAdjustmentItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
        };
        /** @description Represents Batch response */
        "Inventory.V2.BatchResponse": {
            /**
             * Format: int64
             * @description Batch Id
             */
            id: number;
            /** @description Batch number */
            number?: string | null;
            /** @description Batch name */
            name?: string | null;
        };
        /**
         * @description Sync status enum
         * @enum {string}
         */
        "Inventory.V2.SyncStatus": "Pending" | "Posted" | "Exported";
        /** @enum {string} */
        "Inventory.V2.InventoryReasonTransactionCanceled": "NotRequired" | "Duplicate" | "Accidental" | "VendorIssue" | "Other" | "JobCanceled" | "NotWarranty" | "WarrantyRejected";
        "Inventory.V2.ExternalDataModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value: string;
        };
        /** @description Inventory adjustment item response */
        "Inventory.V2.InventoryAdjustmentItemResponse": {
            /**
             * Format: int64
             * @description Item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer item was modified date
             */
            modifiedOn: string;
            /** @description Item name */
            name: string;
            /** @description Item code */
            code: string;
            /**
             * Format: decimal
             * @description Adjustment quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Cost
             */
            cost: number;
            /**
             * Format: decimal
             * @description Total cost
             */
            totalCost: number;
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            createdById?: number | null;
            /** @description Is active */
            active: boolean;
            /**
             * Format: int64
             * @description Id of the budget code for this adjustment item
             */
            budgetCodeId?: number | null;
            /** @description List of serial numbers */
            serialNumbers?: components["schemas"]["Inventory.V2.SerialNumberResponse"][] | null;
        };
        /** @description Represents serial number response */
        "Inventory.V2.SerialNumberResponse": {
            /**
             * Format: int64
             * @description Id of this serial number
             */
            id: number;
            /** @description Serial number value */
            number: string;
        };
        /** @description Represents custom field response */
        "Inventory.V2.CustomFieldResponse": {
            /**
             * Format: int64
             * @description Id of custom field type
             */
            typeId: number;
            /** @description Custom field name */
            name: string;
            /** @description Custom field value */
            value: string;
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
        /**
         * @description Logical operator used for querying custom fields
         * @enum {string}
         */
        "Inventory.V2.LogicalOperator": "And" | "Or";
        /** @description Default response when creating object with a new ID, or updating object by specified ID. */
        ModificationResponse: {
            /**
             * Format: int64
             * @description The ID of created/updated object
             */
            id: number;
        };
        /** @description Represents request to update adjustment */
        "Inventory.V2.UpdateAdjustmentRequest": {
            /** @description Contains a list of external data items that should be attached to this adjustment */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
        };
        "Inventory.V2.ExternalDataUpdateRequest": {
            /**
             * @description External data patch mode.\
             *     "Replace" (default) replaces all existing keys with new values. If job A has custom data with keys X and Y and this field only contains an item
             *     with a key X, then custom data with a key Y on job A will be removed.\
             *     "Merge" will only replace key X in the example above. Keys with null value will be deleted.
             */
            patchMode?: components["schemas"]["Inventory.V2.ExternalDataPatchMode"] | null;
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Inventory.V2.ExternalDataUpdateModel"][];
        };
        /** @enum {string} */
        "Inventory.V2.ExternalDataPatchMode": "Replace" | "Merge";
        "Inventory.V2.ExternalDataUpdateModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value?: string | null;
        };
        /** @description Represents a batch request to update custom fields */
        "Inventory.V2.CustomFieldUpdateRequest": {
            /** @description Collection of custom field update operations */
            operations: components["schemas"]["Inventory.V2.CustomFieldOperationRequest"][];
        };
        /** @description Represents a request to update custom fields on a single transaction */
        "Inventory.V2.CustomFieldOperationRequest": {
            /**
             * Format: int64
             * @description Id of inventory transaction where custom fields will be updated
             */
            objectId: number;
            /** @description Collection of custom fields to be updated */
            customFields: components["schemas"]["Inventory.V2.CustomFieldRequest"][];
        };
        /** @description Request model to update a single custom field */
        "Inventory.V2.CustomFieldRequest": {
            /** @description Custom field name */
            name: string;
            /** @description Custom field value */
            value: string;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Inventory.V2.ExportAdjustmentsResponse": {
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
            data: components["schemas"]["Inventory.V2.ExportAdjustmentsResponse"][];
        };
        "Inventory.V2.ExportAdjustmentsResponse": {
            /**
             * Format: int64
             * @description Inventory adjustment Id
             */
            id: number;
            /** @description Is active */
            active: boolean;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /** @description Inventory Adjustment Type */
            type: string;
            /**
             * Format: int64
             * @description Id of Inventory Location for this adjustment
             */
            inventoryLocationId: number;
            /**
             * Format: int64
             * @description Business Unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Id of project associated with adjustment
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description Id of invoice associated with adjustment
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Employee who created this adjustment
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description memo/summary field
             */
            memo: string;
            /**
             * Format: date-time
             * @description Adjustment date
             */
            date: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time adjustment was modified date
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /** @description Reason the adjustment was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: int64
             * @description Employee who canceled this adjustment
             */
            canceledById?: number | null;
            /**
             * Format: date-time
             * @description time the adjustment was canceled
             */
            dateCanceled?: string | null;
            /**
             * @description List of external data attached to this warehouse,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
            /** @description Collection of adjustment items */
            items: components["schemas"]["Inventory.V2.InventoryAdjustmentItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Inventory.V2.ExportPurchaseOrdersResponse": {
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
            data: components["schemas"]["Inventory.V2.ExportPurchaseOrdersResponse"][];
        };
        "Inventory.V2.ExportPurchaseOrdersResponse": {
            /**
             * Format: int64
             * @description Purchase order Id
             */
            id: number;
            /** @description Purchase order number */
            number: string;
            /**
             * Format: int64
             * @description Id of invoice associated with PO
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Id of job associated with PO
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of project associated with PO
             */
            projectId?: number | null;
            /** @description Status of this PO */
            status: string;
            /**
             * Format: int64
             * @description The purchase order type Id of this PO
             */
            typeId: number;
            /**
             * Format: int64
             * @description Id of vendor for this PO
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Id of technician for this PO
             */
            technicianId?: number | null;
            /** @description Shipping address for this PO */
            shipTo: components["schemas"]["Inventory.V2.AddressResponse"];
            /**
             * Format: int64
             * @description Id of business unit for this PO
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Inventory location Id of PO
             */
            inventoryLocationId?: number | null;
            /**
             * Format: int64
             * @description Batch Id of PO
             */
            batchId?: number | null;
            /**
             * Format: int64
             * @description Id of the budget code for this PO
             */
            budgetCodeId?: number | null;
            /** @description Vendor document number of PO */
            vendorDocumentNumber: string;
            /**
             * Format: date-time
             * @description PO date
             */
            date: string;
            /**
             * Format: date-time
             * @description PO required on date
             */
            requiredOn?: string | null;
            /**
             * Format: date-time
             * @description PO sent on date
             */
            sentOn?: string | null;
            /**
             * Format: date-time
             * @description PO received on date
             */
            receivedOn?: string | null;
            /**
             * Format: date-time
             * @description When PO was created, system date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When PO was last modified, system date
             */
            modifiedOn: string;
            /**
             * Format: decimal
             * @description PO total, including items cost, tax and shipping cost
             */
            total: number;
            /**
             * Format: decimal
             * @description PO tax
             */
            tax: number;
            /**
             * Format: decimal
             * @description PO shipping cost
             */
            shipping: number;
            /**
             * Format: int64
             * @description User who created the PO
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description PO summary/memo
             */
            summary: string;
            /** @description List of PO items */
            items: components["schemas"]["Inventory.V2.PurchaseOrderItemResponse"][];
            /** @description List of custom fields for this PO */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
        };
        /** @description Represents address response */
        "Inventory.V2.AddressResponse": {
            /** @description Street */
            street?: string | null;
            /** @description Unit */
            unit?: string | null;
            /** @description City */
            city?: string | null;
            /** @description State */
            state?: string | null;
            /** @description Zip code */
            zip?: string | null;
            /** @description Country code */
            country?: string | null;
        };
        /** @description Represents purchase order item response */
        "Inventory.V2.PurchaseOrderItemResponse": {
            /**
             * Format: int64
             * @description Item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer item was modified date
             */
            modifiedOn: string;
            /** @description Item name */
            skuName: string;
            /** @description Item code */
            skuCode: string;
            /** @description Item type(material or equipment) */
            skuType: string;
            /** @description Vendor part number for this item */
            vendorPartNumber: string;
            /**
             * Format: decimal
             * @description Item quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Quantity received for this item, PO must have at least one receipt for this to be not 0
             */
            quantityReceived: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /**
             * Format: decimal
             * @description Item total cost
             */
            total: number;
            /** @description List of serial numbers */
            serialNumbers: components["schemas"]["Inventory.V2.SerialNumberResponse"][];
            /** @description Item status */
            status: string;
            /** @description Indicates whether item price is charged to customer */
            chargeable: boolean;
            /**
             * Format: int64
             * @description Id of the budget code for this PO item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Inventory.V2.ExportReturnsResponse": {
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
            data: components["schemas"]["Inventory.V2.ExportReturnsResponse"][];
        };
        "Inventory.V2.ExportReturnsResponse": {
            /**
             * Format: int64
             * @description Return Id
             */
            id: number;
            /** @description Is active */
            active: boolean;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /** @description Status */
            status: components["schemas"]["Inventory.V2.InventoryReturnStatus"];
            /**
             * Format: int64
             * @description Return type Id
             */
            returnTypeId: number;
            /**
             * Format: int64
             * @description Vendor
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Purchase order
             */
            purchaseOrderId?: number | null;
            /**
             * Format: int64
             * @description Job
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Project
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description Budget code Id for the return
             */
            budgetCodeId?: number | null;
            /**
             * Format: int64
             * @description Business unit
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Inventory location
             */
            inventoryLocationId?: number | null;
            /**
             * Format: int64
             * @description Employee who created this return
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description Memo/summary field
             */
            memo: string;
            /**
             * Format: decimal
             * @description Return total, including tax and shipping
             */
            returnAmount: number;
            /**
             * Format: decimal
             * @description Return tax
             */
            taxAmount: number;
            /**
             * Format: decimal
             * @description Return shipping cost
             */
            shippingAmount: number;
            /**
             * Format: date-time
             * @description Return creation date
             */
            returnDate: string;
            /**
             * Format: date-time
             * @description Date when return was actually processed
             */
            returnedOn?: string | null;
            /**
             * Format: date-time
             * @description Date when credit was received
             */
            creditReceivedOn?: string | null;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time return was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            canceledById?: number | null;
            /** @description Reason the transfer was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: date-time
             * @description Transfer canceled date
             */
            dateCanceled?: string | null;
            /** @description Collection of return items */
            items: components["schemas"]["Inventory.V2.InventoryReturnItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
            /**
             * @description List of external data attached to this return,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
        };
        /** @enum {string} */
        "Inventory.V2.InventoryReturnStatus": "Pending" | "Returned" | "CreditReceived" | "Canceled";
        /** @description Inventory return item response */
        "Inventory.V2.InventoryReturnItemResponse": {
            /**
             * Format: int64
             * @description Item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer item was modified date
             */
            modifiedOn: string;
            /** @description Item name */
            name: string;
            /** @description Item code */
            code: string;
            /**
             * Format: decimal
             * @description Return quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /** @description General ledge account information */
            generalLedgerAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** @description Cost of sale account information */
            costOfSaleAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** @description Asset account information */
            assetAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** @description List of serial numbers */
            serialNumbers?: components["schemas"]["Inventory.V2.SerialNumberResponse"][] | null;
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            createdById?: number | null;
            /** @description Is active */
            active: boolean;
            /**
             * Format: int64
             * @description Receipt item Id
             */
            receiptItemId?: number | null;
            /**
             * Format: int64
             * @description Budget code Id for the item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents GL account response */
        "Inventory.V2.GLAccountResponse": {
            /** @description GL Account name */
            name?: string | null;
            /** @description GL Account number */
            number?: string | null;
            /** @description GL Account type */
            type?: string | null;
            /** @description GL Account detail type */
            detailType?: string | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Inventory.V2.ExportTransfersResponse": {
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
            data: components["schemas"]["Inventory.V2.ExportTransfersResponse"][];
        };
        "Inventory.V2.ExportTransfersResponse": {
            /**
             * Format: int64
             * @description Inventory transfer Id
             */
            id: number;
            /** @description Type */
            transferType: string;
            /** @description Status */
            status: string;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /**
             * Format: int64
             * @description Inventory location to transfer from
             */
            fromLocationId: number;
            /**
             * Format: int64
             * @description Inventory location where transfer is going
             */
            toLocationId: number;
            /**
             * Format: int64
             * @description Employee who created this transfer
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description Memo/summary field
             */
            memo: string;
            /**
             * Format: date-time
             * @description Transfer date
             */
            date: string;
            /**
             * Format: date-time
             * @description Transfer picked date
             */
            pickedDate?: string | null;
            /**
             * Format: date-time
             * @description Transfer recevived date
             */
            receivedDate?: string | null;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer was modified date
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /**
             * Format: date-time
             * @description Transfer required by date
             */
            dateRequired?: string | null;
            /**
             * Format: int64
             * @description Id of job associated with transfer
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of invoice associated with transfer
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            canceledById?: number | null;
            /** @description Reason the transfer was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: date-time
             * @description Transfer canceled date
             */
            dateCanceled?: string | null;
            /** @description Is active */
            active: boolean;
            /**
             * Format: int64
             * @description Employee who picked this transfer
             */
            pickedById?: number | null;
            /**
             * Format: int64
             * @description Employee who received this transfer
             */
            receivedById?: number | null;
            /** @description Collection of transfer items */
            items: components["schemas"]["Inventory.V2.InventoryTransferItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
            /**
             * @description List of external data attached to this return,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataModel"][] | null;
        };
        /** @description Inventory transfer item response */
        "Inventory.V2.InventoryTransferItemResponse": {
            /**
             * Format: int64
             * @description Item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer item was modified date
             */
            modifiedOn: string;
            /** @description Item name */
            name: string;
            /** @description Item code */
            code: string;
            /**
             * Format: decimal
             * @description Transfer quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Transfer quantity already picked
             */
            quantityPicked: number;
            /**
             * Format: decimal
             * @description Cost
             */
            cost: number;
            /**
             * Format: decimal
             * @description Total cost
             */
            totalCost: number;
            /** @description List of serial numbers */
            serialNumbers?: components["schemas"]["Inventory.V2.SerialNumberResponse"][] | null;
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            createdById?: number | null;
            /** @description Is active */
            active: boolean;
            /**
             * Format: int64
             * @description Id of the budget code for transfer item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.InventoryTemplateResponse": {
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
            data: components["schemas"]["Inventory.V2.InventoryTemplateResponse"][];
        };
        /** @description Response model for inventory template details */
        "Inventory.V2.InventoryTemplateResponse": {
            /**
             * Format: int64
             * @description Template Id
             */
            id: number;
            /** @description Template name */
            name: string;
            /** @description Whether the template is active */
            active: boolean;
            /** @description Template type */
            type: string;
            /**
             * Format: date-time
             * @description Template creation date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Template last modified date
             */
            modifiedOn: string;
            /** @description Whether the template has consignment items */
            isConsignment: boolean;
            /** @description Location IDs associated with this template */
            locationIds?: number[] | null;
            /** @description Items in the template */
            items?: components["schemas"]["Inventory.V2.InventoryTemplateItemResponse"][] | null;
        };
        /** @description Response model for inventory template item */
        "Inventory.V2.InventoryTemplateItemResponse": {
            /**
             * Format: int64
             * @description Template item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /** @description Sku code */
            code: string;
            /** @description Sku description */
            description?: string | null;
            /** @description Sku display name */
            name: string;
            /** @description Sku type */
            skuType: string;
            /**
             * Format: decimal
             * @description Minimum quantity
             */
            minQuantity: number;
            /**
             * Format: decimal
             * @description Maximum quantity
             */
            maxQuantity: number;
            /** @description Memo */
            memo?: string | null;
            /** @description Unit of measure */
            unitOfMeasure?: components["schemas"]["Inventory.UnitOfMeasureModel"] | null;
            /** @description Whether this item is consignment */
            isConsignment: boolean;
        };
        "Inventory.UnitOfMeasureModel": {
            name: string;
            /** Format: int64 */
            skuId: number;
            skuType: components["schemas"]["Pricebook.Types.SkuType"];
            /** Format: decimal */
            quantity: number;
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            unitOfMeasureBaseId: number;
            /** Format: int64 */
            newSkuConversionBatchId?: number | null;
            /** Format: int64 */
            oldSkuConversionBatchId?: number | null;
            skuCode: string;
            isUsedForPurchasing: boolean;
            vendors: components["schemas"]["Inventory.UnitOfMeasureVendorModel"][];
        };
        /**
         * @description The type of ISku entity
         * @enum {string}
         */
        "Pricebook.Types.SkuType": "Service" | "Material" | "Equipment" | "PriceModifier";
        "Inventory.UnitOfMeasureVendorModel": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            procurementVendorId: number;
            vendorPartNumber: string;
            vendorDefaultUnit: boolean;
            /** Format: decimal */
            cost?: number | null;
            active: boolean;
        };
        /** @description Request model to create PO */
        "Inventory.V2.CreatePurchaseOrderRequest": {
            /**
             * Format: int64
             * @description Id of the vendor for this PO
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Id of the purchase order type for this PO
             */
            typeId: number;
            /**
             * Format: int64
             * @description Id of the business unit for this PO
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Id of the inventory location for this PO
             */
            inventoryLocationId: number;
            /**
             * Format: int64
             * @description Id of the job for this PO, if not specified non-job PO will be created
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of the technician for this PO
             */
            technicianId?: number | null;
            /**
             * Format: int64
             * @description Id of the project for this PO
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description Id of the budget code for this PO
             */
            budgetCodeId?: number | null;
            /** @description Address where PO will be shipped */
            shipTo: components["schemas"]["Inventory.V2.CreateAddressRequest"];
            /** @description Optional vendor invoice number, you should provide it for auto-received POs */
            vendorInvoiceNumber?: string | null;
            /** @description Indicates whether this PO will impact technician's payroll */
            impactsTechnicianPayroll: boolean;
            /**
             * Format: multiline
             * @description Summary/memo for this PO
             */
            memo?: string | null;
            /**
             * Format: date-time
             * @description PO date
             */
            date: string;
            /**
             * Format: date-time
             * @description PO Required On date
             */
            requiredOn: string;
            /**
             * Format: decimal
             * @description Tax
             */
            tax: number;
            /**
             * Format: decimal
             * @description Shipping cost
             */
            shipping: number;
            /** @description List of PO items */
            items: components["schemas"]["Inventory.V2.CreatePurchaseOrderItemRequest"][];
        };
        /** @description Request model for address with description */
        "Inventory.V2.CreateAddressRequest": {
            /** @description Description of the shipping address, like customer address or technician's truck for example */
            description: string;
            /** @description Actual shipping address */
            address: components["schemas"]["Inventory.V2.AddressRequest"];
        };
        /** @description Request model for actual address */
        "Inventory.V2.AddressRequest": {
            /** @description Street */
            street: string;
            /** @description Unit */
            unit: string;
            /** @description City */
            city: string;
            /** @description State */
            state: string;
            /** @description Zip code */
            zip: string;
            /** @description Country code */
            country: string;
        };
        /** @description Request model for new PO item */
        "Inventory.V2.CreatePurchaseOrderItemRequest": {
            /**
             * Format: int64
             * @description Id of the SKU from pricebook, can be any active material or equipment
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /** @description Part number of this item for current vendor */
            vendorPartNumber: string;
            /**
             * Format: decimal
             * @description Item quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /**
             * Format: int64
             * @description Id of the budget code for this PO item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.PurchaseOrderResponse": {
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
            data: components["schemas"]["Inventory.V2.PurchaseOrderResponse"][];
        };
        /** @description Represents purchase order response */
        "Inventory.V2.PurchaseOrderResponse": {
            /**
             * Format: int64
             * @description Purchase order Id
             */
            id: number;
            /** @description Purchase order number */
            number: string;
            /**
             * Format: int64
             * @description Id of invoice associated with PO
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Id of job associated with PO
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of project associated with PO
             */
            projectId?: number | null;
            /** @description Status of this PO */
            status: string;
            /**
             * Format: int64
             * @description The purchase order type Id of this PO
             */
            typeId: number;
            /**
             * Format: int64
             * @description Id of vendor for this PO
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Id of technician for this PO
             */
            technicianId?: number | null;
            /** @description Shipping address for this PO */
            shipTo: components["schemas"]["Inventory.V2.AddressResponse"];
            /**
             * Format: int64
             * @description Id of business unit for this PO
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Inventory location Id of PO
             */
            inventoryLocationId?: number | null;
            /**
             * Format: int64
             * @description Batch Id of PO
             */
            batchId?: number | null;
            /**
             * Format: int64
             * @description Id of the budget code for this PO
             */
            budgetCodeId?: number | null;
            /** @description Vendor document number of PO */
            vendorDocumentNumber: string;
            /**
             * Format: date-time
             * @description PO date
             */
            date: string;
            /**
             * Format: date-time
             * @description PO required on date
             */
            requiredOn?: string | null;
            /**
             * Format: date-time
             * @description PO sent on date
             */
            sentOn?: string | null;
            /**
             * Format: date-time
             * @description PO received on date
             */
            receivedOn?: string | null;
            /**
             * Format: date-time
             * @description When PO was created, system date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When PO was last modified, system date
             */
            modifiedOn: string;
            /**
             * Format: decimal
             * @description PO total, including items cost, tax and shipping cost
             */
            total: number;
            /**
             * Format: decimal
             * @description PO tax
             */
            tax: number;
            /**
             * Format: decimal
             * @description PO shipping cost
             */
            shipping: number;
            /**
             * Format: int64
             * @description User who created the PO
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description PO summary/memo
             */
            summary: string;
            /** @description List of PO items */
            items: components["schemas"]["Inventory.V2.PurchaseOrderItemResponse"][];
            /** @description List of custom fields for this PO */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.PurchaseOrderRequestResponse": {
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
            data: components["schemas"]["Inventory.V2.PurchaseOrderRequestResponse"][];
        };
        /** @description Represents purchase order request response */
        "Inventory.V2.PurchaseOrderRequestResponse": {
            /**
             * Format: int64
             * @description Purchase order request Id
             */
            id: number;
            /** @description Purchase order request number */
            requestNumber: string;
            /** @description Status of this PO request */
            requestStatus: string;
            /**
             * Format: int64
             * @description Id of invoice associated with PO request
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Id of job associated with PO request
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of project associated with PO request
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description The purchase order type Id of this PO request
             */
            typeId: number;
            /**
             * Format: int64
             * @description Id of vendor for this PO request
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Id of technician for this PO request
             */
            technicianId?: number | null;
            /** @description Shipping address for this PO request */
            shipTo?: components["schemas"]["Inventory.V2.AddressResponse"] | null;
            /**
             * Format: int64
             * @description Id of business unit for this PO request
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Inventory location Id of PO request
             */
            inventoryLocationId?: number | null;
            /**
             * Format: int64
             * @description Batch Id of PO request
             */
            batchId?: number | null;
            /** @description Vendor document number of PO */
            vendorDocumentNumber?: string | null;
            /**
             * Format: date-time
             * @description PO request date
             */
            date: string;
            /**
             * Format: date-time
             * @description PO request required on date
             */
            requiredOn?: string | null;
            /**
             * Format: date-time
             * @description When PO request was created, system date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When PO request was last modified, system date
             */
            modifiedOn: string;
            /**
             * Format: decimal
             * @description PO request total, including items cost, tax and shipping cost
             */
            total: number;
            /**
             * Format: decimal
             * @description PO request tax
             */
            tax: number;
            /**
             * Format: decimal
             * @description PO request shipping cost
             */
            shipping: number;
            /**
             * Format: multiline
             * @description PO request summary/memo
             */
            summary?: string | null;
            /** @description List of PO request items */
            items: components["schemas"]["Inventory.V2.PurchaseOrderItemResponse"][];
            /** @description List of custom fields for this PO request */
            customFields?: components["schemas"]["Inventory.V2.CustomFieldResponse"][] | null;
        };
        /** @enum {string} */
        "Inventory.V2.PurchaseOrderRequestStatus": "PendingApproval" | "Approved" | "Rejected";
        /** @description Represents a request to update single purchase order */
        "Inventory.V2.UpdatePurchaseOrderRequest": {
            /**
             * Format: int64
             * @description Id of the vendor for this PO
             */
            vendorId?: number;
            /**
             * Format: int64
             * @description Id of the purchase order type for this PO
             */
            typeId?: number;
            /**
             * Format: int64
             * @description Id of the business unit for this PO
             */
            businessUnitId?: number;
            /**
             * Format: int64
             * @description Id of the inventory location for this PO
             */
            inventoryLocationId?: number;
            /**
             * Format: int64
             * @description Id of the job for this PO, if not specified non-job PO will be created
             */
            jobId?: number;
            /**
             * Format: int64
             * @description Id of the technician for this PO
             */
            technicianId?: number;
            /**
             * Format: int64
             * @description Id of the project for this PO
             */
            projectId?: number;
            /**
             * Format: int64
             * @description Id of the budget code for this PO
             */
            budgetCodeId?: number | null;
            /** @description Address where PO will be shipped */
            shipTo?: components["schemas"]["Inventory.V2.UpdateAddressRequest"];
            /** @description Vendor invoice number */
            vendorInvoiceNumber?: string;
            /** @description Indicates whether this PO will impact technician's payroll */
            impactsTechnicianPayroll?: boolean;
            /**
             * Format: multiline
             * @description Summary/memo for this PO
             */
            memo?: string;
            /**
             * Format: date-time
             * @description PO date
             */
            date?: string;
            /**
             * Format: date-time
             * @description PO Required On date
             */
            requiredOn?: string;
            /**
             * Format: decimal
             * @description Tax
             */
            tax?: number;
            /**
             * Format: decimal
             * @description Shipping cost
             */
            shipping?: number;
            /** @description List of new/updated PO items. Every active PO item that is not on this list will be marked as inactive */
            items?: components["schemas"]["Inventory.V2.UpdatePurchaseOrderItemRequest"][];
        };
        /** @description Update address with description request */
        "Inventory.V2.UpdateAddressRequest": {
            /** @description Description of the shipping address, like customer address or technician's truck for example */
            description: string;
            /** @description Actual shipping address */
            address: components["schemas"]["Inventory.V2.AddressRequest"];
        };
        /** @description Update purchase order item request */
        "Inventory.V2.UpdatePurchaseOrderItemRequest": {
            /**
             * Format: int64
             * @description Id of purchase order item to update
             */
            id: number;
            /**
             * Format: int64
             * @description Id of the SKU from pricebook, can be any active material or equipment
             */
            skuId: number;
            /**
             * Format: html
             * @description Item description
             */
            description: string;
            /** @description Part number of this item for current vendor */
            vendorPartNumber: string;
            /**
             * Format: decimal
             * @description Item quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /**
             * Format: int64
             * @description Id of the budget code for this PO item
             */
            budgetCodeId?: number | null;
        };
        /** @description Cancel Resource Request */
        "Inventory.V2.CancelResourceRequest_Of_Inventory.V2.PurchaseOrderCancellationReason": {
            /** @description Resource cancellation reason */
            canceledReason?: components["schemas"]["Inventory.V2.PurchaseOrderCancellationReason"];
        };
        /** @enum {string} */
        "Inventory.V2.PurchaseOrderCancellationReason": "NotRequired" | "Duplicate" | "Accidental" | "VendorIssue" | "Other" | "JobCanceled";
        "Inventory.V2.PurchaseOrderRequestRejectionArgs": {
            /** @description Resource rejection reason */
            rejectionReason: components["schemas"]["Inventory.V2.PoApprovalRejectionReason"];
        };
        /** @enum {string} */
        "Inventory.V2.PoApprovalRejectionReason": "CostTooHigh" | "WrongVendor" | "Other";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.Markups.PurchaseOrderMarkupResponse": {
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
            data: components["schemas"]["Inventory.V2.Markups.PurchaseOrderMarkupResponse"][];
        };
        /** @description Represents purchase order markup response */
        "Inventory.V2.Markups.PurchaseOrderMarkupResponse": {
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: decimal */
            from: number;
            /** Format: decimal */
            to: number;
            /** Format: decimal */
            percent: number;
            /** Format: int64 */
            id: number;
        };
        /** @description Represents create purchase order markup request */
        "Inventory.V2.Markups.CreatePurchaseOrderMarkupRequest": {
            /** Format: decimal */
            from: number;
            /** Format: decimal */
            to: number;
            /** Format: decimal */
            percent: number;
        };
        /** @description Represents update purchase order markup request */
        "Inventory.V2.Markups.UpdatePurchaseOrderMarkupRequest": {
            /** Format: decimal */
            from: number;
            /** Format: decimal */
            to: number;
            /** Format: decimal */
            percent: number;
        };
        /** @description Request model to create Purchase Order Types */
        "Inventory.V2.CreatePurchaseOrderTypeRequest": {
            /** @description Name of the Purchase Order Type */
            name: string;
            /** @description Active */
            active: boolean;
            /** @description Include in PO Screen */
            includeInPoScreen: boolean;
            /** @description Automatically receive purchase order */
            automaticallyReceive: boolean;
            /** @description Display purchase order type to technician */
            displayToTechnician: boolean;
            /** @description Exclude Tax From Job Costing */
            excludeTaxFromJobCosting: boolean;
            /** @description Default Selection for Impact to Technician Payroll on Purchase Order */
            impactToTechnicianPayroll: boolean;
            /** @description Allow permitted technicians to send and receive POs of this type */
            allowTechniciansToSendPo: boolean;
            /**
             * Format: int32
             * @description Default number of days to offset required date
             */
            defaultRequiredDateDaysOffset: number;
            /** @description Skip weekends */
            skipWeekends: boolean;
            /** @description Require job before receipt */
            requireJobBeforeReceipt: boolean;
            /** @description Include Purchase Order Total in the Sales Tax Calculation */
            includeInSalesTax: boolean;
            /** @description Is Purchase Order Type Default */
            isDefault: boolean;
            /** @description Copy Purchase Order Items To Invoice When Received */
            copyPurchaseOrderItemsToInvoiceWhenReceived: boolean;
            /** @description Is Default For Consignment */
            isDefaultForConsignment: boolean;
            /** @description Landed cost method for this PO type */
            landedCostMethod?: components["schemas"]["Inventory.V2.LandedCostMethod"] | null;
            /** @description Whether to include tax in fully landed cost */
            includeTaxInFullyLandedCost?: boolean | null;
            /** @description Alert definition for the Purchase Order Type */
            alertSettings: components["schemas"]["Inventory.PoTypeAlertSettings"];
        };
        /** @enum {string} */
        "Inventory.V2.LandedCostMethod": "None" | "ByValue";
        /** @description Purchase Order Type Alert settings */
        "Inventory.PoTypeAlertSettings": {
            /** @description Send Email To Technician When PO Moved To Send */
            sendEmailToTechnicianWhenPoMovedToSend: boolean;
            /** @description Send Email To Technician When PO Moved To Receive */
            sendEmailToTechnicianWhenPoMovedToReceived: boolean;
            /** @description Send Email To PM When PO Moved To Send */
            sendEmailToPmWhenPoMovedToSend: boolean;
            /** @description Send Email To PM When PO Moved To Receive */
            sendEmailToPmWhenPoMovedToReceived: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.PurchaseOrderTypeResponse": {
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
            data: components["schemas"]["Inventory.V2.PurchaseOrderTypeResponse"][];
        };
        /** @description Represents purchase order type response */
        "Inventory.V2.PurchaseOrderTypeResponse": {
            /**
             * Format: int64
             * @description Purchase order type Id
             */
            id: number;
            /** @description Purchase order type Name */
            name: string;
            /** @description Active */
            active: boolean;
            /** @description Automatically receive purchase order */
            automaticallyReceive: boolean;
            /** @description Display purchase order type to technicain on mobile */
            displayToTechnician: boolean;
            /** @description Default Selection for Impact to Technician Payroll on Purchase Order */
            impactToTechnicianPayroll: boolean;
            /** @description Allow permitted technicians to send and receive POs of this type */
            allowTechniciansToSendPo: boolean;
            /**
             * Format: int32
             * @description Default number of days to offset required date
             */
            defaultRequiredDateDaysOffset: number;
            /** @description Skip weekends */
            skipWeekends: boolean;
            /** @description Exclude tax from job costing */
            excludeTaxFromJobCosting: boolean;
            /** @description Landed cost method for this PO type */
            landedCostMethod: components["schemas"]["Inventory.V2.LandedCostMethod"];
            /** @description Whether to include tax in fully landed cost */
            includeTaxInFullyLandedCost: boolean;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time purchase order type was modified date
             */
            modifiedOn: string;
        };
        /** @description Request model to Update Purchase Order Types */
        "Inventory.V2.UpdatePurchaseOrderTypeRequest": {
            /** @description Is the Purchase Order Type Active */
            active: boolean;
            /** @description Name of the Purchase Order Type */
            name: string;
            /** @description Should the Purchase Order Type be included in the Purchase Order screen */
            includeInPoScreen: boolean;
            /** @description Should the Purchase Order be automatically received */
            automaticallyReceive: boolean;
            /** @description Should the Purchase Order Type be displayed to the technician on mobile */
            displayToTechnician: boolean;
            /** @description Should the Purchase Order Type be excluded from job costing */
            excludeTaxFromJobCosting: boolean;
            /** @description Should the Purchase Order Type impact technician payroll */
            impactToTechnicianPayroll: boolean;
            /** @description Should the Purchase Order Type allow technicians to send POs */
            allowTechniciansToSendPo: boolean;
            /**
             * Format: int32
             * @description Default number of days to offset required date
             */
            defaultRequiredDateDaysOffset: number;
            /** @description Skip weekends */
            skipWeekends: boolean;
            /** @description Require job before receipt */
            requireJobBeforeReceipt: boolean;
            /** @description Should the Purchase Order Type be included in sales tax */
            includeInSalesTax: boolean;
            /** @description Should the Purchase Order Type be the default */
            isDefault: boolean;
            /** @description Should the Purchase Order Type copy purchase order items to invoice when received */
            copyPurchaseOrderItemsToInvoiceWhenReceived: boolean;
            /** @description Should the Purchase Order Type be the default for consignment */
            isDefaultForConsignment: boolean;
            /** @description Landed cost method for this PO type */
            landedCostMethod: components["schemas"]["Inventory.Types.LandedCostMethod"];
            /** @description Whether to include tax in fully landed cost */
            includeTaxInFullyLandedCost: boolean;
            /** @description Alert definition for the Purchase Order Type */
            alertSettings: components["schemas"]["Inventory.PoTypeAlertSettings"];
        };
        /** @enum {string} */
        "Inventory.Types.LandedCostMethod": "None" | "ByValue";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.InventoryReceiptResponse": {
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
            data: components["schemas"]["Inventory.V2.InventoryReceiptResponse"][];
        };
        /** @description Inventory receipt response */
        "Inventory.V2.InventoryReceiptResponse": {
            /**
             * Format: int64
             * @description Receipt Id
             */
            id: number;
            /** @description Is active */
            active: boolean;
            /** @description Number */
            number: string;
            /** @description Vendor invoice number */
            vendorInvoiceNumber: string;
            /**
             * Format: int64
             * @description User who created this receipt
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description Memo/summary field
             */
            memo: string;
            /**
             * Format: int64
             * @description Id of purchase order
             */
            purchaseOrderId: number;
            /**
             * Format: int64
             * @description Id of bill
             */
            billId?: number | null;
            /**
             * Format: int64
             * @description Id of job
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of business unit
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Id of vendor
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Id of technician
             */
            technicianId?: number | null;
            /**
             * Format: int64
             * @description Id of inventory location
             */
            inventoryLocationId: number;
            /** @description Ship to address */
            shipTo?: components["schemas"]["Inventory.V2.AddressResponse"] | null;
            /** @description Ship to description */
            shipToDescription: string;
            /**
             * Format: decimal
             * @description Receipt total, including tax and shipping
             */
            receiptAmount: number;
            /**
             * Format: decimal
             * @description Receipt tax
             */
            taxAmount: number;
            /**
             * Format: decimal
             * @description Receipt shipping cost
             */
            shippingAmount: number;
            /**
             * Format: date-time
             * @description Date received
             */
            receivedOn?: string | null;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time receipt was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Id of batch
             */
            batchId?: number | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /**
             * Format: int64
             * @description Id of the budget code
             */
            budgetCodeId?: number | null;
            /** @description Landed cost method for this receipt (from purchase order type). */
            landedCostMethod: components["schemas"]["Inventory.V2.LandedCostMethod"];
            /**
             * Format: decimal
             * @description Other costs on the receipt. Null for non-FLC receipts.
             */
            otherAmount?: number | null;
            /** @description Collection of receipt items */
            items: components["schemas"]["Inventory.V2.InventoryReceiptItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
        };
        /** @description Inventory receipt item response */
        "Inventory.V2.InventoryReceiptItemResponse": {
            /**
             * Format: int64
             * @description Item Id
             */
            id: number;
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /** @description Item Name */
            name: string;
            /** @description Item Code */
            code: string;
            /**
             * Format: html
             * @description Item Description
             */
            description: string;
            /**
             * Format: decimal
             * @description Receipt quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /** @description General ledge account information */
            generalLedgerAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** @description Cost of sale account information */
            costOfSaleAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** @description Asset account information */
            assetAccount?: components["schemas"]["Inventory.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            purchaseOrderItemId: number;
            /**
             * Format: int64
             * @description Id of the budget code
             */
            budgetCodeId?: number | null;
            /**
             * Format: decimal
             * @description Allocated shipping cost for this item (fully landed cost). Null when LandedCostMethod is None.
             */
            allocatedShipping?: number | null;
            /**
             * Format: decimal
             * @description Allocated tax for this item (fully landed cost). Null when LandedCostMethod is None.
             */
            allocatedTax?: number | null;
            /**
             * Format: decimal
             * @description Allocated other costs for this item (fully landed cost). Null when LandedCostMethod is None.
             */
            allocatedOtherCosts?: number | null;
            /**
             * Format: decimal
             * @description Fully landed unit cost for this item. Null when LandedCostMethod is None.
             */
            fullyLandedUnitCost?: number | null;
        };
        /** @description Request model to create Purchase Order Receipt */
        "Inventory.V2.ReceivePurchaseOrderRequest": {
            /**
             * Format: int64
             * @description Id of the purchase order for this receipt
             */
            purchaseOrderId: number;
            /**
             * Format: int64
             * @description Id of the job to associate with this receipt
             */
            jobId?: number | null;
            /**
             * Format: date-time
             * @description Receipt date
             */
            dateReceived: string;
            /** @description Vendor Document number */
            vendorDocumentNumber?: string | null;
            /** @description Receipt memo */
            memo?: string | null;
            /**
             * Format: decimal
             * @description Receipt tax
             */
            tax: number;
            /**
             * Format: decimal
             * @description Receipt shipping cost
             */
            shipping: number;
            /**
             * Format: int64
             * @description Id of the budget code
             */
            budgetCodeId?: number | null;
            /** @description List of PO items */
            items: components["schemas"]["Inventory.V2.ReceivePurchaseOrderItemRequest"][];
        };
        "Inventory.V2.ReceivePurchaseOrderItemRequest": {
            /**
             * Format: int64
             * @description Id of purchase order item
             */
            purchaseOrderItemId?: number | null;
            /**
             * Format: int64
             * @description Id of the SKU from pricebook, can be any active material or equipment
             */
            skuId: number;
            /** @description Item description */
            description?: string | null;
            /** @description Part number of this item for current vendor */
            vendorPartNumber?: string | null;
            /**
             * Format: decimal
             * @description Item quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Item cost
             */
            cost: number;
            /**
             * Format: int64
             * @description Id of the budget code
             */
            budgetCodeId?: number | null;
        };
        /** @description Cancel Resource Request */
        "Inventory.V2.CancelResourceRequest_Of_Inventory.V2.ReceiptCancellationReason": {
            /** @description Resource cancellation reason */
            canceledReason?: components["schemas"]["Inventory.V2.ReceiptCancellationReason"];
        };
        /** @enum {string} */
        "Inventory.V2.ReceiptCancellationReason": "NotRequired" | "Duplicate" | "Accidental" | "VendorIssue" | "Other" | "JobCanceled";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.InventoryReturnResponse": {
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
            data: components["schemas"]["Inventory.V2.InventoryReturnResponse"][];
        };
        /** @description Inventory return response */
        "Inventory.V2.InventoryReturnResponse": {
            /**
             * Format: int64
             * @description Return Id
             */
            id: number;
            /** @description Is active */
            active: boolean;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /** @description Status */
            status: components["schemas"]["Inventory.V2.InventoryReturnStatus"];
            /**
             * Format: int64
             * @description Return type Id
             */
            returnTypeId: number;
            /**
             * Format: int64
             * @description Vendor
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Purchase order
             */
            purchaseOrderId?: number | null;
            /**
             * Format: int64
             * @description Job
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Project
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description Budget code Id for the return
             */
            budgetCodeId?: number | null;
            /**
             * Format: int64
             * @description Business unit
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Inventory location
             */
            inventoryLocationId?: number | null;
            /**
             * Format: int64
             * @description Employee who created this return
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description Memo/summary field
             */
            memo: string;
            /**
             * Format: decimal
             * @description Return total, including tax and shipping
             */
            returnAmount: number;
            /**
             * Format: decimal
             * @description Return tax
             */
            taxAmount: number;
            /**
             * Format: decimal
             * @description Return shipping cost
             */
            shippingAmount: number;
            /**
             * Format: date-time
             * @description Return creation date
             */
            returnDate: string;
            /**
             * Format: date-time
             * @description Date when return was actually processed
             */
            returnedOn?: string | null;
            /**
             * Format: date-time
             * @description Date when credit was received
             */
            creditReceivedOn?: string | null;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time return was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            canceledById?: number | null;
            /** @description Reason the transfer was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: date-time
             * @description Transfer canceled date
             */
            dateCanceled?: string | null;
            /** @description Collection of return items */
            items: components["schemas"]["Inventory.V2.InventoryReturnItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
            /**
             * @description List of external data attached to this return,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
        };
        /** @description Represents request to update return */
        "Inventory.V2.UpdateReturnRequest": {
            /**
             * Format: int64
             * @description Return type Id
             */
            returnTypeId?: number;
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId?: number;
            /** @description Reference Number */
            referenceNumber?: string;
            /**
             * Format: int64
             * @description Inventory location Id
             */
            inventoryLocationId?: number;
            /**
             * Format: date-time
             * @description Return Date
             */
            returnDate?: string;
            /** @description Memo */
            memo?: string;
            /**
             * Format: decimal
             * @description Tax
             */
            tax?: number | null;
            /**
             * Format: decimal
             * @description Shipping
             */
            shipping?: number | null;
            /**
             * Format: decimal
             * @description Restocking Fee
             */
            restockingFee?: number | null;
            /**
             * Format: int64
             * @description Budget code Id for the return
             */
            budgetCodeId?: number | null;
            /** @description List of return items */
            items?: components["schemas"]["Inventory.V2.UpdateReturnItemModel"][];
            /** @description Contains a list of external data items that should be attached to this return */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
        };
        "Inventory.V2.UpdateReturnItemModel": {
            /**
             * Format: int64
             * @description Item ID
             */
            id: number;
            /**
             * Format: int64
             * @description SKU ID
             */
            skuId: number;
            /**
             * Format: html
             * @description Item Description
             */
            itemDescription?: string | null;
            /**
             * Format: decimal
             * @description Quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Cost
             */
            cost: number;
            /**
             * Format: int64
             * @description Budget code Id for the return item
             */
            budgetCodeId?: number | null;
        };
        /** @description Cancel Resource Request */
        "Inventory.V2.CancelResourceRequest_Of_Inventory.V2.ReturnCancellationReason": {
            /** @description Resource cancellation reason */
            canceledReason?: components["schemas"]["Inventory.V2.ReturnCancellationReason"];
        };
        /** @enum {string} */
        "Inventory.V2.ReturnCancellationReason": "NotRequired" | "Duplicate" | "Accidental" | "VendorIssue" | "Other" | "JobCanceled";
        /** @description Represents request to create return */
        "Inventory.V2.CreateInventoryReturnRequest": {
            /**
             * Format: int64
             * @description Vendor Id
             */
            vendorId: number;
            /**
             * Format: int64
             * @description Job Id
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Purchase order Id
             */
            purchaseOrderId?: number | null;
            /**
             * Format: int64
             * @description Return type Id
             */
            returnTypeId: number;
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description Budget code Id for the return
             */
            budgetCodeId?: number | null;
            /** @description Reference number */
            referenceNumber?: string | null;
            /**
             * Format: int64
             * @description Location Id
             */
            inventoryLocationId: number;
            /**
             * Format: date-time
             * @description Return date
             */
            returnDate: string;
            /** @description Memo/summary field */
            memo?: string | null;
            /**
             * Format: decimal
             * @description Tax rate
             */
            tax: number;
            /**
             * Format: decimal
             * @description Shipping cost
             */
            shipping: number;
            /**
             * Format: decimal
             * @description Restocking fee
             */
            restockingFee: number;
            items?: components["schemas"]["Inventory.V2.CreateInventoryReturnItemRequest"][] | null;
        };
        /** @description Inventory return create item request */
        "Inventory.V2.CreateInventoryReturnItemRequest": {
            /**
             * Format: int64
             * @description Sku Id
             */
            skuId: number;
            /** @description Item description */
            description?: string | null;
            /**
             * Format: decimal
             * @description Quantity
             */
            quantity: number;
            /**
             * Format: decimal
             * @description Cost
             */
            cost: number;
            /**
             * Format: int64
             * @description Shipment item Id
             */
            shipmentItemId?: number | null;
            /**
             * Format: int64
             * @description Budget code Id for the return item
             */
            budgetCodeId?: number | null;
        };
        /** @description Request model to create Return Types */
        "Inventory.V2.CreateReturnTypeRequest": {
            /** @description Name of the Return Type */
            name: string;
            /** @description Should the return type allow receiving Vendor Credits automatically. */
            automaticallyReceiveVendorCredit: boolean;
            includeInSalesTax: boolean;
            isDefault: boolean;
            isDefaultForConsignment: boolean;
        };
        /** @description Request model to Update Return Types */
        "Inventory.V2.UpdateReturnTypeRequest": {
            /**
             * Format: int64
             * @description Id of the Return Type
             */
            id: number;
            /** @description Is the Return Type Active */
            active?: boolean;
            /** @description Name of the Return Type */
            name?: string;
            /** @description Should the return type allow receiving Vendor Credits automatically. */
            automaticallyReceiveVendorCredit?: boolean;
            includeInSalesTax?: boolean;
            isDefault?: boolean;
            isDefaultForConsignment?: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.ListReturnTypesResponse": {
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
            data: components["schemas"]["Inventory.V2.ListReturnTypesResponse"][];
        };
        "Inventory.V2.ListReturnTypesResponse": {
            /**
             * Format: int64
             * @description Return Id
             */
            id: number;
            /** @description Name of the Return Type */
            name?: string | null;
            /** @description Should the return type allow receiving Vendor Credits automatically. */
            automaticallyReceiveVendorCredit: boolean;
            includeInSalesTax: boolean;
            active: boolean;
            isDefault: boolean;
            isDefaultForConsignment: boolean;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time return type was modified date
             */
            modifiedOn: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.InventoryTransferResponse": {
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
            data: components["schemas"]["Inventory.V2.InventoryTransferResponse"][];
        };
        /** @description Inventory transfer response */
        "Inventory.V2.InventoryTransferResponse": {
            /**
             * Format: int64
             * @description Inventory transfer Id
             */
            id: number;
            /** @description Type */
            transferType: string;
            /** @description Status */
            status: string;
            /** @description Number */
            number: string;
            /** @description Reference number */
            referenceNumber: string;
            /**
             * Format: int64
             * @description Inventory location to transfer from
             */
            fromLocationId: number;
            /**
             * Format: int64
             * @description Inventory location where transfer is going
             */
            toLocationId: number;
            /**
             * Format: int64
             * @description Employee who created this transfer
             */
            createdById?: number | null;
            /**
             * Format: multiline
             * @description Memo/summary field
             */
            memo: string;
            /**
             * Format: date-time
             * @description Transfer date
             */
            date: string;
            /**
             * Format: date-time
             * @description Transfer picked date
             */
            pickedDate?: string | null;
            /**
             * Format: date-time
             * @description Transfer recevived date
             */
            receivedDate?: string | null;
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time transfer was modified date
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @deprecated
             * @description Batch Id (Deprecated - Use Batch instead)
             */
            batchId?: number | null;
            /** @description Batch */
            batch?: components["schemas"]["Inventory.V2.BatchResponse"] | null;
            /** @description Sync status */
            syncStatus: components["schemas"]["Inventory.V2.SyncStatus"];
            /**
             * Format: date-time
             * @description Transfer required by date
             */
            dateRequired?: string | null;
            /**
             * Format: int64
             * @description Id of job associated with transfer
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description Id of invoice associated with transfer
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description Employee who canceled this transfer
             */
            canceledById?: number | null;
            /** @description Reason the transfer was canceled */
            canceledReason?: components["schemas"]["Inventory.V2.InventoryReasonTransactionCanceled"] | null;
            /**
             * Format: date-time
             * @description Transfer canceled date
             */
            dateCanceled?: string | null;
            /** @description Is active */
            active: boolean;
            /**
             * Format: int64
             * @description Employee who picked this transfer
             */
            pickedById?: number | null;
            /**
             * Format: int64
             * @description Employee who received this transfer
             */
            receivedById?: number | null;
            /** @description Collection of transfer items */
            items: components["schemas"]["Inventory.V2.InventoryTransferItemResponse"][];
            /** @description Collection of custom fields */
            customFields: components["schemas"]["Inventory.V2.CustomFieldResponse"][];
            /**
             * @description List of external data attached to this return,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataModel"][] | null;
        };
        /** @description Represents request to update transfer */
        "Inventory.V2.UpdateTransferRequest": {
            /** @description Contains a list of external data items that should be attached to this transfer */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.TruckResponse": {
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
            data: components["schemas"]["Inventory.V2.TruckResponse"][];
        };
        /** @description Represents truck response */
        "Inventory.V2.TruckResponse": {
            /**
             * Format: int64
             * @description Truck Id
             */
            id: number;
            /** @description Truck Name */
            name: string;
            /** @description Active */
            active: boolean;
            /**
             * Format: multiline
             * @description Memo
             */
            memo: string;
            /**
             * Format: int64
             * @description Warehouse Id for this truck
             */
            warehouseId?: number | null;
            /** @description Technician Ids associated with this truck */
            technicianIds: number[];
            /**
             * Format: int64
             * @description Inventory Template Id for this truck
             */
            inventoryTemplateId?: number | null;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time truck was modified date
             */
            modifiedOn: string;
            /**
             * @description List of external data attached to this warehouse,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
        };
        /** @description Represents a request to create a new truck */
        "Inventory.V2.CreateTruckRequest": {
            /** @description Truck Name */
            name: string;
            /**
             * Format: multiline
             * @description Memo
             */
            memo?: string | null;
            /**
             * Format: int64
             * @description Warehouse Id for this truck
             */
            warehouseId: number;
            /**
             * Format: int64
             * @description Template Id for this truck
             */
            templateId?: number | null;
            /** @description Technician Ids to associate with this truck */
            technicianIds?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this truck.
             */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataCreateRequest"] | null;
        };
        "Inventory.V2.ExternalDataCreateRequest": {
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
        };
        /** @description Represents a request to update truck */
        "Inventory.V2.UpdateTruckRequest": {
            /** @description Truck Name */
            name?: string;
            /** @description Active status */
            active?: boolean;
            /** @description Memo */
            memo?: string;
            /**
             * Format: int64
             * @description Warehouse Id for this truck
             */
            warehouseId?: number;
            /**
             * Format: int64
             * @description Template Id for this truck
             */
            templateId?: number | null;
            /** @description Technician Ids to associate with this truck */
            technicianIds?: number[];
            /** @description Contains a list of external data items that should be attached to this truck */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
        };
        /** @description Request model to create vendor */
        "Inventory.V2.CreateVendorRequest": {
            /** @description Name */
            name: string;
            /** @description Active */
            active: boolean;
            /**
             * Format: multiline
             * @description Memo
             */
            memo?: string | null;
            /** @description Contact First name */
            firstName?: string | null;
            /** @description Contact Last Name */
            lastName?: string | null;
            /** @description Contact Phone */
            phone?: string | null;
            /** @description Contact Email */
            email?: string | null;
            /** @description Contact Fax */
            fax?: string | null;
            /** @description Replenishment Vendor */
            isTruckReplenishment: boolean;
            /** @description Default PO Delivery Method */
            deliveryOption?: components["schemas"]["InventoryUnsafe.PurchaseOrderDeliveryOption"] | null;
            /**
             * Format: decimal
             * @description Default Tax Rate
             */
            taxRate: number;
            /** @description Restrict PO Creation in Mobile */
            restrictedMobileCreation: boolean;
            /** @description Vendor Quickbooks Item */
            vendorQuickbooksItem?: string | null;
            /**
             * Format: int64
             * @description Payment Term Id
             */
            paymentTermId?: number | null;
            /**
             * Format: int64
             * @description Remittance Vendor Id
             */
            remittanceVendorId?: number | null;
            /** @description Address */
            address: components["schemas"]["Inventory.V2.AddressRequest"];
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this vendor.
             */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataCreateRequest"] | null;
            /** @description Tags */
            tags?: components["schemas"]["Inventory.V2.TagRequest"][] | null;
            /** @description Email Recipients */
            vendorContacts?: components["schemas"]["Inventory.V2.CreateVendorContactRequest"][] | null;
        };
        /**
         * @description How purchase order is sent/delivered to a vendor
         * @enum {string}
         */
        "InventoryUnsafe.PurchaseOrderDeliveryOption": "Manual" | "EmailAsExcel" | "EmailAsPdf" | "EmailAsPdfRollupView" | "Electronic" | "MarkAsSent" | "EmailAsExcelAndPdf" | "VendorPortal";
        /** @description Represents tag request */
        "Inventory.V2.TagRequest": {
            /**
             * Format: int64
             * @description Tag Type Id
             */
            tagTypeId: number;
        };
        /** @description Request model to create vendor contact */
        "Inventory.V2.CreateVendorContactRequest": {
            /** @description Name */
            name: string;
            /** @description Email */
            email: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.VendorResponse": {
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
            data: components["schemas"]["Inventory.V2.VendorResponse"][];
        };
        /** @description Vendor response */
        "Inventory.V2.VendorResponse": {
            /**
             * Format: int64
             * @description Vendor Id
             */
            id: number;
            /** @description Vendor name */
            name: string;
            /** @description Active/Inactive status */
            active: boolean;
            /** @description Indicates if vendor can be used for replenishment */
            isTruckReplenishment: boolean;
            /** @description Indicates if vendor can be used for purchasing on mobile */
            isMobileCreationRestricted: boolean;
            /**
             * Format: multiline
             * @description Vendor memo
             */
            memo: string;
            /** @description Default delivery option */
            deliveryOption: string;
            /**
             * Format: decimal
             * @description Default tax rate for this vendor
             */
            defaultTaxRate: number;
            /** @description Vendor contact information */
            contactInfo: components["schemas"]["Inventory.V2.VendorContactInfoResponse"];
            /** @description Vendor address */
            address: components["schemas"]["Inventory.V2.AddressResponse"];
            /**
             * Format: date-time
             * @description system created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description last time adjustment was modified date
             */
            modifiedOn: string;
            /**
             * @description List of external data attached to this vendor,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
            customFields?: components["schemas"]["Inventory.V2.CustomFieldResponse"][] | null;
        };
        /** @description Vendor contact info response */
        "Inventory.V2.VendorContactInfoResponse": {
            /** @description Vendor first name */
            firstName: string;
            /** @description Vendor last name */
            lastName: string;
            /** @description Vendor phone */
            phone: string;
            /** @description Vendor email */
            email: string;
            /** @description Vendor fax */
            fax: string;
        };
        /** @description Represents request to update vendor */
        "Inventory.V2.UpdateVendorRequest": {
            /** @description Name */
            name?: string;
            /** @description Active */
            active?: boolean;
            /**
             * Format: multiline
             * @description Memo
             */
            memo?: string;
            /** @description Contact First name */
            firstName?: string;
            /** @description Contact Last Name */
            lastName?: string;
            /** @description Contact Phone */
            phone?: string;
            /** @description Contact Email */
            email?: string;
            /** @description Contact Fax */
            fax?: string;
            /** @description Replenishment Vendor */
            isTruckReplenishment?: boolean;
            /** @description Default PO Delivery Method */
            deliveryOption?: components["schemas"]["InventoryUnsafe.PurchaseOrderDeliveryOption"];
            /**
             * Format: decimal
             * @description Default Tax Rate
             */
            taxRate?: number;
            /** @description Restrict PO Creation in Mobile */
            restrictedMobileCreation?: boolean;
            /** @description Vendor Quickbooks Item */
            vendorQuickbooksItem?: string;
            /**
             * Format: int64
             * @description Payment Term Id
             */
            paymentTermId?: number;
            /**
             * Format: int64
             * @description Remittance Vendor Id
             */
            remittanceVendorId?: number;
            /** @description Address */
            address?: components["schemas"]["Inventory.V2.AddressRequest"];
            /** @description Tags */
            tags?: components["schemas"]["Inventory.V2.TagRequest"][];
            /** @description Email Recipients */
            vendorContacts?: components["schemas"]["Inventory.V2.UpdateVendorContactRequest"][];
            /** @description Contains a list of external data items that should be attached to this vendor */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
        };
        /** @description Represents request to update vendor contact */
        "Inventory.V2.UpdateVendorContactRequest": {
            /**
             * Format: int64
             * @description Id of Vendor Contact to update
             */
            id?: number | null;
            /** @description Name */
            name: string;
            /** @description Email */
            email: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.CustomFieldTypeResponse": {
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
            data: components["schemas"]["Inventory.V2.CustomFieldTypeResponse"][];
        };
        "Inventory.V2.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description The ID of the custom field type.
             */
            id: number;
            /** @description The name of the custom field type. */
            name: string;
            /** @description Indicates the data type of the custom field. */
            dataType: components["schemas"]["Inventory.V2.CustomFieldDataType"];
            /** @description Indicates the dropdown options if the custom field is a dropdown data type. */
            dataTypeOptions?: string[] | null;
            /**
             * Format: date-time
             * @description The date the custom field type was created in UTC date / time.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date the custom field type was modified in UTC date / time.
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Inventory.V2.CustomFieldDataType": "Text" | "Dropdown" | "Numeric";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Inventory.V2.WarehouseResponse": {
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
            data: components["schemas"]["Inventory.V2.WarehouseResponse"][];
        };
        /** @description Represents warehouse response */
        "Inventory.V2.WarehouseResponse": {
            /**
             * Format: int64
             * @description Warehouse Id
             */
            id: number;
            /** @description Warehouse Name */
            name: string;
            /** @description Active */
            active: boolean;
            /** @description Warehouse address */
            address: components["schemas"]["Inventory.V2.AddressResponse"];
            /**
             * Format: int64
             * @description Inventory Template Id for this warehouse
             */
            inventoryTemplateId?: number | null;
            /**
             * Format: date-time
             * @description System created date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Last time warehouse was modified date
             */
            modifiedOn: string;
            /**
             * @description List of external data attached to this warehouse,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Inventory.V2.ExternalDataModel"][];
        };
        /** @description Represents a request to update warehouse */
        "Inventory.V2.UpdateWarehouseRequest": {
            /** @description Contains a list of external data items that should be attached to this warehouse */
            externalData?: components["schemas"]["Inventory.V2.ExternalDataUpdateRequest"];
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
    Adjustments_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
                /** @description Number filter */
                number?: string;
                /** @description Reference number filter */
                referenceNumber?: string;
                /** @description BatchId filter */
                batchId?: number;
                /** @description Filter by a collection of invoice Ids */
                invoiceIds?: string;
                /** @description Filter by a collection of inventory location Ids */
                inventoryLocationIds?: string;
                /** @description Filter by a collection of adjustment types */
                adjustmentTypes?: string;
                /** @description Filter by a collection of business unit Ids */
                businessUnitIds?: string;
                /** @description Filter by a collection of sync statues */
                syncStatuses?: string;
                /** @description Collection of custom field pairs (name, value) to filter by */
                "customFields.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Can be "Or" or "And"\
                 *     Values: [And, Or]
                 */
                "customFields.Operator"?: string & components["schemas"]["Inventory.V2.LogicalOperator"];
                /** @description Return adjustments with date on or after certain date/time */
                dateOnOrAfter?: string;
                /** @description Return adjustments with date before certain date/time */
                dateBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                     *           "id": 0,
                     *           "active": true,
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "type": "string",
                     *           "inventoryLocationId": 0,
                     *           "businessUnitId": 0,
                     *           "projectId": 0,
                     *           "invoiceId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "date": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "canceledReason": {},
                     *           "canceledById": 0,
                     *           "dateCanceled": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "cost": 0,
                     *               "totalCost": 0,
                     *               "createdById": 0,
                     *               "active": true,
                     *               "budgetCodeId": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ]
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.InventoryAdjustmentResponse"];
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
    Adjustments_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Adjustment Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Adjustment Request */
        requestBody?: {
            content: {
                /**
                 * @example {
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
                "application/json": components["schemas"]["Inventory.V2.UpdateAdjustmentRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Adjustment */
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
    Adjustments_UpdateCustomFields: {
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
                 *       "operations": [
                 *         {
                 *           "objectId": 0,
                 *           "customFields": [
                 *             {
                 *               "name": "string",
                 *               "value": "string"
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CustomFieldUpdateRequest"];
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
    Export_Adjustments: {
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
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "type": "string",
                     *           "inventoryLocationId": 0,
                     *           "businessUnitId": 0,
                     *           "projectId": 0,
                     *           "invoiceId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "date": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "canceledReason": {},
                     *           "canceledById": 0,
                     *           "dateCanceled": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "cost": 0,
                     *               "totalCost": 0,
                     *               "createdById": 0,
                     *               "active": true,
                     *               "budgetCodeId": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ]
                     *             }
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
                    "application/json": components["schemas"]["ExportResponse_Of_Inventory.V2.ExportAdjustmentsResponse"];
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
    Export_PurchaseOrders: {
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
                     *           "number": "string",
                     *           "invoiceId": 0,
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "status": "string",
                     *           "typeId": 0,
                     *           "vendorId": 0,
                     *           "technicianId": 0,
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnitId": 0,
                     *           "inventoryLocationId": 0,
                     *           "batchId": 0,
                     *           "budgetCodeId": 0,
                     *           "vendorDocumentNumber": "string",
                     *           "date": "string",
                     *           "requiredOn": "string",
                     *           "sentOn": "string",
                     *           "receivedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "total": 0,
                     *           "tax": 0,
                     *           "shipping": 0,
                     *           "createdById": 0,
                     *           "summary": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "skuName": "string",
                     *               "skuCode": "string",
                     *               "skuType": "string",
                     *               "vendorPartNumber": "string",
                     *               "quantity": 0,
                     *               "quantityReceived": 0,
                     *               "cost": 0,
                     *               "total": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "status": "string",
                     *               "chargeable": true,
                     *               "budgetCodeId": 0
                     *             }
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
                    "application/json": components["schemas"]["ExportResponse_Of_Inventory.V2.ExportPurchaseOrdersResponse"];
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
    Export_Returns: {
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
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "status": {},
                     *           "returnTypeId": 0,
                     *           "vendorId": 0,
                     *           "purchaseOrderId": 0,
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "budgetCodeId": 0,
                     *           "businessUnitId": 0,
                     *           "inventoryLocationId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "returnAmount": 0,
                     *           "taxAmount": 0,
                     *           "shippingAmount": 0,
                     *           "returnDate": "string",
                     *           "returnedOn": "string",
                     *           "creditReceivedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "canceledById": 0,
                     *           "canceledReason": {},
                     *           "dateCanceled": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "cost": 0,
                     *               "generalLedgerAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "createdById": 0,
                     *               "active": true,
                     *               "receiptItemId": 0,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
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
                    "application/json": components["schemas"]["ExportResponse_Of_Inventory.V2.ExportReturnsResponse"];
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
    Export_Transfers: {
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
                     *           "transferType": "string",
                     *           "status": "string",
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "fromLocationId": 0,
                     *           "toLocationId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "date": "string",
                     *           "pickedDate": "string",
                     *           "receivedDate": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "dateRequired": "string",
                     *           "jobId": 0,
                     *           "invoiceId": 0,
                     *           "canceledById": 0,
                     *           "canceledReason": {},
                     *           "dateCanceled": "string",
                     *           "active": true,
                     *           "pickedById": 0,
                     *           "receivedById": 0,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "quantityPicked": 0,
                     *               "cost": 0,
                     *               "totalCost": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "createdById": 0,
                     *               "active": true,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
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
                    "application/json": components["schemas"]["ExportResponse_Of_Inventory.V2.ExportTransfersResponse"];
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
    InventoryTemplates_GetList: {
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
            /** @description Paginated list of inventory template details including item details */
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
                     *           "type": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "isConsignment": true,
                     *           "locationIds": [
                     *             0
                     *           ],
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "name": "string",
                     *               "skuType": "string",
                     *               "minQuantity": 0,
                     *               "maxQuantity": 0,
                     *               "memo": "string",
                     *               "unitOfMeasure": {
                     *                 "name": "string",
                     *                 "skuId": 0,
                     *                 "skuType": "Service",
                     *                 "quantity": 0,
                     *                 "id": 0,
                     *                 "unitOfMeasureBaseId": 0,
                     *                 "newSkuConversionBatchId": 0,
                     *                 "oldSkuConversionBatchId": 0,
                     *                 "skuCode": "string",
                     *                 "isUsedForPurchasing": true,
                     *                 "vendors": [
                     *                   {
                     *                     "id": 0,
                     *                     "procurementVendorId": 0,
                     *                     "vendorPartNumber": "string",
                     *                     "vendorDefaultUnit": true,
                     *                     "cost": 0,
                     *                     "active": true
                     *                   }
                     *                 ]
                     *               },
                     *               "isConsignment": true
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.InventoryTemplateResponse"];
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
    PurchaseOrders_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description Filters by PO status
                 *     \
                 *     Available values are: Pending, Sent, PartiallyReceived, Received, Exported, Canceled
                 */
                status?: string;
                /** @description Filters by PO number */
                number?: string;
                /** @description Filters by JobId associated with PO */
                jobId?: number;
                /** @description Filters by JobIds associated with PO */
                jobIds?: string;
                /** @description Filter by TechnicianId associated with PO */
                technicianId?: number;
                /** @description Filter by ProjectId associated with PO */
                projectId?: number;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return POs with date on or after certain date/time */
                dateOnOrAfter?: string;
                /** @description Return POs with date before certain date/time */
                dateBefore?: string;
                /** @description Return POs sent on or after certain date/time */
                sentOnOrAfter?: string;
                /** @description Return POs sent before certain date/time */
                sentBefore?: string;
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
                     *           "id": 0,
                     *           "number": "string",
                     *           "invoiceId": 0,
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "status": "string",
                     *           "typeId": 0,
                     *           "vendorId": 0,
                     *           "technicianId": 0,
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnitId": 0,
                     *           "inventoryLocationId": 0,
                     *           "batchId": 0,
                     *           "budgetCodeId": 0,
                     *           "vendorDocumentNumber": "string",
                     *           "date": "string",
                     *           "requiredOn": "string",
                     *           "sentOn": "string",
                     *           "receivedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "total": 0,
                     *           "tax": 0,
                     *           "shipping": 0,
                     *           "createdById": 0,
                     *           "summary": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "skuName": "string",
                     *               "skuCode": "string",
                     *               "skuType": "string",
                     *               "vendorPartNumber": "string",
                     *               "quantity": 0,
                     *               "quantityReceived": 0,
                     *               "cost": 0,
                     *               "total": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "status": "string",
                     *               "chargeable": true,
                     *               "budgetCodeId": 0
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.PurchaseOrderResponse"];
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
    PurchaseOrders_Create: {
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
                 *       "vendorId": 0,
                 *       "typeId": 0,
                 *       "businessUnitId": 0,
                 *       "inventoryLocationId": 0,
                 *       "jobId": 0,
                 *       "technicianId": 0,
                 *       "projectId": 0,
                 *       "budgetCodeId": 0,
                 *       "shipTo": {
                 *         "description": "string",
                 *         "address": {
                 *           "street": "string",
                 *           "unit": "string",
                 *           "city": "string",
                 *           "state": "string",
                 *           "zip": "string",
                 *           "country": "string"
                 *         }
                 *       },
                 *       "vendorInvoiceNumber": "string",
                 *       "impactsTechnicianPayroll": true,
                 *       "memo": "string",
                 *       "date": "string",
                 *       "requiredOn": "string",
                 *       "tax": 0,
                 *       "shipping": 0,
                 *       "items": [
                 *         {
                 *           "skuId": 0,
                 *           "description": "string",
                 *           "vendorPartNumber": "string",
                 *           "quantity": 0,
                 *           "cost": 0,
                 *           "budgetCodeId": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreatePurchaseOrderRequest"];
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
    PurchaseOrders_GetRequests: {
        parameters: {
            query?: {
                ids?: string;
                /**
                 * @description Filters by PO request status
                 *     Available values are: PendingApproval, Rejected\
                 *     Values: [PendingApproval, Approved, Rejected]
                 */
                requestStatus?: string & components["schemas"]["Inventory.V2.PurchaseOrderRequestStatus"];
                /** @description Filters by PO request number */
                requestNumber?: string;
                /** @description Filters by JobId associated with PO request */
                jobId?: number;
                /** @description Filters by JobIds associated with PO request */
                jobIds?: string;
                /** @description Filter by TechnicianId associated with PO request */
                technicianId?: number;
                /** @description Filter by ProjectId associated with PO request */
                projectId?: number;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return PO requests with date on or after certain date/time */
                dateOnOrAfter?: string;
                /** @description Return PO requests with date before certain date/time */
                dateBefore?: string;
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
                     *           "id": 0,
                     *           "requestNumber": "string",
                     *           "requestStatus": "string",
                     *           "invoiceId": 0,
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "typeId": 0,
                     *           "vendorId": 0,
                     *           "technicianId": 0,
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnitId": 0,
                     *           "inventoryLocationId": 0,
                     *           "batchId": 0,
                     *           "vendorDocumentNumber": "string",
                     *           "date": "string",
                     *           "requiredOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "total": 0,
                     *           "tax": 0,
                     *           "shipping": 0,
                     *           "summary": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "skuName": "string",
                     *               "skuCode": "string",
                     *               "skuType": "string",
                     *               "vendorPartNumber": "string",
                     *               "quantity": 0,
                     *               "quantityReceived": 0,
                     *               "cost": 0,
                     *               "total": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "status": "string",
                     *               "chargeable": true,
                     *               "budgetCodeId": 0
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.PurchaseOrderRequestResponse"];
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
    PurchaseOrders_GetById: {
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
                     *       "number": "string",
                     *       "invoiceId": 0,
                     *       "jobId": 0,
                     *       "projectId": 0,
                     *       "status": "string",
                     *       "typeId": 0,
                     *       "vendorId": 0,
                     *       "technicianId": 0,
                     *       "shipTo": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "businessUnitId": 0,
                     *       "inventoryLocationId": 0,
                     *       "batchId": 0,
                     *       "budgetCodeId": 0,
                     *       "vendorDocumentNumber": "string",
                     *       "date": "string",
                     *       "requiredOn": "string",
                     *       "sentOn": "string",
                     *       "receivedOn": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "total": 0,
                     *       "tax": 0,
                     *       "shipping": 0,
                     *       "createdById": 0,
                     *       "summary": "string",
                     *       "items": [
                     *         {
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "description": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "skuName": "string",
                     *           "skuCode": "string",
                     *           "skuType": "string",
                     *           "vendorPartNumber": "string",
                     *           "quantity": 0,
                     *           "quantityReceived": 0,
                     *           "cost": 0,
                     *           "total": 0,
                     *           "serialNumbers": [
                     *             {
                     *               "id": 0,
                     *               "number": "string"
                     *             }
                     *           ],
                     *           "status": "string",
                     *           "chargeable": true,
                     *           "budgetCodeId": 0
                     *         }
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
                    "application/json": components["schemas"]["Inventory.V2.PurchaseOrderResponse"];
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
    PurchaseOrders_Update: {
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
                 *       "vendorId": 0,
                 *       "typeId": 0,
                 *       "businessUnitId": 0,
                 *       "inventoryLocationId": 0,
                 *       "jobId": 0,
                 *       "technicianId": 0,
                 *       "projectId": 0,
                 *       "budgetCodeId": 0,
                 *       "shipTo": {
                 *         "description": "string",
                 *         "address": {
                 *           "street": "string",
                 *           "unit": "string",
                 *           "city": "string",
                 *           "state": "string",
                 *           "zip": "string",
                 *           "country": "string"
                 *         }
                 *       },
                 *       "vendorInvoiceNumber": "string",
                 *       "impactsTechnicianPayroll": true,
                 *       "memo": "string",
                 *       "date": "string",
                 *       "requiredOn": "string",
                 *       "tax": 0,
                 *       "shipping": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "description": "string",
                 *           "vendorPartNumber": "string",
                 *           "quantity": 0,
                 *           "cost": 0,
                 *           "budgetCodeId": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.UpdatePurchaseOrderRequest"];
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
    PurchaseOrders_Cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Cancel purchase order Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "canceledReason": {}
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CancelResourceRequest_Of_Inventory.V2.PurchaseOrderCancellationReason"];
            };
        };
        responses: {
            /** @description Id of the cancelled purchase order */
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
    PurchaseOrders_ApproveRequest: {
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
    PurchaseOrders_RejectRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Existing PoRequest Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Rejection reason */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "rejectionReason": {}
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.PurchaseOrderRequestRejectionArgs"];
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
    PurchaseOrdersMarkup_Get: {
        parameters: {
            query?: {
                ids?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, From, To, Percent
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
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "from": 0,
                     *           "to": 0,
                     *           "percent": 0,
                     *           "id": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.Markups.PurchaseOrderMarkupResponse"];
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
    PurchaseOrdersMarkup_Create: {
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
                 *       "from": 0,
                 *       "to": 0,
                 *       "percent": 0
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.Markups.CreatePurchaseOrderMarkupRequest"];
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "from": 0,
                     *       "to": 0,
                     *       "percent": 0,
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Inventory.V2.Markups.PurchaseOrderMarkupResponse"];
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
    PurchaseOrdersMarkup_GetById: {
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "from": 0,
                     *       "to": 0,
                     *       "percent": 0,
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Inventory.V2.Markups.PurchaseOrderMarkupResponse"];
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
    PurchaseOrdersMarkup_Delete: {
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
            /** @description Markup was not found */
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
    PurchaseOrdersMarkup_Update: {
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
                 *       "from": 0,
                 *       "to": 0,
                 *       "percent": 0
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.Markups.UpdatePurchaseOrderMarkupRequest"];
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "from": 0,
                     *       "to": 0,
                     *       "percent": 0,
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Inventory.V2.Markups.PurchaseOrderMarkupResponse"];
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
    PurchaseOrderTypes_GetList: {
        parameters: {
            query?: {
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
                     *           "name": "string",
                     *           "active": true,
                     *           "automaticallyReceive": true,
                     *           "displayToTechnician": true,
                     *           "impactToTechnicianPayroll": true,
                     *           "allowTechniciansToSendPo": true,
                     *           "defaultRequiredDateDaysOffset": 0,
                     *           "skipWeekends": true,
                     *           "excludeTaxFromJobCosting": true,
                     *           "landedCostMethod": {},
                     *           "includeTaxInFullyLandedCost": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.PurchaseOrderTypeResponse"];
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
    PurchaseOrderTypes_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Request object to create a Purchase Order Type. */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "active": true,
                 *       "includeInPoScreen": true,
                 *       "automaticallyReceive": true,
                 *       "displayToTechnician": true,
                 *       "excludeTaxFromJobCosting": true,
                 *       "impactToTechnicianPayroll": true,
                 *       "allowTechniciansToSendPo": true,
                 *       "defaultRequiredDateDaysOffset": 0,
                 *       "skipWeekends": true,
                 *       "requireJobBeforeReceipt": true,
                 *       "includeInSalesTax": true,
                 *       "isDefault": true,
                 *       "copyPurchaseOrderItemsToInvoiceWhenReceived": true,
                 *       "isDefaultForConsignment": true,
                 *       "landedCostMethod": {},
                 *       "includeTaxInFullyLandedCost": true,
                 *       "alertSettings": {
                 *         "sendEmailToTechnicianWhenPoMovedToSend": true,
                 *         "sendEmailToTechnicianWhenPoMovedToReceived": true,
                 *         "sendEmailToPmWhenPoMovedToSend": true,
                 *         "sendEmailToPmWhenPoMovedToReceived": true
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreatePurchaseOrderTypeRequest"];
            };
        };
        responses: {
            /** @description Id of the newly created Purchase Order Type */
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
    PurchaseOrderTypes_Update: {
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
                 *       "active": true,
                 *       "name": "string",
                 *       "includeInPoScreen": true,
                 *       "automaticallyReceive": true,
                 *       "displayToTechnician": true,
                 *       "excludeTaxFromJobCosting": true,
                 *       "impactToTechnicianPayroll": true,
                 *       "allowTechniciansToSendPo": true,
                 *       "defaultRequiredDateDaysOffset": 0,
                 *       "skipWeekends": true,
                 *       "requireJobBeforeReceipt": true,
                 *       "includeInSalesTax": true,
                 *       "isDefault": true,
                 *       "copyPurchaseOrderItemsToInvoiceWhenReceived": true,
                 *       "isDefaultForConsignment": true,
                 *       "landedCostMethod": {},
                 *       "includeTaxInFullyLandedCost": true,
                 *       "alertSettings": {
                 *         "sendEmailToTechnicianWhenPoMovedToSend": true,
                 *         "sendEmailToTechnicianWhenPoMovedToReceived": true,
                 *         "sendEmailToPmWhenPoMovedToSend": true,
                 *         "sendEmailToPmWhenPoMovedToReceived": true
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.UpdatePurchaseOrderTypeRequest"];
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
    Receipts_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Number filter */
                number?: string;
                /** @description Vendor invoice number filter */
                vendorInvoiceNumber?: string;
                /** @description BillId filter */
                billId?: number;
                /** @description BatchId filter */
                batchId?: number;
                /** @description Filter by a collection of vendors */
                vendorIds?: string;
                /** @description Filter by a collection of business units */
                businessUnitIds?: string;
                /** @description Filter by a collection of inventory locations */
                inventoryLocationIds?: string;
                /** @description Filter by a collection of purchase orders */
                purchaseOrderIds?: string;
                /** @description Filter by a collection of sync statuses */
                syncStatuses?: string;
                /** @description Collection of custom field pairs (name, value) to filter by */
                "customFields.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Can be "Or" or "And"\
                 *     Values: [And, Or]
                 */
                "customFields.Operator"?: string & components["schemas"]["Inventory.V2.LogicalOperator"];
                /** @description Return receipts with received date on or after certain date/time */
                receivedOnOrAfter?: string;
                /** @description Return receipts with received date before certain date/time */
                receivedBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                     *           "id": 0,
                     *           "active": true,
                     *           "number": "string",
                     *           "vendorInvoiceNumber": "string",
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "purchaseOrderId": 0,
                     *           "billId": 0,
                     *           "jobId": 0,
                     *           "businessUnitId": 0,
                     *           "vendorId": 0,
                     *           "technicianId": 0,
                     *           "inventoryLocationId": 0,
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "shipToDescription": "string",
                     *           "receiptAmount": 0,
                     *           "taxAmount": 0,
                     *           "shippingAmount": 0,
                     *           "receivedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "syncStatus": {},
                     *           "budgetCodeId": 0,
                     *           "landedCostMethod": {},
                     *           "otherAmount": 0,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "name": "string",
                     *               "code": "string",
                     *               "description": "string",
                     *               "quantity": 0,
                     *               "cost": 0,
                     *               "generalLedgerAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "purchaseOrderItemId": 0,
                     *               "budgetCodeId": 0,
                     *               "allocatedShipping": 0,
                     *               "allocatedTax": 0,
                     *               "allocatedOtherCosts": 0,
                     *               "fullyLandedUnitCost": 0
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.InventoryReceiptResponse"];
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
    Receipts_CreateReceipt: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Request object to create a Purchase Order Receipt. */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "purchaseOrderId": 0,
                 *       "jobId": 0,
                 *       "dateReceived": "string",
                 *       "vendorDocumentNumber": "string",
                 *       "memo": "string",
                 *       "tax": 0,
                 *       "shipping": 0,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "purchaseOrderItemId": 0,
                 *           "skuId": 0,
                 *           "description": "string",
                 *           "vendorPartNumber": "string",
                 *           "quantity": 0,
                 *           "cost": 0,
                 *           "budgetCodeId": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.ReceivePurchaseOrderRequest"];
            };
        };
        responses: {
            /** @description Id of the newly created Receipt */
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
    Receipts_UpdateCustomFields: {
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
                 *       "operations": [
                 *         {
                 *           "objectId": 0,
                 *           "customFields": [
                 *             {
                 *               "name": "string",
                 *               "value": "string"
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CustomFieldUpdateRequest"];
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
    Receipts_CancelReceipts: {
        parameters: {
            query?: {
                id?: number;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "canceledReason": {}
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CancelResourceRequest_Of_Inventory.V2.ReceiptCancellationReason"];
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
    Returns_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Number filter */
                number?: string;
                /** @description Reference number filter */
                referenceNumber?: string;
                /** @description Job filter */
                jobId?: number;
                /** @description Purchase order filter */
                purchaseOrderId?: number;
                /** @description Batch filter */
                batchId?: number;
                /** @description Filter by a collection of vendors */
                vendorIds?: string;
                /** @description Filter by a collection of business units */
                businessUnitIds?: string;
                /** @description Filter by a collection of inventory locations */
                inventoryLocationIds?: string;
                /** @description Filter by a collection of sync statuses */
                syncStatuses?: string;
                /** @description Collection of custom field pairs (name, value) to filter by */
                "customFields.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Can be "Or" or "And"\
                 *     Values: [And, Or]
                 */
                "customFields.Operator"?: string & components["schemas"]["Inventory.V2.LogicalOperator"];
                /** @description Filters by returns with return date on or after certain date/time */
                returnDateOnOrAfter?: string;
                /** @description Filters by returns with return date before certain date/time */
                returnDateBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
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
                     *           "active": true,
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "status": {},
                     *           "returnTypeId": 0,
                     *           "vendorId": 0,
                     *           "purchaseOrderId": 0,
                     *           "jobId": 0,
                     *           "projectId": 0,
                     *           "budgetCodeId": 0,
                     *           "businessUnitId": 0,
                     *           "inventoryLocationId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "returnAmount": 0,
                     *           "taxAmount": 0,
                     *           "shippingAmount": 0,
                     *           "returnDate": "string",
                     *           "returnedOn": "string",
                     *           "creditReceivedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "canceledById": 0,
                     *           "canceledReason": {},
                     *           "dateCanceled": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "cost": 0,
                     *               "generalLedgerAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "createdById": 0,
                     *               "active": true,
                     *               "receiptItemId": 0,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.InventoryReturnResponse"];
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
    Returns_CreateReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Create Return Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "vendorId": 0,
                 *       "jobId": 0,
                 *       "purchaseOrderId": 0,
                 *       "returnTypeId": 0,
                 *       "businessUnitId": 0,
                 *       "budgetCodeId": 0,
                 *       "referenceNumber": "string",
                 *       "inventoryLocationId": 0,
                 *       "returnDate": "string",
                 *       "memo": "string",
                 *       "tax": 0,
                 *       "shipping": 0,
                 *       "restockingFee": 0,
                 *       "items": [
                 *         {
                 *           "skuId": 0,
                 *           "description": "string",
                 *           "quantity": 0,
                 *           "cost": 0,
                 *           "shipmentItemId": 0,
                 *           "budgetCodeId": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreateInventoryReturnRequest"];
            };
        };
        responses: {
            /** @description Id of the created Return */
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
    Returns_UpdateCustomFields: {
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
                 *       "operations": [
                 *         {
                 *           "objectId": 0,
                 *           "customFields": [
                 *             {
                 *               "name": "string",
                 *               "value": "string"
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CustomFieldUpdateRequest"];
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
    Returns_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Return Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "returnTypeId": 0,
                 *       "businessUnitId": 0,
                 *       "referenceNumber": "string",
                 *       "inventoryLocationId": 0,
                 *       "returnDate": "string",
                 *       "memo": "string",
                 *       "tax": 0,
                 *       "shipping": 0,
                 *       "restockingFee": 0,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "id": 0,
                 *           "skuId": 0,
                 *           "itemDescription": "string",
                 *           "quantity": 0,
                 *           "cost": 0,
                 *           "budgetCodeId": 0
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
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.UpdateReturnRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Return */
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
    Returns_Cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Cancel Return Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "canceledReason": {}
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CancelResourceRequest_Of_Inventory.V2.ReturnCancellationReason"];
            };
        };
        responses: {
            /** @description Id of the cancelled Return */
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
    ReturnTypes_GetList: {
        parameters: {
            query: {
                /** @description Filter by active only */
                activeOnly: boolean;
                /** @description Filter by name */
                name?: string;
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
            /** @description Paginated list of the Return Types */
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
                     *           "automaticallyReceiveVendorCredit": true,
                     *           "includeInSalesTax": true,
                     *           "active": true,
                     *           "isDefault": true,
                     *           "isDefaultForConsignment": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.ListReturnTypesResponse"];
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
    ReturnTypes_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Request object to create a Return Type. */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "automaticallyReceiveVendorCredit": true,
                 *       "includeInSalesTax": true,
                 *       "isDefault": true,
                 *       "isDefaultForConsignment": true
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreateReturnTypeRequest"];
            };
        };
        responses: {
            /** @description Id of the newly created Return Type */
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
    ReturnTypes_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return Type Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Request object to update a Return Type. */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "id": 0,
                 *       "active": true,
                 *       "name": "string",
                 *       "automaticallyReceiveVendorCredit": true,
                 *       "includeInSalesTax": true,
                 *       "isDefault": true,
                 *       "isDefaultForConsignment": true
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.UpdateReturnTypeRequest"];
            };
        };
        responses: {
            /** @description Id of the newly created Return Type */
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
    Transfers_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filter by a collection of statuses */
                statuses?: string;
                /** @description Number filter */
                number?: string;
                /** @description Reference number filter */
                referenceNumber?: string;
                /** @description Batch filter */
                batchId?: number;
                /** @description Filter by a collection of transfer types */
                transferTypeIds?: string;
                /** @description Filter by a collection of From field locations */
                fromLocationIds?: string;
                /** @description Filter by a collection of To field locations */
                toLocationIds?: string;
                /** @description Filter by a collection of sync statuses */
                syncStatuses?: string;
                /** @description Collection of custom field pairs (name, value) to filter by */
                "customFields.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Can be "Or" or "And"\
                 *     Values: [And, Or]
                 */
                "customFields.Operator"?: string & components["schemas"]["Inventory.V2.LogicalOperator"];
                /** @description Return transfers with date on or after certain date/time */
                dateOnOrAfter?: string;
                /** @description Return transfers with date before certain date/time */
                dateBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
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
                     *           "transferType": "string",
                     *           "status": "string",
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "fromLocationId": 0,
                     *           "toLocationId": 0,
                     *           "createdById": 0,
                     *           "memo": "string",
                     *           "date": "string",
                     *           "pickedDate": "string",
                     *           "receivedDate": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "batchId": 0,
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "syncStatus": {},
                     *           "dateRequired": "string",
                     *           "jobId": 0,
                     *           "invoiceId": 0,
                     *           "canceledById": 0,
                     *           "canceledReason": {},
                     *           "dateCanceled": "string",
                     *           "active": true,
                     *           "pickedById": 0,
                     *           "receivedById": 0,
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "description": "string",
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "name": "string",
                     *               "code": "string",
                     *               "quantity": 0,
                     *               "quantityPicked": 0,
                     *               "cost": 0,
                     *               "totalCost": 0,
                     *               "serialNumbers": [
                     *                 {
                     *                   "id": 0,
                     *                   "number": "string"
                     *                 }
                     *               ],
                     *               "createdById": 0,
                     *               "active": true,
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.InventoryTransferResponse"];
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
    Transfers_UpdateCustomFields: {
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
                 *       "operations": [
                 *         {
                 *           "objectId": 0,
                 *           "customFields": [
                 *             {
                 *               "name": "string",
                 *               "value": "string"
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CustomFieldUpdateRequest"];
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
    Transfers_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Transfer Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Transfer Request */
        requestBody?: {
            content: {
                /**
                 * @example {
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
                "application/json": components["schemas"]["Inventory.V2.UpdateTransferRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Transfer */
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
    Trucks_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
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
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true,
                     *           "memo": "string",
                     *           "warehouseId": 0,
                     *           "technicianIds": [
                     *             0
                     *           ],
                     *           "inventoryTemplateId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.TruckResponse"];
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
    Trucks_Create: {
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
                 *       "memo": "string",
                 *       "warehouseId": 0,
                 *       "templateId": 0,
                 *       "technicianIds": [
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
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreateTruckRequest"];
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
    Trucks_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Truck Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Truck Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "active": true,
                 *       "memo": "string",
                 *       "warehouseId": 0,
                 *       "templateId": 0,
                 *       "technicianIds": [
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
                "application/json": components["schemas"]["Inventory.V2.UpdateTruckRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Truck */
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
    Vendors_GetList: {
        parameters: {
            query?: {
                /** @description Ids to filter by */
                ids?: number[];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
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
                /** @description Collection of custom field pairs (name, value) to filter by */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Can be "Or" or "And"\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Inventory.V2.LogicalOperator"];
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
                     *           "name": "string",
                     *           "active": true,
                     *           "isTruckReplenishment": true,
                     *           "isMobileCreationRestricted": true,
                     *           "memo": "string",
                     *           "deliveryOption": "string",
                     *           "defaultTaxRate": 0,
                     *           "contactInfo": {
                     *             "firstName": "string",
                     *             "lastName": "string",
                     *             "phone": "string",
                     *             "email": "string",
                     *             "fax": "string"
                     *           },
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.VendorResponse"];
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
    Vendors_Create: {
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
                 *       "active": true,
                 *       "memo": "string",
                 *       "firstName": "string",
                 *       "lastName": "string",
                 *       "phone": "string",
                 *       "email": "string",
                 *       "fax": "string",
                 *       "isTruckReplenishment": true,
                 *       "deliveryOption": {},
                 *       "taxRate": 0,
                 *       "restrictedMobileCreation": true,
                 *       "vendorQuickbooksItem": "string",
                 *       "paymentTermId": 0,
                 *       "remittanceVendorId": 0,
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string"
                 *       },
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "tags": [
                 *         {
                 *           "tagTypeId": 0
                 *         }
                 *       ],
                 *       "vendorContacts": [
                 *         {
                 *           "name": "string",
                 *           "email": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CreateVendorRequest"];
            };
        };
        responses: {
            /** @description Id of the newly created Vendor */
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
    Vendors_GetById: {
        parameters: {
            query?: {
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
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
                     *       "id": 0,
                     *       "name": "string",
                     *       "active": true,
                     *       "isTruckReplenishment": true,
                     *       "isMobileCreationRestricted": true,
                     *       "memo": "string",
                     *       "deliveryOption": "string",
                     *       "defaultTaxRate": 0,
                     *       "contactInfo": {
                     *         "firstName": "string",
                     *         "lastName": "string",
                     *         "phone": "string",
                     *         "email": "string",
                     *         "fax": "string"
                     *       },
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
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
                    "application/json": components["schemas"]["Inventory.V2.VendorResponse"];
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
    Vendors_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Vendor Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Vendor Request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "active": true,
                 *       "memo": "string",
                 *       "firstName": "string",
                 *       "lastName": "string",
                 *       "phone": "string",
                 *       "email": "string",
                 *       "fax": "string",
                 *       "isTruckReplenishment": true,
                 *       "deliveryOption": {},
                 *       "taxRate": 0,
                 *       "restrictedMobileCreation": true,
                 *       "vendorQuickbooksItem": "string",
                 *       "paymentTermId": 0,
                 *       "remittanceVendorId": 0,
                 *       "address": {
                 *         "street": "string",
                 *         "unit": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "zip": "string",
                 *         "country": "string"
                 *       },
                 *       "tags": [
                 *         {
                 *           "tagTypeId": 0
                 *         }
                 *       ],
                 *       "vendorContacts": [
                 *         {
                 *           "id": 0,
                 *           "name": "string",
                 *           "email": "string"
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
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.UpdateVendorRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Vendor */
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
    Vendors_GetCustomFieldTypes: {
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
            /** @description Successfully retrieved the custom field types */
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.CustomFieldTypeResponse"];
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
    Vendors_UpdateCustomFields: {
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
                 *       "operations": [
                 *         {
                 *           "objectId": 0,
                 *           "customFields": [
                 *             {
                 *               "name": "string",
                 *               "value": "string"
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Inventory.V2.CustomFieldUpdateRequest"];
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
    Warehouses_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
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
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true,
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "inventoryTemplateId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Inventory.V2.WarehouseResponse"];
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
    Warehouses_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update Warehouse Request */
        requestBody?: {
            content: {
                /**
                 * @example {
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
                "application/json": components["schemas"]["Inventory.V2.UpdateWarehouseRequest"];
            };
        };
        responses: {
            /** @description Id of the updated Warehouse */
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
