import React, { createContext, useState, useEffect } from "react";
import { availableLanguages, translations } from "../constants/languages";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");

    const savedLang = localStorage.getItem("react-native-nigeria-language");

    let initialLang = "en";

    if (urlLang && translations[urlLang]) {
      initialLang = urlLang;
      localStorage.setItem("react-native-nigeria-language", urlLang);
    } else if (savedLang && translations[savedLang]) {
      initialLang = savedLang;
    }

    setCurrentLang(initialLang);

    // ensure URL always reflects the resolved language
    if (!urlLang || urlLang !== initialLang) {
      params.set("lang", initialLang);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${params.toString()}`,
      );
    }
  }, []);

  
  const changeLanguage = (langCode) => {
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

  return (
    <LanguageContext.Provider
      value={{
        t,
        currentLang,
        changeLanguage,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
