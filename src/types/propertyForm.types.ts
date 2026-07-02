import { PropertyType } from '@/types/property.types';

export type PropertyFormMode = 'create' | 'edit';

export interface PropertyFormData {
  title: string;
  description: string;
  price: string;
  location: string;
  propertyType: PropertyType | '';
  bedrooms: string;
  bathrooms: string;
  area: string;
}

export type PropertyFormErrors = Partial<Record<keyof PropertyFormData, string>>;

export type PropertyFormProps =
  | {
      mode: 'create';
      cancelHref?: string;
    }
  | {
      mode: 'edit';
      propertyId: string;
      initialData: PropertyFormData;
      cancelHref?: string;
    };

export type PropertyFormPageProps =
  | { mode: 'create' }
  | { mode: 'edit'; propertyId: string };
