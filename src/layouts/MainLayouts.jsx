import React from 'react';
import { Header } from '../pages/Shared';
import { Outlet } from 'react-router-dom';

export default function MainLayouts() {
     return (
          <>
               <Header />
               <Outlet />
          </>
     )
}
