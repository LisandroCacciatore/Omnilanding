import { certifications, languages } from '../../data/about.js';
import Icon from '../../components/Icon.jsx';

export default function Credentials() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
      {/* Certifications */}
      <div className="lg:col-span-8 bg-surface-container rounded-xl p-space-lg shadow-xl flex flex-col justify-between border border-outline-variant/40">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <Icon name="verified" className="text-primary text-base" />
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
                Verified credentials
              </span>
            </div>
          </div>

          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
            {certifications.map((c) => {
              const accentText = c.accent === 'secondary' ? 'text-secondary' : 'text-primary';
              return (
                <div
                  key={c.id}
                  className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-outline-variant/30"
                >
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant/30">
                    <Icon name={c.icon} className={`text-xl ${accentText}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-label-technical text-label-technical ${accentText}`}>
                      {c.issuer.toUpperCase()}
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      {c.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {c.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg shadow-xl flex flex-col justify-between border border-outline-variant/40">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <Icon name="translate" className="text-secondary text-base" />
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
              Communication
            </span>
          </div>

          <h3 className="font-headline-lg text-headline-lg text-on-surface">Languages</h3>

          <div className="flex flex-col gap-space-md pt-space-xs">
            {languages.map((l) => {
              const accentBg = l.accent === 'secondary' ? 'bg-secondary' : 'bg-primary';
              const accentText = l.accent === 'secondary' ? 'text-secondary' : 'text-primary';
              return (
                <div
                  key={l.id}
                  className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs border border-outline-variant/30"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      {l.name}
                    </span>
                    <span
                      className={`font-label-technical text-label-technical px-2 py-0.5 bg-surface-container-high ${accentText} rounded border border-outline-variant/30`}
                    >
                      {l.level.toUpperCase()}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {l.note}
                  </span>
                  <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden mt-1 border border-outline-variant/20">
                    <div
                      className={`${accentBg} h-full rounded-full`}
                      style={{ width: `${l.progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}