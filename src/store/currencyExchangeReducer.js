import axios from "axios";
import { involveAPI } from "../api/api";

const INITIALIZE_APP = "INITIALIZE_APP";
const SET_ENTRY_FIELD = "SET_ENTRY_FIELD";
const SET_OUTPUT_FIELD = "SET_OUTPUT_FIELD";
const SET_PAY_METHODS = "SET_PAY_METHODS";
const SET_USER_EVENT = "SET_USER_EVENT";
const SET_EXCHANGE_AMOUNT = "SET_EXCHANGE_AMOUNT";

const initialState = {
  initialApp: false,
  payMethods: [],
  entryField: "",
  outputField: "",
  amount: "",
  invoice: {
    selectPayMethods: "",
    idMethod: "",
  },
  withdraw: {
    selectPayMethods: "",
    idMethod: "",
  },
};

export default function currencyExchangeReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_APP: {
      return { ...state, initialApp: true };
    }
    case SET_ENTRY_FIELD: {
      return { ...state, entryField: action.payload.entryField };
    }
    case SET_OUTPUT_FIELD: {
      return { ...state, outputField: action.payload.outputField };
    }
    case SET_PAY_METHODS: {
      return { ...state, payMethods: action.payload.payMethods };
    }
    case SET_USER_EVENT: {
      return {
        ...state,
        [action.payload.event]: {
          selectPayMethods: action.payload.selectPayMethods,
          idMethod: action.payload.idMethod,
        },
      };
    }
    case SET_EXCHANGE_AMOUNT: {
      return { ...state, amount: action.payload.amount };
    }
    default:
      return state;
  }
}

// ==================================================================
// Action creators ==================================================
export const initializeApp = () => ({
  type: INITIALIZE_APP,
});

export const setPayMethods = (payMethods) => ({
  type: SET_PAY_METHODS,
  payload: { payMethods },
});

export const setUserEvent = (event, selectPayMethods, idMethod) => ({
  type: SET_USER_EVENT,
  payload: { event, selectPayMethods, idMethod },
});

export const setEntryField = (entryField) => ({
  type: SET_ENTRY_FIELD,
  payload: { entryField },
});

export const setOutputField = (outputField) => ({
  type: SET_OUTPUT_FIELD,
  payload: { outputField },
});

export const setExchangeAmount = (amount) => ({
  type: SET_EXCHANGE_AMOUNT,
  payload: { amount },
});

// ==================================================================
// Thunk creators ===================================================
export const initializeAppTC = () => async (dispatch) => {
  const initialized = dispatch(getPayMethodsTC());
  await Promise.all([initialized]);
  dispatch(initializeApp());
};

export const getPayMethodsTC = () => async (dispatch) => {
  const data = await involveAPI.getPayMethods();
  dispatch(setPayMethods(data));
};

export const calculateExchangeAmount = (params) => async (dispatch) => {
  const { name, valueInput, ipm, wpm } = params;
  const data = await axios
    .get(
      `https://involve.software/test_front/api/payMethods/calculate?base=${name}&amount=${valueInput}&invoicePayMethod=${ipm}&withdrawPayMethod=${wpm}`
    )
    .then((response) => response.data)
    .catch((e) => console.log(e));

  dispatch(setExchangeAmount(data.amount));
};
