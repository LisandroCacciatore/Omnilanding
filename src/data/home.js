export const hero = {
  badge: 'Dos disciplinas · Una metodología rigurosa',
  headline: 'Lisandro Cacciatore',
  subheadline: 'Calidad y confiabilidad para sistemas de IA | Analítica de rendimiento deportivo',
  lead: '15+ años en rendimiento deportivo. 6+ años en calidad de software y evaluación de IA. Construyo sistemas confiables en la intersección de datos, IA y rendimiento humano.',
  quote: 'Dos disciplinas. Un enfoque: rigor, evidencia y sistemas que funcionan.',
  metrics: [
    { label: 'Experiencia · Deporte', value: '15+ años', accent: 'secondary' },
    { label: 'Experiencia · QA & IA', value: '06+ años', accent: 'primary' },
  ],
  ctas: [
    { label: 'Calidad & Evaluación de IA', to: '/qa-ai', icon: 'terminal', accent: 'primary' },
    { label: 'Analítica de Rendimiento Deportivo', to: '/sport', icon: 'monitoring', accent: 'secondary' },
  ],
};

export const pillars = {
  label: '// Pilares operativos',
  title: 'Qué hago',
  intro: 'Verificación de precisión para inteligencia artificial de alta consecuencia y telemetría biomecánica sistemática.',
  cards: [
    {
      id: 'qa',
      tag: 'Arq // QA.IA-ENG',
      icon: 'memory',
      accent: 'primary',
      title: 'Calidad & Evaluación de IA',
      description: 'Asegurando que sistemas de IA, agentes y software complejo funcionen como se espera. Marcos de evaluación, testing de APIs, validación de datos y confiabilidad para productos AI-first.',
      capabilities: [
        'Evaluación y benchmarking de agentes de IA',
        'Validación de flujos con LLMs',
        'Testing de APIs e integraciones',
        'Calidad e integridad de datos',
        'Shift Left y estrategia de calidad',
      ],
      cta: { label: 'Ver QA & IA', to: '/qa-ai' },
      chart: { type: 'bars', label: 'Cobertura de evaluación', value: 'Continua' },
    },
    {
      id: 'sport',
      tag: 'Bio // PERF.DATOS',
      icon: 'fitness_center',
      accent: 'secondary',
      title: 'Analítica de Rendimiento Deportivo',
      description: 'Transformando datos de entrenamiento y rendimiento en información accionable para atletas, coaches y organizaciones. Fuerza, deportes de combate y rugby.',
      capabilities: [
        'Seguimiento y monitoreo de rendimiento',
        'Análisis de datos de entrenamiento',
        'Insights asistidos por IA para coaches',
        'Readiness y manejo de carga',
        'Soporte a la decisión basado en datos',
      ],
      cta: { label: 'Explorar Analítica Deportiva', to: '/sport' },
      chart: { type: 'sparkline', label: 'Telemetría atlética', value: '15+ años aplicados' },
    },
  ],
};

export const aboutPreview = {
  label: '// Dossier ejecutivo',
  title: 'Sobre Lisandro Cacciatore',
  credentials: [
    'Ingeniero de QA & Confiabilidad',
    'Coach de Rendimiento Deportivo',
    'Fundador de @escueladefuerza',
  ],
  narrative: [
    { emphasis: true, text: 'Trabajo en la intersección de calidad, datos e inteligencia artificial.' },
    { text: 'En software, aplico evaluación rigurosa para validar sistemas complejos — desde agentes de IA hasta integraciones empresariales. En deporte, aplico ese mismo rigor para transformar datos de rendimiento en información útil para coaches y atletas.' },
    { text: 'Mi formación combina 15+ años en entrenamiento de fuerza y rendimiento deportivo en powerlifting, BJJ, MMA y rugby, con 6+ años en calidad de software, análisis de datos y evaluación de IA.' },
    { text: 'Construyo sistemas que ayudan a las personas a tomar mejores decisiones — sea un equipo de QA entregando IA confiable o un coach entendiendo el readiness de un atleta.' },
  ],
  cta: { label: 'Ver perfil completo', to: '/about' },
};

export const convergence = {
  label: '// Paralelo entre dominios',
  title: 'La convergencia entre evaluación y diagnóstico',
  sub: 'Rigor empírico en ambos dominios',
  columns: ['Dimensión', 'Software y sistemas de IA', 'Rendimiento deportivo'],
  rows: [
    { dimension: 'Objetivo principal', qa: 'Confiabilidad determinista y minimización de alucinaciones', sport: 'Readiness neuromuscular y maximización de adaptación' },
    { dimension: 'Motor de métricas', qa: 'Latencia, precisión, varianza semántica, estabilidad de APIs', sport: 'ACWR, variabilidad de frecuencia cardíaca, velocidad de barra, tonelaje' },
    { dimension: 'Mitigación de fallas', qa: 'Suites automatizadas shift-left, contratos de regresión', sport: 'Regulación de fatiga, descargas de volumen, manejo de riesgo de lesión' },
    { dimension: 'Resultado', qa: 'Confianza en producción de alta consecuencia', sport: 'Pico competitivo sostenido' },
  ],
};