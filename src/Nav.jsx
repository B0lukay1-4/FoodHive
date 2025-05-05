import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="navbar">
      <div className="navlogo">
      <Link to="/">
        <img src="Images/food-hive.png" alt="Food Hive Logo" />
      </Link>
        {/* <h3>Food<span>Hive</span></h3> */}
      </div>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
     
    </div>
  );
}

export default Nav;