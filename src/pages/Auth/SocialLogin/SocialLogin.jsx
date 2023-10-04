import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SocialLogin = () => {
     return (
          <div className="flex flex-row gap-6 items-center justify-center mt-3">
               <button type="button"
                    className=""
               >
                    <FcGoogle
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
