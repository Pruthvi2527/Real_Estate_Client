import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
}

export const Container = ({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`.trim()}
    >
      {children}
    </Component>
  );
};
