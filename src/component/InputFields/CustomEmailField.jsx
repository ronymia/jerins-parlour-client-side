
export default function CustomEmailField({
    register,
    required = false,
    readOnly = false,
    id,
    name,
    defaultValue,
    placeholder,
    minLength,
    maxLength,
    pattern,
    label,
    error,
    className
}) {
    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            {label &&
                <label htmlFor={id}>
                    <span>{label}</span>
                </label>
            }

            {/* INPUT FIELD */}
            <input
                readOnly={readOnly}
                type={"email"}
                id={id}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={className}
                {...register(name, {
                    required: {
                        value: required,
                        message: `${name} is required`
                    },
                    minLength: {
                        value: minLength,
                        message: `${name} must be getter then ${minLength} character`
                    },
                    maxLength: {
                        value: maxLength,
                        message: `${name} must be less then ${maxLength} character`
                    },
                    pattern: {
                        value: pattern,
                        message: "Please provide an valid email address",
                    }
                })}
            />

            {/* Validation massage */}
            {error &&
                <label htmlFor={id}>
                    <p role="alert" aria-label="Error massage"
                        className="text-xs text-red-500 uppercase"
                    >{error}</p>
                </label>
            }
        </div>
    )
}
