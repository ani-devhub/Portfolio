import { ProfileData, EducationItem } from '@/types';

export const PROFILE: ProfileData = {
  name: 'Anirudha Dey',
  title: 'Full-Stack Software Engineer',
  roleTagline: 'Engineering Scalable Web Systems, Reactive UIs & Modern APIs',
  yearsOfExperience: '3.5+ Years',
  summary:
    'Full-Stack Developer with 3.5+ years of professional experience architecting and deploying scalable web applications, responsive user interfaces, and high-throughput REST APIs. Specialized in Angular, React, TypeScript, FastAPI, and Node.js with a rigorous approach to software craftsmanship.',
  detailedBio: [
    'I am a software engineer with 3.5+ years of hands-on professional experience building enterprise-grade web applications and high-performance digital products. My journey spans full-stack engineering at BASSETTI ITES PVT. LTD., where I build and optimize mission-critical software used across enterprise environments.',
    'My core expertise centers around modern frontend architectures (React, Angular, TypeScript) paired with resilient backend services (FastAPI, Node.js, Express, MongoDB, SQL). I focus on designing systems that are maintainable, strictly typed, accessible, and fast.',
    'I believe great software is not just about writing code that works—it is about designing clean component hierarchies, optimizing bundle sizes and rendering cycles, adhering to accessibility standards, and building resilient APIs that solve real organizational problems.',
  ],
  location: 'Kolkata, India',
  email: 'anirudha.dey.official@gmail.com',
  phone: '+91 6296582411',
  availability: 'Open to Full-time Opportunities & Technical Inquiries',
  languages: [
    { name: 'English', level: 'Professional Working' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
  ],
  avatar: '/assets/images/profile.jpg',
  resumePath: '/assets/resume/Anirudha_Dey_Resume.pdf',
  resumeFileName: 'Anirudha_Dey_Resume.pdf',
  socials: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anirudha-dey',
      icon: 'linkedin',
      ariaLabel: 'Visit Anirudha Dey on LinkedIn',
      handle: 'in/anirudha-dey',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/anirudhadey',
      icon: 'github',
      ariaLabel: 'Visit Anirudha Dey on GitHub',
      handle: 'github.com/anirudhadey',
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:anirudha.dey.official@gmail.com',
      icon: 'mail',
      ariaLabel: 'Send an email to Anirudha Dey',
      handle: 'anirudha.dey.official@gmail.com',
    },
  ],
  stats: [
    {
      value: '3.5+',
      label: 'Years Experience',
      subtext: 'Enterprise & Full-Stack',
    },
    {
      value: '10+',
      label: 'Production Systems',
      subtext: 'Web Apps, APIs & Mobile',
    },
    {
      value: '9.10',
      label: 'B.Tech CGPA',
      subtext: 'ECE Academic Honors',
    },
    {
      value: '100%',
      label: 'Type-Safe Quality',
      subtext: 'Clean Architecture & Testing',
    },
  ],
  coreCompetencies: [
    'Enterprise Frontend Architecture (React, Angular)',
    'Asynchronous & Micro-APIs (FastAPI, Node.js)',
    'Type-Safe Full-Stack Workflows (TypeScript)',
    'Database Schema Design & Query Optimization (MongoDB, SQL)',
    'State Management & Reactive Programming (RxJS, Redux, Context)',
    'Performance Auditing & Core Web Vitals Optimization',
  ],
};

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology in Electronics & Communication Engineering',
    institution: 'Maulana Abul Kalam Azad University of Technology (GMIT)',
    period: 'Aug 2019 – Jul 2023',
    grade: '9.10 CGPA',
    details:
      'Completed B.Tech with distinction, developing deep proficiency in data structures, algorithms, object-oriented design, digital signal systems, and software engineering principles. Active contributor in technical clubs and regional hackathons.',
    highlights: [
      'Graduated with 9.10 CGPA Honors',
      'Specialized in Software Design & Digital Communication',
      'Led student tech projects and algorithmic problem solving',
    ],
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Education (Science stream)',
    institution: 'Sundarar High School (WBCHSE)',
    period: 'Jun 2017 – May 2019',
    grade: '77.4%',
    details: 'Rigorous coursework in Physics, Chemistry, Mathematics, and Computer Science.',
  },
  {
    id: 'secondary',
    degree: 'Secondary Examination',
    institution: 'Sundarar High School (WBBSE)',
    period: 'Jan 2016 – Mar 2017',
    grade: '78.4%',
    details: 'Comprehensive foundational curriculum covering physical science, mathematics, and languages.',
  },
];
