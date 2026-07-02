import { FeatureIcon } from '@/components/icons/FeatureIcons';
import type { HomeFeature } from '@/config/home.config';

interface FeatureCardProps {
  feature: HomeFeature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <article className="group rounded-2xl border border-indigo-100/80 bg-indigo-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/70 hover:shadow-md">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white"
        aria-hidden="true"
      >
        <FeatureIcon name={feature.icon} />
      </div>

      <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {feature.description}
      </p>
    </article>
  );
};
