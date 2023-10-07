import React from 'react';
import ServiceCard from './ServiceCard';
import { useQuery } from 'react-query';
import axios from 'axios';


export default function Services() {

     const { data: services = [], isLoading } = useQuery({
          queryKey: ["services"],
          queryFn: async () => {
               const { data } = await axios.get("/services");
               return data;
          }
     })

     return (
          <div className="bg-white px-32 py-32 w-full flex flex-col items-center justify-center">
               <h1 className="text-[#111430] font-bold text-4xl">
                    Our Awesome <span className="text-primary">Services</span>
               </h1>

               <div className="grid grid-cols-3 gap-x-16 pt-20">
                    {
                         services.map(service => <ServiceCard key={service._id} service={service} />)
                    }
               </div>

               {/* <button type="button"
                    className='h-12 px-6 bg-primary text-white font-medium rounded-md mt-10'
               >Explore more</button> */}
          </div>
     )
}
