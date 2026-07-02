import { Property } from '@/types/property.types';

const CACHE_TTL_MS = 30_000;

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

const isFresh = (entry: CacheEntry<unknown> | undefined): entry is CacheEntry<unknown> =>
  Boolean(entry && Date.now() <= entry.expiresAt);

let listCache: CacheEntry<Property[]> | null = null;
const detailCache = new Map<string, CacheEntry<Property>>();

export const propertyDataCache = {
  getList(): Property[] | null {
    if (!listCache || !isFresh(listCache)) {
      listCache = null;
      return null;
    }

    return listCache.value;
  },

  setList(properties: Property[]): void {
    listCache = {
      value: properties,
      expiresAt: Date.now() + CACHE_TTL_MS,
    };

    properties.forEach((property) => {
      detailCache.set(property._id, {
        value: property,
        expiresAt: Date.now() + CACHE_TTL_MS,
      });
    });
  },

  getDetail(id: string): Property | null {
    const entry = detailCache.get(id);

    if (!isFresh(entry)) {
      detailCache.delete(id);
      return null;
    }

    return entry.value;
  },

  setDetail(property: Property): void {
    detailCache.set(property._id, {
      value: property,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });
  },

  removeDetail(id: string): void {
    detailCache.delete(id);
    listCache = null;
  },

  clear(): void {
    listCache = null;
    detailCache.clear();
  },
};
