import React from 'react';
//import logo
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks';

export default function Header() {
     const { user } = useAuth();

     return (
          <header className='flex flex-row items-center justify-between px-32 max-w-full py-5 bg-[#FFF8F5]'>
               <img src={logo} alt="logo"
                    className='h-12'
               />
               <nav>
                    <ul className='flex flex-row items-center justify-center gap-x-5 text-[#474747]'>
                         <NavLink to={"/"}>Home</NavLink>
                         <NavLink>Our Portfolio</NavLink>
                         <NavLink>Our Team</NavLink>
                         <NavLink>Contact Us</NavLink>
                         {
                              user?.uid ?
                                   <p className="text-xl font-medium text-black">{user?.displayName ? user.displayName : "no name"}</p>
                                   :
                                   <Link to={"/auth/login"}
                                        className='h-11 w-24 bg-primary cursor-pointer rounded-md text-white flex justify-center items-center font-medium tracking-wider'>Login</Link>
                         }
                    </ul>
               </nav>
          </header>
     )
}
