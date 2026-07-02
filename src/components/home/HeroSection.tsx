import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { PlusIcon } from '@/components/icons/PlusIcon';
import { HERO_CONTENT, HERO_IMAGE_URL } from '@/config/home.config';

export const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full bg-violet-200/25 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div
              className="pointer-events-none absolute -left-2 top-6 hidden h-24 w-24 grid-cols-4 gap-2 opacity-40 sm:grid"
              aria-hidden="true"
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-indigo-300"
                />
              ))}
            </div>

            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight"
            >
              {HERO_CONTENT.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={HERO_CONTENT.primaryCta.href}
                variant="primary"
                icon={<PlusIcon />}
              >
                {HERO_CONTENT.primaryCta.label}
              </ButtonLink>

              <ButtonLink
                href={HERO_CONTENT.secondaryCta.href}
                variant="outline"
              >
                {HERO_CONTENT.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-indigo-100/60 ring-1 ring-slate-200/60 transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={HERO_IMAGE_URL}
                alt="Modern luxury home exterior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
