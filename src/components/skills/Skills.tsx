import React, { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  Check,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/skills';
import { SectionHeading } from '@/components/common/SectionHeading';
import { cn } from '@/utils/cn';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Layout size={20} className="text-blue-400" />,
    backend: <Server size={20} className="text-indigo-400" />,
    databases: <Database size={20} className="text-cyan-400" />,
    mobile: <Smartphone size={20} className="text-emerald-400" />,
    tooling: <Wrench size={20} className="text-amber-400" />,
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Capabilities"
          title="Skills, Frameworks &"
          highlightText="Engineering Stacks"
          subtitle="Curated technical capabilities organized by architectural domain, backed by production enterprise delivery."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border',
              activeCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
            )}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border flex items-center gap-2',
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    {categoryIcons[category.id] || <Sparkles size={20} className="text-blue-500 dark:text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {category.skills.length} Core Competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                {/* Skills list inside category */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-center justify-between p-2.5 rounded-xl transition-colors border',
                        skill.highlighted
                          ? 'bg-blue-50/70 dark:bg-slate-800/60 border-blue-300 dark:border-blue-500/30 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/70 text-slate-700 dark:text-slate-300'
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Check
                          size={14}
                          className={skill.highlighted ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}
                        />
                        <div className="truncate">
                          <span className="text-xs sm:text-sm font-medium tracking-tight block truncate">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block truncate">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      </div>

                      {skill.proficiency && (
                        <span
                          className={cn(
                            'text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0 border font-medium ml-2',
                            skill.proficiency === 'Expert'
                              ? 'bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30'
                              : skill.proficiency === 'Advanced'
                              ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border-indigo-500/30'
                              : 'bg-slate-200 dark:bg-slate-700/30 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                          )}
                        >
                          {skill.proficiency}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Verified in production</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                  Active Stack
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
