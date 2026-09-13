import ContactForm from '../components/ContactForm';
import Reveal from '../components/ui/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PhoneIcon, WhatsappIcon, MailIcon, MapPinIcon } from '../components/icons';

const info = [
  { icon: PhoneIcon, label: 'טלפון', value: '050-123-4567', href: 'tel:+972501234567' },
  { icon: WhatsappIcon, label: 'WhatsApp', value: 'שלחו הודעה', href: 'https://wa.me/972501234567' },
  { icon: MailIcon, label: 'אימייל', value: 'hello@urban-estate.co.il', href: 'mailto:hello@urban-estate.co.il' },
  { icon: MapPinIcon, label: 'משרד', value: 'רוטשילד 22, תל אביב', href: undefined },
];

export default function Contact() {
  useDocumentMeta({
    title: 'צור קשר | Urban Estate',
    description: 'רוצים לשמוע עוד על נכס, לקבוע ביקור או לקבל ייעוץ? צוות Urban Estate כאן בשבילכם.',
  });

  return (
    <div className="container-px max-w-container mx-auto py-14 sm:py-20">
      <div className="max-w-xl">
        <p className="label-eyebrow mb-3">צור קשר</p>
        <h1 className="text-display-md font-serif text-charcoal">בואו נדבר על הצעד הבא שלכם</h1>
        <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal-muted">
          בין אם אתם מחפשים נכס, שוקלים למכור, או פשוט רוצים להתייעץ — נשמח לשמוע מכם ולחזור אליכם בהקדם.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
        <Reveal className="space-y-4">
          {info.map((item) => {
            const content = (
              <div className="flex items-center gap-4 card-surface px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-clay-dark shrink-0">
                  <item.icon width={17} height={17} />
                </span>
                <div>
                  <p className="text-[12.5px] text-charcoal-muted">{item.label}</p>
                  <p className="text-[15px] font-medium text-charcoal">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block hover:opacity-90 transition-opacity"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}

          <div className="card-surface px-5 py-4">
            <p className="text-[12.5px] text-charcoal-muted mb-1">שעות פעילות</p>
            <p className="text-[14.5px] text-charcoal">ראשון–חמישי: 09:00–19:00</p>
            <p className="text-[14.5px] text-charcoal">שישי: 09:00–13:00</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm title="השאירו פרטים" submitLabel="שליחת הפנייה" />
        </Reveal>
      </div>
    </div>
  );
}
