import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/300",
  },
];

const Home = ({ addToCart }) => {
  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        gap: 30,
        justifyContent: "center",
        background: "#F4F6FB",
        fontFamily: "Poppins",
      }}
    >
      {products.map((p) => (
        <Card
          key={p.id}
          sx={{
            width: 300,
            borderRadius: 4,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          <CardMedia component="img" height="220" image={p.image} />
          <CardContent>
            <Typography variant="h6" fontWeight={600}>
              {p.name}
            </Typography>
            <Typography color="text.secondary">₹{p.price}</Typography>

            <Button
              fullWidth
              sx={{
                mt: 2,
                background:
                  "linear-gradient(90deg, #FF6F00, #FF8F00)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 3,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #FF8F00, #FF6F00)",
                },
              }}
              onClick={() => addToCart(p)}
            >
              Add to Cart 🛒
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
