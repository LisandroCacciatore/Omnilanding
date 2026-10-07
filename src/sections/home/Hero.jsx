import { hero } from '../../data/home.js';
import CTAButton from '../../components/CTAButton.jsx';

export default function Hero() {
  return (
    <section className="relative bg-surface-container rounded-lg p-space-lg md:p-space-xl overflow-hidden shadow-xl border border-outline-variant/30">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-space-lg">
        <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high text-primary font-label-technical text-label-technical uppercase tracking-wider border border-outline-variant/30 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {hero.badge}
        </span>

        <div className="flex flex-col gap-space-sm max-w-4xl">
          <h1 className="font-display text-display text-on-surface tracking-tight">
            {hero.headline}
          </h1>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            {hero.subheadline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-end pt-space-xs">
          <div className="md:col-span-8 flex flex-col gap-space-sm">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {hero.lead}
            </p>
            <div className="inline-flex items-center gap-space-sm pt-space-xs">
              <span className="w-1 h-5 bg-primary-container rounded-full" />
              <p className="font-headline-md text-headline-md text-on-surface-variant italic">
                “{hero.quote}”
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-lowest rounded p-space-md border border-outline-variant/30">
            <div className="grid grid-cols-2 gap-space-sm">
              {hero.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-label-technical text-label-technical text-outline">
                    {m.label}
                  </span>
                  <span
                    className={`font-label-metric text-label-metric ${
                      m.accent === 'secondary' ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-md">
          {hero.ctas.map((cta) => (
            <CTAButton
              key={cta.label}
              to={cta.to}
              label={cta.label}
              icon={cta.icon}
              accent={cta.accent === 'secondary' ? 'primary' : 'secondary'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}