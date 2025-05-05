import React, { useEffect, useState } from 'react';
import {PaystackButton} from "react-paystack";
import FoodPageNav from './foodPageNav';
import { Link } from 'react-router-dom';
function OrderPage() {
  const publicKey="pk_test_43283c8cb58ff4f54e3a6aa55cc2a838b926eb20";
  const [orderedItem, setOrderedItem] = useState(null);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
 const [ amount, setAmount] =useState("")
 


 const componentProps = {
   email,
   amount: Number(amount) * 100,
   metadata: {
     username
   },
   publicKey,
   text: "Pay",
   onSuccess: () => {
     alert("Transaction Successful");
   },
   onClose: () => alert("Are you sure you want to close?")
 };
 

  useEffect(() => {
    try {
      const item = JSON.parse(localStorage.getItem('orderedItem'));
      setOrderedItem(item);
    } catch (error) {
      console.error('Error parsing orderedItem:', error);
      setOrderedItem(null);
    }
  }, []);

  return (
    <>
    <div className="foodPageNav">
        <div className="navlogo">
          <Link to="/">
            <img src="Images/food-hive.png" alt="Food Hive Logo" />
          </Link>
        </div>
</div>
      <div className="order-container">
     
        <div className="order-first-content">
          <h2>Your Order</h2>
          {orderedItem ? (
            <div className="ordered-item">
              <img
                src={orderedItem.image}
                alt={orderedItem.title}
                className="ordered-item-image"
              />
              <h3>{orderedItem.title}</h3>
              <p className="ordered-item-description">{orderedItem.description}</p>
              <p className="ordered-item-price">{orderedItem.price}</p>
            </div>
          ) : (
            <p>No item selected.</p>
          )}
        </div>

        <div className="order-second-content">
          <h2>Payment Details</h2>
          <br />
          <input
            type="text"
            className="input_field"
            placeholder="   Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <input
            type="text"
            className="input_field"
            placeholder="   Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="number"
            className="input_field"
            placeholder="   Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              className="box"
              checked={saveDetails}
              onChange={(e) => setSaveDetails(e.target.checked)}
            />
            <p>Save details for future booking</p>
          </div>
          <br />
          <PaystackButton
  className="order-btn"
  {...componentProps}
/>

        </div>
      </div>
    </>
  );
}

export default OrderPage;