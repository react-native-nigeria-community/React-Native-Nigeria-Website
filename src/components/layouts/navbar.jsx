import React, { useState } from "react";
import MenuSVG from "../../assets/svg/mobile/menu.svg";
import LogoPNG from "../../assets/img/nav-logo.png";
import Button from "../common/button.jsx";
import Typography from "../common/typography.jsx";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-[20px] lg:px-[125px] py-4 z-50 bg-white">
            {/* Logo + Branding */}
            <div className="flex items-center gap-3">
                <img src={LogoPNG} alt="official-logo" className="w-12 h-12" />
                <Typography
                    variant="h6"
                    as="h6"
                    className="w-[109px] font-semibold text-left"
                >
                    Build with React Native
                </Typography>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-14 text-primary">
                <li className="hover:text-secondary text-secondary cursor-pointer">Home</li>
                <li className="hover:text-secondary cursor-pointer">About</li>
                <li className="hover:text-secondary cursor-pointer">Events</li>
            </ul>

            {/* Desktop Button */}
            <Button variant="primary" onClick={() => alert("Link to join the community")} className="hidden lg:block cursor-pointer">
                Join Community
            </Button>

            {/* Mobile Menu Button + Dropdown */}
            <div className="lg:hidden relative">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={MenuSVG} alt="menu" className="w-7 h-7" />
                </button>

                {/* Animated Mobile Menu */}
                <ul
                    className={`absolute right-0 mt-3 bg-primary text-secondary rounded-[10px] shadow-lg divide-secondary divide-y-[1px] px-10 w-[220px] overflow-hidden transform transition-transform duration-300 ${
                        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } origin-top`}
                >
                    <li className="px-5 py-2.5 hover:bg-secondary/20">Home</li>
                    <li className="px-5 py-2.5 hover:bg-secondary/20">About</li>
                    <li className="px-5 py-2.5 hover:bg-secondary/20">Events</li>
                    <li className="px-5 py-2.5 hover:bg-secondary/20">Contact</li>
                    <li className="px-2 py-2.5 hover:bg-secondary/20">Join Community</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;