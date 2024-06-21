import { useController } from 'react-hook-form';

export default function ControllerInputField({
    control,
    id,
    name,
    label,
    type,
    placeholder,
    maxLength,
    minLength,
    max,
    min,
    pattern,
    required = false,
    readOnly = false,
    disabled = false,
    minLengthMessage,
    maxLengthMessage,
    patternMessage,
    maxMessage,
    minMessage,
    wrapperClassName,
    inputClassName,
    labelClassName,
    // onChange,
}) {
    // console.log(pattern)
    const { field, fieldState: { error } } = useController({
        name,
        control,
        disabled,
        rules: {
            required: {
                value: required,
                message: "Field is required",
            },
            maxLength: {
                value: maxLength,
                message: maxLengthMessage || "Maximum length exceeded"
            },
            minLength: {
                value: minLength,
                message: minLengthMessage || "Minimum length not met"
            },
            max: {
                value: max,
                message: maxMessage || "Maximum value exceeded"
            },
            min: {
                value: min,
                message: minMessage || "Minimum value not met"
            },
            pattern: {
                value: pattern,
                message: patternMessage || "Invalid values"
            },
            // onChange: (e) => onChange(e)

        },
    });



    return (
        <div className={`${wrapperClassName} flex flex-col gap-y-2 justify-start`}>
            {/* LABEL */}
            {label && (
                <label className={`${labelClassName} text-back text-sm`}>
                    <span>{label}</span>
                </label>
            )}

            {/* INPUT FIELD */}
            <input
                {...field}
                type={type} // Set input type as needed
                id={id}
                readOnly={readOnly}
                placeholder={placeholder}
                aria-invalid={error ? "true" : "false"}
                className={`${inputClassName} border border-solid border-[#C5C5C5] rounded px-3 py-2 focus:outline-none placeholder:text-sm placeholder:capitalize ${error ? "border-red-500" : ""}`}
            />

            {/* Error Message */}
            {error && (
                <p className={`text-red-500 text-sm`}
                    role="alert"
                    aria-label="error message"
                >
                    {error.message}
                </p>
            )}
        </div>
    );
}