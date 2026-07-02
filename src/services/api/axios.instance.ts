import axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiRequestError, ApiResponse } from '@/types';
import {
  API_DEFAULT_HEADERS,
  API_TIMEOUT_MS,
  getApiBaseUrl,
} from '@/services/api/config';

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: getApiBaseUrl(),
    headers: API_DEFAULT_HEADERS,
    timeout: API_TIMEOUT_MS,
  });
};

const handleResponseError = (error: AxiosError<ApiResponse<null>>): never => {
  const statusCode = error.response?.status;
  const responseData = error.response?.data;

  const message =
    responseData?.message ??
    (error.code === 'ERR_NETWORK'
      ? `Cannot reach the API server at ${getApiBaseUrl()}. Check that the backend is deployed on Render and CORS allows your frontend domain.`
      : error.message) ??
    'Request failed';
  const apiError = responseData?.error ?? undefined;

  throw new ApiRequestError(message, statusCode, apiError);
};

export const axiosInstance: AxiosInstance = createAxiosInstance();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse<null>>) => {
    return Promise.reject(handleResponseError(error));
  }
);
