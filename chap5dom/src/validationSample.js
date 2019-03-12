import React, { Component } from 'react'
import './validationSample.css'

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: true,
    validated: true
  }

  _handleChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }

  _handleButtonClick = () =>{
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  }

  render() {
    return (
      <div>
        <input
        type="password"
        value={this.state.password}
        onChange={this._handleChange}
        className= {this.state.clicked ? (this.state.validated ? 'success' : 'failed') :''}
        />
        <p>{this.state.password}이 입력되고있습니다.</p>
        <button onClick={this._handleButtonClick}>검증하기</button> 
      </div>
    )
  }
}

export default ValidationSample
