import React, { useState } from 'react';
import producto_ideal_lanxpolore from '../../images/producto_ideal_lanxplorer.png'
import producto_key_signal from '../../images/producto_key_signal.png'
import producto_itech_Power_Meter from '../../images/producto_itech_Power_Meter.png'
import producto_itech_LED_High_Power from '../../images/producto_itech_LED_High_Power.png'



// import banner_oscilloquartz from '../images/banner_oscilloquartz.png'
import banner_keysight from "../../images/banner_keysight.png"

const products = [
  {
    id: 1,
    image: producto_ideal_lanxpolore,
    title: 'LanXPLORER',
    description: 'In-Line network tester for LAN management with active and passive troubleshooting capabilities for Ethernet connectivity and cabling issues in multi-media environments including copper,fibre and WiFi.',
    brand: 'Ideal',
    brandbaner: "{banner_oscilloquartz}",
  },
  {
    id: 2,
    image: producto_itech_Power_Meter,
    title: 'Power Meter',
    description: 'Maximum input 600Vrms and 20Arms. Bandwidth 100KHZ. Voltage, Current, Power, Frequency, Harmonics. USB, GPIB, RS232, LAN remote control.',
    brand: 'Itech',
    brandbaner: {banner_keysight},
  },
  {
    id: 3,
    image: producto_key_signal,
    title: 'Signal Generators',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
    brandbaner: {banner_keysight},

  },
  {
    id: 4,
    image: producto_itech_LED_High_Power,
    title: 'LED High Power DC E-Load',
    description: 'Simulate real output of LED lights. CR-LED mode. Duty ratio PWM dimming output port. I-pp/I-max. LED driver power dimming test.',
    brand: 'Keysight',
  },
  {
    id: 5,
    image: producto_key_signal,
    title: 'Signal Generators',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
  },
  {
    id: 6,
    image: producto_key_signal,
    title: 'Signal Generators',
    description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
    brand: 'Keysight',
  },
  {
    id: 7,
    image: producto_key_signal,
    title: 'Signal Generators',
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
    <h1 className="text-4xl font-bold mb-4">PRODUCTOS</h1>

    <div className="relative">
    <img src={banner_keysight} alt="banner_principal" className="w-full rounded-md" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-md">
        <h1 className="text-4xl font-bold text-white mb-4">Keysight</h1>
      </div>
    </div>
  </div>
  <div className="p-4 flex justify-content items-center mb-4">
    <select
      onChange={(e) => handleBrandFilter(e.target.value)}
      value={selectedBrand}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
    >
      <option value="">Todos</option>
      <option value="Ideal">Ideal</option>
      <option value="Keysight">Keysight</option>
    </select>
    <input
      type="text"
      placeholder="Buscar producto"
      value={searchTerm}
      onChange={handleSearch}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {filteredProducts.map((product) => (
    <div key={product.id} className="border border-gray-300 rounded-md p-4 shadow-md">
      <div className="aspect-w-3 aspect-h-2 items-center justify-center">
        <img src={product.image} alt={product.title} className="object-cover rounded-md" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        {/* <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
        </div> */}
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default Galeria;