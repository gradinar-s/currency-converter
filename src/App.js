import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeAppTC } from "./store/thunkCreators/currencyExchangeTC";
import WorkingSpace from "./components/WorkingSpace/WorkingSpace";
import Loader from "./components/Loader/Loader";
import { Route } from "react-router-dom";
import "./App.sass";
import Details from "./components/Details/Details";
import Success from "./components/Success/Success";

function App() {
  const dispatch = useDispatch();

  const initializeApp = useSelector((state) => state.currencyExchange.initialApp);

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!initializeApp) {
    return <Loader className="app-loader" />;
  }
  return (
    <div className="currency-exchange">
      <Route exact path="/" render={() => <WorkingSpace />} />
      <Route path="/details" render={() => <Details />} />
      <Route path="/success" render={() => <Success />} />
    </div>
  );
}

export default App;
