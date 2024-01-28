import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

export default function useServices() {
     const [axiosSecure] = useAxiosSecure();

     return useQuery({
          queryKey: ["services"],
          queryFn: async () => {
               const { data } = await axiosSecure.get("/services");
               return data;
          }
     })
}
