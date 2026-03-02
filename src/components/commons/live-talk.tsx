import React from "react";
import TypographyComponent from "./typography.jsx";
import ButtonComponent from "./button.js";

interface LiveTalkCardProps {
  label?: string;
  title: string;
  date: string;
  time: string;
  buttonText?: string;
  buttonLink: string;
}

const LiveTalkCard = ({
    label = "Live Talk",
    title,
    date,
    time,
    buttonText = "Watch Live Talk",
    buttonLink,
}: LiveTalkCardProps) => {
    return (
        <div className="monotone-noise grid px-6 pt-6 pb-3.5 rounded-lg lg:px-0 lg:w-[350px] lg:pb-[51px]">
            {/* Label */}
            <div className="w-fit py-2 px-[3px] bg-bg3/10 rounded-[14.5px] uppercase lg:mt-10 lg:ml-7">
                <p className="text-secondary text-[13px] font-medium leading-none tracking-[1.63px]">
                    {label}
                </p>
            </div>

            {/* Title + Date + Time */}
            <div className="space-y-2.5 lg:space-y-3.5 lg:ml-7 lg:mr-[65px] lg:mt-4">
                <TypographyComponent
                    as="h3"
                    className="text-mh3! font-semibold leading-none tracking-[-1.8px] lg:text-h4/8!"
                >
                    {title}
                </TypographyComponent>

                <TypographyComponent
                    as="h6"
                    className="text-h6/5! font-normal text-secondary opacity-70 lg:text-[20px]! lg:leading-[29px]!"
                >
                    {date}
                </TypographyComponent>

                <TypographyComponent
                    as="h6"
                    className="text-h6/5! font-normal text-secondary opacity-70 lg:text-[20px]! lg:leading-[29px]!"
                >
                    {time}
                </TypographyComponent>
            </div>

            {/* Button */}
            <div className="mt-6 lg:mt-20 text-center text-[14px]! leading-[17px] font-medium lg:flex lg:justify-center">
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <ButtonComponent
                    variant="primary"
                    className="lg:text-[18px] lg:leading-[26px]! lg:py-3 lg:px-[38px]"
                >
                    {buttonText}
                </ButtonComponent>
                </a>
            </div>
        </div>
    );
};

export default LiveTalkCard;