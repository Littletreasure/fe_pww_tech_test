import React, { Component } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products"
import "./css/styles.css";
import * as api from "./utils/api";
const { groupBy } = require("./utils/functions");

class App extends Component {

state = {
  products: [],
  keys: [],
  group: false,
  isLoading: true,
  
}

componentDidMount() {
  console.log("app mounted");
    api.getProducts().then(products => {
      this.setState({products, isLoading: false})
    })
  }

  

handleGroupChange = event => {
  api.getProducts().then(products => {
      const productsGroup = groupBy(products);
      const keys = Object.keys(productsGroup);
      this.setState({products: productsGroup, keys, isLoading: false, group: true})
    })
  
}
  render() {
    const {group, products, keys, isLoading} = this.state;
  return (
    <div className="App">
      <Header />
      { isLoading ? (
          <p className="loading">Loading ...</p>
        ) : !group ? (
          <div className="margin">
            <h1>Product List</h1>
        <Products products={products} handleGroupChange={this.handleGroupChange} group={group} />
        </div> )
        : (
          <div className="margin">
            <h1>Products by Type</h1>
          {keys.map(key => {
const keyArr = products[key];
return (
  <div className="productGroup" key={key}>
<p className="keyTitle">{key}</p>
<Products products={keyArr} group={group} />
</div>
)
          })}
          </div>
        )
      }
      
    </div>
  );
}
}

export default App;
