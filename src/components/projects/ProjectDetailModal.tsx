import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  Shield,
  Zap,
} from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';
import { Project } from '@/types';
import { Modal } from '@/components/common/Modal';
import { TechBadge } from '@/components/common/TechBadge';
import { Button } from '@/components/common/Button';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="3xl"
    >
      <div className="space-y-6">
        {/* Project Header Info */}
        <div className="space-y-2 pb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="badge-pill bg-blue-600/20 text-blue-600 dark:text-blue-300 border-blue-500/30">
              {project.categoryLabel}
            </span>
            {project.companyContext && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {project.companyContext}
              </span>
            )}
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {project.subtitle}
          </h4>
        </div>

        {/* Project Screenshot Showcase (Uncropped & Full View) */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 shadow-xl">
          {/* Decorative Window Frame Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-400 truncate max-w-[200px] sm:max-w-none">
              {project.title} — System Preview
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 hidden sm:inline font-mono">100% View</span>
          </div>

          {/* Uncropped Image Display */}
          <div className="p-2 sm:p-4 flex items-center justify-center bg-slate-100/60 dark:bg-slate-950/60 min-h-[220px]">
            <img
              src={project.image}
              alt={`${project.title} system interface`}
              className="w-auto h-auto max-w-full max-h-[420px] object-contain rounded-lg shadow-md border border-slate-200 dark:border-slate-800/60"
              loading="lazy"
            />
          </div>
        </div>

        {/* Role & Context Meta */}
        <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono space-y-1">
          <div className="text-slate-600 dark:text-slate-400">
            <span className="text-blue-500 dark:text-blue-400 font-semibold">My Role:</span> {project.role}
          </div>
          {project.companyContext && (
            <div className="text-slate-600 dark:text-slate-400">
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Context:</span>{' '}
              {project.companyContext}
            </div>
          )}
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-500/10 dark:bg-red-950/15 border border-red-500/20 space-y-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-red-500 dark:text-red-400 font-semibold flex items-center gap-1.5">
              <span>The Problem</span>
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/15 border border-emerald-500/20 space-y-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <span>The Architectural Solution</span>
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deep Architectural Breakdown */}
        {project.architecture && (
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold flex items-center gap-2">
              <Layers size={15} />
              <span>System Architecture Breakdown</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-blue-500 dark:text-blue-300 block font-semibold mb-1">
                  1. Client Layer
                </span>
                <span className="text-slate-600 dark:text-slate-400">{project.architecture.client}</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-indigo-500 dark:text-indigo-300 block font-semibold mb-1">
                  2. API / Routing Layer
                </span>
                <span className="text-slate-600 dark:text-slate-400">{project.architecture.api}</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-cyan-500 dark:text-cyan-300 block font-semibold mb-1">
                  3. Services & Security
                </span>
                <span className="text-slate-600 dark:text-slate-400">{project.architecture.services}</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-emerald-500 dark:text-emerald-300 block font-semibold mb-1">
                  4. Data Persistence
                </span>
                <span className="text-slate-600 dark:text-slate-400">{project.architecture.database}</span>
              </div>
            </div>
          </div>
        )}

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
            <Zap size={14} className="text-amber-500 dark:text-amber-400" />
            <span>Key Engineering Highlights</span>
          </h5>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {project.engineeringHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
            <Shield size={14} className="text-emerald-500 dark:text-emerald-400" />
            <span>Core Capabilities & Features</span>
          </h5>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-500 dark:text-emerald-400 font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
            Technologies Applied
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="highlight" size="sm" />
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                external
                variant="primary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                Live Demo
              </Button>
            )}
            {project.codeUrl && (
              <Button
                href={project.codeUrl}
                external
                variant="secondary"
                size="sm"
                icon={<GithubIcon size={14} />}
              >
                View Repository
              </Button>
            )}
            {!project.demoUrl && !project.codeUrl && (
              <span className="text-xs font-mono text-slate-500 italic">
                Proprietary enterprise / internal architecture
              </span>
            )}
          </div>
          <Button onClick={onClose} variant="ghost" size="sm">
            Close Overview
          </Button>
        </div>
      </div>
    </Modal>
  );
};
