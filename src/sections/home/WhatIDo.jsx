import { pillars } from '../../data/home.js';
import DomainCard from '../../components/DomainCard.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function WhatIDo() {
  return (
    <section className="mt-space-xl flex flex-col gap-space-lg" id="what-i-do">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
        <div>
          <SectionLabel className="block mb-space-xs">{pillars.label}</SectionLabel>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            {pillars.title}
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          {pillars.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
        {pillars.cards.map((c) => (
          <DomainCard key={c.id} data={c} />
        ))}
      </div>
    </section>
  );
}