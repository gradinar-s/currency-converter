import {
  INITIALIZE_APP,
  SET_ENTRY_FIELD,
  SET_EXCHANGE_AMOUNT,
  SET_OUTPUT_FIELD,
  SET_PAY_METHODS,
  SET_PROGRESS_LOADING,
  SET_USER_EVENT,
  SET_VALUE_ENTRY_FIELD,
} from "./types/currencyExchangeTypes";

const initialState = {
  initialApp: false,
  isProgressLoading: false,
  payMethods: [],
  entryField: "",
  valueEntryField: "",
  outputField: "",
  amount: "",
  invoice: { selectPayMethods: "", idMethod: "" },
  withdraw: { selectPayMethods: "", idMethod: "" },
};

export default function currencyExchangeReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_APP: {
      return { ...state, initialApp: true };
    }
    case SET_PROGRESS_LOADING: {
      return { ...state, isProgressLoading: action.payload.value };
    }
    case SET_VALUE_ENTRY_FIELD: {
      return { ...state, valueEntryField: action.payload.value };
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
          value: action.payload.value,
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
