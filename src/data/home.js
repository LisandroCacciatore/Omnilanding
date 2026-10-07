export const hero = {
  badge: 'Two disciplines · One rigorous methodology',
  headline: 'Lisandro Cacciatore',
  subheadline: 'Quality & Reliability for AI Systems | Sports Performance Analytics',
  lead: '15+ years in sports performance. 6+ years in software quality & AI evaluation. Building reliable systems at the intersection of data, AI, and human performance.',
  quote: 'Two disciplines. One approach: rigor, evidence, and systems that work.',
  metrics: [
    { label: 'Experience · Sports', value: '15+ yrs', accent: 'secondary' },
    { label: 'Experience · QA & AI', value: '06+ yrs', accent: 'primary' },
  ],
  ctas: [
    { label: 'AI Quality & Evaluation', to: '/qa-ai', icon: 'terminal', accent: 'primary' },
    { label: 'Sports Performance Analytics', to: '/sport', icon: 'monitoring', accent: 'secondary' },
  ],
};

export const pillars = {
  label: '// Operational pillars',
  title: 'What I Do',
  intro: 'Precision verification for high-consequence artificial intelligence and systematic bio-mechanical telemetry.',
  cards: [
    {
      id: 'qa',
      tag: 'Arch // QA.AI-ENG',
      icon: 'memory',
      accent: 'primary',
      title: 'AI Quality & Evaluation',
      description: 'Ensuring AI systems, agents, and complex software work as expected. Evaluation frameworks, API testing, data validation, and reliability engineering for AI-first products.',
      capabilities: [
        'AI agent evaluation & benchmarking',
        'LLM workflow validation',
        'API & integration testing',
        'Data quality & integrity',
        'Shift Left & quality strategy',
      ],
      cta: { label: 'Explore QA & AI', to: '/qa-ai' },
      chart: { type: 'bars', label: 'Evaluation coverage', value: 'Continuous' },
    },
    {
      id: 'sport',
      tag: 'Bio // PERF.DATA',
      icon: 'fitness_center',
      accent: 'secondary',
      title: 'Sports Performance Analytics',
      description: 'Transforming training and performance data into actionable insights for athletes, coaches, and organizations. Strength, combat sports, and rugby.',
      capabilities: [
        'Performance tracking & monitoring',
        'Training data analysis',
        'AI-assisted coaching insights',
        'Athlete readiness & load management',
        'Data-driven decision support',
      ],
      cta: { label: 'Explore Sports Analytics', to: '/sport' },
      chart: { type: 'sparkline', label: 'Athletic telemetry', value: '15+ yrs applied' },
    },
  ],
};

export const aboutPreview = {
  label: '// Executive dossier',
  title: 'About Lisandro Cacciatore',
  portrait: null,
  credentials: [
    'QA & Reliability Engineer',
    'Sports Performance Coach',
    'Founder @escueladefuerza',
  ],
  narrative: [
    { emphasis: true, text: 'I work at the intersection of quality, data, and artificial intelligence.' },
    { text: 'In software, I apply rigorous evaluation to validate complex systems — from AI agents to enterprise integrations. In sports, I apply that same rigor to transform performance data into useful information for coaches and athletes.' },
    { text: 'My background combines 15+ years in strength training and athletic performance across powerlifting, BJJ, MMA, and rugby, with 6+ years in software quality, data analysis, and AI evaluation.' },
    { text: "I build systems that help people make better decisions — whether that's a QA team shipping reliable AI or a coach understanding an athlete's readiness." },
  ],
  cta: { label: 'Read full profile', to: '/about' },
};

export const convergence = {
  label: '// Cross-domain parallel',
  title: 'The Convergence of Evaluation & Diagnostics',
  sub: 'Empirical rigor across both domains',
  columns: ['Dimension', 'Software & AI Systems', 'Athletic Performance'],
  rows: [
    { dimension: 'Primary goal', qa: 'Deterministic reliability & hallucination minimization', sport: 'Neuromuscular readiness & adaptation maximization' },
    { dimension: 'Metrics engine', qa: 'Latency, accuracy tokens, semantic variance, API stability', sport: 'ACWR, heart rate variability, barbell velocity, load tonnage' },
    { dimension: 'Failure mitigation', qa: 'Shift-left automated suites, regression contracts', sport: 'Fatigue regulation, volume deloading, injury risk management' },
    { dimension: 'Outcome', qa: 'High-consequence production confidence', sport: 'Sustained competitive athletic peak' },
  ],
};