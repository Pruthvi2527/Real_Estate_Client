'use client';

import Link from 'next/link';
import { PropertyResourceGuard } from '@/components/properties/PropertyResourceGuard';
import { DetailItem } from '@/components/ui/DetailItem';
import { LocationIcon } from '@/components/ui/LocationIcon';
import { useProperty } from '@/hooks/useProperty';
import { formatArea, formatCurrency } from '@/utils/format';
import { formatPropertyTypeLabel } from '@/utils/propertyValidation';
import { btnPrimary, btnSecondary, card, sectionLabel } from '@/utils/styles';

interface PropertyDetailsProps {
  propertyId: string;
}

export const PropertyDetails = ({ propertyId }: PropertyDetailsProps) => {
  const { property, error, isLoading, refetch } = useProperty(propertyId);

  return (
    <PropertyResourceGuard
      isLoading={isLoading}
      error={error ?? (property ? null : 'Property not found')}
      loadingMessage="Loading property details..."
      onRetry={refetch}
    >
      {property && (
        <article className={`${card} overflow-hidden`}>
          <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {property.title}
                </h1>
                <p className="flex items-center gap-2 text-sm text-slate-600 sm:text-base">
                  <LocationIcon className="h-5 w-5 shrink-0 text-indigo-500" />
                  {property.location}
                </p>
              </div>

              <p className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-right">
                {formatCurrency(property.price)}
              </p>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:space-y-10 sm:p-8">
            <section>
              <h2 className={sectionLabel}>Description</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {property.description}
              </p>
            </section>

            <section>
              <h2 className={`${sectionLabel} mb-4`}>Property Details</h2>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <DetailItem
                  label="Property Type"
                  value={formatPropertyTypeLabel(property.propertyType)}
                />
                <DetailItem label="Bedrooms" value={property.bedrooms} />
                <DetailItem label="Bathrooms" value={property.bathrooms} />
                <DetailItem label="Area" value={formatArea(property.area)} />
              </dl>
            </section>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
              <Link
                href={`/properties/${property._id}/edit`}
                className={`${btnPrimary} flex-1 sm:flex-none`}
              >
                Edit Property
              </Link>
              <Link href="/properties" className={`${btnSecondary} flex-1 sm:flex-none`}>
                Back to Properties
              </Link>
            </div>
          </div>
        </article>
      )}
    </PropertyResourceGuard>
  );
};
