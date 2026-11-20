import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Terminal, 
  Sparkles, 
  Sun, 
  Moon, 
  Globe 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useApp, Language } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { language, setLanguage, theme, toggleTheme } = useApp();
  const t = TRANSLATIONS[language].nav;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.orda, href: '#orda' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbek", flag: 'UZ' },
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'ru', label: 'Русский', flag: 'RU' },
  ];

  return (
    <>
      {/* Executive Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-hover via-gold to-gold-bright z-[100] origin-left shadow-[0_0_10px_rgba(234,179,8,0.7)]"
        style={{ scaleX }}
      />

      {/* Sticky Glassmorphism Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-white/80 dark:bg-obsidian/70 backdrop-blur-md py-4 sm:py-5 border-b border-zinc-200/80 dark:border-[#27272A]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Identity */}
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="group flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-charcoal border border-zinc-300 dark:border-charcoal-border flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/15 transition-colors" />
                <span className="font-mono font-bold text-base text-zinc-900 dark:text-gold-bright tracking-wider">
                  MT
                </span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold tracking-tight text-zinc-900 dark:text-white text-sm sm:text-base group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                    Mustafo Toxirjanov
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                  <span className="text-zinc-500 font-medium">{t.founderAt}</span>
                  <span className="text-gold font-semibold tracking-wide flex items-center">
                    ORDA
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-zinc-100/70 dark:bg-charcoal/50 border border-zinc-200 dark:border-charcoal-border/70 rounded-full px-3 py-1 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#1C1C22] transition-all duration-200 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Controls: Theme Toggle + Language Switcher + CTA */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Kun / Tun Rejim (Day / Night Theme Toggle) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="relative p-2 rounded-lg bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border text-zinc-700 dark:text-zinc-300 hover:text-gold hover:border-gold/50 transition-all duration-200 focus:outline-none"
                title={theme === 'dark' ? t.themeToggleLight : t.themeToggleDark}
                aria-label="Toggle theme mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold-bright transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700 hover:text-gold transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* 3 Xil Til Switcher (UZ / EN / RU) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 hover:border-gold/50 transition-all"
                  aria-label="Change language"
                >
                  <Globe className="w-3.5 h-3.5 text-gold" />
                  <span className="uppercase text-[11px]">{language}</span>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between transition-colors ${
                          language === l.code
                            ? 'text-gold font-bold bg-gold/10'
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#1C1C22]'
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[10px] font-mono text-zinc-400 font-semibold">{l.flag}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Action CTA & External Ecosystem Link */}
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href={PERSONAL_INFO.ordaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all duration-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold group-hover:rotate-12 transition-transform" />
                  <span>{t.ordaEcosystem}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold tracking-wide text-obsidian bg-gradient-to-r from-gold to-gold-bright rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.25)] hover:shadow-[0_0_25px_rgba(234,179,8,0.45)] hover:brightness-105 active:scale-95 transition-all duration-200"
                >
                  <span>{t.initiateContact}</span>
                </a>
              </div>

              {/* Mobile Hamburger Toggle */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border text-zinc-700 dark:text-zinc-300 hover:text-gold hover:border-gold/50 transition-colors focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-panel border-b border-zinc-200 dark:border-charcoal-border mt-3 px-5 py-6 space-y-4 shadow-2xl"
          >
            {/* Language Selector in Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-charcoal-border/70">
              <span className="text-xs font-mono text-zinc-500">Tilni tanlang / Language:</span>
              <div className="flex space-x-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                      language === l.code
                        ? 'bg-gold text-obsidian'
                        : 'bg-zinc-100 dark:bg-charcoal text-zinc-600 dark:text-zinc-300'
                    }`}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-charcoal border border-transparent hover:border-zinc-200 dark:hover:border-charcoal-border transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-charcoal-border flex flex-col space-y-3">
              <a
                href={PERSONAL_INFO.ordaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border text-zinc-900 dark:text-gold-bright"
              >
                <span className="flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-gold" />
                  <span>{t.ordaEcosystem}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-obsidian bg-gold rounded-lg shadow-md"
              >
                {t.initiateContact}
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
