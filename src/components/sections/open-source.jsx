import React from "react";
import TypographyComponent from "../commons/typography.jsx";
import StarSvg from "../../assets/svg/svgs/star.jsx";
import ForkSvg from "../../assets/svg/svgs/fork-icon.jsx";
import ArrowRightSvg from "../../assets/svg/svgs/arrow-right.jsx";

const OpenSourceCard = ({star, fork, title, description}) => {
    return (
        <div className="bg-bg4 group flex items-center mt-[30px] rounded-[10px] px-[30px] py-[33px] lg:w-[350px] lg:hover:bg-bg1 transition-colors duration-300">
            <div className="text-left">
                {/* Stats Section */}
                <div className="flex gap-2.5 pb-2.5">
                    {/* Star Icon + Count */}
                    <div className="flex items-center">
                        <StarSvg className={"fill-bg1 group-hover:fill-bg2 transition-colors duration-300"} />
                        <TypographyComponent
                            as="h5"
                            variant="h5"
                            className="text-bg1! lg:group-hover:text-bg2! ml-1"
                        >
                            {star}
                        </TypographyComponent>
                    </div>

                    {/* Download Icon + Count */}
                    <div className="flex items-center">
                        <ForkSvg className={"fill-bg1 group-hover:fill-bg2 transition-colors duration-300"} />
                        <TypographyComponent
                            as="h5"
                            variant="h5"
                            className="text-bg1! lg:group-hover:text-bg2! ml-1"
                        >
                            {fork}
                        </TypographyComponent>
                    </div>
                </div>

                {/* Title */}
                <TypographyComponent
                    as="h5"
                    variant="h5"
                    className="text-bg1! lg:group-hover:text-bg2! font-medium tracking-[-0.5px] leading-[30px]"
                >
                    {title}
                </TypographyComponent>

                {/* Description */}
                <p className="text-bg1/70 tracking-[-0.1px] leading-[26px] font-normal group-hover:text-white/70 mt-[5px]">
                    {description}
                </p>
            </div>

            {/* Arrow Icon */}
            <div className="rounded-full w-[42px] h-[42px] p-3.5 bg-bg2/20 group-hover:bg-bg4/20 flex items-center justify-center transition-colors duration-300">
                <ArrowRightSvg className={"text-bg1 group-hover:text-bg2 transition-colors duration-300"} />
            </div>
        </div>
    );
};

export default OpenSourceCard;