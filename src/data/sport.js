export const sportHero = {
  badge: 'Sports Performance · Biomechanical telemetry',
  headline: 'Sports Performance Analytics',
  subheadline: 'Transforming training and performance data into actionable insights.',
  lead: 'Strength. Combat sports. Rugby. Data-driven decisions for coaches, athletes, and high-performance organizations.',
  ctas: [
    { label: 'View Projects', to: '#projects' },
    { label: 'Get in touch', to: '/contact', accent: 'ghost' },
  ],
  microBadges: [
    { value: '15+ yrs', label: 'Coaching in the field', accent: 'primary' },
    { value: 'ACWR & VBT', label: 'Biomechanical telemetry', accent: 'secondary' },
    { value: 'AI models', label: 'Predictive workflows', accent: 'tertiary' },
  ],
  dashboard: {
    title: 'Telemetry stream',
    status: 'Live preview',
    source: 'S&C Department',
    acwr: {
      label: 'Readiness index · ACWR',
      value: '1.12',
      window: 'Optimal window (0.8 – 1.3)',
      acute: 'Acute: 1,480 AU',
      chronic: 'Chronic: 1,320 AU',
      progress: 68,
    },
    chart: { title: '7-Day workload distribution', subtitle: 'Bar velocity vs fatigue' },
    stats: [
      { label: 'Monitored athletes', value: '284', note: 'Active across 3 pods' },
      { label: 'Preventive alerts', value: '3 flagged', note: 'Spike > 1.45 ACWR', accent: 'primary', icon: 'warning' },
    ],
    footer: [
      { icon: 'speed', text: 'Bar speed: 0.78 m/s (@85% 1RM)' },
      { text: 'Normal CNS state', accent: 'tertiary' },
    ],
  },
};

export const sportProblem = {
  label: 'The reality of modern S&C',
  title: 'Coaches deserve better tools.',
  visual: [
    { icon: 'chat', title: 'WhatsApp voice notes & DMs', description: 'Subjective fatigue shared haphazardly minutes before training sessions.' },
    { icon: 'table_chart', title: 'Disconnected spreadsheets', description: 'Dozens of Google Sheets with broken formulas and siloed gym metrics.' },
    { icon: 'psychology', title: 'Mental memory fallback', description: 'Coaches forced to remember athlete tweaks instead of running unified protocols.' },
  ],
  copy: {
    eyebrow: 'Critical friction',
    paragraphs: [
      { emphasis: true, text: 'Most performance data lives in spreadsheets, WhatsApp messages, and memory.' },
      { text: 'Training loads, readiness, fatigue, progress — all disconnected.' },
      { emphasis: true, accent: 'secondary', text: "I'm building systems that connect sports knowledge, performance data, software, and AI." },
      { text: 'Not to replace the coach. To give them better questions and better answers.' },
    ],
    footer: 'Empowering coaches with systematic clarity',
  },
};

export const sportBuilding = {
  label: 'Product architecture',
  title: 'Sports Performance Analytics SaaS',
  intro: 'Built from 15+ years of coaching experience and 6+ years of data & software quality.',
  modules: [
    { icon: 'directions_run', accent: 'primary', title: 'Athlete performance tracking', description: 'Continuous telemetry logging for power output, sprint mechanics, and velocity profiles across high-volume cycles.' },
    { icon: 'analytics', accent: 'secondary', title: 'Training data analysis', description: 'Consolidation of tonnage, sets, RPE distributions, and strain models with automated normalization routines.' },
    { icon: 'dashboard', accent: 'tertiary', title: 'Performance dashboards', description: 'Executive summary panels tailored for head coaches, technical staff, and medical personnel with role-based visibility.' },
    { icon: 'compare_arrows', accent: 'primary', title: 'Comparative analysis', description: 'Squad-wide benchmarking against positional standards, weight-class percentiles, and multi-season athlete trajectories.' },
    { icon: 'vital_signs', accent: 'secondary', title: 'Athlete monitoring', description: 'Daily wellness questionnaires, HRV syncing, neuromuscular check-ins, and soreness mapping seamlessly integrated.' },
    { icon: 'battery_charging_full', accent: 'tertiary', title: 'Readiness & load management', description: 'Dynamic Acute:Chronic Workload Ratio (ACWR) modeling preventing injury risk spikes while keeping stimulus sharp.' },
    { icon: 'smart_toy', accent: 'primary', title: 'AI-assisted analysis', description: 'Intelligent anomaly detection flagging micro-drops in concentric speed and neuromuscular fatigue before soreness appears.' },
    { icon: 'auto_awesome', accent: 'secondary', title: 'Automated insights', description: 'One-click briefing generation converting massive weekly session outputs into concise, readable coaching briefings.' },
    { icon: 'rule', accent: 'tertiary', title: 'Decision support', description: 'Scenario testing for deload timing, peak taper calibration for combat bouts, and in-game minute allocation for rugby squads.' },
  ],
};

export const sportProjects = {
  label: 'Applied practice',
  title: 'Selected Projects',
  intro: 'Real telemetry implementations, analytical models, and thought leadership.',
  items: [
    {
      id: 'arg',
      tag: 'Analytics Engine',
      accent: 'primary',
      ref: '01 // Independent',
      title: 'Arg_Plifting_Analysis',
      description: 'Independent sports analytics project analyzing Powerlifting performance data. Exploring athlete trends, competition results, and performance variables. Building visualizations and analytical models.',
      meta: [
        { label: 'Data vectors', value: 'Wilks/GL · 3-Lift Tonnage' },
        { label: 'Focus', value: 'Third attempt success probabilities' },
      ],
    },
    {
      id: 'rugby',
      tag: 'Performance Lab',
      accent: 'secondary',
      ref: '02 // Field sports',
      title: 'Rugby Físicos 2026',
      description: 'Sports performance analysis project focused on physical-performance data in Rugby. Organizing, analyzing, and transforming raw measurements into useful coaching information.',
      meta: [
        { label: 'Data vectors', value: 'MAS · GPS Distance · Repeated Sprint' },
        { label: 'Output', value: 'Positional conditioning dashboards' },
      ],
    },
    {
      id: 'talks',
      tag: 'Keynote / Thought leadership',
      accent: 'tertiary',
      ref: '03 // Talks',
      title: 'AI Applied to Sports (Speaker)',
      description: 'Delivering talks on practical applications of AI in sports performance. Exploring AI agents, LLM-based workflows, automated reporting, and decision-support systems.',
      meta: [
        { label: 'Topics', value: 'RAG over GPS logs · Agentic coaching' },
        { label: 'Format', value: 'Workshops & executive panels' },
      ],
    },
  ],
};

export const sportExperience = {
  label: 'Pedigree & practice',
  title: '15+ Years in Athletic Performance',
  disciplines: ['Powerlifting', 'Brazilian Jiu-Jitsu', 'Grappling', 'MMA', 'Rugby'],
  role: {
    title: 'Jockey Club Rosario — Gym & Physical Training Coordination',
    period: '2020 – Present',
    bullets: [
      'Coordinate 12 instructors across 3 training facilities',
      'Support 250–300 members',
      'Manage schedules, staff, equipment, and budget',
      'Contribute to training process development',
    ],
  },
  philosophy: {
    label: 'Coaching philosophy',
    quote: 'Practical coaching experience combined with structured analysis of training and performance data.',
  },
  leadershipBadge: {
    label: 'Institutional leadership',
    value: 'Jockey Club Rosario',
    sub: '250–300 members · 3 facilities',
  },
};

export const sportCrossLink = {
  text: 'See my work in AI Quality & Evaluation',
  cta: { label: 'Explore QA & AI Portal', to: '/qa-ai' },
  contact: {
    title: "Let's talk.",
    description: "Whether you're a coach, a club, or a sports tech company — I'd like to hear what you're working on.",
    cta: { label: 'Contact me', to: '/contact' },
  },
  community: {
    text: 'Follow',
    handle: '@escueladefuerza',
    href: 'https://instagram.com/escueladefuerza',
    suffix: 'for training content and product updates.',
  },
};