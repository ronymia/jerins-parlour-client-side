import { useEffect } from "react";

export default function CustomeNumberField({
    disabled,
    readOnly,
    name,
    id,
    value,
    defaultValue,
    min,
    max,
    placeholder,
    onChange,
    error,
    label
}) {
    // FUNCTIONALITY START 
    useEffect(() => {
        //WHEEL
        const handleWheel = (e) => {
            e.preventDefault();
        }

        // UP&DOWNKEY
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
            <label htmlFor={id}
                className="text-[#899694] text-sm"
            >
                <span>{label}</span>
            </label>

            {/* FIELD */}
            <input
                disabled={disabled}
                readOnly={readOnly}
                type={"number"}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                min={min}
                max={max}
                placeholder={`${placeholder}${require && "*"}`}
                onChange={onChange}
                ref={inputRef}
                className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
            />

            {/* VALIDATION MASSAGE */}
            <label htmlFor={id}>
                <span>{error}</span>
            </label>
        </div>
    );
}
