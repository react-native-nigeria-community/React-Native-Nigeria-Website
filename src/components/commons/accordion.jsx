import React, { useState } from "react";
import ChevronUpSVG from "../../assets/svg/chevronup.svg";
import ChevronDownSVG from "../../assets/svg/chevrondown.svg";

const AccordionItems = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="mx-6 lg:mx-[155px]">
            <button
                className={`w-full flex items-center justify-between text-[12px] lg:text-h4 px-4 py-2.5 lg:px-[100px] h-14 lg:h-[157px] rounded-xl lg:rounded-[40px] transition-all duration-300 text-left
                ${isOpen ? "bg-white border lg:border-primary" : "bg-primary"} `}
                onClick={onClick}
            >
                <span
                    className={`text-[12px] lg:text-h4 transition-colors duration-300 
                    ${isOpen ? "text-primary" : "text-secondary"}`}
                >
                    {title}
                </span>
                {isOpen ? (
                    <img src={ChevronUpSVG} className="w-5 h-5 transition-transform duration-300 text-secondary fill-secondary" alt="chevron-up" />
                ) : (
                    <img src={ChevronDownSVG} className="w-5 h-5 transition-transform duration-300" alt="chevrondown" />
                )
                }
            </button>
            {/* Accordion Content */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="px-6 lg:px-[150px] text-primary text-[12px] lg:text-h4">
                    {children}
                </div>
            </div>
        </div>
    );
};

const AccordionComponent = ({ items, allowMultiple = false }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="w-full space-y-6 lg:space-y-10">
            {items.map((item, index) => (
                <AccordionItems
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => toggleAccordion(index)}
                >
                    {item.content}
                </AccordionItems>
            ))}
        </div>
    );
};

export default AccordionComponent;