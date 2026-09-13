import { processSteps } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal text-ivory">
      <div className="container-px max-w-container mx-auto">
        <SectionHeading
          eyebrow="איך זה עובד"
          title="התהליך שלנו"
          subtitle="ארבעה שלבים ברורים, מהפגישה הראשונה ועד החתימה."
          dark
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className={`pt-6 border-t ${i === 0 ? 'border-clay' : 'border-ivory/20'}`}>
                <span className="font-serif text-3xl text-clay">{step.number}</span>
                <h3 className="mt-4 text-[18px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ivory/65">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
