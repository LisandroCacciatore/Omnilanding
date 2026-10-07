export const about = {
  badge: 'Available for advisory & QA engagements',
  headline: 'Lisandro Cacciatore',
  subheadline: 'Quality & Reliability for AI Systems | Sports Performance Analytics',
  thesis: 'I work at the intersection of quality, data, and artificial intelligence.',
  narrative: [
    { text: 'My career has two tracks that share the exact same foundation: rigor, empirical evidence, and systems thinking.' },
    { text: 'In software quality and AI evaluation, I help engineering teams validate complex environments — ranging from autonomous LLM agents to distributed enterprise integrations. I design deterministic evaluation frameworks, interrogate APIs, benchmark data pipelines, and verify that mission-critical infrastructure performs predictably at scale.' },
    { text: 'In sports performance, I leverage 15+ years of practical coaching and competitive mastery across strength training, powerlifting, Brazilian Jiu-Jitsu, MMA, and rugby. Having managed facility training programs and athlete rosters, I build specialized analytics instruments that convert physical metrics into actionable intelligence for coaches.' },
  ],
  quote: 'The common thread: I build systems that help people make better decisions.',
  tracks: [
    { id: 'qa', label: 'Systems track', value: '6+ yrs QA & AI Eval', sub: 'Autonomous agent rigor', accent: 'primary' },
    { id: 'sport', label: 'Sports track', value: '15+ yrs Athletic Perf', sub: 'S&C coach / Analytics', accent: 'secondary' },
  ],
  base: { label: 'Operating base', value: 'Buenos Aires, AR' },
};

export const domains = [
  {
    id: 'qa',
    label: 'Systems & Quality',
    tag: 'Engineering track',
    accent: 'primary',
    title: 'AI Agent Validation & Quality Engineering',
    description: 'Systematic stress testing, API boundary verification, and regression controls for non-deterministic AI pipelines, retrieval systems, and core enterprise products.',
    bullets: [
      'Automated E2E & API integration frameworks',
      'LLM output evaluation, groundedness & safety guards',
      'Data consistency audits & enterprise integration',
    ],
    chart: { type: 'bars', label: 'Evaluation coverage', value: 'Continuous' },
  },
  {
    id: 'sport',
    label: 'Sports Performance',
    tag: 'Athletic track',
    accent: 'secondary',
    title: 'Strength Science & Telemetry Analytics',
    description: '15+ years directing strength systems, managing athlete readiness protocols, and developing specialized diagnostic software for high-output physical disciplines.',
    bullets: [
      'Strength & conditioning for rugby, BJJ & combat sports',
      'Sports Performance Analytics platform (in development)',
      'Keynote: "AI Applied to Sports" & predictive load modeling',
    ],
    chart: { type: 'sparkline', label: 'Applied experience', value: '15+ yrs' },
  },
];

export const experience = [
  { id: 'prisma', category: 'Enterprise systems', role: 'Senior QA', title: 'Prisma', description: 'Architected test matrices, verified transaction reliability, and governed API endpoints for financial and payment processing rails.', tags: ['Integration QA', 'Payment Rails'], accent: 'primary' },
  { id: 'udla', category: 'Academic & tech', role: 'QA Consultant', title: 'UDLA', description: 'Engineered evaluation standards, automated acceptance routines, and provided structural oversight on academic management platforms.', tags: ['System Auditing', 'Web Services'], accent: 'primary' },
  { id: 'cyrion', category: 'Infrastructure', role: 'QA Lead', title: 'Cyrion', description: 'Lead QA responsibilities for complex software systems, cross-stack integrations, and client delivery verification protocols.', tags: ['Automated Testing', 'Release Cycles'], accent: 'primary' },
  { id: 'upex', category: 'Community & mentorship', role: 'Technical Lead', title: 'UPEX', description: 'Trained QA engineers on modern verification pipelines, exploratory methodologies, and high-impact defect lifecycle management.', tags: ['Mentorship', 'QA Operations'], accent: 'primary' },
  { id: 'testbirds', category: 'Global testing', role: 'Crowdtest Specialist', title: 'Testbirds', description: 'Conducted global device-matrix exploratory sessions, usability telemetry reporting, and edge-case regression validation.', tags: ['Multi-device QA', 'Bug Verification'], accent: 'primary' },
  { id: 'jockey', category: 'Athletic institution', role: 'Strength & Conditioning', title: 'Jockey Club Rosario', description: 'Coordinated physical training facilities, managed instructors, and directed conditioning programs for rugby and high-performance athletes.', tags: ['Rugby S&C', 'Team Direction'], accent: 'secondary' },
];

export const certifications = [
  { id: 'sf-ai', issuer: 'Salesforce', icon: 'psychology', accent: 'primary', title: 'Salesforce AI Associate', description: 'AI Ethics, CRM Grounding & Data Governance' },
  { id: 'sf-assoc', issuer: 'Salesforce', icon: 'cloud_done', accent: 'primary', title: 'Salesforce Associate', description: 'Architecture, Data Models & User Security' },
  { id: 'gcp-dl', issuer: 'Google Cloud', icon: 'hub', accent: 'secondary', title: 'Cloud Digital Leader', description: 'Cloud Architecture, Data Transformation & Security' },
  { id: 'g-ai', issuer: 'Google', icon: 'memory', accent: 'secondary', title: 'Google AI Essentials', description: 'Generative Tools, Prompt Engineering & Operational QA' },
];

export const languages = [
  { id: 'es', name: 'Spanish', level: 'Native', note: 'Full professional & cultural proficiency', progress: 100, accent: 'primary' },
  { id: 'en', name: 'English', level: 'B2 Upper Intermediate', note: 'Technical architectural writing & executive delivery', progress: 78, accent: 'secondary' },
];