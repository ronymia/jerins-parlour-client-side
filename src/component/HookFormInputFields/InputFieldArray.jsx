import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import CustomInputField from './ControllerInputField';

export default function InputFieldArray({control, }) {

    const { fields, append, remove } = useFieldArray({control});
    return (
        <div>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <Controller
                        render={({ field }) => <input {...field}
                            className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                        />}
                        name={`user_info.${index}.first_name`}
                        control={control}
                    />
                    <Controller
                        render={({ field }) => <input {...field}
                            className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                        />}
                        name={`user_info.${index}.last_name`}
                        control={control}
                    />
                    <button type="button" onClick={() => remove(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={() => append()}>
                Add Input
            </button>
        </div>
    );
}


