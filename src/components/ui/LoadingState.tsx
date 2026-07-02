import { card } from '@/utils/styles';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({
  message = 'Loading properties...',
}: LoadingStateProps) => {
  return (
    <div
      className={`${card} flex flex-col items-center justify-center py-16 sm:py-20`}
      role="status"
      aria-live="polite"
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"
        aria-hidden="true"
      />
      <p className="mt-4 text-sm font-medium text-slate-600">{message}</p>
    </div>
  );
};
