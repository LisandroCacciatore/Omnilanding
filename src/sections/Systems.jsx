import { systems } from '../data/systems.js';

export default function Systems() {
  return (
    <section
      id="que-construyo"
      className="w-full py-space-2xl bg-surface border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              02 // Qué construyo
            </span>
          </div>
          <div className="md:col-span-9 flex flex-col md:flex-row md:flex-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight">
              Cuatro cosas concretas.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[420px]">
              No vendo "transformación digital" genérica. Construyo sistemas de
              software que resuelven problemas específicos de cómo opera un
              estudio.
            </p>
          </div>
        </div>

        <div className="border-t border-outline-variant/50">
          {systems.map((system) => (
            <article
              key={system.num}
              className="py-space-lg border-b border-outline-variant/50 grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start hover:bg-surface-container-low/40 transition-colors px-space-xs"
            >
              <div className="lg:col-span-2 flex items-center gap-3">
                <span className="font-headline-lg text-headline-lg text-secondary/60 font-serif">
                  {system.num}
                </span>
                <span className="w-11 h-11 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    {system.icon}
                  </span>
                </span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
                  {system.title}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {system.description}
                </p>
              </div>
              <div className="lg:col-span-3 font-mono text-code-inline text-secondary bg-surface-container-low p-space-xs rounded border border-outline-variant/30">
                → {system.technical}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-space-xl pt-space-md border-t-2 border-secondary flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <p className="font-title-editorial text-title-editorial italic text-primary font-serif">
            Cada sistema se especifica, se construye y se evalúa antes de
            entregarse.
          </p>
          <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
            Standards // SDD Protocol
          </span>
        </div>
      </div>
    </section>
  );
}