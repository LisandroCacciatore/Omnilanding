import Icon from './Icon.jsx';

export default function ExperienceCard({ item }) {
  const accentText = item.accent === 'secondary' ? 'text-secondary' : 'text-primary';

  return (
    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/30">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span className={`font-label-technical text-label-technical ${accentText}`}>
            {item.category}
          </span>
          <span className="font-label-code text-label-code text-on-surface-variant">
            {item.role}
          </span>
        </div>
        <h4 className="font-headline-md text-headline-md text-on-surface">{item.title}</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
      </div>

      <div className="mt-space-md flex flex-wrap gap-1">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-1.5 py-0.5 bg-surface-container rounded border border-outline-variant/20 font-label-technical text-label-technical text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}