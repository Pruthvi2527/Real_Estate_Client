'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { btnPrimary, btnSecondary } from '@/utils/styles';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PropertiesError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Unable to load properties
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Something went wrong while loading this page.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={reset} className={btnPrimary}>
          Try again
        </button>
        <Link href="/properties" className={btnSecondary}>
          Back to properties
        </Link>
      </div>
    </div>
  );
}
