import React from 'react';
import { GoTrash } from "react-icons/go";
import { usePaystackPayment } from 'react-paystack';
import { useRef,useState } from 'react';
import generateInvoice from '../Components/generateInvoice';
const CartSidebar = ({
  isOpen,
  onClose,
  cartItems = [],
  setCartItems
}) => {
  if (!isOpen) return null;

  const increaseQty = (id) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1)
          }
        : item
    )
  );
};

const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};

const isValidName = (name) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  return nameRegex.test(name.trim());
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^0\d{10}$/;

  // reject fake numbers like 00000000000
  if (!phoneRegex.test(phone)) return false;

  if (/^0{11}$/.test(phone)) return false;

  return true;
};

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
// Paystack
const paystackRef = useRef();

const publicKey = 'pk_test_43283c8cb58ff4f54e3a6aa55cc2a838b926eb20';
const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');



const config = {
  email,
  amount: subtotal * 100, // kobo
  publicKey,
  metadata: {
    username,
    phone,
    cartItems,
  },
};

const initializePayment = usePaystackPayment(config);
// checkoutHandle
const handleCheckout = () => {
  if (!username || !email || !phone) {
    alert('Please fill in all fields');
    return;
  }

  if (!isValidName(username)) {
    alert('Please enter a valid name (letters only)');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Please enter a valid Nigerian phone number');
    return;
  }

  if (subtotal <= 0) {
    alert('Your cart is empty');
    return;
  }

  initializePayment(
    (response) => {
      alert('Payment successful 🎉');

      generateInvoice({
        reference: response.reference,
        username,
        email,
        phone,
        cartItems,
        subtotal,
      });
    },
    () => {
      alert('Payment cancelled');
    }
  );
};

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-sidebar">
        <button className="close-cart" onClick={onClose}>×</button>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>₦{item.price.toLocaleString()}</p>

                    <div className="qty-controls">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                      <button
                          className="remove-item"
                          onClick={() => removeFromCart(item.id)}
                          title="Remove item"
                        >
                          <GoTrash />
                      </button>
                    </div>
                  </div>

                  <div className="item-total">
                    <span>Item total:</span>
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal: </span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>

              <form action="">
                <input
                  type="text"
                  placeholder="Username"
                  className="input_field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  pattern="[A-Za-z\s]+"
                  title="Only letters allowed"
                  required
                />


                <input
                  type="email"
                  placeholder="Email"
                  className="input_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />


              <input
                type="tel"
                placeholder="Phone Number (e.g. 08012345678)"
                className="input_field"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength={11}
                required
              />

              </form>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout • ₦{subtotal.toLocaleString()}
              </button>
            </div>
            

              

            <div className="checkout-form">
          
</div>
          </>
        )}
        
      </div>
    </>
  );
};

export default CartSidebar;
