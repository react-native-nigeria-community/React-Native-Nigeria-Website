import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import yo from '../locales/yo';
import ig from '../locales/ig';
import ha from '../locales/ha';

// Create the translations object with all languages
const translations = {
  en,
  yo,
  ig,
  ha
};

// Create the context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('react-native-nigeria-language');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  // Function to change language
  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
      localStorage.setItem('react-native-nigeria-language', langCode);
    }
  };

  // Get current translations
  const t = translations[currentLang];

  // Value to be provided to consuming components
  const value = {
    t,                    // Current translations object
    currentLang,          // Current language code (e.g., 'en', 'yo', 'ig', 'ha')
    changeLanguage,       // Function to change language
    availableLanguages: [ // List of available languages
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

// Custom hook to use the language context
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  return context;
};

// Optional: Export individual functions if needed
export const getLanguageName = (code) => {
  const languages = {
    en: 'English',
    yo: 'Yoruba',
    ig: 'Igbo',
    ha: 'Hausa'
  };
  return languages[code] || 'English';
};