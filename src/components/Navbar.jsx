import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { site } from '../data/site.js';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        <Link
          to="/"
          className="flex flex-col group"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded bg-primary" />
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {site.name}
            </span>
          </div>
          <span className="hidden sm:block text-body-sm text-on-surface-variant">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-space-xs p-space-xs bg-surface-container-lowest rounded-lg border border-outline-variant/30">
          {site.nav.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-space-md py-space-xs font-medium text-body-sm rounded transition-colors ${
                  isActive
                    ? 'text-on-surface bg-surface-container-high'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            to={site.cta.to}
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-body-sm font-medium border border-outline-variant/40 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>{site.cta.label}</span>
            <Icon name="arrow_forward" className="text-base text-primary" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/40 bg-surface-container-high text-on-surface"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-gutter py-space-md flex flex-col gap-space-xs">
            {site.nav.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-space-md py-space-sm rounded text-body-md ${
                    isActive
                      ? 'text-on-surface bg-surface-container-high font-medium'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}