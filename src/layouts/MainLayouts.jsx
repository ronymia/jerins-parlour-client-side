import React from 'react';
import { Footer, Header } from '../pages/Shared';
import { Outlet, useLocation } from 'react-router-dom';

export default function MainLayouts() {
     const location = useLocation();
     const noFooter = location.pathname.includes('/dashboard');

     return (
          <>
               <Header />
               <Outlet />
               {noFooter || <Footer />}
          </>
     )
}
