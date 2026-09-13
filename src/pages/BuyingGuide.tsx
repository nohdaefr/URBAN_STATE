import { Link } from 'react-router-dom';
import { buyingSteps } from '../data/content';
import Reveal from '../components/ui/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BuyingGuide() {
  useDocumentMeta({
    title: 'מדריך קנייה | Urban Estate',
    description: 'איך קונים דירה בישראל — מדריך שלב־אחר־שלב מבית Urban Estate, מהגדרת תקציב ועד מסירת הנכס.',
  });

  return (
    <div>
      <section className="bg-stone-100/60 py-16 sm:py-20">
        <div className="container-px max-w-container mx-auto max-w-2xl">
          <p className="label-eyebrow mb-3">מדריך לרוכשים</p>
          <h1 className="text-display-md font-serif text-charcoal">איך קונים דירה בישראל?</h1>
          <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal-muted">
            תהליך רכישת דירה כולל שבעה שלבים עיקריים. הבנה מראש של כל שלב חוסכת זמן, כסף ועוגמת נפש — הנה המדריך
            המלא שלנו.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-px max-w-container mx-auto max-w-3xl">
          <ol className="space-y-10">
            {buyingSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 50}>
                <li className="flex gap-6">
                  <span className="font-serif text-3xl text-clay shrink-0 w-14">{step.number}</span>
                  <div className="border-b border-stone-200 pb-10 grow">
                    <h2 className="text-[19px] font-semibold text-charcoal">{step.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-14 card-surface p-8 text-center">
            <h2 className="font-serif text-2xl mb-2">מוכנים להתחיל לחפש?</h2>
            <p className="text-charcoal-muted text-[15px] mb-6">
              הצוות שלנו ילווה אתכם בכל שלב — מהפגישה הראשונה ועד החתימה על החוזה.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/properties" className="btn-primary">
                לצפייה בנכסים
              </Link>
              <Link to="/contact" className="btn-secondary">
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
