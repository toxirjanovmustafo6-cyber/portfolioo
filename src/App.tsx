import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OrdaSpotlight } from './components/OrdaSpotlight';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const PortfolioContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian text-zinc-900 dark:text-white selection:bg-gold/25 selection:text-gold-bright relative transition-colors duration-300">
      {/* Executive Sticky Glassmorphism Navbar with Scroll Progress Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        {/* Section 2: Executive Profile & Hero */}
        <Hero />

        {/* Section 3: Leadership & Startup Spotlight (ORDA) */}
        <OrdaSpotlight />

        {/* Section 4: Technical Stack & Dynamic Skill Progression */}
        <Skills />

        {/* Section 5: Featured Projects & Startups Portfolio */}
        <Projects />

        {/* Section 6: Contact & Socials */}
        <Contact />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <PortfolioContent />
    </AppProvider>
  );
};

export default App;
