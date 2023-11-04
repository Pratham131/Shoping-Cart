// reducers/productsReducer.js
const initialState = {
    products: [], // Initialize with an empty array
  };
  
  const productsReducer = (state = initialState, action) => {
    // Handle actions here, e.g., fetching products from an API
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  