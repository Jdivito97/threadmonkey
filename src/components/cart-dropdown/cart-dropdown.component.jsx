import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import {
  CartDropDownConatiner,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.jsx';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropDownConatiner>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropDownConatiner>
  );
};
export default CartDropdown;
