
export default function CustomePasswordField({
    label,
    type,
    name,
    id,
    value,
    min,
    max,
    placeholder,
    onChange,
    error
}) {
    return (
        <div className="flex flex-col gap-y-2">
            {/* LABEL */}
            <label htmlFor={id}>
                <span>{label}</span>
            </label>

            {/* FIELD */}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                min={min}
                max={max}
                placeholder={placeholder`${require && "*"}`}
                onChange={onChange}
            />

            {/* VALIDATION MASSAGE */}
            <label htmlFor={id}>
                <span>{error}</span>
            </label>
        </div>
    )
}
