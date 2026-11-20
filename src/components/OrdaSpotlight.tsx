import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  CheckCircle, 
  Sparkles,
  Terminal,
  Activity,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

export const OrdaSpotlight: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].orda;

  return (
    <section id="orda" className="relative py-24 md:py-32 bg-zinc-50/70 dark:bg-obsidian border-t border-b border-zinc-200 dark:border-charcoal-border/70 overflow-hidden transition-colors">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-gold/10 border border-gold/30 text-gold text-xs font-mono font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-bright to-yellow-600">{t.titleHighlight}</span>{t.titleRest}
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal pt-2">
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
            <a
              href={PERSONAL_INFO.ordaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2.5 px-5 py-3 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/60 text-zinc-800 dark:text-white font-mono text-xs transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-gold-glow"
            >
              <Terminal className="w-4 h-4 text-gold" />
              <span>{t.exploreBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Featured Interactive ORDA Command Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 rounded-2xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border overflow-hidden shadow-xl dark:shadow-2xl group hover:border-gold/40 transition-colors duration-500"
        >
          {/* Top golden accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

          {/* Header Bar simulating terminal / browser window */}
          <div className="bg-zinc-100 dark:bg-[#16161B] px-6 py-4 border-b border-zinc-200 dark:border-charcoal-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#27272A]" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#27272A]" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#27272A]" />
              </div>
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="text-gold font-bold">https://</span>
                <span className="text-zinc-900 dark:text-white">orda-sigma.vercel.app/</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 font-mono text-xs">
              <span className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-0.5 rounded font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.cardStatus}</span>
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">|</span>
              <span className="text-zinc-500 dark:text-zinc-400">{t.cardManagedBy}</span>
            </div>
          </div>

          {/* Interactive Card Body */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-radial-card">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-gold uppercase tracking-wider font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{t.visionBadge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {t.visionTitle}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {t.visionDesc}
                </p>
              </div>

              {/* Bullet Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-obsidian/80 border border-zinc-200 dark:border-charcoal-border">
                  <div className="text-xs font-mono text-gold mb-1 font-bold">01. VENTURES</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-sm">{t.bulletVenturesTitle}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{t.bulletVenturesDesc}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-obsidian/80 border border-zinc-200 dark:border-charcoal-border">
                  <div className="text-xs font-mono text-gold mb-1 font-bold">02. TALENT</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-sm">{t.bulletTalentTitle}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{t.bulletTalentDesc}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-obsidian/80 border border-zinc-200 dark:border-charcoal-border">
                  <div className="text-xs font-mono text-gold mb-1 font-bold">03. SCALE</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-sm">{t.bulletScaleTitle}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{t.bulletScaleDesc}</div>
                </div>
              </div>
            </div>

            {/* Right Card Action Callout */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-5 bg-zinc-100/80 dark:bg-charcoal-light/60 p-6 rounded-xl border border-zinc-200 dark:border-charcoal-border">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-charcoal border border-gold/40 flex items-center justify-center shadow-gold-glow">
                <Layers className="w-8 h-8 text-gold" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{t.portalBadge}</div>
                <div className="text-lg font-bold text-zinc-900 dark:text-white">{t.portalTitle}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 max-w-[220px]">
                  {t.portalDesc}
                </div>
              </div>
              <a
                href={PERSONAL_INFO.ordaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-xs font-bold font-mono tracking-wider text-obsidian bg-gradient-to-r from-gold to-gold-bright shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <span>{t.portalBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-obsidian" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-card"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#1C1C22] text-gold border border-zinc-200 dark:border-charcoal-border uppercase tracking-wider font-bold">
                    {pillar.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-zinc-200 dark:border-charcoal-border/60 space-y-2">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-charcoal-border/40 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>{t.divisionTitle}</span>
                <span className="text-gold font-bold">{t.divisionStatus}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
