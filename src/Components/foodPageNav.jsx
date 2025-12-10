
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
        
        <ul className="food-link">
          <li>
            <Link
              to="#"
            >
              All
            </Link>
          </li>
         
        </ul>
      </div>
    </>
  );
}

export default FoodPageNav;