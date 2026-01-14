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

//getLanguageName
export const languageNames: Record<string, string> = {
  en: 'English',
  yo: 'Yoruba',
  ig: 'Igbo',
  ha: 'Hausa'
};
