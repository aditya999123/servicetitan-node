// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/ap-bills": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of AP bills with detailed item information, filtering capabilities, and associated metadata */
        get: operations["ApBills_GetListPaginated"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-bills/{billId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a single AP bill by its unique identifier with complete details including items, expense items, and associated metadata */
        get: operations["ApBills_GetById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-bills/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for AP bills */
        get: operations["ApBills_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates custom field values on multiple AP bills */
        patch: operations["ApBills_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/ap-bills/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Marks multiple AP bills as exported, updating their sync status to indicate they have been exported to external systems */
        post: operations["ApBills_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-credits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a paginated list of ap credits */
        get: operations["ApCredits_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-credits/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for AP credits */
        get: operations["ApCredits_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates custom field values on multiple AP credits */
        patch: operations["ApCredits_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/ap-credits/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Marks ap-credits as exported. */
        post: operations["ApCredits_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApPayments_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/ap-payments/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for AP payments */
        get: operations["ApPayments_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates custom field values on multiple AP payments */
        patch: operations["ApPayments_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/ap-payments/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Marks ap-payments as exported. */
        post: operations["ApPayments_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CreditMemos_GetCreditMemosList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/{id}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CreditMemos_GetCreditMemoItemsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/credit-memo-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CreditMemos_GetCreditMemosItemsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for credit memos */
        get: operations["CreditMemos_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields for specified credit memos */
        patch: operations["CreditMemos_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/{id}": {
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
        patch: operations["CreditMemos_UpdateCreditMemo"];
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/{id}/splits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CreditMemos_AddCreditMemoSplits"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/credit-memos/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** mark credit memo as exported. Id = creditMemoId */
        post: operations["CreditMemos_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/bank-deposits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a paginated list of deposits */
        get: operations["Deposits_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/bank-deposits/{id}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a paginated list of transactions */
        get: operations["Deposits_GetTransactionsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/bank-deposits/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Marks deposits as exported */
        post: operations["Deposits_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for invoices */
        get: operations["Export_Invoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/invoice-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for invoice items */
        get: operations["Export_InvoiceItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for payments */
        get: operations["Export_Payments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/inventory-bills": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for inventory bills */
        get: operations["Export_InventoryBills"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/gl-accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves General Ledger accounts that match the given criteria */
        get: operations["GlAccounts_GetList"];
        put?: never;
        /** Creates a new General Ledger account */
        post: operations["GlAccounts_CreateAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/gl-accounts/{accountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves single General Ledger account by account id */
        get: operations["GlAccounts_GetAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates General Ledger account
         * @description This method can also deactivate the account, which acts as a temporary soft delete. There is no way to permanently delete an account.
         */
        patch: operations["GlAccounts_UpdateAccount"];
        trace?: never;
    };
    "/tenant/{tenant}/gl-accounts/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves General Ledger account types that match the given criteria */
        get: operations["GlAccounts_GetTypeList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/inventory-bills": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InventoryBills_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/inventory-bills/paginated": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InventoryBills_GetListPaginated"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/inventory-bills/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for inventory bills */
        get: operations["InventoryBills_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["InventoryBills_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/inventory-bills/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** mark bill as exported. Id = inventoryBillId */
        post: operations["InventoryBills_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a list of invoices.  By default, all invoices will be returned regardless of status. */
        get: operations["Invoices_GetList"];
        put?: never;
        /** create adjustment invoice */
        post: operations["Invoices_CreateAdjustmentInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoices/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for invoices */
        get: operations["Invoices_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates custom fields for specified invoices */
        patch: operations["Invoices_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/invoices/{id}": {
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
        /** update invoice */
        patch: operations["Invoices_UpdateInvoice"];
        trace?: never;
    };
    "/tenant/{tenant}/invoices/{invoiceId}/items": {
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
        /** update invoice items */
        patch: operations["Invoices_UpdateInvoiceItems"];
        trace?: never;
    };
    "/tenant/{tenant}/invoices/{invoiceId}/items/{itemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** delete invoice item */
        delete: operations["Invoices_DeleteInvoiceItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoices/markasexported": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** mark invoice as exported. Id = invoiceId */
        post: operations["Invoices_MarkAsExported"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoices/{invoiceId}/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Invoices_GetInvoiceTasks"];
        put?: never;
        /** Creates an invoice task from a template */
        post: operations["Invoices_CreateInvoiceTask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/invoices/{invoiceId}/tasks/{taskId}": {
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
        /** Updates an invoice task */
        patch: operations["Invoices_UpdateInvoiceTask"];
        trace?: never;
    };
    "/tenant/{tenant}/journal-entries/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a journal entry by ID */
        get: operations["JournalEntries_Get"];
        /**
         * Updates journal entry, supports only for external journal entry records.
         *     To add a line, supply all the original lines along with the new one. To delete a line, supply only the lines you want to keep.
         */
        put: operations["JournalEntries_FullUpdate"];
        post?: never;
        /** Deletes journal entry, supports only for external journal entry records. */
        delete: operations["JournalEntries_DeleteJournalEntry"];
        options?: never;
        head?: never;
        /** Updates a journal entry. */
        patch: operations["JournalEntries_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/journal-entries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of journal entries. */
        get: operations["JournalEntries_GetList"];
        put?: never;
        /** Creates a new journal entry record, automatically marks it as external. */
        post: operations["JournalEntries_CreateJournalEntry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/journal-entries/{id}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of journal entry items aggregated by account and business unit. */
        get: operations["JournalEntries_GetSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/journal-entries/{id}/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of journal entry items aggregated by account, business unit, transaction and pricebook item. */
        get: operations["JournalEntries_GetDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/journal-entries/{id}/sync": {
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
        /** Updates a journal entry sync state. */
        patch: operations["JournalEntries_SyncUpdate"];
        trace?: never;
    };
    "/tenant/{tenant}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a paginated list of payments */
        get: operations["Payments_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payments/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of filtered custom field types available for payments */
        get: operations["Payments_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update custom fields for specified payments */
        patch: operations["Payments_UpdateCustomFields"];
        trace?: never;
    };
    "/tenant/{tenant}/payments/{id}": {
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
        /** Updates specified payment in "patch" mode */
        patch: operations["Payments_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/payments/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Updates payment status */
        post: operations["Payments_UpdateStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payment-terms/{paymentTermId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets Payment Term */
        get: operations["PaymentTerms_GetPaymentTermModel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payment-terms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of payment terms */
        get: operations["PaymentTerms_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payment-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of payment types */
        get: operations["PaymentTypes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payment-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets payment type specified by ID */
        get: operations["PaymentTypes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/remittance-vendors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a paginated list of Remittance Vendors with detailed item information, filtering capabilities, and associated metadata */
        get: operations["RemittanceVendors_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/remittance-vendors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a single Remittance Vendor by its unique identifier with complete details including items, expense items, and associated metadata */
        get: operations["RemittanceVendors_GetById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/tax-zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a list of tax zones and their rates.
         * @description Gets a list of tax zones and their rates based on the supplied filter.
         *     If no filter is supplied it returns all tax zones.
         */
        get: operations["TaxZones_GetList"];
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
        "PaginatedResponse_Of_Accounting.V2.ApBillResponse": {
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
            data: components["schemas"]["Accounting.V2.ApBillResponse"][];
        };
        /** @description Represents a complete AP bill with all associated details, items, and metadata */
        "Accounting.V2.ApBillResponse": {
            /**
             * Format: int64
             * @description Unique identifier for the AP bill
             */
            id: number;
            /**
             * Format: int64
             * @description Associated purchase order ID, if applicable
             */
            purchaseOrderId?: number | null;
            /** @description Current synchronization status of the bill (e.g., Pending, Posted, Exported) */
            syncStatus?: string | null;
            /** @description Current status of the bill (e.g., Unreconciled, Reconciled, Discrepancy, Canceled) */
            status?: string | null;
            /** @description Source of the bill creation (e.g., Standalone, Purchasing, API, OCR) */
            source?: string | null;
            /** @description Type of the bill (e.g., Procurement, ApBill) */
            billType?: string | null;
            /**
             * Format: date-time
             * @description Date when the bill was posted to the accounting system
             */
            postDate?: string | null;
            /** @description Reference number for the bill */
            referenceNumber?: string | null;
            /** @description Vendor's internal number or identifier */
            vendorNumber?: string | null;
            /** @description Brief summary or description of the bill */
            summary?: string | null;
            /**
             * Format: date-time
             * @description Date of the bill as specified by the vendor
             */
            billDate?: string | null;
            /**
             * Format: date-time
             * @description Date by which early payment discount can be applied
             */
            earlyDiscountDate?: string | null;
            /** @description Total amount of the bill as a formatted string */
            billAmount?: string | null;
            /** @description Total amount from the vendor's invoice as a formatted string */
            vendorInvoiceTotal?: string | null;
            /** @description Tax amount as a formatted string */
            taxAmount?: string | null;
            /** @description Shipping amount as a formatted string */
            shippingAmount?: string | null;
            /** @description Landed cost method for this bill (from purchase order type). */
            landedCostMethod: components["schemas"]["Inventory.Types.LandedCostMethod"];
            /** @description Other landed costs amount (duties, fees), when applicable */
            otherAmount?: string | null;
            /** @description Pre-tax discount amount applied to the bill */
            preTaxDiscountAmount?: string | null;
            /** @description Pre-tax charge amount applied to the bill */
            preTaxCharge?: string | null;
            /** @description Post-tax discount amount applied to the bill */
            postTaxDiscountAmount?: string | null;
            /** @description Post-tax charge amount applied to the bill */
            postTaxCharge?: string | null;
            /** @description Name of the user who created the bill */
            createdBy?: string | null;
            /**
             * Format: date-time
             * @description Date and time when the bill was created
             */
            createdOn?: string | null;
            /**
             * Format: date-time
             * @description Date and time when the bill was last modified
             */
            modifiedOn?: string | null;
            /** @description Name of the payment terms applied to this bill */
            termName?: string | null;
            /**
             * Format: date-time
             * @description Due date for payment of the bill
             */
            dueDate?: string | null;
            /** @description Indicates whether this bill should not be paid (hold status) */
            doNotPay: boolean;
            /**
             * Format: date-time
             * @description Date when the bill was canceled, if applicable
             */
            dateCanceled?: string | null;
            /** @description Information about who canceled the bill */
            canceledBy?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Description of the shipping destination */
            shipToDescription?: string | null;
            /** @description Batch information if the bill is part of a batch */
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            /** @description Business unit associated with the bill */
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Tax zone information for tax calculations */
            taxZone?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Vendor information for the bill */
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Remittance vendor information for payment processing */
            remittanceVendorInfo?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Shipping address information */
            shipTo?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            /**
             * Format: int64
             * @description Budget code ID associated with the bill
             */
            budgetCodeId?: number | null;
            /** @description List of line items on the bill (materials and equipment) */
            items?: components["schemas"]["Accounting.V2.ApBillItemResponse"][] | null;
            /** @description List of expense items on the bill */
            expenseItems?: components["schemas"]["Accounting.V2.ApBillExpenseItemResponse"][] | null;
            /** @description Custom field values associated with the bill */
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /**
             * Format: int64
             * @description Job ID associated with the bill, if applicable
             */
            jobId?: number | null;
            /** @description Job number associated with the bill, if applicable */
            jobNumber?: string | null;
            /**
             * Format: date-time
             * @description Date when the bill was reconciled, if applicable
             */
            dateReconciled?: string | null;
        };
        /** @enum {string} */
        "Inventory.Types.LandedCostMethod": "None" | "ByValue";
        "Accounting.V2.NamedFieldResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
        };
        "Accounting.V2.BatchResponse": {
            /** Format: int64 */
            id: number;
            number?: string | null;
            name?: string | null;
        };
        "Accounting.V2.AddressResponse": {
            street?: string | null;
            unit?: string | null;
            city?: string | null;
            state?: string | null;
            zip?: string | null;
            country?: string | null;
        };
        /** @description Represents a line item on an AP bill, containing material or equipment details */
        "Accounting.V2.ApBillItemResponse": {
            /**
             * Format: int32
             * @description Display order of the item on the bill
             */
            order: number;
            /** @description Name of the item (material or equipment) */
            name?: string | null;
            /**
             * Format: html
             * @description Detailed description of the item (may contain HTML formatting)
             */
            description?: string | null;
            /** @description Quantity of the item as a formatted string */
            quantity?: string | null;
            /** @description Cost per unit as a formatted string */
            cost?: string | null;
            /** @description Tax amount allocated to this line item */
            allocatedTax?: string | null;
            /** @description Shipping amount allocated to this line item */
            allocatedShipping?: string | null;
            /** @description Other costs allocated to this line item */
            allocatedOtherCosts?: string | null;
            /** @description Fully landed unit cost for this line item */
            fullyLandedUnitCost?: string | null;
            /** @description Inventory location where the item is stored */
            inventoryLocation?: components["schemas"]["Accounting.V2.InventoryLocationResponse"] | null;
            /** @description Vendor's part number for the item */
            vendorPartNumber?: string | null;
            /** @description Serial number of the item, if applicable */
            serialNumber?: string | null;
            /** @description General ledger account information for accounting purposes */
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** @description Cost of sale account information for accounting purposes */
            costOfSaleAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** @description Asset account information for accounting purposes */
            assetAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /**
             * Format: int64
             * @description Unique identifier for the bill item
             */
            id: number;
            /**
             * Format: int64
             * @description SKU (Stock Keeping Unit) identifier
             */
            skuId: number;
            /**
             * Format: int64
             * @description Associated receipt item ID, if applicable
             */
            receiptItemId?: number | null;
            /** @description Type of SKU (e.g., Material, Equipment) */
            skuType: string;
            /** @description SKU code identifier */
            skuCode: string;
            /**
             * Format: int64
             * @description Budget code ID associated with the item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents an inventory location where items are stored */
        "Accounting.V2.InventoryLocationResponse": {
            /**
             * Format: int64
             * @description Unique identifier for the inventory location
             */
            id: number;
            /** @description Name of the inventory location */
            name?: string | null;
            /** @description Type of inventory location (e.g., Warehouse, Truck, etc.) */
            type?: string | null;
        };
        "Accounting.V2.GLAccountResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            number?: string | null;
            type?: string | null;
            detailType?: string | null;
        };
        /** @description Represents an expense item on an AP bill for non-inventory costs */
        "Accounting.V2.ApBillExpenseItemResponse": {
            /**
             * Format: int64
             * @description Unique identifier for the expense item
             */
            id: number;
            /** @description Amount of the expense as a formatted string */
            amount: string;
            /** @description Description of the expense item */
            description?: string | null;
            /** @description General ledger account information for the expense */
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** @description Job associated with the expense, if applicable */
            job?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** @description Business unit associated with the expense */
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /**
             * Format: int64
             * @description Budget code ID associated with the expense
             */
            budgetCodeId?: number | null;
            /** @description List of project label IDs associated with the expense */
            projectLabelIds?: number[] | null;
        };
        "Accounting.V2.CustomFieldResponse": {
            name?: string | null;
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
        /** @enum {string} */
        "Accounting.V2.LogicalOperator": "And" | "Or";
        /**
         * @description Defines the synchronization status of an AP bill with external accounting systems
         *     Values: Pending (0), Posted (1), Exported (2), PostedAndExported (3)
         * @enum {string}
         */
        "Accounting.V2.ApBillSyncStatus": "Pending" | "Posted" | "Exported" | "PostedAndExported";
        /**
         * @description Defines the reconciliation status of an AP bill
         *     Values: Unreconciled (0), Reconciled (1), Discrepancy (2), Canceled (3)
         * @enum {string}
         */
        "Accounting.V2.ApBillStatus": "Unreconciled" | "Discrepancy" | "Reconciled" | "Canceled";
        /**
         * @description Defines the source or origin of an AP bill creation
         *     Values: Undefined (0), Standalone (1), Purchasing (2), Recurring (3), OCR (4), API (5)
         * @enum {string}
         */
        "Accounting.V2.ApBillSource": "Undefined" | "Standalone" | "Purchasing" | "Recurring" | "OCR" | "API";
        /**
         * @description Defines the type of AP bill
         *     Values: NotSet (0), Procurement (1), ApBill (2)
         * @enum {string}
         */
        "Accounting.V2.ApBillType": "NotSet" | "Procurement" | "ApBill";
        /** @enum {string} */
        "Accounting.V2.ApBillThreeWayMatchDiscrepancy": "NoDiscrepancy" | "Discrepancy";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse": {
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
            data: components["schemas"]["Accounting.V2.CustomFieldTypeResponse"][];
        };
        "Accounting.V2.CustomFieldTypeResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            dataType: components["schemas"]["Accounting.V2.CustomFieldDataType"];
            dataTypeOptions?: string[] | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Accounting.V2.CustomFieldDataType": "Text" | "Dropdown" | "Numeric";
        "Accounting.V2.CustomFieldUpdateRequest": {
            operations: components["schemas"]["Accounting.V2.CustomFieldOperationRequest"][];
        };
        "Accounting.V2.CustomFieldOperationRequest": {
            /** Format: int64 */
            objectId: number;
            customFields: components["schemas"]["Accounting.V2.CustomFieldPairRequest"][];
        };
        "Accounting.V2.CustomFieldPairRequest": {
            name: string;
            value?: string | null;
        };
        /** @description Response model indicating the result of marking an AP bill as exported */
        "Accounting.V2.MarkApBillAsExportedUpdateResponse": {
            /**
             * Format: int64
             * @description The ID of the AP bill that was processed
             */
            billId: number;
            /** @description Indicates whether the operation was successful */
            success: boolean;
            /** @description Error message if the operation failed, null if successful */
            errorMessage?: string | null;
        };
        /** @description Request model for marking one or more AP bills as exported */
        "Accounting.V2.MarkApBillAsExportedUpdateRequest": {
            /** @description List of AP bill IDs to mark as exported */
            billIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.ApCreditResponse": {
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
            data: components["schemas"]["Accounting.V2.ApCreditResponse"][];
        };
        "Accounting.V2.ApCreditResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            inventoryReturnId?: number | null;
            /** Format: int64 */
            jobId?: number | null;
            active: boolean;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            date: string;
            /** Format: date-time */
            canceledOn?: string | null;
            number?: string | null;
            referenceNumber?: string | null;
            memo?: string | null;
            /** Format: decimal */
            amount: number;
            /** Format: decimal */
            appliedAmount: number;
            status: components["schemas"]["Accounting.V2.VendorCreditStatus"];
            syncStatus: components["schemas"]["Accounting.V2.ApCreditSyncStatus"];
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            remittanceVendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            paymentStatus: components["schemas"]["Accounting.V2.ApPaymentStatus"];
            splits: components["schemas"]["Accounting.V2.ApCreditSplitModelResponse"][];
            /** Format: int64 */
            budgetCodeId?: number | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
        };
        /** @enum {string} */
        "Accounting.V2.VendorCreditStatus": "Unreconciled" | "Canceled";
        /** @enum {string} */
        "Accounting.V2.ApCreditSyncStatus": "Pending" | "Posted" | "Exported";
        /** @enum {string} */
        "Accounting.V2.ApPaymentStatus": "Unpaid" | "ReadyForApproval" | "Initiated" | "Paid" | "Cancelled" | "InTransit" | "Processing" | "Rejected";
        "Accounting.V2.ApCreditSplitModelResponse": {
            /** Format: int64 */
            id: number;
            active: boolean;
            /** Format: date-time */
            createdOn: string;
            /** Format: int64 */
            inventoryBillId: number;
            /** Format: int64 */
            vendorCreditId: number;
            /** Format: decimal */
            amount: number;
        };
        /** @enum {string} */
        "Accounting.V2.InventoryBillSyncStatus": "Pending" | "Posted" | "Exported" | "PostedAndExported";
        "Accounting.V2.MarkApCreditAsExportedUpdateResponse": {
            /** Format: int64 */
            apCreditId: number;
            success: boolean;
            errorMessage?: string | null;
        };
        "Accounting.V2.MarkApCreditAsExportedUpdateRequest": {
            /** Format: int64 */
            apCreditId: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.ApPaymentResponse": {
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
            data: components["schemas"]["Accounting.V2.ApPaymentResponse"][];
        };
        "Accounting.V2.ApPaymentResponse": {
            /** Format: int64 */
            id: number;
            active?: boolean | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            date: string;
            /** Format: date-time */
            approvedDate?: string | null;
            method: components["schemas"]["Accounting.V2.ApPaymentMethod"];
            name?: string | null;
            printCheck?: boolean | null;
            /** Format: decimal */
            amount: number;
            errorMessage?: string | null;
            status: components["schemas"]["Accounting.V2.ApPaymentStatus"];
            syncStatus: components["schemas"]["Accounting.V2.ApPaymentSyncStatus"];
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            glAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            remittanceVendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            splits: components["schemas"]["Accounting.V2.ApPaymentSplitApiModel"][];
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
        };
        /** @enum {string} */
        "Accounting.V2.ApPaymentMethod": "AccountingSystem" | "ServiceTitan";
        /** @enum {string} */
        "Accounting.V2.ApPaymentSyncStatus": "Pending" | "Posted" | "Exported";
        "Accounting.V2.ApPaymentSplitApiModel": {
            /** Format: int64 */
            id: number;
            active?: boolean | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: int64 */
            documentId?: number | null;
            /** Format: int64 */
            inventoryBillId?: number | null;
            /** Format: decimal */
            amount: number;
        };
        "Accounting.V2.MarkApPaymentAsExportedUpdateResponse": {
            /** Format: int64 */
            apPaymentId: number;
            success: boolean;
            errorMessage?: string | null;
        };
        "Accounting.V2.MarkApPaymentAsExportedUpdateRequest": {
            /** Format: int64 */
            apPaymentId: number;
            externalId?: string | null;
            externalMessage?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemoPublicResponse": {
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
            data: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoPublicResponse"][];
        };
        "Accounting.V2.CreditMemos.CreditMemoPublicResponse": {
            /** Format: int64 */
            id: number;
            /** Format: date */
            date: string;
            referenceNumber?: string | null;
            /** Format: decimal */
            subTotal: number;
            /** Format: decimal */
            salesTax: number;
            salesTaxCode?: components["schemas"]["Accounting.V2.SalesTaxResponse"] | null;
            /** Format: decimal */
            total: number;
            /** Format: decimal */
            balance: number;
            appliedTo?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoAppliedToCodeResponse"][] | null;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customerAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            location?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            locationAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            syncStatus?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /** Format: date-time */
            createdOn: string;
            createdBy?: string | null;
            /** Format: date-time */
            modifiedOn: string;
            modifiedBy?: string | null;
            description?: string | null;
            active: boolean;
            importId?: string | null;
            exportId?: string | null;
        };
        "Accounting.V2.SalesTaxResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            /** Format: decimal */
            taxRate: number;
        };
        "Accounting.V2.CreditMemos.CreditMemoAppliedToCodeResponse": {
            /** Format: int64 */
            appliedId: number;
            /** Format: int64 */
            appliedTo: number;
            /** Format: decimal */
            appliedAmount: number;
            /** Format: date */
            appliedOn: string;
            appliedBy?: string | null;
            appliedToReferenceNumber?: string | null;
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        /**
         * @description Operators for amount comparison filter
         * @enum {string}
         */
        "Accounting.V2.Shared.AmountComparisonOperator": "Equal" | "NotEqual" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemoItemsPublicResponse": {
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
            data: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemsPublicResponse"][];
        };
        "Accounting.V2.CreditMemos.CreditMemoItemsPublicResponse": {
            /** Format: int64 */
            id: number;
            active: boolean;
            description?: string | null;
            /** Format: decimal */
            quantity: number;
            /** Format: decimal */
            cost: number;
            /** Format: decimal */
            price: number;
            type?: string | null;
            skuName?: string | null;
            /** Format: int64 */
            skuId: number;
            /** Format: decimal */
            total: number;
            taxable: boolean;
            revenueGeneralLedgerAccount?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemGLAccountResponse"] | null;
            expensesGeneralLedgerAccount?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemGLAccountResponse"] | null;
            /** Format: date-time */
            createdOn: string;
            createdBy?: string | null;
            businessUnit?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemNamedEntityResponse"] | null;
        };
        "Accounting.V2.CreditMemos.CreditMemoItemGLAccountResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            number?: string | null;
            type?: string | null;
        };
        "Accounting.V2.CreditMemos.CreditMemoItemNamedEntityResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemosItemsPublicResponse": {
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
            data: components["schemas"]["Accounting.V2.CreditMemos.CreditMemosItemsPublicResponse"][];
        };
        "Accounting.V2.CreditMemos.CreditMemosItemsPublicResponse": {
            /** Format: int64 */
            id: number;
            active: boolean;
            description?: string | null;
            /** Format: decimal */
            quantity: number;
            /** Format: decimal */
            cost: number;
            /** Format: decimal */
            price: number;
            type?: string | null;
            skuName?: string | null;
            /** Format: int64 */
            skuId: number;
            /** Format: decimal */
            total: number;
            taxable: boolean;
            revenueGeneralLedgerAccount?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemGLAccountResponse"] | null;
            expensesGeneralLedgerAccount?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemGLAccountResponse"] | null;
            /** Format: date-time */
            createdOn: string;
            createdBy?: string | null;
            businessUnit?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoItemNamedEntityResponse"] | null;
            /** Format: int64 */
            creditMemoId: number;
        };
        "Accounting.V2.CreditMemos.CreditMemoUpdatePublicResponse": {
            /** Format: int64 */
            id: number;
            active: boolean;
            summary?: string | null;
            /** Format: date */
            date: string;
            /** Format: int64 */
            businessUnitId: number;
        };
        "Accounting.V2.CreditMemos.CreditMemoUpdatePublicRequest": {
            active?: boolean;
            summary?: string;
            /** Format: date */
            date?: string;
            /** Format: int64 */
            businessUnitId?: number;
        };
        "Accounting.V2.CreditMemos.CreditMemoAddSplitsPublicResponse": {
            /** Format: int64 */
            id: number;
            splits?: components["schemas"]["Accounting.V2.CreditMemos.CreditMemoAddSplitPublicResponse"][] | null;
        };
        "Accounting.V2.CreditMemos.CreditMemoAddSplitPublicResponse": {
            /** Format: int64 */
            invoiceId: number;
            /** Format: decimal */
            amount: number;
        };
        "Accounting.V2.CreditMemos.CreditMemoAddSplitsPublicRequest": {
            splits?: (components["schemas"]["Accounting.V2.CreditMemos.CreditMemoAddSplitPublicRequest"] | null)[] | null;
        };
        "Accounting.V2.CreditMemos.CreditMemoAddSplitPublicRequest": {
            /** Format: int64 */
            invoiceId?: number | null;
            /** Format: decimal */
            amount?: number | null;
        };
        "Accounting.V2.CreditMemos.MarkCreditMemoAsExportedResponse": {
            /** Format: int64 */
            creditMemoId: number;
            success: boolean;
            errorMessage?: string | null;
        };
        "Accounting.V2.CreditMemos.MarkCreditMemoAsExportedRequest": {
            /** Format: int64 */
            creditMemoId: number;
            externalId?: string | null;
            externalMessage?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.DetailedDepositResponse": {
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
            data: components["schemas"]["Accounting.V2.DetailedDepositResponse"][];
        };
        "Accounting.V2.DetailedDepositResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            depositStatus?: string | null;
            syncStatus?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            /** Format: date-time */
            createdOn: string;
            createdBy?: string | null;
            /** Format: date-time */
            modifiedOn?: string | null;
            active: boolean;
            importId?: string | null;
            /** Format: date-time */
            depositDate: string;
            reviewStatus?: string | null;
            /** Format: date-time */
            reviewedOn?: string | null;
            /** Format: decimal */
            grossAmount: number;
            /** Format: decimal */
            netAmount: number;
            /** Format: decimal */
            fees?: number | null;
            bankAccount?: components["schemas"]["Accounting.V2.BankAccountResponse"] | null;
            feeAccount?: components["schemas"]["Accounting.V2.FeeAccountResponse"] | null;
        };
        "Accounting.V2.BankAccountResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            number?: string | null;
            type?: string | null;
            detailType?: string | null;
        };
        "Accounting.V2.FeeAccountResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            number?: string | null;
            type?: string | null;
            detailType?: string | null;
        };
        /** @enum {string} */
        "Accounting.V2.DepositReviewStatus": "NeedsReview" | "Reviewed";
        /** @enum {string} */
        "Accounting.V2.DepositStatus": "Undefined" | "Open" | "Deposited";
        /** @enum {string} */
        "Accounting.V2.SyncStatus": "Pending" | "Posted" | "Exported";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.DetailedTransactionResponse": {
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
            data: components["schemas"]["Accounting.V2.DetailedTransactionResponse"][];
        };
        "Accounting.V2.DetailedTransactionResponse": {
            /** Format: int64 */
            id: number;
            syncStatus?: string | null;
            referenceNumber?: string | null;
            /** Format: date-time */
            date?: string | null;
            type?: string | null;
            typeId?: string | null;
            total?: string | null;
            unappliedAmount?: string | null;
            memo?: string | null;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            deposit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            createdBy?: string | null;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            appliedTo?: components["schemas"]["Accounting.V2.PaymentAppliedResponse"][] | null;
            customFields?: components["schemas"]["Accounting.CustomFieldModel"][] | null;
            authCode?: string | null;
            checkNumber?: string | null;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            createdOn: string;
            active: boolean;
        };
        "Accounting.V2.PaymentAppliedResponse": {
            appliedAmount?: string | null;
            appliedBy?: string | null;
            /** Format: int64 */
            appliedId: number;
            /** Format: date-time */
            appliedOn?: string | null;
            /** Format: int64 */
            appliedTo: number;
            appliedToReferenceNumber?: string | null;
        };
        "Accounting.CustomFieldModel": {
            name: string;
            value: string;
        };
        "Accounting.V2.MarkDepositsAsExportedRequestArgs": {
            ids?: number[] | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Accounting.V2.ExportInvoiceResponse": {
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
            data: components["schemas"]["Accounting.V2.ExportInvoiceResponse"][];
        };
        "Accounting.V2.ExportInvoiceResponse": {
            /** Format: html */
            summary?: string | null;
            items?: components["schemas"]["Accounting.V2.InvoiceItemResponse"][] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /** @description Whether this invoice is active, or not anymore. */
            active: boolean;
            discountTotal?: string | null;
            importId?: string | null;
            exportId?: string | null;
            /** Format: int64 */
            materialSkuId?: number | null;
            /** Format: int64 */
            membershipId?: number | null;
            /** Format: date-time */
            paidOn?: string | null;
            invoiceConfiguration: components["schemas"]["Accounting.V2.InvoiceConfiguration"];
            /** Format: int64 */
            id: number;
            syncStatus?: string | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            referenceNumber?: string | null;
            /** Format: date-time */
            invoiceDate?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            subTotal?: string | null;
            salesTax?: string | null;
            salesTaxCode?: components["schemas"]["Accounting.V2.SalesTaxResponse"] | null;
            /** Format: int64 */
            taxZoneId?: number | null;
            total?: string | null;
            balance?: string | null;
            invoiceType?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customerAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            location?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            locationAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            termName?: string | null;
            createdBy?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            /** Format: date-time */
            depositedOn?: string | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn?: string | null;
            /** Format: int64 */
            adjustmentToId?: number | null;
            job?: components["schemas"]["Accounting.V2.JobResponse"] | null;
            /** Format: int64 */
            projectId?: number | null;
            royalty?: components["schemas"]["Accounting.V2.RoyaltyResponse"] | null;
            employeeInfo?: components["schemas"]["Accounting.V2.EmployeeInfoResponse"] | null;
            commissionEligibilityDate?: string | null;
            sentStatus: components["schemas"]["Accounting.V2.InvoiceSentStatus"];
            reviewStatus: components["schemas"]["Accounting.V2.InvoiceReviewStatus"];
            assignedTo?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
        };
        "Accounting.V2.InvoiceItemResponse": {
            /** Format: int64 */
            id: number;
            /** Format: html */
            description?: string | null;
            quantity?: string | null;
            cost?: string | null;
            totalCost?: string | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: int64 */
            inventoryLocationId?: number | null;
            inventoryLocation?: string | null;
            price?: string | null;
            type: components["schemas"]["Accounting.V2.InvoiceItemType"];
            skuName?: string | null;
            /** Format: int64 */
            skuId: number;
            total?: string | null;
            inventory: boolean;
            taxable: boolean;
            isChargeable: boolean;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            costOfSaleAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            assetAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            membershipTypeId: number;
            itemGroup?: components["schemas"]["Accounting.V2.ItemGroupResponse"] | null;
            displayName?: string | null;
            /** Format: decimal */
            soldHours?: number | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            serviceDate?: string | null;
            /** Format: int32 */
            order: number;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** Format: int64 */
            createdById?: number | null;
            displayInAmount?: boolean | null;
            importId?: string | null;
            exportId?: string | null;
            inventoryStatus?: string | null;
            addOn: boolean;
            memberPrice?: string | null;
            /** Format: int64 */
            technicianId?: number | null;
            /** Format: int64 */
            installedEquipmentId?: number | null;
            /**
             * Format: int64
             * @description The estimate item from which this invoice item was created.
             */
            estimateItemId?: number | null;
        };
        /**
         * @description Indicates a type's item
         * @enum {string}
         */
        "Accounting.V2.InvoiceItemType": "Service" | "Material" | "Equipment" | "PriceModifier" | "Unspecified";
        "Accounting.V2.ItemGroupResponse": {
            /** Format: int64 */
            rootId: number;
            name?: string | null;
        };
        /** @enum {string} */
        "Accounting.V2.InvoiceConfiguration": "JobInvoice" | "ProjectInvoice" | "CounterSales" | "MembershipInvoice" | "InterestChargeInvoice" | "ARImportInvoice";
        "Accounting.V2.JobResponse": {
            /** Format: int64 */
            id: number;
            number?: string | null;
            type?: string | null;
        };
        "Accounting.V2.RoyaltyResponse": {
            status?: string | null;
            /** Format: date-time */
            date?: string | null;
            /** Format: date-time */
            sentOn?: string | null;
            memo?: string | null;
        };
        "Accounting.V2.EmployeeInfoResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            /** Format: date-time */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Accounting.V2.InvoiceSentStatus": "NotSent" | "Sent" | "Opened";
        /** @enum {string} */
        "Accounting.V2.InvoiceReviewStatus": "NeedsReview" | "OnHold" | "Reviewed" | "PendingApproval" | "Rejected" | "ReadyForBilling" | "Invoiced";
        /** @description Represents export API response. */
        "ExportResponse_Of_Accounting.V2.ExportInvoiceItemResponse": {
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
            data: components["schemas"]["Accounting.V2.ExportInvoiceItemResponse"][];
        };
        "Accounting.V2.ExportInvoiceItemResponse": {
            /** Format: int64 */
            id: number;
            /** Format: html */
            description?: string | null;
            quantity?: string | null;
            cost?: string | null;
            totalCost?: string | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: int64 */
            inventoryLocationId?: number | null;
            inventoryLocation?: string | null;
            price?: string | null;
            type: components["schemas"]["Accounting.V2.InvoiceItemType"];
            skuName?: string | null;
            /** Format: int64 */
            skuId: number;
            total?: string | null;
            inventory: boolean;
            taxable: boolean;
            isChargeable: boolean;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            costOfSaleAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            assetAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            membershipTypeId: number;
            itemGroup?: components["schemas"]["Accounting.V2.ItemGroupResponse"] | null;
            displayName?: string | null;
            /** Format: decimal */
            soldHours?: number | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            serviceDate?: string | null;
            /** Format: int32 */
            order: number;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** Format: int64 */
            createdById?: number | null;
            displayInAmount?: boolean | null;
            importId?: string | null;
            exportId?: string | null;
            inventoryStatus?: string | null;
            addOn: boolean;
            memberPrice?: string | null;
            /** Format: int64 */
            technicianId?: number | null;
            /** Format: int64 */
            installedEquipmentId?: number | null;
            /**
             * Format: int64
             * @description The estimate item from which this invoice item was created.
             */
            estimateItemId?: number | null;
            active: boolean;
            /** Format: int64 */
            invoiceId: number;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Accounting.V2.ExportPaymentResponse": {
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
            data: components["schemas"]["Accounting.V2.ExportPaymentResponse"][];
        };
        "Accounting.V2.ExportPaymentResponse": {
            active: boolean;
            appliedTo?: components["schemas"]["Accounting.V2.PaymentAppliedResponse"][] | null;
            authCode?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            checkNumber?: string | null;
            createdBy?: string | null;
            /** Format: date-time */
            createdOn: string;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customFields?: components["schemas"]["Accounting.CustomFieldModel"][] | null;
            /** Format: date-time */
            date?: string | null;
            deposit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            id: number;
            memo?: string | null;
            /** Format: date-time */
            modifiedOn: string;
            referenceNumber?: string | null;
            /** Format: int64 */
            refundedPaymentId?: number | null;
            syncStatus?: string | null;
            total?: string | null;
            type?: string | null;
            typeId?: string | null;
            unappliedAmount?: string | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Accounting.V2.ExportInventoryBillResponse": {
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
            data: components["schemas"]["Accounting.V2.ExportInventoryBillResponse"][];
        };
        "Accounting.V2.ExportInventoryBillResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            purchaseOrderId?: number | null;
            syncStatus?: string | null;
            referenceNumber?: string | null;
            vendorNumber?: string | null;
            summary?: string | null;
            /** Format: date-time */
            billDate?: string | null;
            billAmount?: string | null;
            taxAmount?: string | null;
            shippingAmount?: string | null;
            landedCostMethod: components["schemas"]["Inventory.Types.LandedCostMethod"];
            otherAmount?: string | null;
            createdBy?: string | null;
            /** Format: date-time */
            createdOn?: string | null;
            /** Format: date-time */
            modifiedOn?: string | null;
            termName?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            shipToDescription?: string | null;
            /** Format: date-time */
            postDate?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            taxZone?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            shipTo?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            /**
             * Format: int64
             * @description Budget code ID associated with the bill
             */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Accounting.V2.InventoryBillItemResponse"][] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /** Format: int64 */
            jobId?: number | null;
            jobNumber?: string | null;
            /** Format: date-time */
            dateReconciled?: string | null;
            active: boolean;
        };
        "Accounting.V2.InventoryBillItemResponse": {
            /** Format: int32 */
            order: number;
            name?: string | null;
            /** Format: html */
            description?: string | null;
            quantity?: string | null;
            cost?: string | null;
            allocatedTax?: string | null;
            allocatedShipping?: string | null;
            allocatedOtherCosts?: string | null;
            fullyLandedUnitCost?: string | null;
            inventoryLocation?: string | null;
            serialNumber?: string | null;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            costOfSaleAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            assetAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            skuId: number;
            /** Format: int64 */
            receiptItemId?: number | null;
            skuType: string;
            skuCode: string;
            /**
             * Format: int64
             * @description Budget code ID associated with the item
             */
            budgetCodeId?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.GlAccountExtendedResponse": {
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
            data: components["schemas"]["Accounting.V2.GlAccountExtendedResponse"][];
        };
        "Accounting.V2.GlAccountExtendedResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            number?: string | null;
            description?: string | null;
            type?: string | null;
            subtype?: string | null;
            active: boolean;
            isIntacctGroup: boolean;
            isIntacctBankAccount: boolean;
            source: components["schemas"]["Accounting.V2.GeneralLedgerAccountSource"];
            defaultAccountType?: components["schemas"]["Accounting.V2.DefaultAccountType"] | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Accounting.V2.GeneralLedgerAccountSource": "Undefined" | "AccountingSystem" | "ManuallyCreated" | "PublicApi";
        /** @enum {string} */
        "Accounting.V2.DefaultAccountType": "CheckingAccount" | "UndepositedFunds" | "AccountsReceivable" | "Inventory" | "AccountsPayable" | "CustomerRefundsPayable" | "SalesTaxPayable" | "CustomerDeposits" | "MembershipAgreements" | "RetainedEarnings" | "Revenue" | "MembershipRevenue" | "Refunds" | "CostOfGoodsSoldMaterials" | "CostOfGoodsSoldEquipment" | "CostOfGoodsSoldShipping" | "CostOfGoodsSoldTax" | "PayrollLabor" | "PayrollEmployeeTaxes" | "EmployeeBenefits" | "EmployerTaxes" | "EmployerBenefits" | "Deductions" | "InventoryAdjustments" | "CostOfGoodsSoldRestockingFee" | "CostOfGoodsSoldLabor" | "PayrollLiability" | "PayrollClearing" | "CommittedCosts" | "GoodsReceivedNotInvoiced" | "VendorDiscount" | "ProcessingFees" | "GoodsReturnedNotCredited" | "UseTaxExpense" | "UseTaxLiability" | "CreditCardPayable" | "UncategorizedExpense";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.GlAccountTypeResponse": {
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
            data: components["schemas"]["Accounting.V2.GlAccountTypeResponse"][];
        };
        "Accounting.V2.GlAccountTypeResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            parentTypeId?: number | null;
            name?: string | null;
            active: boolean;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
        };
        "Accounting.V2.GlAccountCreateRequest": {
            name?: string | null;
            number?: string | null;
            description?: string | null;
            type?: string | null;
            subtype?: string | null;
        };
        "Accounting.V2.GlAccountUpdateRequest": {
            name?: string | null;
            number?: string | null;
            description?: string | null;
            type?: string | null;
            subtype?: string | null;
            active?: boolean | null;
        };
        "Accounting.V2.InventoryBillResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            purchaseOrderId?: number | null;
            syncStatus?: string | null;
            referenceNumber?: string | null;
            vendorNumber?: string | null;
            summary?: string | null;
            /** Format: date-time */
            billDate?: string | null;
            billAmount?: string | null;
            taxAmount?: string | null;
            shippingAmount?: string | null;
            landedCostMethod: components["schemas"]["Inventory.Types.LandedCostMethod"];
            otherAmount?: string | null;
            createdBy?: string | null;
            /** Format: date-time */
            createdOn?: string | null;
            /** Format: date-time */
            modifiedOn?: string | null;
            termName?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            shipToDescription?: string | null;
            /** Format: date-time */
            postDate?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            taxZone?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            shipTo?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            /**
             * Format: int64
             * @description Budget code ID associated with the bill
             */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Accounting.V2.InventoryBillItemResponse"][] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /** Format: int64 */
            jobId?: number | null;
            jobNumber?: string | null;
            /** Format: date-time */
            dateReconciled?: string | null;
        };
        /** @enum {string} */
        "Accounting.V2.BillType": "NotSet" | "Procurement" | "ApBill" | "RecurringBill";
        /** @enum {string} */
        "Accounting.V2.InventoryBillThreeWayMatchDiscrepancy": "NoDiscrepancy" | "Discrepancy";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.InventoryBillResponse": {
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
            data: components["schemas"]["Accounting.V2.InventoryBillResponse"][];
        };
        "Accounting.V2.MarkInventoryBillAsExportedUpdateResponse": {
            /** Format: int64 */
            inventoryBillId: number;
            success: boolean;
            errorMessage?: string | null;
        };
        "Accounting.V2.MarkInventoryBillAsExportedUpdateRequest": {
            inventoryBillIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.InvoiceResponse": {
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
            data: components["schemas"]["Accounting.V2.InvoiceResponse"][];
        };
        "Accounting.V2.InvoiceResponse": {
            /** Format: int64 */
            id: number;
            syncStatus?: string | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            referenceNumber?: string | null;
            /** Format: date-time */
            invoiceDate?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            subTotal?: string | null;
            salesTax?: string | null;
            salesTaxCode?: components["schemas"]["Accounting.V2.SalesTaxResponse"] | null;
            /** Format: int64 */
            taxZoneId?: number | null;
            total?: string | null;
            balance?: string | null;
            invoiceType?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customerAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            location?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            locationAddress?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            termName?: string | null;
            createdBy?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            /** Format: date-time */
            depositedOn?: string | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn?: string | null;
            /** Format: int64 */
            adjustmentToId?: number | null;
            job?: components["schemas"]["Accounting.V2.JobResponse"] | null;
            /** Format: int64 */
            projectId?: number | null;
            royalty?: components["schemas"]["Accounting.V2.RoyaltyResponse"] | null;
            employeeInfo?: components["schemas"]["Accounting.V2.EmployeeInfoResponse"] | null;
            commissionEligibilityDate?: string | null;
            sentStatus: components["schemas"]["Accounting.V2.InvoiceSentStatus"];
            reviewStatus: components["schemas"]["Accounting.V2.InvoiceReviewStatus"];
            assignedTo?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            /** Format: html */
            summary?: string | null;
            items?: components["schemas"]["Accounting.V2.InvoiceItemResponse"][] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            /** @description Whether this invoice is active, or not anymore. */
            active: boolean;
            discountTotal?: string | null;
            importId?: string | null;
            exportId?: string | null;
            /** Format: int64 */
            materialSkuId?: number | null;
            /** Format: int64 */
            membershipId?: number | null;
            /** Format: date-time */
            paidOn?: string | null;
            invoiceConfiguration: components["schemas"]["Accounting.V2.InvoiceConfiguration"];
        };
        /** @enum {string} */
        "Accounting.Share.ActiveStateFilterType": "ActiveOnly" | "InactiveOnly" | "All";
        /**
         * @description Indicates a transaction's status.
         * @enum {string}
         */
        "Accounting.V2.TransactionStatus": "Pending" | "Posted" | "Exported";
        /** @enum {string} */
        "Accounting.V2.BalanceComparer": "Equals" | "NotEquals" | "Greater" | "Less";
        "Accounting.V2.AdjustmentInvoiceCreateRequest": {
            number?: string | null;
            /** Format: int64 */
            typeId?: number | null;
            /** Format: date-time */
            invoicedOn?: string | null;
            /** Format: decimal */
            subtotal?: number | null;
            /** Format: decimal */
            tax?: number | null;
            /** Format: int64 */
            taxZoneId?: number | null;
            /** Format: html */
            summary?: string | null;
            royaltyStatus?: components["schemas"]["Accounting.V2.RoyaltyStatus"] | null;
            /** Format: date-time */
            royaltyDate?: string | null;
            /** Format: date-time */
            royaltySentOn?: string | null;
            royaltyMemo?: string | null;
            exportId?: string | null;
            reviewStatus?: components["schemas"]["Accounting.V2.InvoiceReviewStatus"] | null;
            /** Format: int64 */
            assignedToId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Accounting.V2.InvoiceItemUpdateRequest"][] | null;
            /** Format: int64 */
            adjustmentToId: number;
        };
        /**
         * @description Indicates royalty status of invoice
         * @enum {string}
         */
        "Accounting.V2.RoyaltyStatus": "Pending" | "Sent" | "Failed";
        "Accounting.V2.InvoiceItemUpdateRequest": {
            /** Format: int64 */
            skuId?: number | null;
            skuName?: string | null;
            /** Format: int64 */
            technicianId?: number | null;
            /** Format: html */
            description: string;
            /** Format: decimal */
            quantity: number;
            /** Format: decimal */
            unitPrice?: number | null;
            /** Format: decimal */
            cost?: number | null;
            isAddOn?: boolean | null;
            signature?: string | null;
            technicianAcknowledgementSignature?: string | null;
            /** Format: date-time */
            installedOn?: string | null;
            inventoryWarehouseName?: string | null;
            skipUpdatingMembershipPrices?: boolean | null;
            itemGroupName?: string | null;
            /** Format: int64 */
            itemGroupRootId?: number | null;
            /** Format: int64 */
            inventoryLocationId?: number | null;
            /** Format: int64 */
            durationBillingId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: int64 */
            id?: number | null;
        };
        "Accounting.V2.InvoiceUpdateRequest": {
            number?: string | null;
            /** Format: int64 */
            typeId?: number | null;
            /** Format: date-time */
            invoicedOn?: string | null;
            /** Format: decimal */
            subtotal?: number | null;
            /** Format: decimal */
            tax?: number | null;
            /** Format: int64 */
            taxZoneId?: number | null;
            /** Format: html */
            summary?: string | null;
            royaltyStatus?: components["schemas"]["Accounting.V2.RoyaltyStatus"] | null;
            /** Format: date-time */
            royaltyDate?: string | null;
            /** Format: date-time */
            royaltySentOn?: string | null;
            royaltyMemo?: string | null;
            exportId?: string | null;
            reviewStatus?: components["schemas"]["Accounting.V2.InvoiceReviewStatus"] | null;
            /** Format: int64 */
            assignedToId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            items?: components["schemas"]["Accounting.V2.InvoiceItemUpdateRequest"][] | null;
            /** Format: date */
            dueDate?: string | null;
            payments?: components["schemas"]["Accounting.V2.PaymentSettlementUpdateRequest"][] | null;
        };
        "Accounting.V2.PaymentSettlementUpdateRequest": {
            /** Format: int64 */
            id: number;
            settlementStatus?: components["schemas"]["Accounting.V2.SettlementStatus"] | null;
            /** Format: date-time */
            settlementDate?: string | null;
        };
        /**
         * @description Indicates settlement status of payment
         * @enum {string}
         */
        "Accounting.V2.SettlementStatus": "NotSettled" | "Settled";
        "Accounting.V2.MarkInvoiceAsExportedUpdateResponse": {
            /** Format: int64 */
            invoiceId: number;
            success: boolean;
            errorMessage?: string | null;
        };
        "Accounting.V2.MarkInvoiceAsExportedUpdateRequest": {
            /** Format: int64 */
            invoiceId: number;
            externalId?: string | null;
            externalMessage?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.GetInvoiceTasksResponse": {
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
            data: components["schemas"]["Accounting.V2.GetInvoiceTasksResponse"][];
        };
        "Accounting.V2.GetInvoiceTasksResponse": {
            /** Format: guid */
            taskId: string;
            type?: string | null;
            name?: string | null;
            status?: string | null;
            /** Format: guid */
            assigneeId?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            description?: string | null;
            templateId?: string | null;
            reason?: string | null;
            relations: components["schemas"]["Accounting.V2.InvoiceTaskRelationResponse"][];
        };
        "Accounting.V2.InvoiceTaskRelationResponse": {
            type?: string | null;
            /** Format: guid */
            taskId: string;
        };
        "Accounting.V2.CreateInvoiceTaskResponse": {
            executionId: string;
            tasks: components["schemas"]["Accounting.V2.CreatedTaskResponse"][];
            status: string;
            errors: components["schemas"]["Accounting.V2.TemplateExecutionErrorResponse"][];
        };
        "Accounting.V2.CreatedTaskResponse": {
            /** Format: guid */
            taskId: string;
            key: string;
        };
        "Accounting.V2.TemplateExecutionErrorResponse": {
            message: string;
        };
        "Accounting.V2.CreateInvoiceTaskRequest": {
            templateId: string;
            variables?: {
                [key: string]: string;
            } | null;
        };
        "Accounting.V2.UpdateInvoiceTaskResponse": {
            /** Format: guid */
            taskId: string;
        };
        "Accounting.V2.UpdateInvoiceTaskRequest": {
            name?: string | null;
            status?: string | null;
            /** Format: guid */
            assigneeId?: string | null;
            /** Format: date-time */
            dueDate?: string | null;
            description?: string | null;
        };
        "Accounting.V2.JournalEntryResponse": {
            /** Format: guid */
            id?: string | null;
            /** Format: date-time */
            createdOn: string;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: int32 */
            number: number;
            name?: string | null;
            source: components["schemas"]["Accounting.V2.JournalEntrySource"];
            status: components["schemas"]["Accounting.V2.JournalEntryPostingStatus"];
            syncStatus: components["schemas"]["Accounting.V2.JournalEntrySyncStatus"];
            /** Format: int32 */
            versionId: number;
            /** Format: int32 */
            lastSyncVersionId?: number | null;
            message?: string | null;
            /** Format: date */
            postDate?: string | null;
            /** Format: date-time */
            exportedOn?: string | null;
            exportedBy?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customFields?: components["schemas"]["Accounting.V2.CustomFieldResponse"][] | null;
            url?: string | null;
            isEmpty: boolean;
        };
        /** @enum {string} */
        "Accounting.V2.JournalEntrySource": "ServiceTitan" | "External";
        /** @enum {string} */
        "Accounting.V2.JournalEntryPostingStatus": "Open" | "Closed";
        /**
         * @description Indicates a journal entry's sync status.
         * @enum {string}
         */
        "Accounting.V2.JournalEntrySyncStatus": "NotSynced" | "InProgress" | "Synced" | "OutOfSync" | "Error" | "Excluded";
        /** @description Represents paginated API response. */
        "Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntryResponse": {
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /**
             * Format: int32
             * @description Page number for this query
             */
            page: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Accounting.V2.JournalEntryResponse"][];
        };
        /** @enum {string} */
        "Accounting.V2.JournalEntryTransactionType": "Unspecified" | "Invoice" | "Payment" | "Bill" | "VendorCredit" | "VendorPayment" | "InventoryAdjustment" | "PaymentApplication" | "BankDeposit" | "InventoryReturn" | "InventoryTransfer" | "RevenueRecognition" | "Estimate" | "PurchaseOrder" | "Receipt" | "GrossPayItem" | "PayrollPeriod" | "Manual" | "ItemConsumption" | "External" | "CreditMemo" | "CreditMemoApplication" | "ExpenseTransaction";
        /**
         * @description Indicates whether empty journal entries should be included in journal entry query results
         * @enum {string}
         */
        "Accounting.V2.EmptyJeHandling": "IncludeExceptNotSynced" | "Include" | "Exclude";
        /** @description Represents paginated API response. */
        "Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntrySummaryResponse": {
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /**
             * Format: int32
             * @description Page number for this query
             */
            page: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Accounting.V2.JournalEntrySummaryResponse"][];
        };
        "Accounting.V2.JournalEntrySummaryResponse": {
            /** Format: date */
            postDate?: string | null;
            account: components["schemas"]["Accounting.V2.GeneralLedgerAccount"];
            /** Format: decimal */
            credit: number;
            /** Format: decimal */
            debit: number;
            memo?: string | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
        };
        "Accounting.V2.GeneralLedgerAccount": {
            /** Format: int64 */
            id: number;
            number?: string | null;
            name?: string | null;
            type?: string | null;
            subtype?: string | null;
        };
        /** @description Represents paginated API response. */
        "Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntryDetailsResponse": {
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /**
             * Format: int32
             * @description Page number for this query
             */
            page: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Accounting.V2.JournalEntryDetailsResponse"][];
        };
        "Accounting.V2.JournalEntryDetailsResponse": {
            /** Format: date */
            postDate?: string | null;
            account: components["schemas"]["Accounting.V2.GeneralLedgerAccount"];
            /** Format: decimal */
            debit: number;
            /** Format: decimal */
            credit: number;
            memo?: string | null;
            /** Format: decimal */
            quantity?: number | null;
            /** Format: decimal */
            unitAmount?: number | null;
            externalObjects?: components["schemas"]["Accounting.V2.ExternalObjectResponse"][] | null;
            transaction?: components["schemas"]["Accounting.V2.JournalEntryTransaction"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            vendor?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            inventoryLocation?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            job?: components["schemas"]["Accounting.V2.NumberFieldResponse"] | null;
            customerLocation?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            paymentType?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            project?: components["schemas"]["Accounting.V2.NumberFieldResponse"] | null;
            serviceAgreement?: components["schemas"]["Accounting.V2.NumberFieldResponse"] | null;
            appliedTo?: components["schemas"]["Accounting.V2.JournalEntryTransaction"] | null;
            sku?: components["schemas"]["Accounting.V2.JournalEntrySku"] | null;
            /** Format: date */
            transactionDate?: string | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            internalCostType?: components["schemas"]["Accounting.V2.JournalEntryCostType"] | null;
        };
        "Accounting.V2.ExternalObjectResponse": {
            id?: string | null;
            type?: string | null;
            name?: string | null;
            url?: string | null;
        };
        "Accounting.V2.JournalEntryTransaction": {
            /** Format: int64 */
            id: number;
            type: components["schemas"]["Accounting.V2.JournalEntryTransactionType"];
            refNumber?: string | null;
        };
        "Accounting.V2.NumberFieldResponse": {
            /** Format: int64 */
            id: number;
            number?: string | null;
        };
        "Accounting.V2.JournalEntrySku": {
            /** Format: int64 */
            id: number;
            type?: components["schemas"]["Accounting.V2.JournalEntrySkuType"] | null;
            code?: string | null;
        };
        /** @enum {string} */
        "Accounting.V2.JournalEntrySkuType": "Service" | "Material" | "Equipment" | "PriceModifier" | "Unspecified";
        /** @enum {string} */
        "Accounting.V2.JournalEntryCostType": "None" | "Service" | "Material" | "Equipment" | "Labor" | "LaborBurden" | "Tax" | "Shipping" | "RestockingFee" | "OtherDirectCost" | "LaborUnpaid" | "OtherExpense";
        "Accounting.V2.JournalEntryCreateRequest": {
            name?: string | null;
            status: components["schemas"]["Accounting.V2.JournalEntryPostingStatus"];
            /** Format: int32 */
            versionId: number;
            message?: string | null;
            /** Format: date */
            postDate?: string | null;
            customFields?: {
                [key: string]: string | null;
            } | null;
            lines?: components["schemas"]["Accounting.V2.JournalEntryLineCreateRequest"][] | null;
        };
        "Accounting.V2.JournalEntryLineCreateRequest": {
            /** Format: date */
            postDate?: string | null;
            /** Format: int64 */
            accountId?: number | null;
            /** Format: decimal */
            debit: number;
            /** Format: decimal */
            credit: number;
            memo?: string | null;
            /** Format: decimal */
            quantity?: number | null;
            /** Format: decimal */
            unitAmount?: number | null;
            externalObjects?: components["schemas"]["Accounting.V2.ExternalObjectSaveRequest"][] | null;
            /** Format: int64 */
            businessUnitId?: number | null;
            /** Format: int64 */
            customerId?: number | null;
            /** Format: int64 */
            vendorId?: number | null;
            /** Format: int64 */
            inventoryLocationId?: number | null;
            /** Format: int64 */
            jobId?: number | null;
            /** Format: int64 */
            customerLocationId?: number | null;
            /** Format: int64 */
            paymentTypeId?: number | null;
            /** Format: int64 */
            projectId?: number | null;
            /** Format: int64 */
            budgetCodeId?: number | null;
            /** Format: int64 */
            employeeId?: number | null;
            /** Format: int64 */
            serviceAgreementId?: number | null;
            appliedTo?: components["schemas"]["Accounting.V2.JournalEntryTransaction"] | null;
            sku?: components["schemas"]["Accounting.V2.JournalEntrySkuSaveRequest"] | null;
            internalCostType?: components["schemas"]["Accounting.V2.JournalEntryCostType"] | null;
        };
        "Accounting.V2.ExternalObjectSaveRequest": {
            id?: string | null;
            type?: string | null;
            name?: string | null;
            url?: string | null;
        };
        "Accounting.V2.JournalEntrySkuSaveRequest": {
            /** Format: int64 */
            id: number;
            type: components["schemas"]["Accounting.V2.JournalEntrySkuType"];
        };
        "Accounting.V2.JournalEntrySaveRequest": {
            name?: string | null;
            status: components["schemas"]["Accounting.V2.JournalEntryPostingStatus"];
            /** Format: int32 */
            versionId: number;
            message?: string | null;
            /** Format: date */
            postDate?: string | null;
            customFields?: {
                [key: string]: string | null;
            } | null;
            lines?: components["schemas"]["Accounting.V2.JournalEntryLineCreateRequest"][] | null;
        };
        "Accounting.V2.JournalEntryUpdateRequest": {
            /** @description New journal entry status */
            status?: components["schemas"]["Accounting.V2.JournalEntryStatus"];
            /**
             * @description Custom fields to create or update.\
             *                 An existing custom field cannot be deleted, but it can be set to null.\
             *                 Existing fields not specified in this request will not be affected.\
             *                 Maximum 5 custom fields per journal entry are supported.
             */
            customFields?: {
                [key: string]: string | null;
            } | null;
        };
        /**
         * @description Indicates a journal entry's status.
         * @enum {string}
         */
        "Accounting.V2.JournalEntryStatus": "Open" | "Closed";
        "Accounting.V2.JournalEntrySyncUpdateRequest": {
            /** @description Journal entry Sync Status */
            syncStatus: components["schemas"]["Accounting.V2.JournalEntrySyncStatus"];
            /**
             * Format: int32
             * @description Jouranl entry version that should match the version Synced.
             *                 Required when setting to Sync Status Synced.
             *                 Not used for any other Sync Status.
             */
            versionId?: number;
            /** @description Message related to the new sync state */
            message?: string;
            /**
             * @description Custom fields to create or update.\
             *                 An existing custom field cannot be deleted, but it can be set to null.\
             *                 Existing fields not specified in this request will not be affected.\
             *                 Maximum 5 custom fields per journal entry are supported.
             */
            customFields?: {
                [key: string]: string | null;
            } | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.DetailedPaymentResponse": {
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
            data: components["schemas"]["Accounting.V2.DetailedPaymentResponse"][];
        };
        "Accounting.V2.DetailedPaymentResponse": {
            active: boolean;
            appliedTo?: components["schemas"]["Accounting.V2.PaymentAppliedResponse"][] | null;
            authCode?: string | null;
            batch?: components["schemas"]["Accounting.V2.BatchResponse"] | null;
            businessUnit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            checkNumber?: string | null;
            createdBy?: string | null;
            /** Format: date-time */
            createdOn: string;
            customer?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            customFields?: components["schemas"]["Accounting.CustomFieldModel"][] | null;
            /** Format: date-time */
            date?: string | null;
            deposit?: components["schemas"]["Accounting.V2.NamedFieldResponse"] | null;
            generalLedgerAccount?: components["schemas"]["Accounting.V2.GLAccountResponse"] | null;
            /** Format: int64 */
            id: number;
            memo?: string | null;
            /** Format: date-time */
            modifiedOn: string;
            referenceNumber?: string | null;
            /** Format: int64 */
            refundedPaymentId?: number | null;
            syncStatus?: string | null;
            total?: string | null;
            type?: string | null;
            typeId?: string | null;
            unappliedAmount?: string | null;
        };
        /** @enum {string} */
        "Accounting.V2.PaymentTransactionType": "Undefined" | "JournalEntry" | "ReceivePayment";
        "Accounting.V2.PaymentResponse": {
            active?: boolean | null;
            authCode?: string | null;
            checkNumber?: string | null;
            /** Format: int64 */
            customerId?: number | null;
            /** @description Gets or sets the identifier when exported. */
            exportId?: string | null;
            /** Format: int64 */
            id: number;
            memo?: string | null;
            /** Format: date-time */
            paidOn?: string | null;
            splits: components["schemas"]["Accounting.V2.PaymentSplitApiModel"][];
            status?: components["schemas"]["Accounting.V2.PaymentStatus"] | null;
            transactionStatus?: components["schemas"]["Accounting.V2.TransactionProcessingStatus"] | null;
            /** Format: int64 */
            typeId: number;
        };
        "Accounting.V2.PaymentSplitApiModel": {
            /** Format: decimal */
            amount?: number | null;
            /** Format: int64 */
            invoiceId?: number | null;
            invoiceNumber?: string | null;
        };
        /**
         * @description Indicates a payment's status.
         * @enum {string}
         */
        "Accounting.V2.PaymentStatus": "Pending" | "Posted" | "Exported";
        /**
         * @description Indicates a transaction's status.
         * @enum {string}
         */
        "Accounting.V2.TransactionProcessingStatus": "Success" | "Fail" | "Pending" | "Rejected";
        "Accounting.V2.PaymentUpdateRequest": {
            active?: boolean;
            authCode?: string;
            checkNumber?: string;
            /** @description Gets or sets the identifier when exported. */
            exportId?: string;
            memo?: string;
            /** Format: date-time */
            paidOn?: string;
            splits: components["schemas"]["Accounting.V2.PaymentSplitApiModel"][];
            status?: components["schemas"]["Accounting.V2.PaymentStatus"];
            /** Format: int64 */
            typeId: number;
        };
        "Accounting.V2.PaymentStatusBatchRequest": {
            paymentIds: number[];
            status: components["schemas"]["Accounting.V2.PaymentStatus"];
        };
        "Accounting.V2.PaymentTermAPIModel": {
            /** Format: int64 */
            id?: number | null;
            name?: string | null;
            dueDayType: components["schemas"]["Accounting.V2.PaymentTermDueDayType"];
            /** Format: int32 */
            dueDay?: number | null;
            isCustomerDefault: boolean;
            isVendorDefault: boolean;
            active: boolean;
            inUse?: boolean | null;
            /** Format: date-time */
            modifiedOn: string;
            /** Format: date-time */
            createdOn: string;
            paymentTermDiscountModel: components["schemas"]["Accounting.V2.PaymentTermDiscountAPIModel"];
            interestSettings: components["schemas"]["Accounting.V2.InterestSettingsAPIModel"];
        };
        /** @enum {string} */
        "Accounting.V2.PaymentTermDueDayType": "NumberOfDays" | "CertainDayOfCurrentMonth" | "CertainDayOfFollowingMonth";
        "Accounting.V2.PaymentTermDiscountAPIModel": {
            /** Format: int64 */
            id?: number | null;
            discountApplyTo?: components["schemas"]["Accounting.V2.PaymentTermApplyTo"] | null;
            /** Format: decimal */
            discount?: number | null;
            discountType?: components["schemas"]["Accounting.V2.PaymentTermValueType"] | null;
            account?: string | null;
            applyBy?: components["schemas"]["Accounting.V2.DiscountAppliedBy"] | null;
            /** Format: int32 */
            applyByValue?: number | null;
        };
        /** @enum {string} */
        "Accounting.V2.PaymentTermApplyTo": "ApplyToTotalAmount" | "ApplyToSubtotalAmount" | "ApplyToRemainingBalance";
        /** @enum {string} */
        "Accounting.V2.PaymentTermValueType": "Fixed" | "Percent";
        /** @enum {string} */
        "Accounting.V2.DiscountAppliedBy": "NumberOfDays" | "DayOfMonth" | "DayOfFollowingMonth";
        "Accounting.V2.InterestSettingsAPIModel": {
            /** Format: int64 */
            id?: number | null;
            rateType: components["schemas"]["Accounting.V2.InterestRateType"];
            /** Format: decimal */
            flatRateValue?: number | null;
            /** Format: decimal */
            percentageRateValue?: number | null;
            chargeMethod?: components["schemas"]["Accounting.V2.InterestChargeMethod"] | null;
            frequency: components["schemas"]["Accounting.V2.InterestChargeFrequency"];
            /** Format: int32 */
            gracePeriod?: number | null;
            targetInvoices: components["schemas"]["Accounting.V2.InterestTargetInvoice"][];
            /** Format: int64 */
            taskId: number;
            taskDisplayName: string;
        };
        /** @enum {string} */
        "Accounting.V2.InterestRateType": "Flat" | "Percentage" | "MaxOfFlatAndPercentage";
        /** @enum {string} */
        "Accounting.V2.InterestChargeMethod": "PrincipalOnly" | "Total";
        /** @enum {string} */
        "Accounting.V2.InterestChargeFrequency": "Once" | "Daily" | "Monthly";
        /** @enum {string} */
        "Accounting.V2.InterestTargetInvoice": "JobInvoices" | "MembershipInvoices" | "ProgressInvoices" | "PointOfSalesInvoices";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.PaymentTermAPIModel": {
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
            data: components["schemas"]["Accounting.V2.PaymentTermAPIModel"][];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.PaymentTypeResponse": {
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
            data: components["schemas"]["Accounting.V2.PaymentTypeResponse"][];
        };
        "Accounting.V2.PaymentTypeResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            /** Format: date-time */
            modifiedOn?: string | null;
            /** Format: date-time */
            createdOn?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.RemittanceVendorResponse": {
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
            data: components["schemas"]["Accounting.V2.RemittanceVendorResponse"][];
        };
        /** @description Remittance vendor response */
        "Accounting.V2.RemittanceVendorResponse": {
            /**
             * Format: int64
             * @description Remittance vendor Id
             */
            id: number;
            /** @description Remittance vendor name */
            name?: string | null;
            /** @description Active/Inactive status */
            active: boolean;
            /** @description Customer Id */
            customerId?: string | null;
            /** @description Indicates whether vendor validated by user during first payment approval */
            isApproved: boolean;
            /** @description Indicates whether there were paid payments for this vendor */
            isVerified: boolean;
            /** @description Remittance vendor contact information */
            contactInfo?: components["schemas"]["Accounting.V2.RemittanceVendorContactInfoResponse"] | null;
            /** @description Remittance vendor address */
            address?: components["schemas"]["Accounting.V2.AddressResponse"] | null;
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
        };
        /** @description Remittance vendor contact info response */
        "Accounting.V2.RemittanceVendorContactInfoResponse": {
            /** @description Remittance vendor first name */
            firstName?: string | null;
            /** @description Remittance vendor last name */
            lastName?: string | null;
            /** @description Remittance vendor phone */
            phone?: string | null;
            /** @description Remittance vendor email */
            email?: string | null;
            /** @description Remittance vendor fax */
            fax?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.TaxZoneResponse": {
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
            data: components["schemas"]["Accounting.V2.TaxZoneResponse"][];
        };
        "Accounting.V2.TaxZoneResponse": {
            /**
             * Format: int64
             * @description Tax Zone Id
             */
            id: number;
            /** @description Tax Zone Name */
            name?: string | null;
            /**
             * Format: int32
             * @description Tax Zone Color
             */
            color?: number | null;
            /** @description Tax Zone has separate material and labor taxes */
            isTaxRateSeparated: boolean;
            /** @description Tax Zone has multiple rates */
            isMultipleTaxZone: boolean;
            /** @description Tax Zone rates */
            rates: components["schemas"]["Accounting.V2.TaxRateResponse"][];
            /**
             * Format: date-time
             * @description Date which the Tax Zone was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date which the Tax Zone was modified
             */
            modifiedOn: string;
            /** @description Tax zone is active */
            active: boolean;
        };
        "Accounting.V2.TaxRateResponse": {
            /**
             * Format: int64
             * @description Tax Rate Id
             */
            id?: number | null;
            /** @description Tax Rate Name */
            taxName?: string | null;
            /** @description Indicates how the tax rate is applied (Subtotal, Labor, Material) */
            taxBaseType: components["schemas"]["Accounting.V2.TaxBaseTypeNames"][];
            /**
             * Format: decimal
             * @description Tax rate as a fractional/decimal value
             */
            taxRate: number;
            /** @description The Quickbooks item that relates to this tax rate */
            salesTaxItem?: string | null;
        };
        /**
         * @description Indicates the types of tax applied for a given rate
         * @enum {string}
         */
        "Accounting.V2.TaxBaseTypeNames": "Subtotal" | "Labor" | "Material";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ApBills_GetListPaginated: {
        parameters: {
            query?: {
                /** @description Comma-separated list of specific AP bill IDs to retrieve */
                ids?: string;
                /** @description Filter by specific batch ID */
                batchId?: number;
                /** @description Filter by batch number */
                batchNumber?: number;
                /** @description Filter by bill number (partial match supported) */
                billNumber?: string;
                /** @description Comma-separated list of business unit IDs to filter by */
                businessUnitIds?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                /** @description Filter bills created on or after this date */
                dateFrom?: string;
                /** @description Filter bills created on or before this date */
                dateTo?: string;
                /** @description Filter by job number (partial match supported) */
                jobNumber?: string;
                /** @description Filter by purchase order number (partial match supported) */
                purchaseOrderNumber?: string;
                /** @description Comma-separated list of purchase order types to filter by */
                purchaseOrderTypes?: string;
                /** @description Filter by sync status values */
                syncStatuses?: components["schemas"]["Accounting.V2.ApBillSyncStatus"][];
                /** @description Filter by bill status values */
                statuses?: components["schemas"]["Accounting.V2.ApBillStatus"][];
                /** @description Filter by bill source values */
                sources?: components["schemas"]["Accounting.V2.ApBillSource"][];
                /** @description Filter bills with cost greater than or equal to this amount */
                minCost?: number;
                /** @description Filter bills with cost less than or equal to this amount */
                maxCost?: number;
                /**
                 * @description Filter by bill type (defaults to Procurement)\
                 *     Values: [NotSet, Procurement, ApBill]
                 */
                billType?: string & components["schemas"]["Accounting.V2.ApBillType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Filter by bills reconciled on or before this date */
                dateReconciledBefore?: string;
                /** @description Filter by bills reconciled after this date */
                dateReconciledOnOrAfter?: string;
                /**
                 * @description Filter by three-way match discrepancy status\
                 *     Values: [NoDiscrepancy, Discrepancy]
                 */
                threeWayMatchDiscrepancy?: string & components["schemas"]["Accounting.V2.ApBillThreeWayMatchDiscrepancy"];
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
            /** @description Successfully retrieved the paginated list of AP bills */
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
                     *           "purchaseOrderId": 0,
                     *           "syncStatus": "string",
                     *           "status": "string",
                     *           "source": "string",
                     *           "billType": "string",
                     *           "postDate": "string",
                     *           "referenceNumber": "string",
                     *           "vendorNumber": "string",
                     *           "summary": "string",
                     *           "billDate": "string",
                     *           "earlyDiscountDate": "string",
                     *           "billAmount": "string",
                     *           "vendorInvoiceTotal": "string",
                     *           "taxAmount": "string",
                     *           "shippingAmount": "string",
                     *           "landedCostMethod": {},
                     *           "otherAmount": "string",
                     *           "preTaxDiscountAmount": "string",
                     *           "preTaxCharge": "string",
                     *           "postTaxDiscountAmount": "string",
                     *           "postTaxCharge": "string",
                     *           "createdBy": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "termName": "string",
                     *           "dueDate": "string",
                     *           "doNotPay": true,
                     *           "dateCanceled": "string",
                     *           "canceledBy": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "shipToDescription": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "taxZone": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "remittanceVendorInfo": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "budgetCodeId": 0,
                     *           "items": [
                     *             {
                     *               "order": 0,
                     *               "name": "string",
                     *               "description": "string",
                     *               "quantity": "string",
                     *               "cost": "string",
                     *               "allocatedTax": "string",
                     *               "allocatedShipping": "string",
                     *               "allocatedOtherCosts": "string",
                     *               "fullyLandedUnitCost": "string",
                     *               "inventoryLocation": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "type": "string"
                     *               },
                     *               "vendorPartNumber": "string",
                     *               "serialNumber": "string",
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "receiptItemId": 0,
                     *               "skuType": "string",
                     *               "skuCode": "string",
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "expenseItems": [
                     *             {
                     *               "id": 0,
                     *               "amount": "string",
                     *               "description": "string",
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "job": {
                     *                 "id": 0,
                     *                 "name": "string"
                     *               },
                     *               "businessUnit": {
                     *                 "id": 0,
                     *                 "name": "string"
                     *               },
                     *               "budgetCodeId": 0,
                     *               "projectLabelIds": [
                     *                 0
                     *               ]
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "jobId": 0,
                     *           "jobNumber": "string",
                     *           "dateReconciled": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.ApBillResponse"];
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
    ApBills_GetById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the AP bill to retrieve */
                billId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the AP bill */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "purchaseOrderId": 0,
                     *       "syncStatus": "string",
                     *       "status": "string",
                     *       "source": "string",
                     *       "billType": "string",
                     *       "postDate": "string",
                     *       "referenceNumber": "string",
                     *       "vendorNumber": "string",
                     *       "summary": "string",
                     *       "billDate": "string",
                     *       "earlyDiscountDate": "string",
                     *       "billAmount": "string",
                     *       "vendorInvoiceTotal": "string",
                     *       "taxAmount": "string",
                     *       "shippingAmount": "string",
                     *       "landedCostMethod": {},
                     *       "otherAmount": "string",
                     *       "preTaxDiscountAmount": "string",
                     *       "preTaxCharge": "string",
                     *       "postTaxDiscountAmount": "string",
                     *       "postTaxCharge": "string",
                     *       "createdBy": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "termName": "string",
                     *       "dueDate": "string",
                     *       "doNotPay": true,
                     *       "dateCanceled": "string",
                     *       "canceledBy": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "shipToDescription": "string",
                     *       "batch": {
                     *         "id": 0,
                     *         "number": "string",
                     *         "name": "string"
                     *       },
                     *       "businessUnit": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "taxZone": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "vendor": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "remittanceVendorInfo": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "shipTo": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string"
                     *       },
                     *       "budgetCodeId": 0,
                     *       "items": [
                     *         {
                     *           "order": 0,
                     *           "name": "string",
                     *           "description": "string",
                     *           "quantity": "string",
                     *           "cost": "string",
                     *           "allocatedTax": "string",
                     *           "allocatedShipping": "string",
                     *           "allocatedOtherCosts": "string",
                     *           "fullyLandedUnitCost": "string",
                     *           "inventoryLocation": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "type": "string"
                     *           },
                     *           "vendorPartNumber": "string",
                     *           "serialNumber": "string",
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "costOfSaleAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "assetAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "id": 0,
                     *           "skuId": 0,
                     *           "receiptItemId": 0,
                     *           "skuType": "string",
                     *           "skuCode": "string",
                     *           "budgetCodeId": 0
                     *         }
                     *       ],
                     *       "expenseItems": [
                     *         {
                     *           "id": 0,
                     *           "amount": "string",
                     *           "description": "string",
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "job": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "budgetCodeId": 0,
                     *           "projectLabelIds": [
                     *             0
                     *           ]
                     *         }
                     *       ],
                     *       "customFields": [
                     *         {
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "jobId": 0,
                     *       "jobNumber": "string",
                     *       "dateReconciled": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.ApBillResponse"];
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
            /** @description AP bill with the specified ID was not found */
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
    ApBills_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    ApBills_UpdateCustomFields: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The custom field update request containing bill IDs and field values to update */
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
            };
        };
        responses: {
            /** @description Successfully updated custom fields on the specified AP bills */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid request data or validation errors */
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
    ApBills_MarkAsExported: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The request containing AP bill IDs to mark as exported */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "billIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkApBillAsExportedUpdateRequest"];
            };
        };
        responses: {
            /** @description Successfully processed the mark as exported request for all bills */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example [
                     *       {
                     *         "billId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.MarkApBillAsExportedUpdateResponse"][];
                };
            };
            /** @description Invalid request data or validation errors */
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
    ApCredits_GetList: {
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
                /** @description Applies sorting by specified fields */
                sort?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                syncStatuses?: components["schemas"]["Accounting.V2.InventoryBillSyncStatus"][];
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
                     *           "inventoryReturnId": 0,
                     *           "jobId": 0,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "date": "string",
                     *           "canceledOn": "string",
                     *           "number": "string",
                     *           "referenceNumber": "string",
                     *           "memo": "string",
                     *           "amount": 0,
                     *           "appliedAmount": 0,
                     *           "status": "Unreconciled",
                     *           "syncStatus": "Pending",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "remittanceVendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "paymentStatus": "Unpaid",
                     *           "splits": [
                     *             {
                     *               "id": 0,
                     *               "active": true,
                     *               "createdOn": "string",
                     *               "inventoryBillId": 0,
                     *               "vendorCreditId": 0,
                     *               "amount": 0
                     *             }
                     *           ],
                     *           "budgetCodeId": 0,
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.ApCreditResponse"];
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
    ApCredits_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    ApCredits_UpdateCustomFields: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The custom field update request containing credit IDs and field values to update */
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
            };
        };
        responses: {
            /** @description Successfully updated custom fields on the specified AP credits */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid request data or validation errors */
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
    ApCredits_MarkAsExported: {
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
                 * @example [
                 *       {
                 *         "apCreditId": 0
                 *       }
                 *     ]
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkApCreditAsExportedUpdateRequest"][];
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
                     * @example [
                     *       {
                     *         "apCreditId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.MarkApCreditAsExportedUpdateResponse"][];
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
    ApPayments_GetList: {
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
                /** @description Applies sorting by specified fields */
                sort?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                syncStatuses?: components["schemas"]["Accounting.V2.InventoryBillSyncStatus"][];
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
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "date": "string",
                     *           "approvedDate": "string",
                     *           "method": "AccountingSystem",
                     *           "name": "string",
                     *           "printCheck": true,
                     *           "amount": 0,
                     *           "errorMessage": "string",
                     *           "status": "Unpaid",
                     *           "syncStatus": "Pending",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "glAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "remittanceVendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "splits": [
                     *             {
                     *               "id": 0,
                     *               "active": true,
                     *               "createdOn": "string",
                     *               "documentId": 0,
                     *               "inventoryBillId": 0,
                     *               "amount": 0
                     *             }
                     *           ],
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.ApPaymentResponse"];
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
    ApPayments_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    ApPayments_UpdateCustomFields: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The custom field update request containing payment IDs and field values to update */
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
            };
        };
        responses: {
            /** @description Successfully updated custom fields on the specified AP payments */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid request data or validation errors */
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
    ApPayments_MarkAsExported: {
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
                 * @example [
                 *       {
                 *         "apPaymentId": 0,
                 *         "externalId": "string",
                 *         "externalMessage": "string"
                 *       }
                 *     ]
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkApPaymentAsExportedUpdateRequest"][];
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
                     * @example [
                     *       {
                     *         "apPaymentId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.MarkApPaymentAsExportedUpdateResponse"][];
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
    CreditMemos_GetCreditMemosList: {
        parameters: {
            query?: {
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
                ids?: string;
                businessUnitIds?: string;
                appliedToInvoiceIds?: string;
                appliedToReferenceNumber?: string;
                dateBefore?: string;
                dateOnOrAfter?: string;
                appliedBefore?: string;
                appliedOnOrAfter?: string;
                modifiedBefore?: string;
                modifiedOnOrAfter?: string;
                createdBefore?: string;
                createdOnOrAfter?: string;
                batchId?: number;
                batchNumber?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                "totalFilter.Amount"?: number;
                /** @description Values: [Equal, NotEqual, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual] */
                "totalFilter.Comparer"?: string & components["schemas"]["Accounting.V2.Shared.AmountComparisonOperator"];
                "balanceFilter.Amount"?: number;
                /** @description Values: [Equal, NotEqual, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual] */
                "balanceFilter.Comparer"?: string & components["schemas"]["Accounting.V2.Shared.AmountComparisonOperator"];
                sort?: string;
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
                     *           "date": "string",
                     *           "referenceNumber": "string",
                     *           "subTotal": 0,
                     *           "salesTax": 0,
                     *           "salesTaxCode": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "taxRate": 0
                     *           },
                     *           "total": 0,
                     *           "balance": 0,
                     *           "appliedTo": [
                     *             {
                     *               "appliedId": 0,
                     *               "appliedTo": 0,
                     *               "appliedAmount": 0,
                     *               "appliedOn": "string",
                     *               "appliedBy": "string",
                     *               "appliedToReferenceNumber": "string"
                     *             }
                     *           ],
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customerAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "location": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "locationAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "syncStatus": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "createdBy": "string",
                     *           "modifiedOn": "string",
                     *           "modifiedBy": "string",
                     *           "description": "string",
                     *           "active": true,
                     *           "importId": "string",
                     *           "exportId": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemoPublicResponse"];
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
    CreditMemos_GetCreditMemoItemsList: {
        parameters: {
            query?: {
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
                businessUnitIds?: string;
                createdBefore?: string;
                createdOnOrAfter?: string;
                sort?: string;
                page?: number;
                pageSize?: number;
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
                     *           "active": true,
                     *           "description": "string",
                     *           "quantity": 0,
                     *           "cost": 0,
                     *           "price": 0,
                     *           "type": "string",
                     *           "skuName": "string",
                     *           "skuId": 0,
                     *           "total": 0,
                     *           "taxable": true,
                     *           "revenueGeneralLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "expensesGeneralLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "createdBy": "string",
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemoItemsPublicResponse"];
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
    CreditMemos_GetCreditMemosItemsList: {
        parameters: {
            query?: {
                creditMemoIds?: string;
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
                businessUnitIds?: string;
                createdBefore?: string;
                createdOnOrAfter?: string;
                sort?: string;
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
                     *           "active": true,
                     *           "description": "string",
                     *           "quantity": 0,
                     *           "cost": 0,
                     *           "price": 0,
                     *           "type": "string",
                     *           "skuName": "string",
                     *           "skuId": 0,
                     *           "total": 0,
                     *           "taxable": true,
                     *           "revenueGeneralLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "expensesGeneralLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "createdBy": "string",
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "creditMemoId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CreditMemos.CreditMemosItemsPublicResponse"];
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
    CreditMemos_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    CreditMemos_UpdateCustomFields: {
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
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
    CreditMemos_UpdateCreditMemo: {
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
                 *       "summary": "string",
                 *       "date": "string",
                 *       "businessUnitId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.CreditMemos.CreditMemoUpdatePublicRequest"];
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
                     *       "summary": "string",
                     *       "date": "string",
                     *       "businessUnitId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.CreditMemos.CreditMemoUpdatePublicResponse"];
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
    CreditMemos_AddCreditMemoSplits: {
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
                 *       "splits": [
                 *         {
                 *           "invoiceId": 0,
                 *           "amount": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.CreditMemos.CreditMemoAddSplitsPublicRequest"];
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
                     *       "splits": [
                     *         {
                     *           "invoiceId": 0,
                     *           "amount": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.CreditMemos.CreditMemoAddSplitsPublicResponse"];
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
    CreditMemos_MarkAsExported: {
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
                 * @example [
                 *       {
                 *         "creditMemoId": 0,
                 *         "externalId": "string",
                 *         "externalMessage": "string"
                 *       }
                 *     ]
                 */
                "application/json": components["schemas"]["Accounting.V2.CreditMemos.MarkCreditMemoAsExportedRequest"][];
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
                     * @example [
                     *       {
                     *         "creditMemoId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.CreditMemos.MarkCreditMemoAsExportedResponse"][];
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
    Deposits_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                depositDateBefore?: string;
                depositDateOnOrAfter?: string;
                reviewedBefore?: string;
                reviewedOnOrAfter?: string;
                /** @description Values: [NeedsReview, Reviewed] */
                reviewStatus?: string & components["schemas"]["Accounting.V2.DepositReviewStatus"];
                /** @description Values: [Undefined, Open, Deposited] */
                depositStatus?: string & components["schemas"]["Accounting.V2.DepositStatus"];
                /** @description Values: [Pending, Posted, Exported] */
                syncStatus?: string & components["schemas"]["Accounting.V2.SyncStatus"];
                grossAmountGreater?: number;
                grossAmountLess?: number;
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
                     *           "depositStatus": "string",
                     *           "syncStatus": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "createdBy": "string",
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "importId": "string",
                     *           "depositDate": "string",
                     *           "reviewStatus": "string",
                     *           "reviewedOn": "string",
                     *           "grossAmount": 0,
                     *           "netAmount": 0,
                     *           "fees": 0,
                     *           "bankAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "feeAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.DetailedDepositResponse"];
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
    Deposits_GetTransactionsList: {
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
                     *           "syncStatus": "string",
                     *           "referenceNumber": "string",
                     *           "date": "string",
                     *           "type": "string",
                     *           "typeId": "string",
                     *           "total": "string",
                     *           "unappliedAmount": "string",
                     *           "memo": "string",
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "deposit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "createdBy": "string",
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "appliedTo": [
                     *             {
                     *               "appliedAmount": "string",
                     *               "appliedBy": "string",
                     *               "appliedId": 0,
                     *               "appliedOn": "string",
                     *               "appliedTo": 0,
                     *               "appliedToReferenceNumber": "string"
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "authCode": "string",
                     *           "checkNumber": "string",
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.DetailedTransactionResponse"];
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
    Deposits_MarkAsExported: {
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
                 *       "ids": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkDepositsAsExportedRequestArgs"];
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
    Export_Invoices: {
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
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "description": "string",
                     *               "quantity": "string",
                     *               "cost": "string",
                     *               "totalCost": "string",
                     *               "budgetCodeId": 0,
                     *               "inventoryLocationId": 0,
                     *               "inventoryLocation": "string",
                     *               "price": "string",
                     *               "type": "Service",
                     *               "skuName": "string",
                     *               "skuId": 0,
                     *               "total": "string",
                     *               "inventory": true,
                     *               "taxable": true,
                     *               "isChargeable": true,
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "membershipTypeId": 0,
                     *               "itemGroup": {
                     *                 "rootId": 0,
                     *                 "name": "string"
                     *               },
                     *               "displayName": "string",
                     *               "soldHours": 0,
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "serviceDate": "string",
                     *               "order": 0,
                     *               "businessUnit": {
                     *                 "id": 0,
                     *                 "name": "string"
                     *               },
                     *               "createdById": 0,
                     *               "displayInAmount": true,
                     *               "importId": "string",
                     *               "exportId": "string",
                     *               "inventoryStatus": "string",
                     *               "addOn": true,
                     *               "memberPrice": "string",
                     *               "technicianId": 0,
                     *               "installedEquipmentId": 0,
                     *               "estimateItemId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true,
                     *           "discountTotal": "string",
                     *           "importId": "string",
                     *           "exportId": "string",
                     *           "materialSkuId": 0,
                     *           "membershipId": 0,
                     *           "paidOn": "string",
                     *           "invoiceConfiguration": "JobInvoice",
                     *           "id": 0,
                     *           "syncStatus": "string",
                     *           "budgetCodeId": 0,
                     *           "referenceNumber": "string",
                     *           "invoiceDate": "string",
                     *           "dueDate": "string",
                     *           "subTotal": "string",
                     *           "salesTax": "string",
                     *           "salesTaxCode": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "taxRate": 0
                     *           },
                     *           "taxZoneId": 0,
                     *           "total": "string",
                     *           "balance": "string",
                     *           "invoiceType": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customerAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "location": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "locationAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "termName": "string",
                     *           "createdBy": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "depositedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "adjustmentToId": 0,
                     *           "job": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "projectId": 0,
                     *           "royalty": {
                     *             "status": "string",
                     *             "date": "string",
                     *             "sentOn": "string",
                     *             "memo": "string"
                     *           },
                     *           "employeeInfo": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "commissionEligibilityDate": "string",
                     *           "sentStatus": "NotSent",
                     *           "reviewStatus": "NeedsReview",
                     *           "assignedTo": {
                     *             "id": 0,
                     *             "name": "string"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Accounting.V2.ExportInvoiceResponse"];
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
    Export_InvoiceItems: {
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
                     *           "description": "string",
                     *           "quantity": "string",
                     *           "cost": "string",
                     *           "totalCost": "string",
                     *           "budgetCodeId": 0,
                     *           "inventoryLocationId": 0,
                     *           "inventoryLocation": "string",
                     *           "price": "string",
                     *           "type": "Service",
                     *           "skuName": "string",
                     *           "skuId": 0,
                     *           "total": "string",
                     *           "inventory": true,
                     *           "taxable": true,
                     *           "isChargeable": true,
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "costOfSaleAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "assetAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "membershipTypeId": 0,
                     *           "itemGroup": {
                     *             "rootId": 0,
                     *             "name": "string"
                     *           },
                     *           "displayName": "string",
                     *           "soldHours": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "serviceDate": "string",
                     *           "order": 0,
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "createdById": 0,
                     *           "displayInAmount": true,
                     *           "importId": "string",
                     *           "exportId": "string",
                     *           "inventoryStatus": "string",
                     *           "addOn": true,
                     *           "memberPrice": "string",
                     *           "technicianId": 0,
                     *           "installedEquipmentId": 0,
                     *           "estimateItemId": 0,
                     *           "active": true,
                     *           "invoiceId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Accounting.V2.ExportInvoiceItemResponse"];
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
    Export_Payments: {
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
                     *           "active": true,
                     *           "appliedTo": [
                     *             {
                     *               "appliedAmount": "string",
                     *               "appliedBy": "string",
                     *               "appliedId": 0,
                     *               "appliedOn": "string",
                     *               "appliedTo": 0,
                     *               "appliedToReferenceNumber": "string"
                     *             }
                     *           ],
                     *           "authCode": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "checkNumber": "string",
                     *           "createdBy": "string",
                     *           "createdOn": "string",
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "date": "string",
                     *           "deposit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "id": 0,
                     *           "memo": "string",
                     *           "modifiedOn": "string",
                     *           "referenceNumber": "string",
                     *           "refundedPaymentId": 0,
                     *           "syncStatus": "string",
                     *           "total": "string",
                     *           "type": "string",
                     *           "typeId": "string",
                     *           "unappliedAmount": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Accounting.V2.ExportPaymentResponse"];
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
    Export_InventoryBills: {
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
                     *           "purchaseOrderId": 0,
                     *           "syncStatus": "string",
                     *           "referenceNumber": "string",
                     *           "vendorNumber": "string",
                     *           "summary": "string",
                     *           "billDate": "string",
                     *           "billAmount": "string",
                     *           "taxAmount": "string",
                     *           "shippingAmount": "string",
                     *           "landedCostMethod": "None",
                     *           "otherAmount": "string",
                     *           "createdBy": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "termName": "string",
                     *           "dueDate": "string",
                     *           "shipToDescription": "string",
                     *           "postDate": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "taxZone": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "budgetCodeId": 0,
                     *           "items": [
                     *             {
                     *               "order": 0,
                     *               "name": "string",
                     *               "description": "string",
                     *               "quantity": "string",
                     *               "cost": "string",
                     *               "allocatedTax": "string",
                     *               "allocatedShipping": "string",
                     *               "allocatedOtherCosts": "string",
                     *               "fullyLandedUnitCost": "string",
                     *               "inventoryLocation": "string",
                     *               "serialNumber": "string",
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "receiptItemId": 0,
                     *               "skuType": "string",
                     *               "skuCode": "string",
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "jobId": 0,
                     *           "jobNumber": "string",
                     *           "dateReconciled": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Accounting.V2.ExportInventoryBillResponse"];
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
    GlAccounts_GetList: {
        parameters: {
            query?: {
                /** @description Comma-delimited list of account IDs, maximum 50 items */
                ids?: string;
                /** @description Comma-delimited list of account names, maximum 50 items */
                names?: string;
                /** @description Comma-delimited list of account numbers, maximum 50 items */
                numbers?: string;
                /** @description Comma-delimited list of account types, maximum 50 items */
                types?: string;
                /** @description Comma-delimited list of account subtypes, maximum 50 items */
                subtypes?: string;
                /** @description A substring that must be contained in the account description */
                description?: string;
                /**
                 * @description Account source\
                 *     Values: [Undefined, AccountingSystem, ManuallyCreated, PublicApi]
                 */
                source?: string & components["schemas"]["Accounting.V2.GeneralLedgerAccountSource"];
                /**
                 * @description Specify if only active accounts, only inactive accounts, or both, should be retrieved.
                 *     By default, only active accounts will be retrieved.\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Set to true to retrieve Intacct group accounts only */
                isIntacctGroup?: boolean;
                /** @description Set to true to retrieve Intacct bank accounts only */
                isIntacctBankAccount?: boolean;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
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
            /** @description A collection of General Ledger accounts that match the given criteria. */
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
                     *           "number": "string",
                     *           "description": "string",
                     *           "type": "string",
                     *           "subtype": "string",
                     *           "active": true,
                     *           "isIntacctGroup": true,
                     *           "isIntacctBankAccount": true,
                     *           "source": "Undefined",
                     *           "defaultAccountType": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.GlAccountExtendedResponse"];
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
    GlAccounts_CreateAccount: {
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
                 *       "number": "string",
                 *       "description": "string",
                 *       "type": "string",
                 *       "subtype": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.GlAccountCreateRequest"];
            };
        };
        responses: {
            /** @description New General Ledger account has been created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "number": "string",
                     *       "description": "string",
                     *       "type": "string",
                     *       "subtype": "string",
                     *       "active": true,
                     *       "isIntacctGroup": true,
                     *       "isIntacctBankAccount": true,
                     *       "source": "Undefined",
                     *       "defaultAccountType": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.GlAccountExtendedResponse"];
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
            /** @description Another General Ledger account with the same name already exists */
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
    GlAccounts_GetAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Long integer id of the General Ledger account to be retrieved */
                accountId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description General Ledger account data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "number": "string",
                     *       "description": "string",
                     *       "type": "string",
                     *       "subtype": "string",
                     *       "active": true,
                     *       "isIntacctGroup": true,
                     *       "isIntacctBankAccount": true,
                     *       "source": "Undefined",
                     *       "defaultAccountType": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.GlAccountExtendedResponse"];
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
            /** @description Active General Ledger account with this id is not found */
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
    GlAccounts_UpdateAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Long integer id of the General Ledger account to be updated */
                accountId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description General Ledger account data that must be updated */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "number": "string",
                 *       "description": "string",
                 *       "type": "string",
                 *       "subtype": "string",
                 *       "active": true
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.GlAccountUpdateRequest"];
            };
        };
        responses: {
            /** @description Updated General Ledger account data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "number": "string",
                     *       "description": "string",
                     *       "type": "string",
                     *       "subtype": "string",
                     *       "active": true,
                     *       "isIntacctGroup": true,
                     *       "isIntacctBankAccount": true,
                     *       "source": "Undefined",
                     *       "defaultAccountType": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.GlAccountExtendedResponse"];
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
            /** @description Active General Ledger account with this id is not found */
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
            /** @description General Ledger account cannot be deactivated because it's in use */
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
    GlAccounts_GetTypeList: {
        parameters: {
            query?: {
                /** @description Comma-delimited list of account type IDs, maximum 50 items */
                ids?: string;
                /** @description Comma-delimited list of account type names, maximum 50 items */
                names?: string;
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
            /** @description A collection of General Ledger account types that match the given criteria. */
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
                     *           "parentTypeId": 0,
                     *           "name": "string",
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.GlAccountTypeResponse"];
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
    InventoryBills_GetList: {
        parameters: {
            query?: {
                ids?: string;
                batchId?: number;
                batchNumber?: number;
                billNumber?: string;
                businessUnitIds?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                dateFrom?: string;
                dateTo?: string;
                jobNumber?: string;
                purchaseOrderNumber?: string;
                purchaseOrderTypes?: string;
                syncStatuses?: components["schemas"]["Accounting.V2.InventoryBillSyncStatus"][];
                minCost?: number;
                maxCost?: number;
                /** @description Values: [NotSet, Procurement, ApBill, RecurringBill] */
                billType?: string & components["schemas"]["Accounting.V2.BillType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                dateReconciledBefore?: string;
                dateReconciledOnOrAfter?: string;
                /** @description Values: [NoDiscrepancy, Discrepancy] */
                threeWayMatchDiscrepancy?: string & components["schemas"]["Accounting.V2.InventoryBillThreeWayMatchDiscrepancy"];
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
                     * @example [
                     *       {
                     *         "id": 0,
                     *         "purchaseOrderId": 0,
                     *         "syncStatus": "string",
                     *         "referenceNumber": "string",
                     *         "vendorNumber": "string",
                     *         "summary": "string",
                     *         "billDate": "string",
                     *         "billAmount": "string",
                     *         "taxAmount": "string",
                     *         "shippingAmount": "string",
                     *         "landedCostMethod": "None",
                     *         "otherAmount": "string",
                     *         "createdBy": "string",
                     *         "createdOn": "string",
                     *         "modifiedOn": "string",
                     *         "termName": "string",
                     *         "dueDate": "string",
                     *         "shipToDescription": "string",
                     *         "postDate": "string",
                     *         "batch": {
                     *           "id": 0,
                     *           "number": "string",
                     *           "name": "string"
                     *         },
                     *         "businessUnit": {
                     *           "id": 0,
                     *           "name": "string"
                     *         },
                     *         "taxZone": {
                     *           "id": 0,
                     *           "name": "string"
                     *         },
                     *         "vendor": {
                     *           "id": 0,
                     *           "name": "string"
                     *         },
                     *         "shipTo": {
                     *           "street": "string",
                     *           "unit": "string",
                     *           "city": "string",
                     *           "state": "string",
                     *           "zip": "string",
                     *           "country": "string"
                     *         },
                     *         "budgetCodeId": 0,
                     *         "items": [
                     *           {
                     *             "order": 0,
                     *             "name": "string",
                     *             "description": "string",
                     *             "quantity": "string",
                     *             "cost": "string",
                     *             "allocatedTax": "string",
                     *             "allocatedShipping": "string",
                     *             "allocatedOtherCosts": "string",
                     *             "fullyLandedUnitCost": "string",
                     *             "inventoryLocation": "string",
                     *             "serialNumber": "string",
                     *             "generalLedgerAccount": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "number": "string",
                     *               "type": "string",
                     *               "detailType": "string"
                     *             },
                     *             "costOfSaleAccount": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "number": "string",
                     *               "type": "string",
                     *               "detailType": "string"
                     *             },
                     *             "assetAccount": {
                     *               "id": 0,
                     *               "name": "string",
                     *               "number": "string",
                     *               "type": "string",
                     *               "detailType": "string"
                     *             },
                     *             "id": 0,
                     *             "skuId": 0,
                     *             "receiptItemId": 0,
                     *             "skuType": "string",
                     *             "skuCode": "string",
                     *             "budgetCodeId": 0
                     *           }
                     *         ],
                     *         "customFields": [
                     *           {
                     *             "name": "string",
                     *             "value": "string"
                     *           }
                     *         ],
                     *         "jobId": 0,
                     *         "jobNumber": "string",
                     *         "dateReconciled": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.InventoryBillResponse"][];
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
    InventoryBills_GetListPaginated: {
        parameters: {
            query?: {
                ids?: string;
                batchId?: number;
                batchNumber?: number;
                billNumber?: string;
                businessUnitIds?: string;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                dateFrom?: string;
                dateTo?: string;
                jobNumber?: string;
                purchaseOrderNumber?: string;
                purchaseOrderTypes?: string;
                syncStatuses?: components["schemas"]["Accounting.V2.InventoryBillSyncStatus"][];
                minCost?: number;
                maxCost?: number;
                /** @description Values: [NotSet, Procurement, ApBill, RecurringBill] */
                billType?: string & components["schemas"]["Accounting.V2.BillType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                dateReconciledBefore?: string;
                dateReconciledOnOrAfter?: string;
                /** @description Values: [NoDiscrepancy, Discrepancy] */
                threeWayMatchDiscrepancy?: string & components["schemas"]["Accounting.V2.InventoryBillThreeWayMatchDiscrepancy"];
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
                     *           "purchaseOrderId": 0,
                     *           "syncStatus": "string",
                     *           "referenceNumber": "string",
                     *           "vendorNumber": "string",
                     *           "summary": "string",
                     *           "billDate": "string",
                     *           "billAmount": "string",
                     *           "taxAmount": "string",
                     *           "shippingAmount": "string",
                     *           "landedCostMethod": "None",
                     *           "otherAmount": "string",
                     *           "createdBy": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "termName": "string",
                     *           "dueDate": "string",
                     *           "shipToDescription": "string",
                     *           "postDate": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "taxZone": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "shipTo": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "budgetCodeId": 0,
                     *           "items": [
                     *             {
                     *               "order": 0,
                     *               "name": "string",
                     *               "description": "string",
                     *               "quantity": "string",
                     *               "cost": "string",
                     *               "allocatedTax": "string",
                     *               "allocatedShipping": "string",
                     *               "allocatedOtherCosts": "string",
                     *               "fullyLandedUnitCost": "string",
                     *               "inventoryLocation": "string",
                     *               "serialNumber": "string",
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "id": 0,
                     *               "skuId": 0,
                     *               "receiptItemId": 0,
                     *               "skuType": "string",
                     *               "skuCode": "string",
                     *               "budgetCodeId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "jobId": 0,
                     *           "jobNumber": "string",
                     *           "dateReconciled": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.InventoryBillResponse"];
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
    InventoryBills_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    InventoryBills_UpdateCustomFields: {
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
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
    InventoryBills_MarkAsExported: {
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
                 *       "inventoryBillIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkInventoryBillAsExportedUpdateRequest"];
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
                     * @example [
                     *       {
                     *         "inventoryBillId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.MarkInventoryBillAsExportedUpdateResponse"][];
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
    Invoices_GetList: {
        parameters: {
            query?: {
                /** @description Comma-delimited list of invoice IDs. */
                ids?: string;
                /** @description Values: [ActiveOnly, InactiveOnly, All] */
                activeState?: string & components["schemas"]["Accounting.Share.ActiveStateFilterType"];
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description Transaction status, which can be one of: Pending, Posted, Exported.
                 *     By default, all transaction statuses are included.  If you want to filter by more
                 *     than one status, add a new "statuses" query parameter for each status you want to include.
                 *     For example: &statuses=Pending&statuses=Posted
                 */
                statuses?: components["schemas"]["Accounting.V2.TransactionStatus"][];
                /** @description Batch ID associated with invoices. */
                batchId?: number;
                /** @description Batch number associated with invoices. */
                batchNumber?: number;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Job ID associated with invoices. This will be null if the invoice is not linked to a job. */
                jobId?: number;
                /** @description Job number associated with invoices. This will be null if the invoice is not linked to a job. */
                jobNumber?: string;
                /** @description Business unit ID associated with invoices. */
                businessUnitId?: number;
                /** @description Customer ID associated with invoices. */
                customerId?: number;
                invoicedOnOrAfter?: string;
                invoicedOnBefore?: string;
                /** @description When searching for adjustment invoices, this field will search for invoices that are adjustments to the specified invoice ID. */
                adjustmentToId?: number;
                /** @description Reference number associated with invoices. */
                number?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Retrieve all invoices with a total greater than or equal to the input value. */
                totalGreater?: number;
                /** @description Retrieve all invoices with a total less than or equal to the input value. */
                totalLess?: number;
                "balanceFilter.Balance"?: number;
                /** @description Values: [Equals, NotEquals, Greater, Less] */
                "balanceFilter.Comparer"?: components["schemas"]["Accounting.V2.BalanceComparer"];
                /** @description Retrieve all invoices with a due date before the input value */
                dueDateBefore?: string;
                /** @description Retrieve all invoices with a due date on after or equal the input value */
                dueDateOnOrAfter?: string;
                /** @description Field on which you want to order the returned list of invoices. */
                orderBy?: string;
                /** @description Order direction of the retuned list of invoices.  Values of "desc" or "descending" will order the list in descending order, otherwise the list will be ordered in ascending order. */
                orderByDirection?: string;
                /** @description Review statuses associated with invoices. */
                reviewStatuses?: components["schemas"]["Accounting.V2.InvoiceReviewStatus"][];
                /** @description AssignedTo IDs associated with invoices. */
                assignedToIds?: number[];
                /** @description Invoice configuration associated with invoices. */
                invoiceConfigurations?: components["schemas"]["Accounting.V2.InvoiceConfiguration"][];
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
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
                     *           "syncStatus": "string",
                     *           "budgetCodeId": 0,
                     *           "referenceNumber": "string",
                     *           "invoiceDate": "string",
                     *           "dueDate": "string",
                     *           "subTotal": "string",
                     *           "salesTax": "string",
                     *           "salesTaxCode": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "taxRate": 0
                     *           },
                     *           "taxZoneId": 0,
                     *           "total": "string",
                     *           "balance": "string",
                     *           "invoiceType": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customerAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "location": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "locationAddress": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "termName": "string",
                     *           "createdBy": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "depositedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "adjustmentToId": 0,
                     *           "job": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "type": "string"
                     *           },
                     *           "projectId": 0,
                     *           "royalty": {
                     *             "status": "string",
                     *             "date": "string",
                     *             "sentOn": "string",
                     *             "memo": "string"
                     *           },
                     *           "employeeInfo": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "commissionEligibilityDate": "string",
                     *           "sentStatus": "NotSent",
                     *           "reviewStatus": "NeedsReview",
                     *           "assignedTo": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "summary": "string",
                     *           "items": [
                     *             {
                     *               "id": 0,
                     *               "description": "string",
                     *               "quantity": "string",
                     *               "cost": "string",
                     *               "totalCost": "string",
                     *               "budgetCodeId": 0,
                     *               "inventoryLocationId": 0,
                     *               "inventoryLocation": "string",
                     *               "price": "string",
                     *               "type": "Service",
                     *               "skuName": "string",
                     *               "skuId": 0,
                     *               "total": "string",
                     *               "inventory": true,
                     *               "taxable": true,
                     *               "isChargeable": true,
                     *               "generalLedgerAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "costOfSaleAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "assetAccount": {
                     *                 "id": 0,
                     *                 "name": "string",
                     *                 "number": "string",
                     *                 "type": "string",
                     *                 "detailType": "string"
                     *               },
                     *               "membershipTypeId": 0,
                     *               "itemGroup": {
                     *                 "rootId": 0,
                     *                 "name": "string"
                     *               },
                     *               "displayName": "string",
                     *               "soldHours": 0,
                     *               "createdOn": "string",
                     *               "modifiedOn": "string",
                     *               "serviceDate": "string",
                     *               "order": 0,
                     *               "businessUnit": {
                     *                 "id": 0,
                     *                 "name": "string"
                     *               },
                     *               "createdById": 0,
                     *               "displayInAmount": true,
                     *               "importId": "string",
                     *               "exportId": "string",
                     *               "inventoryStatus": "string",
                     *               "addOn": true,
                     *               "memberPrice": "string",
                     *               "technicianId": 0,
                     *               "installedEquipmentId": 0,
                     *               "estimateItemId": 0
                     *             }
                     *           ],
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true,
                     *           "discountTotal": "string",
                     *           "importId": "string",
                     *           "exportId": "string",
                     *           "materialSkuId": 0,
                     *           "membershipId": 0,
                     *           "paidOn": "string",
                     *           "invoiceConfiguration": "JobInvoice"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.InvoiceResponse"];
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
    Invoices_CreateAdjustmentInvoice: {
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
                 *       "number": "string",
                 *       "typeId": 0,
                 *       "invoicedOn": "string",
                 *       "subtotal": 0,
                 *       "tax": 0,
                 *       "taxZoneId": 0,
                 *       "summary": "string",
                 *       "royaltyStatus": {},
                 *       "royaltyDate": "string",
                 *       "royaltySentOn": "string",
                 *       "royaltyMemo": "string",
                 *       "exportId": "string",
                 *       "reviewStatus": {},
                 *       "assignedToId": 0,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "skuId": 0,
                 *           "skuName": "string",
                 *           "technicianId": 0,
                 *           "description": "string",
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "cost": 0,
                 *           "isAddOn": true,
                 *           "signature": "string",
                 *           "technicianAcknowledgementSignature": "string",
                 *           "installedOn": "string",
                 *           "inventoryWarehouseName": "string",
                 *           "skipUpdatingMembershipPrices": true,
                 *           "itemGroupName": "string",
                 *           "itemGroupRootId": 0,
                 *           "inventoryLocationId": 0,
                 *           "durationBillingId": 0,
                 *           "budgetCodeId": 0,
                 *           "id": 0
                 *         }
                 *       ],
                 *       "adjustmentToId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.AdjustmentInvoiceCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example 0 */
                    "application/json": number;
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
    Invoices_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    Invoices_UpdateCustomFields: {
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
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
    Invoices_UpdateInvoice: {
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
                 *       "number": "string",
                 *       "typeId": 0,
                 *       "invoicedOn": "string",
                 *       "subtotal": 0,
                 *       "tax": 0,
                 *       "taxZoneId": 0,
                 *       "summary": "string",
                 *       "royaltyStatus": {},
                 *       "royaltyDate": "string",
                 *       "royaltySentOn": "string",
                 *       "royaltyMemo": "string",
                 *       "exportId": "string",
                 *       "reviewStatus": {},
                 *       "assignedToId": 0,
                 *       "budgetCodeId": 0,
                 *       "items": [
                 *         {
                 *           "skuId": 0,
                 *           "skuName": "string",
                 *           "technicianId": 0,
                 *           "description": "string",
                 *           "quantity": 0,
                 *           "unitPrice": 0,
                 *           "cost": 0,
                 *           "isAddOn": true,
                 *           "signature": "string",
                 *           "technicianAcknowledgementSignature": "string",
                 *           "installedOn": "string",
                 *           "inventoryWarehouseName": "string",
                 *           "skipUpdatingMembershipPrices": true,
                 *           "itemGroupName": "string",
                 *           "itemGroupRootId": 0,
                 *           "inventoryLocationId": 0,
                 *           "durationBillingId": 0,
                 *           "budgetCodeId": 0,
                 *           "id": 0
                 *         }
                 *       ],
                 *       "dueDate": "string",
                 *       "payments": [
                 *         {
                 *           "id": 0,
                 *           "settlementStatus": {},
                 *           "settlementDate": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.InvoiceUpdateRequest"];
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
    Invoices_UpdateInvoiceItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "skuId": 0,
                 *       "skuName": "string",
                 *       "technicianId": 0,
                 *       "description": "string",
                 *       "quantity": 0,
                 *       "unitPrice": 0,
                 *       "cost": 0,
                 *       "isAddOn": true,
                 *       "signature": "string",
                 *       "technicianAcknowledgementSignature": "string",
                 *       "installedOn": "string",
                 *       "inventoryWarehouseName": "string",
                 *       "skipUpdatingMembershipPrices": true,
                 *       "itemGroupName": "string",
                 *       "itemGroupRootId": 0,
                 *       "inventoryLocationId": 0,
                 *       "durationBillingId": 0,
                 *       "budgetCodeId": 0,
                 *       "id": 0
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.InvoiceItemUpdateRequest"];
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
    Invoices_DeleteInvoiceItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceId: number;
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
    Invoices_MarkAsExported: {
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
                 * @example [
                 *       {
                 *         "invoiceId": 0,
                 *         "externalId": "string",
                 *         "externalMessage": "string"
                 *       }
                 *     ]
                 */
                "application/json": components["schemas"]["Accounting.V2.MarkInvoiceAsExportedUpdateRequest"][];
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
                     * @example [
                     *       {
                     *         "invoiceId": 0,
                     *         "success": true,
                     *         "errorMessage": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Accounting.V2.MarkInvoiceAsExportedUpdateResponse"][];
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
    Invoices_GetInvoiceTasks: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                invoiceId: number;
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
                     *           "taskId": "string",
                     *           "type": "string",
                     *           "name": "string",
                     *           "status": "string",
                     *           "assigneeId": "string",
                     *           "dueDate": "string",
                     *           "description": "string",
                     *           "templateId": "string",
                     *           "reason": "string",
                     *           "relations": [
                     *             {
                     *               "type": "string",
                     *               "taskId": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.GetInvoiceTasksResponse"];
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
    Invoices_CreateInvoiceTask: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "templateId": "string",
                 *       "variables": {}
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.CreateInvoiceTaskRequest"];
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
                     *       "executionId": "string",
                     *       "tasks": [
                     *         {
                     *           "taskId": "string",
                     *           "key": "string"
                     *         }
                     *       ],
                     *       "status": "string",
                     *       "errors": [
                     *         {
                     *           "message": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.CreateInvoiceTaskResponse"];
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
    Invoices_UpdateInvoiceTask: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoiceId: number;
                taskId: string;
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
                 *       "status": "string",
                 *       "assigneeId": "string",
                 *       "dueDate": "string",
                 *       "description": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.UpdateInvoiceTaskRequest"];
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
                     *       "taskId": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.UpdateInvoiceTaskResponse"];
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
    JournalEntries_Get: {
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "number": 0,
                     *       "name": "string",
                     *       "source": "ServiceTitan",
                     *       "status": "Open",
                     *       "syncStatus": "NotSynced",
                     *       "versionId": 0,
                     *       "lastSyncVersionId": 0,
                     *       "message": "string",
                     *       "postDate": "string",
                     *       "exportedOn": "string",
                     *       "exportedBy": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "customFields": [
                     *         {
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "url": "string",
                     *       "isEmpty": true
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryResponse"];
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
    JournalEntries_FullUpdate: {
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
                 *       "status": "Open",
                 *       "versionId": 0,
                 *       "message": "string",
                 *       "postDate": "string",
                 *       "customFields": {},
                 *       "lines": [
                 *         {
                 *           "postDate": "string",
                 *           "accountId": 0,
                 *           "debit": 0,
                 *           "credit": 0,
                 *           "memo": "string",
                 *           "quantity": 0,
                 *           "unitAmount": 0,
                 *           "externalObjects": [
                 *             {
                 *               "id": "string",
                 *               "type": "string",
                 *               "name": "string",
                 *               "url": "string"
                 *             }
                 *           ],
                 *           "businessUnitId": 0,
                 *           "customerId": 0,
                 *           "vendorId": 0,
                 *           "inventoryLocationId": 0,
                 *           "jobId": 0,
                 *           "customerLocationId": 0,
                 *           "paymentTypeId": 0,
                 *           "projectId": 0,
                 *           "budgetCodeId": 0,
                 *           "employeeId": 0,
                 *           "serviceAgreementId": 0,
                 *           "appliedTo": {
                 *             "id": 0,
                 *             "type": "Unspecified",
                 *             "refNumber": "string"
                 *           },
                 *           "sku": {
                 *             "id": 0,
                 *             "type": "Service"
                 *           },
                 *           "internalCostType": {}
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.JournalEntrySaveRequest"];
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
    JournalEntries_DeleteJournalEntry: {
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
        };
    };
    JournalEntries_Update: {
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
                 *       "status": {},
                 *       "customFields": {}
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.JournalEntryUpdateRequest"];
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "number": 0,
                     *       "name": "string",
                     *       "source": "ServiceTitan",
                     *       "status": "Open",
                     *       "syncStatus": "NotSynced",
                     *       "versionId": 0,
                     *       "lastSyncVersionId": 0,
                     *       "message": "string",
                     *       "postDate": "string",
                     *       "exportedOn": "string",
                     *       "exportedBy": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "customFields": [
                     *         {
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "url": "string",
                     *       "isEmpty": true
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryResponse"];
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
    JournalEntries_GetList: {
        parameters: {
            query?: {
                /** @description Comma-delimited list of journal entry IDs, maximum 50 items */
                ids?: string;
                /** @description Exported on or after certain date/time (in UTC) */
                exportedFrom?: string;
                /** @description Exported on or before certain date/time (in UTC) */
                exportedTo?: string;
                /** @description Posted on or after certain date (time is ignored) */
                postedFrom?: string;
                /** @description Posted on or before certain date (time is ignored) */
                postedTo?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Comma-delimited list of user IDs, maximum 50 items */
                exportedBy?: string;
                /** @description Name contains */
                name?: string;
                /** @description Number is greater or equal than */
                numberFrom?: number;
                /** @description Number is less or equal to */
                numberTo?: number;
                /** @description Array of statuses */
                statuses?: components["schemas"]["Accounting.V2.JournalEntryPostingStatus"][];
                /** @description Array of sync statuses */
                syncStatuses?: components["schemas"]["Accounting.V2.JournalEntrySyncStatus"][];
                /** @description Contains a transaction posted on or after certain date (time is ignored) */
                transactionPostedFrom?: string;
                /** @description Contains a transaction posted on or before certain date (time is ignored) */
                transactionPostedTo?: string;
                /** @description Comma-delimited list of business unit IDs, maximum 50 items */
                businessUnitIds?: string;
                /** @description Comma-delimited list of service agreement IDs, maximum 50 items */
                serviceAgreementIds?: string;
                /** @description Contains a transaction for a customer with name containing */
                customerName?: string;
                /** @description Contains a transaction for a customer location with name containing */
                locationName?: string;
                /** @description Contains a transaction for a vendor with name containing */
                vendorName?: string;
                /** @description Contains a transaction for an inventory location with name containing */
                inventoryLocationName?: string;
                /** @description Comma-delimited list of reference numbers, maximum 50 items */
                refNumber?: string;
                /**
                 * @description List of transaction types.\
                 *     A journal entry will be returned if it contains at least one transaction of this type.
                 */
                transactionTypes?: components["schemas"]["Accounting.V2.JournalEntryTransactionType"][];
                /**
                 * @description Filter by custom fields associated with journal entries.\
                 *     Example: ?customField.fieldName1=value1&customField.fieldName2=value2\
                 *     A field with null value, and a non-existent field are treated equally.\
                 *     Maximum 5 custom fields are supported in one request.
                 */
                customField?: {
                    [key: string]: string;
                };
                /**
                 * @description Indicates whether empty journal entries should be included in journal entry query results.\
                 *     This argument doesn't have effect when journal entries are requested by their ids,\
                 *     in which case empty journal entries are never excluded.\
                 *     Values: [IncludeExceptNotSynced, Include, Exclude]
                 */
                empty?: string & components["schemas"]["Accounting.V2.EmptyJeHandling"];
                /**
                 * @description Applies sorting by the specified field and direction.\
                 *     Options: Id, Number, Name, Status, CreatedOn, ExportedOn, ExportedBy, PostDate.\
                 *     Use "+" for ascending order, and "-" for descending order.\
                 *     Example: "?sort=-Number" will sort by number in descending order.\
                 */
                sort?: string;
                /** @description How many records to return (50 by default). Maximum value is 500. */
                pageSize?: number;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
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
                     *       "pageSize": 0,
                     *       "page": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "number": 0,
                     *           "name": "string",
                     *           "source": "ServiceTitan",
                     *           "status": "Open",
                     *           "syncStatus": "NotSynced",
                     *           "versionId": 0,
                     *           "lastSyncVersionId": 0,
                     *           "message": "string",
                     *           "postDate": "string",
                     *           "exportedOn": "string",
                     *           "exportedBy": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "url": "string",
                     *           "isEmpty": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntryResponse"];
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
    JournalEntries_CreateJournalEntry: {
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
                 *       "status": "Open",
                 *       "versionId": 0,
                 *       "message": "string",
                 *       "postDate": "string",
                 *       "customFields": {},
                 *       "lines": [
                 *         {
                 *           "postDate": "string",
                 *           "accountId": 0,
                 *           "debit": 0,
                 *           "credit": 0,
                 *           "memo": "string",
                 *           "quantity": 0,
                 *           "unitAmount": 0,
                 *           "externalObjects": [
                 *             {
                 *               "id": "string",
                 *               "type": "string",
                 *               "name": "string",
                 *               "url": "string"
                 *             }
                 *           ],
                 *           "businessUnitId": 0,
                 *           "customerId": 0,
                 *           "vendorId": 0,
                 *           "inventoryLocationId": 0,
                 *           "jobId": 0,
                 *           "customerLocationId": 0,
                 *           "paymentTypeId": 0,
                 *           "projectId": 0,
                 *           "budgetCodeId": 0,
                 *           "employeeId": 0,
                 *           "serviceAgreementId": 0,
                 *           "appliedTo": {
                 *             "id": 0,
                 *             "type": "Unspecified",
                 *             "refNumber": "string"
                 *           },
                 *           "sku": {
                 *             "id": 0,
                 *             "type": "Service"
                 *           },
                 *           "internalCostType": {}
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.JournalEntryCreateRequest"];
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
    JournalEntries_GetSummary: {
        parameters: {
            query?: {
                /** @description How many records to return (50 by default). Maximum value is 500. */
                pageSize?: number;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
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
                     *       "pageSize": 0,
                     *       "page": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "postDate": "string",
                     *           "account": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string",
                     *             "type": "string",
                     *             "subtype": "string"
                     *           },
                     *           "credit": 0,
                     *           "debit": 0,
                     *           "memo": "string",
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntrySummaryResponse"];
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
    JournalEntries_GetDetails: {
        parameters: {
            query?: {
                /** @description How many records to return (50 by default). Maximum value is 500. */
                pageSize?: number;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
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
                     *       "pageSize": 0,
                     *       "page": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "postDate": "string",
                     *           "account": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string",
                     *             "type": "string",
                     *             "subtype": "string"
                     *           },
                     *           "debit": 0,
                     *           "credit": 0,
                     *           "memo": "string",
                     *           "quantity": 0,
                     *           "unitAmount": 0,
                     *           "externalObjects": [
                     *             {
                     *               "id": "string",
                     *               "type": "string",
                     *               "name": "string",
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "transaction": {
                     *             "id": 0,
                     *             "type": "Unspecified",
                     *             "refNumber": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "vendor": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "inventoryLocation": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "job": {
                     *             "id": 0,
                     *             "number": "string"
                     *           },
                     *           "customerLocation": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "paymentType": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "project": {
                     *             "id": 0,
                     *             "number": "string"
                     *           },
                     *           "serviceAgreement": {
                     *             "id": 0,
                     *             "number": "string"
                     *           },
                     *           "appliedTo": {
                     *             "id": 0,
                     *             "type": "Unspecified",
                     *             "refNumber": "string"
                     *           },
                     *           "sku": {
                     *             "id": 0,
                     *             "type": {},
                     *             "code": "string"
                     *           },
                     *           "transactionDate": "string",
                     *           "budgetCodeId": 0,
                     *           "internalCostType": {}
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryPagingResponse_Of_Accounting.V2.JournalEntryDetailsResponse"];
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
    JournalEntries_SyncUpdate: {
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
                 *       "syncStatus": {},
                 *       "versionId": 0,
                 *       "message": "string",
                 *       "customFields": {}
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.JournalEntrySyncUpdateRequest"];
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
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "number": 0,
                     *       "name": "string",
                     *       "source": "ServiceTitan",
                     *       "status": "Open",
                     *       "syncStatus": "NotSynced",
                     *       "versionId": 0,
                     *       "lastSyncVersionId": 0,
                     *       "message": "string",
                     *       "postDate": "string",
                     *       "exportedOn": "string",
                     *       "exportedBy": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "customFields": [
                     *         {
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "url": "string",
                     *       "isEmpty": true
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.JournalEntryResponse"];
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
    Payments_GetList: {
        parameters: {
            query?: {
                /**
                 * @description Default: null (ActiveOnly)
                 *                 \
                 *     Values: [ActiveOnly, InactiveOnly, All]
                 */
                activeState?: string & components["schemas"]["Accounting.Share.ActiveStateFilterType"];
                appliedToInvoiceIds?: string;
                appliedToReferenceNumber?: string;
                batchId?: number;
                batchNumber?: number;
                businessUnitIds?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                customerId?: number;
                /** @description Dictionary of name-value pairs */
                "customField.Fields"?: {
                    [key: string]: string;
                };
                /**
                 * @description Operator to be used between the name-value pairs. Can be "Or" or "And", default is "And".\
                 *     Values: [And, Or]
                 */
                "customField.Operator"?: string & components["schemas"]["Accounting.V2.LogicalOperator"];
                depositIds?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                paidOnAfter?: string;
                paidOnBefore?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 */
                sort?: string;
                statuses?: string;
                totalGreater?: number;
                totalLess?: number;
                /** @description Values: [Undefined, JournalEntry, ReceivePayment] */
                transactionType?: string & components["schemas"]["Accounting.V2.PaymentTransactionType"];
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
                     *           "active": true,
                     *           "appliedTo": [
                     *             {
                     *               "appliedAmount": "string",
                     *               "appliedBy": "string",
                     *               "appliedId": 0,
                     *               "appliedOn": "string",
                     *               "appliedTo": 0,
                     *               "appliedToReferenceNumber": "string"
                     *             }
                     *           ],
                     *           "authCode": "string",
                     *           "batch": {
                     *             "id": 0,
                     *             "number": "string",
                     *             "name": "string"
                     *           },
                     *           "businessUnit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "checkNumber": "string",
                     *           "createdBy": "string",
                     *           "createdOn": "string",
                     *           "customer": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "customFields": [
                     *             {
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "date": "string",
                     *           "deposit": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "generalLedgerAccount": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "number": "string",
                     *             "type": "string",
                     *             "detailType": "string"
                     *           },
                     *           "id": 0,
                     *           "memo": "string",
                     *           "modifiedOn": "string",
                     *           "referenceNumber": "string",
                     *           "refundedPaymentId": 0,
                     *           "syncStatus": "string",
                     *           "total": "string",
                     *           "type": "string",
                     *           "typeId": "string",
                     *           "unappliedAmount": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.DetailedPaymentResponse"];
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
    Payments_GetCustomFieldTypes: {
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
                     *           "dataType": "Text",
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.CustomFieldTypeResponse"];
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
    Payments_UpdateCustomFields: {
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
                "application/json": components["schemas"]["Accounting.V2.CustomFieldUpdateRequest"];
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
    Payments_Update: {
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
                 *       "authCode": "string",
                 *       "checkNumber": "string",
                 *       "exportId": "string",
                 *       "memo": "string",
                 *       "paidOn": "string",
                 *       "splits": [
                 *         {
                 *           "amount": 0,
                 *           "invoiceId": 0,
                 *           "invoiceNumber": "string"
                 *         }
                 *       ],
                 *       "status": "Pending",
                 *       "typeId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.PaymentUpdateRequest"];
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
                     *       "active": true,
                     *       "authCode": "string",
                     *       "checkNumber": "string",
                     *       "customerId": 0,
                     *       "exportId": "string",
                     *       "id": 0,
                     *       "memo": "string",
                     *       "paidOn": "string",
                     *       "splits": [
                     *         {
                     *           "amount": 0,
                     *           "invoiceId": 0,
                     *           "invoiceNumber": "string"
                     *         }
                     *       ],
                     *       "status": {},
                     *       "transactionStatus": {},
                     *       "typeId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.PaymentResponse"];
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
    Payments_UpdateStatus: {
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
                 *       "paymentIds": [
                 *         0
                 *       ],
                 *       "status": "Pending"
                 *     }
                 */
                "application/json": components["schemas"]["Accounting.V2.PaymentStatusBatchRequest"];
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
    PaymentTerms_GetPaymentTermModel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentTermId: number;
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
                     *       "dueDayType": "NumberOfDays",
                     *       "dueDay": 0,
                     *       "isCustomerDefault": true,
                     *       "isVendorDefault": true,
                     *       "active": true,
                     *       "inUse": true,
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "paymentTermDiscountModel": {
                     *         "id": 0,
                     *         "discountApplyTo": {},
                     *         "discount": 0,
                     *         "discountType": {},
                     *         "account": "string",
                     *         "applyBy": {},
                     *         "applyByValue": 0
                     *       },
                     *       "interestSettings": {
                     *         "id": 0,
                     *         "rateType": "Flat",
                     *         "flatRateValue": 0,
                     *         "percentageRateValue": 0,
                     *         "chargeMethod": {},
                     *         "frequency": "Once",
                     *         "gracePeriod": 0,
                     *         "targetInvoices": [
                     *           "JobInvoices"
                     *         ],
                     *         "taskId": 0,
                     *         "taskDisplayName": "string"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.PaymentTermAPIModel"];
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
    PaymentTerms_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                modifiedBefore?: string;
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
                 *     Available fields are: Id, Name, CreatedOn.
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
                     *           "dueDayType": "NumberOfDays",
                     *           "dueDay": 0,
                     *           "isCustomerDefault": true,
                     *           "isVendorDefault": true,
                     *           "active": true,
                     *           "inUse": true,
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "paymentTermDiscountModel": {
                     *             "id": 0,
                     *             "discountApplyTo": {},
                     *             "discount": 0,
                     *             "discountType": {},
                     *             "account": "string",
                     *             "applyBy": {},
                     *             "applyByValue": 0
                     *           },
                     *           "interestSettings": {
                     *             "id": 0,
                     *             "rateType": "Flat",
                     *             "flatRateValue": 0,
                     *             "percentageRateValue": 0,
                     *             "chargeMethod": {},
                     *             "frequency": "Once",
                     *             "gracePeriod": 0,
                     *             "targetInvoices": [
                     *               "JobInvoices"
                     *             ],
                     *             "taskId": 0,
                     *             "taskDisplayName": "string"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.PaymentTermAPIModel"];
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
    PaymentTypes_GetList: {
        parameters: {
            query?: {
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
                     *           "name": "string",
                     *           "modifiedOn": "string",
                     *           "createdOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.PaymentTypeResponse"];
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
    PaymentTypes_Get: {
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
                     *       "modifiedOn": "string",
                     *       "createdOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.PaymentTypeResponse"];
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
    RemittanceVendors_GetList: {
        parameters: {
            query?: {
                /** @description Ids to filter by */
                ids?: number[];
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
            /** @description Successfully retrieved the paginated list of Remittance Vendors */
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
                     *           "customerId": "string",
                     *           "isApproved": true,
                     *           "isVerified": true,
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
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.RemittanceVendorResponse"];
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
    RemittanceVendors_GetById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the Remittance Vendor to retrieve */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the Remittance Vendor */
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
                     *       "customerId": "string",
                     *       "isApproved": true,
                     *       "isVerified": true,
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
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Accounting.V2.RemittanceVendorResponse"];
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
            /** @description Remittance Vendor with the specified ID was not found */
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
    TaxZones_GetList: {
        parameters: {
            query?: {
                /** @description Tax Zone Ids to pull tax zones for */
                ids?: string;
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
                createdBefore?: string;
                createdOnOrAfter?: string;
                modifiedBefore?: string;
                modifiedOnOrAfter?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, Name, CreatedOn.
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
                     *           "color": 0,
                     *           "isTaxRateSeparated": true,
                     *           "isMultipleTaxZone": true,
                     *           "rates": [
                     *             {
                     *               "id": 0,
                     *               "taxName": "string",
                     *               "taxBaseType": [
                     *                 "Subtotal"
                     *               ],
                     *               "taxRate": 0,
                     *               "salesTaxItem": "string"
                     *             }
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.TaxZoneResponse"];
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
