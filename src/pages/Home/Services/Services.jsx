import React from 'react';

//img 
import faceTreatment from '../../../assets/icons/Group1373.png';
import hairColor from '../../../assets/icons/Group1372.png';
import skinCare from '../../../assets/icons/Group1374.png';



const services = [
     {
          id: 1,
          image: faceTreatment,
          name: "Anti Age Face Treatment",
          price: "199",
          describe: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
     },
     {
          id: 2,
          image: hairColor,
          name: "Hair Color & Styleing",
          price: "99",
          describe: "Amazing flyers, social media posts and brand representations that would make your brand stand out."
     },
     {
          id: 3,
          image: skinCare,
          name: "Skin Care Treatment",
          price: "299",
          describe: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
     },
]

export default function Services() {
     return (
          <div className='bg-white py-32'>
               <h1 className='text-[#111430] font-bold text-4xl block text-center'>
                    Our Awesome <span className='text-primary'>Services</span>
               </h1>
          </div>
     )
}
