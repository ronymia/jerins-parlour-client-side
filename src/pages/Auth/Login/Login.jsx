import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuth } from '../../../hooks';

//TODO : login error

export default function Login() {
     const navigate = useNavigate();
     const location = useLocation();
     const { userSignIn } = useAuth();
     const { register, handleSubmit, reset } = useForm();

     const from = location.state?.from?.pathname || "/";

     const SignIn = async (data) => {
          const { email, password } = data;
          // user sign in
          try {
               const { user } = await userSignIn(email, password);
               if (user?.uid) {
                    //clear form
                    reset();
                    navigate(from, { replace: true });
               }
          } catch (error) {
               const errorCode = error.code;
               console.log(errorCode);
          }
     }

     return (
          <div className="w-11/12 md:w-[570px] border border-[#ABABAB] rounded px-6 md:px-10 py-5 bg-white mx-auto my-10">
               <h1 className='text-2xl font-bold capitalize mt-5'>get in touch</h1>
               <form onSubmit={handleSubmit(SignIn)}
                    className="flex flex-col gap-y-5 mt-6"
               >
                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder='email'
                         {...register("email")}
                    />

                    <input type="password"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize'
                         placeholder='password'
                         {...register("password")}
                    />

                    <input type="submit" value={"Login"}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 font-semibold tracking-widest cursor-pointer rounded'
                    />
               </form>

               <p className='capitalize mt-5 block text-center font-medium text-sm md:text-base'>
                    don't have an account ?
                    <Link to={"/auth/register"}
                         className='text-primary ml-1 hover:underline'
                    >create an account</Link>
               </p>

               {/* social sign up */}
               <SocialLogin />
          </div>
     )
}
