import ContactForm from '../ContactForm';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { PhoneIcon, WhatsappIcon } from '../icons';

export default function HomeContactSection() {
  return (
    <section className="py-20 sm:py-28 bg-stone-100/60">
      <div className="container-px max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <SectionHeading eyebrow="בואו נדבר" title="רוצים לראות נכס?" />
          <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-charcoal-muted">
            ספרו לנו מתי נוח לכם ונציג שלנו יחזור אליכם לתיאום ביקור.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+972501234567" className="btn-secondary">
              <PhoneIcon width={16} height={16} />
              050-123-4567
            </a>
            <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn-secondary">
              <WhatsappIcon width={16} height={16} />
              שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm title="תיאום ביקור" submitLabel="תיאום ביקור" compact />
        </Reveal>
      </div>
    </section>
  );
}
