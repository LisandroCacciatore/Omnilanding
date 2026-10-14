import { methodology } from '../data/methodology.js';

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="w-full py-space-2xl bg-surface-container-low/40 border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              03 // Metodología
            </span>
          </div>
          <div className="md:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight">
              Cómo trabajo.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[420px]">
              Cuatro fases. En ese orden. Saltearse una es la forma más rápida de
              construir algo que nadie va a usar.
            </p>
          </div>
        </div>

        <div className="border-t border-outline-variant/50">
          {methodology.map((phase) => (
            <article
              key={phase.num}
              className="py-space-lg border-b border-outline-variant/50 grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline hover:bg-surface-container-low/80 transition-colors px-space-xs"
            >
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-mono text-sm font-bold">
                  {phase.num}
                </span>
                <span className="font-label-technical text-label-technical text-outline uppercase tracking-widest">
                  {phase.tag}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
                  {phase.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-space-xl pt-space-md border-t-2 border-secondary flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <p className="font-title-editorial text-title-editorial italic text-primary font-serif">
            El orden no es negociable. La velocidad no reemplaza al rigor.
          </p>
          <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
            Método de 4 fases
          </span>
        </div>
      </div>
    </section>
  );
}