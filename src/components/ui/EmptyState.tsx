import Link from 'next/link';
import { btnPrimary, card } from '@/utils/styles';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export const EmptyState = ({
  title = 'No properties found',
  description = 'Get started by adding your first property listing.',
  actionLabel = 'Add Property',
  actionHref = '/properties/add',
}: EmptyStateProps) => {
  return (
    <div
      className={`${card} border-dashed p-10 text-center sm:p-14`}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <Link href={actionHref} className={`${btnPrimary} mt-8`}>
        {actionLabel}
      </Link>
    </div>
  );
};
