export const projects = [
  {
    id: 'hermes',
    label: 'PROJECT / HERMES',
    tag: 'Independent Project',
    title: 'HERMES — AI Agent & Automation Platform',
    description:
      'An independent project exploring agentic workflows, task orchestration, structured agent behavior and evaluation.',
    cta: { type: 'disabled', label: 'Case study coming', icon: 'pending' },
    pipeline: [
      'USER REQUEST',
      'SPECIFICATION',
      'AGENT',
      'TOOLS',
      'WORKFLOW',
      'OBSERVATION',
      'EVALUATION',
    ],
    pipelineEmphasis: { AGENT: 'primary', EVALUATION: 'green' },
    breakdown: [
      {
        dotColor: 'primary',
        label: 'Specification',
        body: 'Define what the system should accomplish.',
      },
      {
        dotColor: 'secondary',
        label: 'Execution',
        body: 'Observe how the agent actually behaves.',
      },
      {
        dotColor: 'green',
        label: 'Evaluation',
        body: 'Compare observed behavior against expected outcomes.',
      },
    ],
  },
  {
    id: 'sports',
    label: 'PROJECT / SPORTS ANALYTICS',
    tag: 'Independent SaaS',
    title: 'Building systems where data has consequences.',
    description:
      'An independent SaaS project focused on sports performance analytics, combining data, workflows, product requirements and automation.',
    cta: {
      type: 'link',
      label: 'View project',
      icon: 'arrow_forward',
      href: 'https://lisandrocacciatore.github.io/Arg_Plifting_Analysis/',
    },
    methodology: [
      {
        num: '01',
        dotColor: 'primary',
        label: 'Requirements',
        body: 'Product rules, workflows and expected system behavior defined before implementation.',
      },
      {
        num: '02',
        dotColor: 'primary',
        label: 'Data',
        body: 'Athlete metrics, workload, session history and progression tracked as first-class data.',
      },
      {
        num: '03',
        dotColor: 'primary',
        label: 'Evaluation',
        body: 'Expected vs observed behavior, edge cases, data integrity and failure modes.',
      },
      {
        num: '04',
        dotColor: 'green',
        label: 'Decision',
        body: 'Actionable output from validated data, not from assumptions.',
      },
    ],
  },
];
