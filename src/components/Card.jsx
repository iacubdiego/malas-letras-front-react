import React from "react"

export default function Card() {
    
  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      
      <div className="p-2 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 max-w-md mx-auto">
        {/*  <!-- Image --> */}
        <figure className="relative w-full h-0 pb-[100%]">
          <div className="absolute inset-0 p-4">
            <img
              src="/images/feminaci.png" alt=""
            />
          </div>
        </figure>
        {/*  <!-- Body--> */}
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
      {/*<!-- End E-commerce card --> */}
    </>
  )
}