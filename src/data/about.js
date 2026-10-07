export const about = {
  badge: 'Disponible para advisory y proyectos de QA',
  headline: 'Lisandro Cacciatore',
  subheadline: 'Calidad y confiabilidad para sistemas de IA | Analítica de rendimiento deportivo',
  thesis: 'Trabajo en la intersección de calidad, datos e inteligencia artificial.',
  narrative: [
    { text: 'Mi carrera tiene dos tracks que comparten la misma base: rigor, evidencia empírica y pensamiento sistémico.' },
    { text: 'En calidad de software y evaluación de IA, ayudo a equipos de ingeniería a validar entornos complejos — desde agentes autónomos basados en LLMs hasta integraciones empresariales distribuidas. Diseño marcos de evaluación deterministas, interrogo APIs, benchmarkeo pipelines de datos y verifico que la infraestructura crítica funcione de forma predecible a escala.' },
    { text: 'En rendimiento deportivo, aprovecho 15+ años de coaching práctico y experiencia competitiva en entrenamiento de fuerza, powerlifting, Brazilian Jiu-Jitsu, MMA y rugby. Habiendo gestionado programas de entrenamiento y planteles de atletas, construyo instrumentos de analítica especializados que convierten métricas físicas en inteligencia accionable para coaches.' },
  ],
  quote: 'El hilo conductor: construyo sistemas que ayudan a las personas a tomar mejores decisiones.',
  tracks: [
    { id: 'qa', label: 'Track sistemas', value: '6+ años QA & Eval IA', sub: 'Rigor en agentes autónomos', accent: 'primary' },
    { id: 'sport', label: 'Track deportivo', value: '15+ años Rendimiento', sub: 'Coach S&C / Analítica', accent: 'secondary' },
  ],
  base: { label: 'Base operativa', value: 'Buenos Aires, AR' },
};

export const domains = [
  {
    id: 'qa',
    label: 'Sistemas y calidad',
    tag: 'Track ingeniería',
    accent: 'primary',
    title: 'Validación de agentes de IA e ingeniería de calidad',
    description: 'Testing de estrés sistemático, verificación de límites de APIs y controles de regresión para pipelines de IA no deterministas, sistemas de retrieval y productos empresariales críticos.',
    bullets: [
      'Marcos de testing E2E y APIs automatizados',
      'Evaluación de outputs de LLMs, groundedness y guardrails',
      'Auditorías de consistencia de datos e integración empresarial',
    ],
    chart: { type: 'bars', label: 'Cobertura de evaluación', value: 'Continua' },
  },
  {
    id: 'sport',
    label: 'Rendimiento deportivo',
    tag: 'Track atlético',
    accent: 'secondary',
    title: 'Ciencia de la fuerza y analítica de telemetría',
    description: '15+ años dirigiendo sistemas de fuerza, gestionando protocolos de readiness de atletas y desarrollando software de diagnóstico especializado para disciplinas físicas de alto rendimiento.',
    bullets: [
      'Fuerza y acondicionamiento para rugby, BJJ y deportes de combate',
      'Plataforma de Analítica de Rendimiento Deportivo (en desarrollo)',
      'Charla: "IA aplicada al deporte" y modelos predictivos de carga',
    ],
    chart: { type: 'sparkline', label: 'Experiencia aplicada', value: '15+ años' },
  },
];

export const experience = [
  { id: 'prisma', category: 'Sistemas empresariales', role: 'QA Senior', title: 'Prisma', description: 'Arquitecturé matrices de testing, verifiqué confiabilidad de transacciones y goberné endpoints de APIs para procesos financieros y de pagos.', tags: ['QA de integración', 'Pagos'], accent: 'primary' },
  { id: 'udla', category: 'Académico y tech', role: 'Consultor QA', title: 'UDLA', description: 'Diseñé estándares de evaluación, automaticé rutinas de aceptación y proveí supervisión estructural en plataformas de gestión académica.', tags: ['Auditoría de sistemas', 'Web services'], accent: 'primary' },
  { id: 'cyrion', category: 'Infraestructura', role: 'QA Lead', title: 'Cyrion', description: 'Responsabilidades de liderazgo QA para sistemas de software complejos, integraciones cross-stack y protocolos de verificación de entregas a clientes.', tags: ['Testing automatizado', 'Ciclos de release'], accent: 'primary' },
  { id: 'upex', category: 'Comunidad y mentoría', role: 'Lead Técnico', title: 'UPEX', description: 'Formé ingenieros de QA en pipelines modernos de verificación, metodologías exploratorias y gestión del ciclo de vida de defectos.', tags: ['Mentoría', 'Operaciones QA'], accent: 'primary' },
  { id: 'testbirds', category: 'Testing global', role: 'Especialista Crowdtest', title: 'Testbirds', description: 'Conduje sesiones exploratorias en matrices globales de dispositivos, reportes de telemetría de usabilidad y validación de regresión de casos límite.', tags: ['QA multi-dispositivo', 'Verificación de bugs'], accent: 'primary' },
  { id: 'jockey', category: 'Institución deportiva', role: 'Fuerza y Acondicionamiento', title: 'Jockey Club Rosario', description: 'Coordiné instalaciones de entrenamiento físico, gestioné instructores y dirigí programas de acondicionamiento para rugby y atletas de alto rendimiento.', tags: ['Rugby S&C', 'Dirección de equipos'], accent: 'secondary' },
];

export const certifications = [
  { id: 'sf-ai', issuer: 'Salesforce', icon: 'psychology', accent: 'primary', title: 'Salesforce AI Associate', description: 'Ética de IA, grounding de CRM y gobernanza de datos' },
  { id: 'sf-assoc', issuer: 'Salesforce', icon: 'cloud_done', accent: 'primary', title: 'Salesforce Associate', description: 'Arquitectura, modelos de datos y seguridad de usuarios' },
  { id: 'gcp-dl', issuer: 'Google Cloud', icon: 'hub', accent: 'secondary', title: 'Cloud Digital Leader', description: 'Arquitectura cloud, transformación de datos y seguridad' },
  { id: 'g-ai', issuer: 'Google', icon: 'memory', accent: 'secondary', title: 'Google AI Essentials', description: 'Herramientas generativas, prompt engineering y QA operativa' },
];

export const languages = [
  { id: 'es', name: 'Español', level: 'Nativo', note: 'Competencia profesional y cultural completa', progress: 100, accent: 'primary' },
  { id: 'en', name: 'Inglés', level: 'B2 Intermedio alto', note: 'Escritura técnica y presentaciones ejecutivas', progress: 78, accent: 'secondary' },
];