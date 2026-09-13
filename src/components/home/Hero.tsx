import { Link } from 'react-router-dom';
import SmartImage from '../ui/SmartImage';
import SearchBar from '../SearchBar';
import { ArrowIcon } from '../icons';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[560px] sm:h-[82vh] lg:h-[88vh] w-full overflow-hidden">
        <SmartImage
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          seed="hero-main"
          alt="דירת גג אדריכלית בתל אביב עם נוף פתוח"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />

        <div className="relative z-10 h-full container-px max-w-container mx-auto flex flex-col justify-end pb-32 sm:pb-36 lg:pb-40">
          <p className="label-eyebrow text-ivory/80 mb-5 animate-fadeUp" style={{ animationDelay: '80ms' }}>
            Urban Estate · אורבן אסטייט
          </p>
          <h1
            className="text-display-xl font-serif text-ivory max-w-3xl animate-fadeUp"
            style={{ animationDelay: '160ms' }}
          >
            נכסים שנבחרו אחרת.
          </h1>
          <p
            className="mt-6 max-w-xl text-[16.5px] sm:text-[17px] leading-relaxed text-ivory/80 animate-fadeUp"
            style={{ animationDelay: '260ms' }}
          >
            אנחנו מאמינים שנכס טוב הוא הרבה מעבר לארבעה קירות. אנו בוחרים בקפידה נכסים עם אופי, מיקום ופוטנציאל —
            ומלווים אתכם בדרך לעסקה הנכונה.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fadeUp" style={{ animationDelay: '360ms' }}>
            <Link to="/properties" className="btn-primary">
              לצפייה בנכסים
              <ArrowIcon width={16} height={16} className="rotate-180" />
            </Link>
            <Link to="/about" className="btn-ghost-light">
              הכירו אותנו
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-20 container-px max-w-container mx-auto -mt-16 sm:-mt-14 lg:-mt-12">
        <SearchBar />
      </div>
    </section>
  );
}
