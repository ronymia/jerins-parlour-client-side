import { useController } from 'react-hook-form';

export default function ControllerInputField({
    control,
    // field,
    id,
    name,
    label,
    maxLength,
    minLength,
    pattern,
    required = false,
    readOnly = false,
    disabled = false,
    minLengthMessage ,
    maxLengthMessage,
    patternMessage,
}) {
    
    const { field : field, fieldState } = useController({
        name,
        control,
        disabled,
        // defaultValue,
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
            pattern: {
                value: pattern,
                message: patternMessage || "Invalid values"
            },

        },
    });

    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            {label && (
                <label className="text-[#899694] text-sm">
                    <span>{label}</span>
                </label>
            )}

            {/* INPUT FIELD */}
            <input
                {...field}
                type={"text"} // Set input type as needed
                id={id}
                readOnly={readOnly}
                className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500`} 
                />

            {/* Error Message */}
            {fieldState.error && (
                <p className="text-red-500 text-sm" role="alert" aria-label="error message">
                    {fieldState.error.message}
                </p>
            )}
        </div>
    );
}