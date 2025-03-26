import React from "react";
import Navbar from "./components/Navbar";  // Import Navbar component
import Hero from "./components/Hero";  // Import Hero component
import ProductList from "./components/ProductList";  // Import Product List
import Footer from "./components/Footer";  // Import Footer component

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
