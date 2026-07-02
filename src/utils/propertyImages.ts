import { PropertyType } from '@/types/property.types';

const PROPERTY_IMAGES: Record<PropertyType, string> = {
  apartment:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  house:
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  villa:
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  condo:
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  land:
    'https://images.unsplash.com/photo-1500382017468-9049fed747bf?auto=format&fit=crop&w=800&q=80',
  commercial:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
};

export const getPropertyImageUrl = (propertyType: PropertyType): string => {
  return PROPERTY_IMAGES[propertyType];
};
