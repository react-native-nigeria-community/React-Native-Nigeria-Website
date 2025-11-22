import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoPNG from "../../assets/img/nav-logo.png";
import ButtonComponent from "../commons/button.jsx";
import en from "../../locales/en.js";
import NavList from "../commons/nav-list.jsx";
import { getNavLinks } from "../../../utils/nav-links.jsx";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-white lg:bg-bg1">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* LEFT NAV LINKS (Desktop) */}
        <ul className="hidden lg:flex items-center gap-12 text-primary">
          {getNavLinks.slice(0, 3).map((link, i) => (
            <NavList
              key={i}
              label={link.label}
              link={link.link}
              isActive={location.pathname === link.link}
            />
          ))}
        </ul>

        {/* CENTER LOGO */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center"
        >
          <img src={LogoPNG} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* RIGHT BUTTON (Desktop) */}
        <a
          href={en.joinCommunityLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <ButtonComponent variant="primary">{en.joinCommunity}</ButtonComponent>
        </a>

        {/* MOBILE HEADER */}
        <div className="lg:hidden flex items-center justify-between w-full">
          
          {/* Mobile Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoPNG} alt="Logo" className="h-8 w-auto" />
          <span className="flex flex-col leading-tight text-black lg:text-primary font-medium text-sm">
          <span>{en.reactNativeNigeria.line1}</span>
          <span>{en.reactNativeNigeria.line2}</span>
          </span>
        </Link>




          {/* Mobile Menu Toggle */}
          <button
            aria-label="open-menu"
            onClick={toggle}
            className="text-black text-3xl lg:text-primary"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-0 bg-bg1 z-40 transition-all duration-200 ${
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
          {/* Close Button */}
          <button
            onClick={close}
            aria-label="close-menu"
            className="absolute top-7 right-7 text-4xl text-primary"
          >
            ×
          </button>

          {/* Mobile Links */}
          {getNavLinks.map((link, i) => (
            <Link
              key={i}
              to={link.link}
              onClick={close}
              className="text-xl text-primary"
            >
              {link.label}
            </Link>
          ))}

          {/* Join Button */}
          <a
            href={en.joinCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4"
          >
            <ButtonComponent variant="primary" className="px-6 py-3">
              {en.joinCommunity}
            </ButtonComponent>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
