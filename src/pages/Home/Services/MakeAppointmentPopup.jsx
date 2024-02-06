import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { MdCancel } from "react-icons/md";
import { useAuth } from "../../../hooks";
import { format } from "date-fns";
import useNumberField from "../../../hooks/useNumberField";




const bookingQuery = (serviceId) => ({
     queryKey: ["service", serviceId],
     queryFn: async () => {
          const { data } = await axios.get(`/service/${serviceId}`);
          if (!data) {
               throw new Response('', {
                    status: 404,
                    statusText: 'Not Found'
               })
          }
          return data;
     }
})


// export const loader = (queryClient) => async ({ params }) => {
//      const query = await bookingQuery(params.serviceId);
//      return (
//           queryClient.getQueryData(query.queryKey) ??
//           (await queryClient.fetchQuery(query))
//      )
// }

// export const action = (queryClient) =>
//      async ({ request }) => {
//           const formData = await request.formData();
//           const name = formData.get("name");
//           console.log(name)
//      }


export default function MakeAppointmentPopup({ serviceId: treamentId, closeModal }) {
     const queryClient = useQueryClient(); //QUERY CLIENT
     const { user } = useAuth();   // CURRENT USER 
     const MySwal = withReactContent(Swal);

     // GETTING CURREN DATE
     const newDate = new Date();
     const toDay = format(newDate, 'yyyy-MM-dd')

     //number key remove
     const numberRef = useRef(null);
     const [value] = useNumberField(numberRef);

     // SINGLE SERVICE DATA API
     const { data: service, isLoading } = useQuery(bookingQuery(treamentId));

     //BOOKED FORM STATE
     const [bookedInfo, setBookedInfo] = useState({
          name: user?.displayName,
          email: user?.email,
          serviceTitle: service?.service,
          toDay: null,
     });

     //BOOKED SUBMITTING
     const { mutateAsync } = useMutation({
          mutationFn: (bookedInfo) => axios.post(`/bookings`, bookedInfo),
          onSuccess: () => {
               queryClient.invalidateQueries({
                    queryKey: ["bookings"]
               })
          }
     });

     //APPOINTMENT BOOKED FORM
     const { register, handleSubmit } = useForm({
          defaultValues: {
               name: bookedInfo?.name,
               email: bookedInfo?.email,
               // serviceTitle: bookedInfo.serviceTitle,
               // serviceCharge: service?.price
          }
     });

     //FORM SUBMITTING
     const onHandleBooking = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const bookingData = Object.fromEntries(formData);

          // booking new service
          const bookedInfo = {
               ...bookingData,
               toDay: toDay,
               service_id: treamentId,
               status: "pending",
               payment: "due",
          };
          console.log(bookedInfo);
          // insert new bookings
          const res = await mutateAsync(bookedInfo);
          if (res.data.acknowledged) {
               //closing modal
               setOpenModal(pre => !pre);
               //NOTIFICATION POPUP
               MySwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: <h1 className="text-xl">Your Appointment saved on {currentDate}</h1>,
                    showConfirmButton: false,
                    timer: 1500
               })
          }

     };



     /**********************************************************************************************
                                                  UI LAYOUT
     *********************************************************************************************/
     return (
          <div className="w-[450px] flex flex-col items-center justify-center bg-[#F4F7FC] p-5 gap-y-3 rounded-md">
               {/* popup close butuon */}
               <div className="bg-[#F4F7FC] w-full flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-medium">{service?.service}</h1>
                    <button type="button"
                         onClick={() => closeModal()}
                    ><MdCancel className="text-red text-3xl" /></button>
               </div>

               {/* BOOKING FORM  */}
               <Form
                    onSubmit={onHandleBooking}
                    className="w-full flex flex-col items-center justify-center gap-y-2"
               >
                    {/* DATE field */}
                    <div className="w-full">
                         <label htmlFor="Date">
                              <span className="text-[#899694] text-sm">Appointment Date</span>
                         </label>
                         <br />
                         <input type="Date"
                              name="appointment_date"
                              aria-label="Appointment Date"
                              // value={toDay}
                              defaultValue={toDay}
                              min={toDay}
                              className="h-11 w-full rounded-md focus:outline-none px-3 text-sm font-medium"
                         />

                    </div>
                    {/* name field  */}
                    <div className="w-full">
                         <label htmlFor="name">
                              <span className="text-[#899694] text-sm">Your Name</span>
                         </label>
                         <br />
                         <input type="text"
                              name="customer_name"
                              aria-label="Name"
                              defaultValue={bookedInfo.name}
                              className="h-11 w-full rounded-md focus:outline-none px-3 text-sm font-medium"
                         />
                    </div>

                    {/* Email field  */}
                    <div className="w-full">
                         <label htmlFor="email">
                              <span className="text-[#899694] text-sm">Your Email</span>
                         </label>
                         <br />
                         <input type="email"
                              readOnly
                              name="email"
                              aria-label="Customer Email"
                              defaultValue={bookedInfo.email}
                              className="h-11 w-full rounded-md focus:outline-none px-3 text-sm font-medium"
                         />
                    </div>

                    {/* NUMBER field */}
                    <div className="w-full">
                         <label htmlFor="Customer Number">
                              <span className="text-[#899694] text-sm">Your Number</span>
                         </label>
                         <br />
                         <input type="number"
                              name="customer_number"
                              aria-label="Customer Number"
                              ref={numberRef}
                              className="h-11 w-full rounded-md focus:outline-none px-3 text-sm font-medium"
                         />
                    </div>

                    {/* SERVICE CHARGE  */}
                    <p><strong>Your service  charged will be <span className="text-xl text-primary">${service?.price}</span> </strong></p>

                    {/* SUBBIT BUTTON  */}
                    <button type="submit"
                         name="intent"
                         value={"Confirm Booking"}
                         className="w-full capitalize px-7 py-3 h-12 text-white bg-primary rounded-[5px] font-medium"
                    >Confirm Booking</button>
               </Form>
          </div>
     )
}
