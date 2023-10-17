import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useAuth } from '../../../hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const SocialLogin = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const { signInWithGoogle } = useAuth();

     const from = location.state?.from?.pathname || "/";

     const { mutateAsync, isLoading } = useMutation({
          mutationFn: (newUser) => axios.post("/createNewUser", newUser)
     })

     const googleHandle = async () => {
          const { user } = await signInWithGoogle();
          if (user) {

               const userData = { name: user.displayName, email: user.email };
               // insert new user to the Db
               const newUser = await mutateAsync(userData);
               console.log(newUser)

               navigate(from, { replace: true });
          }
     }

     return (
          <div className="flex flex-row gap-6 items-center justify-center mt-3">
               <button type="button"
                    className=""
               >
                    <FcGoogle
                         onClick={googleHandle}
                         className="h-9 w-9"
                    />
               </button>
               <button type="button">
                    <FaFacebook
                         className="h-9 w-9 text-blue-800"
                    />
               </button>
          </div>
     )
}

export default SocialLogin;
