import React from "react";

interface SocialIconProps {
    image: string;
    altText: string;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ image, altText, link }) => {
    return (
        <div className={"border-[1.5px] rounded-full border-bg1 h-[35px] w-[35px] flex justify-center items-center"}>
            <a href={link} target={"_blank"} rel="noopener noreferrer">
                <img src={image} alt={altText} />
            </a>
        </div>
    );
};

export default SocialIcon;
