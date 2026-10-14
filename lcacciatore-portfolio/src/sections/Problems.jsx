import { problems } from '../data/problems.js';

export default function Problems() {
  return (
    <section
      id="el-problema"
      className="w-full py-space-2xl bg-surface-container-low/60 border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              01 // El problema
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight max-w-[820px]">
              La mayoría de los proyectos de IA en estudios profesionales{' '}
              <span className="italic">fallan antes de empezar</span>.
            </h2>
          </div>
        </div>

        <div className="border-t border-outline-variant/50">
          {problems.map((problem) => (
            <article
              key={problem.num}
              className="py-space-lg border-b border-outline-variant/50 grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline hover:bg-surface-container-low/80 transition-colors px-space-xs"
            >
              <div className="md:col-span-2 flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-headline-lg text-secondary/60 font-serif">
                  {problem.num}
                </span>
                <span className="font-label-technical text-label-technical text-outline uppercase tracking-widest ml-space-xs">
                  {problem.tag}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
                  {problem.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-space-xl pt-space-md border-t-2 border-secondary flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <p className="font-title-editorial text-title-editorial italic text-primary font-serif">
            Cuatro formas de empezar mal. Hay una forma de empezar bien.
          </p>
          <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
            Sistemas con validación rigurosa
          </span>
        </div>
      </div>
    </section>
  );
}