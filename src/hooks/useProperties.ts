'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { propertyService } from '@/services';
import { Property } from '@/types/property.types';
import { getErrorMessage } from '@/utils/error';
import { propertyDataCache } from '@/utils/propertyDataCache';

const SUCCESS_MESSAGE_DURATION_MS = 4000;

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [propertyToDelete, setPropertyToDelete] = useState<Property | null>(null);
  const propertiesRef = useRef<Property[]>([]);

  useEffect(() => {
    propertiesRef.current = properties;
  }, [properties]);

  const fetchProperties = useCallback(async (silent = false): Promise<void> => {
    const cached = propertyDataCache.getList();

    if (cached) {
      setProperties(cached);
      if (!silent) {
        setIsLoading(false);
      }
    } else if (!silent) {
      setIsLoading(true);
    }

    setError(null);

    try {
      const data = await propertyService.getProperties();
      propertyDataCache.setList(data);
      setProperties(data);
    } catch (err) {
      if (!cached) {
        setError(getErrorMessage(err, 'Failed to load properties'));
      }
    } finally {
      if (!silent || !cached) {
        setIsLoading(false);
      }
    }
  }, []);

  const requestDelete = useCallback((id: string): void => {
    const property = propertiesRef.current.find((item) => item._id === id);

    if (property) {
      setPropertyToDelete(property);
      setSuccessMessage(null);
    }
  }, []);

  const cancelDelete = useCallback((): void => {
    if (!deletingId) {
      setPropertyToDelete(null);
    }
  }, [deletingId]);

  const confirmDelete = useCallback(async (): Promise<void> => {
    if (!propertyToDelete) {
      return;
    }

    const id = propertyToDelete._id;
    setDeletingId(id);
    setError(null);
    setSuccessMessage(null);

    try {
      await propertyService.deleteProperty(id);
      propertyDataCache.removeDetail(id);
      setProperties((current) => current.filter((property) => property._id !== id));
      setPropertyToDelete(null);
      setSuccessMessage('Property deleted successfully');
      void fetchProperties(true);
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to delete property'));
    } finally {
      setDeletingId(null);
    }
  }, [propertyToDelete, fetchProperties]);

  const dismissError = useCallback((): void => {
    setError(null);
  }, []);

  const dismissSuccess = useCallback((): void => {
    setSuccessMessage(null);
  }, []);

  useEffect(() => {
    void fetchProperties();
  }, [fetchProperties]);

  useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setSuccessMessage(null);
    }, SUCCESS_MESSAGE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return {
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
    refetch: fetchProperties,
  };
};
