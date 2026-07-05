import React, { createContext, useState, useEffect, ReactNode } from "react";
import { availableLanguages, translations } from "../constants/languages";

interface Language {
  code: string;
  label: string;
}

interface LanguageContextType {
  t: (typeof translations)[string];
  currentLang: string;
  changeLanguage: (langCode: string) => void;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    const savedLang = localStorage.getItem("react-native-nigeria-language");

    let initialLang = "en";
    if (urlLang && translations[urlLang]) {
      initialLang = urlLang;
    } else if (savedLang && translations[savedLang]) {
      initialLang = savedLang;
    }
    setCurrentLang(initialLang);
    localStorage.setItem("react-native-nigeria-language", initialLang);
  }, []);

  const changeLanguage = (langCode: string): void => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
      localStorage.setItem("react-native-nigeria-language", langCode);
    }

    const params = new URLSearchParams(window.location.search);
    params.set("lang", langCode);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };

  const t = translations[currentLang];

  const value: LanguageContextType = {
    t,
    currentLang,
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
