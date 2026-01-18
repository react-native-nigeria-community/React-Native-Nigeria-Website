import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../context/useTranslation';
import CheckIcon from "./icons/CheckIcon";
import LanguageIcon from "./icons/LanguageIcon";
import ChevronIcon from "./icons/ChevronIcon";

const LanguageSwitcher = () => {
  const { currentLang, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = availableLanguages.find(lang => lang.code === currentLang);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 bg-white"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <LanguageIcon className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-700">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
        <ChevronIcon 
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 ${
                currentLang === language.code ? 'bg-green-50 font-semibold text-green-700' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
              {currentLang === language.code && (
                <CheckIcon className="w-4 h-4 ml-auto text-green-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;