import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ service }) {
     const navigate = useNavigate();
     const { _id, image, price, describe } = service;

     return (
          <div className="flex flex-col items-center justify-center gap-y-2 max-w-xs md:w-96 h-80 shadow-xl rounded-xl p-2">
               <img src={image} alt="serive image" className='w-20' />
               <div className="text-xl font-semibold text-[#111430]"><h4>{service.service}</h4></div>
               <p className="text-xl font-medium text-primary px-2">${price}</p>
               <p className="text-sm md:text-xs- font-light text-gray px-3 mb-2">
                    {describe}
               </p>
               <button type="button"
                    className="capitalize px-7 py-3 h-12 text-white bg-primary rounded-[5px] font-medium"
               >
                    make an appointment
               </button>
          </div>
     )
}
