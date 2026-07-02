'use client';

import { PropertyCard } from '@/components/properties/PropertyCard';
import { Alert, ConfirmModal, EmptyState, ErrorState, LoadingState } from '@/components/ui';
import { useProperties } from '@/hooks/useProperties';

export const PropertyList = () => {
  const {
    properties,
    error,
    successMessage,
    isLoading,
    deletingId,
    propertyToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,
    dismissError,
    dismissSuccess,
    refetch,
  } = useProperties();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error && properties.length === 0) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  if (properties.length === 0) {
    return (
      <div className="space-y-4 sm:space-y-6">
        {successMessage && (
          <Alert variant="success" message={successMessage} onDismiss={dismissSuccess} />
        )}
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {successMessage && (
        <Alert variant="success" message={successMessage} onDismiss={dismissSuccess} />
      )}

      {error && <Alert variant="error" message={error} onDismiss={dismissError} />}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            onDelete={requestDelete}
            isDeleting={deletingId === property._id}
          />
        ))}
      </div>

      <ConfirmModal
        isOpen={Boolean(propertyToDelete)}
        title="Delete Property"
        message={
          propertyToDelete
            ? `Are you sure you want to delete "${propertyToDelete.title}"? This action cannot be undone.`
            : ''
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isLoading={Boolean(deletingId)}
        onConfirm={() => void confirmDelete()}
        onCancel={cancelDelete}
      />
    </div>
  );
};
