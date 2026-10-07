// Responsive <img> con srcset WebP. Espera que las versiones optimizadas
// existan en /img/optimized/ con el patrón: <name>-<width>w.webp
export default function ResponsiveImage({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
}) {
  // src esperado: '/img/coach-tech.png' → base: '/img/coach-tech'
  const base = src.replace(/\.[^.]+$/, '');
  const optimizedBase = base.replace('/img/', '/img/optimized/');

  const srcSet = [400, 800, 1600]
    .map((w) => `${optimizedBase}-${w}w.webp ${w}w`)
    .join(', ');

  return (
    <img
      src={`${optimizedBase}-800w.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}