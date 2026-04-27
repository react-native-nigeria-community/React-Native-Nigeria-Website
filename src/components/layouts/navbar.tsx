import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoPNG from "../../assets/img/nav-logo.webp";
import ButtonComponent from "../commons/button";
import NavList from "../commons/nav-list";
import { getNavLinks } from "../../../utils/nav-links";
import { useTranslation } from "../../context/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher";

const NavbarComponent: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    
    const toggle = useCallback(() => setOpen((v) => !v), []);
    const close = useCallback(() => setOpen(false), []);

    return (
        <header className="sticky top-0 z-50 bg-white lg:bg-bg1">
            <nav className="relative flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
                
                {/* LEFT NAV LINKS (Desktop) */}
                <ul className="absolute items-center hidden gap-12 -translate-x-1/2 lg:flex text-primary left-1/2">
                    {getNavLinks(t).map((link, i) => (
                        <NavList
                            key={i}
                            label={link.label}
                            link={link.link}
                            isActive={location.pathname === link.link}
                        />
                    ))}
                </ul>

                {/* LEFT LOGO */}
                <Link
                    to="/"
                    className="items-center hidden gap-2 lg:flex"
                >
                    <img src={LogoPNG} alt="Logo" className="w-auto h-10" />

                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold text-primary">
                            {t.reactNativeNigeria.line1}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                            {t.reactNativeNigeria.line2}
                        </span>
                    </div>
                </Link>

                {/* RIGHT BUTTON (Desktop) */}
                <div className="items-center hidden gap-4 lg:flex">
                    <LanguageSwitcher />
                    <a
                        href={t.joinCommunityLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ButtonComponent variant="primary">{t.joinCommunity}</ButtonComponent>
                    </a>
                </div>
                

                {/* MOBILE HEADER */}
                <div className="flex items-center justify-between w-full lg:hidden">
                    {/* Mobile Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={LogoPNG} alt="Logo" className="w-auto h-8" />
                        <span className="flex flex-col text-sm font-medium leading-tight text-black lg:text-primary">
                            <span>{t.reactNativeNigeria.line1}</span>
                            <span>{t.reactNativeNigeria.line2}</span>
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        aria-label="open-menu"
                        onClick={toggle}
                        className="text-3xl text-black lg:text-primary"
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
                        className="absolute text-4xl top-7 right-7 text-primary"
                    >
                        ×
                    </button>

                    {/* Mobile Links */}
                    {getNavLinks(t).map((link, i) => (
                        <Link
                            key={i}
                            to={link.link}
                            onClick={close}
                            className="text-xl text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <LanguageSwitcher />

                    {/* Join Button */}
                    <a
                        href={t.joinCommunityLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="mt-4"
                    >
                        <ButtonComponent variant="primary" className="px-6 py-3">
                            {t.joinCommunity}
                        </ButtonComponent>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavbarComponent;
