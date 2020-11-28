import React, { Component } from "react";
import * as api from "../utils/api";

class Products extends Component {
  state = {
products: [],
isLoading: true
  }

  componentDidMount() {
    api.getProducts().then(products => {
      console.log(products);
      this.setState({products, isLoading: false})
    })
  }
  render() {
    const {products, isLoading} = this.state;
    return (
<div className="products">
  <h1>Product List</h1>
  {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="productsContainer">
            {products.map((product) => {
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
              );
            })}
          </div>
        )}
</div>
    )
  }
}

export default Products;