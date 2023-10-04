import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Register() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);

          //clear form
          reset();
     }

     return (
          <div className="w-[570px] border border-[#ABABAB] rounded px-10 py-5 bg-white mx-auto my-5">
               <h1 className='text-2xl font-bold mt-5'>Create an account</h1>
               <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-5 mt-6"
               >
                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Full name'
                         {...register("fullName")}
                    />

                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='email'
                         {...register("email")}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder="password"
                         {...register("password")}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder="Confirm password"
                         {...register("confirmPassword")}
                    />

                    <input type="submit" value={"Create an account"}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 tracking-widest cursor-pointer rounded'
                    />
               </form>
               <p className='capitalize mt-5 block text-center font-medium'>
                    already have an account ?
                    <Link to={"/auth/login"}
                         className='text-primary ml-1 hover:underline'
                    >login here</Link>
               </p>
          </div>
     )
}
