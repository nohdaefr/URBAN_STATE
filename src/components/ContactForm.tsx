import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from './icons';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  time: string;
  message: string;
}

const initialValues: FormValues = { name: '', phone: '', email: '', time: '', message: '' };

const phonePattern = /^0\d{1,2}-?\d{7}$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = 'נא להזין שם מלא';
  else if (values.name.trim().length < 2) errors.name = 'השם קצר מדי';

  if (!values.phone.trim()) errors.phone = 'נא להזין מספר טלפון';
  else if (!phonePattern.test(values.phone.trim())) errors.phone = 'מספר הטלפון אינו תקין';

  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'כתובת האימייל אינה תקינה';
  }

  return errors;
}

export default function ContactForm({
  title = 'תיאום שיחה',
  submitLabel = 'שליחה',
  context,
  compact = false,
}: {
  title?: string;
  submitLabel?: string;
  context?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const field = (key: keyof FormValues) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      if (touched[key]) {
        const nextErrors = validate({ ...values, [key]: value });
        setErrors((current) => ({ ...current, [key]: nextErrors[key] }));
      }
    },
    onBlur: () => setTouched((t) => ({ ...t, [key]: true })),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, time: true, message: true });
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center animate-fadeUp">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
          <CheckIcon width={26} height={26} />
        </div>
        <h3 className="font-serif text-2xl mb-2">תודה, קיבלנו את הפרטים.</h3>
        <p className="text-charcoal-muted text-[15px]">נציג Urban Estate יחזור אליכם בהקדם{context ? ` בנוגע ל${context}` : ''}.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues(initialValues);
            setTouched({});
          }}
          className="btn-text mt-6"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8" aria-label={title}>
      {!compact && <h3 className="font-serif text-2xl mb-5">{title}</h3>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="field-label" htmlFor="cf-name">
            שם מלא <span className="text-clay">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            className={`input-field ${touched.name && errors.name ? 'has-error' : ''}`}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            {...field('name')}
          />
          {touched.name && errors.name && (
            <p id="cf-name-err" className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="cf-phone">
            טלפון <span className="text-clay">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="050-1234567"
            dir="ltr"
            className={`input-field text-right ${touched.phone && errors.phone ? 'has-error' : ''}`}
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-describedby={errors.phone ? 'cf-phone-err' : undefined}
            {...field('phone')}
          />
          {touched.phone && errors.phone && (
            <p id="cf-phone-err" className="field-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="cf-email">
            אימייל
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            dir="ltr"
            className={`input-field text-right ${touched.email && errors.email ? 'has-error' : ''}`}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            {...field('email')}
          />
          {touched.email && errors.email && (
            <p id="cf-email-err" className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="cf-time">
            זמן מועדף ליצירת קשר
          </label>
          <select id="cf-time" className="input-field" {...field('time')}>
            <option value="">ללא העדפה</option>
            <option value="morning">בבוקר (09:00–12:00)</option>
            <option value="noon">בצהריים (12:00–16:00)</option>
            <option value="evening">בערב (16:00–20:00)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="cf-message">
            הודעה
          </label>
          <textarea
            id="cf-message"
            rows={3}
            className="input-field resize-none"
            placeholder={context ? `אשמח לשמוע פרטים נוספים על ${context}` : undefined}
            {...field('message')}
          />
        </div>
      </div>

      <p className="mt-4 text-[12.5px] leading-relaxed text-charcoal-muted">
        הפרטים שתמסרו ישמשו את Urban Estate ליצירת קשר בלבד, בהתאם ל
        <Link to="/legal/privacy" className="underline hover:text-clay-dark">
          {' '}
          מדיניות הפרטיות
        </Link>
        .
      </p>

      <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
        {submitLabel}
      </button>
    </form>
  );
}
