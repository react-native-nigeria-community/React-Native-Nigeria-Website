import React from "react";
import LogoPNG from "../../assets/img/nav-logo.png";
import TypographyComponent from "../commons/typography.jsx";
import en from "../../locales/en.js";
import {getNavLinks} from "../../../utils/nav-links.jsx";
import NavList from "../commons/nav-list.jsx";
import {getSocials} from "../../../utils/social-links.jsx";
import SocialIcon from "../commons/social-icon.jsx";

const FooterComponent = () => {
    return (
        <footer className="bg-bg2 px-9 py-12 lg:px-[125px] lg:py-12 right-0 left-0 bottom-0">
            <div className={"grid justify-items-center-safe lg:flex lg:items-start"}>
                <div className="flex items-center gap-3 grow">
                    <img src={LogoPNG} alt="official-logo" className="h-[31.19px] w-[31.19px]" />
                    <TypographyComponent
                        variant="h6"
                        as="h6"
                        className="w-[109px] leading-none! tracking-normal! font-semibold text-left"
                    >
                        {en.navLogoText}
                    </TypographyComponent>
                </div>
                <div className={"grid w-full pt-11 lg:pt-0 lg:flex-none lg:flex-row lg:w-auto"}>
                    <ul className="flex justify-between text-h6 lg:flex-row lg:items-center lg:gap-4 font-medium">
                        {getNavLinks.map((link, index) => (
                            <NavList
                                key={index}
                                label={link.label}
                                link={link.link}
                            />
                        ))}
                    </ul>
                    <div className={"flex justify-center gap-6 py-11 lg:justify-end lg:py-0 lg:pt-8"}>
                        {getSocials.map((social, index) => (
                            <SocialIcon
                                key={index}
                                image={social.image}
                                altText={social.altText}
                                link={social.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={"space-y-11 lg:pt-11 text-black text-[14px] lg:space-y-0 lg:flex lg:justify-between"}>
                <TypographyComponent as={"h6"} variant={"h6"} className={"text-[14px]! tracking-normal! text-center text-bg1! font-normal! lg:text-primary leading-none!"}>
                    © {new Date().getFullYear()} {en.copyRight}
                </TypographyComponent>
                <ul className={"flex justify-between lg:gap-6"}>
                    <li>{en.privacyPolicy}</li>
                    <li>{en.termsConditions}</li>
                </ul>
            </div>
        </footer>
    );
};

export default FooterComponent;