import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
function FoodCard() {
  const navigate = useNavigate();

  const handleOrderNow = (image, title, price, description) => {
    console.log('handleOrderNow called with:', { image, title, price, description });
    const item = { image, title, price, description };
    try {
      localStorage.setItem('orderedItem', JSON.stringify(item));
      console.log('Item stored in localStorage:', localStorage.getItem('orderedItem'));
      navigate('/order');
      console.log('Navigating to /orderpage');
    } catch (error) {
      console.error('Error in handleOrderNow:', error);
    }
  };

  return (
    <>
    <div className="cardfood">
    <div className="food-card">
     
      <img
        src="Images/round.webp"
        alt="Food Item"
        className="food-image"
      />
      <div className="food-details">
      <div className="title-like">
              <h3 className="food-title">Rounded Spice</h3>
              <FaRegHeart className="favourite" />
              
              </div>
      <p className="food-description">Hat White Rice</p>
      <div className="price-add">
      <p className="food-price">NGN 5000</p>
         <IoMdAdd className="add" />
         </div>
         <button
                className="add-to-cart"
                onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)}
              >
                Order now
              </button>      </div>
    </div>

    <div className="food-card">
      <img
        src="Images/Spicy.webp"
        alt="Food Item"
        className="food-image"
      />
      <div className="food-details">
 <div className="title-like">
              <h3 className="food-title">Beautiful Rice</h3>
              <FaRegHeart className="favourite" />
              </div>
      <p className="food-description">Beautiful White Rice & Stew</p>
      <div className="price-add">
      <p className="food-price">NGN 5000</p>
         <IoMdAdd className="add" />
         </div>
         <button
                className="add-to-cart"
                onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)}
              >
                Order now
              </button>      </div>
    </div>
    <div className="food-card">
      <img
        src="Images/Whitesemo.jpeg"
        alt="Food Item"
        className="food-image"
      />
      <div className="food-details">
      <div className="title-like">
              <h3 className="food-title">Rounded Spice</h3>
              <FaRegHeart className="favourite" />
              </div>
      <p className="food-description">Semo and egusi soup</p>
      <div className="price-add">
      <p className="food-price">NGN 5000</p>
         <IoMdAdd className="add" />
         </div>
         <button
                className="add-to-cart"
                onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)}
              >
                Order now
              </button>      </div>
    </div>

    <div className="food-card">
      <img
        src="Images/colorful.jpg"
        alt="Food Item"
        className="food-image"
      />
      <div className="food-details">
      <div className="title-like">
              <h3 className="food-title">Rounded Spice</h3>
              <FaRegHeart className="favourite" />
              </div>
      <p className="food-description">Chessy Jolof Rice</p>
      <div className="price-add">
      <p className="food-price">NGN 5000</p>
         <IoMdAdd className="add" />
         </div>
         <button
                className="add-to-cart"
                onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)}
              >
                Order now
              </button>
      </div>
    </div>
    </div>

    </>
  )
}

export default FoodCard