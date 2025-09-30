import React from "react";
import clsx from "clsx";

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
                    }) => {
    return (
        <div className="w-full">
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-normal text-gray-700 flex"
                >
                    {label}
                </label>
            )}

            {/* Conditional Render */}
            {as === "textarea" ?
                (
                    <textarea
                        cols={cols}
                        rows={rows}
                        placeholder={placeholder}
                        className={className}
                    />
                )
                :
                (
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
                        {...props}
                    />
                )}

            {/* Error Message */}
            {error && (
                <p
                    id={`${id}-error`}
                    className="mt-1 text-sm text-red-600 flex"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputFieldComponent;