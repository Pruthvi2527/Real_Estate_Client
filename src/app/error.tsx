'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { btnPrimary, btnSecondary } from '@/utils/styles';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={reset} className={btnPrimary}>
          Try again
        </button>
        <Link href="/" className={btnSecondary}>
          Go home
        </Link>
      </div>
    </div>
  );
}
