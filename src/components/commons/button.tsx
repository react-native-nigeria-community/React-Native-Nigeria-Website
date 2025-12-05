import React from "react";
import { VARIANT_STYLES } from "../../constants/button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof VARIANT_STYLES;
  size?: string;
}

const ButtonComponent = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
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
