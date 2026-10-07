import { sportBuilding } from '../../data/sport.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function Building() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
        <div className="max-w-2xl">
          <SectionLabel className="block mb-space-xs">{sportBuilding.label}</SectionLabel>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            {sportBuilding.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            {sportBuilding.intro}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {sportBuilding.modules.map((m) => {
          const accentText =
            m.accent === 'tertiary'
              ? 'text-tertiary'
              : m.accent === 'secondary'
              ? 'text-secondary'
              : 'text-primary';
          return (
            <div
              key={m.title}
              className="bg-surface-container rounded-xl p-space-lg shadow-md hover:bg-surface-container-high transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center ${accentText} mb-space-md`}
              >
                <Icon name={m.icon} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                {m.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {m.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}