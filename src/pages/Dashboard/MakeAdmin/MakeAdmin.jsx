import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



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
     const queryClient = useQueryClient();
     const MakeAdminSwal = withReactContent(Swal);
     const { data: users = [], isLoading } = useQuery(getUsers());
     // console.log(users);

     const { mutateAsync } = useMutation({
          mutationFn: async (_id) => await axios.patch(`/user/admin/${_id}`),
          onSuccess: async () => {
               queryClient.invalidateQueries({
                    queryKey: ["users"],
                    exact: true,
               })
          }
     })

     const makeAdminHandler = async (user) => {

          const result = await mutateAsync(user._id)

          if (result.data) {
               MakeAdminSwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: <h1 className="text-xl">`admin success`</h1>,
                    showConfirmButton: false,
                    timer: 2000
               })
          }
     }



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
                                   <div key={user._id}
                                        className="table-row h-11"
                                   >
                                        <div className="table-cell pl-3">{user.name}</div>
                                        <div className="table-cell pt-5">{user.email}</div>
                                        <div className="table-cell">
                                             {
                                                  user.role === 'admin' ? "Admin User" : <button type="button"
                                                       onClick={() => makeAdminHandler(user)}
                                                       className="bg-primary text-white h-10 w-32 rounded-md"
                                                  >
                                                       Make Admin
                                                  </button>
                                             }
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
