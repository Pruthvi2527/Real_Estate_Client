import type { FeatureIconName } from '@/config/home.config';

interface FeatureIconProps {
  name: FeatureIconName;
  className?: string;
}

export const FeatureIcon = ({
  name,
  className = 'h-5 w-5',
}: FeatureIconProps) => {
  switch (name) {
    case 'listings':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      );
    case 'database':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M21.75 17.25v-.228c0-.597-.237-1.17-.659-1.591l-3.182-3.182a2.25 2.25 0 0 0-1.591-.659H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25v-1.5Z" />
          <path d="M12 2.25c-4.556 0-8.25 1.352-8.25 3.018v11.714c0 1.666 3.694 3.018 8.25 3.018s8.25-1.352 8.25-3.018V5.268c0-1.666-3.694-3.018-8.25-3.018Z" />
        </svg>
      );
    case 'performance':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'responsive':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M10.5 1.875a1.125 1.125 0 0 1 1.125 0v1.5a1.125 1.125 0 0 1-1.125 1.125H6.75a3.75 3.75 0 0 0-3.75 3.75v10.5A3.75 3.75 0 0 0 6.75 21h10.5A3.75 3.75 0 0 0 21 17.25V9.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 0 2.25h-1.5A3.75 3.75 0 0 0 16.5 12v5.25A3.75 3.75 0 0 1 12.75 21H6.75A3.75 3.75 0 0 1 3 17.25V9.75A3.75 3.75 0 0 1 6.75 6h3.75Z" />
          <path d="M15.75 3.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM18 6.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM20.25 9.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z" />
        </svg>
      );
  }
};
