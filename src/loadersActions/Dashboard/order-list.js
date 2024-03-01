import axios from "axios";
     
// getting bookings api
export const getOrderList = () => ({
    queryKey: ["orderList"],
    queryFn: async () => {
         const { data } = await axios.get(`/order-list`, {
              headers: {
                   authorization: `Bearer ${localStorage.getItem('access-token')}`
              }
         });
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