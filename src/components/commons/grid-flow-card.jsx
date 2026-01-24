import React from "react";
import TypographyComponent from "./typography.jsx";

const GridFlowCard = ({ icon, title, description }) => {
    return (
        <div className="flex gap-5 lg:w-[455px] h-full text-left">
            <div className="w-fit row-span-1 lg:row-span-4">
                <div className="rounded-[15px] w-[60px] h-[60px] flex items-center justify-center lg:p-[22px] bg-bg2/10 lg:w-[79px] lg:h-[79px]">
                    {icon}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="col-span-3 md:place-self-center lg:place-self-start lg:pl-0 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit">
                    <TypographyComponent
                        as="h4"
                        variant="h4"
                        className="max-w-[24ch] whitespace-normal font-semibold! text-bg1! tracking-normal leading-none! lg:text-primary! lg:text-h5/8! lg:tracking-[-0.5px]"
                    >
                        {title}
                    </TypographyComponent>
                </div>

                <div className="mt-1 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3">
                    <p className="text-base/7 font-[400] tracking-normal text-bg1 lg:text-primary/70 lg:leading-[29px] lg:tracking-[-0.2px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GridFlowCard;