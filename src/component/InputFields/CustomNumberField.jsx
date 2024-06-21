import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function CustomNumberField({
    id,
    name,
    label,
    min,
    max,
    minLength,
    maxLength,
    defaultValue,
    placeholder,
    // error,
    className,
    required = false,
    readOnly = false,
    disabled = false,
    onChange,
    onBlur,
    value,
}) {
    const inputRef = useRef();
    console.log(inputRef);
    const [error, setError] = useState("");
    console.log(error);

    // Maximum Length of the input field
    const onInput = () => {
        if (inputRef.current.value.length > inputRef.current.maxLength) {
            inputRef.current.value = inputRef.current.value.slice(0, inputRef.current.maxLength);
        }
        if (inputRef.current.max < inputRef.current.value) {
            setError("max must be greater than");
        }
        if (inputRef.current.max >= inputRef.current.value) {
            setError("");
        }
    }


    useEffect(() => {
        const inputElement = inputRef.current;
        const handleWheel = (event) => {
            event.preventDefault();
        };

        const handleKeyDown = (event) => {
            console.log(event);
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();
            }
        };

        if (inputElement) {
            inputElement.addEventListener("wheel", handleWheel, { passive: false });
            inputElement.addEventListener("keydown", handleKeyDown, { passive: false });
        }
        // cleanup
        return () => {
            inputElement.removeEventListener("wheel", handleWheel);
            inputElement.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            {label && (
                <label htmlFor={id} className="text-[#899694] text-sm">
                    <span>{label}{required && "*"}</span>
                </label>
            )}

            {/* FIELD */}
            <input
                type="number"
                id={id}
                name={name}
                min={min}
                max={max}
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                ref={inputRef}
                onChange={onChange}
                onBlur={onBlur}
                onInput={onInput}
                className={className}
                pattern=" "
            />

            {/* VALIDATION MESSAGE */}
            {error && (
                <label htmlFor={id}>
                    <p role="alert" aria-errormessage={error} aria-label="Error Message">{error}</p>
                </label>
            )}
        </div>
    );
}
CustomNumberField.prototype = {
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string,
    require: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
}