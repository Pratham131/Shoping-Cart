// actions/index.js
export const fetchProducts = (products) => ({
    type: 'FETCH_PRODUCTS',
    payload: products,
  });
  
  export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  