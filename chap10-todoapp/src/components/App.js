import React, { Component } from "react";
import PageTemplate from "./PageTemplate/PageTemplate";
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class App extends Component {

  state = {

    // 아무것도 없는 인풋상태와
    // 맨처음에 페이지를 보여줄때 디폴트값으로 2개정도는 있어야 하므로 1개의 임무완료값과 1개의 진행중인 값을 배열을 통해서 넣어준다.
    input: '',
    todos:  [
      {id: 0, text: '벨로퍼트와 함께하기', done: true},
      {id: 1, text: '궁예보기', done:false}
    ]
  }

  // id(사실상 인덱스)의 초기값을 1로주고 계속 1씩 증가시킴

  id  =1
  _getId = () =>{
    return ++this.id;
  }

  _handleChange = (e) =>  {
    const {value} = e.target;
    this.setState({
      input: value
    });
  }

  // 새로운 할일을 추가하는 함수
  _handleInsert = () =>{
    
    // 상태는 할일, 들어갈 문장 이렇게 2개가 있다.
    const {todos,input} = this.state;

    // 새로운할일에는 내가 입력한 텍스트가 들어가고, done은 안했기 때문에 false고, 아이디는 내가 처음에 1로주었던것보다는 증가된 값이 들어간다.
    const newTodo = {
      text:input,
      done: false,
      id: this._getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input:''
    })
  }


  render() {
    // 초기 state가 2개 존재하므로 받는값도 2개이다.

   const {input,  todos} = this.state;
   const {
     _handleChange,
     _handleInsert
   } = this;
    return (
      <div>
        <PageTemplate>
          <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input}/>
          <TodoList todos={todos}/>
        </PageTemplate>
      </div>
    );
  }
}

export default App;
