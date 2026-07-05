// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSchedulingProApi(client: ServiceTitanClient) {
  return {
    router: {
    async routerSessions(tenant: number, id: string, query?: operations["Router_RouterSessions"]["parameters"]["query"]): Promise<SuccessResponse<operations["Router_RouterSessions"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/routers/{id}/sessions", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async routerPerformance(tenant: number, id: string, query: operations["Router_RouterPerformance"]["parameters"]["query"]): Promise<SuccessResponse<operations["Router_RouterPerformance"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/routers/{id}/performance", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    },
    scheduler: {
    async schedulers(tenant: number, query?: operations["Scheduler_Schedulers"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_Schedulers"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers", { tenant });
      return client.request(path + buildQueryString(query));
    },
    async schedulerSessions(tenant: number, id: string, query?: operations["Scheduler_SchedulerSessions"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_SchedulerSessions"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers/{id}/sessions", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    async schedulerPerformance(tenant: number, id: string, query: operations["Scheduler_SchedulerPerformance"]["parameters"]["query"]): Promise<SuccessResponse<operations["Scheduler_SchedulerPerformance"]>> {
      const path = buildPath("/schedulingpro/v2/tenant/{tenant}/schedulers/{id}/performance", { tenant, id });
      return client.request(path + buildQueryString(query));
    },
    },
  };
}
