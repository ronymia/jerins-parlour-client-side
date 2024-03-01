import { useEffect } from "react";

export default function CustomNumberField({
    register,
    required = false,
    readOnly = false,
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
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                ref={inputRef}
                className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                {...register(name, {
                    required: {
                        value: required,
                        message: `${name} is required`
                    },
                    min: {
                        value: min,
                        message: `${name} must be getter then ${min} character`
                    },
                    max: {
                        value: max,
                        message: `${name} must be less then ${max} character`
                    },
                })}
            />

            {/* VALIDATION MASSAGE */}
            {error &&
                <label htmlFor={id}>
                    <span>{error}</span>
                </label>
            }
        </div>
    );
}
