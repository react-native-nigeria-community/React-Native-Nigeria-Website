import React, { useState } from "react";
import MenuSVG from "../../assets/svg/mobile/menu.svg";
import LogoPNG from "../../assets/img/nav-logo.png";
import ButtonComponent from "../commons/button.jsx";
import en from "../../locales/en.js";
import NavList from "../commons/nav-list.jsx";
import {links} from "../../utils/get-links.js";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="lg:bg-bg1 lg:sticky top-0 left-0 right-0 flex items-center justify-between w-full px-[20px] lg:px-[125px] py-4 z-50">
            {/* Logo + Branding */}
            <div className="flex items-center gap-1">
                <img src={LogoPNG} alt="official-logo" className="w-[31.19px] h-[31.19px] lg:w-12 lg:h-12" />
                <p className="w-[72.28px] lg:w-[109px] text-[10.84px] leading-none tracking-normal font-semibold text-left text-secondary lg:text-primary lg:text-[16.34px]!">
                    {en.navLogoText}
                </p>
            </div>

            {/* Desktop Menu */}
            <ul aria-label="desktop menu" className="hidden lg:flex items-center gap-14 text-primary">
                {links.slice(0, 3).map((link, index) => (
                    <NavList
                        key={index}
                        label={link.label}
                        link={link.link}
                    />
                ))}
            </ul>

            {/* Desktop Button */}
            <ButtonComponent variant="primary" className="hidden lg:block cursor-pointer">
                {en.joinCommunity}
            </ButtonComponent>

            {/* Mobile Menu Button + Dropdown */}
            <div className="lg:hidden relative">
                <button aria-label="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <img src={MenuSVG} alt="menu" className="w-7 h-7" />
                </button>

                {/* Animated Mobile Menu */}
                <ul aria-label="mobile menu"
                    className={`absolute right-0 mt-3 divide-y-[1px] divide-bg2! px-[42px] bg-bg1 text-bg2 rounded-[10px] shadow-lg w-[220px] overflow-hidden transform transition-transform duration-300 ${
                        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } origin-top`}
                >
                    {links.map((link, index) => (
                        <NavList
                        key={index}
                        label={link.label}
                        link={link.link}
                        />
                    ))}
                    <NavList label={"Join Community"} link={""} />
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;
