// pages/Cart/CartPage.jsx

import React, { useState, useEffect } from 'react';
import Cart from './Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Function to fetch cart products from the backend
    const fetchCartItems = async () => {
      try {
        // Make API call to get cart products
        const response = await fetch('BACKEND_CART_API_URL'); // api do backente, nao esquecer!
        if (response.ok) {
          const data = await response.json();
          // Update cart state with retrieved products
          setCartItems(data.cartItems);
        } else {
          throw new Error('Error fetching cart products');
        }
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    // Call the function to fetch cart products when the component mounts
    fetchCartItems();
  }, []); // Empty dependency array ensures the effect runs only once, when the component mounts

  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;
