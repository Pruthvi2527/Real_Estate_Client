export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T | null;
  error?: string | null;
}

export class ApiRequestError extends Error {
  public readonly statusCode?: number;
  public readonly apiError?: string;

  constructor(message: string, statusCode?: number, apiError?: string) {
    super(message);
    this.name = 'ApiRequestError';
    this.statusCode = statusCode;
    this.apiError = apiError;
  }
}
