import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const t = (id) => translations[lang][id] || id;
  
  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// C'est cette fonction que tu utiliseras dans tes pages
export const useLanguage = () => useContext(LanguageContext);
