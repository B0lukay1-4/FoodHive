import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom';
import { IoMdRemove, IoMdAdd } from 'react-icons/io';
import generateInvoice from '../Components/generateInvoice';

function OrderPage() {
  const publicKey = 'pk_test_43283c8cb58ff4f54e3a6aa55cc2a838b926eb20';
  const [orderedItem, setOrderedItem] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [amount, setAmount] = useState('');
  const [count, setCount] = useState(0); // State for count
  const [isLike, setIsLike] = useState(false); // State for isLike

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: {
      username,
    
    },
    publicKey,
    text: 'Pay',
  onSuccess: (response) => {
  alert('Transaction Successful');

   console.log("Username:", username);
  console.log("Amount:", amount);
   


  const orderDetails = {
    id: response.reference,
    customerName: username, // <- replace with actual name if needed
    email: email,
    amount:parseFloat(amount), // convert kobo to naira
     title: orderedItem?.title || "N/A",
  };

  console.log("ORDER DETAILS:", orderDetails); // <-- Debug: Check if values exist
  generateInvoice(orderDetails);
},

    onClose: () => alert('Are you sure you want to close?'),
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

  // Handle incrementing count
  const handleAdd = () => {
    if (isLike) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
    setIsLike(true); // Update isLike to true when adding
  };

  // Handle decrementing count
  const handleRemove = () => {
    if (isLike && count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
    setIsLike(true); // Update isLike to true when removing
  };

  console.log('Count:', count); // Log count for debugging

  return (
    <>
      <div className="foodPageNav">
        <div className="navlogo">
          <Link to="/">
            <img src="Images/food-hive.png" alt="Food Hive Logo" />
          </Link>
        </div>
        <ul className='food-link orderfood'>
 <li>
      <Link to="/food">
        Food
      </Link>
      </li>
        </ul>
        
      </div>
      <div className="order-container">
        <div className="order-first-content">
          <h2>Your Order</h2>
          {orderedItem ? (
            <div className="ordered-item">
              <div className="image-count">
                 <img
                src={orderedItem.image}
                alt={orderedItem.title}
                className="ordered-item-image"
                
              />
              <span>X{count}</span>
              </div>
             
              <h3>{orderedItem.title}</h3>
              <p className="ordered-item-description">{orderedItem.description}</p>
              <p className="ordered-item-price">{orderedItem.price}</p>
              <div className="add-sub">
                <IoMdRemove className="sub" onClick={handleRemove} />
               
                <IoMdAdd className="addnew" onClick={handleAdd} />
              </div>
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
          <PaystackButton className="order-btn" {...componentProps} />
        </div>
      </div>
    </>
  );
}

export default OrderPage;