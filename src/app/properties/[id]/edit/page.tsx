import { PropertyFormPage } from '@/components/properties/PropertyFormPage';

interface EditPropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = await params;

  return <PropertyFormPage mode="edit" propertyId={id} />;
}
