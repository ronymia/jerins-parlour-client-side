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
          <div className="p-6 bg-white">
               <div className="table w-full text-sm">
                    <div className="table-header-group">
                         <div className="table-row bg-[#F5F6FA] rounded-xl text-[#686868] font-normal h-11">
                              <div className="table-cell pl-3 pt-3">Name</div>
                              <div className="table-cell">Email ID</div>
                              <div className="table-cell">Role</div>
                              <div className="table-cell">Action</div>
                         </div>
                    </div>

                    <div className="table-row-group">
                         {
                              users?.map(user =>
                                   <div className="table-row h-11">
                                        <div className="table-cell pl-3">{user.name}</div>
                                        <div className="table-cell pt-5">{user.email}</div>
                                        <div className="table-cell">
                                             <button type="button"
                                                  className="bg-primary text-white h-10 w-32 rounded-md"
                                             >
                                                  Make Admin
                                             </button>
                                        </div>
                                        <div className="table-cell">
                                             <button type="button"
                                                  className="bg-primary text-white h-10 w-32 rounded-md"
                                             >
                                                  Remove Admin
                                             </button>
                                        </div>
                                   </div>
                              )
                         }
                    </div>

               </div>
          </div>
     )
}
