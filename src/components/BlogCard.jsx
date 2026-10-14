import { Link } from 'react-router-dom';
import { formatDate } from '../data/utils/formatDate.js';

export default function BlogCard({ post, featured = false }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`card-blog-index group flex flex-col overflow-hidden ${
        featured ? 'md:col-span-2 md:flex-row md:gap-10' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2 aspect-[4/3] md:aspect-auto' : 'aspect-[16/10]'
        }`}
      >
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div
        className={`flex flex-col p-6 ${
          featured ? 'md:w-1/2 md:justify-center md:p-8' : ''
        }`}
      >
        <div className="flex items-center gap-3 font-label-technical text-label-technical uppercase tracking-wider mb-3">
          <span className="text-secondary">{post.categoryLabel}</span>
          <span className="text-outline-variant">·</span>
          <span className="text-outline">{post.readingTime}</span>
        </div>

        <h3
          className={`font-headline-sm text-headline-sm text-primary font-medium leading-snug mb-3 group-hover:text-secondary transition-colors ${
            featured ? 'md:text-headline-md' : ''
          }`}
        >
          {post.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between font-code-inline text-code-inline text-outline mt-auto pt-4 border-t border-outline-variant/30">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-secondary font-medium inline-flex items-center gap-1">
            Leer
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}