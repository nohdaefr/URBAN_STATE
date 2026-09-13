import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { citiesList, propertyTypesList, roomOptions } from '../data/content';
import { SearchIcon } from './icons';

export default function SearchBar({ className = '' }: { className?: string }) {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [rooms, setRooms] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('listingType', listingType);
    if (city) params.set('city', city);
    if (type) params.set('type', type);
    if (rooms) params.set('rooms', rooms);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`card-surface bg-ivory/97 backdrop-blur-md p-4 sm:p-5 lg:p-2 ${className}`}
      aria-label="חיפוש נכסים"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-0">
        <div className="flex rounded overflow-hidden border border-stone-300 lg:border-0 lg:rounded-none shrink-0 lg:w-[190px]">
          {(['sale', 'rent'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setListingType(v)}
              className={`flex-1 px-3 py-3 text-[13.5px] font-medium transition-colors duration-200 lg:rounded
                ${listingType === v ? 'bg-charcoal text-ivory' : 'bg-transparent text-charcoal-soft hover:bg-stone-100'}`}
            >
              {v === 'sale' ? 'לקנייה' : 'להשכרה'}
            </button>
          ))}
        </div>

        <div className="hidden lg:block w-px bg-stone-200 my-2" />

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="עיר"
          className="input-field lg:border-0 lg:rounded-none lg:bg-transparent lg:focus:ring-0"
        >
          <option value="">כל הערים</option>
          {citiesList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="hidden lg:block w-px bg-stone-200 my-2" />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-label="סוג נכס"
          className="input-field lg:border-0 lg:rounded-none lg:bg-transparent lg:focus:ring-0"
        >
          <option value="">סוג נכס</option>
          {propertyTypesList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <div className="hidden lg:block w-px bg-stone-200 my-2" />

        <select
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          aria-label="מספר חדרים"
          className="input-field lg:border-0 lg:rounded-none lg:bg-transparent lg:focus:ring-0"
        >
          <option value="">חדרים</option>
          {roomOptions.map((r) => (
            <option key={r} value={r}>
              {r} חדרים
            </option>
          ))}
        </select>

        <button type="submit" className="btn-primary w-full lg:w-auto lg:m-1 shrink-0">
          <SearchIcon width={16} height={16} />
          חיפוש נכסים
        </button>
      </div>

      <div className="mt-3 lg:mt-2 lg:px-3 lg:pb-1">
        <button
          type="button"
          onClick={() => navigate('/properties')}
          className="text-[13px] text-charcoal-muted underline decoration-stone-300 underline-offset-4 hover:text-clay-dark"
        >
          חיפוש מתקדם
        </button>
      </div>
    </form>
  );
}
