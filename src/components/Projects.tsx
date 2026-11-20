import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ArrowUpRight, 
  ChevronRight, 
  Layers, 
  FileText,
  Calendar,
  Users,
  CreditCard,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const { language } = useApp();
  const t = TRANSLATIONS[language].projects;

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'sartaroshlar':
        return <Calendar className="w-5 h-5 text-gold" />;
      // case 'orda-crm':
        // return <Users className="w-5 h-5 text-gold" />;
      case 'angsa':
        return <CreditCard className="w-5 h-5 text-gold" />;
      case 'nazorat':
        return <FileCheck className="w-5 h-5 text-gold" />;
      default:
        return <Layers className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-zinc-50/70 dark:bg-obsidian border-t border-zinc-200 dark:border-charcoal-border/70 overflow-hidden transition-colors">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                {t.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {t.title}
            </h2>

            <p className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border font-mono text-xs text-zinc-600 dark:text-zinc-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>{t.clickNote}</span>
            </div>
          </motion.div>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.items.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-sm dark:shadow-card hover:shadow-gold-glow/20 group"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border flex items-center justify-center group-hover:border-gold/40 transition-colors shadow-sm">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 px-2.5 py-0.5 rounded font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gold-hover dark:text-gold-bright font-semibold mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Project Abstract */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-zinc-50 dark:bg-obsidian/70 border border-zinc-200 dark:border-charcoal-border/70"
                    >
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">
                        {metric.label}
                      </div>
                      <div className="text-xs font-mono font-bold text-zinc-900 dark:text-white truncate mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#18181D] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-charcoal-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-zinc-200 dark:border-charcoal-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProjectId(project.id)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-zinc-800 dark:text-white group-hover:text-gold transition-colors focus:outline-none"
                >
                  <FileText className="w-3.5 h-3.5 text-gold" />
                  <span>{t.caseStudyBtn}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-zinc-500 dark:text-zinc-400 hover:text-gold hover:border-gold/40 transition-colors"
                    title={t.livePlatformBtn}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
};
