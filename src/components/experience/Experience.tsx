import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '@/data/experience';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TechBadge } from '@/components/common/TechBadge';
import { Button } from '@/components/common/Button';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Timeline"
          title="Professional Experience &"
          highlightText="Impact"
          subtitle="A comprehensive record of 3.5+ years building enterprise web applications, testing platforms, and high-performance services."
        />

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node Badge */}
                <div
                  className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                </div>

                {/* Main Experience Card */}
                <div className="glass-card p-6 sm:p-8 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.title}
                        </span>
                        {exp.current && (
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                            Current Role
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          ({exp.type})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400 font-medium">
                        <Briefcase size={15} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Key Technical Contributions
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={16}
                            className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Highlights */}
                  {exp.impactHighlights && exp.impactHighlights.length > 0 && (
                    <div className="p-4 rounded-xl bg-emerald-950/10 dark:bg-slate-950/60 border border-emerald-500/20 dark:border-slate-800/80 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span>Milestones & Product Impact</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {exp.impactHighlights.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 dark:text-emerald-400 font-bold">•</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="pt-2">
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Career Transition Callout */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Interested in evaluating my detailed project delivery track record?
              </span>
              <Button
                href="#projects"
                variant="outline"
                size="sm"
                icon={<ArrowRight size={14} />}
                iconPosition="right"
              >
                Inspect Real Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
