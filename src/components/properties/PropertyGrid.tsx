'use client';

import { memo, useCallback } from 'react';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Property } from '@/types/property.types';

interface PropertyGridProps {
  properties: Property[];
  deletingId: string | null;
  onDelete: (id: string) => void;
}

export const PropertyGrid = memo(({
  properties,
  deletingId,
  onDelete,
}: PropertyGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          property={property}
          onDelete={onDelete}
          isDeleting={deletingId === property._id}
        />
      ))}
    </div>
  );
});

PropertyGrid.displayName = 'PropertyGrid';

interface PropertyDeleteModalProps {
  propertyToDelete: Property | null;
  deletingId: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export const usePropertyDeleteModal = ({
  propertyToDelete,
  deletingId,
  onConfirm,
  onCancel,
}: PropertyDeleteModalProps) => {
  const handleConfirm = useCallback((): void => {
    onConfirm();
  }, [onConfirm]);

  return {
    isOpen: Boolean(propertyToDelete),
    message: propertyToDelete
      ? `Are you sure you want to delete "${propertyToDelete.title}"? This action cannot be undone.`
      : '',
    isLoading: Boolean(deletingId),
    onConfirm: handleConfirm,
    onCancel,
  };
};
