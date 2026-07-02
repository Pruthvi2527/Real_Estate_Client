import { PropertyFormMode } from '@/types/propertyForm.types';

interface PropertyFormPageConfig {
  title: string;
  description: string;
  submitLabel: string;
  submittingLabel: string;
  errorMessage: string;
}

export const PROPERTY_FORM_PAGE_CONFIG: Record<PropertyFormMode, PropertyFormPageConfig> =
  {
    create: {
      title: 'Add Property',
      description: 'Create a new property listing.',
      submitLabel: 'Create Property',
      submittingLabel: 'Creating...',
      errorMessage: 'Failed to create property',
    },
    edit: {
      title: 'Edit Property',
      description: 'Update property listing details.',
      submitLabel: 'Update Property',
      submittingLabel: 'Updating...',
      errorMessage: 'Failed to update property',
    },
  };
