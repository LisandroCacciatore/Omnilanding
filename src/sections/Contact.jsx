import { Link } from 'react-router-dom';
import { contact } from '../data/contact.js';
import { site } from '../data/site.js';

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative w-full py-space-2xl bg-surface-container-low"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(124, 87, 48, 0.06), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest mb-space-2xs">
              {contact.eyebrow}
            </span>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-normal tracking-tight mb-space-sm font-serif">
              {contact.title} <br />
              <span className="italic text-secondary">{contact.titleAccent}</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px] mb-space-xl leading-relaxed">
              {contact.description}
            </p>
            <div className="flex flex-wrap items-center gap-space-sm w-full sm:w-auto">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>{contact.ctaPrimary}</span>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded bg-surface-container-lowest text-primary font-body-sm text-body-sm font-medium hover:bg-surface-container transition-all border border-outline-variant/40 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  chat
                </span>
                <span>{contact.ctaSecondary}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 w-full bg-surface-container-lowest p-space-xl rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between mt-space-md lg:mt-0">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant/40">
                <span className="font-label-technical text-label-technical text-primary uppercase tracking-widest font-semibold">
                  Coordenadas
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface border border-secondary/30 text-secondary font-label-status text-label-status uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>{contact.availability}</span>
                </div>
              </div>
              <ul className="space-y-space-md font-mono text-code-inline text-on-surface">
                {contact.coordinates.map((c) => (
                  <li key={c.label} className="flex items-center justify-between gap-4">
                    <span className="text-on-surface-variant">{c.label}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="text-primary font-medium hover:text-secondary transition-colors truncate text-right"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-primary text-right">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-lg pt-space-sm bg-surface-container-low p-space-sm rounded font-label-technical text-label-technical text-on-surface-variant flex items-center justify-between border border-outline-variant/30">
              <span>Tiempo medio de respuesta</span>
              <span className="text-primary font-semibold font-mono">
                {contact.responseTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}