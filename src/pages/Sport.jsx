import { sportHero, sportCrossLink } from '../data/sport.js';
import Problem from '../sections/sport/Problem.jsx';
import Building from '../sections/sport/Building.jsx';
import Projects from '../sections/sport/Projects.jsx';
import SportsExperience from '../sections/sport/SportsExperience.jsx';
import CTAButton from '../components/CTAButton.jsx';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';

export default function Sport() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-48 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <section className="max-w-[1280px] mx-auto px-gutter pt-space-lg pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-space-xs mb-space-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container" />
                <span className="font-label-code-sm text-label-code-sm text-secondary tracking-wider uppercase">
                  {sportHero.badge}
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight mt-space-xs mb-space-md font-semibold">
                {sportHero.headline}
              </h1>

              <p className="font-headline-md text-headline-md text-secondary font-medium tracking-tight mb-space-sm">
                {sportHero.subheadline}
              </p>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
                {sportHero.lead}
              </p>

              <div className="flex flex-wrap items-center gap-space-md">
                {sportHero.ctas.map((cta) =>
                  cta.accent === 'ghost' ? (
                    <CTAButton
                      key={cta.label}
                      to={cta.to}
                      label={cta.label}
                      icon="arrow_forward"
                      accent="ghost"
                    />
                  ) : (
                    <CTAButton
                      key={cta.label}
                      href={cta.to}
                      label={cta.label}
                      icon="arrow_forward"
                    />
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center gap-space-lg mt-space-xl pt-space-md bg-surface-container-lowest/60 p-space-md rounded-xl">
                {sportHero.microBadges.map((b, i) => (
                  <div key={b.value} className="flex items-center gap-space-lg">
                    <div className="flex flex-col">
                      <span
                        className={`font-label-code-md text-label-code-md font-semibold ${
                          b.accent === 'secondary'
                            ? 'text-secondary'
                            : b.accent === 'tertiary'
                            ? 'text-tertiary'
                            : 'text-primary'
                        }`}
                      >
                        {b.value}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {b.label}
                      </span>
                    </div>
                    {i < sportHero.microBadges.length - 1 && (
                      <div className="h-8 w-px bg-surface-variant" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-surface-container rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-space-sm mb-space-md gap-space-sm flex-wrap">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse" />
                    <span className="font-label-code-sm text-label-code-sm text-on-surface uppercase tracking-wide">
                      {sportHero.dashboard.title} · {sportHero.dashboard.status}
                    </span>
                  </div>
                  <span className="font-label-code-sm text-label-code-sm text-secondary bg-surface-container-high px-space-xs py-0.5 rounded">
                    {sportHero.dashboard.source}
                  </span>
                </div>

                <div className="bg-surface-container-low rounded-lg p-space-md mb-space-md">
                  <div className="flex items-start justify-between flex-wrap gap-space-sm">
                    <div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">
                        {sportHero.dashboard.acwr.label}
                      </span>
                      <span className="font-display-xl-mobile text-display-xl-mobile text-on-surface font-semibold tracking-tight">
                        {sportHero.dashboard.acwr.value}
                      </span>
                    </div>
                    <span className="font-label-code-sm text-label-code-sm text-on-tertiary-container bg-tertiary-container/30 px-space-xs py-1 rounded font-medium">
                      {sportHero.dashboard.acwr.window}
                    </span>
                  </div>
                  <div className="mt-space-sm flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>{sportHero.dashboard.acwr.acute}</span>
                    <span>{sportHero.dashboard.acwr.chronic}</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full mt-space-xs overflow-hidden">
                    <div
                      className="bg-primary-container h-full rounded-full"
                      style={{ width: `${sportHero.dashboard.acwr.progress}%` }}
                    />
                  </div>
                </div>

                <div className="bg-surface-container-low rounded-lg p-space-md mb-space-md">
                  <div className="flex justify-between items-center mb-space-xs flex-wrap gap-space-xs">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      {sportHero.dashboard.chart.title}
                    </span>
                    <span className="font-label-code-sm text-label-code-sm text-secondary">
                      {sportHero.dashboard.chart.subtitle}
                    </span>
                  </div>
                  <svg
                    className="w-full h-24 text-primary"
                    fill="none"
                    viewBox="0 0 320 80"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="loadGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#d4a373" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#d4a373" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 65 Q 40 45, 80 50 T 160 30 T 240 40 T 320 20 L 320 80 L 0 80 Z"
                      fill="url(#loadGrad)"
                    />
                    <path
                      d="M0 65 Q 40 45, 80 50 T 160 30 T 240 40 T 320 20"
                      stroke="#f2be8c"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    <line
                      stroke="#50453b"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                      x1="0"
                      x2="320"
                      y1="55"
                      y2="55"
                    />
                    <circle cx="80" cy="50" fill="#f2be8c" r="3.5" />
                    <circle cx="160" cy="30" fill="#d4a373" r="4.5" />
                    <circle cx="240" cy="40" fill="#f2be8c" r="3.5" />
                    <circle cx="320" cy="20" fill="#e0c29f" r="4" />
                  </svg>
                  <div className="flex justify-between font-label-code-sm text-label-code-sm text-outline mt-space-xs">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-space-sm mb-space-sm">
                  {sportHero.dashboard.stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-surface-container-low rounded-lg p-space-sm"
                    >
                      <span className="font-label-code-sm text-label-code-sm text-on-surface-variant block">
                        {s.label}
                      </span>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {s.value}
                        </span>
                        {s.icon && (
                          <Icon name={s.icon} className="text-secondary text-sm" />
                        )}
                      </div>
                      <span className="font-label-code-sm text-label-code-sm text-on-surface-variant block mt-0.5">
                        {s.note}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between bg-surface-container-low rounded-lg p-space-sm text-body-sm font-body-sm text-on-surface-variant flex-wrap gap-space-sm">
                  {sportHero.dashboard.footer.map((f, i) => (
                    <span key={f.text} className="flex items-center gap-space-xs">
                      {f.icon && <Icon name={f.icon} className="text-primary text-base" />}
                      <span
                        className={
                          f.accent === 'tertiary'
                            ? 'font-label-code-sm text-label-code-sm text-tertiary'
                            : ''
                        }
                      >
                        {f.text}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Problem />
      <Building />
      <Projects />
      <SportsExperience />

      {/* Community + Contact */}
      <section className="w-full bg-surface-container-lowest py-space-xl" id="community">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <div className="inline-flex items-center gap-space-xs mb-space-sm bg-surface-container px-space-md py-space-xs rounded-xl">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-code-sm text-label-code-sm text-secondary uppercase tracking-wider">
              Community & updates
            </span>
          </div>
          <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight mb-space-sm">
            Follow the work in progress.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
            Sports Performance Analytics is under active development. Follow along for
            training content and product updates — or reach out directly if you want to
            collaborate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <a
              href={sportCrossLink.community.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-space-sm bg-surface-container-high text-on-surface font-body-md font-medium px-space-lg py-space-sm rounded-lg hover:bg-surface-bright transition-all border border-outline-variant/40"
            >
              <Icon name="fitness_center" className="text-secondary" />
              <span>Follow {sportCrossLink.community.handle}</span>
            </a>
            <CTAButton
              to={sportCrossLink.contact.cta.to}
              label={sportCrossLink.contact.cta.label}
              icon="arrow_forward"
            />
          </div>
        </div>
      </section>

      {/* Cross-link + closing CTA */}
      <section className="max-w-[1280px] mx-auto px-gutter py-space-xl w-full">
        <div className="bg-surface-container rounded-xl p-space-lg shadow-md mb-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <Icon name="neurology" className="text-2xl" />
            </div>
            <div>
              <span className="font-label-code-sm text-label-code-sm text-outline uppercase block">
                Dual discipline synergy
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {sportCrossLink.text}
              </span>
            </div>
          </div>
          <CTAButton
            to={sportCrossLink.cta.to}
            label={sportCrossLink.cta.label}
            icon="arrow_forward"
            accent="ghost"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mb-space-xs">
            {sportCrossLink.contact.title}
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
            {sportCrossLink.contact.description}
          </p>
          <CTAButton
            to={sportCrossLink.contact.cta.to}
            label={sportCrossLink.contact.cta.label}
            icon="arrow_forward"
          />
        </div>
      </section>
    </div>
  );
}