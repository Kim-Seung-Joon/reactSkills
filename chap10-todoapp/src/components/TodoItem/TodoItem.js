import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class TodoItem extends Component {
  render()  {

    // done= 완료, children = 일정한 정보, onToggle= 일정완료의 상태변화, onRemove= 삭제
    // 미리 아래의 4개관련해서 this.props를 받아놓으면 아래에서 this.props.onToggle처럼 길게 쓸 필요가 없다(비구조화할당 이라고 한다.)

    const {done,children,onToggle,onRemove} = this.props;
    return(
      <div className={cx('todo-item')} onClick={onToggle}>
        <input type="checkbox" checked={done} readOnly className = {cx('tick')}/>
        <div className={cx('text',{done})}>{children}</div>
        <div className={cx('delete')} onClick={onRemove}>[삭제]</div>
      </div>
    )
  }
}


export default TodoItem;