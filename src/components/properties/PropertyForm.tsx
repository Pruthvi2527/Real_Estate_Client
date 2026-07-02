'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROPERTY_FORM_PAGE_CONFIG } from '@/config/propertyForm.config';
import { FormField } from '@/components/ui/FormField';
import { Alert } from '@/components/ui/Alert';
import { propertyService } from '@/services';
import { PropertyFormProps } from '@/types/propertyForm.types';
import { PROPERTY_TYPES } from '@/types/property.types';
import { getErrorMessage } from '@/utils/error';
import { propertyDataCache } from '@/utils/propertyDataCache';
import { btnPrimary, btnSecondary, card, getInputClassName } from '@/utils/styles';
import {
  PropertyFormData,
  PropertyFormErrors,
  formatPropertyTypeLabel,
  initialPropertyFormData,
  parsePropertyForm,
  validatePropertyForm,
} from '@/utils/propertyValidation';

export const PropertyForm = (props: PropertyFormProps) => {
  const router = useRouter();
  const config = PROPERTY_FORM_PAGE_CONFIG[props.mode];
  const cancelHref = props.cancelHref ?? '/properties';

  const [formData, setFormData] = useState<PropertyFormData>(
    props.mode === 'edit' ? props.initialData : initialPropertyFormData
  );
  const [errors, setErrors] = useState<PropertyFormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof PropertyFormData>(
    field: K,
    value: PropertyFormData[K]
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setSubmitError(null);

    const validationErrors = validatePropertyForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = parsePropertyForm(formData);

      if (props.mode === 'edit') {
        await propertyService.updateProperty(props.propertyId, payload);
        propertyDataCache.removeDetail(props.propertyId);
      } else {
        await propertyService.createProperty(payload);
        propertyDataCache.clear();
      }

      router.push('/properties');
    } catch (error) {
      setSubmitError(getErrorMessage(error, config.errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${card} space-y-6 p-6 sm:space-y-8 sm:p-8`}
    >
      {submitError && <Alert variant="error" message={submitError} />}

      <FormField id="title" label="Title" error={errors.title}>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          className={getInputClassName(Boolean(errors.title))}
          placeholder="Modern Downtown Apartment"
        />
      </FormField>

      <FormField id="description" label="Description" error={errors.description}>
        <textarea
          id="description"
          rows={4}
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
          className={getInputClassName(Boolean(errors.description))}
          placeholder="Describe the property..."
        />
      </FormField>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField id="price" label="Price" error={errors.price}>
          <input
            id="price"
            type="number"
            min="0"
            step="1"
            value={formData.price}
            onChange={(e) => updateField('price', e.target.value)}
            className={getInputClassName(Boolean(errors.price))}
            placeholder="250000"
          />
        </FormField>

        <FormField id="location" label="Location" error={errors.location}>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => updateField('location', e.target.value)}
            className={getInputClassName(Boolean(errors.location))}
            placeholder="New York, NY"
          />
        </FormField>
      </div>

      <FormField id="propertyType" label="Property Type" error={errors.propertyType}>
        <select
          id="propertyType"
          value={formData.propertyType}
          onChange={(e) =>
            updateField('propertyType', e.target.value as PropertyFormData['propertyType'])
          }
          className={getInputClassName(Boolean(errors.propertyType))}
        >
          <option value="">Select property type</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type} value={type}>
              {formatPropertyTypeLabel(type)}
            </option>
          ))}
        </select>
      </FormField>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <FormField id="bedrooms" label="Bedrooms" error={errors.bedrooms}>
          <input
            id="bedrooms"
            type="number"
            min="0"
            step="1"
            value={formData.bedrooms}
            onChange={(e) => updateField('bedrooms', e.target.value)}
            className={getInputClassName(Boolean(errors.bedrooms))}
            placeholder="2"
          />
        </FormField>

        <FormField id="bathrooms" label="Bathrooms" error={errors.bathrooms}>
          <input
            id="bathrooms"
            type="number"
            min="0"
            step="1"
            value={formData.bathrooms}
            onChange={(e) => updateField('bathrooms', e.target.value)}
            className={getInputClassName(Boolean(errors.bathrooms))}
            placeholder="2"
          />
        </FormField>

        <FormField id="area" label="Area (sq ft)" error={errors.area}>
          <input
            id="area"
            type="number"
            min="0"
            step="1"
            value={formData.area}
            onChange={(e) => updateField('area', e.target.value)}
            className={getInputClassName(Boolean(errors.area))}
            placeholder="1200"
          />
        </FormField>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => router.push(cancelHref)}
          disabled={isSubmitting}
          className={btnSecondary}
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className={btnPrimary}
        >
          {isSubmitting ? config.submittingLabel : config.submitLabel}
        </button>
      </div>
    </form>
  );
};
