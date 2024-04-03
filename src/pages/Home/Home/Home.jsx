import React, { Suspense } from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import { Dna } from 'react-loader-spinner';
import CustomDatePicker from '../../../component/CustomDatePicker';
import CustomDropdown from '../../../component/CustomDropdown';
import { format as formatDate } from 'date-fns';
import CustomMultiSelect from '../../../component/InputFields/CustomMultiSelect';

export default function Home() {
     const dropdownItems = ["Option 1", "Option 2", "Option 3"];
     const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

     //Example array of disabled dates
     const disabledDates = [
          new Date(2024, 3, 10), // April 10, 2024
          new Date(2024, 3, 15), // April 15, 2024
          new Date(2024, 3, 20), // April 20, 2024
     ];
     // console.log("fromHome", disabledDates)

     return (
          <div className='bg-[#FFF8F5]'>
               <Hero />
               <Services />
               <CustomDatePicker
                    id="datePicker"
                    name="date"
                    placeholder="Select Date"
                    disabledDates={disabledDates}
                    disableAfterDate={new Date()}
               />
               {/* <CustomDropdown label="Select an Option" dropdownItems={dropdownItems} />
               <CustomMultiSelect options={options} /> */}
               <Portfolio />
               <Testimonial />
               <Contact />
          </div>
     )
}
