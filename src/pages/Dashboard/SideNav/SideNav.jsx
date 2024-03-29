import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const SideNav = () => {

     const [isAdmin] = useAdmin();



     return (
          <>
               {
                    isAdmin ?
                         <>
                              <NavLink to={"/dashboard/order-list"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   Order List
                              </NavLink>
                              <NavLink to={"/dashboard/addService"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   Add Service
                              </NavLink>
                              <NavLink to={"/dashboard/makeAdmin"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   Make Admin
                              </NavLink>
                         </>
                         :
                         <>
                              <NavLink to={"/dashboard/booking-list"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   Booking List
                              </NavLink>
                              <NavLink to={"/dashboard/review"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   Review
                              </NavLink>
                              <NavLink to={"/dashboard/history"}
                                   className={({ isActive }) =>
                                        `${isActive
                                             ? "bg-primary text-white tracking-wider rounded-md"
                                             : "text-[#878787]"
                                        } font-medium h-11 w-full cursor-pointer flex justify-start items-center pl-6`
                                   }
                              >
                                   History

                              </NavLink>
                         </>
               }
          </>
     )
}

export default SideNav;
