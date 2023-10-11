import { NavLink } from "react-router-dom";

const SideNav = () => {
     return (
          <aside className="flex flex-col">
               <NavLink to={"/dashboard/booking"}>Book</NavLink>
               <NavLink>Booking List</NavLink>
               <NavLink>Review</NavLink>
               <NavLink>History</NavLink>
          </aside>
     )
}

export default SideNav;
