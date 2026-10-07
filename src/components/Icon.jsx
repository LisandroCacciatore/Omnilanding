export default function Icon({ name, className = '', filled = false, ...rest }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  );
}