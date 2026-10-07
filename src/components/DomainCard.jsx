import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import MicroChart from './MicroChart.jsx';

export default function DomainCard({ data }) {
  const { accent, tag, icon, title, description, capabilities, cta, chart } = data;
  const accentText = accent === 'secondary' ? 'text-secondary' : 'text-primary';
  const accentBar = accent === 'secondary' ? 'bg-primary-container' : 'bg-primary';

  return (
    <div className="bg-surface-container rounded-lg p-space-lg flex flex-col justify-between shadow-lg border border-outline-variant/30 relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${accentBar}`} />

      <div className="flex flex-col gap-space-md">
        <div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-high border border-outline-variant/30 w-fit">
          <Icon name={icon} className={`text-sm ${accentText}`} />
          <span className={`font-label-technical text-label-technical ${accentText}`}>
            {tag}
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">{title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
        </div>

        <div className="bg-surface-container-lowest rounded p-space-md border border-outline-variant/20">
          <div className="flex justify-between items-center font-label-technical text-label-technical text-outline mb-space-xs">
            <span>{chart.label}</span>
            <span className={accentText}>{chart.value}</span>
          </div>
          <MicroChart type={chart.type} accent={accent} />
        </div>

        <div className="pt-space-xs">
          <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider block mb-space-xs">
            Core capabilities
          </span>
          <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-space-sm">
                <Icon name="check_circle" className={`text-base ${accentText}`} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-space-lg">
        <Link
          to={cta.to}
          className={`inline-flex items-center justify-between w-full px-space-md py-space-sm rounded bg-surface-container-high ${accentText} hover:bg-surface-container-highest transition-colors font-label-technical text-label-technical uppercase tracking-wider border border-outline-variant/30 group`}
        >
          <span>{cta.label}</span>
          <Icon
            name="arrow_forward"
            className="text-base group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}