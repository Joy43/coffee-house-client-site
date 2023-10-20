import {  NavLink } from "react-router-dom";

const Header = () => {

  const navlinks=    <>
 <li> <NavLink to="/">Home</NavLink></li>
   
    <li> <NavLink to="/addCoffie">Add Coffie</NavLink></li>
    <li> <NavLink to="/signin">signIn</NavLink></li>
    <li> <NavLink to="/signup">signup</NavLink></li>
    <li> <NavLink to="/users">Users</NavLink></li>

</>

    return (
        <div>
        <div className="navbar  bg-[#1A272E]">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
    stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#C96EB8] rounded-box w-52">
    {
      navlinks  
    }
  </ul>
</div>
</div>
<div className="navbar-center">
<a className="btn btn-ghost normal-case text-xl">Coffee Store</a>
</div>
<div className="navbar-end gap-8">
{/*------------------ google sign in btn */}

{/* --------------signout----------------------- */}
 {/* icon men */}
 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
<div className="w-10 rounded-full">
   <img src="https://i.ibb.co/Dzmdwrg/profile.jpg"alt="" />

   </div>
   
  </label>
{/* {

user?
<button  onClick={handleLogout} className="btn"> Sign out </button>
:
<Link to="/login"> <a className="btn">Login</a></Link>
} */}
</div>
</div>
    </div>
    );
};

export default Header;