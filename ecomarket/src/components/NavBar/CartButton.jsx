import { IconButton, Badge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const CartButton = () => (
  <IconButton color="inherit">
    <Badge badgeContent={2} color="secondary">
      <ShoppingCart />
    </Badge>
  </IconButton>
);

export default CartButton;