import React from "react";
import { Router, Route } from "wouter";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Books from "./pages/Books";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Content */}
      <Router>
        <Route path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/errorpage" component={ErrorPage} />
      </Router>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
