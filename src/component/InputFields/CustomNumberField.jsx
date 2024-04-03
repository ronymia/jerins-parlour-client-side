import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function CustomNumberField({
    id,
    name,
    label,
    min,
    max,
    defaultValue,
    placeholder,
    error,
    className,
    required = false,
    readOnly = false,
    disabled = false,
}) {
    const inputRef = useRef();

    useEffect(() => {
        const inputElement = inputRef.current;

        const handleWheel = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            e.preventDefault();
        };

        if (inputElement) {
            inputElement.addEventListener("wheel", handleWheel, { passive: false });
            inputElement.addEventListener("keydown", handleKeyDown, { passive: false });
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener("wheel", handleWheel);
                inputElement.removeEventListener("keydown", handleKeyDown);
            }
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
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                ref={inputRef}
                className={className}
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
// CustomNumberField.prototype = {
//     min: PropTypes.number,
//     max: PropTypes.number,
//     placeholder: PropTypes.string,
//     require: PropTypes.bool,
//     disabled: PropTypes.bool,
//     readOnly: PropTypes.bool,
// }