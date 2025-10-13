import React from "react";
import LinkedInSVG from "../../assets/svg/linkedIn.svg";

const SocialIcon = ({image, altText}) => {
    return (
        <div className={"border-[1.5px] rounded-full border-bg1 h-[35px] w-[35px] flex justify-center items-center"}>
            <img src={image} alt={altText} />
        </div>
    );
}

export default SocialIcon;