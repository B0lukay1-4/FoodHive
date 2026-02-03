import { BsCart4 } from "react-icons/bs";

function CartIcon({ cartCount, onCartClick }) {
  return (
    <div className="cart-wrapper" onClick={onCartClick}>
      <BsCart4 className="cart-icon" />

      {cartCount > 0 && (
        <span className="cart-badge-corner">
          {cartCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
