export const PROPERTY_TYPES = [
  'apartment',
  'house',
  'villa',
  'condo',
  'land',
  'commercial',
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  createdAt: string;
  updatedAt: string;
}

export type CreatePropertyInput = Omit<Property, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdatePropertyInput = Partial<CreatePropertyInput>;
