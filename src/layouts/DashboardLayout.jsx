import React from 'react';
import { Header } from '../pages/Shared';
import SideNav from '../pages/UserDashboard/SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
     return (
          <>
               <Header />
               <div className="w-full flex flex-row">
                    <div className="w-1/5 pl-32">
                         <SideNav />
                    </div>
                    <div className="w-4/5 bg-[#F4F7FC]">
                         <Outlet />
                    </div>
               </div>
          </>
     )
}

export default DashboardLayout;
