import React from "react";
import TypographyComponent from "./typography.jsx";

const FeaturedCard =({image, title, description, link}) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
       <div className="flex flex-col w-full max-w-[345px] mx-auto border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="flex items-center justify-center border border-[#E5E7EB] rounded-t-lg overflow-hidden w-full">
           <img src={image} alt={`${title}-icon`} className="w-full object-contain" />
         </div>


          <div className="bg-white lg:bg-transparent w-full mb-6 space-y-6 lg:space-y-2.5 px-4 py-3 lg:px-0 lg:py-0">
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