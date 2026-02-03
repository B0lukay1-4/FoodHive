// import { BsCart4 } from "react-icons/bs";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { DiVim } from "react-icons/di";

// function FoodPageNav({ cartCount, onCartClick }) {
//   return (
//     <div className="foodPageNav">
//       <div className="navlogo">
//         <Link to="/">
//           <img src="Images/food-hive.png" alt="Food Hive Logo" />
//         </Link>
//       </div>

//       <ul className="food-link">
//         <li><Link to="#">All</Link></li>

//         {/* CART ICON */}
//         <li className="cart-wrapper" onClick={onCartClick}>
//           <BsCart4 className="cart-icon" />

//           {cartCount > 0 && (
//             <span className="cart-badge-corner">
//               {cartCount}
//             </span>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default FoodPageNav;
// import { BsCart4 } from "react-icons/bs";
// import { HiMenu, HiX } from "react-icons/hi";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function FoodPageNav({ cartCount, onCartClick }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="foodPageNav">
//       <div className="navlogo">
//         <Link to="/">
//           <img src="Images/food-hive.png" alt="Food Hive Logo" />
//         </Link>
//       </div>

//       {/* HAMBURGER ICON */}
//       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <HiX /> : <HiMenu />}
//       </div>

//       {/* NAV LINKS */}
//       <ul className={`food-link ${menuOpen ? "open" : ""}`}>
//         <li><Link to="#">All</Link></li>

//         <li className="cart-wrapper" onClick={onCartClick}>
//           <BsCart4 className="cart-icon" />
//           {cartCount > 0 && (
//             <span className="cart-badge-corner">{cartCount}</span>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default FoodPageNav;
import { BsCart4 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FoodPageNav({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="foodPageNav">
      <div className="navlogo">
        <Link to="/">
          <img src="Images/food-hive.png" alt="Food Hive Logo" />
        </Link>
      </div>

      {/* Desktop / Tablet links + cart */}
      <ul className="food-link desktop-links">
        
        {/* Add more menu items here when you have them */}
        {/* <li><Link to="/categories">Categories</Link></li> */}
        {/* <li><Link to="/deals">Deals</Link></li> */}

        <li 
          className="cart-wrapper" 
          onClick={onCartClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onCartClick()}
        >
          <BsCart4 className="cart-icon" />
          {cartCount > 0 && (
            <span className="cart-badge-corner">{cartCount}</span>
          )}
        </li>
      </ul>

      {/* Hamburger - only visible on mobile */}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile menu */}
      <ul className={`food-link mobile-menu ${menuOpen ? "open" : ""}`}>
        
        {/* Add more items here */}
        <li 
          className="cart-wrapper mobile-cart"
          onClick={() => {
            onCartClick();
            setMenuOpen(false);
          }}
        >
          <BsCart4 className="cart-icon" />
          Cart
          {cartCount > 0 && (
            <span className="cart-badge-corner">{cartCount}</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default FoodPageNav;