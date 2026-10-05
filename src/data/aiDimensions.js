export const aiDimensions = [
  {
    num: 'DIMENSION 01',
    icon: 'checklist',
    title: 'Instruction Following',
    body: 'Does the system follow the intended instructions?',
    span: 1,
  },
  {
    num: 'DIMENSION 02',
    icon: 'task_alt',
    title: 'Task Completion',
    body: 'Does the agent actually achieve the requested outcome?',
    span: 1,
  },
  {
    num: 'DIMENSION 03',
    icon: 'verified',
    title: 'Reliability',
    body: 'Does the workflow behave consistently?',
    span: 1,
  },
  {
    num: 'DIMENSION 04',
    icon: 'warning',
    title: 'Failure Modes',
    body: 'What happens when the system encounters ambiguity, invalid input or unexpected conditions?',
    span: 1,
  },
  {
    num: 'DIMENSION 05',
    icon: 'construction',
    title: 'Tool / Workflow Behavior',
    body: 'Does the agent select and use tools correctly?',
    span: 2,
  },
];

export const evaluationFramework = {
  define: ['Expected behavior', 'Acceptance criteria', 'Edge cases', 'Failure modes'],
  observe: ['Task completion', 'Tool selection', 'Data consistency', 'Workflow reliability'],
  compare: ['Expected vs Observed', 'Signal vs Noise', 'Pass vs Fail vs Ambiguous'],
};
