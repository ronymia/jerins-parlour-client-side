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
          <div className="bg-white p-6 rounded-2xl">
               <div className="table w-full text-sm">
                    <div className="table-header-group">
                         <div className="table-row bg-[#F5F6FA] rounded-xl text-[#686868] font-normal h-11">
                              <div className="table-cell pl-3 pt-3">Name</div>
                              <div className="table-cell">Email ID</div>
                              <div className="table-cell">Service</div>
                              <div className="table-cell">Pay with</div>
                              <div className="table-cell">Status</div>
                         </div>
                    </div>

                    <div className="table-row-group">
                         {
                              bookings?.map(booked =>
                                   <div key={booked._id}
                                        className="table-row h-11"
                                   >
                                        <div className="table-cell pl-3">{booked.name}</div>
                                        <div className="table-cell pt-5">{booked.email}</div>
                                        <div className="table-cell">{booked.service}</div>
                                        <div className="table-cell"><span>Due</span></div>
                                        <div className="table-cell">
                                             <span className="text-[#FF4545]">Pending</span>
                                             {/* <span className="text-[#FFBD3E]">on going</span> */}
                                             {/* <span className="text-[#009444]">Done</span> */}
                                        </div>
                                   </div>
                              )
                         }
                    </div>

               </div>
          </div>
     )
}
