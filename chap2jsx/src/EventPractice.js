import React, { Component } from 'react'

class EventPractice extends Component {
  
  state = { 
    message: '',
    username: ''
  }

  // 화살표함수를 안쓰면 생성자에서 바인딩 정의 해야됨!
  // constructor(props)  {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: ''
  //   })
  // }

  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value
  //   })
  // }

  handleClick = () =>{
    alert(this.state.username+ ': ' +this.state.message);
    this.setState({
      message:'',
      username: ''
    })
  }

  handleChange = (e) =>{
    this.setState({
      // message:e.target.value
      [e.target.name] : e.target.value
    })
  }

  // 만약 페이지에서 엔터키를 누르는 이벤트를 하게되면
  // handleClick()를 호출해라 !
  handleKeyPress = (e) =>{
    if(e.key === 'Enter')  {
      this.handleClick();
    }
  }

  render() {
    return (
      // <div>
      //   <h1>이벤트 관련 연습하기!</h1>
      //   <input
      //   type="text"
      //   name="message"
      //   placeholder="아무 값이나 입력하세요"
      //   // value={this.state.message}
      //   // onChange={
      //   //   (e) => {
      //   //       this.setState({
      //   //         message: e.target.value
      //   //       })
      //   //   }
      //   // }
      //   onChange={this.handleChange}
      //   />
      //   {/* <button onClick={
      //     () =>{
      //       alert(this.state.message);
      //       this.setState({
      //         message:''
      //       })
      //     }
      //   }>
      //   확인하기
      //   </button> */}
      //   <button onClick={this.handleClick}>버튼 클릭</button>
      // </div>

      <div>
        <h1>이벤트 연습하기</h1>
        <input
        type="text"
        name="username"
        placeholder="유저명"
        value={this.state.username}
        onChange={this.handleChange}/>
        <input
        type="text"
        name="message"
        placeholder="아무값이나 입력해보세요"
        value={this.state.message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>클릭</button>
      </div>

    )
  }
}

export default EventPractice;
