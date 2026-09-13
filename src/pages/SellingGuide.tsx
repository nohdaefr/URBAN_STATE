import { useState, type FormEvent } from 'react';
import { sellingPoints } from '../data/content';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { CheckIcon } from '../components/icons';
import { validateIsraeliPhone } from '../lib/validation';

export default function SellingGuide() {
  useDocumentMeta({
    title: 'מדריך מכירה | Urban Estate',
    description: 'רוצים למכור את הנכס שלכם? הכירו את הגישה של Urban Estate לתמחור, שיווק וניהול עסקת מכירה.',
  });

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextAddressError = address.trim() ? '' : 'נא להזין את כתובת הנכס';
    const nextPhoneError = validateIsraeliPhone(phone) ?? '';
    setAddressError(nextAddressError);
    setPhoneError(nextPhoneError);
    if (!nextAddressError && !nextPhoneError) setSent(true);
  };

  return (
    <div>
      <section className="bg-stone-100/60 py-16 sm:py-20">
        <div className="container-px max-w-container mx-auto max-w-2xl">
          <p className="label-eyebrow mb-3">מדריך למוכרים</p>
          <h1 className="text-display-md font-serif text-charcoal">רוצים למכור את הנכס שלכם?</h1>
          <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal-muted">
            מכירת נכס טובה היא לא רק שאלה של "כמה" — היא שאלה של "איך". הנה איך אנחנו ניגשים לתהליך, משלב התמחור
            ועד לחתימה על החוזה.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-px max-w-container mx-auto">
          <SectionHeading eyebrow="הגישה שלנו" title="שישה עקרונות למכירה מוצלחת" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <CheckIcon width={13} height={13} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-charcoal">{point.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-charcoal-muted">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="valuation" className="py-16 sm:py-24 bg-charcoal text-ivory scroll-mt-24">
        <div className="container-px max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow text-ivory/70 mb-3">הצעד הראשון</p>
            <h2 className="text-display-md font-serif text-ivory">קבלו הערכת שווי</h2>
            <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ivory/75">
              קבלו הערכת שווי ראשונית והבינו כיצד הנכס שלכם ממוקם בשוק הנוכחי — ללא עלות וללא התחייבות.
            </p>
          </Reveal>
          <Reveal delay={100}>
            {sent ? (
              <div className="bg-ivory/10 border border-ivory/20 rounded-md p-6 flex items-start gap-3">
                <CheckIcon className="text-clay shrink-0 mt-0.5" width={22} height={22} />
                <div>
                  <p className="font-medium">תודה, קיבלנו את הפרטים.</p>
                  <p className="text-ivory/70 text-[14px] mt-1">נציג Urban Estate יחזור אליכם עם הערכת שווי ראשונית.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-ivory rounded-md p-6 text-charcoal" noValidate>
                <label className="field-label" htmlFor="sg-address">
                  כתובת הנכס
                </label>
                <input
                  id="sg-address"
                  className="input-field"
                  placeholder="רחוב, מספר, עיר"
                  value={address}
                  onChange={(e) => { setAddress(e.target.value); setAddressError(''); }}
                  aria-invalid={Boolean(addressError)}
                  aria-describedby={addressError ? 'sg-address-error' : undefined}
                />
                {addressError && <p id="sg-address-error" className="field-error" role="alert">{addressError}</p>}
                <label className="field-label mt-4" htmlFor="sg-phone">
                  טלפון ליצירת קשר
                </label>
                <input
                  id="sg-phone"
                  className="input-field"
                  dir="ltr"
                  placeholder="050-1234567"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setPhoneError(''); }}
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={phoneError ? 'sg-phone-error' : undefined}
                />
                {phoneError && <p id="sg-phone-error" className="field-error" role="alert">{phoneError}</p>}
                <button type="submit" className="btn-primary w-full mt-5">
                  לקבלת הערכת שווי
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
