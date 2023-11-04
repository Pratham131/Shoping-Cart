// reducers/cartReducer.js
const initialState = {
    cart: [], // Initialize with an empty array
  };
  
  const cartReducer = (state = initialState, action) => {
    // Handle actions here, e.g., adding/removing items from the cart
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      // Add more actions as needed
      default:
        return state;
    }
  };
  
  export default cartReducer;
  