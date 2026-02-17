import React, { createContext, useState, useEffect } from 'react';
import { availableLanguages, translations } from '../constants/languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const savedLang = localStorage.getItem('react-native-nigeria-language');

    let initialLang = 'en';
    if (urlLang && translations[urlLang]) {
      initialLang = urlLang;
    }
   else if (savedLang && translations[savedLang]) {
    initialLang = savedLang;
  }
  setCurrentLang(initialLang);
  localStorage.setItem('react-native-nigeria-language', initialLang);
  }, []);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
      localStorage.setItem('react-native-nigeria-language', langCode);
    }

    const params = new URLSearchParams(window.location.search);
    params.set('lang', langCode);
    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
  };

  const t = translations[currentLang];

  const value = {
    t,
    currentLang,
    changeLanguage,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };