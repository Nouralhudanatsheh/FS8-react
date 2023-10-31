import React, { useState } from "react";
import { useEffect } from "react";

function Salad() {
  let [salad, setSalad] = useState([]);
  const getSalad = async () => {
    let reponse = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=salad"
    );
    let data = await reponse.json();

    setSalad(data.recipes);
  };

  useEffect(() => {
    getSalad();
  }, []);
  return (
    <div className="row container py-5">
      {salad.map((wlw) => {
        return (
          <div className="col-md-4">
            <h2>{wlw.title}</h2>
            <img src={wlw.image_url} className="w-100" />
          </div>
        );
      })}
    </div>
  );
}

export default Salad;
