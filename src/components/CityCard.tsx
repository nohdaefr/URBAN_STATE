import { Link } from 'react-router-dom';
import type { City } from '../data/types';
import SmartImage from './ui/SmartImage';

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      to={`/properties?city=${encodeURIComponent(city.name)}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-md"
    >
      <SmartImage
        src={city.image}
        seed={city.id}
        alt={city.name}
        className="h-full w-full object-cover transition-transform duration-[650ms] ease-premium group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-2xl text-ivory">{city.name}</h3>
        <p className="mt-1.5 text-[13px] text-ivory/70 leading-relaxed line-clamp-2">{city.description}</p>
        <p className="mt-3 text-[12.5px] text-ivory/55">{city.propertyCount} נכסים זמינים</p>
      </div>
    </Link>
  );
}
