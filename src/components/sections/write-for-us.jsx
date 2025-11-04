import React from "react";
import TypographyComponent from "../commons/typography.jsx";
import ArrowRightSvg from "../../assets/svg/svgs/arrow-right.jsx";

const WriteForUsCard = ({ title, description, link }) => {
    return (
        <div className="monotone-noise grid rounded-[0.625rem] border-[1px] border-[#E7E9ED] px-7 pt-[3.625rem] pb-[1.125rem] lg:w-[21.938rem]">
            <div>
                <TypographyComponent
                    as="h4"
                    variant="h4"
                    className="leading-8 tracking-[-0.113rem] font-medium text-secondary"
                >
                    {title}
                </TypographyComponent>
            </div>

            <div className="mt-8">
                <TypographyComponent
                    as="h5"
                    variant="h5"
                    className="leading-8! tracking-[-0.5px]! text-secondary font-normal!"
                >
                    {description}
                </TypographyComponent>
            </div>

            <div className="grid justify-items-end-safe">
      <div className="grid justify-items-end-safe">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 w-[2.625rem] h-[2.625rem] rounded-full flex justify-center items-center bg-bg2/20 hover:bg-bg2/40 transition"
        >
          <ArrowRightSvg className="text-bg1" />
        </a>
      </div>
            </div>
        </div>
    );
};

export default WriteForUsCard;