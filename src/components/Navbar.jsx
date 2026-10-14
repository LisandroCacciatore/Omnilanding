import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nav, site } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/40">
      <div className="h-20 max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-code-inline text-secondary font-semibold tracking-wide">
            LC
          </span>
          <div className="h-4 w-[1px] bg-outline-variant/60" />
          <Link
            to="/"
            className="font-headline-sm text-headline-sm text-primary tracking-tight font-medium hover:text-secondary transition-colors"
          >
            Lisandro Cacciatore{' '}
            <span className="font-label-technical text-label-technical text-on-surface-variant font-normal tracking-widest uppercase ml-space-xs">
              // AI Systems
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-space-xs p-1 rounded-lg">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <Link
            to="/#contacto"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container hover:text-on-primary transition-colors shadow-sm"
          >
            Contame tu caso
          </Link>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-space-sm py-space-xs rounded border border-outline-variant/80 text-primary font-label-technical text-label-technical uppercase tracking-wider hover:bg-surface-container transition-all"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}