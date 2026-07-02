import {
  CreatePropertyInput,
  PROPERTY_TYPES,
  Property,
  PropertyType,
} from '@/types/property.types';
import {
  PropertyFormData,
  PropertyFormErrors,
} from '@/types/propertyForm.types';

export type { PropertyFormData, PropertyFormErrors };

export const initialPropertyFormData: PropertyFormData = {
  title: '',
  description: '',
  price: '',
  location: '',
  propertyType: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
};

const isPositiveNumber = (value: string): boolean => {
  const number = Number(value);
  return !Number.isNaN(number) && number >= 0;
};

const isPositiveNonZeroNumber = (value: string): boolean => {
  const number = Number(value);
  return !Number.isNaN(number) && number > 0;
};

const isPropertyType = (value: string): value is PropertyType =>
  PROPERTY_TYPES.includes(value as PropertyType);

export const validatePropertyForm = (
  data: PropertyFormData
): PropertyFormErrors => {
  const errors: PropertyFormErrors = {};

  if (!data.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!data.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!data.price.trim()) {
    errors.price = 'Price is required';
  } else if (!isPositiveNonZeroNumber(data.price)) {
    errors.price = 'Price must be a positive number';
  }

  if (!data.location.trim()) {
    errors.location = 'Location is required';
  }

  if (!data.propertyType) {
    errors.propertyType = 'Property type is required';
  } else if (!isPropertyType(data.propertyType)) {
    errors.propertyType = 'Invalid property type';
  }

  if (!data.bedrooms.trim()) {
    errors.bedrooms = 'Bedrooms is required';
  } else if (!isPositiveNumber(data.bedrooms) || !Number.isInteger(Number(data.bedrooms))) {
    errors.bedrooms = 'Bedrooms must be a whole number';
  }

  if (!data.bathrooms.trim()) {
    errors.bathrooms = 'Bathrooms is required';
  } else if (!isPositiveNumber(data.bathrooms) || !Number.isInteger(Number(data.bathrooms))) {
    errors.bathrooms = 'Bathrooms must be a whole number';
  }

  if (!data.area.trim()) {
    errors.area = 'Area is required';
  } else if (!isPositiveNonZeroNumber(data.area)) {
    errors.area = 'Area must be a positive number';
  }

  return errors;
};

export const parsePropertyForm = (data: PropertyFormData): CreatePropertyInput => {
  if (!isPropertyType(data.propertyType)) {
    throw new Error('Invalid property type');
  }

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    price: Number(data.price),
    location: data.location.trim(),
    propertyType: data.propertyType,
    bedrooms: Number(data.bedrooms),
    bathrooms: Number(data.bathrooms),
    area: Number(data.area),
  };
};

export const propertyToFormData = (property: Property): PropertyFormData => ({
  title: property.title,
  description: property.description,
  price: String(property.price),
  location: property.location,
  propertyType: property.propertyType,
  bedrooms: String(property.bedrooms),
  bathrooms: String(property.bathrooms),
  area: String(property.area),
});

export const formatPropertyTypeLabel = (type: PropertyType): string =>
  type.charAt(0).toUpperCase() + type.slice(1);
