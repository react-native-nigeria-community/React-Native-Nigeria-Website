import React from "react";
import TypographyComponent from "./typography.jsx";

const FeaturedCard = ({ image, title, description, link }) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
       <div className="w-[345px] mx-auto **text-center lg:text-left**">
          <div className="-mb-12">
          <img src={image} alt={title} className="w-[345px] object-cover" />
        </div>
          <div className="bg-white w-[345px] px-5 pt-12 pb-8 lg:h-44 rounded-b-lg">
                <TypographyComponent as="h6" variant="h6" className="font-normal leading-none text-secondary lg:text-secondary/70">
                 {title}
                </TypographyComponent>
                <TypographyComponent as={"h5"} variant={"h5"} className={"mt-3 text-secondary font-medium tracking-tight"}>
                    {description}
                </TypographyComponent>
            </div>
        </div>
        </a>
    );
};


export default FeaturedCard;