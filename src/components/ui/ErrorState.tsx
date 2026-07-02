import { btnPrimary } from '@/utils/styles';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm sm:p-10">
      <p className="text-sm font-medium leading-relaxed text-red-800">{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className={`${btnPrimary} mt-5 bg-red-600 hover:bg-red-700`}>
          Try Again
        </button>
      )}
    </div>
  );
};
