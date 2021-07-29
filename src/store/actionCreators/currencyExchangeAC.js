import {
  INITIALIZE_APP,
  SET_ENTRY_FIELD,
  SET_EXCHANGE_AMOUNT,
  SET_OUTPUT_FIELD,
  SET_PAY_METHODS,
  SET_USER_EVENT,
  SET_VALUE_ENTRY_FIELD,
  SET_PROGRESS_LOADING,
} from "../types/currencyExchangeTypes";

export const initializeApp = () => ({
  // Загрузка приложения после окончания всех асинхронных операций
  type: INITIALIZE_APP,
});

export const setProgressLoading = (value) => ({
  type: SET_PROGRESS_LOADING,
  payload: { value },
});

export const setPayMethods = (payMethods) => ({
  // Записываем полученные методы оплаты в state
  type: SET_PAY_METHODS,
  payload: { payMethods },
});

export const setUserEvent = (event, selectPayMethods, idMethod) => ({
  type: SET_USER_EVENT,
  payload: { event, selectPayMethods, idMethod },
});

export const setValueEntryField = (value) => ({
  // Установить значение поля ввода
  type: SET_VALUE_ENTRY_FIELD,
  payload: { value },
});

export const setEntryField = (entryField) => ({
  // Установить поле ввода
  type: SET_ENTRY_FIELD,
  payload: { entryField },
});

export const setOutputField = (outputField) => ({
  // Установить поле вывода результата
  type: SET_OUTPUT_FIELD,
  payload: { outputField },
});

export const setExchangeAmount = (amount) => ({
  type: SET_EXCHANGE_AMOUNT,
  payload: { amount },
});
