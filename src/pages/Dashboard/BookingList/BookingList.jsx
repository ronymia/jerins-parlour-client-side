import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../hooks";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";



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
     const queryClient = useQueryClient();
     const deleteSwal = withReactContent(Swal);

     const { data: bookings = [] } = useQuery(getAllBookings(email));

     // bookings cancle
     const { mutateAsync } = useMutation({
          mutationFn: async (bookedId) => axios.delete(`/cancelBooked/${bookedId}`),
          onSuccess: () => {
               queryClient.invalidateQueries({
                    queryKey: ['bookings']
               })
          }
     })

     const handleCancelBooked = async (bookedId) => {
          console.log(bookedId);
          const res = await mutateAsync(bookedId);
          console.log(res);

          if (res.data) {
               deleteSwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: <h1 className="text-xl">`cancel success`</h1>,
                    showConfirmButton: false,
                    timer: 2000
               })
          }
     }

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
                                   onClick={() => handleCancelBooked(booked._id)}
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
