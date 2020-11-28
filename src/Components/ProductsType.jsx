import React, { Component } from "react";
import Sort from "./Sort";
import "../css/styles.css";
import * as api from "../utils/api";
const { sortBy, groupBy } = require("../utils/functions");

class ProductsType extends Component {
  state={
  products: null,
  keys: [],
  isLoading: true
  }

  componentDidMount() {
    api.getProducts().then(products => {
      const productsType = groupBy(products);
      const keys = Object.keys(productsType);
      this.setState({products: productsType, keys, isLoading: false})
    })
  }
  render() {
    const {products, keys, isLoading} = this.state;
    console.log(keys)
    return (
      <div className="productsType">
        <h1>Products by Type</h1>
      {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="productsOuter">
          {keys.map(key => {
            const keyArr = products[key];
            
            return (
              <div className="productsInner">
                <h2 className="keyTitle">{key}</h2>
              <div className="productsContainer">
                {keyArr.map(product => {
                  return (
                    <div className="productTile" key={product.key}>
                    <h2>{product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price['value']} {product.price['currency']}</p>
                    <p>Type: {product.type}</p>
                    <p>Department: {product.department}</p>
                    <div className="row">
                    <p>ID: {product.id}</p>
                    <p>Weight: {product.weight}</p>
                    </div>
                    
                </div>
                  )
                })}
              </div>
              </div>
            )
          })}
</div>
         
         
        )}
      </div>
    )
  }
}

export default ProductsType