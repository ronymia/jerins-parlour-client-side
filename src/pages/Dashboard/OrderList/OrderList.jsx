import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks";

// getting bookings api
export const getOrderList = () => ({
     queryKey: ["orderList"],
     queryFn: async () => {
          const { data } = await axios.get(`/orderList`);
          return data;
     }
})

// bookings loader
export const loader = (queryClient) => async () => {
     const bookings = await getOrderList();
     return (
          queryClient.getQueryData(bookings.queryKey) ??
          (await queryClient.fetchQuery(bookings))
     )
}

export default function OrderList() {
     const { user } = useAuth();
     const { data: bookings = [] } = useQuery(getOrderList());
     // console.log(bookings)

     return (
          <div className="bg-white p-6">
               {
                    <table className="w-full ">
                         <thead>
                              <tr className="bg-[#F5F6FA] rounded-xl text-[#686868] font-normal h-11 text-center">
                                   <td>Name</td>
                                   <td>Email ID</td>
                                   <td>Service</td>
                                   <td>pay with</td>
                                   <td>status</td>
                              </tr>
                         </thead>
                         <tbody className="">
                              {
                                   bookings &&
                                   bookings.map(booked => <tr key={booked._id}
                                        className="text-center gap-4"
                                   >
                                        <td>{booked.name}</td>
                                        <td>{booked.email}</td>
                                        <td>{booked.service}</td>
                                        <td>{booked.paymentStatus}</td>
                                        <td>{booked.completionStatus}</td>
                                   </tr>)
                              }
                         </tbody>
                    </table>
               }
          </div>
     )
}
