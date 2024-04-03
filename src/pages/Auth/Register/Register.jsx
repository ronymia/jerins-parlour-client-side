import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuth } from '../../../hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';

// TODO : input field error 
// register error 

export default function Register() {
     const navigate = useNavigate();
     const queryClient = useQueryClient();
     const { createNewUser, updateUser } = useAuth(); // user auth provider

     // user location track
     const location = useLocation();
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

     const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting },
          reset,
     } = useForm(); /// react-hook-form

     
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
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder='Full name'
                         {...register("fullName")}
                    />
                    <ErrorMessage
                         errors={errors}
                         name="name"
                         render={({ message }) => <p role='alert' aria-label='error massage'>{message}</p>}
                    />

                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder='email'
                         {...register("email")}
                    />
                    <ErrorMessage
                         errors={errors}
                         name="email"
                         render={({ message }) => <p role='alert' aria-label='error massage'>{message}</p>}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder="password"
                         {...register("password")}
                    />
                    <ErrorMessage
                         errors={errors}
                         name="password"
                         render={({ message }) => <p role='alert' aria-label='error massage'>{message}</p>}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder="Confirm password"
                         {...register("confirmPassword")}
                    />
                    <ErrorMessage
                         errors={errors}
                         name="password"
                         render={({ message }) => <p role='alert' aria-label='error massage'>{message}</p>}
                    />

                    <button type="submit" disabled={isLoading || isSubmitting}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 tracking-widest cursor-pointer rounded'
                    >{isLoading || isSubmitting ? "loading" : "Create an account"}</button>
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
