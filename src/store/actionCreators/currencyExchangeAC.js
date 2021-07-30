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
  // Loading the application after all asynchronous operations have finished
  type: INITIALIZE_APP,
});

export const setProgressLoading = (value) => ({
  type: SET_PROGRESS_LOADING,
  payload: { value },
});

export const setPayMethods = (payMethods) => ({
  // Set received payment methods to state
  type: SET_PAY_METHODS,
  payload: { payMethods },
});

export const setUserEvent = (event, selectPayMethod, idMethod) => ({
  type: SET_USER_EVENT,
  payload: { event, selectPayMethod, idMethod },
});

export const setValueEntryField = (value) => ({
  // Set the value of an input field
  type: SET_VALUE_ENTRY_FIELD,
  payload: { value },
});

export const setEntryField = (entryField) => ({
  // Set input field
  type: SET_ENTRY_FIELD,
  payload: { entryField },
});

export const setOutputField = (outputField) => ({
  // Set the output field of the result
  type: SET_OUTPUT_FIELD,
  payload: { outputField },
});

export const setExchangeAmount = (amount) => ({
  type: SET_EXCHANGE_AMOUNT,
  payload: { amount },
});
