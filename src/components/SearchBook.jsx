import React, { useState } from 'react';

import Search from './Seacrh';

import furia_travesti from "../images/libros/furia_travesti.png";
import estrellada from "../images/libros/estrellada.jpg";
import las_malas from "../images/libros/las_malas.png";
import nosotras from "../images/libros/nosotras.jpg";
import portada_los_dias_se_volvieron from "../images/libros/portada_los_dias_se_volvieron.jpg";
import soy from "../images/libros/soy.png";
import tapa_mariposas from "../images/libros/tapa_mariposas.jpg";


const products = [
  {
    id: 1,
    image: furia_travesti,
    title: 'LanXPLORER',
    description: 'In-Line network tester for LAN management with active and passive troubleshooting capabilities for Ethernet connectivity and cabling issues in multi-media environments including copper,fibre and WiFi.',
    brand: 'Ideal',
    brandbaner: "{banner_oscilloquartz}",
  },
  {
    id: 2,
    image: estrellada,
    title: 'Power Meter',
    description: 'Maximum input 600Vrms and 20Arms. Bandwidth 100KHZ. Voltage, Current, Power, Frequency, Harmonics. USB, GPIB, RS232, LAN remote control.',
    brand: 'Itech',
    brandbaner: {furia_travesti},
  },
  {
    id: 3,
    image: las_malas,
    title: 'Signal Generators',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
    brandbaner: {furia_travesti},

  },
  {
    id: 4,
    image: nosotras,
    title: 'LED High Power DC E-Load',
    description: 'Simulate real output of LED lights. CR-LED mode. Duty ratio PWM dimming output port. I-pp/I-max. LED driver power dimming test.',
    brand: 'Keysight',
  },
  {
    id: 5,
    image: portada_los_dias_se_volvieron,
    title: 'Los dias se volvieron',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
  },
  {
    id: 6,
    image: soy,
    title: 'Soy una tonta por quererte',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
  },
  {
    id: 7,
    image: tapa_mariposas,
    title: 'Mariposas',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
  },
  // Agrega más productos aquí
];

const Galeria = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedBrand === '' || product.brand === selectedBrand) &&
      (searchTerm === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold mb-4">Libros</h1>

    {/* <div className="relative">
    <img src={furia_travesti} alt="banner_principal" className="w-full rounded-md" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-md">
        <h1 className="text-4xl font-bold text-white mb-4">Keysight</h1>
      </div>
    </div>
  </div> */}
  <div className="p-4 flex justify-content items-center mb-4">
    <select
      onChange={(e) => handleBrandFilter(e.target.value)}
      value={selectedBrand}
      className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
      // className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
    >
      <option value="">Todos</option>
      <option value="Ideal">Ideal</option>
      <option value="Keysight">Keysight</option>
    </select>
    {/* <input
      type="text"
      placeholder="Buscar producto"
      value={searchTerm}
      onChange={handleSearch}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
    /> */}
    <Search
    placeholder="Buscar producto"
    value={searchTerm}
    onChange={handleSearch}
    />
  </div>
  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
  <div class="container px-5 py-10 mx-auto">
  <div class="flex flex-wrap gap-6 justify-center p-4">
  {filteredProducts.map((product) => (

    <div key={product.id} className="p-2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 max-w-md mx-auto">
      <figure className="relative w-full h-0 pb-[100%]">

      <div className="absolute object-cover inset-0 p-4">
        <img src={product.image} alt={product.title} className="w-full h-full"/>
      </div>
      </figure>
      <div className="p-2 pb-0">
          <header className="flex justify-between">
            <h3 className="text-xl font-medium text-slate-700">
              Feminacida
            </h3>
            <p className="p-1 text-xl font-medium text-slate-400"> $8.99</p>
          </header>
          <p>
          Descripcion: Lorem, ipsum dolor sit amet.
          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-start p-2">
          <button className="inline-flex h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Comprar!</span>
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