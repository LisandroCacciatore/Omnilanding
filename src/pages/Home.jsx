import Hero from '../sections/home/Hero.jsx';
import WhatIDo from '../sections/home/WhatIDo.jsx';
import AboutPreview from '../sections/home/AboutPreview.jsx';
import ConvergenceMatrix from '../sections/home/ConvergenceMatrix.jsx';

export default function Home() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
      <Hero />
      <WhatIDo />
      <AboutPreview />
      <ConvergenceMatrix />
    </div>
  );
}