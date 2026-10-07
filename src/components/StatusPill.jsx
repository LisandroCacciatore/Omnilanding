export default function StatusPill({ children, accent = 'primary', pulse = false }) {
  const dot = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[accent] ?? 'bg-primary';

  return (
    <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high text-on-surface text-body-sm border border-outline-variant/30">
      <span
        className={`w-1.5 h-1.5 rounded-full ${dot} ${pulse ? 'animate-pulse' : ''}`}
      />
      <span className="font-label-technical text-label-technical uppercase tracking-wider">
        {children}
      </span>
    </span>
  );
}