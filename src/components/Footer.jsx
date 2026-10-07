import { Link } from 'react-router-dom';
import { site } from '../data/site.js';
import Icon from './Icon.jsx';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-xl border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-gutter py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl mb-space-xl">
          <div className="md:col-span-6 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded bg-primary" />
              <span className="font-headline-md text-headline-md text-on-surface">
                {site.name}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              {site.headline}
            </p>
            <div className="mt-space-md p-space-md bg-surface-container-low rounded-lg border border-outline-variant/30">
              <blockquote className="font-label-code text-label-code text-on-surface italic">
                “{site.quote}”
              </blockquote>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider mb-space-xs">
              Navigate
            </span>
            <nav className="flex flex-col gap-space-xs">
              {site.nav.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider mb-space-xs">
              Network
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="link" className="text-sm" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="terminal" className="text-sm" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="fitness_center" className="text-sm text-secondary" />
                  <span>@escueladefuerza</span>
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="mail" className="text-sm text-primary" />
                  <span>Direct contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-label-technical text-label-technical text-on-surface-variant border-t border-outline-variant/20">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-space-md">
            <span>{site.location}</span>
            <span className="text-outline-variant">•</span>
            <span>{site.timezone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}