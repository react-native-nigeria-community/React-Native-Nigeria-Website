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

const TypographyComponent = ({
                        as = "p",
                        variant = "p",
                        responsiveVariant = {},
                        className,
                        children,
                        ...props
                    }) => {
    const Component = as;

    // Build responsive classes like "lg:text-h4"
    const responsiveClasses = Object.entries(responsiveVariant)
        .map(([bp, v]) => `${bp}:${TYPOGRAPHY_VARIANTS[v]?.split(" ")[0] || ""}`)
        .join(" ");

    return (
        <Component
            className={clsx(TYPOGRAPHY_VARIANTS[variant], responsiveClasses, className)}
            {...props}
        >
            {children}
        </Component>
    );
};

export default TypographyComponent;