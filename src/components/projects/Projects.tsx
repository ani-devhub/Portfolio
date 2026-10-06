import React, { useState } from 'react';
import { Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TechBadge } from '@/components/common/TechBadge';
import { Button } from '@/components/common/Button';
import { ProjectDetailModal } from '@/components/projects/ProjectDetailModal';
import { cn } from '@/utils/cn';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'web' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Production Systems &"
          highlightText="Architectures"
          subtitle="Real projects from enterprise production and portfolio development. Click any card to inspect system architecture and engineering specs."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'enterprise', label: 'Enterprise Systems' },
            { id: 'web', label: 'Web Applications' },
            { id: 'mobile', label: 'Mobile & Real-Time' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border',
                filter === tab.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card group flex flex-col justify-between overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Card Image Header */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-slate-950 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="badge-pill bg-slate-900/80 backdrop-blur-md border-slate-700/80 text-[11px] text-blue-300">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-normal">
                    {project.solution}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 self-center pl-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer action bar */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/30 flex items-center justify-between text-xs font-mono text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Layers size={13} /> Inspect Architecture
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[11px]">Click to expand</span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div className="mt-14 text-center">
          <Button
            href="https://github.com/anirudhadey"
            external
            variant="outline"
            size="md"
            icon={<GithubIcon size={16} />}
          >
            Explore More Code on GitHub (@anirudhadey)
          </Button>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
