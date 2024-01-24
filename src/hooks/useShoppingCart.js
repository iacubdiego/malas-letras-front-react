import { useState } from 'react';

const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};

export default useShoppingCart;