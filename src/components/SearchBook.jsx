import React, { useState } from 'react';

import Search from './Seacrh';

import furia_travesti from "../images/libros/furia_travesti.png";
import estrellada from "../images/libros/estrellada.jpg";
import las_malas from "../images/libros/las_malas.png";
import nosotras from "../images/libros/nosotras.jpg";
import portada_los_dias_se_volvieron from "../images/libros/portada_los_dias_se_volvieron.jpg";
import soy from "../images/libros/soy.png";


const products = [
  {
    id: 1,
    image: furia_travesti,
    title: 'Furia Travesti',
    autore: 'Marlene Wayar',
    price: '$ 5.000',
    category: 'Adultes'
  },
  {
    id: 2,
    image: estrellada,
    title: 'Estrellada',
    autore: 'Cinwololo',
    price: '$ 4.000',
    category: 'Adultes'
  },
  {
    id: 3,
    image: las_malas,
    title: 'Las Malas',
    autore: 'Camila Sosa Villada',
    price: '$ 3.500',
    category: 'Adultes'

  },
  {
    id: 4,
    image: nosotras,
    title: 'Nosotras',
    autore: 'Laura',
    price: '$ 3.500',
    category: 'Adultes'

  },
  {
    id: 5,
    image: portada_los_dias_se_volvieron,
    title: 'Los dias se volvieron',
    autore: 'Nina Ferrari',
    price: '$ 6.200',
    category: 'Adultes'
  },
  {
    id: 6,
    image: soy,
    title: 'Soy una tonta por quererte',
    autore: 'VVAA',
    price: '$ 2.700',
    category: 'Niñeces'
  },
  // {
  //   id: 7,
  //   image: tapa_mariposas,
  //   title: 'Mariposas',
  //   description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
  //   brand: 'Keysight',
  // },
  // Agrega más productos aquí
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAutore, setSelectedAutore] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
      (selectedCategory === '' || product.category === selectedCategory) && (selectedAutore === '' || product.autore === selectedAutore) &&
      (searchTerm === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

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
      style={{ backgroundColor: '#b12683' }}
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
      style={{ backgroundColor: '#b12683' }}      // className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
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

    <div key={product.id} className="p-2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[150px] h-auto mx-auto">
      <figure className="relative w-full h-0 pb-[100%]">

      <div className="absolute object-cover inset-0 p-2">
        <img src={product.image} alt={product.title} className="w-full h-full rounded-md shadow-md shadow-slate-200"/>
      </div>
      </figure>
      <header className="p-1 flex flex-col justify-between">
      <h3 className="text-xl font-medium text-slate-700">
            {product.title}
            </h3>
            <p >
            {product.autore}
            </p>
        </header>
        <div className='flex p-1 hidden md:block items-center justify-around'>
            <p className="text-xl p-1 font-medium text-slate-400"> 
            {product.price}
            </p>
          <button className="inline-flex p-1 h-8 items-center gap-1 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Comprar</span>
          </button>
        </div>
    </div>
  ))}
</div>
</div>
</div>
  );
};

export default Galeria;