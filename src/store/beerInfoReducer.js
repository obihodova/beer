const defaultState = {
  beers: [],
};

const ADD_BEER_INFO = "ADD_BEER_INFO";

export const beerInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BEER_INFO:
      return { ...state, beers: action.payload };

    default:
      return state;
  }
};

export const addBeerInfo = (payload) => ({ type: ADD_BEER_INFO, payload });
