import React from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";
import { DataContext } from "../../App";
import { useContext } from "react";

function Productcard(props) {
  const { productInfo } = props;
  const { data, setData } = useContext(DataContext);

  const addToCart = () => {
    const beers = data.beers.map((beer) => {
      if (beer.id === Number(productInfo.id)) {
        return { ...beer, ebc: beer.ebc - 1 };
      }
      return beer;
    });

    setData((state) => ({
      ...state,
      beers,
      cart: {
        goods: state.cart.goods + 1,
        price: state.cart.price + Math.ceil(productInfo.abv) * 1.5,
      },
    }));
  };

  let beerCost = Math.ceil(productInfo.abv) * 1.5;

  return (
    <div className="product">
      <div className="product-img">
        <img src={productInfo.image_url} alt="beer"></img>
      </div>

      <div className="product-container">
        <div className="product-name">
          <Link to={`/product/${productInfo.id}`}>
            <p className="product-link">{productInfo.name}</p>
          </Link>
          <h6>{`${beerCost} $`}</h6>
        </div>
        {data.isLoggin ? (
          productInfo.ebc !== null && productInfo.ebc !== 0 ? (
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
