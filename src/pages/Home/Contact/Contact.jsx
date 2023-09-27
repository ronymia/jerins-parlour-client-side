import React from 'react';

export default function Contact() {
     return (
          <div className="py-20 flex flex-col items-center justify-center">
               <h3 className="text-4xl text-[#2D2D2D] font-bold leading-normal text-center mb-20">
                    Let us handle your <br />
                    project, professionally.
               </h3>

               <form
                    className="w-[750px] flex flex-col items-center justify-center gap-6"
               >
                    <div className="grid grid-cols-2 gap-6 w-full">
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="full name"
                         />
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="last name"
                         />
                         <input type="email"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="email address"
                         />
                         <input type="text"
                              className="h-14 px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md"
                              placeholder="phone number"
                         />
                    </div>
                    <textarea
                         className="px-5 py-4 text-base text-black placeholder:text-sm placeholder:text-[#707070] placeholder:capitalize focus:outline-none bg-white rounded-md w-full h-40 resize-none"
                         placeholder="Your Message"
                    ></textarea>
                    <button type="button"
                         className="px-7 h-12 text-white bg-primary rounded-[5px]"
                    >Send Message</button>
               </form>

          </div>
     )
}
