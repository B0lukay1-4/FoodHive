
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import CartIcon from "../Components/CartIcon";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import CartSidebar from "../Pages/CartSidebar";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "../config";
import "../index.css";

// =====================
// SUPABASE CLIENT
// =====================
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Unique session ID per browser tab — survives refresh, gone on tab close
const SESSION_ID = (() => {
  let id = sessionStorage.getItem("session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("session_id", id);
  }
  return id;
})();

export { SESSION_ID };

function FoodPage() {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [favorites, setFavorites] = useState({});
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Load cart from Supabase on mount
  useEffect(() => {
    const loadCart = async () => {
      const { data, error } = await supabase
        .from("cart")
        .select("item")
        .eq("session_id", SESSION_ID);

      if (!error && data.length > 0) {
        setCartItems(data.map((row) => row.item));
      }
      setLoading(false);
    };
    loadCart();
  }, []);

  // Sync cart to Supabase whenever it changes
  useEffect(() => {
    if (loading) return;

    const syncCart = async () => {
      await supabase.from("cart").delete().eq("session_id", SESSION_ID);
      if (cartItems.length > 0) {
        await supabase.from("cart").insert(
          cartItems.map((item) => ({ session_id: SESSION_ID, item }))
        );
      }
    };

    syncCart();
  }, [cartItems, loading]);

  const toggleFavorite = (id) =>
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleOrderNow = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        { ...item, price: Number(item.price.replace(/[^\d]/g, "")), quantity: 1 },
      ];
    });

    setNotification(`${item.title} added to cart`);
    setTimeout(() => setNotification(""), 2000);
  };

  const handleCheckoutSuccess = async () => {
    console.log("✅ handleCheckoutSuccess fired");
    console.log("SESSION_ID:", SESSION_ID);

    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("session_id", SESSION_ID);

    if (error) {
      console.error("❌ Supabase delete error:", error);
    } else {
      console.log("✅ Supabase cart deleted successfully");
    }

    setCartItems([]);
    setUsername("");
    setEmail("");
    setPhone("");
    setCheckoutMessage("🎉 Payment successful! Your invoice has been downloaded.");
    setIsCartOpen(false);
  };

  const menuCategories = [
    {
      category: "Rice Dishes",
      items: [
        { id: 1, image: "Images/ofada-rice.jpg", title: "Ofada Rice", description: "Fresh salad.", price: "NGN 5000" },
        { id: 2, image: "Images/Nigerian-fried.jpg", title: "OG Fried Rice", description: "Spicy.", price: "NGN 7000" },
        { id: 3, image: "Images/nigerian-jollof2.webp", title: "Tasty Jollof Dodo", description: "Mediterranean.", price: "NGN 5000" },
        { id: 4, image: "Images/colorful.jpg", title: "Colorful Veggie Mix", description: "Healthy.", price: "NGN 5000" },
        
      ],
    },
    {
      category: "Swallow & Specials",
      items: [
        { id: 5, image: "Images/betterpasta.png", title: "Pasta", description: "Delightful.", price: "NGN 5000" },
        { id: 6, image: "Images/semo.jpg", title: "Semo and vegetables", description: "Classic.", price: "NGN 5000" },
        { id: 7, image: "Images/moi-moi-rollup.jpg", title: "Spicy Moi Moi", description: "Tasty.", price: "NGN 4000" },
        { id: 8, image: "Images/plaintain.png", title: "Plantain Delight", description: "Sweet.", price: "NGN 4000" },
      ],
    },
    {
      category: "Drinks",
      items: [
         { id: 7, image: "Images/iced-cocktails.jpg", title: "Chilled Cocktail", description: "Tasty.", price: "NGN 4000" },
        { id: 8, image: "Images/fruit-mixdrinks.jpg", title: "Fruit Drinks", description: "Sweet.", price: "NGN 4000" },
        { id: 9, image: "Images/cold-cocktails.jpg", title: "Chilled Cocktail", description: "Elegant.", price: "NGN 2500" },
        { id: 10, image: "Images/iced-cocktails.jpg", title: "Breath taking Drink", description: "Fresh.", price: "NGN 7000" },
      ],
    },
  ];

  return (
    <>
      <header>
        <Nav />
        <div className="food-header">
          <CartIcon cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        </div>

        {notification && <div className="cart-notification">{notification}</div>}

        {checkoutMessage && (
          <div className="checkout-success">
            <p>{checkoutMessage}</p>
            <button onClick={() => setCheckoutMessage("")} className="checkout-continue-btn">Continue Shopping</button>
          </div>
        )}
      </header>

      <main>
        <div className="menu_display">
          {menuCategories.filter(section => section.items.length > 0).map((section) => (
            <div key={section.category} className="menu_section">
              <h2 className="category_heading">{section.category}</h2>
              <div className="food_display">
                {section.items.map((item) => (
                  <div key={item.id} className="food-card">
                    <div className="food-img-box">
                      <img src={item.image} alt={item.title} />
                      <div className="heart-icon" onClick={() => toggleFavorite(item.id)}>
                        {favorites[item.id] ? <FaHeart /> : <FaRegHeart />}
                      </div>
                    </div>

                    <div className="food-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="bottom-row">
                        <span className="price">₦{item.price.replace(/[^\d]/g, "")}</span>
                        <button className="order-btn" onClick={() => handleOrderNow(item)}>
                          ORDER NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CartSidebar
          isOpen={isCartOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckoutSuccess={handleCheckoutSuccess}
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          phone={phone}
          setPhone={setPhone}
        />
      </main>

      <Footer />
    </>
  );
}

export default FoodPage;
