import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function CustomPasswordField({
    register,
    label,
    required = false,
    readOnly = false,
    id,
    name,
    defaultValue,
    placeholder,
    autoComplete = "off",
    minLength,
    maxLength,
    pattern,
    error = "",
    wrapperclassName,
    fieldClassName,
}) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`${wrapperclassName} relative`}>
            {/* LABEL */}
            {label &&
                <label htmlFor={id}>
                    <span>{label}</span>
                </label>
            }

            {/* INPUT FIELD */}
            <input
                id={id}
                type={showPassword ? "text" : "password"}
                readOnly={readOnly}
                autoComplete={autoComplete}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={`${fieldClassName}`}
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
                        message: "Do not match password",
                    }
                })}
            />

            {/* Passwprd Showing */}
            <button
                type={"button"}
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-xl absolute top-[20%] right-2 cursor-pointer transition-all ease-in-out "
            >
                {showPassword
                    ? <FaRegEyeSlash />
                    : <FaRegEye />
                }
            </button>


            {/* Validation massage */}
            <label htmlFor={id}
                className="flex flex-row justify-between mt-2"
            >
                {error &&
                    <p role="alert" aria-label="Error massage"
                        className="text-xs text-error uppercase"
                    >{error}</p>
                }
                <Link to={""} className="text-xs uppercase hover:underline">Forget Password</Link>
            </label>
        </div>
    )
}
