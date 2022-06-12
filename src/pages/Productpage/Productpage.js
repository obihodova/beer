import React from "react";
import Header from "../../components/Header";
import "./Productpage.css";
import Navigate from "../../components/Navigate";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGoodToCart } from "../../store/cartReducer";
import { reduceAvailability } from "../../store/beerInfoReducer";

function Productpage() {
  const [amountOfBottles, setAmountOfBottles] = useState(1);
  const { productId } = useParams();
  const isLoggin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const { beers } = useSelector((store) => store.beerInfo);

  let beer = beers.find((item) => item.id === Number(productId));

  const addToCart = () => {
    dispatch(
      addGoodToCart(
        beer.id,
        beer.name,
        +amountOfBottles,
        amountOfBottles * (Math.ceil(beer.abv) * 1.5)
      )
    );
    dispatch(reduceAvailability(beer.id, +amountOfBottles));
  };

  if (!beer) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <Navigate />
      <div className="product-page">
        <div className="beer-pic">
          <img src={beer.image_url} alt="beer"></img>
        </div>
        <div className="beer-info">
          <h2>{beer.name}</h2>
          <h6>{`${Math.ceil(beer.abv) * 1.5} $`}</h6>
          <p>{beer.description}</p>
          <p>{`in stock: ${beer.ebc}`}</p>
          {isLoggin ? (
            beer.ebc !== null && beer.ebc !== 0 ? (
              <>
                <input
                  type="number"
                  min="1"
                  max={beer.ebc}
                  value={amountOfBottles}
                  onChange={(e) => setAmountOfBottles(e.target.value)}
                ></input>
                <button onClick={addToCart}>ADD TO CART</button>
              </>
            ) : (
              <button>OUT OF STOCK</button>
            )
          ) : (
            <span>To add an item to the cart, log in</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productpage;
