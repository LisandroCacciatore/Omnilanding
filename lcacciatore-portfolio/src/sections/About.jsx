import { about } from '../data/about.js';

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="w-full py-space-2xl bg-surface border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              08 // Sobre mí
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight max-w-[820px]">
              {about.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Retrato */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative overflow-hidden rounded-lg aspect-[0.92] max-w-[420px] w-full border border-outline-variant/40">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center justify-between max-w-[420px] w-full mt-4 pt-4 border-t border-outline-variant/60">
              <div>
                <span className="font-body-sm text-body-sm font-medium text-primary block">
                  {about.name}
                </span>
                <span className="font-label-technical text-label-technical text-on-surface-variant">
                  {about.role}
                </span>
              </div>
              <span className="font-label-status text-label-status text-secondary uppercase tracking-wider">
                {about.status}
              </span>
            </div>
          </div>

          {/* Manifiesto + stack */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed max-w-[640px]">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-space-xl pt-space-md border-t border-outline-variant/40">
              <div className="font-label-technical text-label-technical uppercase tracking-widest text-outline mb-space-md">
                Stack técnico
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {about.stack.map((s) => (
                  <div key={s.category} className="flex flex-col gap-space-xs">
                    <span className="font-label-technical text-label-technical text-secondary uppercase tracking-wider font-semibold">
                      {s.category}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {s.tools}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-outline-variant/30 flex items-center gap-space-sm">
                <span className="w-6 h-[1px] bg-secondary" />
                <span className="font-mono text-code-inline text-on-surface-variant">
                  {about.stackFooter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}