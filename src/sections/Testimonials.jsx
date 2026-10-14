import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full py-space-2xl bg-surface border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-space-xl">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              06 // Lo que dicen
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight max-w-[820px]">
              Estudios que ya trabajan con sistemas en producción.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex flex-col justify-between gap-space-lg py-space-lg border-t border-outline-variant/50"
            >
              <div>
                <span className="material-symbols-outlined text-secondary text-[28px] leading-none mb-space-sm block">
                  format_quote
                </span>
                <p className="font-body-lg text-body-lg text-primary leading-relaxed font-serif mb-space-lg">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-start gap-space-sm pt-space-md border-t border-outline-variant/40">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-outline-variant/40 bg-surface-container">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="w-full h-full flex items-center justify-center font-mono text-secondary font-bold">${t.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-body-sm text-body-sm font-semibold text-primary">
                    {t.name}
                  </span>
                  <span className="font-label-technical text-label-technical text-on-surface-variant">
                    {t.role}
                  </span>
                  <span className="font-mono text-code-inline text-secondary">
                    {t.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}