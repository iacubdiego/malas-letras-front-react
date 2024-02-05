import { useState, useEffect } from 'react';

const useCartItems = (initialCartItems) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItemsFromStorage) {
      setCartItems(cartItemsFromStorage);
    }
  }, []);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};

export default useCartItems;
