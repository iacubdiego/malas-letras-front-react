import React from 'react'
// import products from './ProductList';
import useCartItems from '../hooks/useCartItems';

export default function SideCart (){

    const { cartItems, removeFromCart, resetCart } = useCartItems([]);
  
    return (
        <div className="bg-gray-200 p-4">
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
            {/* <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p> */}
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
              // onClick={checkout}
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
    )
  }