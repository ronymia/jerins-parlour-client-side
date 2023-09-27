import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function Login() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);
     }

     return (
          <div className="w-[570px] border border-[#ABABAB] rounded px-10 py-5 bg-white mx-auto my-10">
               <h1 className='text-2xl font-bold capitalize mt-5'>get in touch</h1>
               <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-5 mt-6"
               >
                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='email'
                         {...register("email")}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='password'
                         {...register("password")}
                    />

                    <input type="submit" value={"Login"}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 font-semibold tracking-widest cursor-pointer rounded'
                    />
               </form>

               <p className='capitalize mt-5 block text-center font-medium'>
                    don't have an account ?
                    <Link to={"/auth/register"}
                         className='text-primary ml-1 hover:underline'
                    >create an account</Link>
               </p>
          </div>
     )
}
