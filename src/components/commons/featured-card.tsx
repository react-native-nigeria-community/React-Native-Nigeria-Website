import React from "react";
import TypographyComponent from "./typography";

interface FeaturedCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, title, description, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="max-w-[345px] rounded-b-lg h-full bg-white mx-auto">
                <div>
                    <img src={image} alt={title} className="w-full object-contain" />
                </div>
                <div className="px-5 pt-4 pb-8">
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
