import React from 'react';
import { ArrowUp, Terminal, Github, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useApp();
  const tFooter = TRANSLATIONS[language].footer;
  const tNav = TRANSLATIONS[language].nav;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-zinc-100 dark:bg-[#070709] border-t border-zinc-200 dark:border-charcoal-border text-zinc-600 dark:text-zinc-400 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border flex items-center justify-center text-gold font-mono font-bold shadow-sm">
                MT
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-white text-base tracking-tight">
                  Mustafo Toxirjanov
                </span>
                <span className="block text-xs font-mono text-zinc-500">
                  {tFooter.founderRole}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              {tFooter.bio}
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-white dark:bg-charcoal px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-charcoal-border self-start inline-flex shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{tFooter.statusActive}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-zinc-900 dark:text-white font-semibold uppercase tracking-wider mb-2 font-sans">
              {tFooter.navTitle}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  01 // {tNav.about}
                </a>
              </li>
              <li>
                <a href="#orda" className="hover:text-gold transition-colors">
                  02 // {tNav.orda}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gold transition-colors">
                  03 // {tNav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">
                  04 // {tNav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  05 // {tNav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem & Social Connections */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-zinc-900 dark:text-white font-semibold text-xs uppercase tracking-wider font-sans">
              {tFooter.socialsTitle}
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.ordaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 text-xs font-mono text-zinc-900 dark:text-gold-bright transition-colors shadow-sm"
              >
                <span>ORDA Hub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>Telegram</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-gold" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>Email</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-gold transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-gold" />
                <span>{tFooter.backToTop}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Technical Signature */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-charcoal-border/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Mustafo Toxirjanov. {tFooter.rightsReserved}
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-zinc-600 dark:text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-gold" />
              <span>{tFooter.techStackStamp}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
