import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
     const { user, loading } = useAuth();

     // use axios secure with react query
     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
          queryKey: ['isAdmin', user?.email],
          enabled: !!user && !loading,
          queryFn: async () => {
               const res = await axios.get(`/users/admin/${user?.email}`);
               return res.data.admin;
          }
     })
     return [isAdmin, isAdminLoading]
}
export default useAdmin;