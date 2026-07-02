'use client';

import { useCallback, useEffect, useState } from 'react';
import { propertyService } from '@/services';
import { Property } from '@/types/property.types';
import { getErrorMessage } from '@/utils/error';
import { propertyDataCache } from '@/utils/propertyDataCache';

export const useProperty = (id: string) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperty = useCallback(async (silent = false): Promise<void> => {
    const cached = propertyDataCache.getDetail(id);

    if (cached) {
      setProperty(cached);
      if (!silent) {
        setIsLoading(false);
      }
    } else if (!silent) {
      setIsLoading(true);
    }

    setError(null);

    try {
      const data = await propertyService.getProperty(id);
      propertyDataCache.setDetail(data);
      setProperty(data);
    } catch (err) {
      if (!cached) {
        setProperty(null);
        setError(getErrorMessage(err, 'Failed to load property'));
      }
    } finally {
      if (!silent || !cached) {
        setIsLoading(false);
      }
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
