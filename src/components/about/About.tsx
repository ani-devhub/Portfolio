import React from 'react';
import {
  GraduationCap,
  Download,
  Mail,
  MapPin,
  Layers,
  Zap,
  ShieldCheck,
  Languages,
} from 'lucide-react';
import { PROFILE, EDUCATION } from '@/data/profile';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Engineering Philosophy &"
          highlightText="Expertise"
          subtitle="Experienced software engineer focused on building robust full-stack applications, scalable API infrastructures, and high-quality user experiences."
        />

        {/* 4 Key Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PROFILE.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-5 sm:p-6 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-500 dark:text-blue-400 mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Strengths (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {PROFILE.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="font-normal text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architectural Pillars / How I Work */}
            <div className="p-6 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers size={18} className="text-blue-500 dark:text-blue-400" />
                <span>How I Approach Engineering</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Zap size={16} className="text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-medium">Performance First</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Minimal re-renders, virtualized data sets, sub-second API responses.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-medium">Type Safety & Security</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Strict TypeScript schemas, JWT validation, and RBAC authorization.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href={PROFILE.resumePath}
                download={PROFILE.resumeFileName}
                external
                variant="primary"
                size="md"
                icon={<Download size={16} />}
              >
                Download Official Resume (PDF)
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                icon={<Mail size={16} />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Right Column: Academic Honors & Facts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Credentials Card */}
            <div className="glass-card p-6 sm:p-7 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    Education & Credentials
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Verified Academic Record</p>
                </div>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.institution}</p>
                    {edu.highlights && (
                      <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-1">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Overview Info */}
            <div className="glass-card p-6 space-y-4 text-xs font-mono text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-500 dark:text-blue-400" /> Location
                </span>
                <span className="text-slate-900 dark:text-white font-medium">{PROFILE.location}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Languages size={14} className="text-blue-500 dark:text-blue-400" /> Languages
                </span>
                <span className="text-slate-900 dark:text-white font-medium">English, Bengali, Hindi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Current Employment</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">BASSETTI ITES PVT. LTD.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
