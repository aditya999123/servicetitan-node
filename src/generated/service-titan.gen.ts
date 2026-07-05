// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import { ServiceTitanClient, type ServiceTitanClientOptions } from "../client.ts";
import { createAccountingApi } from "./accounting/api.gen.ts";
import { createCrmApi } from "./crm/api.gen.ts";
import { createCustomerInteractionsApi } from "./customer-interactions/api.gen.ts";
import { createDispatchApi } from "./dispatch/api.gen.ts";
import { createEquipmentSystemsApi } from "./equipment-systems/api.gen.ts";
import { createFindingsApi } from "./findings/api.gen.ts";
import { createFormsApi } from "./forms/api.gen.ts";
import { createInventoryApi } from "./inventory/api.gen.ts";
import { createJbceApi } from "./jbce/api.gen.ts";
import { createJpmApi } from "./jpm/api.gen.ts";
import { createMarketingAdsApi } from "./marketing-ads/api.gen.ts";
import { createMarketingReputationApi } from "./marketing-reputation/api.gen.ts";
import { createMarketingApi } from "./marketing/api.gen.ts";
import { createMembershipsApi } from "./memberships/api.gen.ts";
import { createPayrollApi } from "./payroll/api.gen.ts";
import { createPricebookApi } from "./pricebook/api.gen.ts";
import { createReportingApi } from "./reporting/api.gen.ts";
import { createSalestechApi } from "./salestech/api.gen.ts";
import { createSchedulingProApi } from "./scheduling-pro/api.gen.ts";
import { createServiceAgreementsApi } from "./service-agreements/api.gen.ts";
import { createSettingsApi } from "./settings/api.gen.ts";
import { createTaskManagementApi } from "./task-management/api.gen.ts";
import { createTelecomApi } from "./telecom/api.gen.ts";
import { createTimesheetsApi } from "./timesheets/api.gen.ts";

export class ServiceTitan {
  readonly client: ServiceTitanClient;
  readonly accounting: ReturnType<typeof createAccountingApi>;
  readonly crm: ReturnType<typeof createCrmApi>;
  readonly customerInteractions: ReturnType<typeof createCustomerInteractionsApi>;
  readonly dispatch: ReturnType<typeof createDispatchApi>;
  readonly equipmentSystems: ReturnType<typeof createEquipmentSystemsApi>;
  readonly findings: ReturnType<typeof createFindingsApi>;
  readonly forms: ReturnType<typeof createFormsApi>;
  readonly inventory: ReturnType<typeof createInventoryApi>;
  readonly jbce: ReturnType<typeof createJbceApi>;
  readonly jpm: ReturnType<typeof createJpmApi>;
  readonly marketingAds: ReturnType<typeof createMarketingAdsApi>;
  readonly marketingReputation: ReturnType<typeof createMarketingReputationApi>;
  readonly marketing: ReturnType<typeof createMarketingApi>;
  readonly memberships: ReturnType<typeof createMembershipsApi>;
  readonly payroll: ReturnType<typeof createPayrollApi>;
  readonly pricebook: ReturnType<typeof createPricebookApi>;
  readonly reporting: ReturnType<typeof createReportingApi>;
  readonly salestech: ReturnType<typeof createSalestechApi>;
  readonly schedulingPro: ReturnType<typeof createSchedulingProApi>;
  readonly serviceAgreements: ReturnType<typeof createServiceAgreementsApi>;
  readonly settings: ReturnType<typeof createSettingsApi>;
  readonly taskManagement: ReturnType<typeof createTaskManagementApi>;
  readonly telecom: ReturnType<typeof createTelecomApi>;
  readonly timesheets: ReturnType<typeof createTimesheetsApi>;

  constructor(options: ServiceTitanClientOptions) {
    this.client = new ServiceTitanClient(options);
    this.accounting = createAccountingApi(this.client);
    this.crm = createCrmApi(this.client);
    this.customerInteractions = createCustomerInteractionsApi(this.client);
    this.dispatch = createDispatchApi(this.client);
    this.equipmentSystems = createEquipmentSystemsApi(this.client);
    this.findings = createFindingsApi(this.client);
    this.forms = createFormsApi(this.client);
    this.inventory = createInventoryApi(this.client);
    this.jbce = createJbceApi(this.client);
    this.jpm = createJpmApi(this.client);
    this.marketingAds = createMarketingAdsApi(this.client);
    this.marketingReputation = createMarketingReputationApi(this.client);
    this.marketing = createMarketingApi(this.client);
    this.memberships = createMembershipsApi(this.client);
    this.payroll = createPayrollApi(this.client);
    this.pricebook = createPricebookApi(this.client);
    this.reporting = createReportingApi(this.client);
    this.salestech = createSalestechApi(this.client);
    this.schedulingPro = createSchedulingProApi(this.client);
    this.serviceAgreements = createServiceAgreementsApi(this.client);
    this.settings = createSettingsApi(this.client);
    this.taskManagement = createTaskManagementApi(this.client);
    this.telecom = createTelecomApi(this.client);
    this.timesheets = createTimesheetsApi(this.client);
  }
}
