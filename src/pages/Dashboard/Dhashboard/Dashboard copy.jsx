import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
     return (
          <div
               className="w-full px-6 md:px-20 flex flex-row bg-[#F4F7FC]">
               <div className="drawer lg:drawer-open">
                    <input
                         id="dashboard-drawer"
                         type="checkbox"
                         className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col items-center justify-center">
                         {/* Page content here */}
                         <h1>Hello World</h1>
                         <label
                              htmlFor="dashboard-drawer"
                              className="btn btn-primary drawer-button lg:hidden"
                         >
                              Open drawer
                         </label>

                    </div>
                    <div className="drawer-side">
                         <label
                              htmlFor="dashboard-drawer"
                              aria-label="close sidebar"
                              className="drawer-overlay"
                         >

                         </label>
                         <ul
                              className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
                         >
                              {/* Sidebar content here */}
                              <li><a>Sidebar Item 1</a></li>
                              <li><a>Sidebar Item 2</a></li>
                         </ul>

                    </div>
               </div>
          </div>
     )
}
