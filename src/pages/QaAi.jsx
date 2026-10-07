import { qaHero, qaProblem, qaServices, qaCaseStudies, qaProcess, qaFaq, qaFinalCta } from '../data/qa.js';
import CTAButton from '../components/CTAButton.jsx';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function QaAi() {
  useDocumentMeta({
    title: 'Calidad y Evaluación de IA — Lisandro Cacciatore',
    description: 'Evaluación de agentes de IA, validación de flujos con LLMs, testing de APIs, calidad de datos y testing de Salesforce.',
    image: '/img/og/og-qa.png',
    path: '/qa-ai',
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-gutter pt-space-xl pb-space-lg w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-lg border border-outline-variant/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary">
                {qaHero.badge}
              </span>
            </span>

            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface tracking-tight">
              {qaHero.headline}
            </h1>

            <p className="font-headline-sm text-headline-sm text-secondary font-medium tracking-tight max-w-2xl">
              {qaHero.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <CTAButton
                href={qaHero.primaryCta.href}
                label={qaHero.primaryCta.label}
                icon={qaHero.primaryCta.icon}
              />
              <CTAButton
                href={qaHero.secondaryCta.href}
                label={qaHero.secondaryCta.label}
                icon={qaHero.secondaryCta.icon}
                accent="ghost"
              />
            </div>

            <div className="flex flex-wrap gap-space-lg mt-space-xl pt-space-md bg-surface-container-lowest/60 p-space-md rounded-xl">
              {qaHero.highlights.map((h, i) => (
                <div key={h.label} className="flex items-center gap-space-lg">
                  <div className="flex flex-col">
                    <span className="font-label-code-md text-label-code-md font-semibold text-primary">
                      {h.label}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {h.sub}
                    </span>
                  </div>
                  {i < qaHero.highlights.length - 1 && (
                    <div className="h-8 w-px bg-surface-variant" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full mt-space-lg lg:mt-0">
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-sm gap-space-sm flex-wrap">
                <div className="flex items-center gap-space-xs">
                  <Icon name="verified_user" className="text-primary text-headline-sm" />
                  <span className="font-label-code-md text-label-code-md text-on-surface tracking-wide uppercase font-semibold">
                    Resumen rápido
                  </span>
                </div>
                <span className="font-label-technical text-label-technical px-space-xs py-0.5 rounded bg-surface-container-highest text-tertiary">
                  Disponible
                </span>
              </div>

              {qaHero.highlights.map((m) => (
                <div
                  key={m.label}
                  className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs"
                >
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    {m.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                    {m.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="w-full bg-surface-container-low py-space-xl" id="problem">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <SectionLabel accent="secondary">{qaProblem.label}</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              {qaProblem.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-space-xl">
            {qaProblem.items.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-sm"
              >
                <div className="flex flex-col gap-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-space-xl" id="services">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <SectionLabel accent="secondary">{qaServices.label}</SectionLabel>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {qaServices.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {qaServices.offers.map((offer) => (
              <div
                key={offer.title}
                className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-sm"
              >
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-label-technical text-label-technical uppercase font-semibold">
                      {offer.tag}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {offer.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {offer.description}
                  </p>
                </div>
                <div className="pt-space-lg">
                  <ul className="flex flex-col gap-space-xs font-label-technical text-label-technical text-on-surface-variant">
                    {offer.meta.map((m) => (
                      <li key={m} className="flex items-center gap-space-xs">
                        <Icon name="check_circle" className="text-base text-primary" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    href={offer.cta.href}
                    label={offer.cta.label}
                    icon="arrow_forward"
                    accent={offer.tag === 'Gratis' ? 'primary' : offer.tag === 'A medida' ? 'secondary' : 'ghost'}
                    className="mt-space-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-space-xl" id="case-studies">
        <div className="max-w-[1280px] mx-auto px-gutter flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <SectionLabel accent="secondary">{qaCaseStudies.label}</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              {qaCaseStudies.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {qaCaseStudies.items.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md"
              >
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-technical text-label-technical text-primary uppercase">
                    {item.tag}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-space-md flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-surface-container-low rounded border border-outline-variant/20 font-label-technical text-label-technical text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-surface-container-low py-space-xl" id="process">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <SectionLabel accent="secondary">{qaProcess.label}</SectionLabel>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {qaProcess.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {qaProcess.steps.map((step) => (
              <div
                key={step.title}
                className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between"
              >
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-technical text-label-technical text-primary">
                    {step.meta}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-space-xl">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <SectionLabel accent="secondary">{qaFaq.label}</SectionLabel>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {qaFaq.title}
              </h2>
            </div>
          </div>

          <div className="space-y-space-md">
            {qaFaq.items.map((item) => (
              <div
                key={item.question}
                className="bg-surface-container rounded-xl p-space-lg border border-outline-variant/30"
              >
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  {item.question}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <div className="inline-flex items-center gap-space-xs mb-space-sm bg-surface-container px-space-md py-space-xs rounded-xl">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-code-sm text-label-code-sm text-secondary uppercase tracking-wider">
              Listo para empezar
            </span>
          </div>
          <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight mb-space-sm">
            {qaFinalCta.headline}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
            {qaFinalCta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <CTAButton
              href={qaFinalCta.cta.href}
              label={qaFinalCta.cta.label}
              icon="arrow_forward"
            />
          </div>

          <p className="font-label-technical text-label-technical text-on-surface-variant pt-space-lg flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
            {qaFinalCta.email}
          </p>
        </div>
      </section>
    </div>
  );
}