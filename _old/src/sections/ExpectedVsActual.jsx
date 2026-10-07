import SectionHeader from '../components/SectionHeader.jsx';
import { expectedFlow, observedFlow } from '../data/site.js';

const observedStyle = {
  pass: 'text-on-surface',
  warn: 'bg-status-amber/10 border border-status-amber/40 text-status-amber font-medium',
  fail: 'bg-status-red/10 border border-status-red/40 text-status-red font-medium',
};

export default function ExpectedVsActual() {
  return (
    <section
      id="expected-vs-actual"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="DIAGNOSTIC ARCHITECTURE"
          title="Expected behavior is not observed behavior."
        />

        <div className="rounded-lg bg-surface-container-low border border-outline-variant overflow-hidden shadow-2xl card-lift">
          <div className="px-6 py-3 bg-surface-container flex items-center justify-between border-b border-outline-variant">
            <div className="flex items-center gap-2 font-mono text-xs text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
              <span>TRACE PARADIGM: DIVERGENCE ANALYSIS</span>
            </div>
            <span className="font-mono text-[11px] text-outline">
              DIFF ENGINE v2.4
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant">
            {/* LEFT — EXPECTED */}
            <div className="p-6 lg:p-8 flex flex-col gap-4 bg-surface-container/20">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
                <span className="font-mono text-xs font-semibold text-status-green uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  LEFT — EXPECTED
                </span>
                <span className="font-mono text-[11px] text-status-green bg-status-green/10 px-2 py-0.5 rounded border border-status-green/20">
                  SPECIFICATION
                </span>
              </div>
              <div className="flex flex-col gap-3 font-mono text-sm">
                {expectedFlow.map((line, i) => {
                  const isLast = i === expectedFlow.length - 1;
                  return (
                    <div
                      key={line}
                      className={`p-3 rounded bg-surface-container border border-outline-variant flex items-center justify-between ${
                        isLast
                          ? 'text-status-green font-medium'
                          : 'text-on-surface'
                      }`}
                    >
                      <span>{line}</span>
                      <span
                        className={
                          isLast
                            ? 'text-status-green text-xs'
                            : 'text-secondary text-xs'
                        }
                      >
                        {isLast ? '✓' : '→'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — OBSERVED */}
            <div className="p-6 lg:p-8 flex flex-col gap-4 bg-surface-container-low">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
                <span className="font-mono text-xs font-semibold text-status-amber uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    troubleshoot
                  </span>
                  RIGHT — OBSERVED
                </span>
                <span className="font-mono text-[11px] text-status-amber bg-status-amber/10 px-2 py-0.5 rounded border border-status-amber/30">
                  DEVIATION DETECTED
                </span>
              </div>
              <div className="flex flex-col gap-3 font-mono text-sm">
                {observedFlow.map((item, i) => {
                  const isLast = i === observedFlow.length - 1;
                  const cls = observedStyle[item.status];
                  return (
                    <div
                      key={`${item.text}-${i}`}
                      className={`p-3 rounded flex items-center justify-between ${
                        item.status === 'pass'
                          ? 'bg-surface-container border border-outline-variant text-on-surface'
                          : cls
                      }`}
                    >
                      <span
                        className={
                          item.status === 'warn'
                            ? 'animate-pulse-amber inline-block w-full'
                            : item.status === 'fail'
                            ? 'animate-pulse-red inline-block w-full'
                            : ''
                        }
                      >
                        {item.text}
                      </span>
                      <span className="text-xs font-bold">
                        {item.status === 'pass'
                          ? '→'
                          : item.status === 'warn'
                          ? '→ ⚠'
                          : 'FINDING'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-4 bg-surface-container border-t border-outline-variant flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm text-secondary italic">
              This gap is where quality work happens.
            </p>
            <span className="font-mono text-xs text-primary font-medium tracking-wide">
              [ GROUND TRUTH DISCOVERY ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
