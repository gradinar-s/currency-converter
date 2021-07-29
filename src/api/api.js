import { instance } from "./instance";

export const involveAPI = {
  getPayMethods() {
    return instance.get("/payMethods").then((response) => response.data);
  },
  calculace(params) {
    const { name, valueInput, ipm, wpm } = params;
    return instance
      .get(
        `/payMethods/calculate?base=${name}&amount=${valueInput}&invoicePayMethod=${ipm}&withdrawPayMethod=${wpm}`
      )
      .then((response) => response.data);
  },
};
