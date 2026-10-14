import { Link } from 'react-router-dom';
import { caseStudy } from '../data/caseStudy.js';

export default function CaseStudy() {
  return (
    <section
      id="caso-estudio"
      className="w-full py-space-2xl bg-surface border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-space-xl">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              05 // Caso de estudio
            </span>
          </div>
          <div className="md:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight">
              {caseStudy.client}
            </h2>
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
              {caseStudy.subtitle}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/50 rounded-xl overflow-hidden bg-surface-container-low/20">
          <div className="lg:col-span-7 p-space-xl flex flex-col justify-between">
            <div className="space-y-space-md">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary font-semibold">
                Contexto & solución
              </span>
              <p className="font-body-lg text-body-lg text-primary leading-relaxed font-serif">
                {caseStudy.context}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {caseStudy.narrative}
              </p>
            </div>
            <div className="mt-space-xl pt-space-md border-t border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs font-mono text-code-inline text-primary">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  verified_user
                </span>
                <span className="font-medium">{caseStudy.status}</span>
              </div>
              <Link
                to="/#contacto"
                className="font-label-technical text-label-technical text-secondary uppercase tracking-wider font-semibold hover:underline"
              >
                {caseStudy.cta} →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-outline-variant/50 p-space-xl bg-surface-container-low/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant/40">
                <span className="font-label-technical text-label-technical text-primary uppercase tracking-widest font-semibold">
                  Alcance del proyecto
                </span>
                <span className="font-label-status text-label-status text-secondary bg-surface-container-lowest border border-outline-variant/40 px-2 py-0.5 rounded">
                  Completo
                </span>
              </div>
              <ul className="space-y-space-md">
                {caseStudy.scope.map((item) => (
                  <li key={item.num} className="flex items-start gap-space-xs">
                    <span className="font-mono text-code-inline text-secondary font-semibold mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <span className="font-body-md text-body-md font-medium text-primary block">
                        {item.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-lg pt-space-sm bg-surface-container-lowest border border-outline-variant/30 p-space-sm rounded font-label-technical text-label-technical text-on-surface-variant flex items-center justify-between">
              <span>QA Deployment</span>
              <span className="font-mono font-semibold text-secondary">
                {caseStudy.deploy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}