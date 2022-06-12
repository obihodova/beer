const defaultState = {
  goods: 0,
  price: 0,
  cart: {},
};

export const ADD_GOODS = "ADD_GOODS";
export const ADD_PRICE = "ADD_PRICE";
export const RESET_CART = "RESET_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CHANGE_PRODUCT_AMOUNT = "CHANGE_PRODUCT_AMOUNT";

export const cartReduser = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_CART:
      return defaultState;

    case ADD_GOODS:
      const { id, name, amount, cost } = action.payload;

      let cartItem = state.cart[id];

      if (cartItem) {
        const newAmount = cartItem.amount + amount;
        const newTotal = cartItem.total + cost;
        cartItem = {
          id,
          name: cartItem.name,
          amount: newAmount,
          total: newTotal,
          cost: newTotal / newAmount,
        };
      } else {
        cartItem = {
          id,
          name: name,
          amount: amount,
          total: cost,
          cost: cost / amount,
        };
      }

      return {
        goods: state.goods + amount,
        price: state.price + cost,
        cart: {
          ...state.cart,
          [id]: cartItem,
        },
      };

    case REMOVE_ITEM_FROM_CART: {
      const newCart = { ...state.cart };
      const { amount: itemAmount, total: itemTotal } =
        newCart[action.payload.id];
      delete newCart[action.payload.id];
      return {
        goods: state.goods - itemAmount,
        price: state.price - itemTotal,
        cart: newCart,
      };
    }

    case CHANGE_PRODUCT_AMOUNT: {
      const { id, amount } = action.payload;
      const cartItem = state.cart[id];
      cartItem.amount += amount;
      cartItem.total += cartItem.cost * amount;
      return {
        goods: state.goods + amount,
        price: state.price + cartItem.cost * amount,
        cart: {
          ...state.cart,
          [id]: cartItem,
        },
      };
    }

    default:
      return state;
  }
};

export const addGoodToCart = (id, name, amount, cost) => ({
  type: ADD_GOODS,
  payload: { id, name, amount, cost },
});

export const resetCart = (payload) => ({
  type: RESET_CART,
  payload,
});

export const removeItem = (id, amount) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: { id, amount },
});

export const changeProductAmount = (id, amount) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  payload: { id, amount },
});
