import React from 'react';
import './globals.css';


import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Blog from './components/Blog';
import SearchBook from './components/SearchBook';

function App() {
  return (
    <div>  
      {/* Header */}
      <Header />    
      {/* Carousel */}
      <Carousel />
      {/* SearchBook */}
      <SearchBook />
      {/* Blog */}
      <Blog />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
