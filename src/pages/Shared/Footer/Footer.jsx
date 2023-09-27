import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function Footer() {
     return (
          <footer className="bg-primary h-[420px] grid grid-cols-4 text-white px-32 py-20">
               <div className="">
                    <FaMapMarkerAlt />
                    <div className="">
                         <p>H#000 (0th Floor), Road #00,
                              New DOHS, Mohakhali, Dhaka, Bangladesh
                         </p>
                    </div>
               </div>

               <div className="">
                    <h4 className="text-xl font-semibold">Company</h4>
                    <div className="">
                         <p>About</p>
                         <p>Project</p>
                         <p>Our Team</p>
                         <p>Terms Conditions</p>
                         <p>Submit Listing</p>
                    </div>
               </div>
               <div className="">
                    <h4 className="text-xl font-semibold">Quick Links</h4>
                    <div className="">
                         <p>Quick Links</p>
                         <p>Rentals</p>
                         <p>Sales</p>
                         <p>Contact</p>
                         <p>Our blog</p>
                    </div>
               </div>
               <div className="">
                    <h4 className="text-xl font-semibold">About us</h4>
                    <p>
                         Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Purus commodo ipsum
                         duis laoreet maecenas. Feugiat
                    </p>
                    <div className="text-3xl flex flex-row gap-3 items-start">
                         <AiFillFacebook />
                         <AiFillInstagram />
                         <BsLinkedin />
                         <BsYoutube />
                    </div>
               </div>

          </footer>
     )
}
