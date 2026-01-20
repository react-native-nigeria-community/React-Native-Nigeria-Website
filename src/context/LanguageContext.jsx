import React, { createContext, useState, useEffect } from "react";
import { availableLanguages, translations } from "../constants/languages";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageContext = createContext();

const DEFAULT_LANGUAGE = "en";
const SAVED_LANGUAGE_KEY = "language";

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentLang, setCurrentLang] = useState(DEFAULT_LANGUAGE);

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let langParam = params.get("lang");
    const savedLang = sessionStorage.getItem(SAVED_LANGUAGE_KEY);

    // for invalid lang codes in URL
    const isValid = availableLanguages.some(lang => lang.code === langParam);
    if (!isValid) {
      langParam = null; 
    }

     const validSavedLang = availableLanguages.some(lang => lang.code === savedLang)
      ? savedLang
      : null;
    // This is used to determine language priority
    const initialLang = langParam || validSavedLang || DEFAULT_LANGUAGE;

    setCurrentLang(initialLang);
    sessionStorage.setItem(SAVED_LANGUAGE_KEY, initialLang);

    
     if (langParam !== initialLang) {
      params.set("lang", initialLang);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  // Change language manually
  const changeLanguage = (langCode) => {
    if (!translations[langCode]) return;

    setCurrentLang(langCode);
    sessionStorage.setItem(SAVED_LANGUAGE_KEY, langCode);

    // Update URL query param
    const params = new URLSearchParams(location.search);
    params.set("lang", langCode);

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
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
