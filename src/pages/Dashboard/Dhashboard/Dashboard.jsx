import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
     return (
          <div
               style={{
                    height: "calc(100vh - 80px)"
               }}
               className="w-full px-20 flex flex-row bg-[#F4F7FC]">
               <aside className="w-1/5 my-6 p-5 bg-white flex flex-col rounded-2xl">
                    <SideNav />
               </aside>
               <div className="w-4/5 m-6 mr-0">
                    <Outlet />
               </div>
          </div>
     )
}
