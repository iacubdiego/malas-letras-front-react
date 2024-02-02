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
    price: ' 5.000',
    category: 'Adultes'
  },
  {
    id: 2,
    image: estrellada,
    title: 'Estrellada',
    autore: 'Cinwololo',
    price: ' 4.000',
    category: 'Adultes'
  },
  {
    id: 3,
    image: las_malas,
    title: 'Las Malas',
    autore: 'Camila Sosa Villada',
    price: ' 3.500',
    category: 'Adultes'
  },
  {
    id: 4,
    image: nosotras,
    title: 'Nosotras',
    autore: 'Laura',
    price: ' 3.500',
    category: 'Adultes'
  },
  {
    id: 5,
    image: portada_los_dias_se_volvieron,
    title: 'Los dias se volvieron',
    autore: 'Nina Ferrari',
    price: ' 6.200',
    category: 'Adultes'
  },
  {
    id: 6,
    image: soy,
    title: 'Soy una tonta por quererte',
    autore: 'VVAA',
    price: ' 2.700',
    category: 'Niñeces'
  }
];

export default products;
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