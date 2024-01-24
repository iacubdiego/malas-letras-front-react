import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 }
  ];

  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItemsFromStorage) {
      setCartItems(cartItemsFromStorage);
    }
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cartItems]);

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

  const checkout = () => {
    // Lógica para procesar la compra
    console.log('Checkout');
  };

  const resetCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem('cartItems');
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Online Store</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded p-4">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} - ${item.price}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
              onClick={checkout}
            >
              Checkout
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mt-4"
              onClick={resetCart}
            >
              Reset Cart
            </button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;