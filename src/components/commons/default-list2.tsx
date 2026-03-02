import React from "react";
import TypographyComponent from "./typography.jsx";

interface DefaultList2Props {
  image: string;
  description: string;
  pClassName?: string;
}

const DefaultList2 = ({ image, description, pClassName }: DefaultList2Props) => {
    return (
        <div className={"flex items-center gap-[5px]"}>
            <img src={image} alt={image} className={"h-6 w-6"} />
            <p className={pClassName}>{description}</p>
        </div>
    );
}

export default DefaultList2;