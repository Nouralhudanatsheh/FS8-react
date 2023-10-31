import React, { useState } from "react";
import { useEffect } from "react";

function Onion() {
  let [onion, setOnion] = useState([]);
  const getOnion = async () => {
    let reponse = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=onion"
    );
    let data = await reponse.json();

    setOnion(data.recipes);
  };

  useEffect(() => {
    getOnion();
  }, []);
  return (
    <div className="row container py-5">
      {onion.map((ele) => {
        return (
          <div className="col-md-4">
            <h2>{ele.title}</h2>
            <img src={ele.image_url} className="w-100" />
          </div>
        );
      })}
    </div>
  );
}

export default Onion;
