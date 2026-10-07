import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

const accentClasses = {
  primary:
    'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary border border-primary-container',
  secondary:
    'bg-surface-container-high text-secondary hover:bg-secondary-container hover:text-on-secondary-container border border-outline-variant/40',
  ghost:
    'bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/40',
};

export default function CTAButton({
  to,
  href,
  label,
  icon = 'arrow_forward',
  accent = 'primary',
  className = '',
  full = false,
}) {
  const cls = `inline-flex items-center justify-between gap-space-md px-space-lg py-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all shadow-md group ${accentClasses[accent] ?? accentClasses.primary} ${
    full ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      <span>{label}</span>
      <Icon
        name={icon}
        className="text-base group-hover:translate-x-1 transition-transform"
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      {content}
    </Link>
  );
}