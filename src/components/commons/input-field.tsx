import React from "react";
import clsx from "clsx";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    id: string;
    as?: "input" | "textarea";
    error?: string;
    cols?: number;
    rows?: number;
}

const InputFieldComponent: React.FC<InputFieldProps> = ({
    label,
    id,
    cols,
    rows,
    as = "input",
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    className,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="flex text-sm font-normal text-gray-700">
                    {label}
                </label>
            )}

            {as === "textarea" ? (
                <textarea
                    id={id}
                    cols={cols}
                    rows={rows}
                    placeholder={placeholder}
                    className={clsx("border-gray-300", className)}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={clsx(
                        "",
                        error
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300",
                        className
                    )}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}

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
