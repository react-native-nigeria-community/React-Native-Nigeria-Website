import React from "react";
import TypographyComponent from "./typography.jsx";

const FeaturedCard =({image, title, description, link}) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={"space-y-[22px]"}>
            <div className={"rounded-lg flex items-center justify-center"}>
                <img src={image} alt={`${title}-icon`} />
            </div>
            <div className={"bg-white mx-auto space-y-6 lg:bg-transparent lg:mx-auto lg:space-y-2.5 w-[287px]"}>
                <TypographyComponent as={"h6"} variant={"h6"} className={"font-normal! leading-none! text-secondary! lg:text-secondary/70!"}>
                    {title}
                </TypographyComponent>
                <TypographyComponent as={"h5"} variant={"h5"} className={"text-h5/8! text-secondary! tracking-[-0.5px]! font-medium!"}>
                    {description}
                </TypographyComponent>
            </div>
        </div>
        </a>
    );
};


export default FeaturedCard;