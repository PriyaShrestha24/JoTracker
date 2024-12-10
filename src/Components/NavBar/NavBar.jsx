import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu flex gap-8">
        <Link to="/" className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</Link>
        <Link to="/companies" className="menulist text-[#6f6f6f] hover:text-blueColor">Companies</Link>
        <Link to="/about" className="menulist text-[#6f6f6f] hover:text-blueColor">About</Link>
        <Link to="/contact" className="menulist text-[#6f6f6f] hover:text-blueColor">Contact</Link>
        <Link to="/blog" className="menulist text-[#6f6f6f] hover:text-blueColor">Blog</Link>
        <Link to="/login" className="menulist text-[#6f6f6f] hover:text-blueColor">Login</Link>
        <Link to="/signup" className="menulist text-[#6f6f6f] hover:text-blueColor">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
