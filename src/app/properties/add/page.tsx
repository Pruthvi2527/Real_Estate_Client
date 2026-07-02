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

export default function AddPropertyPage() {
  return <PropertyFormPage mode="create" />;
}
