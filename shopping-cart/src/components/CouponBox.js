import { useState } from "react";
import { TextField, Button } from "@mui/material";

const coupons = {
  BLACK50: 50,
  SAVE20: 20,
  GLOBAL10: 10,
};

const CouponBox = ({ applyCoupon }) => {
  const [code, setCode] = useState("");

  return (
    <div
      style={{
        marginTop: 20,
        padding: 20,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h3>🎟️ Apply Coupon</h3>

      <TextField
        fullWidth
        placeholder="Enter coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
      />

      <Button
        fullWidth
        sx={{
          mt: 2,
          background:
            "linear-gradient(90deg, #6C63FF, #8E85FF)",
          color: "#fff",
          fontWeight: 600,
        }}
        onClick={() =>
          coupons[code]
            ? applyCoupon(coupons[code])
            : alert("Invalid Coupon ❌")
        }
      >
        Apply Coupon
      </Button>

      <p style={{ fontSize: 12, marginTop: 10, color: "#666" }}>
        Available: BLACK50, SAVE20, GLOBAL10
      </p>
    </div>
  );
};

export default CouponBox;
