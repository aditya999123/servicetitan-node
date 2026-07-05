export class ServiceTitanApiError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly body: unknown;

  constructor(status: number, statusText: string, body: unknown) {
    super(`ServiceTitan API request failed: ${status} ${statusText}`);
    this.name = "ServiceTitanApiError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}
