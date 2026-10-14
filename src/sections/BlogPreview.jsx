import { Link } from 'react-router-dom';
import { formatDate } from '../data/utils/formatDate.js';
import { getSortedPosts } from '../data/blog.js';

export default function BlogPreview() {
  const posts = getSortedPosts().slice(0, 4);

  return (
    <section
      id="notas-blog"
      className="w-full py-space-2xl bg-surface-container-low/50 border-b border-outline-variant/40"
    >
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
              07 // Publicaciones & Criterio
            </span>
          </div>
          <div className="md:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal tracking-tight">
              Notas & Artículos Técnicos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[420px]">
              Análisis directos sobre implementación real de IA, metodología de
              testing y lecciones de arquitectura para firmas profesionales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-blog bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-label-technical text-label-technical text-on-surface-variant mb-6">
                  <span className="text-secondary font-semibold uppercase">
                    {post.categoryLabel}
                  </span>
                  <span>
                    {formatDate(post.date).toUpperCase()} ·{' '}
                    {post.readingTime.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3 font-serif">
                  {post.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider">
                  {post.category.toUpperCase()}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-label-technical text-label-technical text-primary font-semibold flex items-center gap-1 hover:text-secondary transition-colors"
                >
                  Leer artículo
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-secondary" />
            <span className="font-mono text-code-inline text-on-surface-variant">
              {posts.length} de los últimos artículos publicados.
            </span>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-label-technical text-label-technical text-secondary uppercase tracking-wider font-semibold hover:underline"
          >
            <span>Ver todos los artículos</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}