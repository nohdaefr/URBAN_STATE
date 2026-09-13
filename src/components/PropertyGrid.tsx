import type { Property } from '../data/types';
import PropertyCard from './PropertyCard';
import Reveal from './ui/Reveal';

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {properties.map((property, i) => (
        <Reveal key={property.id} delay={(i % 4) * 70}>
          <PropertyCard property={property} priority={i < 4} />
        </Reveal>
      ))}
    </div>
  );
}
