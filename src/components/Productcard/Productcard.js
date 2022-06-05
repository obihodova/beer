import React from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";
import { DataContext } from "../../App";
import { useContext } from "react";

function Productcard(props) {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="product">
      <div className="product-img">
        <img src={data.beers.image_url} alt="beer"></img>
      </div>

      <div className="product-container">
        <div className="product-name">
          <Link to="/product">
            <p className="product-link">{data.beers.name}</p>
          </Link>
          <h6>{`${Math.ceil(data.beers.abv) * 1.5} $`}</h6>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}

export default Productcard;
