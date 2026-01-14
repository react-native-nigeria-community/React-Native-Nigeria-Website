import React from "react";
import TypographyComponent from "./typography.jsx";

const GridFlowCard = ({ icon, title, description }) => {
    return (
        <div className="grid grid-cols-4 grid-rows-3 space-x-5 lg:px-0 lg:w-[455px] lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:grid-rows-3 text-left">
            <div className="w-fit row-span-1 lg:row-span-4">
                <div className="rounded-[15px] w-[60px] h-[60px] flex items-center justify-center lg:p-[22px] bg-bg2/10 lg:w-[79px] lg:h-[79px]">
                    {icon}
                </div>
            </div>

            <div className="pl-2 col-span-3 place-self-center lg:place-self-start lg:pl-0 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit">
                <TypographyComponent
                    as="h4"
                    variant="h4"
                    className="font-semibold! text-bg1! tracking-normal leading-none! lg:text-primary! lg:text-h5/8! lg:tracking-[-0.5px]"
                >
                    {title}
                </TypographyComponent>
            </div>

            <div className="mt-3 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3 h-full">
                <p className="text-base/7 font-[400] tracking-normal text-bg1 lg:text-primary/70 lg:leading-[29px] lg:tracking-[-0.2px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GridFlowCard;