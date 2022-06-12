import React from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";
import { useSelector, useDispatch } from "react-redux";
import { addGoodToCart } from "../../store/cartReducer";
import { reduceAvailability } from "../../store/beerInfoReducer";

function Productcard(props) {
  const { beer } = props;
  const isLoggin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addGoodToCart(beer.id, beer.name, 1, beerCost));
    dispatch(reduceAvailability(beer.id, 1));
  };


  let beerCost = Math.ceil(beer.abv) * 1.5;

  return (
    <div className="product">
      <div className="product-img">
        <img src={beer.image_url} alt="beer"></img>
      </div>

      <div className="product-container">
        <div className="product-name">
          <Link to={`/product/${beer.id}`}>
            <p className="product-link">{beer.name}</p>
          </Link>
          <h6>{`${beerCost} $`}</h6>
        </div>
        {isLoggin ? (
          beer.ebc !== null && beer.ebc !== 0 ? (
            <button onClick={addToCart}>ADD TO CART</button>
          ) : (
            <button>OUT OF STOCK</button>
          )
        ) : (
          <span>To add an item to the cart, log in</span>
        )}
      </div>
    </div>
  );
}

export default Productcard;
