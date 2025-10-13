import React from "react";
import TypographyComponent from "./typography.jsx";

const FeaturedCard =({image, title, description}) => {

    return (
        <div className={"space-y-6"}>
            <div className={"rounded-lg"}>
                <img src={image} alt={`${title}-icon`} />
            </div>
            <div className={"bg-white space-y-6 lg:bg-transparent lg:mx-auto lg:space-y-2.5 lg:w-[287px] lg:pb-[27px] lg:pt-[22px]"}>
                <TypographyComponent as={"h6"} variant={"h6"} className={"font-normal! leading-none"}>
                    {title}
                </TypographyComponent>
                <TypographyComponent as={"h5"} variant={"h5"} className={"text-h5/8!"}>
                    {description}
                </TypographyComponent>
            </div>
        </div>
    );
};


export default FeaturedCard;