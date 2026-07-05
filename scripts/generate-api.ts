import { mkdir, readFile, writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";
import type { OperationObject, ParameterObject } from "openapi-typescript";

const GENERATED_HEADER =
  "// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.\n\n";

interface RawSpec {
  servers: { url: string }[];
  paths: Record<string, Record<string, OperationObject>>;
}

const HTTP_METHODS = ["get", "put", "post", "delete", "patch"] as const;

function extractPathPrefix(serverUrl: string): string {
  return new URL(serverUrl).pathname.replace(/\/$/, "");
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function actionName(operationId: string): string {
  const action = operationId.includes("_")
    ? operationId.slice(operationId.indexOf("_") + 1)
    : operationId;
  return lowerFirst(action);
}

function pathParamsInOrder(path: string): string[] {
  return Array.from(path.matchAll(/\{(\w+)\}/g), (match) => match[1]);
}

interface OperationInfo {
  tag: string;
  methodName: string;
  operationId: string;
  httpMethod: (typeof HTTP_METHODS)[number];
  pathTemplate: string;
  pathParams: string[];
  hasQuery: boolean;
  queryRequired: boolean;
  hasBody: boolean;
}

function collectOperations(spec: RawSpec): OperationInfo[] {
  const operations: OperationInfo[] = [];

  for (const [pathTemplate, methods] of Object.entries(spec.paths)) {
    for (const httpMethod of HTTP_METHODS) {
      const operation = methods[httpMethod];
      if (!operation?.operationId) {
        continue;
      }

      const tag = operation.tags?.[0];
      if (!tag) {
        throw new Error(`Operation ${operation.operationId} has no tag`);
      }

      const parameters = (operation.parameters ?? []) as ParameterObject[];
      const queryParams = parameters.filter((param) => param.in === "query");
      const hasQuery = queryParams.length > 0;
      const hasBody = Boolean(operation.requestBody);

      if (hasQuery && hasBody) {
        throw new Error(
          `Operation ${operation.operationId} has both query parameters and a request ` +
            "body, which this generator does not support yet",
        );
      }

      operations.push({
        tag: lowerFirst(tag),
        methodName: actionName(operation.operationId),
        operationId: operation.operationId,
        httpMethod,
        pathTemplate,
        pathParams: pathParamsInOrder(pathTemplate),
        hasQuery,
        queryRequired: queryParams.some((param) => param.required === true),
        hasBody,
      });
    }
  }

  return operations;
}

function renderMethod(op: OperationInfo, pathPrefix: string): string {
  const fullPathTemplate = `${pathPrefix}${op.pathTemplate}`;
  const pathArgs = op.pathParams.map((param) => `${param}: number`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams.join(", ")} }`;
  const returnType = `Promise<SuccessResponse<operations["${op.operationId}"]>>`;

  if (op.hasBody) {
    const bodyType = `NonNullable<operations["${op.operationId}"]["requestBody"]>["content"]["application/json"]`;
    const args = [pathArgs, `body: ${bodyType}`].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path, {
        method: ${JSON.stringify(op.httpMethod.toUpperCase())},
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`;
  }

  if (op.hasQuery) {
    const queryType = `operations["${op.operationId}"]["parameters"]["query"]`;
    const queryArg = op.queryRequired ? `query: ${queryType}` : `query?: ${queryType}`;
    const args = [pathArgs, queryArg].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path + buildQueryString(query));
    },`;
  }

  const methodOption =
    op.httpMethod === "get" ? "" : `, { method: ${JSON.stringify(op.httpMethod.toUpperCase())} }`;
  return `    async ${op.methodName}(${pathArgs}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path${methodOption});
    },`;
}

function renderApiFile(operations: OperationInfo[], pathPrefix: string): string {
  const byTag = new Map<string, OperationInfo[]>();
  for (const op of operations) {
    const list = byTag.get(op.tag) ?? [];
    list.push(op);
    byTag.set(op.tag, list);
  }

  const tagBlocks = Array.from(byTag.entries())
    .map(([tag, ops]) => {
      const methods = ops.map((op) => renderMethod(op, pathPrefix)).join("\n");
      return `    ${tag}: {\n${methods}\n    },`;
    })
    .join("\n");

  return `${GENERATED_HEADER}import type { ServiceTitanClient } from "../../client.ts";
import type { operations } from "./types.gen.ts";
import { buildPath, buildQueryString, type SuccessResponse } from "../shared.ts";

export function createSettingsApi(client: ServiceTitanClient) {
  return {
${tagBlocks}
  };
}
`;
}

async function main(): Promise<void> {
  const specUrl = new URL("../specs/tenant-settings-v2.json", import.meta.url);
  const raw = JSON.parse(await readFile(specUrl, "utf8")) as RawSpec;
  const pathPrefix = extractPathPrefix(raw.servers[0].url);

  const outDir = new URL("../src/generated/settings/", import.meta.url);
  await mkdir(outDir, { recursive: true });

  const ast = await openapiTS(specUrl);
  const typesContents = GENERATED_HEADER + astToString(ast);
  await writeFile(new URL("types.gen.ts", outDir), typesContents);

  const operations = collectOperations(raw);
  const apiContents = renderApiFile(operations, pathPrefix);
  await writeFile(new URL("api.gen.ts", outDir), apiContents);

  const tagCount = new Set(operations.map((op) => op.tag)).size;
  console.log(`Generated ${operations.length} operations across ${tagCount} tags.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
