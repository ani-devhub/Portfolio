import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    description:
      'Crafting responsive, performant, and accessible user interfaces with modern reactive paradigms and design systems.',
    icon: 'layout',
    skills: [
      { name: 'React', proficiency: 'Expert', highlighted: true, tag: 'Hooks, Suspense, State' },
      { name: 'Angular', proficiency: 'Expert', highlighted: true, tag: 'RxJS, Services, Modules' },
      { name: 'TypeScript', proficiency: 'Expert', highlighted: true, tag: 'Strict Typing, Generics' },
      { name: 'JavaScript (ES6+)', proficiency: 'Expert', highlighted: true, tag: 'Async/Await, DOM' },
      { name: 'RxJS', proficiency: 'Advanced', highlighted: false, tag: 'Observables, Streams' },
      { name: 'HTML5 & Semantic Web', proficiency: 'Expert', highlighted: false, tag: 'Accessibility, SEO' },
      { name: 'CSS3 / SCSS', proficiency: 'Advanced', highlighted: false, tag: 'Flexbox, Grid, Tokens' },
      { name: 'Tailwind CSS', proficiency: 'Advanced', highlighted: false, tag: 'Utility-first styling' },
      { name: 'Redux / Context API', proficiency: 'Advanced', highlighted: false, tag: 'Global State Management' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Engineering',
    description:
      'Architecting resilient RESTful APIs, asynchronous services, and secure authentication pipelines.',
    icon: 'server',
    skills: [
      { name: 'Node.js', proficiency: 'Advanced', highlighted: true, tag: 'Runtime, Event Loop' },
      { name: 'Python', proficiency: 'Advanced', highlighted: true, tag: 'Data structures, Scripts' },
      { name: 'FastAPI', proficiency: 'Advanced', highlighted: true, tag: 'Async APIs, Pydantic' },
      { name: 'Express.js', proficiency: 'Advanced', highlighted: false, tag: 'Routing, Middleware' },
      { name: 'RESTful API Design', proficiency: 'Expert', highlighted: true, tag: 'OpenAPI, Versioning' },
      { name: 'JWT & RBAC Security', proficiency: 'Advanced', highlighted: false, tag: 'Token auth, Roles' },
      { name: 'C# / ASP.NET', proficiency: 'Proficient', highlighted: false, tag: 'Enterprise backend' },
      { name: 'Socket.io', proficiency: 'Proficient', highlighted: false, tag: 'Real-time WebSockets' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data Modeling',
    description:
      'Designing robust data persistence layers, indexing strategies, and optimized query aggregation.',
    icon: 'database',
    skills: [
      { name: 'MongoDB', proficiency: 'Advanced', highlighted: true, tag: 'Aggregation, Indexing' },
      { name: 'MySQL / SQL', proficiency: 'Advanced', highlighted: true, tag: 'Relational schemas, Joins' },
      { name: 'Firebase Firestore', proficiency: 'Advanced', highlighted: false, tag: 'Realtime, Offline sync' },
      { name: 'Data Normalization', proficiency: 'Advanced', highlighted: false, tag: 'Schema optimization' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile & Cross-Platform',
    description:
      'Building cross-platform and native mobile experiences optimized for touch interactions and offline resilience.',
    icon: 'smartphone',
    skills: [
      { name: 'React Native', proficiency: 'Advanced', highlighted: true, tag: 'Cross-platform iOS/Android' },
      { name: 'Android SDK', proficiency: 'Proficient', highlighted: false, tag: 'Java, Native integration' },
      { name: 'Mobile UX & Responsive', proficiency: 'Expert', highlighted: true, tag: 'Touch targets, Gestures' },
    ],
  },
  {
    id: 'tooling',
    title: 'DevOps, Tooling & Practices',
    description:
      'Modern development tooling, version control workflows, automated linting, and containerization fundamentals.',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', proficiency: 'Expert', highlighted: true, tag: 'Branching, PRs, CI workflows' },
      { name: 'Vite & Build Tooling', proficiency: 'Advanced', highlighted: true, tag: 'Bundling, Optimization' },
      { name: 'Postman', proficiency: 'Advanced', highlighted: false, tag: 'API testing & Docs' },
      { name: 'Docker (Fundamentals)', proficiency: 'Proficient', highlighted: false, tag: 'Containers, Compose' },
      { name: 'Agile & Scrum Sprints', proficiency: 'Expert', highlighted: false, tag: 'Sprint planning, Retros' },
      { name: 'Web Performance & CWV', proficiency: 'Advanced', highlighted: true, tag: 'LCP, CLS, INP tuning' },
    ],
  },
];
