import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pb-space-2xl pt-space-xl border-b border-outline-variant/40">
      {/* Acentos geométricos (Potignano) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-40 -right-40 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1" className="text-secondary" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" className="text-secondary" />
          <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1" className="text-secondary" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-lg items-start">
          {/* Columna izquierda */}
          <div className="lg:col-span-7 flex flex-col items-start pt-space-xs">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase tracking-wider mb-space-md">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Sistemas de IA para estudios profesionales
            </div>

            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-normal tracking-tight leading-[1.08] mb-space-md">
              Construyo sistemas de IA <br />
              <span className="font-headline-lg md:font-display-xl italic text-secondary font-normal">
                para estudios profesionales.
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px] mb-space-sm leading-relaxed">
              Plataformas, asistentes y automatizaciones para estudios
              jurídicos, contables y de consultoría que quieren operar mejor —
              no sumar otra herramienta que nadie usa.
            </p>

            <p className="font-code-inline text-code-inline text-secondary font-medium tracking-tight mb-space-xl bg-surface-container-low px-space-sm py-space-xs rounded border border-outline-variant/30">
              "Antes de construir, entiendo. Después defino. Recien después
              escribo la primera línea."
            </p>

            <div className="flex flex-wrap items-center gap-space-sm w-full sm:w-auto">
              <Link
                to="/#contacto"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Contame tu caso</span>
              </Link>
              <Link
                to="/#que-construyo"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm font-medium hover:bg-surface-container transition-all border border-outline-variant/40 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  visibility
                </span>
                <span>Ver qué construyo</span>
              </Link>
            </div>
          </div>

          {/* Columna derecha: monitor oscuro */}
          <div className="lg:col-span-5 w-full mt-space-md lg:mt-0">
            <div className="bg-primary text-white rounded-xl p-6 shadow-xl flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    science
                  </span>
                  <span className="font-label-technical text-label-technical font-semibold tracking-wider uppercase text-white">
                    Evaluación de sistema
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-secondary font-label-status text-label-status uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>Activo</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-technical text-label-technical uppercase tracking-widest text-white/60 font-semibold">
                    Esperado
                  </span>
                  <span className="font-label-status text-label-status text-white/40">
                    Strict spec
                  </span>
                </div>
                <div className="bg-white/[0.06] rounded p-4 space-y-2 border border-white/10">
                  {[
                    'Tarea completada',
                    'Dato persistido en base relacional',
                    'Respuesta válida y verídica',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-body-sm font-mono text-white/90"
                    >
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-technical text-label-technical uppercase tracking-widest text-white/60 font-semibold">
                    Observado
                  </span>
                  <span className="font-label-status text-label-status text-secondary">
                    Run 0948_qa
                  </span>
                </div>
                <div className="bg-white/[0.04] rounded p-4 space-y-2 border border-white/10">
                  {[
                    'Tarea completada',
                    'Dato persistido en base relacional',
                    'Respuesta válida y verídica',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-body-sm font-mono text-white/90"
                    >
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 bg-white/[0.06] p-4 rounded flex items-center justify-between border border-white/10">
                <span className="font-label-status text-label-status text-white/60 uppercase tracking-wider">
                  3 checks · 1 desvío · 1 hallazgo
                </span>
                <span className="font-label-technical text-label-technical font-semibold text-white bg-white/10 px-2 py-0.5 rounded">
                  Reporte: listo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}