import type { Agent } from '../data/types';
import SmartImage from './ui/SmartImage';
import { PhoneIcon, WhatsappIcon, MailIcon } from './icons';

export default function AgentCard({ agent, layout = 'row' }: { agent: Agent; layout?: 'row' | 'col' }) {
  const isRow = layout === 'row';
  return (
    <div className={`card-surface overflow-hidden flex flex-col h-full ${isRow ? 'sm:flex-row' : ''}`}>
      <div className={isRow ? 'sm:w-[42%] aspect-[4/5] sm:aspect-auto' : 'aspect-[4/3]'}>
        <SmartImage
          src={agent.photo}
          seed={agent.id}
          alt={agent.name}
          orientation="tall"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 sm:p-7 flex flex-col grow">
        <p className="label-eyebrow mb-1">{agent.role}</p>
        <h3 className="font-serif text-2xl text-charcoal">{agent.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft italic">״{agent.quote}״</p>
        <p className="mt-4 text-[14px] leading-relaxed text-charcoal-muted grow">{agent.bio}</p>

        <dl className={`mt-5 grid gap-3 text-[13px] ${isRow ? 'grid-cols-2' : 'grid-cols-1'}`}>
          <div>
            <dt className="text-charcoal-muted">ניסיון</dt>
            <dd className="font-medium text-charcoal">{agent.experienceYears}+ שנים</dd>
          </div>
          <div>
            <dt className="text-charcoal-muted">התמחות</dt>
            <dd className="font-medium text-charcoal">{agent.specialty}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <a href={`tel:${agent.phone}`} className="btn-secondary py-2.5 px-4 text-[13.5px]">
            <PhoneIcon width={15} height={15} />
            {agent.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${agent.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-2.5 px-4 text-[13.5px]"
          >
            <WhatsappIcon width={15} height={15} />
            WhatsApp
          </a>
          <a href={`mailto:${agent.email}`} aria-label="שליחת אימייל" className="btn-secondary py-2.5 px-3">
            <MailIcon width={15} height={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
