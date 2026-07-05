// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createAccountingApi(client: ServiceTitanClient) {
  return {
    apBills: {
    async getListPaginated(tenant: number, query?: operations["ApBills_GetListPaginated"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApBills_GetListPaginated"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getById(tenant: number, billId: number): Promise<SuccessResponse<operations["ApBills_GetById"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/{billId}", { tenant, billId });
      return client.request(path);
    },
    async getCustomFieldTypes(tenant: number, query?: operations["ApBills_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApBills_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["ApBills_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApBills_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["ApBills_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApBills_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-bills/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    apCredits: {
    async getList(tenant: number, query?: operations["ApCredits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApCredits_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(tenant: number, query?: operations["ApCredits_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApCredits_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["ApCredits_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApCredits_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["ApCredits_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApCredits_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-credits/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    apPayments: {
    async getList(tenant: number, query?: operations["ApPayments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApPayments_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(tenant: number, query?: operations["ApPayments_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["ApPayments_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["ApPayments_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApPayments_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["ApPayments_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["ApPayments_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/ap-payments/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    creditMemos: {
    async getCreditMemosList(tenant: number, query?: operations["CreditMemos_GetCreditMemosList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemosList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCreditMemoItemsList(tenant: number, id: number, query?: operations["CreditMemos_GetCreditMemoItemsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemoItemsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}/items", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async getCreditMemosItemsList(tenant: number, query?: operations["CreditMemos_GetCreditMemosItemsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCreditMemosItemsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/credit-memo-items", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(tenant: number, query?: operations["CreditMemos_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["CreditMemos_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["CreditMemos_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateCreditMemo(tenant: number, id: number, body: NonNullable<operations["CreditMemos_UpdateCreditMemo"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_UpdateCreditMemo"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async addCreditMemoSplits(tenant: number, id: number, body: NonNullable<operations["CreditMemos_AddCreditMemoSplits"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_AddCreditMemoSplits"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/{id}/splits", { tenant, id });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["CreditMemos_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["CreditMemos_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/credit-memos/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    deposits: {
    async getList(tenant: number, query?: operations["Deposits_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Deposits_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getTransactionsList(tenant: number, id: number, query?: operations["Deposits_GetTransactionsList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Deposits_GetTransactionsList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits/{id}/transactions", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async markAsExported(tenant: number, body: NonNullable<operations["Deposits_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Deposits_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/bank-deposits/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    export: {
    async invoices(tenant: number, query?: operations["Export_Invoices"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Invoices"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/invoices", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async invoiceItems(tenant: number, query?: operations["Export_InvoiceItems"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InvoiceItems"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/invoice-items", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async payments(tenant: number, query?: operations["Export_Payments"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_Payments"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/payments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async inventoryBills(tenant: number, query?: operations["Export_InventoryBills"]["parameters"]["query"]): Promise<SuccessResponse<operations["Export_InventoryBills"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/export/inventory-bills", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    glAccounts: {
    async getList(tenant: number, query?: operations["GlAccounts_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GlAccounts_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createAccount(tenant: number, body: NonNullable<operations["GlAccounts_CreateAccount"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GlAccounts_CreateAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getAccount(tenant: number, accountId: number): Promise<SuccessResponse<operations["GlAccounts_GetAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/{accountId}", { tenant, accountId });
      return client.request(path);
    },
    async updateAccount(tenant: number, accountId: number, body: NonNullable<operations["GlAccounts_UpdateAccount"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["GlAccounts_UpdateAccount"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/{accountId}", { tenant, accountId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getTypeList(tenant: number, query?: operations["GlAccounts_GetTypeList"]["parameters"]["query"]): Promise<SuccessResponse<operations["GlAccounts_GetTypeList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/gl-accounts/types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    inventoryBills: {
    async getList(tenant: number, query?: operations["InventoryBills_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getListPaginated(tenant: number, query?: operations["InventoryBills_GetListPaginated"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetListPaginated"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/paginated", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(tenant: number, query?: operations["InventoryBills_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["InventoryBills_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["InventoryBills_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InventoryBills_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["InventoryBills_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["InventoryBills_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/inventory-bills/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    invoices: {
    async getList(tenant: number, query?: operations["Invoices_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createAdjustmentInvoice(tenant: number, body: NonNullable<operations["Invoices_CreateAdjustmentInvoice"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_CreateAdjustmentInvoice"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Invoices_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Invoices_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoice(tenant: number, id: number, body: NonNullable<operations["Invoices_UpdateInvoice"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoice"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoiceItems(tenant: number, invoiceId: number, body: NonNullable<operations["Invoices_UpdateInvoiceItems"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoiceItems"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/items", { tenant, invoiceId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteInvoiceItem(tenant: number, invoiceId: number, itemId: number): Promise<SuccessResponse<operations["Invoices_DeleteInvoiceItem"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/items/{itemId}", { tenant, invoiceId, itemId });
      return client.request(path, { method: "DELETE" });
    },
    async markAsExported(tenant: number, body: NonNullable<operations["Invoices_MarkAsExported"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_MarkAsExported"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/markasexported", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getInvoiceTasks(tenant: number, invoiceId: number, query?: operations["Invoices_GetInvoiceTasks"]["parameters"]["query"]): Promise<SuccessResponse<operations["Invoices_GetInvoiceTasks"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks", { tenant, invoiceId });
      return client.request(path + buildQueryString(query));
    },
    async createInvoiceTask(tenant: number, invoiceId: number, body: NonNullable<operations["Invoices_CreateInvoiceTask"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_CreateInvoiceTask"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks", { tenant, invoiceId });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateInvoiceTask(tenant: number, invoiceId: number, taskId: string, body: NonNullable<operations["Invoices_UpdateInvoiceTask"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Invoices_UpdateInvoiceTask"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/invoices/{invoiceId}/tasks/{taskId}", { tenant, invoiceId, taskId });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    journalEntries: {
    async get(tenant: number, id: string): Promise<SuccessResponse<operations["JournalEntries_Get"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant, id });
      return client.request(path);
    },
    async fullUpdate(tenant: number, id: string, body: NonNullable<operations["JournalEntries_FullUpdate"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_FullUpdate"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant, id });
      return client.request(path, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async deleteJournalEntry(tenant: number, id: string): Promise<SuccessResponse<operations["JournalEntries_DeleteJournalEntry"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant, id });
      return client.request(path, { method: "DELETE" });
    },
    async update(tenant: number, id: string, body: NonNullable<operations["JournalEntries_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_Update"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getList(tenant: number, query?: operations["JournalEntries_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async createJournalEntry(tenant: number, body: NonNullable<operations["JournalEntries_CreateJournalEntry"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_CreateJournalEntry"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async getSummary(tenant: number, id: string, query?: operations["JournalEntries_GetSummary"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetSummary"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/summary", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async getDetails(tenant: number, id: string, query?: operations["JournalEntries_GetDetails"]["parameters"]["query"]): Promise<SuccessResponse<operations["JournalEntries_GetDetails"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/details", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async syncUpdate(tenant: number, id: string, body: NonNullable<operations["JournalEntries_SyncUpdate"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["JournalEntries_SyncUpdate"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/journal-entries/{id}/sync", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    payments: {
    async getList(tenant: number, query?: operations["Payments_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payments_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getCustomFieldTypes(tenant: number, query?: operations["Payments_GetCustomFieldTypes"]["parameters"]["query"]): Promise<SuccessResponse<operations["Payments_GetCustomFieldTypes"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/custom-fields", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async updateCustomFields(tenant: number, body: NonNullable<operations["Payments_UpdateCustomFields"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_UpdateCustomFields"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/custom-fields", { tenant });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async update(tenant: number, id: number, body: NonNullable<operations["Payments_Update"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_Update"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/{id}", { tenant, id });
      return client.request(path, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    async updateStatus(tenant: number, body: NonNullable<operations["Payments_UpdateStatus"]["requestBody"]>["content"]["application/json"]): Promise<SuccessResponse<operations["Payments_UpdateStatus"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payments/status", { tenant });
      return client.request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },
    },
    paymentTerms: {
    async getPaymentTermModel(tenant: number, paymentTermId: number): Promise<SuccessResponse<operations["PaymentTerms_GetPaymentTermModel"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-terms/{paymentTermId}", { tenant, paymentTermId });
      return client.request(path);
    },
    async getList(tenant: number, query?: operations["PaymentTerms_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PaymentTerms_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-terms", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
    paymentTypes: {
    async getList(tenant: number, query?: operations["PaymentTypes_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["PaymentTypes_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-types", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async get(tenant: number, id: number): Promise<SuccessResponse<operations["PaymentTypes_Get"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/payment-types/{id}", { tenant, id });
      return client.request(path);
    },
    },
    remittanceVendors: {
    async getList(tenant: number, query?: operations["RemittanceVendors_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["RemittanceVendors_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/remittance-vendors", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async getById(tenant: number, id: number): Promise<SuccessResponse<operations["RemittanceVendors_GetById"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/remittance-vendors/{id}", { tenant, id });
      return client.request(path);
    },
    },
    taxZones: {
    async getList(tenant: number, query?: operations["TaxZones_GetList"]["parameters"]["query"]): Promise<SuccessResponse<operations["TaxZones_GetList"]>> {
      const path = buildPath("/accounting/v2/tenant/{tenant}/tax-zones", { tenant });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
