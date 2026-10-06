import React from 'react';
import {
  ArrowDown,
  Download,
  FolderGit2,
  Mail,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { PROFILE } from '@/data/profile';
import { Button } from '@/components/common/Button';
import { TechBadge } from '@/components/common/TechBadge';

export const Hero: React.FC = () => {
  const coreTech = [
    'React',
    'Angular',
    'FastAPI',
    'Node.js',
    'TypeScript',
    'Python',
    'MongoDB',
    'REST APIs',
  ];

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Elements */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status & Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 mb-6 shadow-sm">
              <span className="pulse-dot" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Available for Senior & Full-Stack Engineering Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Hi, I'm <span className="text-slate-900 dark:text-white">{PROFILE.name}</span>
              <br />
              <span className="text-gradient-accent">Full-Stack Engineer</span>
            </h1>

            {/* Sub-headline / Value Proposition */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
              Software Engineer with{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">{PROFILE.yearsOfExperience}</strong> of
              professional experience building scalable enterprise web applications, high-performance
              reactive frontends, and resilient REST APIs.
            </p>

            {/* Tech Stack Chips Bar */}
            <div className="mb-8 w-full">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 font-semibold">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2">
                {coreTech.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="highlight" size="sm" />
                ))}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="#projects"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  scrollToElement('projects');
                }}
                variant="primary"
                size="lg"
                icon={<FolderGit2 size={18} />}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                href={PROFILE.resumePath}
                download={PROFILE.resumeFileName}
                external
                variant="secondary"
                size="lg"
                icon={<Download size={18} />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  scrollToElement('contact');
                }}
                variant="ghost"
                size="lg"
                icon={<Mail size={18} />}
                className="w-full sm:w-auto text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400" />
                <span>3.5+ Years Enterprise Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400" />
                <span>Full-Stack & Mobile Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500 dark:text-indigo-400" />
                <span>B.Tech ECE (9.10 CGPA Honors)</span>
              </div>
            </div>
          </div>

          {/* Right Profile & Terminal Card Column (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Accent Glow */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 dark:opacity-30 animate-pulse"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl dark:shadow-2xl space-y-6">
                {/* Profile Header Block */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-md flex-shrink-0">
                    <img
                      src={PROFILE.avatar}
                      alt={PROFILE.name}
                      width="96"
                      height="96"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-blue-500 dark:text-blue-400 mb-1">
                      <Sparkles size={13} />
                      <span>Full-Stack Engineer</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {PROFILE.name}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      BASSETTI ITES PVT. LTD. • Kolkata, India
                    </p>
                  </div>
                </div>

                {/* Simulated Architecture Terminal snippet */}
                <div className="rounded-xl bg-slate-900 dark:bg-slate-950 p-4 border border-slate-800 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span>engineer-spec.json</span>
                  </div>
                  <div className="text-slate-200 dark:text-slate-300 space-y-1 pt-1">
                    <p>
                      <span className="text-blue-400 font-semibold">"frontend"</span>: [
                      <span className="text-emerald-300">"Angular"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"TypeScript"</span>]
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">"backend"</span>: [
                      <span className="text-emerald-300">"FastAPI"</span>,{' '}
                      <span className="text-emerald-300">"Node.js"</span>,{' '}
                      <span className="text-emerald-300">"Python"</span>]
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">"database"</span>: [
                      <span className="text-emerald-300">"MongoDB"</span>,{' '}
                      <span className="text-emerald-300">"MySQL"</span>]
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">"status"</span>:{' '}
                      <span className="text-amber-300">"3.5+ YOE • Enterprise Ready"</span>
                    </p>
                  </div>
                </div>

                {/* Social Quick Links Bar */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Connect verified:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/anirudha-dey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      aria-label="Anirudha Dey on LinkedIn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                    <a
                      href="https://github.com/anirudhadey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      aria-label="Anirudha Dey on GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href="mailto:anirudha.dey.official@gmail.com"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      aria-label="Email Anirudha Dey"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 lg:mt-20 flex justify-center">
          <button
            onClick={() => scrollToElement('about')}
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER PROFILE</span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
