// MyCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './actions';

function MyCart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    // Dispatch action to remove the item from the cart
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      {/* Display cart items and remove buttons */}
    </div>
  );
}

export default MyCart;
