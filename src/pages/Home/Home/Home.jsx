import React, { Suspense } from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import { Dna } from 'react-loader-spinner';

export default function Home() {
     return (
          <div className='bg-[#FFF8F5]'>
               <Hero />
               <Services />
               <Portfolio />
               <Testimonial />
               {/* <Contact /> */}
          </div>
     )
}
