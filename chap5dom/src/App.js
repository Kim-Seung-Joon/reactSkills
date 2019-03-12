import React, { Component } from 'react';
// import ValidationSample from './validationSample';
import ScrollBox from './scrollBox';


class App extends Component {
  render() {
    return (
      // <ScrollBox />
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox._scrollToButton()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
