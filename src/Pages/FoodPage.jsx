import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import CartIcon from '../Components/CartIcon';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import CartSidebar from '../Pages/CartSidebar';
import '../index.css';

function FoodPage() {

  /* ================= CART STATE ================= */
  // SAVE TO LOCAL STORAGE
const [cartItems, setCartItems] = React.useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [notification, setNotification] = React.useState('');

  /* ================= FAVORITES ================= */
  const [favorites, setFavorites] = React.useState({});
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ================= ADD TO CART (RESTORED) ================= */
  const handleOrderNow = (item) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id);

      if (existing) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [
        ...prev,
        {
          ...item,
          price: Number(item.price.replace(/[^\d]/g, '')),
          quantity: 1,
        },
      ];
    });

    setNotification(`${item.title} added to cart`);
    setTimeout(() => setNotification(''), 2000);
  };
// SAVE CART WHEN IT CHANGES
React.useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

  /* ================= FOOD DATA ================= */
  const foodItems = [
    { id: 1, image: 'Images/ofada-rice.jpg', title: 'Crockpot Delight', description: 'A hearty salad with fresh ingredients.', price: 'NGN 5000' },
    { id: 2, image: 'Images/Nigerian-fried.jpg', title: 'Nigerian Fried Salad', description: 'Spicy and flavorful.', price: 'NGN 7000' },
    { id: 3, image: 'Images/wholechicken.jpg', title: 'Tasty Chicken potato', description: 'Mediterranean flavors.', price: 'NGN 5000' },
    { id: 4, image: 'Images/colorful.jpg', title: 'Colorful Veggie Mix', description: 'Vibrant and healthy.', price: 'NGN 5000' },
    { id: 5, image: 'Images/efor-rice.jpg', title: 'Lovely Rice', description: 'Fresh and delightful.', price: 'NGN 5000' },
    { id: 6, image: 'Images/plaintain.png', title: 'Beautiful Plantain', description: 'Chilled and refreshing.', price: 'NGN 4000' },
    { id: 7, image: 'Images/Grilled fish.jpg', title: 'Colorful grilled Fish', description: 'Elegant and tasty.', price: 'NGN 2500' },
    { id: 8, image: 'Images/moi-moi-rollup.jpg', title: 'Spicy Moi Moi', description: 'A unique dessert salad.', price: 'NGN 4000' },
    { id: 9, image: 'Images/seafood.jpg', title: 'Crunchy Seafoods', description: 'A unique dessert salad.', price: 'NGN 7000' },
    { id: 10, image: 'Images/semo.jpg', title: 'Semo and vegetables', description: 'A sweet twist.', price: 'NGN 5000' },
  ];

  return (
    <>
    <Nav/>
      {/* ✅ NAV RESTORED */}
<div className="food-header">
  <CartIcon
    cartCount={cartItems.length}
    onCartClick={() => setIsCartOpen(true)}
  />
</div>


      {/* ===== NOTIFICATION ===== */}
      {notification && (
        <div className="cart-notification">
          {notification}
        </div>
      )}

      {/* ===== SECTION 1 ===== */}
      <div className="foodheader-text">
        <h1>In a World Full of Plain Rice</h1>
      </div>

      <div className="food_display">
        {foodItems.slice(0, 4).map(item => (
          <div key={item.id} className="food-card">
           <div key={item.id} className="food-card">

  {/* IMAGE AREA */}
  <div className="food-img-box">
    <img src={item.image} alt={item.title} />

    {/* RATING BADGE */}
    <div className="rating-badge">⭐ 4.{item.id}</div>

    {/* HEART ICON */}
    <div
      className="heart-icon"
      onClick={() => toggleFavorite(item.id)}
    >
      {favorites[item.id]
        ? <FaHeart />
        : <FaRegHeart />}
    </div>
  </div>

  {/* CONTENT */}
  <div className="food-content">
    <h3>{item.title}</h3>
    <p>{item.description}</p>

    <div className="bottom-row">
      <span className="price">₦{item.price.replace(/[^\d]/g, '')}</span>

      <button
        className="order-btn"
        onClick={() => handleOrderNow(item)}
      >
        ORDER NOW
      </button>
    </div>
  </div>

</div>


          </div>
        ))}
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="foodheader-text">
        <h1>The Flavor of Innovation</h1>
      </div>

      <div className="food_display">
        {foodItems.slice(5, 10).map(item => (
          <div key={item.id} className="food-card">

  {/* IMAGE AREA */}
  <div className="food-img-box">
    <img src={item.image} alt={item.title} />

    {/* RATING BADGE */}
    <div className="rating-badge">⭐ 4.{item.id}</div>

    {/* HEART ICON */}
    <div
      className="heart-icon"
      onClick={() => toggleFavorite(item.id)}
    >
      {favorites[item.id]
        ? <FaHeart />
        : <FaRegHeart />}
    </div>
  </div>

  {/* CONTENT */}
  <div className="food-content">
    <h3>{item.title}</h3>
    <p>{item.description}</p>

    <div className="bottom-row">
      <span className="price">₦{item.price.replace(/[^\d]/g, '')}</span>

      <button
        className="order-btn"
        onClick={() => handleOrderNow(item)}
      >
        ORDER NOW
      </button>
    </div>
  </div>

</div>

        ))}
      </div>

      {/* ✅ CART SIDEBAR FULLY RESTORED */}
      <CartSidebar
  isOpen={isCartOpen}
  cartItems={cartItems}
  setCartItems={setCartItems}
  onClose={() => setIsCartOpen(false)}
/>


      <Footer />
    </>
  );
}

export default FoodPage;
