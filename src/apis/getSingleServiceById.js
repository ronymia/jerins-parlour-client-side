import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function getSingleServiceById() {
     return useQuery({
          queryKey: ["booking"],
          queryFn: async ({ params }) => {
               const { data } = await axios.get(`/booking/${params.serviceId}`);
               return data;
          }
     })
}
