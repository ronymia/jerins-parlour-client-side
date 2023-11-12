import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../../../hooks';
//import logo
import logo from '../../../assets/logo.png'
import useAdmin from '../../../hooks/useAdmin';

export default function Header() {
     const navigate = useNavigate();
     const { user, userSignOut } = useAuth();
     const [isAdmin] = useAdmin();
     const [toggleMenu, setToggleMenu] = useState(false);

     const navMenu = <>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Testimonial</NavLink>
          <NavLink>Contact Us</NavLink>

          {user?.uid && <NavLink to={
               isAdmin ?
                    "/dashboard/orderList"
                    :
                    "/dashboard/bookingList"}>Dashboard</NavLink>}
          {
               user?.uid ?
                    <button type="button"
                         onClick={() => userSignOut()}
                         className="h-11 px-5 rounded-md bg-primary text-white font-medium"
                    >
                         log out
                    </button>
                    :
                    <Link to={"/auth/login"}
                         className='h-11 w-24 bg-primary cursor-pointer rounded-md 
                                        text-white flex justify-center items-center font-medium 
                                        tracking-wider'>Login</Link>
          }
     </>

     return (
          <header className='flex flex-row items-center justify-between px-6 md:px-20 py-5 bg-[#FFF8F5]'>
               <img src={logo} alt="logo"
                    className='h-12 cursor-pointer'
                    onClick={() => navigate("/")}
               />
               <nav className="relative">
                    {/* destop menu  */}
                    <ul className='hidden md:flex flex-row items-center justify-center gap-x-5 text-[#474747]'>
                         {navMenu}
                    </ul>

                    {/* toogle button  */}
                    <div className="inline-block md:hidden z-50"
                         onClick={() => setToggleMenu(!toggleMenu)}
                    >
                         {
                              toggleMenu ?
                                   <AiOutlineClose className="text-4xl" />
                                   :
                                   <FiMenu className="text-4xl" />
                         }
                    </div>

                    {/* responsive menu  */}
                    <ul className={`absolute top-10 right-0 bg-white w-[200px] 
                    h-[500px] md:hidden flex  flex-col justify-start items-center pt-10 gap-y-6 text-xl 
                    transition-all ${toggleMenu ?
                              "opacity-100"
                              :
                              "opacity-0"
                         }`}
                    >
                         {navMenu}
                    </ul>
               </nav>
          </header>
     )
}
