export type SkillProficiency = 'Expert' | 'Advanced' | 'Proficient';

export interface SkillItem {
  name: string;
  proficiency?: SkillProficiency;
  highlighted?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectArchitecture {
  client: string;
  api: string;
  services: string;
  database: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'enterprise';
  categoryLabel: string;
  featured: boolean;
  image: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  architecture?: ProjectArchitecture;
  keyFeatures: string[];
  engineeringHighlights: string[];
  demoUrl?: string;
  codeUrl?: string;
  companyContext?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Internship';
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impactHighlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
  highlights?: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
  handle?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  roleTagline: string;
  yearsOfExperience: string;
  summary: string;
  detailedBio: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  languages: { name: string; level: string }[];
  avatar: string;
  resumePath: string;
  resumeFileName: string;
  socials: SocialLink[];
  stats: { value: string; label: string; subtext: string }[];
  coreCompetencies: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type Theme = 'dark' | 'light';
