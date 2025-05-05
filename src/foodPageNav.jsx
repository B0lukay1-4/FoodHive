// import React from 'react'
// <style>
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
// </style>
// import { Link } from 'react-router-dom';
// function foodPageNav() {
//   return (
//     <>
//         <div className="foodPageNav">
//    <div className="navlogo">
// <Link to="/">
//         <img src="Images/food-hive.png" alt="Food Hive Logo" />
//       </Link>
//         </div>
//         <input type="text" placeholder="    Search..." />


//         <ul className="food-link">
//           <li><a href="#">All</a></li>
//           <li><a href="#">Categories</a></li>
//         </ul>
// </div>
//     </>
//   )
// }

// export default foodPageNav

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function FoodPageNav({ onSearch, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  // Handle category selection
  const handleCategory = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <>
      <div className="foodPageNav">
        <div className="navlogo">
          <Link to="/">
            <img src="Images/food-hive.png" alt="Food Hive Logo" />
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <ul className="food-link">
          <li>
            <Link
              to="#"
              onClick={() => handleCategory('All')}
              className={selectedCategory === 'All' ? 'active' : ''}
            >
              All
            </Link>
          </li>
         
          <li>
            <Link
              to="#"
              onClick={() => handleCategory('Drinks')}
              className={selectedCategory === 'Drinks' ? 'active' : ''}
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FoodPageNav;