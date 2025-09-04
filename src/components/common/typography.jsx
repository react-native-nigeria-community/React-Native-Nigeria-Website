import React from "react";
import clsx from "clsx";

// Define default styles for each variant
const TYPOGRAPHY_VARIANTS = {
    h1: "text-h1 font-bold leading-tight text-primary",
    h2: "text-h2 font-semibold leading-snug text-primary",
    h3: "text-h3 font-semibold leading-snug text-primary",
    h4: "text-h4 font-medium leading-normal text-primary",
    h5: "text-h5 font-medium leading-normal text-primary",
    h6: "text-h6 font-medium leading-normal text-primary",
    p: "text-p leading-relaxed text-primary",
};

const Typography = ({ as = "p", variant = "p", className, children, ...props }) => {
    const Component = as; // allows dynamic HTML element
    return (
        <Component
            className={clsx(TYPOGRAPHY_VARIANTS[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;