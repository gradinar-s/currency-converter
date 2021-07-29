import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserEvent } from "../../store/actionCreators/currencyExchangeAC";
import { calculateExchangeAmountTC } from "../../store/thunkCreators/currencyExchangeTC";
import "./Select.sass";

const Select = ({ className, payMethods, category }) => {
  const dispatch = useDispatch();

  const method = useSelector((state) => state.currencyExchange[category]);
  const idInvoice = useSelector((state) => state.currencyExchange.invoice.idMethod);
  const idWithdraw = useSelector((state) => state.currencyExchange.withdraw.idMethod);
  const entryField = useSelector((state) => state.currencyExchange.entryField);
  const valueEntryField = useSelector((state) => state.currencyExchange.valueEntryField);

  const [isSelectVisible, setSelectVisible] = useState(false);

  useEffect(() => {
    dispatch(setUserEvent(category, payMethods[0].name, payMethods[0].id, ""));
  }, []);

  const selectHandler = () => {
    if (isSelectVisible) {
      setSelectVisible(false);
    } else {
      setSelectVisible(true);
    }
  };

  const setPayMethodToField = (e, idMethod) => {
    const valueInput = e.target.outerText;
    dispatch(setUserEvent(category, valueInput, idMethod));
    if (entryField !== "") {
      dispatch(
        calculateExchangeAmountTC({
          name: entryField,
          valueInput: valueEntryField,
          ipm: idInvoice,
          wpm: idWithdraw,
        })
      );
    }
  };

  return (
    <div className={`${className} select`}>
      <button
        className={`${isSelectVisible ? "select__field select__field_active" : "select__field"}`}
        onClick={selectHandler}
        onBlur={() => setTimeout(() => setSelectVisible(false), 100)}
      >
        {method.selectPayMethods}
      </button>
      <ul className={`${isSelectVisible ? "select__list select__list_visible" : "select__list"}`}>
        {payMethods.map((method) => {
          return (
            <li
              key={method.id}
              className="select__item"
              onClick={(e) => setPayMethodToField(e, method.id)}
            >
              {method.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
