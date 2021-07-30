import { applyMiddleware, combineReducers, createStore } from "redux";
import currencyExchangeReducer from "./currencyExchangeReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  currencyExchange: currencyExchangeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
