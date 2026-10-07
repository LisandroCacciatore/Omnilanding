export const site = {
  name: 'Lisandro Cacciatore',
  role: 'Senior QA Analyst · Software Quality',
  statusChip: 'AVAILABLE FOR WORK',
  ctaLabel: 'Get in touch',
  contact: {
    linkedin: 'https://linkedin.com/in/lisandrocacciatore/',
    linkedinLabel: 'linkedin.com/in/lisandrocacciatore',
    github: 'https://github.com/LisandroCacciatore',
    githubLabel: 'github.com/LisandroCacciatore',
    email: 'lisandrocacciatore@gmail.com',
  },
};

export const nav = [
  { label: 'Quality Mindset', to: '#quality-mindset' },
  { label: 'Expected vs Actual', to: '#expected-vs-actual' },
  { label: 'Software Quality', to: '#software-quality' },
  { label: 'AI Evaluation', to: '#ai-evaluation' },
  { label: 'Projects', to: '#projects' },
  { label: 'Experience', to: '#experience' },
  { label: 'About & Contact', to: '#contact' },
];

export const heroPipeline = [
  'SPECIFICATION',
  'EXPECTED BEHAVIOR',
  'SYSTEM EXECUTION',
  'OBSERVED BEHAVIOR',
  'EVALUATION',
  'FEEDBACK',
];

export const heroExpected = [
  'Task completed',
  'Data persisted',
  'API response valid',
  'Business rule respected',
];

export const heroObserved = [
  { text: 'Task completed', status: 'pass' },
  { text: 'Unexpected edge case', status: 'warn' },
  { text: 'API response valid', status: 'pass' },
  { text: 'Business rule violated', status: 'fail' },
];

export const qualityMindset = [
  {
    num: '01',
    icon: 'psychology',
    title: 'Understand',
    body: 'Requirements, business rules, workflows and expected outcomes.',
  },
  {
    num: '02',
    icon: 'rule_folder',
    title: 'Define',
    body: 'Acceptance criteria and measurable expectations.',
  },
  {
    num: '03',
    icon: 'biotech',
    title: 'Evaluate',
    body: 'Functional behavior, integrations, data, edge cases and failure modes.',
  },
  {
    num: '04',
    icon: 'sync',
    title: 'Improve',
    body: 'Structured feedback, defect analysis and quality feedback loops.',
  },
];

export const expectedFlow = [
  'User submits request',
  'Validation succeeds',
  'API processes request',
  'Data is persisted',
  'Confirmation shown',
];

export const observedFlow = [
  { text: 'User submits request', status: 'pass' },
  { text: 'Validation succeeds', status: 'pass' },
  { text: 'API processes request', status: 'pass' },
  { text: 'Data persisted', status: 'pass' },
  { text: 'Confirmation delayed', status: 'warn' },
  { text: 'Edge case discovered', status: 'fail' },
];
