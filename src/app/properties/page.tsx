import { PropertyList } from '@/components/properties';
import { pageDescription, pageTitle } from '@/utils/styles';

export default function PropertiesPage() {
  return (
    <section className="space-y-6 sm:space-y-8">
      <div>
        <h1 className={pageTitle}>Properties</h1>
        <p className={pageDescription}>Browse all property listings.</p>
      </div>

      <PropertyList />
    </section>
  );
}
