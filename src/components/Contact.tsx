import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Github, 
  MessageSquare, 
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../data/translations';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const { language } = useApp();
  const t = TRANSLATIONS[language].contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white dark:bg-obsidian overflow-hidden transition-colors">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[180px] pointer-events-none -z-10" />
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
            <Mail className="w-3.5 h-3.5 text-gold" />
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
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Credentials & Copy-To-Clipboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Card with Copy-to-Clipboard */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-sm dark:shadow-card relative overflow-hidden group hover:border-gold/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border flex items-center justify-center text-gold shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                    {t.primaryBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{t.emailTitle}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {t.emailDesc}
                  </p>
                </div>

                {/* Email Address Display Box */}
                <div className="p-3 rounded-xl bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border flex items-center justify-between gap-2 shadow-sm">
                  <span className="font-mono text-xs sm:text-sm text-zinc-900 dark:text-gold-bright truncate select-all font-semibold">
                    {PERSONAL_INFO.email}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all shrink-0 focus:outline-none"
                    title={t.copyBtn}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">{t.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{t.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Social Channels */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-sm dark:shadow-card space-y-4">
              <div className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
                {t.channelsTitle}
              </div>

              <div className="space-y-3">
                {/* Telegram */}
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-charcoal flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-gold transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                        {t.telegramTitle}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        @toxirjanoovv
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-charcoal flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-gold transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                        {t.githubTitle}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        github.com/MustafoToxirjanov6-cyber
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* ORDA Portal */}
                <a
                  href={PERSONAL_INFO.ordaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border hover:border-gold/50 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-charcoal flex items-center justify-center text-gold">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                        {t.ordaTitle}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        orda-sigma.vercel.app
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Executive Assurance Seal */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-obsidian/70 border border-zinc-200 dark:border-charcoal-border flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
              <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {t.assuranceText}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-zinc-50 dark:bg-charcoal border border-zinc-200 dark:border-charcoal-border shadow-xl dark:shadow-2xl relative">
              <div className="space-y-2 mb-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {t.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {t.formDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                      {t.labelName} <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.placeholderName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                      {t.labelEmail} <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.placeholderEmail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                    {t.labelSubject} <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.placeholderSubject}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                    {t.labelMessage} <span className="text-gold">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={t.placeholderMessage}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-obsidian border border-zinc-200 dark:border-charcoal-border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-obsidian bg-gradient-to-r from-gold to-gold-bright shadow-gold-glow hover:shadow-gold-glow-lg transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="font-mono">{t.btnSubmitting}</span>
                  ) : status === 'submitted' ? (
                    <span className="font-mono flex items-center space-x-2">
                      <Check className="w-4 h-4 text-obsidian" />
                      <span>{t.btnSuccess}</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-obsidian" />
                      <span>{t.btnSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
