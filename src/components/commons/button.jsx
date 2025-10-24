import React from "react";

const VARIANT_STYLES = {
    primary: "bg-bg2 rounded-lg text-bg1 font-rubik px-6 text-[18px] font-medium",
    secondary: "bg-primary rounded-lg text-secondary w-[206px] font-rubik text-[18px] font-medium",
    accent: "bg-primary border-2 border-border-primary rounded-lg text-secondary font-rubik font-medium",
};

const disableButton = false;

const ButtonComponent = ({ children, className, onClick, disabled = disableButton, type = "button", variant = "primary" }) => {
    const baseStyles = "px-4 py-2 rounded disabled:opacity-50";
    const variantStyles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonComponent;