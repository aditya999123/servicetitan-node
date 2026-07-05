import { createTokenManager, type Environment, type TokenManager } from "./token-manager.ts";
import { ServiceTitanApiError } from "./errors.ts";

const API_BASE_URLS: Record<Environment, string> = {
  integration: "https://api-integration.servicetitan.io",
  production: "https://api.servicetitan.io",
};

export interface ServiceTitanClientOptions {
  clientId: string;
  clientSecret: string;
  appKey: string;
  environment?: Environment;
}

export class ServiceTitanClient {
  private readonly appKey: string;
  private readonly environment: Environment;
  private readonly tokenManager: TokenManager;

  constructor(options: ServiceTitanClientOptions) {
    this.appKey = options.appKey;
    this.environment = options.environment ?? "production";
    this.tokenManager = createTokenManager({
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      environment: this.environment,
    });
  }

  async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const accessToken = await this.tokenManager.getAccessToken();
    const url = `${API_BASE_URLS[this.environment]}${path}`;

    const headers = new Headers(init.headers);
    headers.set("Authorization", accessToken);
    headers.set("ST-App-Key", this.appKey);

    const response = await fetch(url, { ...init, headers });

    if (!response.ok) {
      const body = await parseBody(response);
      throw new ServiceTitanApiError(response.status, response.statusText, body);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  }
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
