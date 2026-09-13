import { companyStats, companyValues, processSteps } from '../data/content';
import { agents } from '../data/agents';
import AgentCard from '../components/AgentCard';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Link } from 'react-router-dom';

export default function About() {
  useDocumentMeta({
    title: 'אודות | Urban Estate',
    description: 'Urban Estate נוסדה מתוך אמונה שנדל״ן הוא קודם כל אנשים — הכירו את הפילוסופיה, הצוות והדרך שלנו.',
  });

  return (
    <div>
      <section className="relative">
        <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
          <SmartImage
            src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=2000&q=80"
            seed="about-hero"
            alt="בניין מגורים עירוני מודרני"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/10" />
          <div className="relative z-10 h-full container-px max-w-container mx-auto flex flex-col justify-end pb-14">
            <p className="label-eyebrow text-ivory/80 mb-4">אודות Urban Estate</p>
            <h1 className="text-display-lg font-serif text-ivory max-w-2xl">נדל״ן הוא אנשים, לא רק נכסים.</h1>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-px max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label-eyebrow mb-3">הסיפור שלנו</p>
            <h2 className="text-display-md font-serif mb-5">התחלנו מתוך תסכול אמיתי מהשוק</h2>
            <div className="space-y-4 text-[15.5px] leading-[1.8] text-charcoal-soft">
              <p>
                Urban Estate נוסדה מתוך אמונה פשוטה: תהליך של קנייה או מכירת נכס אמור להיות שקוף, מקצועי ואישי —
                ולא כזה שמרגיש כמו מירוץ אחר עמלות. ראינו יותר מדי לקוחות שמרגישים אבודים בתוך תהליך שאמור להיות
                אחד הצעדים המשמעותיים בחייהם.
              </p>
              <p>
                לכן בנינו חברה בוטיק שמתמקדת באיכות ולא בכמות. אנחנו לא מנסים למכור לכם כל נכס שיש בשוק — אנחנו
                בוררים, בודקים ומביאים רק את מה שבאמת רלוונטי, לצד ליווי אישי וצמוד לאורך כל הדרך.
              </p>
              <p>
                היום הצוות שלנו פועל בשש ערים במרכז ובשרון, ומלווה משפחות, זוגות צעירים ומשקיעים — כל אחד עם
                הצרכים הייחודיים שלו.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary mt-7">
              דברו איתנו
            </Link>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-md overflow-hidden mt-8">
              <SmartImage
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
                seed="about-1"
                orientation="tall"
                alt="חלל מגורים מעוצב"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-md overflow-hidden">
              <SmartImage
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80"
                seed="about-2"
                orientation="tall"
                alt="מטבח מודרני פתוח"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-stone-100/60">
        <div className="container-px max-w-container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {companyStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="text-center sm:text-start">
                <p className="font-serif text-4xl sm:text-5xl text-charcoal">{s.value}</p>
                <p className="mt-2 text-[13.5px] text-charcoal-muted leading-snug">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-px max-w-container mx-auto">
          <SectionHeading eyebrow="הערכים שלנו" title="איך אנחנו עובדים" align="center" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="text-center sm:text-start">
                <h3 className="text-[16px] font-semibold text-charcoal">{v.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal text-ivory">
        <div className="container-px max-w-container mx-auto">
          <SectionHeading eyebrow="התהליך" title="איך זה עובד אצלנו" dark />
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

      <section className="py-16 sm:py-24">
        <div className="container-px max-w-container mx-auto">
          <SectionHeading eyebrow="הצוות" title="האנשים מאחורי Urban Estate" align="center" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <Reveal key={agent.id} delay={i * 90} className="h-full">
                <AgentCard agent={agent} layout="col" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
