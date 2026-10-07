import { about } from '../../data/about.js';
import { site } from '../../data/site.js';
import Icon from '../../components/Icon.jsx';
import StatusPill from '../../components/StatusPill.jsx';
import ResponsiveImage from '../../components/ResponsiveImage.jsx';

export default function DossierHeader() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
      {/* Profile card */}
      <div className="lg:col-span-5 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden border border-outline-variant/40">
        <div className="flex items-center justify-between pb-space-md gap-space-sm flex-wrap">
          <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
            About
          </span>
          <StatusPill pulse>{about.badge}</StatusPill>
        </div>

        <div className="flex flex-col gap-space-lg my-space-md items-center">
          <div className="relative w-44 h-48 sm:w-48 sm:h-52 rounded-lg overflow-hidden shrink-0 shadow-md bg-surface-container-lowest border border-outline-variant/40">
            <ResponsiveImage
              src={site.portrait}
              alt={site.name}
              className="w-full h-full object-cover object-top"
              sizes="(max-width: 768px) 176px, 192px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-surface-container-lowest/20 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
              <span className="font-label-technical text-label-technical text-primary bg-surface-container-lowest/90 px-space-xs py-0.5 rounded border border-outline-variant/30">
                QA / EVAL
              </span>
              <span className="font-label-technical text-label-technical text-secondary bg-surface-container-lowest/90 px-space-xs py-0.5 rounded border border-outline-variant/30">
                ATHLETICS
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs w-full">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">
              {about.headline}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
              {about.subheadline}
            </p>

            <div className="grid grid-cols-2 gap-space-xs pt-space-sm">
              {about.tracks.map((t) => (
                <div
                  key={t.id}
                  className="bg-surface-container-low p-space-sm rounded flex flex-col gap-0.5 border border-outline-variant/30"
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded ${
                        t.accent === 'secondary' ? 'bg-secondary' : 'bg-primary'
                      }`}
                    />
                    <span
                      className={`font-label-technical text-label-technical tracking-wide ${
                        t.accent === 'secondary' ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {t.label.toUpperCase()}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    {t.value}
                  </span>
                  <span className="font-label-technical text-label-technical text-on-surface-variant">
                    {t.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between mt-space-sm border border-outline-variant/30">
          <div className="flex flex-col">
            <span className="font-label-technical text-label-technical text-on-surface-variant">
              {about.base.label.toUpperCase()}
            </span>
            <span className="font-label-metric text-label-metric text-on-surface">
              {about.base.value}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-label-technical text-label-technical text-on-surface-variant">
              TIMEZONE
            </span>
            <span className="font-label-code text-label-code text-primary">
              {site.timezone}
            </span>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className="lg:col-span-7 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-xl border border-outline-variant/40">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <Icon name="architecture" className="text-primary text-base" />
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
              Executive overview
            </span>
          </div>

          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            {about.thesis}
          </h2>

          <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md">
            {about.narrative.map((p, i) => (
              <p key={i}>{p.text}</p>
            ))}
          </div>
        </div>

        <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg flex items-start gap-space-md border border-outline-variant/30">
          <Icon name="terminal" className="text-primary text-2xl shrink-0 mt-0.5" />
          <div className="flex flex-col gap-space-xs">
            <p className="font-headline-md text-headline-md text-on-surface">
              “{about.quote}”
            </p>
            <span className="font-label-technical text-label-technical text-on-surface-variant">
              CORE PHILOSOPHY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}