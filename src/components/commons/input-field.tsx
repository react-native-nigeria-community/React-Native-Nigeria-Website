import React from "react";
import clsx from "clsx";

interface InputFieldComponentProps {
  label?: string;
  id?: string;
  cols?: number;
  rows?: number;
  as?: "textarea" | "input";
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  required?: boolean;
  name?: string;
}

const InputFieldComponent = ({
  label,
  id,
  cols,
  rows,
  as,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  className,
  ...props
}: InputFieldComponentProps) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label htmlFor={id} className="flex text-sm font-normal text-gray-700">
          {label}
        </label>
      )}

      {/* Conditional Render */}
      {as === "textarea" ? (
        <textarea
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          className={className}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={clsx(
            "",
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300",
            className
          )}
          {...props}
        />
      )}

      {/* Error Message */}
      {error && (
        <p
          id={`${id}-error`}
          className="flex mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputFieldComponent;
