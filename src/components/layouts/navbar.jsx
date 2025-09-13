import React, { useState } from "react";
import Menu from "../../assets/svg/mobile/menu.svg";
import Logo from "../../assets/img/nav-logo.png";
import Button from "../common/button.jsx";
import Typography from "../common/typography.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-[20px] lg:px-[125px] py-4 z-50">
            {/* Logo + Branding */}
            <div className="flex items-center gap-1">
                <img src={Logo} alt="official-logo" className="w-12 h-12" />
                <Typography
                    variant="h6"
                    as="h6"
                    className="w-[109px] font-semibold text-left" responsiveVariant={{lg: ""}}
                >
                    Build with React Native
                </Typography>
            </div>

            {/* Desktop Menu */}
            <ul aria-label="desktop menu" className="hidden lg:flex items-center gap-14 text-primary">
                <li className="hover:text-secondary text-secondary cursor-pointer">Home</li>
                <li className="hover:text-secondary cursor-pointer">About</li>
                <li className="hover:text-secondary cursor-pointer">Events</li>
            </ul>

            {/* Desktop Button */}
            <Button variant="primary" className="hidden lg:block">
                Join Community
            </Button>

            {/* Mobile Menu Button + Dropdown */}
            <div className="lg:hidden relative">
                <button aria-label="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <img src={Menu} alt="menu" className="w-7 h-7" />
                </button>

                {/* Animated Mobile Menu */}
                <ul aria-label="mobile menu"
                    className={`absolute right-0 mt-3 divide-y-[1px] divide-secondary px-[42px] bg-primary text-secondary rounded-[10px] shadow-lg w-[220px] overflow-hidden transform transition-transform duration-300 ${
                        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } origin-top`}
                >
                    <li className="px-auto py-2.5 hover:bg-secondary/20">Home</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">About</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">Events</li>
                    <li className="px-auto py-2.5 hover:bg-secondary/20">Contact</li>
                    <li className="px-auto py-2.5 text-nowrap px-auto">
                        Join Community
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
