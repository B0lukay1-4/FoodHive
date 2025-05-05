import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
function FoodCard() {
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
      <p className="food-price">$10.00</p>
      <button className="add-to-cart">Order now</button>
      </div>
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
      <p className="food-price">$10.00</p>
      <button className="add-to-cart">Order now</button>
      </div>
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
      <p className="food-price">$10.00</p>
      <button className="add-to-cart">Order now</button>
      </div>
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
      <p className="food-price">$10.00</p>
      <button className="add-to-cart">Order now</button>
      </div>
    </div>
    </div>

    </>
  )
}

export default FoodCard