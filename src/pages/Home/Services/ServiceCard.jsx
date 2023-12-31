import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ service }) {
     const navigate = useNavigate();
     const { _id, image, price, describe } = service;

     return (
          <div onClick={() => navigate(`/service/${_id}`)}
               className="flex flex-col items-center justify-center gap-2 max-w-xs md:w-96 h-80 shadow-xl rounded-xl p-10 transition cursor-pointer">
               <img src={image} alt="serive image" className='w-20' />
               <p className="text-xl font-semibold text-[#111430]">{service.service}</p>
               <p className="text-xl font-medium text-primary px-2">${price}</p>
               <p className="text-sm md:text-base font-light text-gray text-center h-auto">{describe}</p>
          </div>
     )
}
