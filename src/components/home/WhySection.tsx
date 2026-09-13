import { companyValues, companyStats } from '../../data/content';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function WhySection() {
  return (
    <section className="py-20 sm:py-28 bg-stone-100/60">
      <div className="container-px max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <SmartImage
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
                seed="why-main"
                alt="חלל מגורים פתוח ומואר"
                orientation="tall"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block card-surface bg-ivory px-6 py-5 shadow-lift">
              <p className="text-3xl font-serif text-charcoal">{companyStats[1].value}</p>
              <p className="text-[13px] text-charcoal-muted mt-0.5">{companyStats[1].label}</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="למה אורבן אסטייט"
              title="נדל״ן שמתחיל בהקשבה, לא במכירה."
              subtitle="אנחנו לא מציגים כל נכס שיש בשוק. אנחנו בוררים, בודקים ומביאים ללקוחות שלנו רק את מה שבאמת שווה את הזמן שלהם."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {companyValues.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <h3 className="text-[16px] font-semibold text-charcoal">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-muted">{v.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-stone-300 pt-8">
              {companyStats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl sm:text-3xl text-charcoal">{s.value}</p>
                  <p className="mt-1 text-[12.5px] text-charcoal-muted leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
