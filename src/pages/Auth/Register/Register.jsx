import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuth } from '../../../hooks';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// TODO : input field error 
// register error 

export default function Register() {
     const navigate = useNavigate();
     const location = useLocation();
     const queryClient = useQueryClient();
     const { createNewUser, updateUser } = useAuth();
     const { register, handleSubmit, reset } = useForm();

     const from = location.state?.from?.pathname || "/";


     const { mutateAsync, isLoading } = useMutation({
          mutationFn: (newUser) => axios.post("/createNewUser", newUser),
          onSuccess: () => {
               queryClient.invalidateQueries({
                    queryKey: ["users"],
                    exact: true
               })
          }
     })


     const userInfoSubmit = async (data) => {
          const { fullName, email, password } = data;


          try {
               //  create new user
               const { user } = await createNewUser(email, password);

               // update user Name
               const userInfo = {
                    displayName: fullName
               }
               const updateUserData = await updateUser(userInfo);

               const userData = { name: fullName, email };
               // insert new user to the Db
               const newUser = await mutateAsync(userData);
               // console.log(newUser)

               // user navigate
               if (user?.uid) {
                    //clear form
                    reset();
                    navigate(from, { replace: true });
               }
          } catch (error) {
               const errorCode = error.code;
               const errorMessage = error.message;
               // console.log(errorCode);
          }
     }

     return (
          <div className="w-11/12 md:w-[570px] border border-[#ABABAB] rounded px-6 md:px-10 py-5 bg-white mx-auto my-5">
               <h1 className='text-2xl font-bold mt-5'>Create an account</h1>
               <form onSubmit={handleSubmit(userInfoSubmit)}
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

                    <button type="submit" disabled={isLoading}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 tracking-widest cursor-pointer rounded'
                    >{isLoading ? "loading" : "Create an account"}</button>
               </form>
               <p className='capitalize mt-5 block text-center font-medium text-sm md:text-base'>
                    already have an account ?
                    <Link to={"/auth/login"}
                         className='text-primary ml-1 hover:underline'
                    >login here</Link>
               </p>

               {/* social sign up */}
               <SocialLogin />
          </div>
     )
}
