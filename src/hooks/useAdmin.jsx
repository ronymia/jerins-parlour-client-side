import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useAdmin = () => {
     const { user, loading } = useAuth();
     const [axiosSecure] = useAxiosSecure();

     // use axios secure with react query
     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
          queryKey: ['isAdmin', user?.email],
          enabled: !loading,
          queryFn: async () => {
               const res = await axios.get(`/users/admin/${user?.email}`, {
                    headers: {
                         authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
               });
               return res.data.admin;
          }
     })
     return [isAdmin, isAdminLoading]
}
export default useAdmin;