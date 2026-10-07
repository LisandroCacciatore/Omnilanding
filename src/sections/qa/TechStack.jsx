import { qaTechStack } from '../../data/qa.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function TechStack() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <SectionLabel accent="secondary">{qaTechStack.label}</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              {qaTechStack.title}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            {qaTechStack.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {qaTechStack.categories.map((cat) => {
            const accentText =
              cat.accent === 'tertiary'
                ? 'text-tertiary'
                : cat.accent === 'secondary'
                ? 'text-secondary'
                : 'text-primary';
            return (
              <div
                key={cat.id}
                className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm"
              >
                <div className={`flex items-center gap-space-xs ${accentText} pb-space-xs`}>
                  <Icon name={cat.icon} className="text-headline-sm" />
                  <span className="font-headline-sm text-body-md font-semibold text-on-surface">
                    {cat.title}
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-space-sm py-1 bg-surface-container-high rounded text-on-surface font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}