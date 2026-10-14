import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl border-t border-outline-variant/40">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col md:flex-row items-center gap-space-xs md:text-left">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
            © {new Date().getFullYear()} Lisandro Cacciatore
          </span>
          <span className="hidden md:inline text-outline-variant">·</span>
          <span className="font-label-technical text-label-technical text-secondary">
            Rosario, Argentina · Remoto Global
          </span>
        </div>
        <div className="flex items-center gap-space-lg">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-outline-variant">·</span>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <span className="text-outline-variant">·</span>
          <Link
            to="/#contacto"
            className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </footer>
  );
}