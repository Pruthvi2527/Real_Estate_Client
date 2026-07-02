import dynamic from 'next/dynamic';
import { LoadingState } from '@/components/ui/LoadingState';

const PropertyFormPage = dynamic(
  () =>
    import('@/components/properties/PropertyFormPage').then(
      (module) => module.PropertyFormPage
    ),
  {
    loading: () => <LoadingState message="Loading form..." />,
  }
);

interface EditPropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = await params;

  return <PropertyFormPage mode="edit" propertyId={id} />;
}
