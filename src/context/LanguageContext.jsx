import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or default to 'fr'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('sultan-lang');
    return saved || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('sultan-lang', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    if (newLang !== lang) setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};