import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  calculateExchangeAmount,
  setEntryField,
  setOutputField,
} from "../../store/currencyExchangeReducer";
import "./Input.sass";

const Input = ({ className, type, name }) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.currencyExchange.amount);
  const method = useSelector((state) => state.currencyExchange[name]);
  const entryField = useSelector((state) => state.currencyExchange.entryField);

  const idInvoice = useSelector(
    (state) => state.currencyExchange.invoice.idMethod
  );
  const idWithdraw = useSelector(
    (state) => state.currencyExchange.withdraw.idMethod
  );

  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    console.log(method);
    if (valueInput) {
      dispatch(
        calculateExchangeAmount({
          name,
          valueInput,
          ipm: idInvoice,
          wpm: idWithdraw,
        })
      );
    }
  }, [valueInput]);

  const inputHandler = (e) => {
    setValueInput(e.target.value);
  };

  const focusHandler = (e) => {
    dispatch(setEntryField(e.target.name));
    dispatch(
      setOutputField(e.target.name === "invoice" ? "withdraw" : "invoice")
    );
  };

  const blurHandler = (e) => {
    if (!valueInput) {
      dispatch(setEntryField(""));
      dispatch(setOutputField(""));
    }
  };

  return (
    <>
      <input
        type={type}
        name={name}
        className={`${className} input`}
        value={entryField === name ? valueInput : amount}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </>
  );
};

export default Input;
