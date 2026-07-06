// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSchedulingProApi(client: ServiceTitanClient) {
  return {
    router: {
    async routerSessions(id: string, query?: operations["Router_RouterSessions"]["parameters"]["query"]): Promise<SuccessResponse<operations["Router_RouterSessions"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/routers/{id}/sessions", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async routerPerformance(id: string, query: operations["Router_RouterPerformance"]["parameters"]["query"]): Promise<SuccessResponse<operations["Router_RouterPerformance"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/routers/{id}/performance", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    },
    scheduler: {
    async schedulers(query?: operations["Scheduler_Schedulers"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_Schedulers"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers", { tenant: client.tenantId });
      return client.request(path + buildQueryString(query));
    },
    async schedulerSessions(id: string, query?: operations["Scheduler_SchedulerSessions"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_SchedulerSessions"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers/{id}/sessions", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    async schedulerPerformance(id: string, query: operations["Scheduler_SchedulerPerformance"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_SchedulerPerformance"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers/{id}/performance", { tenant: client.tenantId, id });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
