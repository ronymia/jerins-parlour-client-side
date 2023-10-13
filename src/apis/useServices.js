import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useServices() {
     return useQuery({
          queryKey: ["services"],
          queryFn: async () => {
               const { data } = await axios.get("/services");
               return data;
          }
     })
}
