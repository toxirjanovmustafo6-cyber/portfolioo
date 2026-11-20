import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'uz' | 'en' | 'ru';
export type Theme = 'dark' | 'light';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is 'uz' (Uzbek) as strictly requested
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mustafo_lang');
    if (saved === 'uz' || saved === 'en' || saved === 'ru') {
      return saved;
    }
    return 'uz';
  });

  // Default theme is 'dark' (executive dark theme), with instant toggle to 'light' (kun)
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('mustafo_theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('mustafo_theme', theme);
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mustafo_lang', lang);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
