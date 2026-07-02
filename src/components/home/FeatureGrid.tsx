import { HOME_FEATURES } from '@/config/home.config';
import { FeatureCard } from '@/components/home/FeatureCard';
import { Container } from '@/components/ui/Container';

export const FeatureGrid = () => {
  return (
    <section aria-labelledby="features-heading">
      <Container className="py-12 sm:py-16 lg:py-20">
        <h2 id="features-heading" className="sr-only">
          Platform features
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOME_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};
