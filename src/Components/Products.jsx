import React, { Component } from "react";
import Sort from "./Sort";
import "../css/styles.css";
const { sortBy } = require("../utils/functions");

class Products extends Component {
  state = {
    products: [],
    isLoading: true,
    sort_by: "",
    order: ""
  }

  componentDidMount() {
   console.log("products mounted")
      this.setState({products: this.props.products, isLoading: false})
    
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
  <Sort handleChange={this.handleChange} handleGroupChange={this.props.handleGroupChange} handleBackClick={this.props.handleBackClick} group={this.props.group} />
  {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="productsContainer">
            {products.map((product) => {
              return (
                <div className="productTile" key={product.key}>
                    <h2>{product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price['value'].toFixed(2)} {product.price['currency']}</p>
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