import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Code2, 
  Database, 
  CheckCircle2, 
  Zap
} from 'lucide-react';
import { AUXILIARY_STACK } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

export const Skills: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].skills;

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white dark:bg-obsidian overflow-hidden transition-colors">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-sm"
          >
            <TrendingUp className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
              {t.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Prompt-mandated Note/Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-gold/10 border border-gold/40 text-gold-bright shadow-gold-glow/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-wide text-zinc-900 dark:text-gold-bright">
                {t.dynamicNote}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Skill Progression Grid with Scroll-Triggered Glowing Gold Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {t.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-6 sm:p-7 rounded-xl bg-zinc-50/80 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all duration-300 shadow-sm dark:shadow-card group"
            >
              {/* Subtle top right accent */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white dark:bg-obsidian px-2 py-0.5 rounded border border-zinc-200 dark:border-charcoal-border">
                  {skill.category}
                </span>
                <span className="text-lg font-mono font-bold text-gold tracking-tight">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center space-x-3 mb-3 pr-24">
                <div className="w-9 h-9 rounded-lg bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border flex items-center justify-center text-gold group-hover:border-gold/40 transition-colors shadow-sm">
                  <Code2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Skill Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 min-h-[40px]">
                {skill.description}
              </p>

              {/* Glowing Golden Progress Bar Container */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-gold" />
                    <span>{t.benchmarkLabel}</span>
                  </span>
                  <span className="text-zinc-500">{t.levelLabel} {skill.proficiency}/100</span>
                </div>

                <div className="h-2.5 w-full bg-zinc-200 dark:bg-obsidian rounded-full overflow-hidden p-0.5 border border-zinc-300 dark:border-[#27272A]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-gradient-to-r from-yellow-600 via-gold to-gold-bright rounded-full relative shadow-[0_0_12px_rgba(234,179,8,0.7)]"
                  >
                    {/* Glowing head highlight */}
                    <span className="absolute top-0 right-0 bottom-0 w-2 bg-white/70 rounded-full filter blur-[1px]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auxiliary Stack & Ecosystem Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-zinc-50 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border p-8 lg:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-200 dark:border-charcoal-border/70 pb-6">
            <div>
              <div className="text-xs font-mono text-gold uppercase tracking-wider mb-1 flex items-center space-x-1.5 font-bold">
                <Database className="w-3.5 h-3.5" />
                <span>{t.auxTitleBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {t.auxHeading}
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-obsidian px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-charcoal-border self-start">
              {t.auxTag}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {AUXILIARY_STACK.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-obsidian/70 border border-zinc-200 dark:border-charcoal-border/80 hover:border-gold/50 transition-all duration-200 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                    {tech.category}
                  </div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-gold transition-colors">
                    {tech.name}
                  </div>
                </div>
                <div className="mt-3 flex items-center space-x-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-gold" />
                  <span>{t.integratedBadge}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
