import React, { useState } from "react";
import MenuSVG from "../../assets/svg/mobile/menu.svg";
import LogoPNG from "../../assets/img/nav-logo.png";
import TypographyComponent from "../commons/typography.jsx";
import ButtonComponent from "../commons/button.jsx";
import en from "../../locales/en.js";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white lg:fixed top-0 left-0 right-0 flex items-center justify-between w-full px-[20px] lg:px-[125px] py-4 z-50">
            {/* Logo + Branding */}
            <div className="flex items-center gap-1">
                <img src={LogoPNG} alt="official-logo" className="w-12 h-12" />
                <TypographyComponent
                    variant="h6"
                    as="h6"
                    className="w-[109px] font-semibold text-left" responsiveVariant={{lg: ""}}
                >
                    {en.navLogoText}
                </TypographyComponent>
            </div>

            {/* Desktop Menu */}
            <ul aria-label="desktop menu" className="hidden lg:flex items-center gap-14 text-primary">
                <li className="hover:text-secondary text-secondary cursor-pointer">{en.navHome}</li>
                <li className="hover:text-secondary cursor-pointer">{en.navAbout}</li>
                <li className="hover:text-secondary cursor-pointer">{en.navEvent}</li>
            </ul>

            {/* Desktop Button */}
            <ButtonComponent variant="primary" className="hidden lg:block">
                {en.joinCommunity}
            </ButtonComponent>

            {/* Mobile Menu Button + Dropdown */}
            <div className="lg:hidden relative">
                <button aria-label="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <img src={MenuSVG} alt="menu" className="w-7 h-7" />
                </button>

                {/* Animated Mobile Menu */}
                <ul aria-label="mobile menu"
                    className={`absolute right-0 mt-3 divide-y-[1px] divide-secondary px-[42px] bg-primary text-secondary rounded-[10px] shadow-lg w-[220px] overflow-hidden transform transition-transform duration-300 ${
                        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } origin-top`}
                >
                    <li className="px-auto py-2.5 hover:bg-secondary/20">{en.navHome}</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">{en.navAbout}</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">{en.navEvent}</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">{en.navContact}</li>
                    <li className="px-auto py-2.5 text-nowrap px-auto">
                        {en.joinCommunity}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;