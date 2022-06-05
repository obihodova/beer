import React from "react";
import Header from "../../components/Header";
import "./Productpage.css";
import Navigate from "../../components/Navigate";

function Productpage() {
  return (
    <div>
      <Header />
      <Navigate />
      <div className="product-page">
        <div>
          <img alt="beer"></img>
        </div>
        <div>
          <h2></h2>
          <h6>{` $`}</h6>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
