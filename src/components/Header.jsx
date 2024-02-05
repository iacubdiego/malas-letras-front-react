"use client"

import React, { useState } from "react"
import { Link } from "wouter";

import logo from '../images/marca/Logo_fondo_transparente_malas_letras.png'
import carrito from '../images/book-with-sales-bag.svg'
import SideCart from "./SideCart";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <>
    {/* <Route path="/nosotres">Nosotres</Route> */}

      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 bg-gray-100 sticky top-0 inset-x-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
          <div className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1">
          <Link href="/" className="flex">
          <img className="h-20 mr-4" src={logo} alt="Logo" />
          {/* <span className="font-bold text-lg">MALAS LETRAS</span> */}
          </Link>
        </div>
          <div className="flex items-end gap-4">
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
              <Link href="/products">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#productos"
                >
                  <span>Libros</span>
                </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/blog">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#blog"
                >
                  <span>Blog</span>
                </a>
                </Link>

              </li>
              <li role="none" className="flex items-stretch">
                
                <Link href="/nosotres">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#sobre-nosotros"
                >
                  <span>Sobre Malas Letras</span>
                </a>
              </Link>
              </li>
              <li role="none" className="flex items-stretch">
              <Link href="/Contacto">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#contactos"
                >
                  <span>Contacto</span>
                </a>
              </Link>
              </li>
            </ul>
            {/*      <!-- Cart --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center
                ${
                  isCartOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={handleCartToggle}
            >
              <div className= "ml-auto flex items-center justify-end lg:flex-1 px-6 lg:ml-0 lg:p-0">
              <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-emerald-500">
              <img className="h-20 mr-4" src={carrito} alt="Logo" />
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
                  2<span className="sr-only"> Libros en Carrito </span>
                </span>
              </div>
            </div>
            </button>
            {/*      <!-- Cart Sidebar --> */}
            <div
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300  ${
              isCartOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
            >
              <SideCart />            
            </div>

            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar--> */}
    </>
  )
}