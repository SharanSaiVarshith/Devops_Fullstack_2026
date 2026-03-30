import { AppBar, Toolbar, Typography, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #6C63FF, #8E85FF)",
        fontFamily: "Poppins",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
        >
          ShopGlobal 🌍
        </Typography>

        <Button
          component={Link}
          to="/"
          sx={{ color: "#fff", mx: 1, fontWeight: 500 }}
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/cart"
          sx={{ color: "#fff", mx: 1 }}
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Button>

        <LocalOfferIcon sx={{ ml: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
