import type { Agent } from './types';

export const agents: Agent[] = [
  {
    id: 'yonatan-cohen',
    name: 'יונתן כהן',
    role: 'יועץ נדל״ן בכיר',
    quote: 'אני מאמין שתפקידו של יועץ נדל״ן הוא לא רק למצוא נכס, אלא להבין מה באמת חשוב לאדם שמאחוריו.',
    bio: 'יונתן מלווה משפחות ומשקיעים בתל אביב והסביבה כבר למעלה מעשור. הגישה שלו משלבת הבנה מעמיקה של השוק עם סבלנות אמיתית לתהליך של הלקוח.',
    experienceYears: 12,
    specialty: 'דירות בוטיק ופנטהאוזים במרכז תל אביב',
    phone: '+972501234567',
    phoneDisplay: '050-123-4567',
    whatsapp: '972501234567',
    email: 'yonatan@urban-estate.co.il',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'noa-mizrahi',
    name: 'נועה מזרחי',
    role: 'יועצת נדל״ן, ראש צוות השרון',
    quote: 'הרגע שבו לקוח נכנס לנכס ומרגיש בבית — זו המטרה שלי בכל עסקה.',
    bio: 'נועה מתמחה בבתים פרטיים ודירות משפחתיות באזור השרון, ומכירה כל רחוב ושכונה כאילו גדלה בהם.',
    experienceYears: 9,
    specialty: 'בתים פרטיים ודירות גן ברעננה והרצליה',
    phone: '+972502345678',
    phoneDisplay: '050-234-5678',
    whatsapp: '972502345678',
    email: 'noa@urban-estate.co.il',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'omer-avraham',
    name: 'עומר אברהם',
    role: 'יועץ נדל״ן, השקעות ופרויקטים',
    quote: 'עסקת נדל״ן טובה נבנית על נתונים, לא על התלהבות רגעית.',
    bio: 'עומר עובד בעיקר עם משקיעים ורוכשי דירה ראשונה, ומביא איתו רקע בניתוח שוק וליווי פיננסי של עסקאות.',
    experienceYears: 7,
    specialty: 'השקעות ודירות ראשונות ברמת גן וגבעתיים',
    phone: '+972503456789',
    phoneDisplay: '050-345-6789',
    whatsapp: '972503456789',
    email: 'omer@urban-estate.co.il',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
];

export const agentById = (id: string) => agents.find((a) => a.id === id) ?? agents[0];
