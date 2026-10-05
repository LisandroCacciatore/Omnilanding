// Verificación de render del portfolio QA.
// Ejecuta el árbol REAL de componentes (los mismos que se despliegan) y afirma
// strings esperados, incluidos los 3 fixes del rediseño. Cualquier error de
// render lo hace fallar.
//
//   npm run verify:render
//
// Equivale a:
//   vite build --ssr src/ssr-check.jsx --outDir ssr-dist && node ssr-dist/ssr-check.js
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App.jsx';

// Los componentes que tocan APIs de browser lo hacen en useEffect, que no corre
// en SSR. Los stubs son por si algún día se toca window al renderizar.
globalThis.window = globalThis.window || {
  matchMedia: () => ({ matches: false }),
  scrollTo: () => {},
};

const html = renderToStaticMarkup(React.createElement(App));
const contar = (s) => html.split(s).length - 1;

// [descripción, string que DEBE estar, veces mínimo]
const requerido = [
  ['Hero renderiza', 'I test what systems', 1],
  ['Hero renderiza', 'actually do', 1],
  ['FIX 5 chip de estado real', 'AVAILABLE FOR WORK', 1],
  ['FIX 3a CTA del header', 'Get in touch', 1],
  ['FIX 3b HERMES sin link falso', 'Case study coming', 1],
  [
    'FIX 3b link real de Sports Analytics',
    'https://lisandrocacciatore.github.io/Arg_Plifting_Analysis/',
    1,
  ],
  ['FIX 1 metodología Requirements', '01 / Requirements', 1],
  ['FIX 1 metodología Data', '02 / Data', 1],
  ['FIX 1 metodología Evaluation', '03 / Evaluation', 1],
  ['FIX 1 metodología Decision', '04 / Decision', 1],
  ['FIX 1 encabezado del diagrama', 'SYSTEM ARCHITECTURE', 1],
  ['FIX 1 flujo del diagrama', 'REQUIREMENTS → DATA → DECISIONS', 1],
  ['FIX 2 strip de stack: REST · SOAP', 'REST · SOAP', 1],
  ['FIX 2 strip de stack: SDD', 'SDD', 1],
  ['FIX 2 strip de stack: AI Evaluation', 'AI Evaluation', 1],
  ['Navbar: ancla resoluble', 'id="quality-mindset"', 1],
  ['Navbar: ancla resoluble', 'id="expected-vs-actual"', 1],
  ['Navbar: ancla resoluble', 'id="software-quality"', 1],
  ['Navbar: ancla resoluble', 'id="ai-evaluation"', 1],
  ['Navbar: ancla resoluble', 'id="projects"', 1],
  ['Navbar: ancla resoluble', 'id="experience"', 1],
  ['Navbar: ancla resoluble', 'id="contact"', 1],
  ['Experience: 6 puestos', 'Testbirds', 1],
  ['About: email real', 'lisandrocacciatore@gmail.com', 1],
  ['About: LinkedIn real', 'linkedin.com/in/lisandrocacciatore', 1],
  ['About: GitHub real', 'github.com/LisandroCacciatore', 1],
];

// Cosas que NO deben existir
const prohibido = [
  ['FIX 1 dashboard falso: 98.4', '98.4'],
  ['FIX 1 dashboard falso: +12.8', '+12.8'],
  ['FIX 1 dashboard falso: OPTIMAL', 'OPTIMAL'],
  ['FIX 1 dashboard falso: 0 PENDING', '0 PENDING'],
  ['FIX 2 foto IA de googleusercontent', 'googleusercontent'],
  ['FIX 2 no hay ninguna <img>', '<img'],
  ["FIX 3a 'Let's talk'", "Let's talk"],
  ['FIX 5 SYSTEMS READY', 'SYSTEMS READY'],
];

// Conteos exactos: prueban que el CTA deshabilitado de HERMES NO es un <a>
const conteos = [
  ['un único href="#" (la marca del navbar), ningún CTA vacío', 'href="#"', 1],
  ['dos proyectos renderizados', '<article', 2],
];

let fallos = 0;
const lineas = [];
const ok = (s) => lineas.push(`OK     ${s}`);
const ko = (s) => {
  fallos++;
  lineas.push(`FALLA  ${s}`);
};

for (const [desc, str, min] of requerido) {
  const n = contar(str);
  if (n >= min) ok(`${desc.padEnd(38)} "${str}" x${n} (min ${min})`);
  else ko(`${desc.padEnd(38)} FALTA "${str}" (encontrado ${n}, se esperaban >= ${min})`);
}

for (const [desc, str] of prohibido) {
  const n = contar(str);
  if (n === 0) ok(`${desc.padEnd(38)} ausente`);
  else ko(`${desc.padEnd(38)} APARECE x${n}: "${str}"`);
}

for (const [desc, str, exacto] of conteos) {
  const n = contar(str);
  if (n === exacto) ok(`${desc.padEnd(38)} ${str} x${n}`);
  else ko(`${desc.padEnd(38)} ${str} x${n} (se esperaba exactamente ${exacto})`);
}

console.log(lineas.join('\n'));
console.log(
  `\nHTML renderizado: ${html.length} chars | aserciones: ${
    requerido.length + prohibido.length + conteos.length
  } | fallos: ${fallos}`
);
console.log(fallos === 0 ? 'RENDER OK' : `${fallos} ASERCIÓN(ES) CON FALLA`);
process.exit(fallos === 0 ? 0 : 1);
