import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo.jsx';
import SchemaOrg from '../components/SchemaOrg.jsx';
import Hero from '../sections/Hero.jsx';
import ImpactStrip from '../sections/ImpactStrip.jsx';
import Problems from '../sections/Problems.jsx';
import Systems from '../sections/Systems.jsx';
import Methodology from '../sections/Methodology.jsx';
import Philosophy from '../sections/Philosophy.jsx';
import CaseStudy from '../sections/CaseStudy.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import BlogPreview from '../sections/BlogPreview.jsx';
import About from '../sections/About.jsx';
import Contact from '../sections/Contact.jsx';
import { faq } from '../data/faq.js';

export default function Home() {
  return (
    <>
      <Seo
        description="Sistemas de IA para estudios profesionales. Asistentes internos, plataformas a medida y automatización de procesos para estudios jurídicos, contables y de consultoría."
        path="/"
      />
      <SchemaOrg type="ProfessionalService" />
      <SchemaOrg type="Person" />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      <Hero />
      <ImpactStrip />
      <Problems />
      <Systems />
      <Methodology />
      <Philosophy />
      <CaseStudy />
      <Testimonials />
      <BlogPreview />
      <About />
      <Contact />
    </>
  );
}