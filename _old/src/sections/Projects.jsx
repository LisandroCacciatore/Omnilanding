import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="PROJECTS // CASE STUDIES"
          title="Featured Engineering Implementations"
        />

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg bg-surface-container border border-outline-variant p-6 lg:p-8 flex flex-col gap-6 shadow-xl card-lift"
            >
              <ProjectHeader project={project} />
              <p className="text-on-surface-variant max-w-4xl leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {project.id === 'hermes' && <HermesContent project={project} />}
              {project.id === 'sports' && <SportsContent project={project} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Header con CTA (link o disabled) ---------- */

function ProjectHeader({ project }) {
  const { cta } = project;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs text-primary font-semibold uppercase">
            {project.label}
          </span>
          <span className="text-outline">·</span>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-secondary border border-outline-variant">
            {project.tag}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
      </div>

      {cta.type === 'disabled' ? (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high border border-outline-variant text-secondary font-mono text-xs font-semibold self-start sm:self-auto">
          <span>{cta.label}</span>
          <span className="material-symbols-outlined text-[16px]">
            {cta.icon}
          </span>
        </span>
      ) : (
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high border border-outline-variant text-on-surface hover:border-primary font-mono text-xs font-semibold transition-colors self-start sm:self-auto"
        >
          <span>{cta.label}</span>
          <span className="material-symbols-outlined text-[16px]">
            {cta.icon}
          </span>
        </a>
      )}
    </div>
  );
}

/* ---------- HERMES content ---------- */

function HermesContent({ project }) {
  const emphasis = project.pipelineEmphasis || {};
  return (
    <>
      <div className="bg-surface-container-low p-4 rounded border border-outline-variant font-mono text-xs text-secondary">
        <div className="hidden sm:flex items-center justify-between gap-2 overflow-x-auto py-1">
          {project.pipeline.map((step, i) => {
            const style = emphasis[step];
            const dotColor =
              style === 'primary'
                ? 'bg-primary animate-pulse'
                : style === 'green'
                ? 'bg-status-green'
                : 'bg-primary';
            const textColor =
              style === 'primary'
                ? 'text-primary font-semibold'
                : style === 'green'
                ? 'text-status-green font-semibold'
                : '';
            return (
              <span key={step} className="flex items-center gap-1.5 shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                <span className={textColor}>{step}</span>
                {i < project.pipeline.length - 1 && (
                  <span className="text-outline inline-block animate-flow-arrow ml-1">
                    →
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:hidden text-[11px]">
          {project.pipeline.map((step, i) => {
            const isAgent = step === 'AGENT';
            const isEval = step === 'EVALUATION';
            return (
              <div
                key={step}
                className={`flex items-center gap-2 p-2 bg-surface-container rounded border border-outline-variant ${
                  isAgent
                    ? 'text-primary font-semibold'
                    : isEval
                    ? 'col-span-2 justify-center text-status-green font-semibold border-status-green/40'
                    : ''
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isAgent
                      ? 'bg-primary'
                      : isEval
                      ? 'bg-status-green'
                      : 'bg-primary'
                  }`}
                />
                <span>
                  {i + 1}. {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.breakdown.map((b) => (
          <div
            key={b.label}
            className="p-4 rounded bg-surface-container-low border border-outline-variant flex flex-col gap-1.5 card-lift"
          >
            <div
              className={`font-mono text-xs font-semibold uppercase flex items-center gap-1.5 ${
                b.dotColor === 'primary'
                  ? 'text-primary'
                  : b.dotColor === 'secondary'
                  ? 'text-secondary'
                  : 'text-status-green'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  b.dotColor === 'primary'
                    ? 'bg-primary'
                    : b.dotColor === 'secondary'
                    ? 'bg-secondary'
                    : 'bg-status-green'
                }`}
              />
              <span>{b.label}</span>
            </div>
            <p className="text-sm text-on-surface-variant">{b.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- Sports Analytics content ---------- */

function SportsContent({ project }) {
  return (
    <div className="bg-surface-container-low p-5 rounded border border-outline-variant flex flex-col gap-4">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">
            account_tree
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider">
            SYSTEM ARCHITECTURE
          </span>
        </div>
        <span className="font-mono text-[11px] text-secondary">
          REQUIREMENTS → DATA → DECISIONS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {project.methodology.map((step) => (
          <div
            key={step.num}
            className="p-3 bg-surface-container rounded border border-outline-variant flex flex-col gap-1.5"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  step.dotColor === 'green' ? 'bg-status-green' : 'bg-primary'
                }`}
              />
              <span
                className={`font-mono text-[11px] uppercase font-semibold ${
                  step.dotColor === 'green'
                    ? 'text-status-green'
                    : 'text-primary'
                }`}
              >
                {step.num} / {step.label}
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-outline-variant flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm text-secondary italic">
          From requirements to data to decisions.
        </span>
        <span className="font-mono text-[11px] text-secondary uppercase">
          METHODOLOGY
        </span>
      </div>
    </div>
  );
}
