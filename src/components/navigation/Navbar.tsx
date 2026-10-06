import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '@/data/navigation';
import { PROFILE } from '@/data/profile';
import { Button } from '@/components/common/Button';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { cn } from '@/utils/cn';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 dark:shadow-black/40 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg sm:text-xl tracking-tight focus-visible:outline-none"
            aria-label="Anirudha Dey - Return to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 size={20} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-blue-500 transition-colors">
                Anirudha<span className="text-blue-500">.</span>Dey
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-normal tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-blue-600/90 text-white shadow-sm shadow-blue-600/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              external
              variant="outline"
              size="sm"
              icon={<Download size={14} />}
              className="font-medium"
            >
              Resume
            </Button>
            <Button
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLElement>) => scrollToSection(e, '#contact')}
              variant="primary"
              size="sm"
              icon={<ArrowUpRight size={14} />}
              iconPosition="right"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              external
              variant="outline"
              size="sm"
              icon={<Download size={14} />}
              className="text-xs px-2.5 py-1.5"
            >
              CV
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col justify-between p-6 border-t border-slate-200 dark:border-slate-800 animate-in fade-in duration-200">
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between mb-3 px-3">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Navigation
              </p>
              <ThemeToggle showLabel />
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-blue-600/15 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="text-slate-400 dark:text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <Button
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              external
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
              className="w-full justify-center"
            >
              Download Full Resume (PDF)
            </Button>
            <Button
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLElement>) => scrollToSection(e, '#contact')}
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
