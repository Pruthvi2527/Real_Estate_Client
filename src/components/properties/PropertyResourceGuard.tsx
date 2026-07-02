import type { ReactNode } from 'react';
import { ErrorState, LoadingState } from '@/components/ui';

interface PropertyResourceGuardProps {
  isLoading: boolean;
  error: string | null;
  loadingMessage?: string;
  onRetry?: () => void;
  children: ReactNode;
}

export const PropertyResourceGuard = ({
  isLoading,
  error,
  loadingMessage = 'Loading property...',
  onRetry,
  children,
}: PropertyResourceGuardProps) => {
  if (isLoading) {
    return <LoadingState message={loadingMessage} />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  return <>{children}</>;
};
