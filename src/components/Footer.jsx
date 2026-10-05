import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-outline-variant py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono text-on-surface-variant">
          <span className="font-semibold text-on-surface">{site.name}</span>
          <span className="hidden sm:inline text-outline">·</span>
          <span>Software Quality · AI Evaluation · Agentic Systems</span>
        </div>
        <div className="font-mono text-xs text-outline">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
