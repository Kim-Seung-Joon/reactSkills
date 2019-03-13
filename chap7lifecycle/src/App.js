import React, { Component } from "react";
import LifeCycleSample from "./lifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000"
  };

  _handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };
  render() {
    return (
      <div>
        <button onClick={this._handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
