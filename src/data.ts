// ─────────────────────────────────────────────────────────────
// Edit everything in this file to update your resume.
// Anything wrapped in [ ] is a placeholder — fill in your own
// details before deploying. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ravinsan',
  role: 'Frontend Engineer → ML/AI Engineer in transition',
  location: 'Dubai, UAE',
  email: '[your.email@example.com]',
  github: '[github.com/yourhandle]',
  linkedin: '[linkedin.com/in/yourhandle]',
  summary:
    'Frontend engineer with 5+ years building production React/TypeScript applications, currently executing a structured, self-directed transition into ML/AI engineering — pairing hands-on coursework with a working understanding of how the systems I already build will need to change.',
};

export const experience = [
  {
    company: 'Masreq bank Global HQ dubai',
    role: 'Frontend Engineer',
    period: 'May-2023 — Present',
    context: 'Large-scale enterprise SME banking onboarding application',
    bullets: [
      'Built and maintained complex React Hook Form flows across a MUI-based enterprise component library, shipping onboarding features used across a full SME banking application.',
      'Wrote comprehensive Jest test suites targeting 100% coverage on high-complexity form components, surfacing and fixing real production bugs in the process (signature handling, file-type detection).',
      'Reduced Sonar duplication findings by extracting shared layout and field components used across document, governance, and ownership-detail tables.',
      'Handled Arabic text sanitization, responsive layout fixes, and document-ordering logic for a bilingual (EN/AR) enterprise product.',
    ],
    stack: ['React', 'TypeScript', 'React Hook Form', 'MUI', 'Jest'],
  },
  {
    company: 'SenzMate IoT Intelligence',
    role: '[Previous role]',
    period: 'May-2017 — April-2023',
    context: '[One line on what this role covered]',
    bullets: ['[Add earlier experience here, or delete this entry]'],
    stack: [],
  },
];

export const transition = {
  heading: 'ML/AI transition — in progress',
  intro:
    'Running a phased, self-directed curriculum toward an ML/AI engineering role by early 2027: Python fundamentals → core ML theory → applied agents/RAG → portfolio.',
  items: [
    {
      title: 'Hugging Face Agents Course',
      detail:
        'Working through the full course; Unit 4 final assignment involves building and deploying a smolagents-based agent against the GAIA benchmark scoring API, including HF OAuth and Space deployment.',
    },
    {
      title: "Andrew Ng's ML Specialization",
      detail:
        'Implementing core algorithms from scratch in NumPy — linear and logistic regression — alongside the theory.',
    },
    {
      title: 'Python for ML — 7-day intensive',
      detail:
        'NumPy, Pandas, control flow, functions and decorators, worked through with ML-framed exercises.',
    },
    {
      title: 'Applied agents & RAG',
      detail:
        'Conceptual and applied work across LangChain, smolagents, embeddings, clustering, and neural network fundamentals; building a 16-week roadmap centered on RAG systems, evals, and prompt engineering.',
    },
  ],
};

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'React Hook Form', 'MUI', 'Jest', 'Responsive UI'],
  },
  {
    group: 'ML / AI (in progress)',
    items: ['Python', 'NumPy', 'Pandas', 'LangChain', 'smolagents', 'RAG', 'Embeddings'],
  },
  {
    group: 'Practices',
    items: ['Test-driven development', 'Code review', 'Component architecture'],
  },
];

export const education = [
  {
    title: 'Btech in Material engineering',
    org: 'Uva wellassa university',
    period: '2013-2017',
  },
];
