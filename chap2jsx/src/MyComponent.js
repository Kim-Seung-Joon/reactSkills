import React, { Component } from 'react'
import PropTypes from 'prop-types';

class MyComponent extends Component {
  // defaultProps를 설정하는 방법
  // 은2가지가 있습니다.
  static defaultProps = {
    name:'기본이름'
  }

  static propTypes = {
    // 네입의 prop타입은 문자열로 설정한다
    name: PropTypes.string,
    // age는 number고 반드시 필요한 것이다.
    age: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
      <p>안녕하세요 제 이름은 {this.props.name}</p>
      <p>나이는 {this.props.age}입니다.</p>
      </div>
    )
  }
}

// MyComponent.defaultProps = {
//   name: '기본으로 설정된 이름'
// }


// name의 prop타입을 스트링으로 지정!
MyComponent.propTypes = {
  name: PropTypes.string
}

export default MyComponent;


