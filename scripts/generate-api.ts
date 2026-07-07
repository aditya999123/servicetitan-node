import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";
import type { OperationObject, ParameterObject } from "openapi-typescript";

const GENERATED_HEADER =
  "// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.\n\n";

export interface RawSpec {
  servers: { url: string }[];
  paths: Record<string, Record<string, OperationObject>>;
}

const HTTP_METHODS = ["get", "put", "post", "delete", "patch"] as const;

export function extractPathPrefix(serverUrl: string): string {
  return new URL(serverUrl).pathname.replace(/\/$/, "");
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function sanitizeIdentifier(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, "");
}

export function actionName(operationId: string): string {
  const action = operationId.includes("_")
    ? operationId.slice(operationId.indexOf("_") + 1)
    : operationId;
  return lowerFirst(sanitizeIdentifier(action));
}

export function domainSlug(specFileName: string): string {
  return specFileName.replace(/^tenant-/, "").replace(/(-v\d+)?\.json$/, "");
}

export function pascalCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function camelCase(slug: string): string {
  return lowerFirst(pascalCase(slug));
}

export function pathParamNamesInOrder(path: string): string[] {
  return Array.from(path.matchAll(/\{(\w+)\}/g), (match) => match[1]);
}

export interface PathParam {
  name: string;
  type: "number" | "string";
}

export function collectPathParams(operation: OperationObject, pathTemplate: string): PathParam[] {
  const names = pathParamNamesInOrder(pathTemplate);
  const parameters = (operation.parameters ?? []) as ParameterObject[];
  return names.map((name) => {
    const param = parameters.find((p) => p.in === "path" && p.name === name);
    const type: PathParam["type"] = param?.schema?.type === "string" ? "string" : "number";
    return { name, type };
  });
}

export function needsRawResponse(operation: OperationObject): boolean {
  const responses = operation.responses ?? {};
  const primary = responses["200"] ?? responses["201"] ?? responses["204"];
  if (!primary || !("content" in primary) || !primary.content) {
    return false;
  }
  const contentTypes = Object.keys(primary.content);
  return !(contentTypes.length === 1 && contentTypes[0] === "application/json");
}

export interface OperationInfo {
  tag: string;
  methodName: string;
  operationId: string;
  httpMethod: (typeof HTTP_METHODS)[number];
  pathTemplate: string;
  pathParams: PathParam[];
  hasQuery: boolean;
  queryRequired: boolean;
  hasBody: boolean;
  isRawResponse: boolean;
}

export function collectOperations(spec: RawSpec): OperationInfo[] {
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

      operations.push({
        tag: lowerFirst(sanitizeIdentifier(tag)),
        methodName: actionName(operation.operationId),
        operationId: operation.operationId,
        httpMethod,
        pathTemplate,
        pathParams: collectPathParams(operation, pathTemplate),
        hasQuery: queryParams.length > 0,
        queryRequired: queryParams.some((param) => param.required === true),
        hasBody: Boolean(operation.requestBody),
        isRawResponse: needsRawResponse(operation),
      });
    }
  }

  return operations;
}

function renderMethod(op: OperationInfo, pathPrefix: string): string {
  const fullPathTemplate = `${pathPrefix}${op.pathTemplate}`;
  const nonTenantPathParams = op.pathParams.filter((param) => param.name !== "tenant");
  const pathArgs = nonTenantPathParams.map((param) => `${param.name}: ${param.type}`).join(", ");
  const pathObjectLiteral = `{ ${op.pathParams
    .map((param) => (param.name === "tenant" ? "tenant: client.tenantId" : param.name))
    .join(", ")} }`;
  const queryType = `operations["${op.operationId}"]["parameters"]["query"]`;
  const queryArg = op.queryRequired ? `query: ${queryType}` : `query?: ${queryType}`;

  if (op.isRawResponse) {
    const args = [pathArgs, op.hasQuery ? queryArg : ""].filter(Boolean).join(", ");
    const pathExpr = op.hasQuery
      ? `buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral}) + buildQueryString(query)`
      : `buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral})`;
    return `    async ${op.methodName}(${args}): Promise<Response> {
      return client.requestRaw(${pathExpr});
    },`;
  }

  const returnType = `Promise<SuccessResponse<operations["${op.operationId}"]>>`;
  const bodyType = `NonNullable<operations["${op.operationId}"]["requestBody"]>["content"]["application/json"]`;

  if (op.hasBody && op.hasQuery) {
    const args = [pathArgs, `body: ${bodyType}`, queryArg].filter(Boolean).join(", ");
    return `    async ${op.methodName}(${args}): ${returnType} {
      const path = buildPath(${JSON.stringify(fullPathTemplate)}, ${pathObjectLiteral});
      return client.request(path + buildQueryString(query), {
        method: ${JSON.stringify(op.httpMethod.toUpperCase())},
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    },`;
  }

  if (op.hasBody) {
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

function renderApiFile(operations: OperationInfo[], pathPrefix: string, functionName: string): string {
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

export function ${functionName}(client: ServiceTitanClient) {
  return {
${tagBlocks}
  };
}
`;
}

interface DomainInfo {
  slug: string;
  functionName: string;
}

function renderServiceTitanFacade(domains: DomainInfo[]): string {
  const imports = domains
    .map((d) => `import { ${d.functionName} } from "./${d.slug}/api.gen.ts";`)
    .join("\n");

  const properties = domains
    .map((d) => `  readonly ${camelCase(d.slug)}: ReturnType<typeof ${d.functionName}>;`)
    .join("\n");

  const assignments = domains
    .map((d) => `    this.${camelCase(d.slug)} = ${d.functionName}(this.client);`)
    .join("\n");

  return `${GENERATED_HEADER}import { ServiceTitanClient, type ServiceTitanClientOptions } from "../client.ts";
${imports}

export class ServiceTitan {
  readonly client: ServiceTitanClient;
${properties}

  constructor(options: ServiceTitanClientOptions) {
    this.client = new ServiceTitanClient(options);
${assignments}
  }
}
`;
}

async function main(): Promise<void> {
  const specsDir = new URL("../specs/", import.meta.url);
  const specFiles = (await readdir(specsDir)).filter((name) => name.endsWith(".json")).sort();

  const domains: DomainInfo[] = [];
  let totalGenerated = 0;

  for (const specFile of specFiles) {
    const slug = domainSlug(specFile);
    const functionName = `create${pascalCase(slug)}Api`;
    domains.push({ slug, functionName });

    const specUrl = new URL(specFile, specsDir);
    const raw = JSON.parse(await readFile(specUrl, "utf8")) as RawSpec;
    const pathPrefix = extractPathPrefix(raw.servers[0].url);

    const outDir = new URL(`../src/generated/${slug}/`, import.meta.url);
    await mkdir(outDir, { recursive: true });

    const ast = await openapiTS(specUrl);
    const typesContents = GENERATED_HEADER + astToString(ast);
    await writeFile(new URL("types.gen.ts", outDir), typesContents);

    const operations = collectOperations(raw);

    const apiContents = renderApiFile(operations, pathPrefix, functionName);
    await writeFile(new URL("api.gen.ts", outDir), apiContents);

    totalGenerated += operations.length;
    console.log(`${slug}: generated ${operations.length} operations`);
  }

  const facadeContents = renderServiceTitanFacade(domains);
  await writeFile(new URL("../src/generated/service-titan.gen.ts", import.meta.url), facadeContents);

  console.log(`\nTotal: ${totalGenerated} operations across ${specFiles.length} domains.`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}
