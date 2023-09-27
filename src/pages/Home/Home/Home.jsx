import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';

export default function Home() {
     return (
          <div className='bg-[#FFF8F5]'>
               <Hero />
               <Services />
               <Portfolio />
          </div>
     )
}
