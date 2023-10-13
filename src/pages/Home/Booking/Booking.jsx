import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";
import { useLoaderData, useParams } from "react-router-dom";
import DnaLoader from "../../Shared/Loader/DNALoader/DNALoader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const bookingQuery = (serviceId) => ({
     queryKey: ["booking", serviceId],
     queryFn: async () => {
          const { data } = await axios.get(`/booking/${serviceId}`);
          return data;
     }
})


export const loader = (queryClient) => async ({ params }) => {
     const query = bookingQuery(params.serviceId);
     return (
          queryClient.getQueryData(query.queryKey) ??
          (await queryClient.fetchQuery(query))
     )
}





export default function Booking() {
     const { user } = useAuth();
     const { serviceId } = useParams();
     const { data: service } = useQuery(bookingQuery(serviceId));


     const { register, handleSubmit } = useForm({
          defaultValues: {
               name: user?.displayName,
               email: user?.email,
               serviceName: service?.name,
               serviceCharge: service?.price
          }
     });


     const onHandleBooking = async (data) => {
          console.log(data);
     };


     return (
          <div className="w-full my-12 flex items-center justify-center">
               <form
                    onSubmit={handleSubmit(onHandleBooking)}
                    className="w-1/3 p-6 bg-[#F4F7FC] flex flex-col gap-y-4 rounded-md"
               >
                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="name"
                              className="text-[#899694] text-sm"
                         >Your Name</label>
                         <input type="text"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                              {...register("name")} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="email"
                              className="text-[#899694] text-sm"
                         >Your email</label>
                         <input type="email"
                              disabled
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium cursor-not-allowed"
                              {...register("email")} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="serviceName"
                              className="text-[#899694] text-sm"
                         >Service Name</label>
                         <input type="text"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium cursor-not-allowed"
                              disabled
                              {...register("serviceName")} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="serviceCharge"
                              className="text-[#899694] text-sm"
                         >Your Service  charged will be </label>
                         <input type="number"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium cursor-not-allowed placeholder:"
                              disabled
                              {...register("serviceCharge")} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="serviceCharge"
                              className="text-[#899694] text-sm"
                         >Your Number</label>
                         <input type="number"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                              {...register("phoneNumber")} />
                    </div>

                    <button type="submit"
                         className="bg-primary px-5 h-11 text-white w-full rounded-md"
                    >
                         Confirm Booking
                    </button>
               </form>
          </div>
     );
}
