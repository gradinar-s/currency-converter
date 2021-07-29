import {
  initializeApp,
  setExchangeAmount,
  setPayMethods,
  setProgressLoading,
} from "../actionCreators/currencyExchangeAC";
import { involveAPI } from "../../api/api";

export const initializeAppTC = () => async (dispatch) => {
  const initialized = dispatch(getPayMethodsTC());
  await Promise.all([initialized]);
  dispatch(initializeApp());
};

export const getPayMethodsTC = () => async (dispatch) => {
  const data = await involveAPI.getPayMethods();
  dispatch(setPayMethods(data));
};

export const calculateExchangeAmountTC = (params) => async (dispatch) => {
  dispatch(setProgressLoading(true)); // Set the state of the start of calculations
  const data = await involveAPI.calculace(params);
  dispatch(setExchangeAmount(data.amount));
  dispatch(setProgressLoading(false)); // Set the state of the end of calculations
};
