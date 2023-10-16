import { NavLink } from "react-router-dom";

const SideNav = () => {
     return (
          <>
               <NavLink to={"/dashboard/bookingList"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    Book List
               </NavLink>
               <NavLink to={"/dashboard/review"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    Review
               </NavLink>
               <NavLink to={"/dashboard/history"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    History

               </NavLink>
               <NavLink to={"/dashboard/orderList"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    Order List
               </NavLink>
               <NavLink to={"/dashboard/addService"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    Add Service
               </NavLink>
               <NavLink to={"/dashboard/makeAdmin"}
                    className={({ isActive }) =>
                         `${isActive
                              ? "bg-primary text-white tracking-wider rounded-md"
                              : "text-[#878787]"
                         } font-medium h-11 w-full cursor-pointer flex justify-center items-center`
                    }
               >
                    Make Admin
               </NavLink>
          </>
     )
}

export default SideNav;
