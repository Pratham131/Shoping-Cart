// Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from './actions';

function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // Fetch products from the API (you'll need to use an HTTP library like axios)
  useEffect(() => {
    // Fetch products here and then dispatch them to Redux
    dispatch(fetchProducts(fetchedProducts));
  }, []);

  const handleAddToCart = (product) => {
    // Dispatch action to add the product to the cart
    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* Display products and add to cart buttons */}
    </div>
  );
}

export default Home;
