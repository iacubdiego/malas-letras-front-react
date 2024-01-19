import React from 'react';
import logo from './Logo-Malas-Letras.png'
import SocialButon from './SocialButon/SocialButon';

const Footer = () => {
  return (
    // class="flex items-center justify-between p-4 bg-gray-100 border-2 w-full m-auto bg-gray-100"
<footer className="flex flex-col mt-4 p-2 border-2 w-full m-auto">
{/* <div className="container mt-4 py-8"> */}
<div className="flex items-center justify-between mt-4 bg-gray-100 w-full m-auto">

  <div className="flex flex-wrap w-full justify-between">
    <div className="w-full flex p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img className="mr-6 p-2 h-30 w-40" src={logo} alt="Logo" />
      <div>
      <h2 className="text-lg font-bold mb-2">De la Libreria:</h2>
      <ul className="list-none">
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">Inicio</a>
        </li>
        <li className="mb-1">
          <a href="#productos" className="hover:text-gray-400">Libros</a>
        </li>
        <li className="mb-1">
          <a href="#servicio-tecnico" className="hover:text-gray-400">Blog</a>
        </li>
        <li className="mb-1">
          <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre Malas Letras</a>
        </li>
      </ul>
      </div>
    </div>
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-4">CONTACTO:</h2>
    <SocialButon />
      
      
    </div>
    
  </div>

</div>
  
</footer>
  )}
  export default Footer;
