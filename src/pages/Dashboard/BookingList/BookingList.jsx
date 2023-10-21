import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



// getting bookings api
export const getAllBookings = (email) => ({
     queryKey: ["bookings", email],
     queryFn: async () => {
          const { data } = await axios.get(`/bookings?email=${email}`, {
               headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
               }
          });
          return data;
     }
})


// bookings loader
export const loader = (queryClient) => async () => {
     const bookings = await getAllBookings();
     return (
          queryClient.getQueryData(bookings.queryKey) ??
          (await queryClient.fetchQuery(bookings))
     )
}




export default function BookingList() {
     const [axiosSecure] = useAxiosSecure();
     const { user: { email } } = useAuth();

     const { data: bookings = [], error } = useQuery(getAllBookings(email));

     // console.log(bookings);
     console.log(error);

     return (
          <div className="pb-6">
               <div className="grid grid-cols-2 items-center justify-items-center gap-y-8">
                    {
                         bookings.map(booked => <div key={booked._id}
                              className="flex flex-col gap-2 w-96 bg-white rounded-2xl relative">
                              <img src={booked.image} alt="serive image" className='w-20 m-6 ' />
                              <p className="px-6 text-xl font-semibold text-[#111430] text-start">
                                   {booked.service}
                              </p>
                              <p className="px-6 text-base text-[#606268] text-start">{booked.describe}</p>
                              <button type="button"
                                   className="h-11 w-full bg-primary text-white font-medium tracking-widest rounded-b-2xl"
                              >
                                   Make Payment
                              </button>
                              <button type="button"
                                   className="h-11 w-24 bg-[#FFE3E3] rounded-md text-primary absolute right-5 top-10"
                              >
                                   cancel
                              </button>
                         </div>)
                    }
               </div>

          </div>
     )
}
