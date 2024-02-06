import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
     return (
          <div
               className="w-full px-6 md:px-20 flex flex-row bg-[#F4F7FC]">
               <aside className="w-1/5 my-6 p-5 bg-white h-[80vh] flex flex-col rounded-2xl sticky top-24">
                    <SideNav />
               </aside>
               <div className="w-4/5 m-6 mr-0">
                    <Outlet />
               </div>
          </div>
     )
}
