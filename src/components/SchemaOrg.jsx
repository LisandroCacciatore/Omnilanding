import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

export default function SchemaOrg({ type, article = null }) {
  let data = null;

  if (type === 'ProfessionalService') {
    data = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: site.name,
      description:
        'Sistemas de IA para estudios profesionales. Asistentes internos, plataformas a medida y automatización de procesos.',
      url: site.url,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rosario',
        addressCountry: 'AR',
      },
      areaServed: ['Argentina', 'Latinoamérica', 'Remoto global'],
      priceRange: '$$$',
    };
  }

  if (type === 'Person') {
    data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Lisandro Cacciatore',
      jobTitle: 'Especialista en IA & QA Systems',
      url: site.url,
      sameAs: [site.socials.linkedin, site.socials.github],
    };
  }

  if (type === 'Article' && article) {
    data = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: `${site.url}${article.cover}`,
      datePublished: article.date,
      author: { '@type': 'Person', name: 'Lisandro Cacciatore' },
      publisher: { '@type': 'Organization', name: site.name },
      mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    };
  }

  if (!data) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}