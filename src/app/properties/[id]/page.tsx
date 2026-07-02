import { PropertyDetails } from '@/components/properties/PropertyDetails';

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
