import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../Firebase.init';

const Navbar = () => {
  const[user]=useAuthState(auth)
  
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl hover:text-secondary">Driller</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li className='hover:text-secondary'><Link to='/home'>Home</Link></li>
      <li className='hover:text-secondary'><Link to='/dashboard'>Dashboard</Link></li>
      <li className='hover:text-secondary'><Link to='/blogs'>Blogs</Link></li>
      <li className='hover:text-secondary'><Link to='/contact'>Contact Us</Link></li>
      <li className='hover:text-secondary'><Link to='/myPortfolio'>My Portfolio</Link></li>
     {
      !user? <li className='hover:text-secondary'><Link to='/login'>Login</Link></li>: <button onClick={()=>{signOut(auth)}} className='btn btn-ghost hover:text-secondary'>Sign Out</button>
     }

     
    </ul>
  </div>
</div>
    );
};

export default Navbar;