import SectionHeader from '../components/SectionHeader.jsx';
import { experience } from '../data/experience.js';
import useReveal from '../hooks/useReveal.js';

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          label="EXPERIENCE"
          title="Six+ years turning requirements into reliable software."
        />

        <div
          ref={ref}
          className="relative border-l border-outline-variant ml-3 lg:ml-4 flex flex-col gap-10"
        >
          {experience.map((job, i) => (
            <div
              key={`${job.title}-${i}`}
              className="timeline-item relative pl-6 lg:pl-8"
            >
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${job.dotColor}`}
              />
              {job.compact ? (
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-sm font-semibold">{job.title}</h3>
                  <span className="text-outline">|</span>
                  <span className="font-mono text-xs text-secondary">
                    {job.period}
                  </span>
                  <span className="text-outline">|</span>
                  <span className="font-mono text-xs text-outline">
                    {job.project}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold">{job.title}</h3>
                    <span className="text-outline">|</span>
                    <span
                      className={`font-mono text-xs font-medium ${job.periodColor}`}
                    >
                      {job.period}
                    </span>
                    <span className="text-outline">|</span>
                    <span className="font-mono text-xs text-secondary">
                      {job.project}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 text-sm text-on-surface-variant max-w-4xl list-disc list-inside">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
