import type { ReactNode } from 'react';
import { pageDescription, pageTitle } from '@/utils/styles';

interface PropertyPageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const PropertyPageShell = ({
  title,
  description,
  children,
}: PropertyPageShellProps) => {
  return (
    <section className="mx-auto max-w-2xl space-y-6 sm:space-y-8">
      <div>
        <h1 className={pageTitle}>{title}</h1>
        <p className={pageDescription}>{description}</p>
      </div>
      {children}
    </section>
  );
};
