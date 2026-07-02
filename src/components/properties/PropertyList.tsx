'use client';

import dynamic from 'next/dynamic';
import { Alert, EmptyState, ErrorState, LoadingState } from '@/components/ui';
import { PropertyGrid, usePropertyDeleteModal } from '@/components/properties/PropertyGrid';
import { useProperties } from '@/hooks/useProperties';

const ConfirmModal = dynamic(
  () => import('@/components/ui/ConfirmModal').then((module) => module.ConfirmModal),
  { ssr: false }
);

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

  const deleteModal = usePropertyDeleteModal({
    propertyToDelete,
    deletingId,
    onConfirm: () => void confirmDelete(),
    onCancel: cancelDelete,
  });

  if (isLoading && properties.length === 0) {
    return <LoadingState />;
  }

  if (error && properties.length === 0) {
    return <ErrorState message={error} onRetry={() => void refetch()} />;
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

      <PropertyGrid
        properties={properties}
        deletingId={deletingId}
        onDelete={requestDelete}
      />

      <ConfirmModal
        isOpen={deleteModal.isOpen}
        title="Delete Property"
        message={deleteModal.message}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isLoading={deleteModal.isLoading}
        onConfirm={deleteModal.onConfirm}
        onCancel={deleteModal.onCancel}
      />
    </div>
  );
};
