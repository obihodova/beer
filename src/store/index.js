import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReduser } from "./loginReducer";
import { cartReduser } from "./cartReducer";
import { beerInfoReducer } from "./beerInfoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  beerInfo: beerInfoReducer,
  login: loginReduser,
  cart: cartReduser,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
