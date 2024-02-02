import React, { useState } from "react";
import Search from "./Seacrh";
import products from "./ProductList";

import useCartItems from "../hooks/useCartItems";

const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAutore, setSelectedAutore] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, cartItems } = useCartItems([]);
  const [showPopup, setShowPopup] = useState(false);


  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };
  const handleAutoreFilter = (autore) => {
    setSelectedAutore(autore);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedAutore === "" || product.autore === selectedAutore) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  
    // Utilizar el estado actualizado directamente
    const updatedCartItems = JSON.stringify([...cartItems, product]);
    localStorage.setItem("cartItems", updatedCartItems);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    // Aquí podrías mostrar un mensaje, animación, etc., indicando que el producto se agregó al carrito.
  };

  return (
    <div className="container p-2 mx-auto">
      <div className="p-2 flex flex-wrap justify-content items-center mb-2">
        <Search
          placeholder="Buscar producto"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          onChange={(e) => handleCategoryFilter(e.target.value)}
          value={selectedCategory}
          className="inline-flex mt-3 mx-auto m-2 p-2 h-10 items-center justify-start gap-2 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white"
          style={{ backgroundColor: "#b12683" }}
        >
          <option value="">Categoria</option>
          <option value="Adultes">Adultes</option>
          <option value="Niñeces">Niñeces</option>
          <option value="Novelas">Novelas</option>
          <option value="Poesia">Poesia</option>
        </select>
        <select
          onChange={(e) => handleAutoreFilter(e.target.value)}
          value={selectedAutore}
          className="inline-flex mx-auto mt-3 m-2 p-2 h-10 items-center justify-start gap-2 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          style={{ backgroundColor: "#b12683" }} // className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Autoras</option>
          <option value="Marlene Wayar">Marlene Wayar</option>
          <option value="Cinwololo">Cinwololo</option>
          <option value="Camila Sosa Villada">Camila Sosa Villada</option>
          <option value="Nina Ferrari">Nina Ferrari</option>
        </select>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      <div class="container px-2 py-4 mx-auto">
        <div class="flex flex-wrap gap-6 justify-center p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between p-2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[150px] sm:w-[200px]"
            >
              <figure className="relative w-full h-0 pb-[100%]">
                <div className="absolute object-cover inset-0 p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full shadow-md shadow-slate-200"
                  />
                </div>
              </figure>
              <header className="p-1 flex flex-col justify-between">
                <h3 className="text-xl font-medium text-slate-700">
                  {product.title}
                </h3>
                <p>{product.autore}</p>
              </header>
              <div className="flex p-1 hidden md:block items-center justify-around">
                <p className="text-xl p-1 font-medium text-slate-400">
                  {product.price}
                </p>
                <button className="inline-flex p-1 h-8 items-center gap-1 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                onClick={() => handleAddToCart(product)}>

                  <span>Comprar</span>
                </button>
              </div>
            </div>
          ))}
                 </div>

          {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md">
              <p>Agregaste al carrito correctamente</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galery;
