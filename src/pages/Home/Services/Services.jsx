import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';
import DnaLoader from "../../Shared/Loader/DnaLoader/DnaLoader"
import { getAllService } from '../../../apis/Home/Services';
// import { getServices } from '../../../loadersActions/Home/Services/Services';
// import { getServices } from '../../../loadersActions/Home/Services/Services';
// import { getServices } from '../../../apis/Home/Services';




export default function Services() {
     const { data: services = [], isPending } = useQuery(getAllService());



     return (
          <section className="bg-white md:px-20 px-6 pt-20 pb-32 w-full flex flex-col items-center justify-center">
               <h1 className="text-[#111430] font-bold text-4xl text-center">
                    Our Awesome <span className="text-primary">Services</span>
               </h1>

               {isPending
                    ? <DnaLoader />
                    : <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-16 pt-20">
                         {
                              services?.map(service =>
                                   <ServiceCard
                                        key={service._id}
                                        service={service}
                                   />)
                         }
                    </div>}

               {/* <button type="button"
                    className='h-12 px-6 bg-primary text-white font-medium rounded-md mt-10'
               >Explore more</button> */}
          </section>
     )
}
