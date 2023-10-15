import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';
//import logo
import logo from '../../../assets/logo.png'

export default function Header() {
     const navigate = useNavigate();
     const { user, userSignOut } = useAuth();

     return (
          <header className='flex flex-row items-center justify-between px-32 max-w-full py-5 bg-[#FFF8F5]'>
               <img src={logo} alt="logo"
                    className='h-12 cursor-pointer'
                    onClick={() => navigate("/")}
               />
               <nav>
                    <ul className='flex flex-row items-center justify-center gap-x-5 text-[#474747]'>
                         <NavLink to={"/"}>Home</NavLink>
                         <NavLink>Services</NavLink>
                         <NavLink>Testimonial</NavLink>
                         <NavLink>Contact Us</NavLink>
                         <NavLink to={"/dashboard/bookingList"}>Dashboard</NavLink>
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
                                        className='h-11 w-24 bg-primary cursor-pointer rounded-md text-white flex justify-center items-center font-medium tracking-wider'>Login</Link>
                         }
                    </ul>
               </nav>
          </header>
     )
}
