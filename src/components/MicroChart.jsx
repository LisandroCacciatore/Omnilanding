// Small decorative chart used in cards. No fabricated numbers — visual only.
export default function MicroChart({ type = 'bars', accent = 'primary', className = '' }) {
  const color = accent === 'secondary' ? '#e0c29f' : '#f2be8c';

  if (type === 'sparkline') {
    return (
      <svg
        viewBox="0 0 300 40"
        className={`w-full h-12 ${className}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 32 L40 28 L80 34 L120 18 L160 22 L200 12 L240 15 L280 6 L300 10"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <circle cx="280" cy="6" r="3.5" fill={color} />
      </svg>
    );
  }

  // default: bars
  const heights = [60, 75, 85, 70, 92, 88, 98];
  return (
    <div className={`w-full h-12 flex items-end gap-1.5 py-1 ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: `${h}%`,
            backgroundColor: i >= heights.length - 2 ? color : 'rgba(255,255,255,0.06)',
            opacity: i >= heights.length - 2 ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}