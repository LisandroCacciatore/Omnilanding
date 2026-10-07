import SectionHeader from '../components/SectionHeader.jsx';
import { qualityMindset } from '../data/site.js';

export default function QualityMindset() {
  return (
    <section
      id="quality-mindset"
      className="w-full border-b border-outline-variant py-16 lg:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          label="QUALITY MINDSET"
          title="Quality starts before the test case."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityMindset.map((card) => (
            <div
              key={card.num}
              className="flex flex-col rounded-lg bg-surface-container border border-outline-variant p-6 card-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xl text-outline font-bold">
                  {card.num}
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
