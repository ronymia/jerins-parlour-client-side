import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'


const bookingQuery = (serviceId) => ({
     queryKey: ["service", serviceId],
     queryFn: async () => {
          const { data } = await axios.get(`/service/${serviceId}`);
          return data;
     }
})


export const loader = (queryClient) => async ({ params }) => {
     const query = await bookingQuery(params.serviceId);
     return (
          queryClient.getQueryData(query.queryKey) ??
          (await queryClient.fetchQuery(query))
     )
}




export default function Service() {
     const { user } = useAuth();
     const { serviceId } = useParams();
     const { data: service } = useQuery(bookingQuery(serviceId));
     const MySwal = withReactContent(Swal)


     const { register, handleSubmit } = useForm({
          defaultValues: {
               name: user?.displayName,
               email: user?.email,
               serviceTitle: service?.service,
               serviceCharge: service?.price
          }
     });


     const onHandleBooking = async (data) => {
          const { name, email, phoneNumber } = data;
          let currentDate = new Date().toJSON().slice(0, 10);
          let uniquId = new Date().getTime();

          // booking new service
          const bookedInfo = {
               bookingDate: currentDate,
               service: service.service,
               image: service.image,
               describe: service.describe,
               price: service.price,
               completionStatus: "Pending",
               paymentStatus: "due",
               name,
               email,
               phoneNumber,
          }

          // insert new bookings
          const res = await axios.post(`/bookings`, bookedInfo);
          if (res.data.acknowledged) {
               MySwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: <h1 className="text-xl">`Your Appointment saved on {currentDate}`</h1>,
                    showConfirmButton: false,
                    timer: 2000
               })
          }

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
                         <label htmlFor="serviceTitle"
                              className="text-[#899694] text-sm"
                         >Service</label>
                         <input type="text"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium cursor-not-allowed"
                              disabled
                              {...register("serviceTitle")} />
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
