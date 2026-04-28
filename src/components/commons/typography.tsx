import React from "react";
import clsx from "clsx";

const TYPOGRAPHY_VARIANTS = {
    h1: "text-h1 font-bold leading-tight",
    h2: "text-h2 font-semibold leading-snug",
    h3: "text-mh3 lg:text-h3 font-semibold leading-snug",
    h4: "text-h4 font-medium leading-normal",
    h5: "text-h5 font-medium leading-normal",
    h6: "text-h6 font-medium leading-normal",
    p: "text-p leading-relaxed",
};

type Variant = keyof typeof TYPOGRAPHY_VARIANTS;

interface TypographyProps {
    as?: React.ElementType;
    variant?: Variant;
    responsiveVariant?: Partial<Record<string, Variant>>;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
}

const TypographyComponent: React.FC<TypographyProps> = ({
    as: Component = "p",
    variant = "p",
    responsiveVariant = {},
    className,
    children,
    ...props
}) => {
    const responsiveClasses = Object.entries(responsiveVariant)
        .map(([bp, v]) => `${bp}:${TYPOGRAPHY_VARIANTS[v as Variant]?.split(" ")[0] || ""}`)
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
