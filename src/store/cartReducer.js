const defaultState = {
  goods: 0,
  price: 0,
};

const ADD_GOODS = "ADD_GOODS";
const ADD_PRICE = "ADD_PRICE";

export const cartReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GOODS:
      return { ...state, goods: state.goods + action.payload };
    case ADD_PRICE:
      return { ...state, price: state.price + action.payload };

    default:
      return state;
  }
};
