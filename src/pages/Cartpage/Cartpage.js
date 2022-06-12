import React from "react";
import "./Cartpage.css";
import Header from "../../components/Header";
import Navigate from "../../components/Navigate";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../../store/cartReducer";

import CartItem from "./CartItem";

function Cartpage() {
  const beersInCart = useSelector((store) => store.cart.cart);
  const priceTotal = useSelector((store) => store.cart.price);

  const dispatch = useDispatch();

  const onReset = () => {
    dispatch(resetCart());
  };

  const beers = Object.values(beersInCart);
  return (
    <div>
      <Header />
      <Navigate />
      <div className="cart-page">
        <h2>SHOPPING BAG</h2>
        {Object.keys(beersInCart).length ? (
          <>
            <table border="1">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
              {Object.keys(beersInCart).length
                ? beers.map((item) => <CartItem item={item} />)
                : null}
            </table>
            <hr className="line"></hr>
            <p className="total">{`TOTAL: ${priceTotal}$`}</p>
            <div className="cart-buttons">
              <button className="pay" disabled>
                PAY
              </button>
              <button onClick={onReset}>CLEAR</button>
            </div>
          </>
        ) : (
          <h6>add items to cart</h6>
        )}
      </div>
    </div>
  );
}

export default Cartpage;
