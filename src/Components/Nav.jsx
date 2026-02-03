import React from 'react';
import { useState } from 'react';
import "../index.css";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
{/* <RxHamburgerMenu /> */}
{/* <IoMdClose /> */}
import { Link } from 'react-router-dom';
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="navlogo">
          <Link to="/">
            <img src="Images/food-hive.png" alt="Food Hive Logo" />
          </Link>
        </div>

        <ul className={`navlinks ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/food" onClick={() => setMenuOpen(false)}>Food</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* 🍔 HAMBURGER */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose />  : <RxHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;