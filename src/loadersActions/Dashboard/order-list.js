import axios from "axios";

// getting bookings api
export const getOrderList = () => ({
     queryKey: ["orderList"],
     queryFn: async ({ signal }) => {
          const { data } = await axios.get(`/order-list`, { signal });
          return data;
     }
})

// orderList loader
export const loader = (queryClient) => async () => {
     const orderList = await getOrderList();
     return (
          queryClient.getQueryData(orderList.queryKey) ??
          (await queryClient.fetchQuery(orderList))
     )
}