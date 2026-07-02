import { ApiRequestError } from '@/types';

export const getErrorMessage = (
  error: unknown,
  fallback = 'Something went wrong'
): string => {
  if (error instanceof ApiRequestError) {
    return error.apiError ?? error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};
