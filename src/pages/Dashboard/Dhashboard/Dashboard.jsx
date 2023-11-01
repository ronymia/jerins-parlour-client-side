import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
     return (
          <div className="w-full pl-32 flex flex-row bg-white">
               <aside className="w-1/5 pt-6 h-screen bg-white flex flex-col px-6">
                    <SideNav />
               </aside>
               <div className="w-4/5 bg-[#F4F7FC] pr-32 pl-6 pt-6">
                    <Outlet />
               </div>
          </div>
     )
}
