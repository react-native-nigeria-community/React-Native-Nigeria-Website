import React from "react";

interface DefaultList2Props {
    image: string;
    description: string;
    pClassName?: string;
}

const DefaultList2: React.FC<DefaultList2Props> = ({ image, description, pClassName }) => {
    return (
        <div className={"flex items-center gap-[5px]"}>
            <img src={image} alt="" className={"h-6 w-6"} />
            <p className={pClassName}>{description}</p>
        </div>
    );
}

export default DefaultList2;
