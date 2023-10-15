import axios from "axios";
import { useQuery } from "@tanstack/react-query";




// getting bookings api
const getAllBookings = () => ({
     queryKey: ["bookings"],
     queryFn: async () => {
          const { data } = await axios.get("/bookings");
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
     const { data: bookings = [] } = useQuery(getAllBookings());

     console.log(bookings);

     return (
          <div className="">
               <h3>booking list : {bookings.length}</h3>

               <div className="grid grid-cols-2 items-center justify-items-center">
                    {
                         bookings.map(booked => <div
                              className="flex flex-col items-center justify-center gap-2 w-96 h-80 hover:border border-black rounded-xl p-10 transition cursor-pointer">
                              <img src={"hs"} alt="serive image" className='w-20' />
                              <p className="text-xl font-semibold text-[#111430]">{booked.treatment}</p>
                              <p className="text-xl font-medium text-primary px-2">${booked.price}</p>
                              <p className="font-light text-base text-gray text-center h-auto">{booked.describe}</p>
                         </div>)
                    }
               </div>

          </div>
     )
}
