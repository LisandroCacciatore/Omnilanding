// ============================================================
// EDITAR ACÁ LOS LINKS DE CONVERSIÓN
// ============================================================
const CALCOM_URL = 'https://cal.com/lcacciatore/30min'; // ← tu link real
const CONTACT_EMAIL = 'hello@lcacciatore.com';           // ← tu email real
// ============================================================

export const qaHero = {
  badge: 'Evaluación de IA · Confiabilidad de sistemas',
  headline: 'Tu producto de IA funciona en el demo. ¿Y en producción un martes a las 3 AM?',
  subheadline:
    'Diseño marcos de evaluación, validación de APIs y controles de confiabilidad para sistemas AI-first que no pueden fallar. Agentes, LLMs y las integraciones empresariales alrededor de ellos.',
  primaryCta: { label: 'Agendar diagnóstico de 30 min', href: CALCOM_URL, icon: 'arrow_forward' },
  secondaryCta: { label: 'Ver cómo trabajo', href: '#process', icon: 'arrow_downward', accent: 'secondary' },
  highlights: [
    { label: '6+ años', sub: 'QA & evaluación de IA' },
    { label: 'Enterprise', sub: 'Agentes · ERP · CRM' },
    { label: 'Remoto', sub: 'LATAM · US · Europa' },
  ],
};

export const qaProblem = {
  label: '// Lo que suele pasar',
  title: 'Tres síntomas que indican que tu sistema de IA no tiene evaluación real.',
  items: [
    {
      title: 'Funciona, pero no sabés por qué.',
      description:
        'La calidad del output varía de una corrida a otra y no hay una línea base que diga cómo se ve "bien".',
    },
    {
      title: 'Los bugs aparecen en producción, no en los tests.',
      description:
        'Tu suite valida software, no comportamiento de LLMs. Cada deploy es una pequeña apuesta.',
    },
    {
      title: 'Nadie puede explicar un fallo en el post-mortem.',
      description:
        'Sin traza del prompt, del tool call o del camino de decisión. El agente hizo algo y nadie sabe qué.',
    },
  ],
};

export const qaServices = {
  label: '// Qué hago',
  title: 'Dos formas de trabajar, según dónde estés.',
  offers: [
    {
      tag: 'Gratis',
      title: 'Llamada de diagnóstico',
      description:
        'Una conversación enfocada de 30 minutos sobre tu sistema de IA: qué hace, dónde se rompe, y si la evaluación vale la pena invertirla ahora. Sin pitch.',
      meta: ['30 minutos', 'Videollamada', 'Resumen escrito incluido'],
      cta: { label: 'Agendar la llamada', href: CALCOM_URL },
    },
    {
      tag: 'A medida',
      title: 'Taller de Shift-Left Testing',
      description:
        'Un taller práctico con tu equipo. Tomamos un flujo real — un agente, una feature con LLM, una integración crítica — y construimos el harness de evaluación juntos.',
      meta: ['1–3 días', 'Remoto o presencial', 'El harness es tuyo al terminar'],
      cta: { label: 'Coordinar taller', href: CALCOM_URL },
    },
    {
      tag: 'Retainer',
      title: 'Partner de evaluación embebido',
      description:
        'Arquitectura de evaluación continua para equipos que shippean IA de forma constante. Me sumo a tus rituales, reviso diseños y mantengo el harness honesto a medida que el producto evoluciona.',
      meta: ['3–6 meses', 'Cadencia semanal', 'Acceso directo a tu equipo'],
      cta: { label: 'Hablar de retainer', href: CALCOM_URL },
    },
  ],
};

export const qaCaseStudies = {
  label: '// Evidencia',
  title: 'Cómo se ve esto en la práctica.',
  items: [
    {
      id: 'hermes',
      tag: 'Plataforma insignia',
      title: 'Hermes — Plataforma de agentes de IA y automatización',
      description:
        'Diseñé los criterios de evaluación para flujos agénticos y apliqué Specification-Driven Development para definir comportamiento antes de la implementación. Reversibilidad y rollback pasaron a ser de primera clase, no un afterthought.',
      tags: ['Evaluación de agentes', 'SDD', 'Reversibilidad'],
    },
    {
      id: 'prisma',
      tag: 'Enterprise',
      title: 'Prisma — Reingeniería de procesos Salesforce',
      description:
        'Rediseñé la estrategia de testing para procesos críticos del negocio. Prácticas Shift-Left aplicadas a lo largo del ciclo de requisitos.',
      tags: ['Shift-Left', 'Rediseño de procesos'],
    },
    {
      id: 'udla',
      tag: 'Integración',
      title: 'UDLA — Integración de ERP empresarial',
      description:
        'Validación de APIs REST y SOAP. Paridad de datos verificada de punta a punta entre sistemas legados.',
      tags: ['Testing de APIs', 'Paridad de datos'],
    },
  ],
};

export const qaProcess = {
  label: '// Cómo trabajamos juntos',
  title: 'Sin sorpresas. Cuatro pasos.',
  steps: [
    {
      title: 'Llamada de diagnóstico',
      description: 'Describís el sistema. Yo hago las preguntas que haría un QA lead. Decidimos si hay encaje.',
      meta: '30 min · Gratis',
    },
    {
      title: 'Dirección por escrito',
      description: 'Un documento corto: qué veo, qué haría primero y cuánto cuesta. Sin slide deck.',
      meta: 'En 48 h',
    },
    {
      title: 'Ejecución',
      description: 'Se ejecuta contra un scope definido. Check-ins semanales. Entregables en tu repo, no en un Notion.',
      meta: 'Auditoría · Taller · Retainer',
    },
    {
      title: 'Handoff',
      description: 'Tu equipo corre el harness sin mí. Ese es el objetivo. No la dependencia.',
      meta: 'Entregables listos',
    },
  ],
};

export const qaFaq = {
  label: '// Preguntas que vale la pena hacerse',
  title: 'FAQ',
  items: [
    {
      question: '¿Trabajás con equipos fuera de Argentina?',
      answer: 'Sí. Remoto. He entregado para equipos en LATAM, US y Europa.',
    },
    {
      question: '¿Cuál es tu stack?',
      answer:
        'Playwright, Cypress, Postman, JIRA, Xray, SQL, MongoDB, Looker y marcos de evaluación de LLMs y agentes. Con el stack que ya use tu equipo, me adapto.',
    },
    {
      question: '¿Qué tan rápido podés empezar?',
      answer:
        'Las llamadas de diagnóstico suelen ser dentro de una semana. Los talleres se agendan a 2–3 semanas.',
    },
    {
      question: '¿Firmás NDAs?',
      answer:
        'Sí, estándar. También puedo trabajar bajo tu acuerdo de proveedor existente.',
    },
    {
      question: '¿Y si mi equipo no está listo para un marco de evaluación completo?',
      answer:
        'Está bien. Muchas veces la llamada de diagnóstico sola destraba más que una auditoría completa. Hacemos el scope según tu madurez real, no según un checklist.',
    },
  ],
};

export const qaFinalCta = {
  headline: 'Si no se puede medir, no se puede confiar.',
  subhead: '30 minutos. Sin pitch. Te vas con una dirección.',
  cta: { label: 'Agendar tu llamada de diagnóstico', href: CALCOM_URL },
  email: CONTACT_EMAIL,
};