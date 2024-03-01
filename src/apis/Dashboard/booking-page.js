import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// getting bookings api
export const getAllBookings = (email) => ({
    queryKey: ["bookings", email],
    queryFn: async ({ signal }) => {
        const { data } = await axios.get(`/bookings?email=${email}`, { signal });
        return data;
    }
});



export const DeleteBooking = () => ({
    mutationFn: async (bookedId) => await axios.delete(`/cancelBooked/${bookedId}`),
    onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries({
            queryKey: ['bookings']
        })
    }
})