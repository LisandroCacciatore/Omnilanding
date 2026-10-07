import { domains } from '../../data/about.js';
import Icon from '../../components/Icon.jsx';
import MicroChart from '../../components/MicroChart.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function DualStreamGrid() {
  return (
    <section className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-xs">
        <div>
          <SectionLabel>// Dual-track architecture</SectionLabel>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Methodology & Domain Expertise
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {domains.map((d) => {
          const accentText = d.accent === 'secondary' ? 'text-secondary' : 'text-primary';
          const dotColor = d.accent === 'secondary' ? 'bg-secondary' : 'bg-primary';

          return (
            <div
              key={d.id}
              className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md border border-outline-variant/40"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className={`w-2.5 h-2.5 rounded ${dotColor}`} />
                    <span
                      className={`font-label-technical text-label-technical uppercase tracking-wider ${accentText}`}
                    >
                      {d.label}
                    </span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant">
                    {d.tag.toUpperCase()}
                  </span>
                </div>

                <h4 className="font-headline-md text-headline-md text-on-surface">
                  {d.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {d.description}
                </p>

                <ul className="flex flex-col gap-space-xs font-label-code text-label-code text-on-surface">
                  {d.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded border border-outline-variant/20"
                    >
                      <Icon name="check_circle" className={`text-sm ${accentText}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-md rounded-lg border border-outline-variant/30">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-technical text-label-technical text-on-surface-variant">
                    {d.chart.label.toUpperCase()}
                  </span>
                  <span className={`font-label-metric text-label-metric ${accentText}`}>
                    {d.chart.value}
                  </span>
                </div>
                <MicroChart type={d.chart.type} accent={d.accent} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}