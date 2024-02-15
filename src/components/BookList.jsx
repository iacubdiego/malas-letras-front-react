import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const booksRef = collection(db, "books");
            const querySnapshot = await getDocs(booksRef);
            const booksData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setBooks(booksData);
        };

        fetchBooks();
    }, []);

    return (
        
        <div>
            {books.map((book) => (
                <div className="bg-gradient-to-br from-white to-transparent rounded-lg shadow-lg py-4 px-6 m-6 w-64 h-72">
                <span className="text-xs  font-bold text-blue-500">{book.categoria}</span>
                <h2 className="text-2xl font-bold -my-0.5">{book.titulo}</h2>
                <p className="text-xs font-bold text-gray-500">{book.autore}</p>
                {/* <div className="flex justify-center mb-4">
                  <img src="imagen-del-producto.jpg" alt="Producto" className="w-3/4"/>
                </div> */}
              <div className="flex justify-center items-center bg-gray-200 h-24 my-4">
                  <span className="text-gray-500 text-5xl">Imagen</span>
                </div>
              <div className="flex justify-between items-center mt-10">
                  <span className="text-xs font-bold text-gray-500">{book.precio}</span>
                  <button className="text-xs text-gray-300 bg-blue-700 hover:bg-blue-600 text-xxs py-2 px-2 rounded-2xl">
                    Comprar
                  </button>
                </div>
              </div>
          
            
            
            
            // <div
            //   key={book.id}
            //   className="flex flex-col justify-between p-2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[150px] sm:w-[200px]"
            // >
            //   <figure className="relative w-full h-0 pb-[100%]">
            //     <div className="absolute object-cover inset-0 p-2">
            //       <img
            //         src={book.imagen}
            //         alt={book.title}
            //         className="w-full h-full shadow-md shadow-slate-200"
            //       />
            //     </div>
            //   </figure>
            //   <header className="p-1 flex flex-col justify-between">
            //     <h3 className="text-xl font-medium text-slate-700">
            //       {book.titulo}
            //     </h3>
            //     <p>{book.autore}</p>
            //   </header>
            //   <div className="flex p-1 hidden md:block items-center justify-around">
            //     <p className="text-xl p-1 font-medium text-slate-400">
            //       {book.precio}
            //     </p>
            //     <button className="inline-flex p-1 h-8 items-center gap-1 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            //       <span>Comprar</span>
            //     </button>
            //   </div>
            // </div>                


                // <div key={book.id}>
                //     <h1>Libro: {book.titulo}</h1>
                //     <p>{book.autore}</p>
                //     {/* Mostrar otros datos del libro aquí */}
                // </div>
            ))}
        </div>
    );
};

export default BookList;