import Hero from '../sections/home/Hero.jsx';
import WhatIDo from '../sections/home/WhatIDo.jsx';
import AboutPreview from '../sections/home/AboutPreview.jsx';
import ConvergenceMatrix from '../sections/home/ConvergenceMatrix.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Home() {
  useDocumentMeta({
    title: 'Lisandro Cacciatore — AI Quality & Sports Performance Analytics',
    description: 'QA & AI Evaluation specialist and Sports Performance Analytics founder. 15+ years in strength training, 6+ years in software quality.',
    image: '/img/og/og-home.png',
    path: '/',
  });

  return (
    <div className="max-w-[1280px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
      <Hero />
      <WhatIDo />
      <AboutPreview />
      <ConvergenceMatrix />
    </div>
  );
}