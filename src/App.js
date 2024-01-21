import React from 'react';
import { Router, Route } from 'wouter';
import './globals.css';
// import { Link, Route } from "wouter";

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';


import Header from './components/Header';
import Footer from './components/Footer';

// import Carousel from './components/Carousel';
// import Blog from './components/Blog';
// import SearchBook from './components/SearchBook';

function App() {
  return (
    <div>
      {/* Header */}
      <Header />  

    <Router>
      <Route path="/" component={Home} />
      <Route path="/errorpage" component={ErrorPage} />
    </Router>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
