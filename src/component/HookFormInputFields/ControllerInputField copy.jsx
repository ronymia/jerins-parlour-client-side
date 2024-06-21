import { Controller } from 'react-hook-form';

export default function ControllerInputField({
    control,
    id,
    name,
    label,
    maxLength,
    minLength,
    pattern,
    defaultValue,
    required = false,
    readOnly = false,
    disabled = false,
    minLengthMessage,
    maxLengthMessage,
    patternMessage,
}) {
    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            {label && (
                <label className="text-[#899694] text-sm">
                    <span>{label}</span>
                </label>
            )}

            {/* INPUT FIELD */}
            <Controller
                defaultValue={defaultValue}
                disabled={disabled}
                name={name}
                control={control}
                rules={{
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
                }}
                render={({ field, fieldState }) => (
                    <input
                        {...field}
                        type="text"
                        id={id}
                        readOnly={readOnly}
                        className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500`}
                    />
                )}
            />

            {/* Error Message */}
            {fieldState && fieldState.error && (
                <p className="text-red-500 text-sm" role="alert" aria-label="error message">
                    {fieldState.error.message}
                </p>
            )}
        </div>
    );
}
