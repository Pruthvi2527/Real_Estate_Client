interface DetailItemProps {
  label: string;
  value: string | number;
}

export const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-sm sm:p-5">
      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
        {value}
      </dd>
    </div>
  );
};
