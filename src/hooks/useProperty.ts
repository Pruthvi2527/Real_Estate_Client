'use client';

import { useCallback, useEffect, useState } from 'react';
import { propertyService } from '@/services';
import { Property } from '@/types/property.types';
import { getErrorMessage } from '@/utils/error';

export const useProperty = (id: string) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperty = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await propertyService.getProperty(id);
      setProperty(data);
    } catch (err) {
      setProperty(null);
      setError(getErrorMessage(err, 'Failed to load property'));
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchProperty();
  }, [fetchProperty]);

  return {
    property,
    error,
    isLoading,
    refetch: fetchProperty,
  };
};
