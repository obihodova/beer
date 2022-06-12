import { REMOVE_ITEM_FROM_CART, CHANGE_PRODUCT_AMOUNT } from "./cartReducer";
const defaultState = {
  beers: [],
};

const ADD_BEER_INFO = "ADD_BEER_INFO";
const REDUCE_AVAILABILITY = "REDUCE_AVAILABILITY";

export const beerInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BEER_INFO:
      return { ...state, beers: action.payload };
    case REDUCE_AVAILABILITY: {
      const { id, amount } = action.payload;

      const beers = state.beers.map((beer) => {
        if (beer.id === Number(id)) {
          return { ...beer, ebc: beer.ebc - amount };
        }
        return beer;
      });

      return { ...state, beers };
    }
    case REMOVE_ITEM_FROM_CART: {
      const { id, amount } = action.payload;
      const newState = state.beers.map((beer) => {
        if (beer.id === id) {
          return {
            ...beer,
            ebc: beer.ebc - amount,
          };
        }
        return beer;
      });
      return { beers: newState };
    }

    case CHANGE_PRODUCT_AMOUNT: {
      const { id, amount } = action.payload;
      const newState = state.beers.map((beer) => {
        if (beer.id === id) {
          return {
            ...beer,
            ebc: beer.ebc - amount,
          };
        }
        return beer;
      });
      return { beers: newState };
    }
    default:
      return state;
  }
};

export const addBeerInfo = (payload) => ({ type: ADD_BEER_INFO, payload });
export const reduceAvailability = (id, amount) => ({
  type: REDUCE_AVAILABILITY,
  payload: { id, amount },
});
