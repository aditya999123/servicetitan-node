export type Environment = "integration" | "production";

const AUTH_BASE_URLS: Record<Environment, string> = {
  integration: "https://auth-integration.servicetitan.io",
  production: "https://auth.servicetitan.io",
};

const TOKEN_EXPIRY_BUFFER_MS = 30_000;

export interface TokenManagerOptions {
  clientId: string;
  clientSecret: string;
  environment: Environment;
}

export interface TokenManager {
  getAccessToken(): Promise<string>;
}

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

export function createTokenManager(options: TokenManagerOptions): TokenManager {
  let cached: CachedToken | undefined;
  let pending: Promise<string> | undefined;

  async function fetchAccessToken(): Promise<string> {
    const url = `${AUTH_BASE_URLS[options.environment]}/connect/token`;
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: options.clientId,
      client_secret: options.clientSecret,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to obtain access token: ${response.status} ${response.statusText}`,
      );
    }

    const payload = (await response.json()) as { access_token: string; expires_in: number };
    cached = {
      accessToken: payload.access_token,
      expiresAt: Date.now() + payload.expires_in * 1000,
    };
    return cached.accessToken;
  }

  return {
    async getAccessToken(): Promise<string> {
      if (cached && Date.now() < cached.expiresAt - TOKEN_EXPIRY_BUFFER_MS) {
        return cached.accessToken;
      }

      if (!pending) {
        pending = fetchAccessToken().finally(() => {
          pending = undefined;
        });
      }

      return pending;
    },
  };
}
