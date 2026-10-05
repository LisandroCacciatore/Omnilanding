import SectionHeader from '../components/SectionHeader.jsx';
import { capabilities, enterpriseStack } from '../data/capabilities.js';

export default function SoftwareQuality() {
  return (
    <section
      id="software-quality"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          label="SOFTWARE QUALITY"
          title="Testing systems against reality."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-8">
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="p-4 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-3 card-lift"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-on-surface">
                {cap}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex items-center justify-between flex-wrap gap-4 card-lift">
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-secondary">
            <span className="material-symbols-outlined text-primary text-[20px]">
              hub
            </span>
            <span>{enterpriseStack.join(' · ')}</span>
          </div>
          <span className="font-mono text-[11px] text-outline uppercase tracking-wider">
            ENTERPRISE STACK
          </span>
        </div>
      </div>
    </section>
  );
}
