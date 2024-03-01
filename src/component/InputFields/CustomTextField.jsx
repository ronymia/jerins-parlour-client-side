
export default function CustomTextField({
    label,
    required = false,
    disabled,
    readOnly,
    type,
    name,
    id,
    value,
    defaultValue,
    placeholder,
    onChange,
    onBlur,
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
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                type={"text"}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                placeholder={`${placeholder}${required ? "*" : ""}`}
                onChange={onChange}
                onBlur={onBlur}
                className={className}
            />

            {/* Validation massage */}
            {error &&
                <label htmlFor={id}>
                    <span>{error}</span>
                </label>
            }
        </div>
    )
}
