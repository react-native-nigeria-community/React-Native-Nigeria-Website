import React from "react";
import LinkedInSVG from "../../assets/svg/linkedIn.svg";

interface SocialIconProps {
  image: string;
  altText: string;
  link: string;
}

const SocialIcon = ({ image, altText, link }: SocialIconProps) => {
    return (
        <div className={"border-[1.5px] rounded-full border-bg1 h-[35px] w-[35px] flex justify-center items-center"}>
            <a href={link} target={"_blank"}><img src={image} alt={altText} /></a>
        </div>
    );
}

export default SocialIcon;