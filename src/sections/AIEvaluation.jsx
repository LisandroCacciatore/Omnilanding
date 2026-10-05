import SectionHeader from '../components/SectionHeader.jsx';
import { aiDimensions, evaluationFramework } from '../data/aiDimensions.js';

export default function AIEvaluation() {
  return (
    <section
      id="ai-evaluation"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          label="AI EVALUATION"
          title="The same quality mindset applies to AI."
          description="AI systems introduce a different kind of uncertainty. The question is no longer only whether a feature works, but whether a system behaves reliably across instructions, contexts, edge cases and unexpected conditions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {aiDimensions.map((d) => (
            <div
              key={d.num}
              className={`p-5 rounded-lg bg-surface-container border border-outline-variant flex flex-col gap-2 card-lift ${
                d.span === 2 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between font-mono text-label-sm text-primary">
                <span>{d.num}</span>
                <span className="material-symbols-outlined text-[18px]">
                  {d.icon}
                </span>
              </div>
              <h3 className="text-base font-semibold">{d.title}</h3>
              <p className="text-sm text-on-surface-variant">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-surface-container-low border border-outline-variant p-6 lg:p-8 flex flex-col gap-6 shadow-xl card-lift">
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                analytics
              </span>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
                AGENT EVALUATION FRAMEWORK
              </h3>
            </div>
            <span className="font-mono text-xs text-secondary">
              HARNESS METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FrameworkColumn
              title="What I define:"
              titleColor="text-primary"
              bulletColor="text-primary"
              items={evaluationFramework.define}
            />
            <FrameworkColumn
              title="What I observe:"
              titleColor="text-secondary"
              bulletColor="text-secondary"
              items={evaluationFramework.observe}
            />
            <FrameworkColumn
              title="What I compare:"
              titleColor="text-status-green"
              bulletColor="text-status-green"
              items={evaluationFramework.compare}
            />
          </div>

          <div className="pt-3 border-t border-outline-variant flex items-center justify-between text-xs font-mono text-outline flex-wrap gap-2">
            <span>Illustrative evaluation framework. Not production data.</span>
            <span className="text-secondary font-mono">
              STATUS: REPRODUCIBLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkColumn({ title, titleColor, bulletColor, items }) {
  return (
    <div className="p-4 rounded bg-surface-container border border-outline-variant flex flex-col gap-3">
      <div className={`font-mono text-xs font-semibold uppercase ${titleColor}`}>
        {title}
      </div>
      <div className="flex flex-col gap-2 font-mono text-sm">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className={bulletColor}>▸</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
