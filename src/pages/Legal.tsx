import { useDocumentMeta } from '../hooks/useDocumentMeta';

const pages: Record<string, { title: string; sections: { heading: string; text: string }[] }> = {
  terms: {
    title: 'תקנון האתר',
    sections: [
      {
        heading: 'כללי',
        text: 'אתר Urban Estate מופעל כאתר תדמית ופרויקט הדגמה. המידע על הנכסים המוצג באתר הוא הדגמה בלבד ואינו מהווה הצעה מחייבת למכירה או השכרה.',
      },
      {
        heading: 'שימוש באתר',
        text: 'השימוש באתר כפוף לתנאים אלו. חל איסור להעתיק, לשכפל או לעשות שימוש מסחרי בתכנים ובעיצוב האתר ללא אישור מראש ובכתב.',
      },
      {
        heading: 'אחריות',
        text: 'החברה אינה אחראית לכל נזק ישיר או עקיף שייגרם כתוצאה משימוש באתר או הסתמכות על המידע המוצג בו.',
      },
    ],
  },
  privacy: {
    title: 'מדיניות פרטיות',
    sections: [
      {
        heading: 'איסוף מידע',
        text: 'אנו אוספים מידע שאתם מוסרים ביוזמתכם דרך טפסי יצירת הקשר באתר — לרבות שם, טלפון ואימייל — לצורך מענה לפנייתכם בלבד.',
      },
      {
        heading: 'שימוש במידע',
        text: 'המידע שנאסף משמש ליצירת קשר, מענה לפניות ומתן שירות. אנו לא מוכרים או משתפים את פרטיכם עם צדדים שלישיים למטרות שיווקיות.',
      },
      {
        heading: 'עוגיות (Cookies)',
        text: 'האתר עשוי להשתמש בעוגיות לצורך שיפור חוויית הגלישה. ניתן לחסום עוגיות דרך הגדרות הדפדפן.',
      },
    ],
  },
  accessibility: {
    title: 'הצהרת נגישות',
    sections: [
      {
        heading: 'מחויבותנו לנגישות',
        text: 'Urban Estate פועלת להנגשת האתר לאנשים עם מוגבלות, בהתאם לתקן הישראלי (ת"י 5568) ולעקרונות WCAG 2.2 ברמה AA.',
      },
      {
        heading: 'מה עשינו',
        text: 'האתר נבנה עם היררכיית כותרות סמנטית, ניווט מלא במקלדת, טקסט חלופי לתמונות ומצבי מיקוד (focus) ברורים לכל האלמנטים האינטראקטיביים.',
      },
      {
        heading: 'פנייה בנושא נגישות',
        text: 'נתקלתם בבעיית נגישות באתר? נשמח שתדווחו לנו בכתובת accessibility@urban-estate.co.il ונטפל בפנייה בהקדם.',
      },
    ],
  },
};

export default function Legal({ page }: { page: 'terms' | 'privacy' | 'accessibility' }) {
  const data = pages[page];
  useDocumentMeta({ title: `${data.title} | Urban Estate` });

  return (
    <div className="container-px max-w-container mx-auto py-16 sm:py-20 max-w-2xl">
      <p className="label-eyebrow mb-3">מידע משפטי</p>
      <h1 className="text-display-md font-serif text-charcoal mb-10">{data.title}</h1>
      <div className="space-y-8">
        {data.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-[18px] font-semibold text-charcoal mb-2">{s.heading}</h2>
            <p className="text-[15px] leading-relaxed text-charcoal-soft">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
