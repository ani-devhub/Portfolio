import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      <div className={cn('inline-flex items-center gap-2 mb-3', align === 'center' && 'justify-center')}>
        <span className="badge-pill">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          {badge}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-accent">{highlightText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
