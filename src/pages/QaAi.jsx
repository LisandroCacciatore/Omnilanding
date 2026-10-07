import { qaHero, qaCrossLink } from '../data/qa.js';
import Services from '../sections/qa/Services.jsx';
import CaseStudies from '../sections/qa/CaseStudies.jsx';
import TechStack from '../sections/qa/TechStack.jsx';
import CTAButton from '../components/CTAButton.jsx';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function QaAi() {
  useDocumentMeta({
    title: 'AI Quality & Evaluation — Lisandro Cacciatore',
    description: 'AI agent evaluation, LLM workflow validation, API testing, data quality, and Salesforce testing.',
    image: '/img/og/og-qa.png',
    path: '/qa-ai',
  });

  return (
    <div className="flex flex-col w-full">
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

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {qaHero.lead}
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              {qaHero.ctas.map((cta) => (
                <CTAButton
                  key={cta.label}
                  href={cta.to}
                  label={cta.label}
                  icon={cta.icon}
                  accent={cta.accent === 'secondary' ? 'secondary' : 'primary'}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full mt-space-lg lg:mt-0">
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-sm gap-space-sm flex-wrap">
                <div className="flex items-center gap-space-xs">
                  <Icon name="verified_user" className="text-primary text-headline-sm" />
                  <span className="font-label-code-md text-label-code-md text-on-surface tracking-wide uppercase font-semibold">
                    {qaHero.panel.title}
                  </span>
                </div>
                <span className="font-label-technical text-label-technical px-space-xs py-0.5 rounded bg-surface-container-highest text-tertiary">
                  {qaHero.panel.status.toUpperCase()}
                </span>
              </div>

              {qaHero.panel.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs"
                >
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    {m.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                    {m.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {m.note}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-technical text-label-technical flex-wrap gap-space-xs">
                {qaHero.panel.footer.map((f, i) => (
                  <span key={f} className="flex items-center gap-1">
                    {i === 0 && (
                      <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
                    )}
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <CaseStudies />
      <TechStack />

      <section className="w-full py-space-xl">
        <div className="max-w-[1280px] mx-auto px-gutter flex flex-col gap-space-xl">
          <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <Icon name="monitoring" className="text-headline-sm" />
              </div>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface font-medium">
                {qaCrossLink.text}
              </p>
            </div>
            <CTAButton
              to={qaCrossLink.cta.to}
              label={qaCrossLink.cta.label}
              icon="arrow_forward"
              accent="ghost"
            />
          </div>

          <div className="bg-surface-container rounded-xl p-space-lg lg:p-space-xl shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col gap-space-sm max-w-2xl relative z-10">
              <SectionLabel accent="secondary">{qaCrossLink.contact.label}</SectionLabel>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {qaCrossLink.contact.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {qaCrossLink.contact.description}
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-space-xs relative z-10 w-full sm:w-auto">
              <CTAButton
                to={qaCrossLink.contact.cta.to}
                label={qaCrossLink.contact.cta.label}
                icon="arrow_forward"
              />
              <span className="font-label-technical text-label-technical text-on-surface-variant pt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                {qaCrossLink.contact.note}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}