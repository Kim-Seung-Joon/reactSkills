import React, { Component } from 'react'

class lifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null;

  constructor(props)  {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    if(nextProps.color !== prevState.color) {
      return {
        color: nextProps.color
      };

    }

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()를 불러옴')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate호출',nextProps,nextState);
    //만약 숫자의 마지막자리가 4이면 렌더링 수행을 안함
    return nextState.number % 10 !==4;
  }

  componentWillUnmount()  {
    console.log('componentWillUnmount()호출')
  }

  //handleClick를 수행하면 number의 값이 1씩 증가한다.

  _handleClick = () =>{
    this.setState({
      number: this.state.number +1
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color)  {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps,prevState,snapshot)  {
    console.log('componentDidUpdate',prevProps,prevState);

    if(snapshot)  {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }


  render() {
    console.log('랜더가 수행됨');

    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this._handleClick}>더하기</button>
      </div>
    )
  }
}

export default lifeCycleSample;
