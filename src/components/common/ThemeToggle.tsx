import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-colors duration-200',
        'border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800',
        'text-slate-700 dark:text-slate-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 select-none',
        className
      )}
    >
      <div className="theme-toggle-icon relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Visible in light mode) */}
        <Sun
          size={18}
          className={cn(
            'theme-toggle-icon text-amber-500 transform transition-all duration-200 absolute',
            isDark
              ? 'rotate-90 scale-0 opacity-0 pointer-events-none'
              : 'rotate-0 scale-100 opacity-100'
          )}
        />
        {/* Moon Icon (Visible in dark mode) */}
        <Moon
          size={18}
          className={cn(
            'theme-toggle-icon text-blue-400 transform transition-all duration-200 absolute',
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0 pointer-events-none'
          )}
        />
      </div>

      {showLabel && (
        <span className="text-xs font-medium font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
