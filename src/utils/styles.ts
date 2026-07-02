export const card = 'rounded-2xl border border-slate-200/80 bg-white shadow-sm';

export const cardInteractive =
  'rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md';

export const pageTitle =
  'text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl';

export const pageDescription =
  'mt-2 text-sm leading-relaxed text-slate-600 sm:text-base';

export const sectionLabel =
  'text-xs font-semibold uppercase tracking-wider text-slate-500';

export const btnPrimary =
  'inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export const btnOutline =
  'inline-flex items-center justify-center rounded-xl border-2 border-indigo-600 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm transition-all duration-200 hover:bg-indigo-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export const btnSecondary =
  'inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export const btnDanger =
  'inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:border-red-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export const btnCardView =
  'inline-flex flex-1 items-center justify-center rounded-xl border border-indigo-600 bg-white px-3 py-2.5 text-sm font-semibold text-indigo-600 transition-all duration-200 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2';

export const btnCardEdit =
  'inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2';

export const btnCardDelete =
  'inline-flex flex-1 items-center justify-center rounded-xl border border-red-300 bg-white px-3 py-2.5 text-sm font-semibold text-red-500 transition-all duration-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-100 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export const getInputClassName = (hasError: boolean): string => {
  const base =
    'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 focus:ring-2';

  return hasError
    ? `${base} border-red-300 focus:border-red-400 focus:ring-red-100`
    : `${base} border-slate-200 focus:border-indigo-400 focus:ring-indigo-100`;
};
