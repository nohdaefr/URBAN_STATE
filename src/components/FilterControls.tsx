import { citiesList, propertyTypesList, roomOptions } from '../data/content';
import type { FilterState } from '../lib/filters';
import { ElevatorIcon, ParkingIcon, BalconyIcon, SafeRoomIcon, CheckIcon } from './icons';

interface Props {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}

const toggleAmenities: { key: keyof FilterState; label: string; icon: typeof ParkingIcon }[] = [
  { key: 'parking', label: 'חניה', icon: ParkingIcon },
  { key: 'elevator', label: 'מעלית', icon: ElevatorIcon },
  { key: 'balcony', label: 'מרפסת', icon: BalconyIcon },
  { key: 'safeRoom', label: 'ממ״ד', icon: SafeRoomIcon },
];

export default function FilterControls({ filters, onChange }: Props) {
  const set = <K extends keyof FilterState>(key: K, value: FilterState[K]) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="flex flex-col gap-7">
      <fieldset>
        <legend className="field-label">סוג עסקה</legend>
        <div className="flex rounded overflow-hidden border border-stone-300">
          {(['all', 'sale', 'rent'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => set('listingType', v)}
              className={`flex-1 py-2.5 text-[13.5px] font-medium transition-colors duration-200
                ${filters.listingType === v ? 'bg-charcoal text-ivory' : 'bg-transparent text-charcoal-soft hover:bg-stone-100'}`}
            >
              {v === 'all' ? 'הכל' : v === 'sale' ? 'למכירה' : 'להשכרה'}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="field-label" htmlFor="f-city">
          עיר / אזור
        </label>
        <select id="f-city" className="input-field" value={filters.city} onChange={(e) => set('city', e.target.value)}>
          <option value="">כל הערים</option>
          {citiesList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="f-type">
          סוג נכס
        </label>
        <select id="f-type" className="input-field" value={filters.type} onChange={(e) => set('type', e.target.value)}>
          <option value="">כל הסוגים</option>
          {propertyTypesList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="field-label">חדרים</span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => set('rooms', '')}
            className={`h-9 min-w-9 px-3 rounded-full border text-[13px] font-medium transition-colors duration-200
              ${filters.rooms === '' ? 'bg-charcoal text-ivory border-charcoal' : 'border-stone-300 text-charcoal-soft hover:border-charcoal/40'}`}
          >
            הכל
          </button>
          {roomOptions.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => set('rooms', r)}
              className={`h-9 min-w-9 px-3 rounded-full border text-[13px] font-medium transition-colors duration-200
                ${filters.rooms === r ? 'bg-charcoal text-ivory border-charcoal' : 'border-stone-300 text-charcoal-soft hover:border-charcoal/40'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="field-label">טווח מחיר (₪)</span>
        <div className="flex items-center gap-3">
          <input
            type="number"
            inputMode="numeric"
            placeholder="מינימום"
            aria-label="מחיר מינימום"
            className="input-field"
            value={filters.priceMin}
            onChange={(e) => set('priceMin', e.target.value)}
          />
          <span className="text-charcoal-muted text-sm">—</span>
          <input
            type="number"
            inputMode="numeric"
            placeholder="מקסימום"
            aria-label="מחיר מקסימום"
            className="input-field"
            value={filters.priceMax}
            onChange={(e) => set('priceMax', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="f-area">
          שטח מינימלי (מ״ר)
        </label>
        <input
          id="f-area"
          type="number"
          inputMode="numeric"
          placeholder="לדוגמה: 80"
          className="input-field"
          value={filters.areaMin}
          onChange={(e) => set('areaMin', e.target.value)}
        />
      </div>

      <div>
        <label className="field-label" htmlFor="f-floor">
          קומה מינימלית
        </label>
        <input
          id="f-floor"
          type="number"
          inputMode="numeric"
          placeholder="לדוגמה: 2"
          className="input-field"
          value={filters.floorMin}
          onChange={(e) => set('floorMin', e.target.value)}
        />
      </div>

      <fieldset>
        <legend className="field-label">מאפיינים נוספים</legend>
        <div className="grid grid-cols-2 gap-2.5">
          {toggleAmenities.map(({ key, label, icon: Icon }) => {
            const active = Boolean(filters[key]);
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => set(key, !active as FilterState[typeof key])}
                className={`flex items-center gap-2 rounded border px-3 py-2.5 text-[13.5px] transition-colors duration-200
                  ${active ? 'border-charcoal bg-charcoal text-ivory' : 'border-stone-300 text-charcoal-soft hover:border-charcoal/40'}`}
              >
                {active ? <CheckIcon width={15} height={15} /> : <Icon width={15} height={15} />}
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
