import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

import furia_travesti from "../images/libros/furia_travesti.png";
import estrellada from "../images/libros/estrellada.jpg";
import las_malas from "../images/libros/las_malas.png";
import nosotras from "../images/libros/nosotras.jpg";
import portada_los_dias_se_volvieron from "../images/libros/portada_los_dias_se_volvieron.jpg";
import soy from "../images/libros/soy.png";

const products =
    [
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
        }
        // {
        //   id: 7,
        //   image: tapa_mariposas,
        //   title: 'Mariposas',
        //   description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
        //   brand: 'Keysight',
        // },
        // Agrega más productos aquí
]

const Galeria = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryFilter = (category) => {
    const filtered = products.filter((product) =>
      category ? product.category === category : true
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <ProductFilter
        onCategoryFilter={handleCategoryFilter}
        onSearch={handleSearch}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Galeria;