import React from 'react';
import img from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

export default function Portfolio() {
     return (
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-7 md:gap-24 px-6 md:px-20 py-32">
               <figure className="">
                    <img src={img} alt="" />
               </figure>

               <div className="flex flex-col gap-6 items-start justify-between w-full md:w-3/4 h-auto">
                    <h1 className='text-3xl md:text-4xl font-semibold text-[#2D2D2D] leading-relaxed md:leading-normal'>Let us handle your <br /> <span className='text-primary'>screen Professionally</span></h1>
                    <p className='text-sm font-light text-gray'>
                         With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
                    </p>
                    <div className="flex flex-col gap-5 w-full">
                         <div className="flex flex-row items-center justify-between text-primary text-4xl md:text-5xl font-semibold ">
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
