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
     console.log(bookings)

     return (
          <div>
               <h2>order list</h2>
          </div>
     )
}
