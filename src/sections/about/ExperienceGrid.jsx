import { experience } from '../../data/about.js';
import ExperienceCard from '../../components/ExperienceCard.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function ExperienceGrid() {
  return (
    <section className="bg-surface-container rounded-xl p-space-lg shadow-xl flex flex-col gap-space-lg border border-outline-variant/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm gap-space-xs">
        <div>
          <SectionLabel accent="muted">// Chronology</SectionLabel>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Experience & Leadership Roles
          </h3>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-technical text-label-technical text-primary border border-outline-variant/30">
            QA // SYSTEMS
          </span>
          <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-technical text-label-technical text-secondary border border-outline-variant/30">
            ATHLETIC // PERFORMANCE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}