import { Link } from 'react-router-dom';
import { philosophy } from '../data/philosophy.js';

export default function Philosophy() {
  return (
    <section
      id="como-pienso"
      className="w-full py-space-2xl bg-surface-container-lowest border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-space-xl">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              04 // Cómo pienso
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight max-w-[820px]">
              La pregunta que me hago antes de cada proyecto:{' '}
              <span className="italic">¿cómo sabremos que funciona?</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <p className="font-body-lg text-body-lg text-primary leading-relaxed font-serif">
              {philosophy.intro}
            </p>
            {philosophy.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                {p}
              </p>
            ))}
            <Link
              to={philosophy.linkToPost}
              className="inline-flex items-center gap-2 font-label-technical text-label-technical text-secondary uppercase tracking-wider font-semibold hover:underline mt-space-sm"
            >
              <span>{philosophy.linkLabel}</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:pl-12 lg:border-l border-outline-variant/50">
            <div className="font-label-technical text-label-technical uppercase tracking-widest text-outline mb-space-md">
              Las 5 preguntas que abro en cada proyecto
            </div>
            <ul className="space-y-space-md">
              {philosophy.questions.map((q, i) => (
                <li key={i} className="flex items-start gap-space-sm">
                  <span className="font-mono text-code-inline text-secondary font-semibold mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body-md text-body-md text-primary leading-relaxed">
                    {q}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-space-lg pt-space-md border-t border-outline-variant/40">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-2 font-label-technical text-label-technical text-primary font-semibold hover:text-secondary transition-colors"
              >
                <span>Abrir estas preguntas en tu caso</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-md border-t-2 border-secondary flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <p className="font-title-editorial text-title-editorial italic text-primary font-serif">
            {philosophy.closing}
          </p>
          <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
            Filosofía de trabajo
          </span>
        </div>
      </div>
    </section>
  );
}