import React from "react";
import Header from "../../components/Header";
import "./Productpage.css";
import Navigate from "../../components/Navigate";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";

function Productpage() {
  const { data, setData } = useContext(DataContext);
  const [amountOfBottles, setAmountOfBottles] = useState(1);
  const { productId } = useParams();

  let productInfo = data.beers.find((item) => item.id === Number(productId));

  const addToCart = () => {
    const beers = data.beers.map((beer) => {
      if (beer.id === Number(productId)) {
        return { ...beer, ebc: beer.ebc - amountOfBottles };
      }
      return beer;
    });

    setData((state) => ({
      ...state,
      beers,
      cart: {
        goods: state.cart.goods + +amountOfBottles,
        price:
          state.cart.price +
          amountOfBottles * (Math.ceil(productInfo.abv) * 1.5),
      },
    }));
  };

  if (!productInfo) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <Navigate />
      <div className="product-page">
        <div className="beer-pic">
          <img src={productInfo.image_url} alt="beer"></img>
        </div>
        <div className="beer-info">
          <h2>{productInfo.name}</h2>
          <h6>{`${Math.ceil(productInfo.abv) * 1.5} $`}</h6>
          <p>{productInfo.description}</p>
          <p>{`in stock: ${productInfo.ebc}`}</p>
          {data.isLoggin ? (
            productInfo.ebc !== null && productInfo.ebc !== 0 ? (
              <>
                <input
                  type="number"
                  min="1"
                  
                  max={productInfo.ebc}
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
