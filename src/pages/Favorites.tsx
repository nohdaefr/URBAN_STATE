import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { properties } from '../data/properties';
import PropertyGrid from '../components/PropertyGrid';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { HeartIcon } from '../components/icons';

export default function Favorites() {
  useDocumentMeta({ title: 'הנכסים ששמרתם | Urban Estate' });
  const { favorites } = useFavorites();
  const saved = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="container-px max-w-container mx-auto py-14 sm:py-20">
      <p className="label-eyebrow mb-3">שמורים</p>
      <h1 className="text-display-md font-serif text-charcoal">הנכסים ששמרתם</h1>

      {saved.length === 0 ? (
        <div className="mt-16 text-center py-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-charcoal-muted">
            <HeartIcon width={26} height={26} />
          </div>
          <h2 className="font-serif text-2xl mb-2">עדיין לא שמרתם נכסים</h2>
          <p className="text-charcoal-muted text-[15px] max-w-sm mx-auto leading-relaxed">
            כשמשהו מוצא חן בעיניכם, שמרו אותו כאן כדי לחזור אליו מאוחר יותר.
          </p>
          <Link to="/properties" className="btn-primary mt-7 inline-flex">
            לצפייה בכל הנכסים
          </Link>
        </div>
      ) : (
        <div className="mt-12">
          <p className="text-[14.5px] text-charcoal-soft mb-8">
            <span className="font-semibold text-charcoal">{saved.length}</span> נכסים שמורים
          </p>
          <PropertyGrid properties={saved} />
        </div>
      )}
    </div>
  );
}
