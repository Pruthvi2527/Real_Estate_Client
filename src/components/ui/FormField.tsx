interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

export const FormField = ({ id, label, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
};
