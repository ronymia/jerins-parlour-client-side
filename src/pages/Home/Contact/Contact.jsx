import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);

          //clear form
          reset();
     }

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
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="first name"
                              {...register("firstName")}
                         />
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="last name"
                              {...register("lastName")}
                         />
                         <input type="email"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="email address"
                              {...register("email")}
                         />
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="phone number"
                              {...register("phoneNumber")}
                         />
                    </div>
                    <textarea
                         className="px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md w-full h-40 resize-none"
                         placeholder="Your Message"
                         {...register("message")}
                    ></textarea>
                    <button type="submit"
                         className="px-7 h-12 text-white bg-primary rounded-[5px]"
                    >Send Message</button>
               </form>

          </div>
     )
}
