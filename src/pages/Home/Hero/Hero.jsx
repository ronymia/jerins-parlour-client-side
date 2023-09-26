import React from 'react';

import HeroBg from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

export default function Hero() {
     return (
          <div className="grid grid-cols-2 justify-center items-center px-32 py-5">
               <div className=" flex flex-col items-start justify-center gap-y-6">
                    <h1 className='text-5xl font-bold text-[#111430] leading-normal'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className='text-[#666666] w-3/4'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>

                    <button type="button"
                         className='bg-primary h-12 px-7 rounded-md text-white font-medium'
                    >Get an Appointment</button>

               </div>
               <div className="flex items-center justify-center">
                    <img src={HeroBg} alt=""
                         className='w-[450px]'
                    />
               </div>
          </div>
     )
}
