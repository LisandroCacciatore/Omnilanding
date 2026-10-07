export const qaHero = {
  badge: 'Systems quality · AI evaluation architecture',
  headline: 'AI Quality & Evaluation',
  subheadline: 'Ensuring AI systems, agents, and complex software work as expected.',
  lead: 'Evaluation frameworks. API validation. Data integrity. Reliability engineering for high-assurance enterprise systems.',
  ctas: [
    { label: 'View Services', to: '#services', icon: 'arrow_forward' },
    { label: 'See Case Studies', to: '#case-studies', icon: 'arrow_downward', accent: 'secondary' },
  ],
  panel: {
    title: 'Reliability posture',
    status: 'Available',
    metrics: [
      { label: 'Methodological framework', value: 'SDD active', note: 'Formal behavioral boundaries mapped before autonomous execution' },
      { label: 'Shift-left practice', value: 'Design-time validation', note: 'Defect discovery moved upstream into the requirements cycle' },
      { label: 'Enterprise parity', value: 'ERP & pipelines', note: 'Cross-system data consistency across connected platforms' },
    ],
    footer: ['Deterministic guardrails', 'Zero hallucination tolerance'],
  },
};

export const qaServices = {
  label: '01 // Core competencies',
  title: 'What I Offer',
  intro: 'End-to-end evaluation architecture, deterministic test harnesses, and structural resilience for agentic stacks and enterprise data flows.',
  items: [
    { id: 'agent-eval', icon: 'neurology', tag: 'Agentic architecture', title: 'AI Agent Evaluation', description: 'Designing evaluation criteria for agentic systems: task delegation, workflow reliability, expected outcomes, edge cases, and failure modes.', footer: 'Multi-turn agent auditing' },
    { id: 'llm-val', icon: 'psychology', tag: 'Inference quality', title: 'LLM Workflow Validation', description: 'Testing LLM-based applications for accuracy, consistency, bias, and production readiness. Structured evaluation of prompts, outputs, and integrations.', footer: 'RAG & context verification' },
    { id: 'api-int', icon: 'hub', tag: 'System integrity', title: 'API & Integration Testing', description: 'Validating REST and SOAP APIs, data flows, and system integrations. Ensuring data accuracy and integrity across connected systems.', footer: 'Contract & schema assurances' },
    { id: 'data-q', icon: 'database', tag: 'Data pipelines', title: 'Data Quality & Validation', description: 'SQL, MySQL, MongoDB, Elasticsearch. Validating data pipelines, transformations, and business logic across heterogeneous architectures.', footer: 'ETL anomaly detection' },
    { id: 'strategy', icon: 'rule', tag: 'Organizational rigor', title: 'Quality Strategy & Shift Left', description: 'Test strategy design, requirements validation, acceptance criteria, defect lifecycle management, and systematic process improvement.', footer: 'Early discovery architecture' },
    { id: 'sf-testing', icon: 'cloud_done', tag: 'Enterprise CRM', title: 'Salesforce Testing', description: 'Functional, regression, integration, and data validation across complex Salesforce environments, apex triggers, and custom flows.', footer: 'Multi-sandbox regression suites' },
  ],
};

export const qaCaseStudies = {
  label: '02 // Evidence in action',
  title: 'Case Studies',
  intro: 'Production-grade outcomes across autonomous agents, multi-record ERP re-architectures, and high-stakes enterprise systems.',
  featured: {
    badge: 'Flagship platform',
    ref: '01 // Autonomous evaluation',
    title: 'Hermes — AI Agent & Automation Platform',
    description: 'Designing evaluation criteria for agentic workflows, task orchestration, and structured AI behavior. Applying Specification-Driven Development (SDD) to define expected behavior before implementation.',
    specs: [
      { label: 'State verification', value: 'Deterministic', note: 'Multi-step rollback safety' },
      { label: 'Validation layer', value: 'Pre-execution', note: 'Structured SDD test harnesses' },
    ],
    pipeline: {
      title: 'SDD Execution & Telemetry Architecture',
      status: 'Audited pipeline',
      steps: [
        { n: 1, title: 'Specification (SDD)', subtitle: 'Formal contracts, inputs & guardrails', icon: 'lock', accent: 'primary' },
        { n: 2, title: 'Orchestrated execution', subtitle: 'Agentic reasoning & sub-task dispatch', icon: 'sync_alt', accent: 'primary' },
        { n: 3, title: 'Evaluation & reversibility', subtitle: 'Output scoring, latency & rollback', icon: 'done_all', accent: 'tertiary' },
      ],
      footer: [
        { label: 'Reversibility:', value: 'State-reversible by design' },
        { label: 'Latency contract:', value: 'Defined per workflow' },
      ],
    },
  },
  mosaic: [
    {
      id: 'prisma',
      ref: '02 // Process reengineering',
      icon: 'trending_down',
      title: 'Salesforce Process Reengineering (Prisma Project)',
      description: 'Designed and executed test strategies for business-critical processes. Applied Shift-Left practices to catch defects earlier in the lifecycle.',
      metric: { label: 'Approach', value: 'Shift Left' },
      footnote: 'Earlier defect discovery, cleaner production releases',
      accent: 'primary',
    },
    {
      id: 'udla',
      ref: '03 // Enterprise ERP parity',
      icon: 'sync',
      title: 'Salesforce Implementations (UDLA Project)',
      description: 'Testing strategies for complex integrations. REST and SOAP API validation. Data parity and consistency across legacy ERP systems.',
      metric: { label: 'Data parity', value: 'ERP-aligned' },
      footnote: 'Cross-system consistency verified end-to-end',
      accent: 'secondary',
    },
    {
      id: 'looker',
      ref: '04 // Telemetry & decision',
      icon: 'dashboard',
      title: 'Quality Dashboards (Looker)',
      description: 'Introduced interactive telemetry dashboards to support quality monitoring and team decision-making in real time.',
      metric: { label: 'Visibility', value: 'Real-time' },
      footnote: 'Dynamic defect lifecycle insights',
      accent: 'tertiary',
    },
  ],
};

export const qaTechStack = {
  label: '03 // Tooling ecosystem',
  title: 'Tools & Technologies',
  intro: 'A battle-tested stack combining modern AI evaluation harnesses with robust enterprise testing infrastructure.',
  categories: [
    { id: 'ai', icon: 'smart_toy', title: 'AI & Evaluation', accent: 'primary', items: ['LLM evaluation', 'Agent evaluation', 'SDD frameworks', 'MCP workflows'] },
    { id: 'testing', icon: 'terminal', title: 'Testing', accent: 'secondary', items: ['Playwright', 'Cypress', 'Katalon Studio', 'Postman', 'Insomnia'] },
    { id: 'data', icon: 'dataset', title: 'Data', accent: 'tertiary', items: ['SQL & MySQL', 'SOQL (Salesforce)', 'MongoDB', 'Elasticsearch'] },
    { id: 'platforms', icon: 'developer_board', title: 'Platforms', accent: 'primary', items: ['Salesforce Core', 'JIRA', 'Xray Test Mgmt', 'Looker'] },
    { id: 'methods', icon: 'schema', title: 'Methodologies', accent: 'secondary', items: ['Shift Left Testing', 'BDD Frameworks', 'Scrum Agile', 'Kanban Flow'] },
  ],
};

export const qaCrossLink = {
  text: 'Also working on Sports Performance Analytics',
  cta: { label: 'Explore Sports Analytics Portal', to: '/sport' },
  contact: {
    label: 'Get in touch',
    title: 'Need reliable AI or software quality?',
    description: 'I help teams design evaluation frameworks, validate AI systems, and ship with confidence.',
    cta: { label: 'Contact me', to: '/contact' },
    note: 'Estimated response within 24 business hours',
  },
};