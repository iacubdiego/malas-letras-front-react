import React from 'react';
import './globals.css';


import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
