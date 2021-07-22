import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initializeAppTC } from "./store/currencyExchangeReducer";
import WorkingSpace from "./components/WorkingSpace/WorkingSpace";
import "./App.sass";

function App() {
  const dispatch = useDispatch();

  const initializeApp = useSelector(
    (state) => state.currencyExchange.initialApp
  );

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!initializeApp) {
    return <div>loading...</div>;
  }
  return (
    <div className="currency-exchange">
      <WorkingSpace />
    </div>
  );
}

export default App;
