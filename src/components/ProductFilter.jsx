// import React, { useState } from 'react';
// import Search from './Seacrh';

// const ProductFilter = ({ onCategoryFilter, onSearch }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//     onCategoryFilter(category);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     onSearch(event.target.value);
//   };

//   return (
//     <div className="p-4 flex justify-content items-center mb-4">
//       <select
//         onChange={(e) => handleCategoryFilter(e.target.value)}
//         value={selectedCategory}
//         className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
//       >
//         <option value="">Todos</option>
//         <option value="Adultes">Adultes</option>
//         <option value="Niñeces">Niñeces</option>
//         <option value="Novelas">Novelas</option>
//         <option value="Poesia">Poesia</option>
//       </select>
      
//       <Search
//         placeholder="Buscar producto"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// };

// export default ProductFilter;