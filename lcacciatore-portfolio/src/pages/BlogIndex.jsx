import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogCategories, getSortedPosts, getPostsByCategory } from '../data/blog.js';

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = useMemo(
    () => getPostsByCategory(activeCategory),
    [activeCategory]
  );

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [filtered]
  );

  const [featured, ...rest] = sorted;

  return (
    <div className="bg-surface min-h-screen">
      <Seo
        title="Notas sobre IA aplicada"
        description="Artículos sobre evaluación de IA, QA para sistemas con IA, automatización y metodología para estudios profesionales."
        path="/blog"
      />

      <header className="pt-32 pb-16 border-b border-outline-variant/60">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
            <div className="md:col-span-3">
              <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
                Blog // Notas
              </span>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-normal tracking-tight max-w-[820px]">
                Notas sobre IA <span className="italic text-secondary">aplicada</span>.
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-outline-variant/60">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="flex gap-2 overflow-x-auto py-5 -mx-1 px-1">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-technical text-label-technical uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-16 md:py-24">
        {sorted.length === 0 ? (
          <p className="text-center text-on-surface-variant font-body-md py-20">
            No hay artículos en esta categoría todavía.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featured && <BlogCard post={featured} featured />}
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest block mb-2">
                ¿Tenés un proyecto en mente?
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-normal">
                Conversemos sobre cómo aplicarlo.
              </h2>
            </div>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary text-white font-body-sm text-body-sm font-medium hover:bg-primary-container transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Contame tu caso</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}