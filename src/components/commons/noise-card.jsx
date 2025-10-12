import React from "react";
import TypographyComponent from "./typography.jsx";
import ButtonComponent from "./button.jsx";

const LiveTalkCard = ({
                          label = "Live Talk",
                          title,
                          date,
                          time,
                          buttonText = "Watch Live Talk",
                      }) => {
    return (
        <div className="monotone-noise px-[5%] pt-[5%] pb-[3%] rounded-lg lg:px-0 lg:w-[30%] lg:pb-[4%]">
            {/* Label */}
            <div className="w-fit py-[0.5rem] px-[1%] bg-bg3/10 rounded-[1rem] uppercase lg:mt-[5%] lg:ml-[5%]">
                <p className="text-secondary text-[0.8rem] font-medium leading-none tracking-[0.1em]">
                    {label}
                </p>
            </div>

            {/* Title + Date + Time */}
            <div className="space-y-[2%] lg:space-y-[3%] lg:ml-[5%] lg:mr-[8%] lg:mt-[2%]">
                <TypographyComponent
                    as="h3"
                    className="text-mh3! font-semibold leading-none tracking-[-0.1em] lg:text-h4/8! text-secondary"
                >
                    {title}
                </TypographyComponent>

                <TypographyComponent
                    as="h6"
                    className="text-h6/5! font-normal text-secondary opacity-70 lg:text-[1.25rem]! lg:leading-[1.8rem]!"
                >
                    {date}
                </TypographyComponent>

                <TypographyComponent
                    as="h6"
                    className="text-h6/5! font-normal text-secondary opacity-70 lg:text-[1.25rem]! lg:leading-[1.8rem]!"
                >
                    {time}
                </TypographyComponent>
            </div>

            {/* Button */}
            <div className="mt-[5%] lg:mt-[10%] text-center text-[0.9rem]! leading-[1rem] font-medium lg:flex lg:justify-center">
                <ButtonComponent
                    variant="primary"
                    className="text-bg1! lg:text-[1.125rem] lg:leading-[1.5rem]! lg:py-[0.8rem] lg:px-[8%]"
                >
                    {buttonText}
                </ButtonComponent>
            </div>
        </div>
    );
};

export default LiveTalkCard;