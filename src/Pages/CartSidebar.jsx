import React from "react";
import { GoTrash } from "react-icons/go";
import { PaystackButton } from "react-paystack";
import { generateInvoice } from "../Components/generateInvoice";
import { supabase, SESSION_ID } from "../Pages/FoodPage";
import { PAYSTACK_KEY } from "../config";

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems = [],
  setCartItems,
  onCheckoutSuccess,
  email, setEmail,
  username, setUsername,
  phone, setPhone,
}) => {
  // =====================
  // Cart Controls
  // =====================
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // =====================
  // Validation
  // =====================
  const isValidName = (name) => /^[A-Za-z\s]{2,}$/.test(name.trim());
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) =>
    /^0\d{10}$/.test(phone) && !/^0{11}$/.test(phone);

  // =====================
  // Total
  // =====================
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // =====================
  // Validate before Paystack opens
  // =====================
  const handleBeforePaystack = (e) => {
    if (!username || !email || !phone) {
      e.preventDefault();
      alert("Please fill in all fields");
      return false;
    }
    if (!isValidName(username)) {
      e.preventDefault();
      alert("Invalid name");
      return false;
    }
    if (!isValidEmail(email)) {
      e.preventDefault();
      alert("Invalid email");
      return false;
    }
    if (!isValidPhone(phone)) {
      e.preventDefault();
      alert("Invalid phone number. Use format: 08012345678");
      return false;
    }
    if (subtotal <= 0) {
      e.preventDefault();
      alert("Your cart is empty");
      return false;
    }
  };

  // =====================
  // Payment SUCCESS — fires reliably with PaystackButton
  // =====================
  const handlePaystackSuccess = async (response) => {
    console.log("✅ Payment SUCCESS:", response);

    // Snapshot current cart for invoice
    const itemsSnapshot = [...cartItems];
    const totalSnapshot = subtotal;

    // 1. Generate invoice
    try {
      generateInvoice({
        customerName: username,
        email,
        phone,
        items: itemsSnapshot,
        total: totalSnapshot,
        reference: response.reference,
      });
    } catch (err) {
      console.error("Invoice error:", err);
    }

    // 2. Delete from Supabase
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("session_id", SESSION_ID);

    if (error) {
      console.error("❌ Supabase delete error:", error);
    } else {
      console.log("✅ Cart deleted from Supabase");
    }

    // 3. Clear React state
    setCartItems([]);
    setUsername("");
    setEmail("");
    setPhone("");

    // 4. Show success message and close
    onCheckoutSuccess();
    onClose();
  };

  // =====================
  // Payment CLOSED without paying
  // =====================
  const handlePaystackClose = () => {
    console.log("Payment closed without completing");
  };

  // =====================
  // Paystack Button Config
  // =====================
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: email || "",
    amount: subtotal * 100,
    publicKey: PAYSTACK_KEY,
    text: `Checkout • ₦${subtotal.toLocaleString()}`,
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
    metadata: {
      custom_fields: [
        { display_name: "Customer Name", variable_name: "username", value: username },
        { display_name: "Phone", variable_name: "phone", value: phone },
      ],
    },
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="cart-overlay" onClick={onClose}></div>

      <aside>
        <section className="cart-sidebar">
          <div className="cart-inner">
            <button className="close-cart" onClick={onClose}>×</button>

            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty 🛒</p>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
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
                          >
                            <GoTrash />
                          </button>
                        </div>
                      </div>

                      <div className="item-total">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input_field"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      placeholder="Phone (08012345678)"
                      className="input_field"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      maxLength={11}
                      required
                    />
                  </form>

                  {/* Validation wrapper — checks fields before Paystack opens */}
                  <div onClick={handleBeforePaystack}>
                    <PaystackButton
                      {...paystackConfig}
                      className="checkout-btn"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </aside>
    </div>
  );
};

export default CartSidebar;
