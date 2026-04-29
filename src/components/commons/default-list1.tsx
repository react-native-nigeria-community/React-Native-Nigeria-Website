import React from "react";

interface DefaultList1Props {
    image: string;
    text: string;
}

const DefaultList1: React.FC<DefaultList1Props> = ({ image, text }) => {
    return (
        <div className={"text-primary/70 rounded-full text-[7.9px] w-fit p-1 flex items-center border-primary/70 border-[0.39px] gap-[2px]"}>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default DefaultList1;
