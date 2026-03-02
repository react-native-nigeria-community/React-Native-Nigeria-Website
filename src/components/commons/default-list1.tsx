import React from "react";

interface DefaultList1Props {
  image: string;
  text: string;
}

const DefaultList1 = ({ image, text }: DefaultList1Props) => {
    return (
        <div className={"text-primary/70 rounded-full text-[7.9px] w-fit p-1 flex items-center border-primary/70 border-[0.39px] gap-[2px]"}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </div>
    );
};

export default DefaultList1;