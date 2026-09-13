import { useState, type FormEvent } from 'react';
import { CheckIcon } from '../icons';
import { validateIsraeliPhone } from '../../lib/validation';

export default function ValuationSection() {
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
    <section id="valuation" className="py-20 sm:py-28">
      <div className="container-px max-w-container mx-auto">
        <div className="relative overflow-hidden rounded-md bg-forest text-ivory px-6 py-14 sm:px-14 sm:py-16 lg:px-20">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%">
              <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
                <path d="M46 0H0V46" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="label-eyebrow text-ivory/70 mb-3">הערכת שווי נכס</p>
              <h2 className="text-display-md font-serif text-ivory max-w-lg">כמה הנכס שלכם באמת שווה?</h2>
              <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ivory/75">
                קבלו הערכת שווי ראשונית והבינו כיצד הנכס שלכם ממוקם בשוק הנוכחי — ללא עלות וללא התחייבות.
              </p>
            </div>

            {sent ? (
              <div className="bg-ivory/10 border border-ivory/20 rounded-md p-6 flex items-start gap-3">
                <CheckIcon className="text-clay shrink-0 mt-0.5" width={22} height={22} />
                <div>
                  <p className="font-medium">תודה, קיבלנו את הפרטים.</p>
                  <p className="text-ivory/70 text-[14px] mt-1">נציג Urban Estate יחזור אליכם עם הערכת שווי ראשונית.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-ivory rounded-md p-5 sm:p-6 text-charcoal" noValidate>
                <label className="field-label" htmlFor="val-address">
                  כתובת הנכס
                </label>
                <input
                  id="val-address"
                  className="input-field"
                  placeholder="רחוב, מספר, עיר"
                  value={address}
                  onChange={(e) => { setAddress(e.target.value); setAddressError(''); }}
                  aria-invalid={Boolean(addressError)}
                  aria-describedby={addressError ? 'val-address-error' : undefined}
                />
                {addressError && <p id="val-address-error" className="field-error" role="alert">{addressError}</p>}
                <label className="field-label mt-4" htmlFor="val-phone">
                  טלפון ליצירת קשר
                </label>
                <input
                  id="val-phone"
                  className="input-field"
                  dir="ltr"
                  placeholder="050-1234567"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setPhoneError(''); }}
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={phoneError ? 'val-phone-error' : undefined}
                />
                {phoneError && <p id="val-phone-error" className="field-error" role="alert">{phoneError}</p>}
                <button type="submit" className="btn-primary w-full mt-5">
                  לקבלת הערכת שווי
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
