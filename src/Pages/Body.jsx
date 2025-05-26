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
            <span>Delicious</span> Meal <br /> and <span>Cofetionaries</span>
          </h3>
          <p>
            Enjoy fresh, flavorful meals and cofentionaries made with the finest ingredients.
          </p>
          <br />
          <button className="btn">Order Now</button>
        </div>
        <div className="image-content">
          <img src="Images/african-food.jpg" width={500} height={400} />
        </div>
      </div>

      <div className="second-content">
        <div className="second-text">
          <h3>Our <span>Popular</span> Items</h3>
          <p>Try our popular items, crafted with fresh irresistible flavors</p>
        </div>
        <div className="second-button">
        <Link to="/food">
          <button className="btn">View All &#8594;</button>
           </Link>
        </div>
      </div>

      <div className="third-content">
        <ul className="third-image-content">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">
                <img src={item.image} className="hover-glow" alt={item.text} width={160} height={160} />
              </a>
              <h3>{item.text}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="fourth-content">
        {infoItems.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            label={item.label}
            title={item.title}
          />
        ))}
      </div>
<div className="suggested-items">
 <h4>Suggested <span>Products</span></h4>
</div>
    </>
  )
}

const items = [
  { image: '/Images/fried-rice.jpg', text: 'Special Fried rice' },
  { image: '/Images/easy.jpg', text: 'Cake' },
  { image: '/Images/king.jpg', text: 'Burger' },
  { image: '/Images/pizza.jpg', text: 'Pizza' }
];

const infoItems = [
  { icon: <CiDeliveryTruck  className='icon'/>, label: "Free Delivery", title: "Order now" },
  { icon: <PiCurrencyDollarSimple  className='icon' />, label: "Return & Refund", title: "Money back guaranteed" },
  { icon: <CiBadgeDollar  className='icon' />    , label: "Food Items Worth Payment", title: "Stay Warm" },
  { icon: <BiSupport   className='icon'/>, label: "24/7 Customer Support", title: "Be at rest!" }
];

export default Body;
