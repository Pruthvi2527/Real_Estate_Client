import Link from 'next/link';
import type { ReactNode } from 'react';
import { btnOutline, btnPrimary } from '@/utils/styles';

type ButtonVariant = 'primary' | 'outline';

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: btnPrimary,
  outline: btnOutline,
};

export const ButtonLink = ({
  href,
  variant = 'primary',
  children,
  icon,
  className = '',
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`${variantClasses[variant]} gap-2 ${className}`.trim()}
    >
      {icon}
      {children}
    </Link>
  );
};
