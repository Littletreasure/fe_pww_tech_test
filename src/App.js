import React, { Component } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products"
import "./css/styles.css";
import * as api from "./utils/api";
const { groupBy} = require("./utils/functions");

class App extends Component {

state = {
  products: [],
  productsGroup: [],
  keys: [],
  group: false,
  group_by: "",
  isLoading: true,
  
}

componentDidMount() {
  console.log("app mounted");
    api.getProducts().then(products => {
      this.setState({products, isLoading: false})
    })
  }

  handleBackClick = event => {
    this.setState({group: false});
  }

handleGroupChange = event => {
  api.getProducts().then(products => {
      const productsGroup = groupBy(event.target.value, products);
      const keys = Object.keys(productsGroup);
      let group_by = event.target.value;
      let j = group_by.charAt(0).toUpperCase();
    group_by = j + group_by.substr(1);
      this.setState({productsGroup: productsGroup, keys, isLoading: false, group: true, group_by})
    })
  
}
  render() {
    const {group, group_by, products, productsGroup, keys, isLoading} = this.state;
    
  return (
    <div className="App">
      <Header />
      { isLoading ? (
          <p className="loading">Loading ...</p>
        ) : !group ? (
          <div className="margin">
            <h1>Product List</h1>
        <Products products={products} handleGroupChange={this.handleGroupChange} group={group}  />
        </div> )
        : (
          <div className="margin">
            <h1>Products by {group_by}</h1>
          {keys.map(key => {
const keyArr = productsGroup[key];
return (
  <div className="productGroup" key={key}>
<p className="keyTitle">{key}</p>
<Products products={keyArr} group={group} handleBackClick={this.handleBackClick} />
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
