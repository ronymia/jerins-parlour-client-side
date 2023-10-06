import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useAuth } from '../../../hooks';

const SocialLogin = () => {
     const { signInWithGoogle } = useAuth();

     const googleHandle = async () => {
          const { user } = await signInWithGoogle();
          // console.log(user);
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
