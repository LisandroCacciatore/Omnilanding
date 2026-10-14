import { impactStats } from '../data/site.js';

export default function ImpactStrip() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/40">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/40">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 md:py-14 flex flex-col gap-2 ${
                i === 0 ? 'md:pr-10' : i === 1 ? 'md:px-10' : 'md:pl-10'
              }`}
            >
              <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="font-headline-lg text-headline-lg text-primary font-serif leading-none">
                {stat.value}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}