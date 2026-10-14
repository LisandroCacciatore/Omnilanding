import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import SchemaOrg from '../components/SchemaOrg.jsx';
import Prose from '../components/Prose.jsx';
import { formatDate } from '../data/utils/formatDate.js';
import { getPostBySlug, getRelatedPosts } from '../data/blog.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-surface min-h-screen py-40 text-center">
        <Seo
          title="Artículo no encontrado"
          description="El artículo que buscás no existe."
          path={`/blog/${slug}`}
          noindex
        />
        <div className="max-w-[600px] mx-auto px-6">
          <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
            404
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary font-normal mt-4 mb-6">
            Ese artículo no existe.
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:underline font-body-md"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Volver al blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post.slug, post.category);

  return (
    <article className="bg-surface min-h-screen">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        article={{ date: post.date, categoryLabel: post.categoryLabel }}
      />
      <SchemaOrg type="Article" article={post} />

      <header className="pt-32 pb-12 border-b border-outline-variant/60">
<div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-label-technical text-label-technical uppercase tracking-wider text-outline hover:text-secondary transition-colors mb-10"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Blog</span>
            </Link>
            <div className="flex items-center gap-3 font-label-technical text-label-technical uppercase tracking-wider mb-6">
            <span className="text-secondary">{post.categoryLabel}</span>
            <span className="text-outline-variant">·</span>
            <span className="text-outline">{post.readingTime}</span>
            <span className="text-outline-variant">·</span>
            <time dateTime={post.date} className="text-outline">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-normal tracking-tight max-w-[880px] mb-8">
            {post.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-[720px]">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin pt-12">
        <div className="relative overflow-hidden rounded-lg aspect-[16/9] bg-surface-container">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin py-16 md:py-20">
        <Prose blocks={post.content} />
      </div>

      <div className="border-t border-outline-variant/60">
        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin py-16">
          <div className="max-w-[720px]">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest block mb-3">
              ¿Te sirvió?
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-normal mb-6">
              Si querés aplicar esto a tu estudio, conversemos.
            </h2>
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

      {related.length > 0 && (
        <div className="border-t border-outline-variant/60 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-16">
            <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest block mb-10">
              Seguí leyendo
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-surface-container">
                    <img
                      src={r.cover}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="font-label-technical text-label-technical text-secondary uppercase tracking-wider block mb-2">
                    {r.categoryLabel}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-medium group-hover:text-secondary transition-colors">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}