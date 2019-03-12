import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends Component {
  static defalutProps = {
    name: " 기본이름",
    age: "22"
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };

  // constructor(props)  {
  //   super(props);
  //   this.state = {
  //     number: 0
  //   }
  // }

  state = {
    number: 0
  };

  render() {
    return (
      <div>
        <p>컴포넌트2의 이름은 {this.props.name} 입니다.</p>
        <p>나이는 {this.props.age}입니다.</p>
        <p>숫자 : {this.state.number}</p>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1
            });
          }}
        >
          버튼클릭
        </button>
      </div>
    );
  }
}


export default MyComponent2;