import { motion } from "framer-motion";

const NewsTicker = () => {
  return (
    <div
      style={{
        background: "#1E1E2F",
        color: "#FFD700",
        padding: "10px",
        overflow: "hidden",
        fontFamily: "Poppins",
        fontWeight: 600,
      }}
    >
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        style={{ whiteSpace: "nowrap" }}
      >
        🔥 BLACK FRIDAY SALE 🔥 | FLAT 70% OFF 🛍️ | FREE SHIPPING 🚚 | LIMITED TIME ⏳
        <sub style={{ marginLeft: 10, color: "#bbb" }}>
          *Offers valid while stocks last
        </sub>
      </motion.div>
    </div>
  );
};

export default NewsTicker;
