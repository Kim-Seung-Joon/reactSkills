import React, { Component } from 'react';

class IterationSample extends Component {

  state = {
    names:["왕건", "궁예", "견훤", "석총"],
    name: ''
  };

  _handleChange = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  // concat을 사용하는이유는
  // push를 사용하면 기존의 배열값이 변경되기 때문에 state값 설정 정책에 위반되서 안된다.!

  _handleInstert = () =>{
    this.setState({
      names: this.state.names.concat(this.state.name),
      name:''
    })
  }

  _handleRemove = (index) =>{
    const {names} = this.state;

    this.setState({
      // names: [
      //   ...names.slice(0,index),
      //   ...names.slice(index+1,names.length)
      // ]
      names: names.filter((item,i)=> i !==index)
    });
  }

  render() {

    //const names = ["왕건","궁예","견훤","석총"];

    // 보통 map 컨테이너를 사용할때는 그 값을 받을 변수와 key값을 같이 설정해주어야 한다.
    // 만약 key값을 설정하지 않고 하면, 콘솔창에서 오류가 난다
    // key값은 그 map의 index(순서)를 써도 무방하다.
    // const nameList = names.map((name,index)=>(<li key={index}>{name}</li>));

    const nameList = this.state.names.map(
      (name,index)=>  (<li 
                        key={index}
                        onDoubleClick={() => this._handleRemove(index)}>
                        {name}
                      </li>
                    )
    );
  
    return (
      <div>
        <input
        onChange={this._handleChange}
        value={this.state.name}>
        </input>
        <button onClick={this._handleInstert}>추가하기</button>

        <h2>리스트 목록</h2>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}

export default IterationSample
