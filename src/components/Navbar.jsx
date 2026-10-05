import { useState } from 'react';
import { nav, site } from '../data/site.js';
import useScrollSpy from '../hooks/useScrollSpy.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.to));

  return (
    <header className="sticky top-0 z-50 bg-[#080B12]/90 backdrop-blur-md border-b border-outline-variant">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a
          href="#"
          className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5 text-on-surface hover:text-primary transition-colors rounded py-1"
        >
          <span className="font-mono text-[13px] sm:text-[14px] font-semibold tracking-wider">
            {site.name}
          </span>
          <span className="hidden sm:inline text-outline/60 text-xs">//</span>
          <span className="font-mono text-[11px] sm:text-[12px] text-secondary font-medium tracking-wide">
            {site.role}
          </span>
        </a>

        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-7 text-[13px] font-mono">
          {nav.map((item) => {
            const isActive = active === item.to;
            return (
              <a
                key={item.to}
                href={item.to}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant text-[11px] font-mono text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse" />
            <span>{site.statusChip}</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-surface-container border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-mono text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[15px]">send</span>
            <span>{site.ctaLabel}</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container border border-outline-variant"
          >
            <span className="material-symbols-outlined text-[22px] block">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-[#080B12]/98 border-b border-outline-variant px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          <div className="font-mono text-[11px] text-outline uppercase tracking-wider px-3 pb-1 border-b border-outline-variant">
            Navigation Index
          </div>
          {nav.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container font-mono"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 px-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-primary text-on-primary-container font-mono text-xs font-semibold"
            >
              <span>{site.ctaLabel}</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
