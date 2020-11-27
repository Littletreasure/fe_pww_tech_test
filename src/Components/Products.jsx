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
<div>
  <p>Products</p>
  {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="products">
            {products.map((product) => {
              return (
                <div className="product" key={product.key}>
                  
                    <p>{product.name}</p>
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