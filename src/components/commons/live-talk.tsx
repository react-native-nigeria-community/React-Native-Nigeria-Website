import React from "react";
import TypographyComponent from "./typography";
import ButtonComponent from "./button";

interface LiveTalkCardProps {
    label?: string;
    title: string;
    date: string;
    time: string;
    buttonText?: string;
    buttonLink: string;
}

const LiveTalkCard: React.FC<LiveTalkCardProps> = ({
    label = "Live Talk",
    title,
    date,
    time,
    buttonText = "Watch Live Talk",
    buttonLink,
}) => {
    return (
        <div className="monotone-noise grid px-6 pt-6 pb-3.5 rounded-lg lg:px-7 lg:w-[350px] lg:pb-[51px]">
            <div className="w-fit py-2 bg-bg3/10 rounded-[14.5px] uppercase lg:mt-10">
                <p className="text-secondary text-[13px] font-medium leading-none tracking-[1.63px]">
                    {label}
                </p>
            </div>

            <div className="gap-y-2.5 lg:gap-y-3.5 lg:mr-[65px] lg:mt-4">
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

            <div className="mt-6 lg:mt-20 items-end text-center text-[14px]! leading-[17px] font-medium lg:flex lg:justify-center">
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
