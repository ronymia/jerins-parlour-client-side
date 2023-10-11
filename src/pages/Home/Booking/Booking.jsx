import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";
import { useParams } from "react-router-dom";
import useServices from "../../../apis/useServices";

const Booking = () => {
     const { bookingId } = useParams();
     const { user } = useAuth();
     const { register, handleSubmit } = useForm({
          defaultValues: {
               name: user?.displayName,
               email: user?.email
          }
     });

     const { data: services = [], isLoading } = useServices();

     if (isLoading) {
          return <DnaLoader />;
     }

     const onHandleBooking = async (data) => {
          console.log(data);
     }
     console.log(user)


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
                              {...register("name")}
                         />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="email"
                              className="text-[#899694] text-sm"
                         >Your email</label>
                         <input type="email"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                              {...register("email")}
                         />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="serviceName"
                              className="text-[#899694] text-sm"
                         >Service Name</label>
                         <input type="text"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                              {...register("serviceName")}
                         />
                    </div>

                    <div className="flex flex-col gap-y-2">
                         <label htmlFor="serviceCharge"
                              className="text-[#899694] text-sm"
                         >Your Service  charged will be </label>
                         <input type="text"
                              className="h-11 rounded-md focus:outline-none px-3 text-sm font-medium"
                              {...register("serviceName")}
                         />
                    </div>

                    <button type="submit"
                         className="bg-primary px-5 h-11 text-white w-full rounded-md"
                    >
                         Confirm Booking
                    </button>
               </form>
          </div>
     )
}

export default Booking;
