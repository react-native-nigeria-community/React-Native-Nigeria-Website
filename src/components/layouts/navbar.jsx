import React, { useState, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoPNG from "../../assets/img/nav-logo.png";
import ButtonComponent from "../commons/button.jsx";
import NavList from "../commons/nav-list.jsx";
import { getNavLinks } from "../../../utils/nav-links.jsx";
import LanguageSwitcher from "../LanguageSwitcher.jsx"; 
import { useTranslation } from "../../context/useTranslation";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  
  const { t } = useTranslation();

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  
  const navLinks = useMemo(() => (t ? getNavLinks(t) : []), [t]);

  
  if (!t) return null;

  return (
    <header className="sticky top-0 z-50 bg-white lg:bg-bg1 border-b border-gray-100 lg:border-none">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* LEFT LOGO (Desktop & Mobile) */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={LogoPNG} alt="Logo" className="h-8 lg:h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-primary text-xs lg:text-sm font-semibold">
              {t.reactNativeNigeria?.line1}
            </span>
            <span className="text-primary text-xs lg:text-sm font-semibold">
              {t.reactNativeNigeria?.line2}
            </span>
          </div>
        </Link>

        {/* CENTER NAV LINKS (Desktop) */}
        <ul className="hidden lg:flex items-center gap-12 text-primary absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <NavList
              key={i}
              label={link.label}
              link={link.link}
              isActive={location.pathname === link.link}
            />
          ))}
        </ul>

        {/* RIGHT ACTIONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href={t.joinCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonComponent variant="primary">
              {t.joinCommunity}
            </ButtonComponent>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            aria-label="open-menu"
            onClick={toggle}
            className="text-black text-3xl z-50"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      >
        <div
          className={`h-full w-full flex flex-col items-center justify-center space-y-8 transform transition-transform duration-200 ${
            open ? "translate-y-0" : "translate-y-3"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Links - Mapping over navLinks variable */}
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.link}
              onClick={close}
              className={`text-xl font-medium ${
                location.pathname === link.link ? "text-bg2 font-bold" : "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher in Mobile Menu */}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>

          {/* Join Button (Mobile) */}
          <a
            href={t.joinCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4"
          >
            <ButtonComponent variant="primary" className="px-8 py-3">
              {t.joinCommunity}
            </ButtonComponent>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;