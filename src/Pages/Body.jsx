import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { PiCurrencyDollarSimple } from "react-icons/pi";
// import { Routes, Route } from 'react-router-dom';
import { CiBadgeDollar } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
// InfoCard Component
function InfoCard({ icon, label, title }) {
  return (
    <ul className="fourth-content-text">
      <li>
        <a href="#" className="icon-label">
          {icon}
          <h3>{label}</h3>
        </a>
      </li>
      <h4>{title}</h4>
    </ul>
  );
}


// Body Component
function Body() {
  return (
    <>
      <div className="content">
        <div className="text-content">
          <h6>____ FRESH & DELICIOUS</h6>
          <h3>
            <span>Delicious</span> Meal <br /> and <span>Confectionery </span>
          </h3>
          <p>
            Enjoy fresh, flavorful meals and confectionery  made with the finest ingredients.
          </p>
          <br />
          <button className="btn">Order Now</button>
        </div>
        <div className="image-content">
            <img src="Images/african-food.jpg" className="hero-image" />
        </div>
      </div>

      <div className="second-content">
        <div className="second-text">
          <h3>Explore <span>Our</span>  Menu</h3>
          <p>Try our menu, crafted with fresh irresistible flavors</p>
        </div>
        <div className="second-button">
        <Link to="/food">
          <button className="btn view-btn">View All &#8594;</button>
           </Link>
        </div>
      </div>

      <div className="popular-section">
  <h2 className="section-title"></h2>

  <div className="category-grid">
    {categories.map((item, index) => (
      <div className="category-card" key={index}>
        <img src={item.image} alt={item.title} />
        <div className="overlay">
          <h3>{item.title}</h3>
          <p>{item.tags}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      

    </>
  )
}




const categories = [
  {
    image: "/Images/ice-cocktail.jpg",
    title: "Refreshing Beverages & Mocktails",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
  {
    image: "/Images/chickenmeal.jpg",
    title: "Desserts That Melt Hearts",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
  {
    image: "/Images/delicious-lobster.jpg",
    title: "Seafood Specials",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
];

export default Body;
