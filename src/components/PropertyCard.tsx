import { Link } from 'react-router-dom';
import type { Property } from '../data/types';
import { formatPrice, formatArea } from '../lib/format';
import SmartImage from './ui/SmartImage';
import FavoriteButton from './FavoriteButton';
import { ArrowIcon } from './icons';

export default function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  const meta = [`${property.rooms} חדרים`, formatArea(property.area)];
  if (property.floor > 0) meta.push(`קומה ${property.floor}`);
  else if (property.type === 'בית פרטי') meta.push(`${property.parking} חניות`);

  return (
    <article className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-200">
        <Link
          to={`/properties/${property.slug}`}
          className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2"
          aria-label={`${property.title}, ${property.city}, ${formatPrice(property.price, property.listingType)}`}
        >
          <SmartImage
            src={property.images[0]}
            seed={property.id}
            alt={`${property.title} — ${property.city}`}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-[650ms] ease-premium group-hover:scale-[1.06]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-ivory text-[13px] font-medium opacity-0 translate-y-1.5 transition-all duration-300 ease-premium group-hover:opacity-100 group-hover:translate-y-0">
            לפרטים
            <ArrowIcon width={14} height={14} className="rotate-180" />
          </span>
        </Link>

        <div className="pointer-events-none absolute top-3 right-3">
          <span className="badge">{property.status}</span>
        </div>
        <div className="absolute top-3 left-3">
          <FavoriteButton propertyId={property.id} />
        </div>
      </div>

      <Link to={`/properties/${property.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2">
        <div className="mt-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] text-charcoal-muted">{property.type}</p>
            <p className="text-[13px] text-charcoal-muted">{property.city}</p>
          </div>
          <h3 className="mt-1 font-serif text-[19px] leading-snug text-charcoal group-hover:text-clay-dark transition-colors duration-200">
            {property.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] text-charcoal-muted">{meta.join(' · ')}</p>
          <p className="mt-2.5 text-[17px] font-semibold text-charcoal">
            {formatPrice(property.price, property.listingType)}
          </p>
        </div>
      </Link>
    </article>
  );
}
