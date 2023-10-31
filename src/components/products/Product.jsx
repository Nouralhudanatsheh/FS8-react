import React, { useState } from "react";
import { useEffect } from "react";

function Product() {
  let [products, setProducts] = useState([]);
  const getProducts = async () => {
    let reponse = await fetch("https://fakestoreapi.com/products");
    let data = await reponse.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-md-4 p-5" key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} className="w-100" />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
