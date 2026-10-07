import { qaServices } from '../../data/qa.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function Services() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl scroll-mt-20" id="services">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
          <div className="flex flex-col gap-space-xs">
            <SectionLabel accent="secondary">{qaServices.label}</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              {qaServices.title}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            {qaServices.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {qaServices.items.map((s) => (
            <div
              key={s.id}
              className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-sm group"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <Icon name={s.icon} className="text-headline-sm" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-secondary">
                    {s.tag.toUpperCase()}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="pt-space-lg flex items-center gap-space-xs text-on-surface-variant font-label-technical text-label-technical">
                <Icon name="check_circle" className="text-base text-primary" />
                <span>{s.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}