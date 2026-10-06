import React from 'react';
import {
  Code2,
  Download,
  Mail,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { PROFILE } from '@/data/profile';
import { NAV_ITEMS } from '@/data/navigation';
import { Button } from '@/components/common/Button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 75;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/90 pt-16 pb-12 relative text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand & Narrative (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 size={18} />
              </div>
              <span>{PROFILE.name}</span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed font-normal">
              Full-Stack Software Engineer with 3.5+ years of experience engineering scalable web
              systems, reactive user interfaces, and resilient APIs. Built with modern TypeScript and React.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/anirudha-dey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Anirudha Dey on LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://github.com/anirudhadey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Anirudha Dey on GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="mailto:anirudha.dey.official@gmail.com"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Email Anirudha Dey"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Sections
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Document & Actions (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Credentials
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Download latest official resume or initiate contact directly.
            </p>
            <div className="pt-1 space-y-2">
              <Button
                href={PROFILE.resumePath}
                download={PROFILE.resumeFileName}
                external
                variant="outline"
                size="sm"
                icon={<Download size={14} />}
                className="w-full justify-center"
              >
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex items-center justify-center text-xs font-mono text-slate-500 dark:text-slate-400 text-center">
          <p>
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
