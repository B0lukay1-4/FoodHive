
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart,FaHeart  } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import FoodPageNav from '../Components/foodPageNav';
import Footer from '../Components/Footer';
import '../index.css';

function FoodPage() {
  const navigate = useNavigate();

 const handleOrderNow = (image, title, price, description) => {
  console.log('handleOrderNow called with:', { image, title, price, description });

 
  const numericPrice = price.replace(/[^\d.]/g, ''); 

  const item = { image, title, price: numericPrice, description };

  try {
    localStorage.setItem('orderedItem', JSON.stringify(item));
    console.log('Item stored in localStorage:', localStorage.getItem('orderedItem'));
    navigate('/order');
    console.log('Navigating to /orderpage');
  } catch (error) {
    console.error('Error in handleOrderNow:', error);
  }
};


const [favorites, setFavorites] = React.useState({});
const toggleFavorite = (id) => {
  setFavorites((prev) => ({
    ...prev,
    [id]: !prev[id], // toggle true/false
  }));

    return [
      ...prev,
      {
        id: item.id,
        image: item.image,
        title: item.title,
        price: Number(item.price.replace(/[^\d]/g, '')), // ✅ NUMBER
        quantity: 1,
      },
    ];
  };

  setNotification(`${item.title} added to cart`);
  setTimeout(() => setNotification(''), 2000);
};


  const foodItems = [
    { id: 1, image: 'Images/ofada-rice.jpg', title: 'Crockpot Delight', description: 'A hearty salad with fresh ingredients.', price: 'NGN 5000' },
    { id: 2, image: 'Images/Nigerian-fried.jpg', title: 'Nigerian Fried Salad', description: 'Spicy and flavorful.', price: 'NGN 7000' },
    { id: 3, image: 'Images/Greek-chicken.jpg', title: 'Greek Chicken Salad', description: 'Mediterranean flavors.', price: 'NGN 5000' },
    { id: 4, image: 'Images/colorful.jpg', title: 'Colorful Veggie Mix', description: 'Vibrant and healthy.', price: 'NGN 5000' },
    { id: 5, image: 'Images/efor-rice.jpg', title: 'Lovely Rice', description: 'Fresh and delightful.', price: 'NGN 5000' },
    { id: 6, image: 'Images/plaintain.png', title: 'Beautiful Plantain', description: 'Chilled and refreshing.', price: 'NGN 4000' },
    { id: 7, image: 'Images/Grilled fish.jpg', title: 'Colorful grilled Fish', description: 'Elegant and tasty.', price: 'NGN 2500' },
    { id: 8, image: 'Images/moi-moi-rollup.jpg', title: 'Spicy Moi Moi', description: 'A unique dessert salad.', price: 'NGN 4000' },
    { id: 9, image: 'Images/seafood.jpg', title: 'Crunchy Seafoods', description: 'A unique dessert salad.', price: 'NGN 7000' },
    { id: 10, image: 'Images/semo.jpg', title: 'Brownie Salad', description: 'A sweet twist.', price: 'NGN 5000' },
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
                  <div onClick={() => toggleFavorite(item.id)}>
                      {favorites[item.id] ? (
                        <FaHeart className="favourite" style={{ color: "red" }} />
                      ) : (
                        <FaRegHeart className="favourite" />
                      )}
                  </div>
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
             
                <IoMdAdd className="add" onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)} />
                
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
                    <div onClick={() => toggleFavorite(item.id)}>
                      {favorites[item.id] ? (
                      <FaHeart className="favourite" style={{ color: "red" }} />
                      ) : (
                      <FaRegHeart className="favourite" />
                      )}
                    </div>
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
               <IoMdAdd className="add" onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)} />
               
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
                    <div onClick={() => toggleFavorite(item.id)}>
      {favorites[item.id] ? (
        <FaHeart className="favourite" style={{ color: "red" }} />
      ) : (
        <FaRegHeart className="favourite" />
      )}
    </div>
              </div>
              <p className="food-description">{item.description}</p>
              <div className="price-add">
                <p className="food-price">{item.price}</p>
              <IoMdAdd className="add" onClick={() => handleOrderNow(item.image, item.title, item.price, item.description)} />
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


export default FoodPage;