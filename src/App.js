import React, { Component } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products"
import "./css/styles.css";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}
}

export default App;
