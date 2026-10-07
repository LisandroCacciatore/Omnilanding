export default function SectionLabel({ children, accent = 'primary', className = '' }) {
  const color = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    muted: 'text-on-surface-variant',
  }[accent] ?? 'text-primary';

  return (
    <span
      className={`font-label-technical text-label-technical uppercase tracking-widest ${color} ${className}`}
    >
      {children}
    </span>
  );
}