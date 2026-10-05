import EvaluationPanel from '../components/EvaluationPanel.jsx';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low border border-outline-variant self-start shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] text-secondary tracking-wide uppercase font-semibold">
                SOFTWARE QUALITY / AI EVALUATION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18]">
              I test what systems{' '}
              <span className="text-primary underline decoration-primary/40 underline-offset-8">
                actually do
              </span>{' '}
              — not what they're supposed to do.
            </h1>

            <p className="text-lg text-primary/95 font-medium leading-relaxed">
              Senior QA Analyst focused on software quality, AI evaluation and
              reliable agentic systems.
            </p>

            <p className="text-on-surface-variant leading-relaxed max-w-2xl text-[14px] sm:text-[15px]">
              I work at the intersection of software quality, requirements, data,
              integrations and AI. My job is to turn expected behavior into
              measurable criteria, test real behavior, expose failure modes and
              create reliable feedback loops for improvement.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-primary text-on-primary-container font-mono text-xs font-semibold tracking-wide hover:bg-white transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  visibility
                </span>
                <span>View my work</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-surface-container border border-outline-variant text-on-surface font-mono text-xs font-medium hover:border-primary hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                <span>Let's connect</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col w-full">
            <EvaluationPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
