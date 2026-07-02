interface AlertProps {
  variant: 'success' | 'error';
  message: string;
  onDismiss?: () => void;
}

const variantStyles = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-red-200 bg-red-50 text-red-800',
} as const;

export const Alert = ({ variant, message, onDismiss }: AlertProps) => {
  return (
    <div
      className={`flex items-start justify-between gap-4 rounded-xl border px-4 py-3.5 text-sm shadow-sm ${variantStyles[variant]}`}
      role="alert"
    >
      <p className="font-medium leading-relaxed">{message}</p>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 rounded-lg p-1 font-medium opacity-70 transition-all duration-200 hover:bg-black/5 hover:opacity-100"
          aria-label="Dismiss message"
        >
          ✕
        </button>
      )}
    </div>
  );
};
