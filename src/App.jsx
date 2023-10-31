import { useState } from "react";
import PageNotFound from "./components/notFound/PageNotFound";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product.jsx";
import Restaurant from "./components/resturent/Restaurant.jsx";
import Salad from "./components/resturent/Salad";
import Pizza from "./components/resturent/Pizza";
import Onion from "./components/resturent/Onion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Products" element={<Product />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/Restaurant/Pizza" element={<Pizza />} />
          <Route path="/Restaurant/Salad" element={<Salad />} />
          <Route path="/Restaurant/Onion" element={<Onion />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
