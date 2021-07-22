import { instance } from "./instance";

export const involveAPI = {
  getPayMethods() {
    return instance.get("/payMethods").then((response) => response.data);
  },
};
