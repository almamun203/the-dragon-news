import { Link, NavLink } from "react-router-dom";
import userPic from '../../assets/user.png'

const Navbar = () => {
   const navLinks=<>
    <li><NavLink className=' font-bold no-underline' to='/'>Home</NavLink></li>
    <li><NavLink className=' font-bold no-underline' to='/about'>About</NavLink></li>
    <li><NavLink className=' font-bold no-underline' to='/career'>Career</NavLink></li>
    <li><NavLink className=' font-bold no-underline' to='/login'>Login</NavLink></li>
    <li><NavLink className=' font-bold no-underline' to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="flex justify-between items-center  max-w-3xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end  items-center flex gap-2">
  <div className=" rounded-full">
          <img className="w-8 rounded-full" alt="" src={userPic} />
        </div>
    <Link to='/login'>  <button className="btn btn-sm  bg-cyan-500 text-white hover:bg-cyan-600 rounded-none">Login</button></Link>
  </div>
</div>
    );
};

export default Navbar;