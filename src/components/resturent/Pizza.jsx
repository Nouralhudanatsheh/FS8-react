import React, { useState } from "react";
import { useEffect } from "react";

function Pizza() {
  let [pizza, setPizza] = useState([]);
  const getPizza = async () => {
    let reponse = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    let data = await reponse.json();

    setPizza(data.recipes);
  };

  useEffect(() => {
    getPizza();
  }, []);
  return (
    <div className="row py-5">
      {pizza.map((ele) => {
        return (
          <div className="col-md-4">
            <h2>{ele.title}</h2>
            <img src={ele.image_url} className="w-100 h-70" />
          </div>
        );
      })}
    </div>
  );
}

export default Pizza;
