import React from 'react';

export default function ServiceCard({ service }) {
     const { image, name, price, describe } = service;

     return (
          <div className='flex flex-col items-center justify-center gap-2 w-96 h-80 hover:border border-black rounded-xl p-10 transition'>
               <img src={image} alt="" className='w-20' />
               <p className='text-xl font-semibold text-[#111430]'>{name}</p>
               <p className='text-xl font-medium text-primary px-2'>${price}</p>
               <p className='font-light text-base text-gray text-center h-auto'>{describe}</p>
          </div>
     )
}
