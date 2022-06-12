import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, changeProductAmount } from "../../../store/cartReducer";
import deletePic from "../../../assets/delete.svg";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const ebc = useSelector((store) => store.beerInfo.beers).find(
    (beer) => beer.id === item.id
  ).ebc;
  const onDelete = (id) => {
    dispatch(removeItem(id));
  };

  const onChangeProductAmount = (id, amount, amountInCart) => {
    if (ebc === 0 && amount > 0) {
      return;
    }
    if (amountInCart === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(changeProductAmount(id, amount));
    }
  };
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td width="480px">{item.name}</td>
      <td>{`${item.cost}$`}</td>
      <td>
        <div className="change-buttons-container">
          <button
            onClick={() => onChangeProductAmount(item.id, -1, item.amount)}
          >
            -
          </button>
          {item.amount}
          <button onClick={() => onChangeProductAmount(item.id, 1)}>+</button>
        </div>
      </td>
      <td width="480px">{`${item.total}$`}</td>
      <td>
        <img
          src={deletePic}
          alt="delete"
          onClick={() => onDelete(item.id, item.amount)}
        ></img>
      </td>
    </tr>
  );
};

export default CartItem;
