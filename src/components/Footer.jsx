import React from 'react';
import logo from '../images/Logo-fondo-blanco-malas-letras.png'
import SocialButon from './SocialButon/SocialButon';

const Footer = () => {
return (

<footer className="flex flex-col mt-4 p-2 bg-gray-100 border-2 w-full m-auto">
<div className="flex items-center justify-between  w-full m-auto">
  <div className="flex flex-wrap items-center w-full justify-evenly">
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
    <div className="w-full p-3">
      <h2 className="text-lg text-center font-bold mb-4">CONTACTO:</h2>
    <SocialButon />
    </div>
</div>  
</footer>

)}
export default Footer;
