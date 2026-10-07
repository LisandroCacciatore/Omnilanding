import { Link } from 'react-router-dom';
import { posts } from '../data/blog.js';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Blog() {
  useDocumentMeta({
    title: 'Blog — Lisandro Cacciatore',
    description: 'Notes on AI quality, software reliability, and sports performance analytics.',
    image: '/img/og/og-blog.png',
    path: '/blog',
  });

  return (
    <div className="max-w-[1280px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
      <section className="flex flex-col gap-space-sm max-w-3xl">
        <SectionLabel>// Notes & essays</SectionLabel>
        <h1 className="font-display text-display text-on-surface tracking-tight">
          Blog
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Short essays at the intersection of AI quality, software reliability, and
          sports performance analytics. Published as they're written.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group bg-surface-container rounded-xl p-space-lg shadow-md hover:bg-surface-container-high transition-colors border border-outline-variant/30 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between flex-wrap gap-space-xs">
                <span className="font-label-technical text-label-technical text-primary">
                  {new Date(p.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <div className="flex gap-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 bg-surface-container-low rounded border border-outline-variant/20 font-label-technical text-label-technical text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {p.excerpt}
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-primary font-label-technical text-label-technical uppercase tracking-wider">
              <span>Read</span>
              <Icon
                name="arrow_forward"
                className="text-base group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}