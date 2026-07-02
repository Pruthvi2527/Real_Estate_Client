'use client';

import { PropertyForm } from '@/components/properties/PropertyForm';
import { PropertyPageShell } from '@/components/properties/PropertyPageShell';
import { PropertyResourceGuard } from '@/components/properties/PropertyResourceGuard';
import { PROPERTY_FORM_PAGE_CONFIG } from '@/config/propertyForm.config';
import { useProperty } from '@/hooks/useProperty';
import { PropertyFormPageProps } from '@/types/propertyForm.types';
import { propertyToFormData } from '@/utils/propertyValidation';

export const PropertyFormPage = (props: PropertyFormPageProps) => {
  const config = PROPERTY_FORM_PAGE_CONFIG[props.mode];

  if (props.mode === 'create') {
    return (
      <PropertyPageShell title={config.title} description={config.description}>
        <PropertyForm mode="create" />
      </PropertyPageShell>
    );
  }

  return (
    <EditPropertyFormContent
      propertyId={props.propertyId}
      title={config.title}
      description={config.description}
    />
  );
};

interface EditPropertyFormContentProps {
  propertyId: string;
  title: string;
  description: string;
}

const EditPropertyFormContent = ({
  propertyId,
  title,
  description,
}: EditPropertyFormContentProps) => {
  const { property, error, isLoading, refetch } = useProperty(propertyId);

  return (
    <PropertyPageShell title={title} description={description}>
      <PropertyResourceGuard
        isLoading={isLoading}
        error={error ?? (property ? null : 'Property not found')}
        onRetry={refetch}
      >
        {property && (
          <PropertyForm
            mode="edit"
            propertyId={propertyId}
            initialData={propertyToFormData(property)}
          />
        )}
      </PropertyResourceGuard>
    </PropertyPageShell>
  );
};
