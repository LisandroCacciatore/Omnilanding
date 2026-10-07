import { sportProjects } from '../../data/sport.js';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function Projects() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl" id="projects">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="mb-space-xl">
          <SectionLabel className="block mb-space-xs">{sportProjects.label}</SectionLabel>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            {sportProjects.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            {sportProjects.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {sportProjects.items.map((p) => {
            const accentText =
              p.accent === 'tertiary'
                ? 'text-tertiary'
                : p.accent === 'secondary'
                ? 'text-secondary'
                : 'text-primary';
            const accentBg =
              p.accent === 'tertiary'
                ? 'bg-tertiary-container/30'
                : p.accent === 'secondary'
                ? 'bg-secondary-container/40'
                : 'bg-primary-container/20';

            return (
              <div
                key={p.id}
                className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md gap-space-sm flex-wrap">
                    <span
                      className={`font-label-technical text-label-technical ${accentText} ${accentBg} px-space-xs py-0.5 rounded`}
                    >
                      {p.tag}
                    </span>
                    <span className="font-label-technical text-label-technical text-on-surface-variant">
                      {p.ref}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm">
                    {p.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    {p.description}
                  </p>
                </div>

                <div className="pt-space-md mt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg">
                  {p.meta.map((m) => (
                    <div
                      key={m.label}
                      className="flex justify-between text-body-sm font-body-sm mb-space-xs last:mb-0 gap-space-sm"
                    >
                      <span className="text-on-surface">{m.label}</span>
                      <span className="font-label-technical text-label-technical text-secondary text-right">
                        {m.value}
                      </span>
                    </div>
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