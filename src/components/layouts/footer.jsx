import React from "react";
import LogoPNG from "../../assets/img/nav-logo.png";
import TwitterPNG from "../../assets/img/socials/twitter.png";
import InstagramSVG from "../../assets/svg/instagram.svg";
import TypographyComponent from "../commons/typography.jsx";

const FooterComponent = () => {
    return (
        <footer className="bg-yellow-400 px-9 py-12 lg:px-[125px] lg:py-12 fixed right-0 left-0 bottom-0">
            <div className={"grid justify-items-center-safe lg:flex lg:items-start"}>
                <div className="flex items-center gap-3 grow">
                    <img src={LogoPNG} alt="official-logo" className="w-12 h-12" />
                    <TypographyComponent
                        variant="h6"
                        as="h6"
                        className="w-[109px] font-semibold text-left"
                    >
                        Build with React Native
                    </TypographyComponent>
                </div>
                <div className={"grid w-full pt-11 lg:pt-0 lg:flex-none lg:flex-row lg:w-auto"}>
                    <ul className="flex justify-between text-h6 lg:flex-row lg:items-center lg:gap-4 font-medium">
                        <li className="cursor-pointer hover:underline">Home</li>
                        <li className="cursor-pointer hover:underline">About Us</li>
                        <li className="cursor-pointer hover:underline">Events</li>
                        <li className="cursor-pointer hover:underline">Contact</li>
                    </ul>
                    <div className={"flex justify-center gap-6 py-11 lg:justify-end lg:py-0 lg:pt-8"}>
                        <img src={TwitterPNG} alt={"twitter-png"} />
                        <img src={InstagramSVG} alt={"instagram-icon"} />
                    </div>
                </div>
            </div>
            <div className={"space-y-11 lg:pt-11 text-black text-[14px] lg:space-y-0 lg:flex lg:justify-between"}>
                <TypographyComponent as={"p"} variant={"p"} className={"text-[14px]! text-black!"}>
                    @ {new Date().getFullYear()} Build with React Native
                </TypographyComponent>
                <ul className={"flex justify-between lg:gap-6"}>
                    <li>Privacy & Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </footer>
    );
};

export default FooterComponent;