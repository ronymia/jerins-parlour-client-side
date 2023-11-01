import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import img1 from '../../../assets/images/Ellipse90.png';
import img2 from '../../../assets/images/Ellipse91.png';
import img3 from '../../../assets/images/Ellipse92.png';



const reviews = [
     {
          _id: 1,
          image: img1,
          name: "Nash Patril",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     },
     {
          _id: 2,
          image: img2,
          name: "Miriam Barrom",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     },
     {
          _id: 3,
          image: img3,
          name: "Bair Malone",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     }
]



export default function Testimonial() {
     return (
          <div className="bg-white pt-32 px-20 flex flex-col items-center justify-center">
               <h1 className='text-4xl font-bold text-[#1F1632]'>Testimonials</h1>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-[100px] ">
                    {
                         reviews.map(review =>
                              <div
                                   key={review._id}
                                   className="grid grid-cols-1 rounded shadow-lg p-5"
                              >
                                   <div className="flex flex-col items-start justify-center">
                                        <div className="flex flex-row gap-3">
                                             <img src={review.image}
                                                  alt="profile"
                                                  className="h-[64px] w-[64px]"
                                             />
                                             <div className="flex flex-col justify-center">
                                                  <p className="text-lg font-medium">{review.name}</p>
                                                  <p className="font-medium text-[15px]">{review.designation}, <span>{review.company_name}</span></p>
                                             </div>
                                        </div>
                                        <p className="text-[#707070] mt-2 text-[15px]">{review.comment}</p>
                                        <div className="flex flex-row items-center justify-center gap-2 mt-4">
                                             <BsFillStarFill
                                                  className='h-6 w-6 text-[#FFAC0C]'
                                             />
                                             <BsFillStarFill
                                                  className='h-6 w-6 text-[#FFAC0C]'
                                             />
                                             <BsFillStarFill
                                                  className='h-6 w-6 text-[#FFAC0C]'
                                             />
                                             <BsFillStarFill
                                                  className='h-6 w-6 text-[#FFAC0C]'
                                             />
                                             <BsFillStarFill
                                                  className='h-6 w-6 text-[#FFAC0C]'
                                             />
                                        </div>
                                   </div>
                              </div>
                         )
                    }
               </div>
          </div>
     )
}
