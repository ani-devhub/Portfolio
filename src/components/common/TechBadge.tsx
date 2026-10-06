import React from 'react';
import { cn } from '@/utils/cn';

interface TechBadgeProps {
  name: string;
  variant?: 'subtle' | 'highlight' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'subtle',
  size = 'sm',
  className,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const variantClasses = {
    subtle: 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600',
    highlight: 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:border-blue-400/50',
    outline: 'bg-transparent text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-md tracking-tight transition-colors duration-150 select-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {name}
    </span>
  );
};
