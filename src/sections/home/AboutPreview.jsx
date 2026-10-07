import { Link } from 'react-router-dom';
import { aboutPreview } from '../../data/home.js';
import { site } from '../../data/site.js';
import Icon from '../../components/Icon.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function AboutPreview() {
  return (
    <section className="mt-space-xl">
      <div className="bg-surface-container rounded-lg p-space-lg md:p-space-xl shadow-xl border border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-space-md">
            <div className="relative w-48 h-56 md:w-60 md:h-72 rounded-lg overflow-hidden bg-surface-container-lowest shadow-lg border border-outline-variant/40">
              <img
                src={site.portrait}
                alt={site.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="w-full flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded border border-outline-variant/30">
              <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider">
                Focus areas
              </span>
              <ul className="flex flex-col gap-1 font-label-code text-label-code text-on-surface-variant">
                {aboutPreview.credentials.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <SectionLabel>{aboutPreview.label}</SectionLabel>
            <h3 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              {aboutPreview.title}
            </h3>

            <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {aboutPreview.narrative.map((p, i) => (
                <p key={i} className={p.emphasis ? 'text-on-surface font-medium' : ''}>
                  {p.text}
                </p>
              ))}
            </div>

            <div className="pt-space-sm">
              <Link
                to={aboutPreview.cta.to}
                className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-container-highest transition-colors font-label-technical text-label-technical uppercase tracking-wider border border-outline-variant/30 group"
              >
                <span>{aboutPreview.cta.label}</span>
                <Icon
                  name="arrow_forward"
                  className="text-base group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}