import { Card, CardContent, Typography, Button } from "@mui/material";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography>
          ₹{item.price} × {item.quantity}
        </Typography>

        <Button
          variant="outlined"
          color="error"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
