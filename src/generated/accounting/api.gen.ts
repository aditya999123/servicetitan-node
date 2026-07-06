// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createAccountingApi(client: ServiceTitanClient) {
  return {
    apBills: {
    async getListPaginated(query?: operations["ApBills_GetListPaginated"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApBills_GetListPaginated"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getById(billId: number): Promise<SuccessResponse<operations["ApBills_GetById"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/{billId}", { tenant: client.tenantId, billId });
      return client.request(path);
    },
    async getCustomFieldTypes(query?: operations["ApBills_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApBills_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["ApBills_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApBills_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(body: NonNullable<operations["ApBills_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApBills_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    apCredits: {
    async getList(query?: operations["ApCredits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApCredits_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(query?: operations["ApCredits_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApCredits_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["ApCredits_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApCredits_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(body: NonNullable<operations["ApCredits_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApCredits_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    apPayments: {
    async getList(query?: operations["ApPayments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApPayments_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(query?: operations["ApPayments_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApPayments_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["ApPayments_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApPayments_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(body: NonNullable<operations["ApPayments_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApPayments_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    creditMemos: {
    async getCreditMemosList(query?: operations["CreditMemos_GetCreditMemosList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemosList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCreditMemoItemsList(id: number, query?: operations["CreditMemos_GetCreditMemoItemsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemoItemsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}/items", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async getCreditMemosItemsList(query?: operations["CreditMemos_GetCreditMemosItemsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemosItemsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/credit-memo-items", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(query?: operations["CreditMemos_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["CreditMemos_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateCreditMemo(id: number, body: NonNullable<operations["CreditMemos_UpdateCreditMemo"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_UpdateCreditMemo"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async addCreditMemoSplits(id: number, body: NonNullable<operations["CreditMemos_AddCreditMemoSplits"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_AddCreditMemoSplits"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}/splits", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(body: NonNullable<operations["CreditMemos_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    deposits: {
    async getList(query?: operations["Deposits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Deposits_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getTransactionsList(id: number, query?: operations["Deposits_GetTransactionsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Deposits_GetTransactionsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits/{id}/transactions", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async markAsExported(body: NonNullable<operations["Deposits_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Deposits_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async invoices(query?: operations["Export_Invoices"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Invoices"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/invoices", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async invoiceItems(query?: operations["Export_InvoiceItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InvoiceItems"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/invoice-items", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async payments(query?: operations["Export_Payments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Payments"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/payments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async inventoryBills(query?: operations["Export_InventoryBills"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InventoryBills"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/inventory-bills", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    glAccounts: {
    async getList(query?: operations["GlAccounts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GlAccounts_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createAccount(body: NonNullable<operations["GlAccounts_CreateAccount"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GlAccounts_CreateAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getAccount(accountId: number): Promise<SuccessResponse<operations["GlAccounts_GetAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/{accountId}", { tenant: client.tenantId, accountId });
      return client.request(path);
    },
    async updateAccount(accountId: number, body: NonNullable<operations["GlAccounts_UpdateAccount"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GlAccounts_UpdateAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/{accountId}", { tenant: client.tenantId, accountId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getTypeList(query?: operations["GlAccounts_GetTypeList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GlAccounts_GetTypeList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    inventoryBills: {
    async getList(query?: operations["InventoryBills_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getListPaginated(query?: operations["InventoryBills_GetListPaginated"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetListPaginated"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/paginated", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(query?: operations["InventoryBills_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["InventoryBills_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InventoryBills_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(body: NonNullable<operations["InventoryBills_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InventoryBills_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    invoices: {
    async getList(query?: operations["Invoices_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createAdjustmentInvoice(body: NonNullable<operations["Invoices_CreateAdjustmentInvoice"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_CreateAdjustmentInvoice"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCustomFieldTypes(query?: operations["Invoices_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["Invoices_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoice(id: number, body: NonNullable<operations["Invoices_UpdateInvoice"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoice"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoiceItems(invoiceId: number, body: NonNullable<operations["Invoices_UpdateInvoiceItems"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoiceItems"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/items", { tenant: client.tenantId, invoiceId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteInvoiceItem(invoiceId: number, itemId: number): Promise<SuccessResponse<operations["Invoices_DeleteInvoiceItem"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/items/{itemId}", { tenant: client.tenantId, invoiceId, itemId });
      return client.request(path, { method: "DELETE" });
    },
    async markAsExported(body: NonNullable<operations["Invoices_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/markasexported", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getInvoiceTasks(invoiceId: number, query?: operations["Invoices_GetInvoiceTasks"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetInvoiceTasks"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks", { tenant: client.tenantId, invoiceId });
      return client.request(path + buildQueryString(query));
    },
    async createInvoiceTask(invoiceId: number, body: NonNullable<operations["Invoices_CreateInvoiceTask"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_CreateInvoiceTask"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks", { tenant: client.tenantId, invoiceId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoiceTask(invoiceId: number, taskId: string, body: NonNullable<operations["Invoices_UpdateInvoiceTask"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoiceTask"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks/{taskId}", { tenant: client.tenantId, invoiceId, taskId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    journalEntries: {
    async get(id: string): Promise<SuccessResponse<operations["JournalEntries_Get"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    async fullUpdate(id: string, body: NonNullable<operations["JournalEntries_FullUpdate"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_FullUpdate"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteJournalEntry(id: string): Promise<SuccessResponse<operations["JournalEntries_DeleteJournalEntry"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant: client.tenantId, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(id: string, body: NonNullable<operations["JournalEntries_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_Update"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(query?: operations["JournalEntries_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async createJournalEntry(body: NonNullable<operations["JournalEntries_CreateJournalEntry"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_CreateJournalEntry"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getSummary(id: string, query?: operations["JournalEntries_GetSummary"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetSummary"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/summary", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async getDetails(id: string, query?: operations["JournalEntries_GetDetails"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetDetails"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/details", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async syncUpdate(id: string, body: NonNullable<operations["JournalEntries_SyncUpdate"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_SyncUpdate"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/sync", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    payments: {
    async getList(query?: operations["Payments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payments_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(query?: operations["Payments_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payments_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/custom-fields", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(body: NonNullable<operations["Payments_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/custom-fields", { tenant: client.tenantId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(id: number, body: NonNullable<operations["Payments_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_Update"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/{id}", { tenant: client.tenantId, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateStatus(body: NonNullable<operations["Payments_UpdateStatus"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_UpdateStatus"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/status", { tenant: client.tenantId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    paymentTerms: {
    async getPaymentTermModel(paymentTermId: number): Promise<SuccessResponse<operations["PaymentTerms_GetPaymentTermModel"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-terms/{paymentTermId}", { tenant: client.tenantId, paymentTermId });
      return client.request(path);
    },
    async getList(query?: operations["PaymentTerms_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PaymentTerms_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-terms", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
    paymentTypes: {
    async getList(query?: operations["PaymentTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PaymentTypes_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-types", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async get(id: number): Promise<SuccessResponse<operations["PaymentTypes_Get"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-types/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    remittanceVendors: {
    async getList(query?: operations["RemittanceVendors_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["RemittanceVendors_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/remittance-vendors", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async getById(id: number): Promise<SuccessResponse<operations["RemittanceVendors_GetById"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/remittance-vendors/{id}", { tenant: client.tenantId, id });
      return client.request(path);
    },
    },
    taxZones: {
    async getList(query?: operations["TaxZones_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TaxZones_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/tax-zones", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
