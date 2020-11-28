import React, { Component } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products"
import ProductsType from "./Components/ProductsType";
import "./css/styles.css";

class App extends Component {

state = {
  type: false
}

handleTypeChange = event => {
  console.log(event);
  this.setState({type: true})
}
  render() {
    const {type} = this.state;
  return (
    <div className="App">
      <Header />
      {!type ? (
        <Products handleTypeChange={this.handleTypeChange} /> )
        : (
          <ProductsType />
        )
      }
      
    </div>
  );
}
}

export default App;
