import React, { createContext, useState, useEffect } from 'react';
import en from '../locales/en';
import yo from '../locales/yo';
import ig from '../locales/ig';
import ha from '../locales/ha';

const translations = { en, yo, ig, ha };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('react-native-nigeria-language');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
      localStorage.setItem('react-native-nigeria-language', langCode);
    }
  };

  const t = translations[currentLang];

  const value = {
    t,
    currentLang,
    changeLanguage,
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
      { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
      { code: 'ha', name: 'Hausa', flag: '🇳🇬' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };