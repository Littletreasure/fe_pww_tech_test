import React, { Component } from "react";
import Sort from "./Sort";
import "../css/styles.css";
import * as api from "../utils/api";
const { sortBy } = require("../utils/functions");

class Products extends Component {
  state = {
    products: [],
    isLoading: true,
    sort_by: "",
    order: ""
  }

  componentDidMount() {
    api.getProducts().then(products => {
      this.setState({products, isLoading: false})
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, products } = this.state;
    const changesort = prevState.sort_by !== sort_by;
    const changeorder = prevState.order !== order;
    
    if (changesort || changeorder) {
      this.setState({ products: sortBy(sort_by, order, products) });
    } 
  }

  handleChange = (event) => {
    
    const { value, id, name } = event.target;
    if (id === "sortBy") {
      this.setState({ sort_by: value });
    } else if (name === "order") {
      this.setState({ order: value });
    } 
  };

  render() {
    const {products, isLoading} = this.state;
    return (
<div className="products">
  <h1>Product List</h1>
  <Sort handleChange={this.handleChange} handleTypeChange={this.props.handleTypeChange} />
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