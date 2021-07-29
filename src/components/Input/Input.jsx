import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEntryField,
  setExchangeAmount,
  setOutputField,
  setValueEntryField,
} from "../../store/actionCreators/currencyExchangeAC";
import { calculateExchangeAmountTC } from "../../store/thunkCreators/currencyExchangeTC";
import Loader from "../Loader/Loader";
import "./Input.sass";

const Input = ({ className, type, name }) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.currencyExchange.amount);
  const entryField = useSelector((state) => state.currencyExchange.entryField);
  const idInvoice = useSelector((state) => state.currencyExchange.invoice.idMethod);
  const idWithdraw = useSelector((state) => state.currencyExchange.withdraw.idMethod);
  const valueEntryField = useSelector((state) => state.currencyExchange.valueEntryField);
  const isProgressLoading = useSelector((state) => state.currencyExchange.isProgressLoading);

  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (valueInput) {
      dispatch(
        calculateExchangeAmountTC({
          name,
          valueInput,
          ipm: idInvoice,
          wpm: idWithdraw,
        })
      );
    }
  }, [valueInput]);

  const inputHandler = (e) => {
    const value = e.target.value;
    setValueInput(value);
    dispatch(setValueEntryField(value));
    if (!value) {
      dispatch(setExchangeAmount(""));
    }
  };

  const focusHandler = (e) => {
    dispatch(setEntryField(e.target.name));
    dispatch(setOutputField(e.target.name === "invoice" ? "withdraw" : "invoice"));
  };

  const blurHandler = () => {
    if (!valueInput) {
      dispatch(setEntryField(""));
      dispatch(setOutputField(""));
    }
  };

  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        className={`${className} input`}
        value={entryField === name ? valueEntryField : amount}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {isProgressLoading && <Loader className="input__loader" />}
    </div>
  );
};

export default Input;
