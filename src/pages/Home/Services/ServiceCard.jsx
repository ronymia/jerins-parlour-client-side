import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ service }) {
     const navigate = useNavigate();
     const { _id, image, title, price, describe } = service;

     return (
          <div onClick={() => navigate(`/service/${_id}`)}
               className="flex flex-col items-center justify-center gap-2 w-96 h-80 hover:border border-black rounded-xl p-10 transition cursor-pointer">
               <img src={image} alt="serive image" className='w-20' />
               <p className="text-xl font-semibold text-[#111430]">{title}</p>
               <p className="text-xl font-medium text-primary px-2">${price}</p>
               <p className="font-light text-base text-gray text-center h-auto">{describe}</p>
          </div>
     )
}
