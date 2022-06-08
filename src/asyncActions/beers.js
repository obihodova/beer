import { addBeerInfo } from "../store/beerInfoReducer";

export const fetchBeers = () => {
  return function (dispatch) {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(addBeerInfo(response)))
      .catch((err) => console.log(err));
  };
};
