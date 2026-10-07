import { sportExperience } from '../../data/sport.js';
import { site } from '../../data/site.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';
import ResponsiveImage from '../../components/ResponsiveImage.jsx';

export default function SportsExperience() {
  const e = sportExperience;

  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container-high aspect-[0.92]">
            <ResponsiveImage
              src={site.portrait}
              alt={site.name}
              className="w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-6 right-6 bg-surface-container-highest p-space-md rounded-xl shadow-xl max-w-xs hidden sm:block">
            <span className="font-label-technical text-label-technical text-primary uppercase block">
              {e.leadershipBadge.label}
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold block mt-1">
              {e.leadershipBadge.value}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {e.leadershipBadge.sub}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-space-md mt-space-xl lg:mt-0">
          <SectionLabel className="mb-space-xs">{e.label}</SectionLabel>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mb-space-md">
            {e.title}
          </h2>

          <div className="flex flex-wrap gap-space-xs mb-space-md">
            {e.disciplines.map((d) => (
              <span
                key={d}
                className="bg-surface-container px-space-md py-space-xs rounded-xl font-body-sm text-body-sm text-on-surface"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="p-space-lg bg-surface-container rounded-xl shadow-md mb-space-md">
            <div className="flex justify-between items-baseline mb-space-sm flex-wrap gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {e.role.title}
              </h3>
              <span className="font-label-technical text-label-technical text-secondary bg-surface-container-high px-space-xs py-0.5 rounded">
                {e.role.period}
              </span>
            </div>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              {e.role.bullets.map((b) => (
                <li key={b} className="flex items-center gap-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-space-md bg-surface-container-low rounded-lg">
            <span className="font-label-technical text-label-technical text-tertiary uppercase block mb-space-xs">
              {e.philosophy.label}
            </span>
            <p className="font-body-md text-body-md text-on-surface font-medium italic">
              “{e.philosophy.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}