import React, { useState } from "react"

export default function Blog() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      id: 1,
      name: "Nina Ferrari",
      quote: (
        <>
        <br />
          "La proxima vez,<br /> me gustaria ser yo quien elija<br /> y no,
          como siempre, <br />
          mi herida."
        </>),
      imageSrc: "/images/autoras/nina_ferrari.png"
    },
    {
      id: 2,
      name: "Camila Sosa Villada",
      quote: (<>"Todo puede ser tan hermoso, todo puede ser tan fértil, tan imprevisible, cuesta creer que sea obra de algún dios. El lenguaje es mío."</>),
      imageSrc: "/images/autoras/Villada.png"
    },
    {
      id: 3,
      name: "Paul B. Preciado",
      quote: (<>"La sexualidad es una experiencia política. No se trata solo de lo que hacemos en la cama, sino de cómo se nos permite vivir nuestras vidas y relacionarnos con los demás."</>),
      imageSrc: "/images/autoras/preciado.png"
    },
    {
      id: 4,
      name: "Marlene Wayar",
      quote: (<>"Nosotras tenemos radicalmente una diferencia que es abrazarnos en el respeto irrestricto a nuestro deseo, a nuestra autonomía y a nuestra libertad para ser."</>),
      imageSrc: "/images/autoras/Wayar.png"
    },
    {
      id: 5,
      name: "Aurora Venturini",
      quote: (<>"Pinté las sombras que no pude evitar porque llevo dentro de mí tantas sombras que cuando me agobian (ídem) las expulso encima de mis pinturas"</>),
      imageSrc: "/images/autoras/Venturini.png"
    },
    {
      id: 6,
      name: "Susy Shock",
      quote: (<>"Mi cuerpo es la casa de todas las luchas, de todas las resistencias, de todas las alegrías. No me avergüenzo de él, lo celebro en toda su diversidad y rebeldía."</>),
      imageSrc: "/images/autoras/susy_shock.png"
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="lg:w-1/3 sm:w-1/2 p-2 flex-grow"
                onMouseOver={() => setHoveredItem(item.id)}
                onMouseOut={() => setHoveredItem(null)}
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.imageSrc}
                  />
                  <div
                    className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black"
                    style={{
                      opacity: hoveredItem === item.id ? 0.8 : 0,
                      transition: "opacity 0.7s ease",
                    }}
                  >
                    <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">
                      {item.name}
                    </h2>
                    <br />
                    <p className="leading-relaxed text-white">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}