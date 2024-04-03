import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuth } from '../../../hooks';
import { CustomEmailField, CustomPasswordField } from "../../../component/InputFields";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import CustomToaster from "../../../component/CustomToaster";

//TODO : login error




export default function Login() {
     const navigate = useNavigate();
     const location = useLocation();
     const { userSignIn } = useAuth();
     const from = location.state?.from?.pathname || "/"; // redirect to from page

     //Form Data
     const [userInfo, setUserInfo] = useState({
          email: "", // required
          password: "", // required
     });


     // Form state
     const {
          register,
          formState: { errors, isSubmitting },
          handleSubmit, reset } = useForm();

     // Submmitting Form Data
     const handleOnSubmit = async (data, e) => {
          //SET USER DATA TO STATE
          setUserInfo(data);
          const { email, password } = data;
          // user sign in
          try {
               const { user } = await userSignIn(email, password);
               if (user?.uid) {
                    //clear form
                    toast.success("sucess")
                    reset();
                    navigate(from, { replace: true });
               }
          } catch (error) {
               const errorCode = error.code;
               console.log(errorCode);
          }
     }
     const onError = (errors) => {
          const errorsArray = Object.keys(errors).map(field => errors[field].message);
               toast.custom((t) =>
                    <CustomToaster
                         t={t}
                         type={"error"}
                         errors={errorsArray}
                    />
               );
     };
     /*========================================================
                                   UI Render
     ========================================================*/

     return (
          <div className="w-11/12 md:w-[570px] border border-[#ABABAB] rounded px-6 md:px-10 py-5 bg-white mx-auto my-10">
               <h1 className='text-2xl font-bold capitalize mt-5'>get in touch</h1>
               <form
                    onSubmit={handleSubmit(handleOnSubmit, onError)}
                    className="flex flex-col gap-y-5 mt-6"
               >
                    {/* Email */}
                    <CustomEmailField
                         id={"email"}
                         name={"email"}
                         required={true}
                         error={errors?.email?.message}
                         placeholder={"Email"}
                         register={register}
                         className={"w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize"}
                    />

                    {/* Password  */}
                    <CustomPasswordField
                         id={"password"}
                         name={"password"}
                         required={true}
                         minLength={6}
                         maxLength={14}
                         error={errors?.password?.message}
                         placeholder={"Password"}
                         register={register}
                         fieldClassName={"w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium placeholder:capitalize"}
                         wrapperclassName={"flex flex-col gap-y-2"}
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                         disabled={isSubmitting && true}
                         type="submit"
                         className={`w-full h-11 bg-primary text-lg text-white mt-2 font-semibold tracking-widest cursor-pointer rounded capitalize ${isSubmitting && "cursor-wait"}`}
                    >
                         {isSubmitting ? "Submitting" : "login"}
                    </button>
               </form>

               {/* Navigate to Register page */}
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
