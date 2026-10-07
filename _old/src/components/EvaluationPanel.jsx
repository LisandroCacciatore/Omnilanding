import { useEffect, useState } from 'react';
import { heroPipeline, heroExpected, heroObserved } from '../data/site.js';

const statusStyle = {
  pass: 'text-status-green',
  warn: 'text-status-amber bg-status-amber/10 px-1 py-0.5 rounded border border-status-amber/30',
  fail: 'text-status-red bg-status-red/10 px-1 py-0.5 rounded border border-status-red/30',
};

const symbolByStatus = { pass: '✓', warn: '⚠', fail: '✕' };

export default function EvaluationPanel() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % heroPipeline.length);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-lg bg-surface-container border border-outline-variant p-5 shadow-2xl flex flex-col gap-4 card-lift">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">
            terminal
          </span>
          <span className="font-mono text-xs uppercase font-semibold tracking-wider">
            SYSTEM EVALUATION PANEL
          </span>
        </div>
        <span className="font-mono text-[11px] text-status-green bg-status-green/10 px-2 py-0.5 rounded border border-status-green/30 font-medium">
          LIVE PROTOCOL
        </span>
      </div>

      <div className="bg-surface-container-low p-3 rounded border border-outline-variant font-mono text-[10px] sm:text-[11px] text-on-surface-variant flex flex-wrap items-center justify-between gap-1 leading-none select-none">
        {heroPipeline.map((label, i) => {
          const isActive = i === step;
          const isEvaluation = label === 'EVALUATION';
          const isFeedback = label === 'FEEDBACK';
          return (
            <span key={label} className="flex items-center gap-1">
              <span
                className={`transition-all duration-300 px-1 py-0.5 rounded ${
                  isActive
                    ? isEvaluation
                      ? 'text-primary font-semibold bg-primary/10 border border-primary/40'
                      : isFeedback
                      ? 'text-status-green font-semibold'
                      : 'text-on-surface font-semibold'
                    : 'text-secondary'
                }`}
              >
                {label}
              </span>
              {i < heroPipeline.length - 1 && (
                <span className="text-outline inline-block animate-flow-arrow">
                  →
                </span>
              )}
            </span>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* EXPECTED */}
        <div className="rounded bg-surface-container-low p-3.5 border border-outline-variant flex flex-col gap-2.5">
          <div className="font-mono text-xs font-semibold text-status-green uppercase tracking-wider pb-1.5 border-b border-outline-variant flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">
                fact_check
              </span>
              EXPECTED
            </span>
            <span className="text-[10px] px-1 rounded bg-status-green/10">
              TARGET
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            {heroExpected.map((line) => (
              <div key={line} className="flex items-center gap-2">
                <span className="text-status-green font-bold">✓</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OBSERVED */}
        <div className="rounded bg-surface-container-low p-3.5 border border-outline-variant flex flex-col gap-2.5">
          <div className="font-mono text-xs font-semibold text-status-amber uppercase tracking-wider pb-1.5 border-b border-outline-variant flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">
                biotech
              </span>
              OBSERVED
            </span>
            <span className="text-[10px] px-1 rounded bg-status-amber/10">
              TELEMETRY
            </span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs">
            {heroObserved.map((item, i) => (
              <div
                key={`${item.text}-${i}`}
                className={`flex items-center gap-2 ${statusStyle[item.status]}`}
              >
                <span className="font-bold">{symbolByStatus[item.status]}</span>
                <span
                  className={
                    item.status === 'pass' ? 'text-on-surface' : 'font-medium'
                  }
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-outline-variant font-mono text-[12px] text-secondary flex items-center justify-between flex-wrap gap-2">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>4 checks · 1 deviation · 1 actionable finding</span>
        </span>
        <span className="text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase font-mono font-medium">
          STATUS: LOGGED
        </span>
      </div>
    </div>
  );
}
