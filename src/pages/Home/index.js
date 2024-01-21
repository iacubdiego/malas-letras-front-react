import React from "react"

import Carousel from '../../components/Carousel';
import Blog from '../../components/Blog';
import SearchBook from '../../components/SearchBook';

export default function Home() {
    
  return (
      <>  
      {/* Carousel */}
      <Carousel />
      {/* SearchBook */}
      <SearchBook />
      {/* Blog */}
      <Blog />
      </>
  )}