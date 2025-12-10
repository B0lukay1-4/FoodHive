// import React, { useEffect, useState } from 'react';
// import { PaystackButton } from 'react-paystack';
// import { Link } from 'react-router-dom';
// import { IoMdRemove, IoMdAdd } from 'react-icons/io';
// import generateInvoice from '../Components/generateInvoice';

// function OrderPage() {
//   const publicKey = 'pk_test_43283c8cb58ff4f54e3a6aa55cc2a838b926eb20';
//   const [orderedItem, setOrderedItem] = useState(null);
//   const [basePrice, setBasePrice] = useState(0); // ← clean numeric price
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [saveDetails, setSaveDetails] = useState(false);
//   const [amount, setAmount] = useState('');
//   const [count, setCount] = useState(1);

//   const componentProps = {
//     email,
//     amount: Number(amount) * 100,
//     metadata: { username },
//     publicKey,
//     text: 'Pay',
//     onSuccess: (response) => {
//       alert('Transaction Successful');
//       const orderDetails = {
//         id: response.reference,
//         customerName: username,
//         email,
//         amount: parseFloat(amount),
//         title: orderedItem?.title ? `X${count} ${orderedItem.title}` : "N/A",
//       };
//       generateInvoice(orderDetails);
//     },
//     onClose: () => alert('Are you sure you want to close?'),
//   };

// useEffect(() => {
//   try {
//     const item = JSON.parse(localStorage.getItem('orderedItem'));
//     if (item) {
//       setOrderedItem(item);

//       // ✅ Strip currency and commas
//       const rawPrice = item.price.toString().replace(/[^\d.]/g, '');
//       const numericPrice = parseFloat(rawPrice);
//       if (!isNaN(numericPrice)) {
//         setBasePrice(numericPrice);  // Save clean price
//         setAmount((numericPrice * count).toFixed(2)); // Initialize amount
//       }
//     }
//   } catch (error) {
//     console.error('Error parsing orderedItem:', error);
//     setOrderedItem(null);
//   }
// }, []);


//   useEffect(() => {
//     if (basePrice > 0) {
//       setAmount((basePrice * count).toFixed(2));
//     }
//   }, [count, basePrice]);

//   const handleAdd = () => {
//     setCount(prev => prev + 1);
//   };

//   const handleRemove = () => {
//     setCount(prev => (prev > 1 ? prev - 1 : 1));
//   };

//   return (
//     <>
//       <div className="foodPageNav">
//         <div className="navlogo">
//           <Link to="/"><img src="Images/food-hive.png" alt="Food Hive Logo" /></Link>
//         </div>
//         <ul className="food-link orderfood">
//           <li><Link to="/food">Food</Link></li>
//         </ul>
//       </div>

//       <div className="order-container">
//         <div className="order-first-content">
//           <h2>Your Order</h2>
//           {orderedItem ? (
//             <div className="ordered-item">
//               <div className="image-count">
//                 <img src={orderedItem.image} alt={orderedItem.title} className="ordered-item-image" />
//                 <span>X{count}</span>
//               </div>
//               <h3>{orderedItem.title}</h3>
//               <p className="ordered-item-description">{orderedItem.description}</p>
//               <p className="ordered-item-price">{orderedItem.price}</p>
//               <div className="add-sub">
//                 <IoMdRemove className="sub" onClick={handleRemove} />
//                 <IoMdAdd className="addnew" onClick={handleAdd} />
//               </div>
//             </div>
//           ) : (
//             <p>No item selected.</p>
//           )}
//         </div>

//         <div className="order-second-content">
//           <h2>Payment Details</h2>
//           <br />
//           <input
//             type="text"
//             className="input_field"
//             placeholder="   Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <br /><br />
//           <form action="">
//             <input
//             type="text"
//             className="input_field"
//             placeholder="   Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <br /><br />
//           <input
//             type="number"
//             className="input_field"
//             placeholder="Amount"
//             value={amount}
//             readOnly
//           />
//           <br />
//           <div className="check">
//             <input
//               type="checkbox"
//               className="box"
//               checked={saveDetails}
//               onChange={(e) => setSaveDetails(e.target.checked)}
//             />
//             <p>Save details for future booking</p>
//           </div>
//           <br />
//           <PaystackButton className="order-btn" {...componentProps} />
//           </form>
          
//         </div>
//       </div>
//     </>
//   );
// }
// export default OrderPage;

import React, { useEffect, useState, useRef } from 'react';
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom';
import { IoMdRemove, IoMdAdd } from 'react-icons/io';
import generateInvoice from '../Components/generateInvoice';

function OrderPage() {
  const publicKey = 'pk_test_43283c8cb58ff4f54e3a6aa55cc2a838b926eb20'; 
  const [orderedItem, setOrderedItem] = useState(null);
  const [basePrice, setBasePrice] = useState(0);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [amount, setAmount] = useState('');
  const [count, setCount] = useState(1);

  // Paystack Button Ref
  const paystackRef = useRef();

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: { username },
    publicKey,
    text: 'Pay',
    onSuccess: (response) => {
      alert('Transaction Successful');
      const orderDetails = {
        id: response.reference,
        customerName: username,
        email,
        amount: parseFloat(amount),
        title: orderedItem?.title ? `X${count} ${orderedItem.title}` : "N/A",
      };
      generateInvoice(orderDetails);
    },
    onClose: () => alert('Are you sure you want to close?'),
  };

  // Load item
  useEffect(() => {
    try {
      const item = JSON.parse(localStorage.getItem('orderedItem'));
      if (item) {
        setOrderedItem(item);
        const rawPrice = item.price.toString().replace(/[^\d.]/g, '');
        const numericPrice = parseFloat(rawPrice);
        if (!isNaN(numericPrice)) {
          setBasePrice(numericPrice);
          setAmount((numericPrice * count).toFixed(2));
        }
      }
    } catch (error) {
      console.error('Error parsing orderedItem:', error);
      setOrderedItem(null);
    }
  }, []);

  // Auto-update amount on count change
  useEffect(() => {
    if (basePrice > 0) {
      setAmount((basePrice * count).toFixed(2));
    }
  }, [count, basePrice]);

  // Quantity handlers
  const handleAdd = () => setCount(prev => prev + 1);
  const handleRemove = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  // FORM SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the form is invalid, let browser show required messages
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    // Trigger Paystack payment
    paystackRef.current?.click();
  };

  return (
    <>
      <div className="foodPageNav">
        <div className="navlogo">
          <Link to="/"><img src="Images/food-hive.png" alt="Food Hive Logo" /></Link>
        </div>
        <ul className="food-link orderfood">
          <li><Link to="/food">Food</Link></li>
        </ul>
      </div>

      <div className="order-container">
        <div className="order-first-content">
          <h2>Your Order</h2>
          {orderedItem ? (
            <div className="ordered-item">
              <div className="image-count">
                <img src={orderedItem.image} alt={orderedItem.title} className="ordered-item-image" />
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

          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="email"
              className="input_field"
              placeholder="   Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br /><br />

            <input
              type="text"
              className="input_field"
              placeholder="   Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <br /><br />

            <input
              type="number"
              className="input_field"
              placeholder="Amount"
              value={amount}
              readOnly
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
          </form>

        </div>
      </div>
    </>
  );
}

export default OrderPage;
