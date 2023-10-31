import React from "react";
import { Link } from "react-router-dom";
function Restaurant() {
  return (
    <div className="row">
      <div className="col-md-4">
        <Link to="/Restaurant/Pizza">Pizza</Link>
      </div>
      <div className="col-md-4">
        <Link to="/Restaurant/Salad">Salad</Link>
      </div>
      <div className="col-md-4">
        <Link to="/Restaurant/Onion">Onion</Link>
      </div>
    </div>
  );
}

export default Restaurant;
