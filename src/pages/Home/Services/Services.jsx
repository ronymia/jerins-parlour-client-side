import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ServiceCard from './ServiceCard';




const getServices = () => ({
     queryKey: ["services"],
     queryFn: async () => {
          const { data } = await axios.get("/services");
          return data;
     }
})

export const loader = (queryClient) => async () => {
     const query = await getServices();
     return (
          queryClient.getQueryData(query.queryKey) ??
          (await queryClient.fetchQuery(query))
     )
}



export default function Services() {
     const { data: services = [] } = useQuery(getServices());

     return (
          <div className="bg-white px-32 pt-20 pb-32 w-full flex flex-col items-center justify-center">
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
