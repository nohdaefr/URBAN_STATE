import type { NearbyPlace } from '../data/types';
import { MapPinIcon } from './icons';

export default function PropertyLocation({
  city,
  neighborhood,
  nearby,
}: {
  city: string;
  neighborhood: string;
  nearby: NearbyPlace[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10 items-stretch">
      <div>
        <p className="flex items-center gap-2 text-[15px] text-charcoal-soft mb-5">
          <MapPinIcon width={17} height={17} className="text-clay-dark" />
          {neighborhood}, {city}
        </p>
        <ul className="space-y-3">
          {nearby.map((n) => (
            <li key={n.label} className="flex items-center justify-between border-b border-stone-200 pb-3 text-[14.5px]">
              <span className="text-charcoal">{n.label}</span>
              <span className="text-charcoal-muted">{n.distance}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative min-h-[220px] lg:min-h-0 rounded-md overflow-hidden bg-stone-200 flex items-center justify-center"
        role="img"
        aria-label={`מפה סכמטית של האזור — ${neighborhood}, ${city}`}
      >
        <svg viewBox="0 0 400 280" className="absolute inset-0 h-full w-full text-stone-300" aria-hidden="true">
          <rect width="400" height="280" fill="#F4EEE3" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 46} y1="0" x2={i * 46} y2="280" stroke="#D9CCB4" strokeWidth="1" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 46} x2="400" y2={i * 46} stroke="#D9CCB4" strokeWidth="1" />
          ))}
        </svg>
        <div className="relative flex flex-col items-center gap-2 text-charcoal-soft">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay text-ivory shadow-lift">
            <MapPinIcon width={20} height={20} />
          </span>
          <span className="text-[12.5px] bg-ivory/90 px-2.5 py-1 rounded">מפה להמחשה בלבד</span>
        </div>
      </div>
    </div>
  );
}
