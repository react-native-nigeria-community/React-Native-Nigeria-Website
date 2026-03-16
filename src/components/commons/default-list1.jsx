import React from "react";

const DefaultList1 = ({ image, text }) => {
    return (
        <div className={"text-primary/70 rounded-full text-[7.9px] w-fit p-1 flex items-center border-primary/70 border-[0.39px] gap-[2px]"}>
            <img src={image} />
            <p>{text}</p>
        </div>
    );
};

export default DefaultList1;