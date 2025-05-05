
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import FoodPageNav from './foodPageNav';
import Footer from './Footer';
import './index.css';

function FoodPage() {
  const navigate = useNavigate();
const counter =0;

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

  const foodItems = [
    { id: 1, image: 'Images/ofada-rice.jpg', title: 'Crockpot Delight', description: 'A hearty salad with fresh ingredients.', price: '$10.00' },
    { id: 2, image: 'Images/Nigerian-fried.jpg', title: 'Nigerian Fried Salad', description: 'Spicy and flavorful.', price: '$12.00' },
    { id: 3, image: 'Images/Greek-chicken.jpg', title: 'Greek Chicken Salad', description: 'Mediterranean flavors.', price: '$11.00' },
    { id: 4, image: 'Images/colorful.jpg', title: 'Colorful Veggie Mix', description: 'Vibrant and healthy.', price: '$9.00' },
    { id: 5, image: 'Images/efor-rice.jpg', title: 'Lovely Rice', description: 'Fresh and delightful.', price: '$8.00' },
    { id: 6, image: 'Images/ice.jpeg', title: 'Cool Salad', description: 'Chilled and refreshing.', price: '$7.00' },
    { id: 7, image: 'Images/glass.jpeg', title: 'Glass Bowl Salad', description: 'Elegant and tasty.', price: '$10.00' },
    { id: 8, image: 'Images/RedPepper.jpg', title: 'Sweet Salad', description: 'A unique dessert salad.', price: '$9.00' },
    { id: 9, image: 'Images/cake-stand.jpeg', title: 'Sweet Salad', description: 'A unique dessert salad.', price: '$9.00' },
    { id: 10, image: 'Images/semo.jpg', title: 'Brownie Salad', description: 'A sweet twist.', price: '$11.00' },
  ];

  return (
    <>
    <FoodPageNav/>
      <div className="foodheader-text">
        <h1>In a World Full of Plain Rice</h1>
      </div>
      <div className="foodheader">
        {foodItems.slice(0, 5).map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.title} className="food-image" />
            <div className="food-details">
              <div className="title-like">
                <h3 className="food-title">{item.title}</h3>
                <FaRegHeart className="favourite" />
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
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
        ))}
      </div>
      <div className="foodheader-text">
        <h1>The Flavor of Innovation</h1>
      </div>
      <div className="foodheader">
        {foodItems.slice(5, 10).map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.title} className="food-image" />
            <div className="food-details">
              <div className="title-like">
                <h3 className="food-title">{item.title}</h3>
                <FaRegHeart className="favourite" />
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
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
        ))}
      </div>
      <div className="foodheader-text">
        <h1>Explore More Flavors</h1>
      </div>
      <div className="foodheader">
        {foodItems.slice(0, 5).map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.title} className="food-image" />
            <div className="food-details">
              <div className="title-like">
                <h3 className="food-title">{item.title}</h3>
                <FaRegHeart className="favourite" />
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
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
        ))}
      </div>
      <Footer />
    </>
  );
}

export default FoodPage;