import { useState } from "react";
import CartItem from "../components/CartItem";
import CouponBox from "../components/CouponBox";

const Cart = ({ cartItems, removeFromCart }) => {
  const [coupon, setCoupon] = useState(0);

  const total = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const final = total - (total * coupon) / 100;

  return (
    <div
      style={{
        padding: 30,
        background: "#F4F6FB",
        minHeight: "100vh",
        fontFamily: "Poppins",
      }}
    >
      <h2>Your Cart 🛒</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}

      <CouponBox applyCoupon={setCoupon} />

      <div
        style={{
          marginTop: 30,
          padding: 20,
          background: "#fff",
          borderRadius: 12,
        }}
      >
        <h3>Total: ₹{total}</h3>
        <h2 style={{ color: "#2ECC71" }}>
          Payable: ₹{final}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
