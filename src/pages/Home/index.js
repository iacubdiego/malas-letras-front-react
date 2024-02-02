import React from "react"

import Carousel from '../../components/Carousel';
import Blog from '../../components/Blog';
import Galery from '../../components/Galery';

export default function Home() {
    
  return (
      <>  
      {/* Carousel */}
      <Carousel />
      {/* Galery */}
      <Galery />
      {/* Blog */}
      <Blog />
      </>
  )}