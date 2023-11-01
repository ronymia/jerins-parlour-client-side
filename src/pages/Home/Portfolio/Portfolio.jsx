import React from 'react';
import img from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

export default function Portfolio() {
     return (
          <div className="grid grid-cols-2 items-center justify-center gap-24 px-20 py-32">
               <div className="">
                    <img src={img} alt="" />
               </div>

               <div className="flex flex-col gap-6 items-start justify-between w-3/4 h-auto">
                    <h1 className='text-4xl font-semibold text-[#2D2D2D] leading-normal'>Let us handle your <br /> <span className='text-primary'>screen Professionally</span>.</h1>
                    <p className='text-sm font-light text-gray'>
                         With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
                    </p>
                    <div className="flex flex-col gap-5 w-full">
                         <div className="flex flex-row items-center justify-between text-primary text-5xl font-semibold ">
                              <p>500+</p>
                              <p>16+</p>
                         </div>
                         <div className="flex flex-row items-center justify-between">
                              <p>Happy Customer</p>
                              <p>Total Service</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}
