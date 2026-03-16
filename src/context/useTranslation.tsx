import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { languageNames } from '../constants/languages';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  return context;
};

export const getLanguageName = (code: string): string => {
  return languageNames[code] || 'English';
};