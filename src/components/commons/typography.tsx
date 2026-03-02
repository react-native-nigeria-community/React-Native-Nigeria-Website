import React from "react";
import clsx from "clsx";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type BreakpointPrefix = "sm" | "md" | "lg" | "xl" | "2xl";

// Define default styles for each variant
const TYPOGRAPHY_VARIANTS: Record<TypographyVariant, string> = {
    h1: "text-h1 font-bold leading-tight",
    h2: "text-h2 font-semibold leading-snug",
    h3: "text-mh3 lg:text-h3 font-semibold leading-snug",
    h4: "text-h4 font-medium leading-normal",
    h5: "text-h5 font-medium leading-normal",
    h6: "text-h6 font-medium leading-normal",
    p: "text-p leading-relaxed",
};

interface TypographyComponentProps {
    as?: React.ElementType;
    variant?: TypographyVariant;
    responsiveVariant?: Partial<Record<BreakpointPrefix, TypographyVariant>>;
    className?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
}

const TypographyComponent = ({
    as = "p",
    variant = "p",
    responsiveVariant = {},
    className,
    children,
    ...props
}: TypographyComponentProps) => {
    const Component = as as React.ElementType;

    const responsiveClasses = Object.entries(responsiveVariant)
        .map(([bp, v]) => `${bp}:${TYPOGRAPHY_VARIANTS[v as TypographyVariant]?.split(" ")[0] || ""}`)
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