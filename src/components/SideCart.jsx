import { useState, useEffect } from 'react';
import useCartItems from '../hooks/useCartItems';

export default function SideCart (){

    const { cartItems, removeFromCart, resetCart } = useCartItems([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
           const calculateTotal = () => {
           const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
           setTotal(totalPrice);
         };
      
         calculateTotal();
       }, [cartItems]);
      

    return (
        <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Carrito de libros</h2>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <div className='flex items-center p-2'>
                  <img src={item.image} alt="" className='w-16 h-16'/>
                  <span className='m-2'>
                  - {item.title} - {item.autore}
                  </span>
                  </div>
                  <div className='flex flex-col p-2'>
                  <span>
                  ${item.price}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item)}
                  >
                    Quitar
                  </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-4">Total: ${total}</p>
            <div className='p-1 m-1'>
            <button
              className="hover:bg-green-600 text-white py-2 px-4 rounded mt-4 mr-2" style={{ backgroundColor: '#26cfb1' }}
              // onClick={checkout}
            >
              Agregar más
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mt-4 mr-2"
              style={{ backgroundColor: '#cf2626' }}
              onClick={resetCart}
            >
              Quitar todos
            </button>
          </div>
        </div>
        ) : (
          <p>No tienes libros en tu carrito.</p>
        )}
      </div>
    )
  }