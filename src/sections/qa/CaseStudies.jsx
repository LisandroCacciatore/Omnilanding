import { qaCaseStudies } from '../../data/qa.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function CaseStudies() {
  const f = qaCaseStudies.featured;

  return (
    <section className="w-full py-space-xl scroll-mt-20" id="case-studies">
      <div className="max-w-[1280px] mx-auto px-gutter flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <SectionLabel accent="secondary">{qaCaseStudies.label}</SectionLabel>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {qaCaseStudies.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {qaCaseStudies.intro}
          </p>
        </div>

        {/* Featured */}
        <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl shadow-md flex flex-col lg:flex-row gap-space-xl items-stretch">
          <div className="lg:w-1/2 flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-label-technical text-label-technical uppercase font-semibold">
                  {f.badge}
                </span>
                <span className="font-label-technical text-label-technical text-on-surface-variant">
                  {f.ref}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {f.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {f.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-space-md pt-space-xs">
              {f.specs.map((s) => (
                <div key={s.label} className="bg-surface-container rounded-lg p-space-md">
                  <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                    {s.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold block">
                    {s.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                    {s.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-surface-container rounded-xl p-space-md lg:p-space-lg flex flex-col justify-between">
            <div className="flex items-center justify-between pb-space-sm gap-space-sm flex-wrap">
              <span className="font-label-technical text-label-technical text-on-surface font-semibold uppercase">
                {f.pipeline.title}
              </span>
              <span className="font-label-technical text-label-technical text-primary">
                {f.pipeline.status.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-col gap-space-sm py-space-sm">
              {f.pipeline.steps.map((step, idx) => (
                <div key={step.n}>
                  <div className="bg-surface-container-high rounded-lg p-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-6 h-6 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-label-code-sm text-label-code-sm font-bold">
                        {step.n}
                      </span>
                      <div>
                        <span className="font-body-sm text-body-sm text-on-surface font-medium block">
                          {step.title}
                        </span>
                        <span className="font-label-technical text-label-technical text-on-surface-variant">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                    <Icon name={step.icon} className="text-body-md text-secondary" />
                  </div>
                  {idx < f.pipeline.steps.length - 1 && (
                    <div className="flex justify-center -my-1 text-outline">
                      <Icon name="south" className="text-body-md" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-space-xs pt-space-xs text-center font-label-technical text-label-technical">
              {f.pipeline.footer.map((badge) => (
                <div
                  key={badge.label}
                  className="bg-surface-container-low rounded py-1 px-2 text-on-surface-variant"
                >
                  {badge.label}{' '}
                  <span className="text-on-surface font-semibold">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {qaCaseStudies.mosaic.map((c) => {
            const accentText =
              c.accent === 'tertiary'
                ? 'text-tertiary'
                : c.accent === 'secondary'
                ? 'text-secondary'
                : 'text-primary';
            return (
              <div
                key={c.id}
                className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className={`font-label-technical text-label-technical ${accentText}`}>
                      {c.ref.toUpperCase()}
                    </span>
                    <Icon name={c.icon} className={`text-body-md ${accentText}`} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {c.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="bg-surface-container rounded-lg p-space-md mt-space-md">
                  <div className="flex items-baseline justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {c.metric.label}
                    </span>
                    <span className={`font-headline-sm text-headline-sm font-bold ${accentText}`}>
                      {c.metric.value}
                    </span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant block mt-1">
                    {c.footnote}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}