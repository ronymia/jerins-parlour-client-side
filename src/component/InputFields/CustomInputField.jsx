import React, { useRef } from "react";

export default function CustomInputField({
    required = false,
    disabled = false,
    readOnly = false,
    type,
    id,
    name,
    value,
    label,
    defaultValue,
    min,
    max,
    minLength,
    maxLength,
    placeholder,
    onChange,
    onBlur,
    error,
    className
}) {
    const inputRef = React.useRef();

    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            {label &&
                <label htmlFor={id}
                    className="text-[#899694] text-sm"
                >
                    <span>{label`${required && "*"}`}</span>
                </label>
            }

            {/* INPUT FIELD */}
            <input
                required={required}
                readOnly={readOnly}
                disabled={disabled}
                type={type}
                id={id}
                name={name}
                value={value}
                defaultValue={defaultValue}
                min={min}
                max={max}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                ref={inputRef}
                onChange={onChange}
                onBlur={onBlur}
                className={className}
            />

            {/* Validation Massage */}
            {error &&
                <label htmlFor={id}>
                    <p role="alert" aria-label="Error Massage">{error}</p>
                </label>
            }
        </div>
    )
}
