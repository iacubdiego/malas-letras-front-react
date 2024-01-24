import React from "react"
// import Card from "./Card"


export default function Blog() {
  return (
    <>
      {/*<!-- End Four columns even layout --> */}
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    {/* <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Camila Sosa Villada</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"En la diversidad encontramos la verdadera riqueza humana, y es en esa diversidad donde se gestan las historias más auténticas y poderosas."</p>
    </div> */}
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/nina_ferrari.png"/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Nina Ferrari</h2>
            <br />
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1> */}
            <p class="leading-relaxed">"La proxima vez, me gustaria ser yo quien elija y no, como siempre, mi herida"</p>
            <br />
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/Villada.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Camila Sosa Villada</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3"></h1>
            <p class="leading-relaxed">"Todo puede ser tan hermoso, todo puede ser tan fértil, tan imprevisible, cuesta creer que sea obra de algún dios. El lenguaje es mío."</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/preciado.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Paul B. Preciado</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1> */}
            <p class="leading-relaxed">"La sexualidad es una experiencia política. No se trata solo de lo que hacemos en la cama, sino de cómo se nos permite vivir nuestras vidas y relacionarnos con los demás."</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/Wayar.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Marlene Wayar</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1> */}
            <p class="leading-relaxed">"Nosotras tenemos radicalmente una diferencia que es abrazarnos en el respeto irrestricto a nuestro deseo, a nuestra autonomía y a nuestra libertad para ser."</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/Venturini.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Aurora Venturini</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1> */}
            <p class="leading-relaxed">"Pinté las sombras que no pude evitar porque llevo dentro de mí tantas sombras que cuando me agobian (ídem) las expulso encima de mis pinturas"</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex-grow">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/images/autoras/susy_shock.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Susy Shock</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
            <p class="leading-relaxed">"Mi cuerpo es la casa de todas las luchas, de todas las resistencias, de todas las alegrías. No me avergüenzo de él, lo celebro en toda su diversidad y rebeldía."</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}