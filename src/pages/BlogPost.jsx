import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/blog.js';
import Icon from '../components/Icon.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-gutter py-space-xl text-center">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-space-sm">
          Post not found
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-space-xs text-primary font-label-technical text-label-technical uppercase tracking-wider"
        >
          <Icon name="arrow_back" />
          Back to blog
        </Link>
      </div>
    );
  }

  useDocumentMeta({
    title: `${post.title} — Lisandro Cacciatore`,
    description: post.excerpt,
    image: '/img/og/og-blog.png',
    path: `/blog/${slug}`,
  });

  return (
    <article className="blog-page max-w-3xl w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">
      <Link
        to="/blog"
        className="inline-flex items-center gap-space-xs text-on-surface-variant hover:text-primary font-label-technical text-label-technical uppercase tracking-wider transition-colors w-fit"
      >
        <Icon name="arrow_back" className="text-base" />
        All posts
      </Link>

      <header className="flex flex-col gap-space-sm">
        <SectionLabel>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </SectionLabel>
        <h1 className="font-display text-display-xl-mobile md:text-display-xl text-on-surface tracking-tight">
          {post.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1 pt-space-xs">
          {post.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-surface-container rounded border border-outline-variant/20 font-label-technical text-label-technical text-on-surface-variant"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert max-w-none font-body-md text-body-md text-on-surface-variant" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
}