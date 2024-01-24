import React from "react";
import { Router, Route } from "wouter";
import "./globals.css";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Books from "./pages/Books";
import Cart from "./pages/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Content */}
      <Router>
        <Route path="/" component={Home} />
        <Route path="/products" component={Books} />
        <Route path="/cart" component={Cart} />
        <Route path="/errorpage" component={ErrorPage} />
      </Router>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
