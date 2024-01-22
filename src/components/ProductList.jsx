// import React from 'react';

// const ProductList = ({ products }) => {
//   return (
//     <div class="container px-2 py-8 mx-auto">
//       <div class="flex flex-wrap gap-6 justify-center p-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="p-1/2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[200px] h-auto mx-auto"
//           >
//             <figure className="relative w-full h-0 pb-[100%]">
//               <div className="absolute object-cover inset-0 p-2">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full rounded-md shadow-md shadow-slate-200"
//                 />
//               </div>
//             </figure>
//             <header className="p-1 flex flex-col justify-between">
//               <h3 className="text-xl font-medium text-slate-700">
//                 {product.title}
//               </h3>
//               <p>{product.autore}</p>
//             </header>
//             <div className="flex p-1 hidden md:block items-center justify-around">
//               <p className="text-xl p-1 font-medium text-slate-400">
//                 {product.price}
//               </p>
//               <button className="inline-flex p-1 h-8 items-center gap-1 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
//                 <span>Comprar</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;