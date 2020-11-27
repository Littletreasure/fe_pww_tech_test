import axios from "axios";

export const getProducts = () => {
  return axios.get("https://pww-test.herokuapp.com/api/products")
  .then(response => {
    
    return response.data.products;
  })
}