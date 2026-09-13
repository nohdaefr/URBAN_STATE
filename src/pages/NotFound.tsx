import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowIcon } from '../components/icons';

export default function NotFound() {
  useDocumentMeta({ title: 'הדף לא נמצא | Urban Estate' });

  return (
    <div className="container-px max-w-container mx-auto py-24 sm:py-32 text-center">
      <p className="label-eyebrow mb-4">שגיאה 404</p>
      <h1 className="font-serif text-display-lg text-charcoal">הדף הזה עדיין לא נבנה.</h1>
      <p className="mt-5 max-w-md mx-auto text-[15.5px] leading-relaxed text-charcoal-muted">
        ייתכן שהקישור שגוי, או שהנכס שחיפשתם כבר לא זמין. בואו נמצא לכם משהו אחר.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="btn-primary">
          חזרה לדף הבית
        </Link>
        <Link to="/properties" className="btn-secondary">
          לצפייה בנכסים
          <ArrowIcon width={15} height={15} className="rotate-180" />
        </Link>
      </div>
    </div>
  );
}
