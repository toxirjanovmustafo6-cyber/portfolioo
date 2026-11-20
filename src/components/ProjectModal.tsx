import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Terminal
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  const { language } = useApp();
  const tProjects = TRANSLATIONS[language].projects;
  const tModal = tProjects.modal;

  const project = tProjects.items.find((p) => p.id === projectId);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 dark:bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Top Gold Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-zinc-200 dark:border-charcoal-border">
            <div className="space-y-1.5 pr-6">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-gold/15 text-gold-bright border border-gold/30 uppercase font-semibold text-zinc-900 dark:text-gold-bright">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.status}</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-gold/50 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">
                  {m.label}
                </div>
                <div className="text-sm font-bold font-mono text-zinc-900 dark:text-gold-bright mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview Description */}
          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gold flex items-center space-x-2 font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>{tModal.abstractTitle}</span>
            </h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Architectural Engineering Highlights */}
          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gold flex items-center space-x-2 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>{tModal.architectureTitle}</span>
            </h4>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-50 dark:bg-obsidian/70 border border-zinc-200 dark:border-charcoal-border/70 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {tModal.techStackTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-xs font-mono text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-zinc-200 dark:border-charcoal-border flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500">
              {tModal.certifiedBadge}
            </div>

            <div className="flex items-center space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold font-mono text-obsidian bg-gradient-to-r from-gold to-gold-bright shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  <span>{tModal.launchBtn}</span>
                  <ArrowUpRight className="w-4 h-4 text-obsidian" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border hover:border-zinc-400 transition-colors"
              >
                {tModal.closeBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
