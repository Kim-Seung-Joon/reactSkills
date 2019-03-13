import React, {Component} from 'react';
import TodoItem from '../TodoItem';



//TodoList는 todoitem을 보여주는 기능밖에 하는 게 없어서
//따로 추가할 것이 없다.

class TodoList extends Component{
  render()  {

    const {todos,onToggle} = this.props;

    const todoList = todos.map(
      todo => (
        <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={()=> onToggle(todo.id)}>
          {todo.text}
        </TodoItem>
        
      )
    )
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoList;