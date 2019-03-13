import React, { Component } from "react";
import "./App.css";
import SassComponent from "./SassComponent";
import CSSModule from "./CssModule";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSModule />
        <StyledComponent/>
      </div>
    );
  }
}

export default App;
