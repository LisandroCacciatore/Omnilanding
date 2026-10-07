import { contact } from '../data/contact.js';
import { site } from '../data/site.js';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Contact() {
  useDocumentMeta({
    title: 'Contact — Lisandro Cacciatore',
    description: 'Get in touch for AI quality engagements, software testing consulting, or sports performance analytics.',
    image: '/img/og/og-home.png',
    path: '/contact',
  });

  return (
    <div className="max-w-[1280px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
      <section className="bg-surface-container rounded-xl p-space-lg md:p-space-xl shadow-xl border border-outline-variant/30 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-space-lg max-w-3xl">
          <SectionLabel>{contact.label}</SectionLabel>
          <h1 className="font-display text-display text-on-surface tracking-tight">
            {contact.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {contact.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
            {contact.channels.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-space-md bg-surface-container-low hover:bg-surface-container-high rounded-lg transition-colors border border-outline-variant/30"
              >
                <div
                  className={`flex items-center gap-1 ${
                    c.accent === 'secondary' ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  <Icon name={c.icon} className="text-base" />
                  <span className="font-label-technical text-label-technical uppercase">
                    {c.label}
                  </span>
                </div>
                <span className="font-label-code text-label-code text-on-surface mt-space-xs truncate">
                  {c.value}
                </span>
              </a>
            ))}
          </div>

          <p className="font-label-technical text-label-technical text-on-surface-variant pt-space-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
            {contact.note}
          </p>
        </div>
      </section>

      <section className="bg-surface-container rounded-xl p-space-lg shadow-xl border border-outline-variant/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <div className="flex flex-col gap-space-sm">
            <SectionLabel accent="secondary">Direct email</SectionLabel>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Prefer email? Reach out and I'll get back to you within one business day.
            </p>
            <a
              href="mailto:hello@lcacciatore.com"
              className="inline-flex items-center gap-space-xs font-headline-md text-headline-md text-primary hover:text-primary-fixed-dim transition-colors"
            >
              <Icon name="mail" className="text-base" />
              hello@lcacciatore.com
            </a>
          </div>

          <div className="flex flex-col gap-space-sm">
            <SectionLabel accent="secondary">Based in</SectionLabel>
            <p className="font-headline-md text-headline-md text-on-surface">
              {site.location}
            </p>
            <span className="font-label-code text-label-code text-on-surface-variant">
              {site.timezone}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}