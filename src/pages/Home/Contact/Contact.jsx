import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import CustomInputField from '../../../component/HookFormInputFields/ControllerInputField';
import InputFieldArray from '../../../component/HookFormInputFields/InputFieldArray';
import ControllerInputField from '../../../component/HookFormInputFields/ControllerInputField';
// import { CustomInputField, CustomNumberField } from '../../../component/InputFields';

export default function Contact() {

     // Form Data state
     const [formData, setFormData] = useState({
          first_name: "null",
          last_name: null,
          email: null,
          phone_number: null,
     });

     // Handle form submit
     const {
          control,
          handleSubmit,
          reset,
     } = useForm({
          mode: "onSubmit",
          defaultValues: {
               first_name: formData?.first_name,
               last_name: formData?.last_name,
               email: formData?.email,
               phone_number: formData?.phone_number,
          }
     });

     // form data submit
     const onSubmit = (data) => {
          console.log(data); // Handle form submission
          // form to state
          setFormData({...formData, ...data});
     };
     // console.log(formData)

     return (
          <div className="py-20 flex flex-col items-center justify-center px-6">
               <h3 className="text-3xl md:text-4xl text-[#2D2D2D] font-bold leading-normal md:leading-normal text-center mb-20">
                    Let us handle your <br />
                    project, professionally
               </h3>

               <form onSubmit={handleSubmit(onSubmit)}
                    className="w-full md:w-[750px] flex flex-col items-center justify-center gap-6"
               >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                         {/* First Name */}
                         <ControllerInputField
                              control={control}
                              label={"First Name"}
                              required={true}
                              id={"first_name"}
                              name={"first_name"}
                              placeholder={"First Name"}
                              className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                         />
                         {/* Last Name */}
                         <ControllerInputField
                              control={control}
                              required
                              label={"Last Name"}
                              id={"last_name"}
                              name={"last_name"}
                              placeholder={"Last Name"}
                              className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                         />
                         {/* Email */}
                         <ControllerInputField
                              control={control}
                              required
                              label={"Email"}
                              id={"email"}
                              name={"email"}
                              placeholder={"Email"}
                              className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                         />
                         {/* Phone Number */}
                         <CustomNumberField
                              id={"phone_number"}
                              name={"phone_number"}
                              // value={formData?.phone_number}
                              error={formErrors?.phone_number}
                              defaultValue={formData?.phone_number}
                              placeholder={"Phone Number"}
                              // onChange={handleInputChange}
                              className={"h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"}
                         />

                    </div>

                    {/* <textarea
                         className="px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md w-full h-40 resize-none"
                         placeholder="Your Message"
                         {...register("message")}
                    ></textarea> */}
                    <button type="submit"
                         className="px-7 h-12 text-white bg-primary rounded-[5px]"
                    >Send Message</button>
               </form>

          </div>
     )
}
