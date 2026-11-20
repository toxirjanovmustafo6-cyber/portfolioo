import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { language } = useApp();
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors">
      {/* Executive Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] dark:opacity-[0.4] pointer-events-none -z-10" />

      {/* Subtle Golden Ambient Glow Spotlights */}
      <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-60 right-10 w-96 h-96 rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Bio & Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Leadership Pill */}
            <div className="inline-flex items-center space-x-2.5 self-start px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 tracking-wide font-medium">
                {t.leadershipPill}
              </span>
            </div>

            {/* Bold Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
                {t.headline} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-100 dark:to-zinc-400">
                  Toxirjanov
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gold font-mono tracking-tight pt-1">
                {t.subRole}
              </p>
            </div>

            {/* Authoritative Bio */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-2xl">
              {t.bio}
            </p>

            {/* Core Competencies Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-white dark:bg-charcoal/70 border border-zinc-200 dark:border-charcoal-border flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">{t.badgeSaaS}</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-charcoal/70 border border-zinc-200 dark:border-charcoal-border flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 shadow-sm">
                <Layers className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">{t.badgeRBAC}</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-charcoal/70 border border-zinc-200 dark:border-charcoal-border flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 shadow-sm col-span-2 sm:col-span-1">
                <Terminal className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">{t.badgeMentorship}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-obsidian bg-gradient-to-r from-gold to-gold-bright rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 active:scale-95 transition-all duration-200"
              >
                <span>{t.btnExplore}</span>
              </a>

              <a
                href={PERSONAL_INFO.ordaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold font-mono text-zinc-800 dark:text-white bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border rounded-lg hover:border-gold/60 hover:bg-zinc-50 dark:hover:bg-[#1A1A22] transition-all duration-200 shadow-sm"
              >
                <span>{t.btnOrda}</span>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {t.btnInquiry}
              </a>
            </div>

            {/* Operational Metrics Bar */}
            <div className="pt-6 border-t border-zinc-200 dark:border-charcoal-border/70 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {t.metricSystems}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  {t.metricSystemsLabel}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {t.metricReliability}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  {t.metricReliabilityLabel}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {t.metricOrdaRole}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  {t.metricOrdaLabel}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Framed Executive Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Golden Bracket Accents (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold z-20 pointer-events-none" />

              {/* Ambient Glow behind portrait */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 rounded-2xl blur-xl -z-10" />

              {/* Framed Container */}
              <div className="relative bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border rounded-xl p-3 shadow-2xl overflow-hidden group">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-zinc-50 dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border/80 flex items-center justify-center">
                  
                  {/* Portrait Image with Graceful Fallback */}
                  {!imageError ? (
                    <img
                      src="image/photo_2026-11-20_20-39-14.jpg"
                      alt="Mustafo Toxirjanov"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  ) : (
                    /* Architectural Fallback */
                    <div className="relative w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-zinc-100 via-white to-zinc-50 dark:from-[#18181D] dark:via-charcoal dark:to-obsidian text-center overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                      
                      <div className="w-full flex items-center justify-between text-[11px] font-mono text-zinc-500 z-10 border-b border-zinc-200 dark:border-charcoal-border/50 pb-2">
                        <span className="flex items-center space-x-1.5 text-gold font-bold">
                          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                          <span>ORDA LEADER</span>
                        </span>
                        <span>ORDA-ID: MT-01</span>
                      </div>

                      <div className="relative my-auto flex flex-col items-center justify-center z-10">
                        <div className="relative w-28 h-28 rounded-2xl bg-zinc-100 dark:bg-charcoal-light border border-gold/40 flex items-center justify-center shadow-gold-glow">
                          <div className="absolute inset-1 rounded-xl border border-zinc-200 dark:border-charcoal-border" />
                          <span className="font-mono text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold-bright via-gold to-yellow-600">
                            MT
                          </span>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white tracking-wide">
                          {t.portraitFallbackTitle}
                        </h3>
                        <p className="text-xs font-mono text-gold font-semibold mt-0.5">
                          {t.portraitFallbackRole}
                        </p>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 max-w-[200px] mt-1">
                          {t.portraitFallbackDesc}
                        </p>
                      </div>

                      <div className="w-full bg-white/90 dark:bg-charcoal/90 border border-zinc-200 dark:border-charcoal-border rounded-lg p-2.5 z-10 text-left flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                            {t.portraitSaaSLead}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400">
                          {t.portraitCity}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Glassmorphic Status Overlay on bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-obsidian/85 backdrop-blur-md border border-zinc-200 dark:border-charcoal-border rounded-lg p-3 flex items-center justify-between z-20 shadow-md">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 dark:text-white tracking-tight">
                          {t.portraitStatus}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                          {t.portraitSub}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        href={PERSONAL_INFO.ordaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-gold hover:underline flex items-center space-x-1"
                      >
                        <span>orda.uz</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>{t.portraitCaption}</span>
                  <span className="text-gold font-semibold">MUSTAFO TOXIRJANOV</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
