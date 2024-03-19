import { useEffect } from "react";

export default function CustomNumberField({
    required = false,
    readOnly = false,
    disabled = false,
    id,
    name,
    defaultValue,
    min,
    max,
    placeholder,
    error,
    label
}) {
    // Functionality START 
    useEffect(() => {
        //WHEEL
        const handleWheel = (e) => {
            e.preventDefault();
        }

        // KeyDown
        const handleKeyDown = (e) => {
            e.prreventDefault();
        };

        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.addEventListener("wheel", handleWheel, { passive: false });
            inputElement.addEventListener("keyDown", handleKeyDown, { passive: false });
        }

        // CLEAN UP
        inputElement.removeEventListener("wheel", handleWheel);
        inputElement.removeEventListener("keyDown", handleKeyDown);
    }, []);


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

            {/* FIELD */}
            <input
                type={"number"}
                id={id}
                name={name}
                min={min}
                max={max}
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                ref={inputRef}
                className=""
            />

            {/* VALIDATION MASSAGE */}
            {error &&
                <label htmlFor={id}>
                    <p role="alert" aria-label="Error Message">{error}</p>
                </label>
            }
        </div>
    );
}
