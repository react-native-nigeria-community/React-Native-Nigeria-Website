import React from "react";
import TypographyComponent from "../commons/typography.jsx";

const WriteForUsCard = ({ title, description }) => {
    return (
        <div className="monotone-noise rounded-[10px] border-[1px] border-[#E7E9ED] px-7 pt-[58px] pb-[18px] lg:w-[351px]">
            <div>
                <TypographyComponent
                    as="h4"
                    variant="h4"
                    className="leading-8 tracking-[-1.8px] font-medium text-secondary"
                >
                    {title}
                </TypographyComponent>
            </div>

            <div className="mt-8">
                <TypographyComponent
                    as="h5"
                    variant="h5"
                    className="leading-8 tracking-[0.5px] text-secondary font-normal"
                >
                    {description}
                </TypographyComponent>
            </div>

            <div className="grid justify-items-end-safe">
                <div className="mt-2.5 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-bg2/20">
                    <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-bg1"
                    >
                        <path
                            d="M1 7.99984L16 8.22206"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 1L16 8L9 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default WriteForUsCard;