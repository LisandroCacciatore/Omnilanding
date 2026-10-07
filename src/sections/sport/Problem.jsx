import { sportProblem } from '../../data/sport.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function Problem() {
  const c = sportProblem.copy;

  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-space-lg bg-surface-container rounded-xl shadow-lg">
              <SectionLabel className="block mb-space-xs">
                {sportProblem.label}
              </SectionLabel>
              <div className="space-y-space-md">
                {sportProblem.visual.map((v) => (
                  <div
                    key={v.title}
                    className="flex items-start gap-space-sm p-space-sm bg-surface-container-high rounded-lg"
                  >
                    <Icon name={v.icon} className="text-secondary text-lg mt-0.5" />
                    <div>
                      <span className="font-headline-sm text-body-sm text-on-surface font-medium block">
                        {v.title}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-space-lg">
            <SectionLabel accent="secondary" className="block mb-space-xs">
              {c.eyebrow}
            </SectionLabel>
            <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight mb-space-md">
              {sportProblem.title}
            </h2>

            <div className="space-y-space-md font-body-lg text-body-lg text-on-surface-variant">
              {c.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    p.emphasis
                      ? p.accent === 'secondary'
                        ? 'text-secondary font-medium'
                        : 'text-on-surface font-medium'
                      : ''
                  }
                >
                  {p.text}
                </p>
              ))}
            </div>

            <div className="mt-space-lg pt-space-md flex items-center gap-space-md">
              <div className="w-12 h-1 bg-primary-container rounded-full" />
              <span className="font-label-code-md text-label-code-md text-on-surface-variant">
                {c.footer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}