import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function Footer() {
     return (
          <footer className="bg-primary h-[420px] grid grid-cols-3 gap-3 text-white px-32 py-20">
               <div className="flex flex-row items-start justify-center gap-3">
                    <FaMapMarkerAlt
                         className="text-5xl"
                    />
                    <div className="">
                         <p className="text-sm">H#000 (0th Floor), Road #00,
                              New DOHS, Mohakhali, Dhaka, Bangladesh
                         </p>
                    </div>
               </div>

               <div className="grid grid-cols-2">
                    <div className="">
                         <h4 className="text-xl font-semibold mb-2">Company</h4>
                         <div className="text-sm text-[#D8D8D8] font-light flex flex-col items-start gap-1">
                              <p>About</p>
                              <p>Project</p>
                              <p>Our Team</p>
                              <p>Terms Conditions</p>
                              <p>Submit Listing</p>
                         </div>
                    </div>
                    <div className="">
                         <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
                         <div className="text-sm text-[#D8D8D8] font-light flex flex-col items-start gap-1">
                              <p>Quick Links</p>
                              <p>Rentals</p>
                              <p>Sales</p>
                              <p>Contact</p>
                              <p>Our blog</p>
                         </div>
                    </div>
               </div>
               <div className="flex flex-col items-start gap-2">
                    <h4 className="text-xl font-semibold">About us</h4>
                    <p className="text-sm font-light text-[#D8D8D8]">
                         Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Purus commodo ipsum
                         duis laoreet maecenas. Feugiat
                    </p>
                    <div className="text-3xl flex flex-row gap-3 items-start justify-center">
                         <AiFillFacebook />
                         <AiFillInstagram />
                         <BsLinkedin />
                         <BsYoutube />
                    </div>
               </div>

          </footer>
     )
}
