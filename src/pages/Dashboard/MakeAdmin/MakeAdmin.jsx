import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const getUsers = () => ({
     queryKey: ["users"],
     queryFn: async () => {
          const res = await axios.get("/users");
          return res.data;
     }
})

export const loader = (queryClient) => async () => {
     const users = await getUsers();
     return (
          queryClient.getQueryData(users.queryKey) ??
          await (queryClient.fetchQuery(users))
     )
}






export default function MakeAdmin() {

     const { data: users = [], isLoading } = useQuery(getUsers());
     console.log(users);

     return (
          <div className="p-6 bg-white rounded-xl grid grid-cols-1 gap-4">
               <div className="grid grid-cols-4 justify-items-center items-center bg-[#F5F6FA] rounded-xl text-[#686868] font-normal h-11">
                    <h3>Name</h3>
                    <h3>Email ID</h3>
                    <h3>Role</h3>
                    <h3>Action</h3>
               </div>

               {
                    users?.map(user =>
                         <div className="grid grid-cols-4 justify-items-center items-center rounded-xl text-black font-normal h-11">
                              <h3>{user.name}</h3>
                              <h3>{user.email}</h3>
                              <h3>
                                   <button type="button"
                                        className="bg-primary text-white h-10 w-32 rounded-md"
                                   >
                                        Make Admin
                                   </button>
                              </h3>
                              <h3>
                                   <button type="button"
                                        className="bg-primary text-white h-10 w-32 rounded-md"
                                   >
                                        Remove Admin
                                   </button>
                              </h3>
                         </div>
                    )
               }

          </div>
     )
}
