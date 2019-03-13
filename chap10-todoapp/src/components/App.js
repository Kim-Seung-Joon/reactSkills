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

  //to do item Toggle(수정, 삭제?)

  _handleToggle = (id) => {
    // todos는 내가 할 일을 문자로 적어놓은 텍스트와, 완료/진행 중인 상태값, 그리고 순서번호인 아이디가 들어있는 배열
    const {todos} = this.state;
    // 그래서 인덱스를 찾으려면 아이디를 찾으면 된다
    const index = todos.findIndex(todo => todo.id ===id);

    // 찾은 toggle의 done(T/F)의 값을 반전시킴
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index+1, todos.length)
      ]
    })
  }

  _handleRemove = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      // toggle이랑 거의 같은데 토글은 진행/완료(T/F) 값을 변경해서 넣어주는거고
      // 삭제는 인덱스를 찾아서 지운 것!
      todos: [
        ...todos.slice(0,index),
        ...todos.slice(index+1,todos.length)
      ]
    });
  }


  render() {
    // 초기 state가 2개 존재하므로 받는값도 2개이다.

   const {input,  todos} = this.state;
   const {
     _handleChange,
     _handleInsert,
     _handleToggle,
     _handleRemove
   } = this;
    return (
      <div>
        <PageTemplate>
          <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input}/>
          <TodoList todos={todos} onToggle={_handleToggle} onRemove={_handleRemove}/>
        </PageTemplate>
      </div>
    );
  }
}

export default App;
