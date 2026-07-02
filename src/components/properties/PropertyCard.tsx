'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LocationIcon } from '@/components/ui/LocationIcon';
import { Property } from '@/types/property.types';
import { formatCurrency } from '@/utils/format';
import { getPropertyImageBlur, getPropertyImageUrl } from '@/utils/propertyImages';
import {
  btnCardDelete,
  btnCardEdit,
  btnCardView,
  cardInteractive,
} from '@/utils/styles';

interface PropertyCardProps {
  property: Property;
  onDelete?: (id: string) => void;
  isDeleting?: boolean;
}

const BedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5 text-slate-700"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15m-16.5 18v-9a2.25 2.25 0 0 1 2.25-2.25h12A2.25 2.25 0 0 1 21.75 12v9M3.75 9.75h16.5"
    />
  </svg>
);

const BathIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-slate-700"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M8 2.25a.75.75 0 0 1 .75.75v1.5h6.5V3a.75.75 0 0 1 1.5 0v1.5h.75A3.75 3.75 0 0 1 21 8.25v9a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 4.5 17.25v-9A3.75 3.75 0 0 1 8.25 4.5h.75V3a.75.75 0 0 1 .75-.75ZM6 10.5a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6Z"
      clipRule="evenodd"
    />
  </svg>
);

const AreaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-slate-700"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export const PropertyCard = memo(({
  property,
  onDelete,
  isDeleting = false,
}: PropertyCardProps) => {
  const handleDelete = (): void => {
    if (onDelete) {
      onDelete(property._id);
    }
  };

  return (
    <article className={`${cardInteractive} flex flex-col overflow-hidden`}>
      <div className="relative h-52 w-full sm:h-56">
        <Image
          src={getPropertyImageUrl(property.propertyType)}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={getPropertyImageBlur(property.propertyType)}
          loading="lazy"
        />

        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          For Sale
        </span>

        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm transition-colors hover:bg-white"
          aria-label="Save property"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
            {property.title}
          </h3>
          <p className="shrink-0 text-right text-lg font-bold text-indigo-600">
            {formatCurrency(property.price)}
          </p>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
          <LocationIcon className="h-4 w-4 text-indigo-500" />
          <span className="line-clamp-1">{property.location}</span>
        </p>

        <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-4">
          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <BedIcon />
            <span className="text-base font-bold text-slate-900">{property.bedrooms}</span>
            <span className="text-xs text-slate-500">Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <BathIcon />
            <span className="text-base font-bold text-slate-900">{property.bathrooms}</span>
            <span className="text-xs text-slate-500">Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <AreaIcon />
            <span className="text-base font-bold text-slate-900">
              {property.area.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500">Sq Ft</span>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <Link href={`/properties/${property._id}`} className={btnCardView}>
            View
          </Link>

          <Link href={`/properties/${property._id}/edit`} className={btnCardEdit}>
            Edit
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            disabled={!onDelete || isDeleting}
            className={btnCardDelete}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </article>
  );
});

PropertyCard.displayName = 'PropertyCard';
