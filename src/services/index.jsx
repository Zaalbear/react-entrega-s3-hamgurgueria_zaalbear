import axios from "axios";

export const productsApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 10 * 1000,
});
