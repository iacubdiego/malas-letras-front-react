import React from 'react';
import './globals.css';


import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Galeria from './components/Galeria';


function App() {
  return (
    <div>
      {/* Header */}
      <Header />    
      {/* Carousel */}
      <Carousel />
      {/* Galeria */}
      <Galeria />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
