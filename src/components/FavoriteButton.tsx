import { useState } from 'react';
import { HeartIcon } from './icons';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoriteButton({
  propertyId,
  size = 'md',
  className = '',
}: {
  propertyId: string;
  size?: 'sm' | 'md';
  className?: string;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(propertyId);
  const [pop, setPop] = useState(false);

  const dimension = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? 'הסרה מהנכסים השמורים' : 'שמירת הנכס'}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(propertyId);
        setPop(true);
        window.setTimeout(() => setPop(false), 260);
      }}
      className={`${dimension} inline-flex items-center justify-center rounded-full bg-ivory/95 backdrop-blur-sm
        border border-charcoal/10 text-charcoal shadow-sm transition-all duration-200 ease-premium
        hover:bg-ivory hover:scale-105 active:scale-95 ${className}`}
    >
      <span className={`transition-transform duration-200 ${pop ? 'scale-125' : 'scale-100'} ${active ? 'text-clay' : 'text-charcoal-soft'}`}>
        <HeartIcon filled={active} width={size === 'sm' ? 15 : 17} height={size === 'sm' ? 15 : 17} />
      </span>
    </button>
  );
}
