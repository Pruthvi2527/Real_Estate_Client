import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiRequestError, ApiResponse } from '@/types';
import { axiosInstance } from '@/services/api/axios.instance';

export class ApiClient {
  constructor(private readonly client: AxiosInstance = axiosInstance) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.client.get<ApiResponse<T>>(url, config);
    return this.extractData(data);
  }

  async post<T, D = unknown>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.client.post<ApiResponse<T>>(url, body, config);
    return this.extractData(data);
  }

  async put<T, D = unknown>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.client.put<ApiResponse<T>>(url, body, config);
    return this.extractData(data);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.client.delete<ApiResponse<T>>(url, config);
    return this.extractData(data);
  }

  private extractData<T>(response: ApiResponse<T>): T {
    if (!response.success || response.data === null) {
      throw new ApiRequestError(
        response.message,
        undefined,
        response.error ?? undefined
      );
    }

    return response.data;
  }
}

export const api = new ApiClient();
