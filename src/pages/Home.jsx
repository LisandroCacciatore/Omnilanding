import Hero from '../sections/home/Hero.jsx';
import WhatIDo from '../sections/home/WhatIDo.jsx';
import AboutPreview from '../sections/home/AboutPreview.jsx';
import ConvergenceMatrix from '../sections/home/ConvergenceMatrix.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Home() {
  useDocumentMeta({
    title: 'Lisandro Cacciatore — Calidad de IA y Analítica de Rendimiento Deportivo',
    description: 'Especialista en evaluación de IA y fundador de una plataforma de analítica de rendimiento deportivo. 15+ años en entrenamiento de fuerza, 6+ años en calidad de software.',
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