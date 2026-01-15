import en from '../locales/en';
import yo from '../locales/yo';
import ig from '../locales/ig';
import ha from '../locales/ha';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const availableLanguages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' }
];

// Move translations here
export const translations = { en, yo, ig, ha };

//getLanguageName
export const languageNames: Record<string, string> = {
  en: 'English',
  yo: 'Yoruba',
  ig: 'Igbo',
  ha: 'Hausa'
};