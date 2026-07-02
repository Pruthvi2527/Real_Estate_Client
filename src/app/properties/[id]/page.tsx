import dynamic from 'next/dynamic';
import { LoadingState } from '@/components/ui/LoadingState';

const PropertyDetails = dynamic(
  () =>
    import('@/components/properties/PropertyDetails').then(
      (module) => module.PropertyDetails
    ),
  {
    loading: () => <LoadingState message="Loading property details..." />,
  }
);

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  return (
    <section className="mx-auto max-w-4xl">
      <PropertyDetails propertyId={id} />
    </section>
  );
}
